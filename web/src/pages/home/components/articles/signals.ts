import { createSignal } from "solid-js";
import { getHomepageClient } from "../../../../api-client";
import { Article } from "../../../../api-lib/blog-client";
import { handleAddErrorNotifier } from "../../../../common/utils/use-notifier";

export const [articles, setArticles] = createSignal<Article[]>();

export const handleFetchArticles = async () => {
  const client = getHomepageClient();

  const [err, res] = await client.GetNewestArticle({ length: 9 });
  if (err) {
    handleAddErrorNotifier(err.message, "获取首页文章信息失败");
    throw err;
  }

  setArticles(res);
};
