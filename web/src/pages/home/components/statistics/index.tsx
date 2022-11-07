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
      <Header class="px-2 md:px-0">统计信息</Header>
      <div class="grid md:grid-cols-4 grid-cols-2 gap-4 justify-items-center items-center justify-center self-stretch md:py-8 py-4 my-2 md:rounded-xl bg-gray-200">
        <StatisticsItem
          title="发布文章"
          value={statisticInfo().ArticlesCount}
        />
        <StatisticsItem
          title="创建版块"
          value={statisticInfo().SectionsCount}
        />
        <StatisticsItem title="创建合集" value={statisticInfo().AlbumsCount} />
        <StatisticsItem
          title="本周更新"
          value={statisticInfo().WeekUpdateCount}
        />
      </div>
    </div>
  );
};

export default Statistics;
