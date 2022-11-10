import { Component } from "solid-js";
import AppBar from "../../common/components/app-bar";
import Albums from "./components/albums";
import Articles from "./components/articles";
import Footer from "./components/footer";
import Statistics from "./components/statistics";

const HomePage: Component = () => {
  return (
    <>
      <AppBar />
      <div class="overflow-y-auto pt-2 flex flex-1 flex-col">
        <div class="max-w-screen-lg container mx-auto flex-1">
          <Statistics />
          <Articles />
          <Albums />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
