import { useLocation, useParams } from "@solidjs/router";
import { createEffect } from "solid-js";
import AppBar from "../../common/components/app-bar";
import Main from "./components/main";
import { handleFetchAlbum, handleFetchArticle } from "./signals";

const PostPage = () => {
  const params = useParams();
  const location = useLocation();

  // id发生变化时重新请求文章内容
  createEffect((prev: number) => {
    const id = Number(params.id);
    if (id !== prev) {
      handleFetchArticle(id);
    }
    return id;
  }, -1);

  // albumId发生变化时重新请求合集信息
  createEffect((prev: number) => {
    const albumId = Number(location.query["albumId"]);
    if (prev !== albumId) {
      handleFetchAlbum(albumId);
    }

    return albumId;
  }, -1);

  return (
    <>
      <AppBar />
      <Main />
    </>
  );
};

export default PostPage;
