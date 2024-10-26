package slices

import (
	"fmt"
	"sort"
)

// In go, []int array is itself a slice
// default values are 0 by default in array

// only two functions needed -
// 1. Make the initialised array of fixed size
// 2. Or just keep on appending

func Main() {

	// method 1
	numbers := []int{1, 6, 0, 4, 5}

	// method 2
	num := make([]int, 5)
	for i:= range num{ num[i] = -1}

	// Method 3
	var arr []int;
	for i:=1; i<5; i++	{arr = append(arr, -1);}	


	// sort.Ints(numbers);
	sort.Slice(numbers, func(i,j int) bool {return numbers[i]>numbers[j]});

	fmt.Println(numbers)
	fmt.Println(num)
	fmt.Println(arr)

}
