import * as Popper from "../../_snowpack/pkg/@popperjs/core.js";
export const tooltip = (node, options) => {
  const button = node;
  const tooltipComponent = options.content;
  let popperInstance;
  let componentInstance;
  const show = () => {
    componentInstance = new tooltipComponent({
      target: document.body,
      props: {
        title: options.title,
        descHead: options.descHead,
        descBody: options.descBody,
        pos: options.pos
      }
    });
    const tooltip2 = document.querySelector("#tooltip");
    tooltip2.setAttribute("data-show", "");
    popperInstance = Popper.createPopper(button, tooltip2, {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 8]
          }
        }
      ]
    });
  };
  const hide = () => {
    const tooltip2 = document.querySelector("#tooltip");
    tooltip2.removeAttribute("data-show");
    if (popperInstance) {
      popperInstance.destroy();
      popperInstance = null;
    }
    componentInstance.$destroy();
  };
  button.addEventListener("mouseover", show);
  button.addEventListener("mouseout", hide);
  return {
    destroy() {
      button.removeEventListener("mouseover", show);
      button.removeEventListener("mouseout", hide);
    }
  };
};
