package controllers

import (
	"fmt"
	"net/http"
	"strconv"
	"time"
)

var que = make(chan string)
var count = 1

func SendRequests(w http.ResponseWriter, r *http.Request) {
	message := strconv.Itoa(count) + " request recieved. working ......"
    // each message will go independently
    go func(){
        que <- message;
    }();
	count++;
    fmt.Println(message)
}

func Jobber() {
    fmt.Println("Jobber Started")
    for{
        time.Sleep(time.Second * 5)
        message := <-que;
        newMessage := "[Work done for] : " + message;
        fmt.Println(newMessage)		
    }
}
