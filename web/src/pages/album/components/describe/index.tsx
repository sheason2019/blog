import { album } from "../../signals";

const Describe = () => {
  return <div class="mt-2">简介：{album()?.Describe}</div>;
};

export default Describe;
