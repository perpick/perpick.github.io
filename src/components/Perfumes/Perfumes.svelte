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

<div class="m-4 divide-y divide-pb-400">
  <h1 class="m-2 text-3xl">당신에게 어울리는 브랜드 향수</h1>
  <div class="grid grid-flow-col md:grid-flow-col">
    <Perfume perfume={perfumes.hits.hits[0]}/>
    <Perfume perfume={perfumes.hits.hits[1]}/>
    <Perfume perfume={perfumes.hits.hits[2]}/>
  </div>
</div>