package homepage_controller

import (
	"time"

	"github.com/gin-gonic/gin"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/omi/homepage"
)

func i64toi(num int64) *int {
	inum := int(num)
	return &inum
}

func (homepageImpl) GetStatisticInfo(ctx *gin.Context) homepage.StatisticInfo {
	statisticInfo := homepage.StatisticInfo{}

	conn := db.GetConn()

	var articleCount int64
	err := conn.Model(&dao.Article{}).Count(&articleCount).Error
	if err != nil {
		panic(err)
	}

	var sectionCount int64
	err = conn.Model(&dao.Section{}).Count(&sectionCount).Error
	if err != nil {
		panic(err)
	}

	var albumCount int64
	err = conn.Model(&dao.Album{}).Count(&albumCount).Error
	if err != nil {
		panic(err)
	}

	var weekUpdateCount int64
	timeBeforeAWeek := time.Now().Add(-time.Hour * 7 * 24)
	err = conn.
		Model(&dao.Article{}).
		Where("updated_at > ?", timeBeforeAWeek).
		Count(&weekUpdateCount).
		Error
	if err != nil {
		panic(err)
	}

	statisticInfo.AlbumsCount = i64toi(albumCount)
	statisticInfo.ArticlesCount = i64toi(articleCount)
	statisticInfo.SectionsCount = i64toi(sectionCount)
	statisticInfo.WeekUpdateCount = i64toi(weekUpdateCount)

	return statisticInfo
}

func attachGetStatisticInfo(r *gin.Engine) {
	r.GET(homepage.HomePageDefinition.GET_STATISTIC_INFO_PATH, func(ctx *gin.Context) {
		ctx.JSON(200, controller.GetStatisticInfo(ctx))
	})
}
