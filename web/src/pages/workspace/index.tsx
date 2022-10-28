import { Match, Switch } from "solid-js";
import AppBar from "../../common/components/app-bar";
import { limit } from "../../common/signals/limit";
import Authority from "./components/authority";
import Content from "./components/content";
import Menu from "./components/menu";
import Sections from "./modules/sections";

const WorkSpacePage = () => {
  return (
    <Switch>
      <Match when={limit().Read}>
        <AppBar />
        <div class="flex flex-1">
          <Menu />
          <Content>
            <Sections />
          </Content>
        </div>
      </Match>
      <Match when={!limit().Read}>
        <Authority />
      </Match>
    </Switch>
  );
};

export default WorkSpacePage;
