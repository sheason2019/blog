import { lazy } from "solid-js";
import type { Component } from "solid-js";
import { Navigate, Route, Routes } from "@solidjs/router";
import NotifierStack from "./common/components/notifier-stack";
import { fetchLimit } from "./common/signals/limit";

const WelcomePage = lazy(() => import("./pages/welcome"));
const HomePage = lazy(() => import("./pages/home"));
const WorkSpacePage = lazy(() => import("./pages/workspace"));
const WritePage = lazy(() => import("./pages/write"));

const App: Component = () => {
  fetchLimit();

  return (
    <div class="h-screen w-screen overflow-hidden flex flex-col relative">
      <Routes>
        <Route path="/" component={WelcomePage} />
        <Route path="/home" component={HomePage} />
        <Route
          path="/workspace"
          element={<Navigate href="/workspace/sections" />}
        />
        <Route path="/workspace/:module" component={WorkSpacePage} />
        <Route path="/write" component={WritePage} />
      </Routes>
      <NotifierStack />
    </div>
  );
};

export default App;
