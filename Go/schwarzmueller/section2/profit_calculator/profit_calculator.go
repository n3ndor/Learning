package main

import (
	"errors"
	"fmt"
	"os"
)

func main(){
	revenue, err := getUserInput("Revenue: ")
    if err != nil {
      fmt.Println(err)
      // return
      panic(err)
    }
	expenses, err := getUserInput("Expenses: ")
  if err != nil {
    fmt.Println(err)
    return
  }
	taxRate, err := getUserInput("Tax Rate: ")
  if err != nil {
    fmt.Println(err)
    return
  }

	ebt, profit, ratio := calculateFinancials(revenue, expenses, taxRate)

	fmt.Printf("%.1f\n", ebt)
	fmt.Printf("%.1f\n", profit)
	fmt.Printf("%.3f\n", ratio)
  storeResult(ebt, profit, ratio)

}

func storeResult (ebt, profit, ratio float64){
  results := fmt.Sprintf("EBT: %.1f\nProfit: %.1f\nRatio: %.3f\n", ebt, profit, ratio)
  os.WriteFile("results.txt", []byte(results), 0644 )
}

func getUserInput(infoText string) (float64, error) {
	var userInput float64
	fmt.Print(infoText)
	fmt.Scan(&userInput)

	if userInput <= 0 {
		return 0, errors.New("value most be a positive number")
	}


	return userInput, nil
}

func calculateFinancials (revenue, expenses, taxRate float64) (float64, float64, float64) {
	ebt := revenue - expenses
	profit := ebt * (1 - taxRate / 100)
	ratio := ebt / profit
	return ebt, profit, ratio
}
