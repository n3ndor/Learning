package main

import "fmt"

type floatMap map[string]float64

func (m floatMap) output(){
	fmt.Println(m)
}

func main() {

	// userName := []string{}

	userName := make([]string, 2, 5) //type, length, capacity
	userName[0] = "Julie"


	userName = append(userName, "Max")
	userName = append(userName, "Manuel")
	fmt.Println(userName)

	// courseRatings := map[string]float64{}
	courseRatings := make(floatMap, 3)
	courseRatings["go"] = 4.7
	courseRatings["react"] = 4.8
	courseRatings["angular"] = 4.4
	// fmt.Println(courseRatings)
	courseRatings.output()

	for index, value := range userName {
		fmt.Println("Index: ", index)
		fmt.Println("Value: ", value)
	}

	for key, value := range courseRatings {
		fmt.Println("Key: ", key)
		fmt.Println("Value: ", value)
	}
}