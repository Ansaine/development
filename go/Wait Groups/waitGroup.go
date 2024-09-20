package main

import (
	"fmt"
	"sync"
	"time"
)

func printer(i int, wg *sync.WaitGroup) {
	defer wg.Done()

	fmt.Printf("printing starting for id: %d\n", i)
	time.Sleep(1 * time.Second) // reduced sleep time
	fmt.Printf("printing ending for id: %d\n", i)
}

func main() {
	var wg sync.WaitGroup

	for i := 1; i <= 10; i++ { // reduced number of goroutines
		wg.Add(1)
		go printer(i, &wg)
	}

	wg.Wait()
	fmt.Println("all work done")

}