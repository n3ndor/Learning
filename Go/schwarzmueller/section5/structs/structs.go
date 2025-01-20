package main

import (
	"errors"
	"fmt"
	"time"
)

type user struct {
	firstName string
	lastName string
	birthdate string
	createdAt time.Time
}

func (u user) outputUserDetails(){
	fmt.Println(u.firstName, u.lastName, u.birthdate)
}

func (u *user) clearUserName(){
	u.firstName = ""
	u.lastName = ""
	u.birthdate = ""
}

func newUser(firstName, lastName, birthdate string) (*user, error) {
	if firstName == "" || lastName == "" || birthdate == "" {
		return nil, errors.New("first name, last name and birthdate are required")
	}

	return &user{
		firstName: firstName,
		lastName: lastName,
		birthdate: birthdate,
		createdAt: time.Now(),
	}, nil
}

func main() {
	userfirstName := getUserData("Please enter your first name: ")
	userlastName := getUserData("Please enter your last name: ")
	userbirthdate := getUserData("Please enter your birthdate (MM/DD/YYYY): ")

	var appUser *user

	appUser, err := newUser(userfirstName, userlastName, userbirthdate)

	if err!= nil {
		fmt.Println(err)
	}

	// outputUserDetails(&appUser)
	appUser.outputUserDetails()
	appUser.clearUserName()
	appUser.outputUserDetails()
}


func getUserData(promptText string) string {
	fmt.Print(promptText)
	var value string
	fmt.Scanln(&value)
	return value
}
