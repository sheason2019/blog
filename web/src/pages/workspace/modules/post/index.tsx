import { Component } from "solid-js";
import Header from "../../../../common/components/header";
import PostsController from "./components/posts-controller";

const Posts: Component = () => {
  return (
    <div>
      <Header>文章管理</Header>
      <PostsController />
    </div>
  );
};

export default Posts;
