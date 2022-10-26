package user_service

import (
	"time"

	"github.com/golang-jwt/jwt/v4"
	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/secret"
)

type UserClaim struct {
	jwt.RegisteredClaims
	UserId   uint
	Username string
	Password string
}

var jwtSecret = []byte(secret.JwtSecret)

func CreateJWT(user dao.User) (string, error) {
	now := time.Now()
	expireTime := now.Add(time.Hour)

	claim := UserClaim{
		UserId:   user.ID,
		Username: user.Username,
		Password: user.Password,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: &jwt.NumericDate{Time: expireTime},
			Issuer:    "Blog",
		},
	}

	tokenClaims := jwt.NewWithClaims(jwt.SigningMethodHS256, claim)
	token, err := tokenClaims.SignedString(jwtSecret)

	return token, err
}

func ParseJWTToken(token string) (*UserClaim, error) {
	tokenClaims, err := jwt.ParseWithClaims(token, &UserClaim{}, func(t *jwt.Token) (interface{}, error) {
		return jwtSecret, nil
	})

	if tokenClaims != nil {
		if claims, ok := tokenClaims.Claims.(*UserClaim); ok && tokenClaims.Valid {
			return claims, nil
		}
	}

	return nil, err
}
