package dao

import "gorm.io/gorm"

type AlbumItem struct {
	gorm.Model

	Index uint64

	Album   Album `gorm:"foreignKey:albumId"`
	AlbumId uint64

	Article   Article `gorm:"foreignKey:ArticleId"`
	ArticleId uint64
}
