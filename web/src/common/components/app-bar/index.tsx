import { useNavigate } from "@solidjs/router";
import { Component } from "solid-js";
import Avatar from "../avatar";

const AppBar: Component = () => {
  const navigate = useNavigate();

  const handleOnClickAvatar = () => {
    // 未登录情况下跳转到Login页面
    navigate("/login");
    // 登录情况下跳转到Space页面
  };

  return (
    <>
      <div class="h-16 px-4 shadow-lg bg-blue-400 flex items-center fixed top-0 left-0 right-0">
        <div class="text-white font-bold text-xl">Sheason's Blog</div>
        <div class="flex-1" />
        <Avatar onClick={handleOnClickAvatar} />
      </div>
      <div class="h-16" />
    </>
  );
};

export default AppBar;
