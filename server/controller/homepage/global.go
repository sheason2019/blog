package homepage_controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/omi/homepage"
)

type homepageImpl struct{}

var controller homepage.HomePage = homepageImpl{}

func BindHomepageController(r *gin.Engine) {
	attachGetArticles(r)
	attachGetAlbums(r)
	attachGetAlbum(r)
	attachGetStatisticInfo(r)
}
