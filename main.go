package main

import (
	"fmt"

	"github.com/Jon-Bernal/island-web-dev-site/initializers"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDatabase()
}

func main() {
	fmt.Println("Starting Server")

}