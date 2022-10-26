import { Component } from "solid-js";
import Header from "../header";
import StatisticsItem from "../statistics-item";

const Statistics: Component = () => {
  return (
    <div class="flex flex-col pt-2">
      <Header>统计信息</Header>
      <div class="flex justify-center self-stretch py-8 my-2 rounded-xl bg-gray-200">
        <StatisticsItem title="已发布文章" value="0" />
        <div class="w-4" />
        <StatisticsItem title="已创建版块" value="0" />
        <div class="w-4" />
        <StatisticsItem title="已创建合集" value="0" />
        <div class="w-4" />
        <StatisticsItem title="已浏览用户" value="0" />
      </div>
      <Header>最新文章</Header>
      <Header>留言板</Header>
    </div>
  );
};

export default Statistics;
