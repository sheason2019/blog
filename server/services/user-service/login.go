package user_service

import (
	"errors"

	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/omi/blog"
)

func Login(user blog.User) (*dao.User, error) {
	conn := db.GetConn()
	if user.Username == nil || user.Password == nil ||
		*user.Username == "" || *user.Password == "" {
		return nil, errors.New("登录信息为空")
	}
	userDao := dao.User{Username: *user.Username, Password: *user.Password}

	rows := conn.Where(&userDao).Find(&userDao).RowsAffected
	if rows == 0 {
		return nil, errors.New("用户不存在或密码有误")
	}

	return &userDao, nil
}
