package main

import "fmt"

func main(){
	prices := []float64{10.99, 8.99}
	fmt.Println(prices)

	prices = append(prices, 5.99, 15.99, 27.99 )
	fmt.Println(prices)

	discoutPrices := []float64{101.99, 121.99, 137.99}
	prices = append(prices, discoutPrices...)
	fmt.Println(prices)

}