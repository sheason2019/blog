import { useNavigate } from "@solidjs/router";
import { Component, createEffect, createMemo, createSignal } from "solid-js";
import changeTitle from "../../common/utils/changeTitle";
import Avatar from "./components/avatar";
import styles from "./styles/index.module.css";

const WelcomePage: Component = () => {
  const [show, setShow] = createSignal(false);

  const mainStyle = createMemo(() => {
    const classList = [
      "flex-1 flex flex-col justify-center items-center duration-1000",
    ];

    if (!show()) {
      classList.push(styles.intro);
    }

    return classList.join(" ");
  });

  createEffect(() => {
    setTimeout(() => setShow(true), 0);
    changeTitle("Sheason's Blog Welcome Page");
  });

  const navigate = useNavigate();

  return (
    <div class="flex-1 flex flex-col bg-blue-200 select-none">
      <div class={mainStyle()}>
        <Avatar />
        <div class="text-5xl font-bold mt-4">Sheason's Blog</div>
        <div class="text-4xl mt-4">记录点滴</div>
        <button
          onClick={() => navigate("/home")}
          class="bg-blue-600 shadow-lg mt-8 text-3xl px-4 py-2 rounded-lg text-white"
        >
          查看Blog
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
