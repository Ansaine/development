package main

import (
	"fmt"
	"net/http"
	"office1/controllers"
)

func main() {

	//routes
	http.HandleFunc("/sendRequests", controllers.SendRequests)


	//start queue
	go controllers.Jobber()

	//start server
	fmt.Println("Server is connecting on port 8080")
	http.ListenAndServe(":8080", nil)
}
