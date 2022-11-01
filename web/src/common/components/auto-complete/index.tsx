import {
  Component,
  createEffect,
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
}

const AutoComplete: Component<Props> = (props) => {
  let inputRef: HTMLInputElement | undefined;

  const [show, setShow] = createSignal(false);

  const handleClearInput = () => {
    inputRef!.value = "";
  };

  // 这个onClick在事件冒泡上早于下面的点击他处监听器，所以它能正常触发
  const handleOnClick = (value: any) => {
    setShow(false);
    props.onSelect && props.onSelect(value);
    handleClearInput();
  };

  // 这个InputChange事件用来监听输入框中值的变化，这主要是配合异步请求以实现动态候选项的
  const handleInputChange: JSX.DOMAttributes<HTMLInputElement>["onInput"] = (
    e
  ) => {
    const currentValue = e.currentTarget.value;
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
          setShow(false);
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
        ref={inputRef}
        onFocus={() => setShow(true)}
      />
      <div class="absolute bottom-0 left-0">
        <div class="relative">
          <Show when={show() && props.options && props.options.length > 0}>
            <div class="autocomplete-container">
              <For each={props.options}>
                {(item) => (
                  <div
                    onClick={() => handleOnClick(item.value)}
                    class="autocomplete-item"
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
