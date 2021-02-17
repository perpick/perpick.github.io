<script lang="ts">
  import type { Perfumes } from '@src/models'
  import Perfume from './Perfume.svelte'

  export let perfumes: Perfumes;
</script>
  
<style>
	h1 {
		font-family: KOTRA_BOLD-Bold;
    word-break: keep-all;
	}
</style>

<div class="m-4 divide-y-2 divide-gray-200 tracking-widest flex flex-col">
  <h1 class="m-2 text-2xl  text-pink-200">당신에게 어울리는 브랜드 향수</h1>
  <div class="flex flex-row justify-center items-center">
    <Perfume perfume={perfumes.hits.hits[0]}/>
    <Perfume perfume={perfumes.hits.hits[1]}/>
    <Perfume perfume={perfumes.hits.hits[2]}/>
  </div>
</div>