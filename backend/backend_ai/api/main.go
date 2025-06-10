package main

import (
	"flag"

	"github.com/bestWangc/Persona-Finance-AI/backend/backend_ai/config"
	"github.com/bestWangc/Persona-Finance-AI/backend/backend_ai/db"
	"github.com/bestWangc/Persona-Finance-AI/backend/backend_ai/help"
)

func main() {
	flag.Parse()
	help.FatalIfErr(config.LoadConfig())
	help.FatalIfErr(db.InitDb())
	help.FatalIfErr(db.InitCache())

	r := setupRouter()

	r.Run(config.Config.ApiServeAddress)
}
