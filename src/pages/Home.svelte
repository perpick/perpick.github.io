<script lang="ts">
  import { onMount } from "svelte";
  import { form, bindClass } from "svelte-forms";

  import { users, pagination, nav } from "@src/stores";
  import AuthAPI from "@src/api/auth";
  import PerfumesAPI from "@src/api/perfumes";
  import PICA from "@src/components/Commons/PICA.svelte";
  import Typewriter from "@src/components/Typewriter/Typewriter.svelte";

  let total: string = "324,523";
  let submitted = false;
  let el: HTMLElement;

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
        <p class="text-xs text-red-500">유효하지 않은 이메일 형식입니다.</p>
      {/if}
      <p class="text-xs text-gray-400 m-2">개인정보 수집 동의하고</p>
      <button
        on:click={handleLetsPerpick}
        disabled={$users.email.length < 8 || !$emailForm.valid || submitted}
        class={`text-pp-50 font-bold py-2 px-4 rounded disabled:opacity-50 ${
          $users.email.length < 8 || !$emailForm.valid || submitted
            ? "cursor-not-allowed"
            : "hover:text-purple-600 cursor-pointer"
        }`}
      >
        나만의 향수 찾으러 가기
      </button>
    </div>
    <h1 class="text-2xl pt-3">Perpick은 지금</h1>
  </div>
  <Typewriter interval={100} delay={500}>
    <p class="text-sm">총 {total}번 추천되었어요!</p>
  </Typewriter>
  <p
    on:click={handleClickAllTypes}
    class={`text-sm mt-1 mx-4 text-gray-700 py-1 bg-pb-200 rounded-sm hover:text-purple-600 cursor-pointer`}
  >
    퍼픽의 모든 추천 유형 보러 가기
  </p>
</section>

<style>
  h1 {
    font-family: KOTRA_BOLD-Bold;
  }
  p {
    font-family: HangeulNuri-Bold;
  }
  button {
    background-color: #b493e7;
  }
</style>
