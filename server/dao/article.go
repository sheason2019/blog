package dao

import (
	"github.com/sheason2019/blog/omi/blog"
	"gorm.io/gorm"
)

type Article struct {
	gorm.Model
	Title   string
	Content string

	Owner string

	Sections []Section `gorm:"many2many:article_section"`
}

func (model Article) ToIDL() blog.Article {
	article := blog.Article{}

	id := int(model.ID)
	createTime := int(model.CreatedAt.Unix())

	sections := make([]blog.Section, len(model.Sections))
	for i, v := range model.Sections {
		sections[i] = v.ToIDL()
	}

	article.Id = &id
	article.Content = &model.Content
	article.Title = &model.Title
	article.Owner = &model.Owner
	article.Sections = &sections
	article.CreateTime = &createTime

	return article
}
