import { createSignal } from "solid-js";
import { getBlogClient } from "../../api-client";
import { Article, Section } from "../../api-lib/blog-client";
import { handleAddErrorNotifier } from "../../common/utils/use-notifier";
import { handleSyncContent } from "./components/editor";
import { handleSyncTitle } from "./components/title";

export enum SubmitType {
  Unknow,
  Post,
  Put,
}

export const [submitType, setSubmitType] = createSignal(SubmitType.Unknow);

export const [id, setId] = createSignal(0);

export const [title, setTitle] = createSignal("");

export const [content, setContent] = createSignal("");

export const [selectedSections, setSelectedSections] = createSignal<Section[]>(
  []
);

export const handleFetchArticle = async (articleId: number) => {
  const client = getBlogClient();
  const [err, res] = await client.GetArticleById({ articleId });

  if (err) {
    handleAddErrorNotifier(err.message, "获取文章时出现错误");
    throw err;
  }

  return res;
};

export const init = (article?: Article) => {
  if (article) {
    setTitle(article.Title);
    setId(article.Id);
    setContent(article.Content);
    setSelectedSections(article.Sections);
    setSubmitType(SubmitType.Put);

    handleSyncTitle();
    handleSyncContent();
  } else {
    setTitle("");
    setContent("");
    setSelectedSections([]);
    setSubmitType(SubmitType.Post);
  }
};
