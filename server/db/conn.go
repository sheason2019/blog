package db

import (
	"github.com/sheason2019/blog/secret"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var connSingleton *gorm.DB

func GetConn() *gorm.DB {
	if connSingleton == nil {
		InitConn()
	}

	return connSingleton
}

func InitConn() {
	dsn := "host=" + secret.Host + " user=" + secret.DB_USERNAME + " password=" + secret.DB_PASSWORD + " dbname=postgres sslmode=disable TimeZone=Asia/Shanghai"

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	// 数据库连接出错直接panic
	if err != nil {
		panic(err)
	}

	rs := db.Raw("SELECT * FROM pg_database WHERE datname = 'blog'")
	if rs.Error != nil {
		panic(rs.Error)
	}

	var rec = make(map[string]interface{})
	if rs.Find(rec); len(rec) == 0 {
		db.Exec("CREATE DATABASE blog")
	}

	dsn = "host=" + secret.Host + " user=" + secret.DB_USERNAME + " password=" + secret.DB_PASSWORD + " dbname=blog sslmode=disable TimeZone=Asia/Shanghai"

	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	println("成功连接至数据库")

	connSingleton = db
}
