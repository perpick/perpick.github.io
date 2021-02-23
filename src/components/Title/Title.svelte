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

<div class="m-4 divide-y-2 divide-gray-200 tracking-widest">
  <div>
    <h2 class="m-2 text-2xl  text-pink-200">
      {descriptions.emoji}
    </h2>
    <h1 class="m-2 text-2xl  text-pink-200">
      {title.title}
      {descriptions.animal}
    </h1>
  </div>
  <p class="m-2 pt-2">{title.summary}</p>
</div>

<style>
  h1 {
    font-family: KOTRA_BOLD-Bold;
    word-break: keep-all;
    text-shadow: -1px 0 #b2b2b2, 0 1px #b2b2b2, 1px 0 #b2b2b2, 0 -1px #b2b2b2;
  }
  p {
    font-family: RIDIBatang;
    word-break: keep-all;
  }
</style>
