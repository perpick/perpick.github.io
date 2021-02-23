import type { Nav } from "@src/models";
import { writable } from "svelte/store";

const nav = writable<Nav>({
  current: "home",
});

export default nav;
