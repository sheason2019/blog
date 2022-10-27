import { lazy } from "solid-js";
import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import { tryLogin } from "./common/utils/try-login";
import NotifierStack from "./common/components/notifier-stack";

const WelcomePage = lazy(() => import("./pages/welcome"));
const HomePage = lazy(() => import("./pages/home"));
const WorkSpacePage = lazy(() => import("./pages/workspace"));
const LoginPage = lazy(() => import("./pages/login"));

const App: Component = () => {
  tryLogin();

  return (
    <div class="h-screen w-screen overflow-hidden flex flex-col relative">
      <Routes>
        <Route path="/" component={WelcomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/workspace" component={WorkSpacePage} />
        <Route path="/login" component={LoginPage} />
      </Routes>
      <NotifierStack />
    </div>
  );
};

export default App;
