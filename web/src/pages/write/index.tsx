import { Component } from "solid-js";
import AppBar from "../../common/components/app-bar";
import Container from "../../common/components/container";
import ActionsBar from "./components/actions-bar";
import Main from "./components/main";

const WritePage: Component = () => {
  return (
    <>
      <AppBar />
      <Main />
      <Container>
        <ActionsBar />
      </Container>
    </>
  );
};

export default WritePage;
