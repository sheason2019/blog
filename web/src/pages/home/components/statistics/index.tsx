import { Component, createEffect } from "solid-js";
import Header from "../../../../common/components/header";
import { fetchStatisticInfo, statisticInfo } from "../../signals";
import StatisticsItem from "../statistics-item";

const Statistics: Component = () => {
  createEffect(() => {
    fetchStatisticInfo();
  });

  return (
    <div class="flex flex-col pt-2">
      <Header>统计信息</Header>
      <div class="flex justify-center self-stretch py-8 my-2 rounded-xl bg-gray-200">
        <StatisticsItem
          title="发布文章"
          value={statisticInfo().ArticlesCount}
        />
        <div class="w-4" />
        <StatisticsItem
          title="创建版块"
          value={statisticInfo().SectionsCount}
        />
        <div class="w-4" />
        <StatisticsItem title="创建合集" value={statisticInfo().AlbumsCount} />
        <div class="w-4" />
        <StatisticsItem
          title="本周更新"
          value={statisticInfo().WeekUpdateCount}
        />
      </div>
    </div>
  );
};

export default Statistics;
