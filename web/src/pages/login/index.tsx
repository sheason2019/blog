import { Component, createEffect } from "solid-js";
import AppBar from "../../common/components/app-bar";
import changeTitle from "../../common/utils/changeTitle";
import PanelController from "./component/panel-controller";

const LoginPage: Component = () => {
  createEffect(() => {
    changeTitle("用户登录");
  });

  return (
    <>
      <AppBar />
      <div class="flex-1 flex flex-col justify-center items-center">
        <PanelController />
      </div>
    </>
  );
};

export default LoginPage;
