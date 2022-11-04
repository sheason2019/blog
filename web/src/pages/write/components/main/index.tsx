import { Component } from "solid-js";

import Title from "../title";
import Container from "../../../../common/components/container";
import Editor from "../editor";

const Main: Component = () => {
  return (
    <>
      <div class="flex-1 flex flex-col overflow-y-scroll">
        <Container class="flex-1 flex flex-col">
          <Title />
          <Editor />
        </Container>
      </div>
    </>
  );
};

export default Main;
