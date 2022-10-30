import { Component } from "solid-js";

import Title from "../title";
import Container from "../../../../common/components/container";
import Editor from "../editor";

const Main: Component = () => {
  return (
    <div class="relative flex-1 flex flex-col">
      <Container class="flex-1 flex flex-col">
        <div class="flex flex-col flex-1">
          <Title />
          <Editor />
        </div>
      </Container>
    </div>
  );
};

export default Main;
