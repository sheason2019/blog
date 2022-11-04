package service

import (
	"fmt"

	"github.com/sheason2019/blog/dao"
	"github.com/sheason2019/blog/db"
	"github.com/sheason2019/blog/omi/blog"
	"gorm.io/gorm"
)

func CreateAlbum(album blog.Album) *dao.Album {
	conn := db.GetConn()

	daoAlbum := dao.Album{}

	conn.Transaction(func(tx *gorm.DB) error {
		daoAlbum.ID = uint(*album.Id)
		daoAlbum.Name = *album.Name
		daoAlbum.Describe = *album.Describe

		// 建立Album
		err := tx.Create(&daoAlbum).Error
		if err != nil {
			return err
		}

		albumItems := make([]dao.AlbumItem, len(*album.Articles))
		for i, v := range *album.Articles {
			albumItems[i] = dao.AlbumItem{
				AlbumId:   daoAlbum.ID,
				ArticleId: uint(*v.Id),
				Index:     uint64(i),
			}
		}
		// 建立Album Items
		tx.Create(&albumItems)

		daoAlbum.Items = albumItems

		return nil
	})

	return &daoAlbum
}

func UpdateAlbum(album blog.Album) *dao.Album {
	conn := db.GetConn()

	daoAlbum := dao.Album{}

	conn.Transaction(func(tx *gorm.DB) error {
		fmt.Println("albumId ", album.Id)
		daoAlbum.ID = uint(*album.Id)
		daoAlbum.Name = *album.Name
		daoAlbum.Describe = *album.Describe

		// 更新基础信息
		err := tx.Save(&daoAlbum).Error
		if err != nil {
			return err
		}

		albumItems := make([]dao.AlbumItem, 0)
		err = tx.Where("album_id = ?", album.Id).Order("index").Find(&albumItems).Error
		if err != nil {
			return err
		}

		len := len(albumItems)
		for i, v := range *album.Articles {
			if i <= len {
				albumItems[i].ArticleId = uint(*v.Id)
			} else {
				albumItems = append(albumItems, dao.AlbumItem{
					AlbumId:   daoAlbum.ID,
					ArticleId: uint(*v.Id),
					Index:     uint64(i),
				})
			}
		}

		// 更新合集内容信息
		err = tx.Save(&albumItems).Error
		if err != nil {
			return err
		}

		return nil
	})

	return &daoAlbum
}
