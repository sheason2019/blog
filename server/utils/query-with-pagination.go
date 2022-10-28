package utils

import "github.com/sheason2019/blog/db"

// 通过泛型获取分页查询的结果，以及查询结果的总条目数量
func QueryWithPagination[T any](page, pageSize int, preloads *[]string) ([]T, int) {
	var conn = db.GetConn()

	var resultArr []T = make([]T, 0)
	var count int64
	queryChain := conn
	if preloads != nil {
		for _, v := range *preloads {
			queryChain = queryChain.Preload(v)
		}
	}
	queryChain.Offset((page - 1) * pageSize).Limit(pageSize).Find(&resultArr)

	conn.Model(new(T)).Count(&count)

	return resultArr, int(count)
}
