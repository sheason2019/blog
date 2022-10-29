import { Component, createMemo, createSignal, JSX } from "solid-js";
import OptionsGroup from "./components/options-group";

interface IToolbar {
  show: boolean;
  top: number;
}

let rootRef: HTMLDivElement | undefined;

export const [toolbar, setToolbar] = createSignal<IToolbar>({
  show: false,
  top: 0,
});

// 顶部展示Toolbar
export const handleSetTop = (top: number) => {
  setToolbar({ show: true, top: top - 4 });
};

const Toolbar: Component = () => {
  const [open, setOpen] = createSignal(false);

  const styles = createMemo(() => {
    toolbar();
    if (!rootRef) return { opacity: 0 };

    const style: JSX.CSSProperties = {
      top: toolbar().top + "px",
      opacity: toolbar().show ? 1 : 0,
    };

    return style;
  });

  const handleOpenToolbar = () => {
    setToolbar((prev) => ({ ...prev, show: true }));
    setOpen(true);
  };

  const handleCloseToolbar = () => {
    setToolbar((prev) => ({ ...prev, show: false }));
    setOpen(false);
  };

  return (
    <div
      class="absolute duration-300"
      style={styles()}
      onMouseEnter={handleOpenToolbar}
      onMouseLeave={handleCloseToolbar}
    >
      <div class="relative">
        <div class="absolute right-0 flex flex-col items-end">
          <div
            ref={rootRef}
            class="flex justify-center items-center border border-gray-400 w-8 h-8 rounded-md shadow-md cursor-pointer hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list-ul"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
              />
            </svg>
          </div>
          <div class="duration-300" style={{ opacity: open() ? 1 : 0 }}>
            <div class="h-2" />
            <OptionsGroup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
