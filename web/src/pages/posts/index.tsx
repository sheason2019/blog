import { Component } from "solid-js";
import AppBar from "../../common/components/app-bar";
import Container from "../../common/components/container";
import Header from "../../common/components/header";
import Articles from "./components/articles";
import SettingModal, { setShow } from "./components/setting-modal";

const Posts: Component = () => {
  return (
    <>
      <AppBar />
      <Container class="mt-2">
        <div class="flex items-center">
          <Header>文章一览</Header>
          <div
            class="ml-2 p-2 hover:bg-gray-300 text-gray-500 rounded-full cursor-pointer"
            onClick={() => setShow(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </div>
        <Articles />
      </Container>
      <SettingModal />
    </>
  );
};

export default Posts;
