import { useNavigate } from "@solidjs/router";
import { Component } from "solid-js";
import Header from "../../../../common/components/header";
import { resetLimit } from "../../../../common/signals/limit";
import { setToken } from "../../../../common/utils/token";
import MenuItem from "../menu-item";

enum WorkspaceRoute {
  Sections = "/workspace/sections",
  Albums = "/workspace/albums",
  Posts = "/workspace/posts",
}

const Menu: Component = () => {
  const useOtherToken = () => {
    setToken("");
    resetLimit();
  };

  const navigate = useNavigate();

  return (
    <div class="w-72 border-r border-gray-300 flex flex-col">
      <Header class="p-2">工作台</Header>
      <div class="h-2" />
      <MenuItem onClick={() => navigate(WorkspaceRoute.Sections)}>
        版块管理
      </MenuItem>
      <MenuItem onClick={() => navigate(WorkspaceRoute.Albums)}>
        合集管理
      </MenuItem>
      <MenuItem onClick={() => navigate(WorkspaceRoute.Posts)}>
        文章管理
      </MenuItem>
      <div class="flex-1" />
      <MenuItem onClick={useOtherToken}>
        <div class="text-red-500 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="mr-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
            />
            <path
              fill-rule="evenodd"
              d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
            />
          </svg>
          <span>使用其他Token</span>
        </div>
      </MenuItem>
    </div>
  );
};

export default Menu;
