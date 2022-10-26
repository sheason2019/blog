package user_service

import (
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
)

func GetUserByToken(token string) *dao.User {
	userClaim, err := ParseJWTToken(token)
	if err != nil {
		panic(err)
	}

	conn := db.GetConn()
	user := dao.User{}
	user.ID = userClaim.UserId

	err = conn.Where(&user).Limit(1).Find(&user).Error
	if err != nil {
		panic(err)
	}

	return &user
}
