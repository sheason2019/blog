import { Component, createEffect, createSignal, JSX } from "solid-js";
import { Article } from "../../../../../../api-lib/blog-client";
import CloseSvg from "../../../../../../common/components/modal/component/modal-header/close-svg";
import {
  handleChangeArticleIndex,
  insertInfo,
  middleLines,
  setInsertInfo,
  setMiddleLines,
} from "../../signals";

interface Props {
  article: Article;
  index: number;
  container: HTMLDivElement;
}

interface ISelect {
  offsetX: number;
  offsetY: number;
}

const ArticleItem: Component<Props> = (props) => {
  const [select, setSelect] = createSignal<ISelect>();
  let spaceRef: HTMLDivElement | undefined;
  let elementRef: HTMLDivElement | undefined;

  const handleMouseDown = (
    e: MouseEvent & {
      currentTarget: HTMLDivElement;
      target: Element;
      layerX?: number;
      layerY?: number;
    }
  ) => {
    const element = elementRef!;

    element.style.width = element.offsetWidth + "px";
    element.style.position = "absolute";
    element.style.zIndex = "1000";
    element.classList.add("shadow-lg");
    if (spaceRef) {
      spaceRef.style.height = element.offsetHeight + "px";
    }
    setSelect({
      offsetX: e.layerX!,
      offsetY: e.layerY!,
    });
    setInsertInfo({
      from: props.index,
      to: props.index,
      allow: true,
    });

    const mouseUpEvent = () => {
      element.style.position = "";
      element.style.top = "";
      element.style.left = "";
      element.classList.remove("shadow-lg");
      if (spaceRef) {
        spaceRef.style.height = "0px";
      }
      setSelect(undefined);

      const _insertInfo = insertInfo();
      if (_insertInfo.allow) {
        handleChangeArticleIndex(_insertInfo.from, _insertInfo.to);
      }

      setInsertInfo({ from: -1, to: -1, allow: false });

      document.removeEventListener("mouseup", mouseUpEvent);
    };

    document.addEventListener("mouseup", mouseUpEvent);
  };

  const handleMouseMove: JSX.DOMAttributes<HTMLDivElement>["onMouseMove"] = (
    e
  ) => {
    const selectInfo = select();
    if (selectInfo) {
      const rect = props.container.getBoundingClientRect();
      const top = e.clientY - rect.top - selectInfo.offsetY;
      const left = e.clientX - rect.left - selectInfo.offsetX;
      e.currentTarget.style.top = top + "px";
      e.currentTarget.style.left = left + "px";

      const _middleLines = middleLines();
      // 将文章拖动到列表容器外时取消设置顺序的操作
      if (
        top < 0 ||
        top > rect.height ||
        left + selectInfo.offsetX < 0 ||
        left + selectInfo.offsetX > rect.width
      ) {
        setInsertInfo((prev) => ({ ...prev, allow: false }));
        return;
      }
      // 否则拉取容器中所有条目的中线位置，遍历判断用户当前的鼠标指向Index
      for (let i = 0; i < _middleLines.length; i++) {
        if (top < _middleLines[i]) {
          setInsertInfo((prev) => ({ ...prev, to: i, allow: true }));
          break;
        }
      }
    }
  };

  createEffect(() => {
    const element = elementRef!;

    const selfRect = element.getBoundingClientRect();
    const containerRect = props.container.getBoundingClientRect();

    const middleTop = selfRect.top - containerRect.top + selfRect.height / 2;
    setMiddleLines((prev) => {
      prev[props.index] = middleTop;
      return prev;
    });
  });

  createEffect(() => {
    const _insertInfo = insertInfo();
    const element = elementRef!;

    element.style.transform = "translateY(0)";
    if (!_insertInfo) {
      return;
    }

    if (
      _insertInfo.from > _insertInfo.to &&
      props.index < _insertInfo.from &&
      props.index >= _insertInfo.to
    ) {
      element.style.transform = "translateY(100%)";
    }
    if (
      _insertInfo.from < _insertInfo.to &&
      props.index > _insertInfo.from &&
      props.index <= _insertInfo.to
    ) {
      element.style.transform = "translateY(-100%)";
    }
  });

  return (
    <>
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        ref={elementRef}
        class="article-item"
      >
        <div class="w-7 h-7 flex items-center justify-center bg-gray-200 mr-2 rounded-full">
          {props.index + 1}
        </div>
        <div class="flex-1">{props.article.Title}</div>
        <div class="text-gray-500 hover:bg-gray-200 w-7 h-7 flex justify-center items-center rounded-full">
          <CloseSvg />
        </div>
      </div>
      <div ref={spaceRef} />
    </>
  );
};

export default ArticleItem;
