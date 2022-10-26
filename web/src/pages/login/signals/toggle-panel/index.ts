import { createSignal } from "solid-js";

export enum Panel {
  Login,
  Regist,
}

export const [panel, setPanel] = createSignal<Panel>(Panel.Login);
