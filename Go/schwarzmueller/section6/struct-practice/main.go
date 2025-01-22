package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"

	"example.com/note/note"
	"example.com/note/todo"
)

type saver interface {
	Save() error
}

// type displayer interface {
// 	Display()
// }

type outputtable interface{
	saver
	Display()
}

// type outputtable interface{
// 	Save() error
// 	Display()
// }

func main(){

	printSomething(1)
	printSomething(1.5)
	printSomething("Hello")

	title, content := getNoteData()
	todoText := getUserInput("Todo text: ")

	todo, err := todo.New(todoText)

	if err != nil {
		fmt.Println(err)
		return
	}

	userNote, err := note.New(title, content)

	if err != nil {
		fmt.Println(err)
		return
	}

	err = outputData(todo)

	if err != nil {
		return
	}

	outputData(userNote)
}

func printSomething(value interface{}){ //alternatively use any instead if interface{}
	// switch value.(type){
	// case int:
	// 	fmt.Println("Integer: ", value)
	// case float64:
	// 	fmt.Println("Float: ", value)
	// case string:
	// 	fmt.Println(value)
	// }

	intVal, ok := value.(int)
	if ok {
		fmt.Println("Integer: ", intVal)
		return
	}

	floatVal, ok := value.(float64)
	if ok {
		fmt.Println("Integer: ", floatVal)
		return
	}

	strVal, ok := value.(string)
	if ok {
		fmt.Println("Integer: ", strVal)
		return
	}
}

func outputData(data outputtable) error {
	data.Display()
	return saveData(data)
}

func saveData(data saver) error {
	err := data.Save()

	if err != nil {
		fmt.Println("Saving the note failed.")
		return err
	}

	fmt.Println("Saving the note succeeded!")
	return nil
}

func getNoteData()(string, string){
	title:= getUserInput("Note title:")
	
	content := getUserInput("Note content:")
	
	return title, content
}

func getUserInput(prompt string) string {
	
	fmt.Printf("%v ", prompt) // make a space after input text
	
	reader := bufio.NewReader(os.Stdin)
	text, err := reader.ReadString('\n')

	if err != nil {
		return ""
	}

	text = strings.TrimSuffix(text, "\n")
	text = strings.TrimSuffix(text, "\r")

	return text
}