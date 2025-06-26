package config

import (
	"flag"
	"os"
	"sync/atomic"

	"github.com/goccy/go-yaml"
)

var (
	Config     = new(ConfigT)
	configFile = flag.String("config", "", "specify configuration file path")
)

type RedisConfig struct {
	Addr     string `yaml:"addr"`
	Password string `yaml:"password"`
	Db       int    `yaml:"db"`
}

func RoundRPC() func() string {
	var n uint64
	return func() string {
		tn := atomic.LoadUint64(&n)
		atomic.AddUint64(&n, 1)
		return Config.RPCS[int(tn)%len(Config.RPCS)]
	}
}

type ConfigT struct {
	ChainId           uint8       `yaml:"chain_id"`
	DatabaseUrl       string      `yaml:"database_url"`
	RPCS              []string    `yaml:"rpcs"`
	NftAddress        string      `yaml:"nft_address"`
	ApiServeAddress   string      `yaml:"api_serve_address"`
	Redis             RedisConfig `yaml:"redis"`
	LatestblockPeriod uint64      `yaml:"latestblockPeriod"`
}

func LoadConfig() error {
	content, err := os.ReadFile(*configFile)
	if err != nil {
		return err
	}

	if err = yaml.Unmarshal(content, Config); err != nil {
		return err
	}
	return nil
}
