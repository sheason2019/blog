import { useNavigate } from "@solidjs/router";
import { createMemo, Match, Show, Switch } from "solid-js";
import { Article } from "../../../../api-lib/blog-client";
import { album, article } from "../../signals";
import Item from "./item";

const AlbumController = () => {
  const navigate = useNavigate();

  const currentIndex = createMemo(() => {
    const index = album()?.Articles.findIndex(
      (item) => item.Id === article()?.Id
    );
    if (index !== undefined) {
      return index + 1;
    }
    return 0;
  });

  const albumLength = createMemo(() => {
    return album()?.Articles.length ?? 1;
  });

  const lastArticle = createMemo(() => {
    album();
    return album()?.Articles[currentIndex() - 2];
  });

  const nextArticle = createMemo(() => {
    album();
    return album()?.Articles[currentIndex()];
  });

  const handleToArticle = (article?: Article) => {
    if (!article) return;

    const url = `/post/${article.Id}?albumId=${album()?.Id}`;

    navigate(url);
  };

  const handleToAlbum = () => {
    navigate("/album/" + album()?.Id);
  };

  return (
    <div class="grid grid-cols-3 gap-4">
      <Switch fallback={<div />}>
        <Match when={currentIndex() > 1}>
          <Item onClick={() => handleToArticle(lastArticle())}>
            <div>上一篇</div>
            <div class="mt-2">{lastArticle()?.Title}</div>
          </Item>
        </Match>
      </Switch>
      <Item onClick={handleToAlbum}>
        <div>合集 - {album()?.Name}</div>
        <div class="mt-2">
          当前第{currentIndex()}/{albumLength()}篇
        </div>
      </Item>
      <Switch fallback={<div />}>
        <Match when={currentIndex() < albumLength()}>
          <Item onClick={() => handleToArticle(nextArticle())}>
            <div>下一篇</div>
            <div class="mt-2">{nextArticle()?.Title}</div>
          </Item>
        </Match>
      </Switch>
    </div>
  );
};

export default AlbumController;
