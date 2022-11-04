import { createSignal } from "solid-js";
import { getBlogClient } from "../../../../../api-client";
import { Article, Pagination } from "../../../../../api-lib/blog-client";
import Button from "../../../../../common/components/button";
import { createTimeString } from "../../../../../common/utils/time";
import { handleAddErrorNotifier } from "../../../../../common/utils/use-notifier";
import { TableColumn } from "../../../components/table";

const handleOpenDeleteConfirm = (article: Article) => {
  setCurrentArticle(article);
  setShowDeleteConfirm(true);
};

export const columns: TableColumn[] = [
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
        <Button class="py-0.5 mx-0.5">修改</Button>
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

export const [articles, setArticles] = createSignal<Article[]>([]);

export const [pagination, setPagination] = createSignal<Pagination>({
  Page: 1,
  PageSize: 10,
  Count: 0,
});

export const [currentArticle, setCurrentArticle] = createSignal<
  Article | undefined
>();

export const [showDeleteConfirm, setShowDeleteConfirm] = createSignal(false);

export const handleFetchArticles = async () => {
  const client = getBlogClient();

  const [err, res] = await client.GetArticles({
    Page: pagination().Page,
    PageSize: pagination().PageSize,
  });

  if (err) {
    handleAddErrorNotifier(err.message, "获取文章时发生错误");
    throw err;
  }

  setArticles(res.Articles);
  setPagination(res.Pagination);
};

export const handleDeleteArticle = async () => {
  const client = getBlogClient();
  const article = currentArticle();
  if (!article) return;

  const [err, res] = await client.DeleteArticle({
    articleId: article.Id,
  });
  if (err) {
    handleAddErrorNotifier(err.message, "删除文章时发生错误");
    throw err;
  }

  await handleFetchArticles();
  setShowDeleteConfirm(false);
};
