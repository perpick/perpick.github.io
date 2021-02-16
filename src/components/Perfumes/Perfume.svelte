<script lang="ts">
  import type { Perfume } from '@src/models'
  import IntersectionObserver from '@src/components/Image/IntersectionObserver.svelte'
	import Content from '@src/components/Commons/Modal/Content.svelte';
  import Modal from '@src/components/Commons/Modal/Modal.svelte';
  import Image from '@src/components/Image/Image.svelte'
  
  export let perfume: Perfume;
  </script>
    
  <style>
  </style>
      
  <div class="m-2 flex flex-row flex-wrap justify-center items-end">
    <div class="m-4">
      <IntersectionObserver once={true} let:intersecting={intersecting}>
        {#if intersecting}
          <Image src={perfume._source.img_url} alt={perfume._source.title} />
        {/if}
      </IntersectionObserver>
    </div>
    <Modal>
      <Content title="자세히 보기" descHead={perfume._source.brand} descBody={perfume._source.title}/>
    </Modal>
</div>