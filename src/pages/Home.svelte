<script lang="ts">
  import { onMount } from "svelte";
  import { form, bindClass } from "svelte-forms";

  import { users, pagination, nav } from "@src/stores";
  import AuthAPI from "@src/api/auth";
  import PerfumesAPI from "@src/api/perfumes";
  import PICA from "@src/components/Commons/PICA.svelte";
  import Typewriter from "@src/components/Typewriter/Typewriter.svelte";
  import KakaoShareBtn from "@src/components/KakaoShareBtn.svelte";

  let total = "324,523";
  let submitted = false;
  let el: HTMLElement;
  let isMore = false;

  onMount(() => {
    $pagination.page = 1;
    $users.selects = [];
    $users.email = "";
    init();
    el.focus();
  });

  const init = async () => {
    await AuthAPI.login();
    const { data = 0 } = await PerfumesAPI.getTotal();
    total = data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const emailForm = form(() => ({
    email: { value: $users.email, validators: ["required", "email"] },
  }));

  const handleLetsPerpick = () => {
    submitted = true;
    handleNext();
    submitted = false;
  };

  const handleNext = () => {
    $nav.current = "quizzes";
  };

  const handleKeyPress = (evnet: KeyboardEvent) => {
    if (evnet.key === "Enter" && !(!$emailForm.valid || submitted)) {
      handleLetsPerpick();
    }
  };

  const handleClickAllTypes = () => {
    $nav.current = "types";
  };
</script>

<section class="mb-4">
  <div class="my-1 divide-y-2 divide-pink-200 mx-4">
    <div class="m-2">
      <Typewriter interval={125} delay={1000}>
        <p class="text-xs font-thin my-1">
          이 서비스를 통해 약 {total}번 추천되었어요!
        </p>
      </Typewriter>
      <PICA placement="bottom" />
      <div class="relative flex w-full flex-wrap items-stretch mb-3 mt-1">
        <input
          type="text"
          bind:value={$users.email}
          use:bindClass={{ form: emailForm }}
          on:keypress={handleKeyPress}
          bind:this={el}
          placeholder="이메일을 입력해주세요!"
          class="px-2 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 w-full pr-10"
        />
        <span
          class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1"
        >
          <i class="fas fa-user" />
        </span>
      </div>
      {#if $users.email.length > 8 && $emailForm?.fields?.email?.errors?.includes("email")}
        <p class="text-xs text-red-500 transition duration-500 ease-in-out transform">
          아직 이메일 형식이 유효하지 않아요!🔒
        </p>
      {:else if $users.email.length < 9}
        <p class="text-xs text-blue-500 transition duration-500 ease-in-out">
          이메일을 입력하고 나와 어울리는 향수를 추천받으세요! 💕
        </p>
      {:else}
        <p class="text-xs text-green-500 transition duration-500 ease-in-out">
          좋아요! 이제 향수를 추천받을 수 있어요!⚡
        </p>
      {/if}
      <p class="text-xs text-gray-400 m-2">개인정보 수집 동의하고</p>
      <button
        on:click={handleLetsPerpick}
        disabled={$users.email.length < 8 || !$emailForm.valid || submitted}
        class={`text-pp-50 font-bold py-2 px-4 rounded disabled:opacity-50  ${
          $users.email.length < 8 || !$emailForm.valid || submitted
            ? "cursor-not-allowed"
            : "hover:text-purple-600 cursor-pointer"
        }`}
      >
        나만의 향수 찾으러 가기
      </button>
    </div>
    <div>
      <div class="flex justify-center items-center space-x-2 mt-2">
        <KakaoShareBtn />
      </div>
      <h1 class="text-2xl pt-3">Perpick은 지금</h1>
      <p
        class="inline-block my-2 text-pink-300 rounded-lg cursor-pointer hover:text-pink-500 text-base"
        on:click={() => {
          isMore = !isMore;
        }}
      >
        {#if !isMore}
          <div class="flex justify-center">
            <svg
              class="animate-bounce w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        {:else}
          그만 알아보기
        {/if}
      </p>
    </div>
  </div>
  {#if isMore}
    <div class="init_anim">
      <p
        on:click={handleClickAllTypes}
        class={`animate-bounce text-sm mt-1 mx-4 inline-block px-4 py-2 text-gray-700 bg-pb-200 rounded-sm hover:text-purple-600 cursor-pointer`}
      >
        퍼픽의 모든 추천 유형 보러 가기
      </p>
      <div class="my-2 mx-4 tracking-widest">
        <div class="m-4 more_anim text-center">
          <a href="mailto:support@scentlab.kr" target="_blank" class="text-purple-300hover:text-purple-400 text-3xl"
            >✉️
          </a>
        </div>
        <p>문의: support@scentlab.kr</p>
        <div class="my-2">
          <Typewriter interval={125} delay={500}>
            <p class="inline text-xs">우리는 이 세상에 있는 향수를 모아 인공지능으로 만들고 있어요!</p>
          </Typewriter>
        </div>
        <div class="flex text-center justify-center tracking-widest copyright">
          <span class="m-0">Made by&nbsp;</span>
          <a href="https://github.com/perpick" target="_blank" class="text-purple-300 hover:text-purple-400"
            >@Perpick<img class="new_tab" src="/new_tab.svg" alt="new_tab" /></a
          >
          <span class="m-0">, See source&nbsp;</span>
          <a
            href="https://github.com/perpick/perpick.github.io"
            target="_blank"
            class="text-purple-300 hover:text-purple-400"
          >
            GitHub<img class="new_tab" src="/new_tab.svg" alt="new_tab" />
          </a>
        </div>
      </div>
    </div>
  {/if}
</section>

<style>
  h1 {
    font-family: KOTRA_BOLD-Bold;
    word-break: keep-all;
  }
  p {
    font-family: HangeulNuri-Bold;
    word-break: keep-all;
  }
  button {
    background-color: #b493e7;
  }
  .more_anim {
    animation-name: madmail;
    animation-duration: 3s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
  }
  @keyframes madmail {
    0% {
      transform: translateX(-100px) rotate(-360deg);
      opacity: 0;
    }
    50% {
      transform: translateX(0px) rotate(0deg);
      animationtimingfunction: cubic-bezier(0, 0, 0.2, 1);
      opacity: 1;
    }
    100% {
      transform: translateY(-25%);
      animationtimingfunction: cubic-bezier(0.8, 0, 1, 1);
      transform: translateX(100px) rotate(360deg);
      opacity: 0;
    }
  }
  .init_anim {
    animation-name: init;
    animation-duration: 3s;
    animation-fill-mode: both;
  }
  @keyframes init {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
  .new_tab {
    display: inline;
    margin-left: 4px;
    margin-right: 4px;
    background: url(nana.png);
    background-image: url(nana.svg);
    background-size: "1";
    width: 8px;
    height: 8px;
  }
  .copyright {
    font-size: xx-small;
  }
</style>
