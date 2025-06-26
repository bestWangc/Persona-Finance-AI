package db

import (
	"database/sql"

	"github.com/bestWangc/Persona-Finance-AI/backend/backend_ai/config"

	_ "github.com/lib/pq"
)

var db *sql.DB

func InitDb() error {
	db_, err := sql.Open("postgres", config.Config.DatabaseUrl)
	if err != nil {
		return err
	}
	db = db_

	return nil
}
