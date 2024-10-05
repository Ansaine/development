package main

import "fmt"

func divide(a, b float64) (float64, error) {
	if b == 0 {
		return 0, fmt.Errorf("div by zero error")
	}else{
		ans:= a/b;
		return ans, nil;
	}
}

func main() {

	ans,err:= divide(10,2);
	if err!=nil {
		fmt.Println(err)
	}else{
		fmt.Println(ans);
	}
}