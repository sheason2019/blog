import { useParams } from "@solidjs/router";
import { Component, createEffect, Show } from "solid-js";
import AppBar from "../../common/components/app-bar";
import Container from "../../common/components/container";
import Header from "../../common/components/header";
import Articles from "./components/articles";
import Describe from "./components/describe";
import { album, fetchAlbum } from "./signals";

const AlbumPage: Component = () => {
  const { id } = useParams();
  createEffect((prev: number) => {
    const albumId = parseInt(id);
    if (albumId !== NaN && albumId !== prev) {
      fetchAlbum(albumId);
    }

    return albumId;
  }, -1);

  return (
    <>
      <AppBar />
      <Show when={album()}>
        <Container>
          <Header class="mt-2">合集 - {album()?.Name}</Header>
          <Describe />
          <Articles />
        </Container>
      </Show>
    </>
  );
};

export default AlbumPage;
