import { Component } from "solid-js";
import AppBar from "../../common/components/app-bar";
import ActionsBar from "./components/actions-bar";
import Main from "./components/main";
import SubmitModal from "./components/submit-modal";

const WritePage: Component = () => {
  return (
    <>
      <AppBar />
      <Main />
      <ActionsBar />
      <SubmitModal />
    </>
  );
};

export default WritePage;
