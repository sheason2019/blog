package user_service

import (
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/omi/blog"
)

func createUser(user blog.User) dao.User {
	conn := db.GetConn()
	userDao := dao.User{}

	userDao.Username = *user.Username
	userDao.Password = *user.Password

	err := conn.Create(&userDao).Error
	if err != nil {
		panic(err)
	}

	return userDao
}
