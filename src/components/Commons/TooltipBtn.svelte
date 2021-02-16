<script lang="ts">
    import { createPopper } from '@popperjs/core'
    
    export let title: string, descHead: string, descBody: string
    export let placement: "auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | undefined

    const tooltipId = 'tooltip'

    const toggleTooltip = (event: MouseEvent) => {
    let popcorn = <Element>event.target;

    // while(popcorn.nodeName !== "BUTTON"){
    //     popcorn = popcorn.parentNode;
    // }

    const tooltip = <HTMLElement>document.getElementById(tooltipId);
    const popper = createPopper(popcorn, tooltip, {
        placement,
    });

    tooltip.classList.toggle("hidden");
    }
</script>

<div class="flex flex-wrap">
    <div class="w-full text-center">
      <button 
        type="button" 
        style="transition:all .15s ease" 
        class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" 
        on:mouseenter={toggleTooltip} 
        on:mouseleave={toggleTooltip} >
        {title}
      </button>
      <div id={tooltipId} class="hidden bg-pink-600 border-0 mt-3 z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg">
        <div>
          <div class="bg-pink-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg">
            {descHead}
          </div>
          <div class="text-white p-3">
            {descBody}
          </div>
        </div>
      </div>
    </div>
  </div>