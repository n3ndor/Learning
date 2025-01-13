package main

import (
	"fmt"
	"math"
)

const inflationRate = 2.5

func main(){
	var investmentAmount float64 
	expectedReturnRate := 5.5
	var years float64


	outputText("Investment Amount: ")
	fmt.Scan(&investmentAmount)
	outputText("Expected Return Rate: ")
	fmt.Scan(&expectedReturnRate)
	outputText("Years: ")
	fmt.Scan(&years)

	futureValue, futureRealValue := calculateFutureValues(investmentAmount, expectedReturnRate, years)

	// futureValue := investmentAmount  *  math.Pow(1 + expectedReturnRate / 100, years)
	// futureRealValue := futureValue / math.Pow(1 + inflationRate / 100 , years)

	// fmt.Println("Future Value: ", futureValue)

	// fmt.Printf("Future Value: %v\n", futureValue)
	// fmt.Printf("Future Value (adjusted for Inflation): %.1f\n", futureRealValue)

	fmt.Printf(`Future Value: %.1f
	Future Value (adjusted for Inflation): %.1f`, futureValue, futureRealValue)
}

func outputText(text string){
	fmt.Print(text)
}

func calculateFutureValues(investmentAmount, expectedReturnRate, years float64) (fv float64, rfv float64) {
	fv = investmentAmount  *  math.Pow(1 + expectedReturnRate / 100, years)
	rfv = fv / math.Pow(1 + inflationRate / 100 , years)
	return fv, rfv
	// return
}