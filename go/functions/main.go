// Different of functions
// 1. Recursive functions
// 2. Verdiac functions
// 3. Annonymous functions, we can also have functions that return an annonymous function

package main

import "fmt"

// recursive function
func fibo(num int) int {
	if num==0 {return 0}	
	if num==1 {return 1};
	return fibo(num-1)+fibo(num-2);
} 


func main(){
	// fmt.Println(fibo(10));

	// annonymous function - we assign it to a variable
	var annon = func(){
		fmt.Printf("Executing annonymous function")
	}

	annon();
}