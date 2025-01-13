package main

import (
	"fmt"

	"example.com/bank/fileops"
	"github.com/Pallinder/go-randomdata"
)

const accountBalanceFile = "balance.txt"



func main(){
	var accountBalance, err = fileops.GetFloatFromFile(accountBalanceFile)

  if err != nil {
    fmt.Println("ERROR")
    fmt.Println(err)
    fmt.Println("-----------")
    return
  }


	fmt.Println("Welcome to Go Bank!")
  fmt.Println("Find us 24/7", randomdata.PhoneNumber())

	for {
    presentOptions()

    var choice int
    fmt.Print("Your choice: ")
    fmt.Scan(&choice)

    switch choice {
      case 1: fmt.Println("Your Balance: ", accountBalance)
      
    case 2:
      fmt.Print("Enter deposit amount: ")
      var depositAmount float64
      fmt.Scan(&depositAmount)
  
      if depositAmount <= 0 {
          fmt.Println("Invalid amount. Please try again.")
          continue
      }
      accountBalance += depositAmount
      fmt.Println("Deposit successful! New balance:", accountBalance)
      fileops.WriteFloatToFile(accountBalance, accountBalanceFile)
  
  case 3:
      fmt.Print("Enter withdrawal amount: ")
      var withdrawalAmount float64
      fmt.Scan(&withdrawalAmount)
  
      if withdrawalAmount <= 0 {
          fmt.Println("Invalid amount. Please try again.")
          continue
      }
      if withdrawalAmount > accountBalance {
          fmt.Println("Insufficient funds. Please try again.")
          continue
      }
      accountBalance -= withdrawalAmount
      fmt.Println("Withdrawal successful! New balance:", accountBalance)
      fileops.WriteFloatToFile(accountBalance, accountBalanceFile)
      
      default:
        fmt.Println("Bye!")
        fmt.Println(("Thanks for using our service"))
        return

    }
	}
}