import { Component } from "solid-js";
import { Album } from "../../../../api-lib/blog-client";
import { createTimeString } from "../../../../common/utils/time";

interface Props {
  album: Album;
  onClick?: () => any;
}

const AlbumsItem: Component<Props> = (props) => {
  return (
    <div
      onClick={props.onClick}
      class="duration-300 border border-gray-400 rounded-md p-2 cursor-pointer hover:bg-gray-100 hover:shadow-md"
    >
      <div class="flex justify-between">
        <div class="font-bold text-lg">{props.album.Name}</div>
        <div class="text-gray-500">
          上次更新时间：{createTimeString(props.album.UpdateTime!)}
        </div>
      </div>
      <div class="mt-1">{props.album.Describe}</div>
    </div>
  );
};

export default AlbumsItem;
