import { useNavigate } from "@solidjs/router";
import { Component, createEffect, For } from "solid-js";
import Header from "../../../../common/components/header";
import Link from "../../../../common/components/link";
import AlbumsItem from "../../../albums/components/albums-item";
import { albums, fetchAlbums } from "../../signals";

const Albums: Component = () => {
  const navigate = useNavigate();

  createEffect(() => {
    fetchAlbums();
  });

  return (
    <div class="mt-2">
      <div class="flex justify-between">
        <Header>常用合集</Header>
        <Link onClick={() => navigate("/albums")}>查看全部</Link>
      </div>
      <For each={albums()}>
        {(item) => (
          <div class="mt-2">
            <AlbumsItem
              onClick={() => navigate("/album/" + item.Id)}
              album={item}
            />
          </div>
        )}
      </For>
    </div>
  );
};

export default Albums;
