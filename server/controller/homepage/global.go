package homepage_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/omi/blog"
)

type homepageImpl struct{}

var controller blog.HomePage = homepageImpl{}

func BindHomepageController(r *gin.Engine) {
	attachGetNewestArticle(r)
}
