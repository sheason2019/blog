import { Component } from "solid-js";
import AppBar from "../../common/components/app-bar";
import Editor from "./components/editor";

const WritePage: Component = () => {
  return (
    <>
      <AppBar />
      <Editor />
    </>
  );
};

export default WritePage;
