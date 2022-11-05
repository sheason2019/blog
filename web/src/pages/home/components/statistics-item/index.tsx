import { Component, JSX } from "solid-js";

interface Props {
  title: JSX.Element;
  value: JSX.Element;
}

const StatisticsItem: Component<Props> = (props) => {
  return (
    <div class="flex flex-col shadow-lg rounded-xl h-28 w-56 bg-green-600 justify-center items-center">
      <div class="text-2xl text-white mb-2">{props.title}</div>
      <div class="text-2xl font-bold text-white">{props.value}</div>
    </div>
  );
};

export default StatisticsItem;
