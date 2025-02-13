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

  createUsersTable :=  `
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
    )
  ` 

  _, err := DB.Exec(createUsersTable)
  if err != nil {
    panic("Could not create userss table: " + err.Error())
}

  createEventsTable := `
  CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      location TEXT NOT NULL,
      dateTime DATETIME NOT NULL,
      user_id INTEGER,
      FOREIGN KEY(users_id) REFERENCES users(id)
  )
  `

  _, err = DB.Exec(createEventsTable)
  if err != nil {
      panic("Failed to create events table: " + err.Error())
  }

  createRegistrationTable := `
  CREATE TABLE IF NOT EXIST registration (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id INTEGER,
    user_id INTEGER,
    FOREIGN KEY(event_id) REFERENCES events(id),
    FOREIGN KEY(user_id) REFERENCES users(id),
  )
  `

  _, err = DB.Exec(createRegistrationTable)
  if err != nil {
    panic("Could not create registrations table.")
  }
}