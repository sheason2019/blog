import { createSignal } from "solid-js";
import { getBlogClient } from "../../../api-client";
import { LimitResponse } from "../../../api-lib/blog-client";
import { getToken } from "../../utils/token";
import { handleAddErrorNotifier } from "../../utils/use-notifier";

export const [limit, setLimit] = createSignal<LimitResponse>({
  Read: false,
  Write: false,
});

export const fetchLimit = async () => {
  const token = getToken();
  if (!token) return;

  const client = getBlogClient();

  const [err, res] = await client.GetLimit({ token });
  if (err) {
    handleAddErrorNotifier(err.message, "获取权限信息失败");
    throw err;
  }

  setLimit(res);
};

export const resetLimit = () => setLimit({ Read: false, Write: false });
