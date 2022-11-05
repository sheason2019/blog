import { useLocation, useNavigate } from "@solidjs/router";
import { Component, Show } from "solid-js";

const AppBar: Component = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const handleToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div class="h-16 md:pr-6 pr-2 shadow-lg z-50 bg-blue-400 flex items-center fixed top-0 left-0 right-0">
        <div
          class="text-white font-bold text-xl cursor-pointer md:px-6 px-2"
          onClick={handleToHome}
        >
          Sheason's Blog
        </div>
        <Show when={location.pathname === "/home"}>
          <div class="flex-1" />
          <div
            onClick={() => navigate("/workspace")}
            class="text-white font-bold border border-white px-2 py-1 rounded-md border-opacity-50 hover:bg-black hover:bg-opacity-25 cursor-pointer"
          >
            工作台
          </div>
        </Show>
      </div>
      <div class="h-16" />
    </>
  );
};

export default AppBar;
