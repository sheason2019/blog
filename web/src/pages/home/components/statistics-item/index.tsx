import { Component, JSX } from "solid-js";

interface Props {
  title: JSX.Element;
  value: JSX.Element;
}

const StatisticsItem: Component<Props> = (props) => {
  return (
    <div class="md:h-28 md:w-56 w-40 h-24 rounded-xl bg-green-600">
      <div class="flex flex-col shadow-lg w-full h-full justify-center items-center">
        <div class="text-2xl text-white mb-2">{props.title}</div>
        <div class="text-2xl font-bold text-white">{props.value}</div>
      </div>
    </div>
  );
};

export default StatisticsItem;
