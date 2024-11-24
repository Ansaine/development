package main

import (
	"fmt"
	"strconv"
	"time"
)

func consumer (channel chan string ) {

	var consumer_storage string;

	for {
		consumer_storage= <- channel
		fmt.Println(consumer_storage);
	}
}


func main() {
	channel := make(chan string, 4)

	go consumer(channel);

	for i:=1;i<=4; i++{
		str:= "ping " + strconv.Itoa(i) + "!";
		channel <- str
	}

	time.Sleep(time.Second*3)

	for i:=5;i<=10; i++{
		str:= "ping " + strconv.Itoa(i) + "!";
		channel <- str
	}

	// need to add a 1 sec gap else main program finishes before consumer can eat 
	time.Sleep(time.Second)


}