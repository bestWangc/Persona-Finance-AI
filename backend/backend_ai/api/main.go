package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"math/big"
	"runtime"
	"time"

	"github.com/bestWangc/Persona-Finance-AI/backend/backend_ai/config"
	"github.com/bestWangc/Persona-Finance-AI/backend/backend_ai/db"
	"github.com/bestWangc/Persona-Finance-AI/backend/backend_ai/help"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/ethclient"
)

var (
	// workerCount = 8
	workerCount = 4
	taskCh      = make(chan task, workerCount)
)

type task struct {
	ctx        context.Context
	blocksData *types.Block
	tx         *types.Transaction
}

func startWorker() {
	for i := 0; i < workerCount; i++ {
		rpc := config.RoundRPC()
		// todo: close clearup
		go func(rpcAddr string) {
			for {
				cli, err := ethclient.Dial(rpcAddr)
				if err != nil {
					log.Printf("Error start worker %v\n", err)
					time.Sleep(time.Second * 20)
					continue
				}
				for t := range taskCh {
					// fmt.Println("do ", i, t.index)
					safeCall(func() {
						do(cli, t.tx, t.blocksData, t.ctx)
					})
				}
			}
		}(rpc())
	}
}

func safeCall(fn func()) {
	defer func() {
		if r := recover(); r != nil {
			err, ok := r.(error)
			if !ok {
				err = fmt.Errorf("%v", r)
			}
			stack := make([]byte, 1024)
			length := runtime.Stack(stack, true)
			fmt.Printf("[PANIC RECOVER] %v %s\n", err, stack[:length])
		}
	}()
	fn()
}

func RecoverSignerAddress(tx *types.Transaction) (common.Address, error) {
	return (types.NewLondonSigner(tx.ChainId())).Sender(tx)
}

func do(client *ethclient.Client, txS *types.Transaction, blocksData *types.Block, ctx context.Context) {
	from, err := RecoverSignerAddress(txS)
	if err != nil {
		log.Printf(" RecoverSignerAddress error %v\n", err)
	}
	// TODO  write to db
	fmt.Printf("from_:%v ", from.Hex())

}

func syncData(rpcAddr string) {
	fmt.Printf("\nStart syncData  RPC:%v\n ,", rpcAddr)
	client, err := ethclient.Dial(rpcAddr)
	if err != nil {
		log.Printf("listen block error %v\n", err)
		time.Sleep(time.Second * 13)
		return
	}
	fmt.Println("成功建立连接")
	lastProcessNumber := config.Config.LatestblockPeriod
	// 将tx_hash内容写入到数据库里面
	for {
		newestBlock, err := client.BlockNumber(context.Background())
		if err != nil {
			log.Printf(" Client.BlockNumber  block error %v\n", err)
			return
		}
		if lastProcessNumber == 0 {
			lastProcessNumber = newestBlock - uint64(config.Config.LatestblockPeriod)
		}
		if lastProcessNumber > newestBlock-uint64(config.Config.LatestblockPeriod) {
			time.Sleep(time.Second * 13)
			continue
		}
		filterBlock(client, lastProcessNumber)
		lastProcessNumber += 1

		//*监听区块hash的内容*//
		// models.SetBlockLastProcess(lastProcessNumber)
		time.Sleep(time.Second * 13)
	}
}

func filterBlock(client *ethclient.Client, blockNumber uint64) {
	startTime := time.Now()
	defer func() {
		fmt.Println("spend", blockNumber, time.Now().Sub(startTime))
	}()

	// 获取区块数据
	blocksData, err := client.BlockByNumber(context.Background(), big.NewInt(int64(blockNumber)))
	if err != nil {
		log.Printf(" BlockByNumber  block error %v\n", err)
		return
	}

	fmt.Printf("filter block[%d] tx[%d] time: %v\n", blockNumber, len(blocksData.Transactions()), time.Now().Format("2006-01-02 15:04:05"))
	ctx := context.Background()
	for _, txData := range blocksData.Transactions() {
		tk := task{
			ctx:        ctx,
			tx:         txData,
			blocksData: blocksData,
		}
		taskCh <- tk
	}
}

func main() {
	flag.Parse()
	help.FatalIfErr(config.LoadConfig())
	help.FatalIfErr(db.InitDb())
	help.FatalIfErr(db.InitCache())

	r := setupRouter()

	startWorker()
	rpc := config.RoundRPC()
	go safeCall(func() {
		syncData(rpc())
	})

	r.Run(config.Config.ApiServeAddress)
}
