import { createSignal } from "solid-js";
import _ from "lodash";

import { getHomepageClient } from "../../api-client";
import { Article, Section } from "../../api-lib/blog-client";
import { handleAddErrorNotifier } from "../../common/utils/use-notifier";
import { selectedSections } from "../write/components/submit-modal/signals";

export const [articles, setArticles] = createSignal<Article[]>([]);

export const [searchSections, setSearchSections] = createSignal<Section[]>([]);

export const fetchArticles = async () => {
  const client = getHomepageClient();
  const [err, res] = await client.GetArticles({
    length: 27,
    offset: 0,
    GetNew: true,
    SectionsId: selectedSections().map((section) => section.SectionId),
  });

  if (err) {
    handleAddErrorNotifier(err.message, "获取文章信息时出现错误");
    throw err;
  }

  setArticles(res);
};
