import { writeEffect } from "../helpers/writeEffect";
import { onAnimationEnd } from "../helpers/onAnimationEnd";
import type { TypewriterElement, TypewriterModeFn } from "../types";

type CleanChildText = (elements: TypewriterElement[]) => void;

const cleanChildText: CleanChildText = (elements) =>
  elements.forEach((element) => (element.currentNode.textContent = ""));

const mode: TypewriterModeFn = async (elements, options) => {
  if (options.cascade) {
    cleanChildText(elements);
  } else {
    const { getLongestTextElement } = await import(
      "../helpers/getLongestTextElement"
    );
    const lastElementToFinish = getLongestTextElement(elements);
    onAnimationEnd(lastElementToFinish, () => options.dispatch("done"));
  }
  for (const element of elements)
    options.cascade
      ? void (await writeEffect(element, options))
      : void writeEffect(element, options);
  options.cascade && options.dispatch("done");
};

export { mode };
