package main

import (
	"fmt"
	"flag"
)

func main(){

	var name  = flag.String("name", "N/A", "Name")
	var age = flag.Int("age", 13, "Age")
	var verbose = flag.Bool("verbose", true, "Enable verbose mode")


	flag.Parse()

	// Use the flag values
	if *verbose {
		fmt.Println("Verbose mode enabled")
	}else{
		fmt.Println("Verbose mode is disabled")
	}

	fmt.Printf("Hello, %s! You are %d years old.\n", *name, *age)

}