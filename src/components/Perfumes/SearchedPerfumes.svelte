<script lang="ts">
  import type { Perfumes, PerfumeSource, SearchedPerfume } from "@src/models";
  import Perfume from "./Perfume.svelte";

  export let perfumes: SearchedPerfume;

  let sources: PerfumeSource[] = perfumes.hits.hits.map((hit) => hit._source);
</script>

<div class="m-4 divide-y-2 divide-gray-200 tracking-widest">
  <h1 class="m-2 text-2xl  text-pink-200">당신에게 어울리는 브랜드 향수</h1>
  <div class="flex flex-row justify-center items-end">
    {#each sources as source, i}
      {#if i < 3}
        <Perfume {source} />
      {/if}
    {/each}
  </div>
</div>

<style>
  h1 {
    font-family: KOTRA_BOLD-Bold;
    word-break: keep-all;
  }
</style>
