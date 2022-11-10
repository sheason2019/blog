import { Component, createEffect, Show } from "solid-js";

import Title from "../title";
import Container from "../../../../common/components/container";
import Article from "../article";
import Info from "../info";
import Tags from "../tags";
import AlbumController from "../album-controller";
import { article } from "../../signals";
import Loading from "../../../posts/components/loading";

const Main: Component = () => {
  let mainRef: HTMLDivElement | undefined;

  createEffect(() => {
    // 当前展示的文章发生变化时，跳转到页面的顶部
    article();

    mainRef?.scrollTo({ top: 0 });
  });

  return (
    <div class="flex-1 self-stretch overflow-y-scroll" ref={mainRef}>
      <Container class="flex-1 flex flex-col">
        <Show when={article()} fallback={<Loading />}>
          <Title />
          <Info />
          <Article />
          <Tags />
          <AlbumController />
        </Show>
      </Container>
    </div>
  );
};

export default Main;
