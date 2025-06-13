package db

import (
	"github.com/bestWangc/Persona-Finance-AI/backend/backend_ai/config"

	"github.com/redis/go-redis/v9"
)

var cache *redis.Client

func InitCache() error {
	cache_ := redis.NewClient(&redis.Options{
		Addr:     config.Config.Redis.Addr,
		Password: config.Config.Redis.Password,
		DB:       config.Config.Redis.Db,
	})
	cache = cache_

	return nil
}
