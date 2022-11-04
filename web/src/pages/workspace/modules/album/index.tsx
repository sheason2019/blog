import { Component } from "solid-js";
import Header from "../../../../common/components/header";
import AlbumController from "./components/album-controller";
import AlbumModal from "./components/album-modal";
import AlbumTable from "./components/album-table";

const Album: Component = () => {
  return (
    <>
      <div>
        <Header>合集管理</Header>
        <AlbumController />
        <AlbumTable />
      </div>
      <AlbumModal />
    </>
  );
};

export default Album;
