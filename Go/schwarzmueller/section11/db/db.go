package db

import (
	"database/sql"

	_ "github.com/glebarez/go-sqlite"
)



var DB *sql.DB



func InitDB() {

  db, err := sql.Open("sqlite", "api.db")

  if err != nil {

    panic("Failed to connect to the database")

  }



  DB = db

  DB.SetMaxOpenConns(10)

  DB.SetMaxIdleConns(5)



  createTables()

}



func createTables() {
    createEventsTable := `
    CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        location TEXT NOT NULL,
        dateTime DATETIME NOT NULL,
        user_id INTEGER
    )
    `

    _, err := DB.Exec(createEventsTable)
    if err != nil {
        panic("Failed to create events table: " + err.Error())
    }
}