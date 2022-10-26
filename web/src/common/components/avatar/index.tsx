import { Component, Match, Switch } from "solid-js";
import { user } from "../../signals/user";

interface Props {
  src?: string;
  onClick?: () => any;
}

const Avatar: Component<Props> = (props) => {
  return (
    <div
      class="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center cursor-pointer"
      onClick={props.onClick}
    >
      <Switch>
        <Match when={!user()}>游客</Match>
        <Match when={user()}>
          <span class="text-2xl">
            {user()?.Username.charAt(0).toUpperCase()}
          </span>
        </Match>
      </Switch>
    </div>
  );
};

export default Avatar;
