import { Component, For, Show } from "solid-js";
import { Article } from "../../../../../../api-lib/blog-client";
import { createTimeString } from "../../../../../../common/utils/time";
import SectionTag from "../../../../../write/components/section-tag";

interface Props {
  article: Article;
  onClick?: () => any;
}

const ArticleItem: Component<Props> = (props) => {
  return (
    <div
      onClick={props.onClick}
      class="duration-300 hover:shadow-md p-2 border border-gray-300 bg-gray-50 rounded-md hover:bg-gray-200 cursor-pointer"
    >
      <div class="font-bold">{props.article.Title}</div>
      <div class="text-gray-500 text-sm mt-0.5">
        {createTimeString(props.article.CreateTime)}
      </div>
      <Show when={props.article.Sections && props.article.Sections.length > 0}>
        <div class="flex">
          <For each={props.article.Sections}>
            {(item) => <SectionTag section={item} />}
          </For>
        </div>
      </Show>
    </div>
  );
};

export default ArticleItem;
