import { Component, createMemo } from "solid-js";

interface Props {
  size?: number;
}

const Spin: Component<Props> = (props) => {
  const size = createMemo(() => props.size ?? 28);

  return (
    <svg class="spinner" viewBox="0 0 32 32" width={size()} height={size()}>
      <circle cx="16" cy="16" r="14"></circle>
    </svg>
  );
};

export default Spin;
