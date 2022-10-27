import { createSignal } from "solid-js";

interface INotifier {
  variant: "error" | "success" | "default";
  content?: string;
  header?: string;
  height?: number;

  id: number;
}

let count = 0;

export const [notifier, setNotifier] = createSignal<INotifier[]>([]);

export const handleAddNotifier = (noti: INotifier) => {
  setNotifier((prev) => [...prev, noti]);
};

export const handleRemoveNotifier = (index: number) => {
  setNotifier((prev) => prev.filter((item) => item.id !== index));
};

export const handleAddErrorNotifier = (content: string, header?: string) => {
  handleAddNotifier({
    variant: "error",
    content,
    header,
    id: count++,
  });
};

export const handleAddSuccessNotifier = (content: string, header?: string) => {
  handleAddNotifier({
    variant: "success",
    content,
    header,
    id: count++,
  });
};

export const handleSetNotifierHeight = (index: number, height: number) => {
  setNotifier((prev) =>
    prev.map((item) => {
      if (item.id === index) {
        item.height = height;
      }
      return item;
    })
  );
};
