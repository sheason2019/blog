import { createSignal } from "solid-js";
import { getHomepageClient } from "../../api-client";
import { Album } from "../../api-lib/blog-client";
import { handleAddErrorNotifier } from "../../common/utils/use-notifier";

export const [albums, setAlbums] = createSignal<Album[]>([]);

export const fetchAlbums = async () => {
  const client = getHomepageClient();

  const [err, res] = await client.GetAlbums({
    length: 27,
    offset: 0,
    GetNew: true,
  });

  if (err) {
    handleAddErrorNotifier(err.message, "获取合集列表时发生错误");
    throw err;
  }

  setAlbums(res);
};
