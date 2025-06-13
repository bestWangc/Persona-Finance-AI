package db

import (
	"context"
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

func ExecTransaction(ctx context.Context, f func(*sql.Tx) error) error {
	tx, err := db.BeginTx(ctx, nil)
	if err != nil {
		return err
	}
	// Defer a rollback in case anything fails.
	defer tx.Rollback()

	if err = f(tx); err != nil {
		return err
	}

	return tx.Commit()
}
