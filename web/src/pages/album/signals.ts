import { createSignal } from "solid-js";
import { getHomepageClient } from "../../api-client";
import { Album } from "../../api-lib/blog-client";
import { handleAddErrorNotifier } from "../../common/utils/use-notifier";

export const [album, setAlbum] = createSignal<Album>();

export const fetchAlbum = async (albumId: number) => {
  const client = getHomepageClient();

  const [err, res] = await client.GetAlbum({
    id: albumId,
  });

  if (err) {
    handleAddErrorNotifier(err.message, "获取合集信息时出现错误");
    throw err;
  }

  setAlbum(res);
};
