import { Component } from "solid-js";
import Button from "../../../../common/components/button";

const ActionsBar: Component = () => {
  return (
    <div class="h-14 border-t border-gray-300 flex justify-end items-center px-2">
      <div class="text-sm">提交至：文章/留言板</div>
      <div class="flex-1" />
      <Button>提交</Button>
    </div>
  );
};

export default ActionsBar;
