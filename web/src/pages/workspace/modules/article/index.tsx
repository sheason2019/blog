import { Component, createEffect } from "solid-js";
import { Pagination } from "../../../../api-lib/blog-client";
import Header from "../../../../common/components/header";
import PaginationComp from "../../components/pagination";
import Table from "../../components/table";
import ConfirmDeleteModal from "./components/confirm-delete-modal";
import PostsController from "./components/posts-controller";
import { articles, columns, handleFetchArticles, pagination } from "./signals";

const Article: Component = () => {
  createEffect((prev: Pagination | undefined) => {
    const _pagination = pagination();
    // 如果分页信息没有发生变化就不请求数据
    if (
      prev &&
      prev.Page === _pagination.Page &&
      prev.PageSize === _pagination.PageSize
    ) {
      return _pagination;
    }

    handleFetchArticles();

    return _pagination;
  });

  return (
    <>
      <Header>文章管理</Header>
      <PostsController />
      <Table data={articles()} columns={columns} />
      <div class="mt-2">
        <PaginationComp pagination={pagination()} />
      </div>
      <ConfirmDeleteModal />
    </>
  );
};

export default Article;
