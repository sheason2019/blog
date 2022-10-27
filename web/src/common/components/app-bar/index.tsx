import { useNavigate } from "@solidjs/router";
import { Component } from "solid-js";
import { user } from "../../signals/user";

const AppBar: Component = () => {
  const navigate = useNavigate();

  const handleOnClickAvatar = () => {
    if (!user()) {
      // 未登录情况下跳转到Login页面
      navigate("/login");
    } else {
      // 登录情况下跳转到Space页面
      navigate("/space");
    }
  };

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
