package user_service

import (
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/omi/blog"
)

func Login(user blog.User) (*dao.User, error) {
	conn := db.GetConn()
	userDao := dao.User{Username: *user.Username, Password: *user.Password}

	err := conn.Where(&userDao).Find(&userDao).Error
	if err != nil {
		return nil, err
	}

	return &userDao, nil
}
