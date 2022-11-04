import { Component, createEffect } from "solid-js";
import { Album, Pagination } from "../../../../../../api-lib/blog-client";
import Button from "../../../../../../common/components/button";
import PaginationComp from "../../../../components/pagination";
import Table, { TableColumn } from "../../../../components/table";
import {
  albums,
  fetchAlbums,
  handleInitForm,
  ModalStatus,
  pagination,
  setAlbumId,
  setModalStatus,
  setShowDeleteConfirm,
} from "../../signals";

const handleEditAlbum = (album: Album) => {
  setModalStatus(ModalStatus.Update);
  handleInitForm(album);
};

const handleDeleteAlbum = (albumId: number) => {
  setShowDeleteConfirm(true);
  setAlbumId(albumId);
};

const columns: TableColumn[] = [
  {
    title: "ID",
    dataIndex: "Id",
  },
  {
    title: "合集名称",
    dataIndex: "Name",
  },
  {
    title: "文章数量",
    dataIndex: "Articles",
    render: (_, col) => col.length,
  },
  {
    title: "操作",
    render: (row: Album) => (
      <div>
        <Button
          class="py-0.5 mr-2"
          variant="outline"
          onClick={() => handleEditAlbum(row)}
        >
          编辑
        </Button>
        <Button
          class="py-0.5"
          variant="error"
          onClick={() => handleDeleteAlbum(row.Id)}
        >
          删除
        </Button>
      </div>
    ),
  },
];

const AlbumTable: Component = () => {
  createEffect((prev: Pagination | undefined) => {
    const pginfo = pagination();
    const init = !prev;
    const pageChange =
      prev && (prev.Page !== pginfo.Page || prev.PageSize !== pginfo.PageSize);

    if (init || pageChange) {
      fetchAlbums();
    }

    return pagination();
  });

  return (
    <div class="mt-2">
      <Table columns={columns} data={albums()} />
      <PaginationComp pagination={pagination()} />
    </div>
  );
};

export default AlbumTable;
