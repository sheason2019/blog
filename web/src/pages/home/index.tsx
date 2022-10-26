import { Component } from "solid-js";
import AppBar from "../../common/components/app-bar";
import Statistics from "./components/statistics";

const HomePage: Component = () => {
  return (
    <>
      <AppBar />
      <div class="max-w-screen-lg overflow-hidden container mx-auto">
        <Statistics />
      </div>
    </>
  );
};

export default HomePage;
