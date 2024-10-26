package maps

import "fmt"

func Main() {

	mp := make(map[string]int)

	mp["angshuman"] = 1
	mp["rabha"] = 1
	mp["josh"] = 1

	mp["test"]++;

	fmt.Println(mp)



	// NOTE: 

	// var myMap map[string]int     -> Declaring a nil map

	// This will panic if we try to assign a value to myMap without initializing it:
	// myMap["Alice"] = 25 // PANIC: assignment to entry in nil map

	// // Initialize it before using
	// myMap = make(map[string]int)
	// myMap["Alice"] = 25

}

