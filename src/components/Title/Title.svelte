<script lang="ts">
  export let title: {
    type: string;
    title: string;
    summary: string;
    tags: string[];
    bg_color: string;
  };
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
</script>

<div class="m-4 divide-y-2 divide-gray-200 tracking-widest init_anim">
  <div>
    <h2 class="m-2 text-2xl">
      {descriptions.emoji}
    </h2>
    <h1 class="m-2 text-2xl  text-pink-400">
      {title.title}
      {descriptions.animal}
    </h1>
  </div>
  <div>
    {#each title.summary.split(".") as summary}
      <p class="m-2 pt-2">{summary}</p>
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
