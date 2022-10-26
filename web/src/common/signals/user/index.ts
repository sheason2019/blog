import { createSignal } from "solid-js";
import { User } from "../../../api-lib/blog-client";

export const [user, setUser] = createSignal<User>();
