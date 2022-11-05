import { Component, createEffect } from "solid-js";
import AppBar from "../../common/components/app-bar";
import Container from "../../common/components/container";
import Header from "../../common/components/header";
import AlbumsList from "./components/albums-list";
import { fetchAlbums } from "./signals";

const AlbumsPage: Component = () => {
  createEffect(() => {
    fetchAlbums();
  });

  return (
    <>
      <AppBar />
      <Container class="mt-2">
        <Header>合集列表</Header>
        <AlbumsList />
      </Container>
    </>
  );
};

export default AlbumsPage;
