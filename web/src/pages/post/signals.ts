import { createSignal } from "solid-js";
import { getBlogClient, getHomepageClient } from "../../api-client";
import { Album, Article } from "../../api-lib/blog-client";
import { handleAddErrorNotifier } from "../../common/utils/use-notifier";

export const [article, setArticle] = createSignal<Article>();
export const [album, setAlbum] = createSignal<Album>();
export const [loading, setLoading] = createSignal(false);

export const handleFetchArticle = async (articleId: number) => {
  setArticle(undefined);
  setLoading(true);

  const client = getBlogClient();
  const [err, res] = await client.GetArticleById({ articleId });

  if (err) {
    handleAddErrorNotifier(err.message, "获取文章时出现错误");
    throw err;
  }

  setArticle(res);
  setLoading(false);
};

export const handleFetchAlbum = async (albumId: number) => {
  setAlbum(undefined);

  const client = getHomepageClient();
  const [err, res] = await client.GetAlbum({ id: albumId });
  if (err) {
    handleAddErrorNotifier(err.message, "获取合集时出现错误");
    throw err;
  }

  setAlbum(res);
};
