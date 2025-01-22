package main

import "fmt"


func main(){
	prices := []float64{10.99, 8.99}
	fmt.Println(prices)
	// prices[2] = 11.99 this crashes runtime error
	updatedPrices := append(prices, 5.99) //append= creates a new array
	
	// updatedPrices = updatedPrices[1:] //no built in function for substract

	fmt.Println(prices)
	fmt.Println(updatedPrices)
}

// func main() {
// 	var productNames [4]string = [4]string{"A Book"}
// 	prices := [4]float64{10.99, 9.99, 45.99, 20.0}
// 	fmt.Println(prices)

// 	productNames[2] = "A Carpet"

// 	fmt.Println(productNames)
	
// 	fmt.Println(prices[2])

// 	featuredPrices := prices[1:3] //creating a slice. [start:end], [:] = all elements
// 	highlightedPrices := featuredPrices[:1] //slice of slice
// 	fmt.Println(highlightedPrices)
// 	fmt.Println(len(prices), cap(prices)) // length 4, capacity 4
// 	fmt.Println(len(highlightedPrices), cap(highlightedPrices)) // 1 3 
// }