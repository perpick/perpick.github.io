<script lang="ts">
  import type { PerfumeSource } from '@src/models'
  import IntersectionObserver from '@src/components/Image/IntersectionObserver.svelte'
	import Content from '@src/components/Commons/Modal/Content.svelte';
  import Modal from '@src/components/Commons/Modal/Modal.svelte';
  import Image from '@src/components/Image/Image.svelte'
  
  export let source: PerfumeSource;
  </script>
    
  <style>
    .image_wrap{
      min-width: 3rem;
      max-width: 6rem;
    }
  </style>
      
  <div class="px-2 py-4">
    <div class="p-2 image_wrap">
      <IntersectionObserver once={true} let:intersecting={intersecting}>
        {#if intersecting}
          <Image src={source.img_url} alt={source.title} />
        {/if}
      </IntersectionObserver>
    </div>
    <Modal>
      <Content title="자세히 보기" descHead={source.brand} descBody={source.title}/>
    </Modal>
</div>