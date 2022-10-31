package dao

import "github.com/sheason2019/blog/db"

func AutoMigrate() {
	conn := db.GetConn()

	conn.AutoMigrate(
		&Section{},
		&Album{},
		&Article{},
		&AlbumItem{},
	)
}
