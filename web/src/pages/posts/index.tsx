import { Component } from "solid-js";
import AppBar from "../../common/components/app-bar";
import Container from "../../common/components/container";
import Header from "../../common/components/header";

const Posts: Component = () => {
  return (
    <>
      <AppBar />
      <Container class="mt-2">
        <Header>文章一览</Header>
      </Container>
    </>
  );
};

export default Posts;
