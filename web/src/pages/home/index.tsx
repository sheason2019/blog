import { Component } from "solid-js";
import AppBar from "../../common/components/app-bar";
import Header from "../../common/components/header";
import Statistics from "./components/statistics";

const HomePage: Component = () => {
  return (
    <>
      <AppBar />
      <div class="max-w-screen-lg overflow-hidden container mx-auto">
        <Statistics />
        <Header>最新文章</Header>
      </div>
    </>
  );
};

export default HomePage;
