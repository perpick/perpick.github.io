<script lang="ts">
  import type { Perfume } from '@src/models'
  import IntersectionObserver from '@src/components/Image/IntersectionObserver.svelte'
  import TooltipBtn from '@src/components/Commons/TooltipBtn.svelte'
  import Image from '@src/components/Image/Image.svelte'
  
  export let perfume: Perfume;
  </script>
    
  <style>
  </style>
      
  <div class="m-4">
    <div class="m-4 justify-center items-center">
      <IntersectionObserver once={true} let:intersecting={intersecting} top={1} bottom={1} left={1} right={1}>
        {#if intersecting}
          <Image src={perfume._source.img_url} alt={perfume._source.title} />
        {/if}
      </IntersectionObserver>
    </div>
    <p class="">{perfume._source.brand} - {perfume._source.title}</p>
  </div>