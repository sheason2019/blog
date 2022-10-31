import { Component, Show } from "solid-js";
import { article } from "../..";

const HOUR = 60 * 60;

const handleGetTimeStr = (timeStamp: number) => {
  const todayStamp = Math.floor(
    new Date(new Date().setHours(0, 0, 0, 0)).getTime() / 1000
  );
  const yesterdayStamp = todayStamp - 24 * HOUR;

  const time = new Date(timeStamp * 1000);

  let timeStr: string;

  if (timeStamp > todayStamp) {
    // 今天接收的信息展示 hh:mm
    const hour = time.getHours().toString().padStart(2, "0");
    const minute = time.getMinutes().toString().padStart(2, "0");

    timeStr = `今天 ${hour}:${minute}`;
  } else if (timeStamp > yesterdayStamp) {
    // 昨天接收的信息展示 昨天 hh:mm
    const hour = time.getHours().toString().padStart(2, "0");
    const minute = time.getMinutes().toString().padStart(2, "0");

    timeStr = `昨天 ${hour}:${minute}`;
  } else {
    // 更早的信息展示yyyy-MM-dd
    const year = time.getFullYear();
    const month = (time.getMonth() + 1).toString().padStart(2, "0");
    const date = time.getDate().toString().padStart(2, "0");

    timeStr = `${year}-${month}-${date}`;
  }

  return timeStr;
};

const Info: Component = () => {
  return (
    <Show when={article()}>
      <div class="pb-2 flex text-sm text-gray-400">
        <div>作者：{article()!.Owner}</div>
        <div class="w-6" />
        <div>创建时间：{handleGetTimeStr(article()!.CreateTime)}</div>
      </div>
    </Show>
  );
};

export default Info;
