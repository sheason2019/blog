import { Switch, Match, For } from "solid-js";
import ArticleItem from "../article-item";
import { article } from "../../signals";

const ArticleQuene = () => {
  let container: HTMLDivElement | undefined;

  return (
    <div
      ref={container}
      class="relative px-2 py-1 border border-gray-300 rounded-sm w-full"
    >
      <Switch>
        <Match when={article().length > 0}>
          <For each={article()}>
            {(item, index) => (
              <ArticleItem
                index={index()}
                article={item}
                container={container!}
              />
            )}
          </For>
        </Match>
        <Match when={article().length === 0}>
          <div class="flex justify-center items-center text-sm text-gray-400 h-12">
            队列中暂无文章
          </div>
        </Match>
      </Switch>
    </div>
  );
};

export default ArticleQuene;
