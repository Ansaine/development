package main

import(
	"fmt"
	"sync"
	"time"
)

func add(myNum *int, mutex* sync.Mutex){
	mutex.Lock()
	for i:=1;i<=10;i++{
		*myNum++;
	}
	mutex.Unlock()
}

func multiply(myNum *int , mutex* sync.Mutex){
	mutex.Lock()
	*myNum*=2;
	mutex.Unlock()
}

func main(){

	var mutex sync.Mutex;
	myNum:= 0;

	// non deterministic output as we dont know which routine will run first
	// but there will be mutual exclusion so no overlapping
	go add(&myNum,&mutex)
	go multiply(&myNum,&mutex)

	time.Sleep(2*time.Second)

	fmt.Println(myNum);

}