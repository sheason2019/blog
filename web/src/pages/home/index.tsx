import { Component } from "solid-js";
import AppBar from "../../common/components/app-bar";
import Albums from "./components/albums";
import Articles from "./components/articles";
import Statistics from "./components/statistics";

const HomePage: Component = () => {
  return (
    <>
      <AppBar />
      <div class="max-w-screen-lg overflow-hidden container mx-auto">
        <Statistics />
        <Articles />
        <Albums />
      </div>
    </>
  );
};

export default HomePage;
