import { Component } from "solid-js";
import AppBar from "../../common/components/app-bar";
import ActionsBar from "./components/actions-bar";
import Main from "./components/main";

const WritePage: Component = () => {
  return (
    <>
      <AppBar />
      <Main />
      <ActionsBar />
    </>
  );
};

export default WritePage;
