import { useParams } from "@solidjs/router";
import { createSignal } from "solid-js";
import { getBlogClient } from "../../api-client";
import { Article } from "../../api-lib/blog-client";
import AppBar from "../../common/components/app-bar";
import { handleAddErrorNotifier } from "../../common/utils/use-notifier";
import Main from "./components/main";

export const [article, setArticle] = createSignal<Article>();

const handleFetchArticle = async (articleId: number) => {
  const client = getBlogClient();
  const [err, res] = await client.GetArticleById({ articleId });

  if (err) {
    handleAddErrorNotifier(err.message, "获取文章时出现错误");
    throw err;
  }

  setArticle(res);
};

const PostPage = () => {
  const { id } = useParams();
  handleFetchArticle(Number(id));

  return (
    <>
      <AppBar />
      <Main />
    </>
  );
};

export default PostPage;
