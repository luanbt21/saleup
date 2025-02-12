package main

import (
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"

	_ "github.com/tursodatabase/libsql-client-go/libsql"
)

func init() {
	dbx.BuilderFuncMap["libsql"] = dbx.BuilderFuncMap["sqlite3"]
}

func main() {
	database := os.Getenv("DATABASE_URL")
	token := os.Getenv("DATABASE_AUTH_TOKEN")

	url := database + "?authToken=" + token

	if database != "" && token == "" {
		log.Fatal("DATABASE_AUTH_TOKEN not set")
	}

	if database == "" {
		fmt.Println("DATABASE_URL not set, using default")
		url = "file:./data.db"
	}

	app := pocketbase.NewWithConfig(pocketbase.Config{
		DBConnect: func(dbPath string) (*dbx.DB, error) {
			if strings.Contains(dbPath, "data.db") {
				return dbx.Open("libsql", url)
			}

			return core.DefaultDBConnect(dbPath)
		},
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
