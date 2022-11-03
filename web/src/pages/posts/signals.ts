import { createSignal } from "solid-js";
import _ from "lodash";

import { getHomepageClient } from "../../api-client";
import { Article, Section } from "../../api-lib/blog-client";
import { handleAddErrorNotifier } from "../../common/utils/use-notifier";

export const [articles, setArticles] = createSignal<Article[]>([]);

export const [searchSections, setSearchSections] = createSignal<Section[]>([]);

export const [searchGetNew, setSearchGetNew] = createSignal(true);

export const [loading, setLoading] = createSignal(false);

export const fetchArticles = async () => {
  const client = getHomepageClient();
  setLoading(true);
  const [err, res] = await client.GetArticles({
    length: 27,
    offset: 0,
    GetNew: searchGetNew(),
    SectionsId: searchSections().map((section) => section.SectionId),
  });

  setLoading(false);

  if (err) {
    handleAddErrorNotifier(err.message, "获取文章信息时出现错误");
    throw err;
  }

  setArticles(res);
};
