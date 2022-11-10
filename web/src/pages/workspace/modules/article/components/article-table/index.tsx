import { useNavigate } from "@solidjs/router";
import { Article } from "../../../../../../api-lib/blog-client";
import Button from "../../../../../../common/components/button";
import { createTimeString } from "../../../../../../common/utils/time";
import Table, { TableColumn } from "../../../../components/table";
import {
  articles,
  setCurrentArticle,
  setShowDeleteConfirm,
} from "../../signals";

const ArticleTable = () => {
  const navigate = useNavigate();

  const handleOpenDeleteConfirm = (article: Article) => {
    setCurrentArticle(article);
    setShowDeleteConfirm(true);
  };

  const columns: TableColumn[] = [
    {
      title: "ID",
      dataIndex: "Id",
    },
    {
      title: "标题",
      dataIndex: "Title",
    },
    {
      title: "作者",
      dataIndex: "Owner",
    },
    {
      title: "发布时间",
      dataIndex: "CreateTime",
      render: (_, col) => <div>{createTimeString(col)}</div>,
    },
    {
      title: "操作",
      render: (row: Article, col) => (
        <div>
          <Button
            class="py-0.5 mx-0.5"
            onClick={() => navigate("/write/" + row.Id)}
          >
            修改
          </Button>
          <Button
            variant="error"
            class="py-0.5 mx-0.5"
            onClick={() => handleOpenDeleteConfirm(row)}
          >
            删除
          </Button>
        </div>
      ),
    },
  ];
  return <Table data={articles()} columns={columns} />;
};

export default ArticleTable;
