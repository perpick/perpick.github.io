<script lang="ts">
  export let descriptions: {
    mbti: string;
    sub_title: string;
    advice: string;
    title: string;
    detail: string;
    word: string;
    animal: string;
    emoji: string;
  };
  export let tags: string[];
</script>

<div class="m-4 divide-y-2 divide-gray-200 tracking-widest init_anim">
  <h1 class="m-2 text-2xl text-pink-400">{descriptions.title}</h1>
  <div>
    {#each descriptions.detail.split(".") as detail}
      <p class="m-2 pt-2 text-base">{detail}</p>
    {/each}
  </div>
</div>

<style>
  h1 {
    font-family: KOTRA_BOLD-Bold;
    word-break: keep-all;
  }
  p {
    font-family: RIDIBatang;
    word-break: keep-all;
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
</style>
