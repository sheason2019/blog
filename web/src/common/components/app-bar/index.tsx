import { useNavigate } from "@solidjs/router";
import { Component } from "solid-js";

const AppBar: Component = () => {
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div class="h-16 pr-6 shadow-lg bg-blue-400 flex items-center fixed top-0 left-0 right-0">
        <div
          class="text-white font-bold text-xl cursor-pointer px-6"
          onClick={handleToHome}
        >
          Sheason's Blog
        </div>
      </div>
      <div class="h-16" />
    </>
  );
};

export default AppBar;
