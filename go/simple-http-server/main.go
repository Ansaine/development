package main

import (
	"fmt"
	"net/http"
	"simple-http-server/routes"
)

func main() {
	http.HandleFunc("/main", routes.MainHandler)

	fmt.Println("Server is connecting on port 8080")
	http.ListenAndServe(":8080", nil)
}
