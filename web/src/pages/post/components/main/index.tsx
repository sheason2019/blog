import { Component } from "solid-js";

import Title from "../title";
import Container from "../../../../common/components/container";
import Article from "../article";
import Info from "../info";
import Tags from "../tags";

const Main: Component = () => {
  return (
    <div class="flex-1 flex flex-col overflow-y-scroll">
      <Container class="flex-1 flex flex-col">
        <Title />
        <Info />
        <Article />
        <Tags />
      </Container>
    </div>
  );
};

export default Main;
