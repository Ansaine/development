package main

import (
	"fmt"
	"time"
)

func basic_input(){
	var name string;
	var age int;

	fmt.Println("Enter name and age : ");
	fmt.Scan(&name,&age);
	fmt.Printf("Name is %s and age is %d", name,age);

}
func basic_output() {

	// 3 methods to declare a variable
	var message string;
	message = "Hello World"

	var message2 = "Hellow World 2" // here automatically datatype is inferred
	message3 := "Hello World 3"

	fmt.Print(message)
	fmt.Println(message2) //println is basically print line with an endl at the end, cause nothing changes in the front
	fmt.Println(message3)

	// multiple print
	fmt.Println("Hello, ", 10, " + 2 is equal to ", 12)

	// NOTE -  	
	// By default if we dont assign a value to say an integer, its default value is 0
	// Datatype cannot be changed in go after declaration

}

// Defer - stack
func learn_defer() {

	fmt.Println("One")

	defer fmt.Println("Two")
	defer fmt.Println("Three")

	fmt.Println("Four")
	fmt.Println("Five")
}

// helper function
func display(message string) {

	// infinite for loop
	for {
		fmt.Println(message)
		// to sleep the process for 1 second
		time.Sleep(time.Second * 1)
	}
}

func learn_goroutines() {

	go display("Process 1")
	display("Process 2")
}

func learn_go_channels() {

	//NOTE - value of a go channel is memory address as that is how they communicate

	// create channel of integer type
	var number = make(chan int)

	// access type and value of channel
	fmt.Printf("Channel Type: %T\n", number)
	fmt.Printf("Channel Value: %v", number)
}


func main() {

	// // learn_go_channels()
	// basic_input()
	// // basic_output()
	learn_defer()

}
