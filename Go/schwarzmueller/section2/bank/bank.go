package main

import (
	"errors"
	"fmt"
	"os"
	"strconv"
)

const accountBalanceFile = "balance.txt"

func getBalanceFromFile() (float64, error) {
  data, err := os.ReadFile(accountBalanceFile)

    if err != nil{
      return 1000, errors.New("failed to find balance file")
    }

  balanceText := string(data)
  balance, err := strconv.ParseFloat(balanceText, 64)

    if err != nil{
      return 1000, errors.New("failed to parse stored balance value")
    }

  return balance, nil
}

func writeBalanceToFile(balance float64){
  balanceText := fmt.Sprint(balance)
  os.WriteFile(accountBalanceFile, []byte(balanceText), 0644)
}

func main(){
	var accountBalance, err = getBalanceFromFile()

  if err != nil {
    fmt.Println("ERROR")
    fmt.Println(err)
    fmt.Println("-----------")
    // return
    panic("Can't continue, sorry")
  }


	fmt.Println("Welcome to Go Bank!")

    // for i := 0; i < 2; i++  => this runs only twice, for infinit loop use only for:
	for {
    fmt.Println("What do you want to do?")
    fmt.Println("1 Check balance")
    fmt.Println("2 Deposit money")
    fmt.Println("3 Withdraw money")
    fmt.Println("4 Exit")

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
      writeBalanceToFile(accountBalance)
  
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
      writeBalanceToFile(accountBalance)
      
      default:
        fmt.Println("Bye!")
        fmt.Println(("Thanks for using our service"))
        return

    }
	}
}