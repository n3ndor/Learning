package main

import "fmt"

func main(){
	var accountBalance = 1000.0

	fmt.Println("Welcome to Go Bank!")
	fmt.Println("What do you want to do?")
	fmt.Println("1 Check balance")
	fmt.Println("2 Deposit money")
	fmt.Println("3 Withdraw money")
	fmt.Println("4 Exit")

	var choice int
	fmt.Print("Your choice: ")
	fmt.Scan(&choice)

	if choice == 1 {
		fmt.Println("Your Balance: ", accountBalance)
	} else if choice == 2 {
		fmt.Println("Your deosit: ", accountBalance)
		var depositAmount float64
		fmt.Scan(&depositAmount)
		// accountBalance = accountBalance + depositAmount
		accountBalance += depositAmount
		fmt.Println("Balance updated! New amount: ", accountBalance )
	} else if choice == 3 {
		fmt.Println("Withdrawal amount: ", accountBalance)
		var withdrawalAmount float64
		fmt.Scan(&withdrawalAmount)
		accountBalance -= withdrawalAmount
		fmt.Println("Balance updated! New amount: ", accountBalance )
	} else {
		fmt.Println("Bye!")
	}
}