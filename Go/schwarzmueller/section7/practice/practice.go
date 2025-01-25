package main

import "fmt"

type Product struct {
	id string
	title string
	price float64
}

func main() {
	hobbies := [3]string{"Reading", "Cooking", "Gaming"}
	fmt.Println(hobbies)

	fmt.Println(hobbies[0])
	fmt.Println(hobbies[1:])

	mainHobbies := hobbies[:2]
	fmt.Println(mainHobbies)

	mainHobbies = mainHobbies[1:3]
	fmt.Println(mainHobbies)

	courseGoals := []string{"Learn Go", "Learn all the basics"}
	fmt.Println(courseGoals)

	courseGoals[1] = "Learn all the details"
	courseGoals = append(courseGoals, "Learn all the basics")
	fmt.Println(courseGoals)

	products := []Product{
		{"first-product", "A first Product", 12.99},
		{"second-product", "A Second Product", 124.99},
	}
	fmt.Println(products) 
	newProduct := Product{"third-product", "A Third Product", 17.99}
	products = append(products, newProduct)
	fmt.Println(products)
}