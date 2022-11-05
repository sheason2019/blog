import { article } from "../../signals";

const Title = () => {
  return <div class="text-4xl py-4 font-bold title">{article()?.Title}</div>;
};

export default Title;
