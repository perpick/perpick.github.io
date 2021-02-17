<script lang="ts">
  // Personal Information Collection Agreement
  import { createPopper } from '@popperjs/core'
  
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

<style>
  * {
    font-family: NotoSans;
    word-break: keep-all;
  }
</style>

<div class="flex flex-wrap">
  <div class="w-full text-center">
    <button 
      type="button" 
      style="transition:all .15s ease" 
      class=" text-blue-600 font-bold uppercase text-sm px-6 py-3 outline-none focus:outline-none" 
      on:click={toggleTooltip} >
      개인정보 수집 동의 안내
    </button>
    <div id={tooltipId} class="hidden bg-white border-0 mt-3 z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg">
      <div>
        <div class="text-black opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg">
          개인정보 수집 동의 안내
        </div>
        <div class="text-black p-3">
          <p>1. 당사는 퍼픽 제품 추천 서비스의 개선과 퍼픽 플랫폼 서비스 홍보 및 마케팅을 위하여 다음과 같이 귀하의 개인정보를 수집, 이용합니다.</p>
          <br />
          <p> □ 개인정보의 수집 및 이용 목적</p>
          <br />
          <p>퍼픽 제품 추천 서비스 개선, 퍼픽 플랫폼 서비스 홍보 및 마케팅</p>
          <br />
          <p>□ 수집하는 개인정보의 항목</p>
          <br />
          <p>필수정보 : e-Mail 주소, 퍼픽 서비스 선택지 목록</p>
          <br />
          <p>□ 개인정보의 보유 및 이용기간</p>
          <br />
          <p>당사의 개인정보 사용 목적 달성 시점까지 (단, 관련 법규에 별도 규정이 있는 경우에는 당해 관련 법규에 따라 보유)</p>
          <br />
          <p>□ 귀하는 위와 관련된 동의를 거부할 권리가 있으나, 필수정보 수집에 동의하지 않는 경우 퍼픽 제품 추천 서비스를 이용하실 수 없습니다.</p>
          <br />
        </div>
      </div>
    </div>
  </div>
</div>