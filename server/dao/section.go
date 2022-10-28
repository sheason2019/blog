package dao

import (
	"github.com/sheason2019/blog/omi/blog"
	"gorm.io/gorm"
)

type Section struct {
	gorm.Model
	Name string

	Posts []Post `gorm:"many2many:posts_section"`
}

func (model Section) ToIDL() blog.Section {
	blog := blog.Section{}

	id := int(model.ID)

	blog.SectionId = &id
	blog.SectionName = &model.Name

	return blog
}
