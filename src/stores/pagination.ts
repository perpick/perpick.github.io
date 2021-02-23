import { writable } from "svelte/store";

import type { Paginaton } from "@src/models";
import selectors from "@src/constants/quizzes.json";

const paginaton = writable<Paginaton>({
  page: 1,
  perPage: 1,
  max: selectors.length,
});

export default paginaton;
