import { Component } from "solid-js";
import avatarImg from "../../../../assets/avatar.jpg";

const Avatar: Component = () => {
  return (
    <img
      class="w-56 h-56 pt-3 rounded-lg border border-gray-400 bg-white"
      src={avatarImg}
    />
  );
};

export default Avatar;
