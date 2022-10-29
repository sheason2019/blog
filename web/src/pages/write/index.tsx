import { Component } from "solid-js";
import AppBar from "../../common/components/app-bar";
import Container from "../../common/components/container";
import ActionsBar from "./components/actions-bar";
import Editor from "./components/editor";

const WritePage: Component = () => {
  return (
    <>
      <AppBar />
      <Editor />
      <Container>
        <ActionsBar />
      </Container>
    </>
  );
};

export default WritePage;
