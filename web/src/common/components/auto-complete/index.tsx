import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  For,
  JSX,
  Show,
} from "solid-js";
import Input from "../input";

export interface Option {
  label: string;
  value: any;
}

interface Props {
  options: Option[];
  onSelect?: (value: any) => any;
  onInputChange?: (value: string) => any;
  placeholder?: string;
}

const AutoComplete: Component<Props> = (props) => {
  let inputRef: HTMLInputElement | undefined;

  const [focus, setFocus] = createSignal(false);
  const [inputContent, setInputContent] = createSignal("");

  const show = createMemo(() => {
    if (focus() && inputContent().length > 0) {
      return true;
    }
    return false;
  });

  // 清除Input中的内容
  const handleClearInput = () => {
    setInputContent("");
  };

  // 这个onClick在事件冒泡上早于下面的点击他处监听器，所以它能正常触发
  const handleOnClick = (value: any) => {
    setFocus(false);
    props.onSelect && props.onSelect(value);
    handleClearInput();
  };

  // 这个InputChange事件用来监听输入框中值的变化，这主要是配合异步请求以实现动态候选项的
  const handleInputChange: JSX.DOMAttributes<HTMLInputElement>["onInput"] = (
    e
  ) => {
    const currentValue = e.currentTarget.value;
    setInputContent(currentValue);
    if (props.onInputChange) {
      props.onInputChange(currentValue);
    }
  };

  // 添加一个点击他处监听器，用来处理应当关闭AutoComplete候选栏的行为
  createEffect(() => {
    if (show()) {
      const clickEvent = (e: MouseEvent) => {
        if (e.target !== inputRef) {
          e.preventDefault();
          setFocus(false);
          handleClearInput();
          document.removeEventListener("click", clickEvent);
        }
      };
      document.addEventListener("click", clickEvent);
    }
  });

  return (
    <div class="relative">
      <Input
        onInput={handleInputChange}
        placeholder={props.placeholder}
        ref={inputRef}
        value={inputContent()}
        onFocus={() => setFocus(true)}
      />
      <div class="absolute bottom-0 left-0">
        <div class="relative">
          <Show when={show() && props.options && props.options.length > 0}>
            <div class="autocomplete-container">
              <For each={props.options}>
                {(item) => (
                  <div
                    onClick={() => handleOnClick(item.value)}
                    class="autocomplete-item whitespace-nowrap"
                  >
                    {item.label}
                  </div>
                )}
              </For>
            </div>
          </Show>
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
