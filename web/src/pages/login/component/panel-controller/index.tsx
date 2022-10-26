import { Component, createMemo } from "solid-js";
import { Panel, panel } from "../../signals/toggle-panel";
import LoginPanel from "../login-panel";
import RegistPanel from "../regist-panel";

const PanelController: Component = () => {
  return (
    <div class="relative w-80 h-96">
      <LoginPanel reverse={panel() !== Panel.Login} />
      <RegistPanel reverse={panel() !== Panel.Regist} />
    </div>
  );
};

export default PanelController;
