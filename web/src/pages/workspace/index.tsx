import { useParams } from "@solidjs/router";
import { Match, Switch } from "solid-js";
import AppBar from "../../common/components/app-bar";
import { limit } from "../../common/signals/limit";
import Authority from "./components/authority";
import Content from "./components/content";
import Menu from "./components/menu";
import Album from "./modules/album";
import Article from "./modules/article";
import Sections from "./modules/sections";

const WorkSpacePage = () => {
  const params = useParams();

  return (
    <Switch>
      <Match when={limit().Read}>
        <AppBar />
        <div class="flex flex-1">
          <Menu />
          <Content>
            <Switch>
              <Match when={params.module === "sections"}>
                <Sections />
              </Match>
              <Match when={params.module === "article"}>
                <Article />
              </Match>
              <Match when={params.module === "albums"}>
                <Album />
              </Match>
            </Switch>
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
