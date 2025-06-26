package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// @Summary health checkpoint
// @Router /health [get]
func health(c *gin.Context) {
	c.String(http.StatusOK, "ok")

}

func setupRouter() *gin.Engine {

	r := gin.Default()

	r.Use(Cors())
	r.GET("/health", health)

	_ = r.Group("/api/v1")

	return r
}
