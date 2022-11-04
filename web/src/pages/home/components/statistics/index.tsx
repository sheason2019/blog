import { Component } from "solid-js";
import Header from "../../../../common/components/header";
import StatisticsItem from "../statistics-item";

const Statistics: Component = () => {
  return (
    <div class="flex flex-col pt-2">
      <Header>统计信息</Header>
      <div class="flex justify-center self-stretch py-8 my-2 rounded-xl bg-gray-200">
        <StatisticsItem title="发布文章" value="0" />
        <div class="w-4" />
        <StatisticsItem title="创建版块" value="0" />
        <div class="w-4" />
        <StatisticsItem title="创建合集" value="0" />
        <div class="w-4" />
        <StatisticsItem title="上次更新" value="0" />
      </div>
    </div>
  );
};

export default Statistics;
