import { createSignal } from "solid-js";
import { getBlogClient } from "../../../../api-client";
import { Album, Article, Pagination } from "../../../../api-lib/blog-client";
import { handleAddErrorNotifier } from "../../../../common/utils/use-notifier";

export enum ModalStatus {
  Close,
  Create,
  Update,
}

// 合集管理页面的相关Signal
export const [modalStatus, setModalStatus] = createSignal(ModalStatus.Close);
export const [albums, setAlbums] = createSignal<Album[]>([]);
export const [pagination, setPagination] = createSignal<Pagination>({
  Page: 1,
  PageSize: 10,
  Count: 0,
});
export const fetchAlbums = async () => {
  const client = getBlogClient();
  const [err, res] = await client.GetAlbums({
    page: pagination().Page,
    pageSize: pagination().PageSize,
  });

  if (err) {
    handleAddErrorNotifier(err.message, "获取合集信息失败");
    throw err;
  }

  setAlbums(res.Albums);
  setPagination(res.Pagination);
};

// 这里则是合集的表单内容
export const [albumId, setAlbumId] = createSignal(0);
export const [albumName, setAlbumName] = createSignal("");
export const [albumDescribe, setAlbumDescribe] = createSignal("");
export const [article, setArticle] = createSignal<Article[]>([]);

export const handleInitForm = (album?: Album) => {
  if (!album) {
    setAlbumId(0);
    setAlbumName("");
    setAlbumDescribe("");
    setArticle([]);
  } else {
    setAlbumId(album.Id);
    setAlbumName(album.Name);
    setAlbumDescribe(album.Describe);
    setArticle(album.Articles);
  }
};

// 下面三个Signal是用来实现拖拽调序功能的
export const [searchArticles, setSearchArticles] = createSignal<Article[]>([]);
export const [middleLines, setMiddleLines] = createSignal<number[]>([]);
export const [insertInfo, setInsertInfo] = createSignal({
  from: -1,
  to: -1,
  allow: true,
});

// 交换合集中的文章顺序
export const handleChangeArticleIndex = (from: number, to: number) => {
  setArticle((article) => {
    const item = article.splice(from, 1);
    article.splice(to, 0, item[0]);

    // 这里是个比较恶心的点，Solid.js在循环渲染中会默认使用对象的地址作为key
    // 而且不支持用户手动指定，所以在这里要使用map方法给所有的子对象换个地址
    // 这样才可以再次触发ArticleItem中定义的生命周期，以刷新middleLines中存储的信息
    return article.map((item) => ({ ...item }));
  });
};

// 获取当前表单中存在的合集信息
const getAlbum = (id?: number): Album => ({
  Id: id ?? 0,
  Name: albumName(),
  Describe: albumDescribe(),
  Articles: article(),
});

// 创建合集
export const handleCreateAlbum = async () => {
  const album = getAlbum();

  const client = getBlogClient();
  const [err, res] = await client.PostAlbum({ album });
  if (err) {
    handleAddErrorNotifier(err.message, "创建合集信息时发生错误");
    throw err;
  }

  // 成功创建则关闭Modal
  setModalStatus(ModalStatus.Close);
  // 并且重新请求合集信息
  fetchAlbums();
};

// 编辑合集
export const handleUpdateAlbum = async () => {
  const album = getAlbum(albumId());

  const client = getBlogClient();
  const [err, res] = await client.PutAlbum({ album });
  if (err) {
    handleAddErrorNotifier(err.message, "编辑合集信息时发生错误");
    throw err;
  }

  // 同上
  setModalStatus(ModalStatus.Close);
  fetchAlbums();
};
