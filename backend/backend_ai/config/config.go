package config

import (
	"bytes"
	"errors"
	"flag"
	"os"
	"strings"

	"github.com/goccy/go-yaml"
)

var (
	Config     = new(ConfigT)
	configFile = flag.String("config", "", "specify configuration file path")
)

type ConfigT struct {
	NodeUrl                   string      `yaml:"node_url"`
	ChainId                   uint8       `yaml:"chain_id"`
	IndexerEndpoint           string      `yaml:"indexer_endpoint"`
	IndexerFromVersionDefault uint64      `yaml:"indexer_from_version_default"`
	DatabaseUrl               string      `yaml:"database_url"`
	Redis                     RedisConfig `yaml:"redis"`
	DexAccount                string      `yaml:"dex_account"`
	UsdcAssetType             string      `yaml:"usdc_asset_type"`
	ApiServeAddress           string      `yaml:"api_serve_address"`
	ApiServeReleaseMode       bool        `yaml:"api_serve_release_mode"`
	ApiDisableConsoleColor    bool        `yaml:"api_disable_console_color"`
	ServeSwaggerUI            bool        `yaml:"serve_swagger_ui"`
}

type RedisConfig struct {
	Addr     string `yaml:"addr"`
	Password string `yaml:"password"`
	Db       int    `yaml:"db"`
}

func LoadConfig() error {
	content, err := os.ReadFile(*configFile)
	if err != nil {
		return err
	}

	if err = yaml.Unmarshal(content, Config); err != nil {
		return err
	}

	return validate()
}

func validate() error {
	if len(bytes.NewBufferString(Config.DexAccount).Bytes()) > 66 {
		return errors.New("config: 'dex_account' invalid")
	}
	Config.DexAccount = strings.ToLower(Config.DexAccount)
	return nil
}
