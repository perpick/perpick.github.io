<script lang="ts">
  import RoundedImage from "@src/components/Image/RoundedImage.svelte";
  import IntersectionObserver from "@src/components/Image/IntersectionObserver.svelte";

  export let image: string, rows: { title: string; content: string[] }[];
</script>

<div class="tracking-widest mb-3 text-center">
  <h1 class="text-lg">🌺</h1>
  <h1 class="text-lg  pt-4">이 향수를 소개합니다!</h1>
  <div class="w-full p-2 image_wrap my-0 mx-auto">
    <IntersectionObserver once={true} let:intersecting>
      <RoundedImage src={image} alt={"perfume_image"} />
    </IntersectionObserver>
  </div>
  <br />
  {#each rows as row}
    <h2 class="text-lg">{row.title}</h2>
    <p class="text-base text-pb-900 font-bold">
      {row.content.reduce((p, c) => `${p}, ${c}`)}
    </p>
    <br />
  {/each}
</div>

<style>
  h1 {
    font-family: KOTRA_BOLD-Bold;
    word-break: keep-all;
  }
  h2 {
    font-family: KOTRA_BOLD-Bold;
    word-break: keep-all;
  }
  .image_wrap {
    min-width: 5rem;
    max-width: 10rem;
  }
</style>
