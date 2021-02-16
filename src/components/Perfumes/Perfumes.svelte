<script lang="ts">
  import type { Perfumes } from '@src/models'
  import Perfume from './Perfume.svelte'

  export let perfumes: Perfumes;
</script>
  
<style>
</style>
    
<div class="grid grid-flow-col md:grid-flow-col bg-white">
  <Perfume perfume={perfumes[0]}/>
  <Perfume perfume={perfumes[1]}/>
  <Perfume perfume={perfumes[2]}/>
</div>