import { useNavigate } from "@solidjs/router";
import { Component, For, Match, Switch } from "solid-js";
import { albums } from "../../signals";
import AlbumsItem from "../albums-item";

const AlbumsList: Component = () => {
  const navigate = useNavigate();

  return (
    <div class="mt-2">
      <Switch>
        <Match when={albums().length > 0}>
          <For each={albums()}>
            {(item) => (
              <AlbumsItem
                onClick={() => navigate(`/album/${item.Id}`)}
                album={item}
              />
            )}
          </For>
        </Match>
        <Match when={albums().length === 0}>
          <div class="h-24 flex justify-center items-center">暂无合集内容</div>
        </Match>
      </Switch>
    </div>
  );
};

export default AlbumsList;
