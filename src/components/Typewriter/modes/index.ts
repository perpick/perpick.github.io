import { getElements } from "../helpers/getElements";
import type { TypewriterMainFn } from "../types";

const typewriter: TypewriterMainFn = async (node, options) => {
  const { mode } =
    options.loop || options.loopRandom
      ? await import("./loopTypewriter")
      : await import("./typewriter");
  const elements = getElements(node);
  if (options.delay > 0) {
    const { sleep } = await import("../helpers/sleep");
    await sleep(options.delay);
    node.classList.remove("delay");
  }
  void mode(elements, options);
};

export { typewriter };
