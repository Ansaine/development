package main

import "fmt"

// recursive function
func fibo(num int) int {
	if num==0 {return 0}	
	if num==1 {return 1};
	return fibo(num-1)+fibo(num-2);
} 

// annonymous function - we assign it to a variable
var annon = func(){
	fmt.Printf("Executing annonymous function")
}

// vardiac function
func add(numbers ...int) {
	ans:=0;

	// IMP - range returns both index and number so if i use 
	// num:= range 
	// only the index is being returned and stored not the value 
	for _,num:= range numbers{
		ans+=num;
	}
	fmt.Println(ans) ;
}

func main(){

	// fmt.Println(fibo(10));
	// annon();
	add(1,2,3,3);
	add(1,2);
}