import { createSignal } from "solid-js";
import { getHomepageClient } from "../../api-client";
import { Album } from "../../api-lib/blog-client";
import { StatisticInfo } from "../../api-lib/homepage-client";
import { handleAddErrorNotifier } from "../../common/utils/use-notifier";

export const [statisticInfo, setStatisticInfo] = createSignal<StatisticInfo>({
  ArticlesCount: 0,
  AlbumsCount: 0,
  SectionsCount: 0,
  WeekUpdateCount: 0,
});

export const [albums, setAlbums] = createSignal<Album[]>([]);

export const fetchStatisticInfo = async () => {
  const client = getHomepageClient();

  const [err, res] = await client.GetStatisticInfo({});
  if (err) {
    handleAddErrorNotifier(err.message, "获取统计信息失败");
    throw err;
  }

  setStatisticInfo(res);
};

export const fetchAlbums = async () => {
  const client = getHomepageClient();

  const [err, res] = await client.GetAlbums({
    offset: 0,
    length: 9,
    GetNew: true,
  });

  if (err) {
    handleAddErrorNotifier(err.message, "获取合集信息失败");
    throw err;
  }

  setAlbums(res);
};
