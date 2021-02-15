<script lang="typescript">
  import type { Perfume } from '@src/models'
  import IntersectionObserver from '@src/components/Image/IntersectionObserver.svelte'
  import Image from '@src/components/Image/Image.svelte'
  
  export let perfume: Perfume;
  </script>
    
  <style>
  </style>
      
  <div class="m-4">
    <div class="m-4 justify-center items-center">
    <IntersectionObserver once={true} let:intersecting={intersecting}>
      {#if intersecting}
        <Image src={perfume._source.img_url} alt={perfume._source.title} />
      {/if}
    </IntersectionObserver>
      </div>
    <p class="">title: {perfume._source.title}</p>
    <p class="">brand: {perfume._source.brand}</p>
  </div>