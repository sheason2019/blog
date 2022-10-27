import { lazy } from "solid-js";
import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import NotifierStack from "./common/components/notifier-stack";

const WelcomePage = lazy(() => import("./pages/welcome"));
const HomePage = lazy(() => import("./pages/home"));
const WorkSpacePage = lazy(() => import("./pages/workspace"));

const App: Component = () => {
  return (
    <div class="h-screen w-screen overflow-hidden flex flex-col relative">
      <Routes>
        <Route path="/" component={WelcomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/workspace" component={WorkSpacePage} />
      </Routes>
      <NotifierStack />
    </div>
  );
};

export default App;
