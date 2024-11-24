package queues

import "fmt"

// Queus can be implemented using
// 1. Slices
// 2. Go channels

func SimpleQueue(){

	arr:=[]int{1,2,3,4};

	//add at end
	arr = append(arr, 5);

	//delete first
	arr = arr[1:];

	fmt.Println(arr);

}

func QueueUsingChannels(){
	
}