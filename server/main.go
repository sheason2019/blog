package main

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/controller"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/middleware"
)

func main() {
	db.InitConn()

	dao.AutoMigrate()

	r := gin.Default()

	// 绑定异常处理中间件
	r.Use(middleware.PanicMiddleware)

	controller.BindBlogController(r)

	r.Run(":8080")
}
