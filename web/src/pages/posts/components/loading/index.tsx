import { Component } from "solid-js";
import Spin from "../../../../common/components/spin";

const Loading: Component = () => {
  return (
    <div class="flex flex-col items-center py-12">
      <Spin />
      <div class="pt-4">文章加载中</div>
    </div>
  );
};

export default Loading;
