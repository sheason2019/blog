import { Component, createMemo, ParentProps } from "solid-js";
import { Pagination } from "../../../../api-lib/blog-client";
import LeftSvg from "./components/left-svg";
import RightSvg from "./components/right-svg";

const ItemContainer: Component<ParentProps> = (props) => {
  return (
    <div class="w-10 h-10 flex justify-center items-center cursor-pointer rounded-full hover:bg-gray-200">
      {props.children}
    </div>
  );
};

interface Props {
  pagination: Pagination;
}

const PaginationComp: Component<Props> = (props) => {
  const currentShow = createMemo(() => {
    const { Page, PageSize, Count } = props.pagination;

    if (Count === 0) {
      return null;
    }

    const start = Math.max((Page - 1) * PageSize, 0);
    const end = Math.min(Page * PageSize, Count);

    return (
      <div class="flex text-sm">
        <div class="ml-2">共计项目：{Count}</div>
        <div class="ml-4">
          当前展示：{start} - {end}
        </div>
      </div>
    );
  });

  return (
    <div class="flex justify-center items-center">
      <div class="flex-1 flex">{currentShow}</div>
      <div class="flex flex-2 justify-center">
        <ItemContainer>
          <LeftSvg />
        </ItemContainer>
        <ItemContainer>1</ItemContainer>
        <ItemContainer>
          <RightSvg />
        </ItemContainer>
      </div>
    </div>
  );
};

export default PaginationComp;
