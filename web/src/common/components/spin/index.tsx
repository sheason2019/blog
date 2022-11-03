import { Component } from "solid-js";

const Spin: Component = () => {
  const size = 28;

  return (
    <svg class="spinner" viewBox="0 0 32 32" width={size} height={size}>
      <circle cx="16" cy="16" r="14"></circle>
    </svg>
  );
};

export default Spin;
