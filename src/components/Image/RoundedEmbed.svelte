<script lang="ts">
  export let src: string;
  export let alt: string;
  export let type: string;

  import { onMount } from "svelte";

  let loaded = false;
  let thisImage: HTMLEmbedElement;

  onMount(() => {
    thisImage.onload = () => {
      loaded = true;
    };
  });
</script>

<embed {src} {alt} {type} class:loaded class="rounded mx-auto" bind:this={thisImage} />

<style>
  embed {
    opacity: 0;
    transition: opacity 1200ms ease-out;
  }
  embed.loaded {
    opacity: 1;
  }
</style>
