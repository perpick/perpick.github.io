<script lang="ts">
  export let src: string;
  export let alt: string;

  import { onMount } from "svelte";

  let loaded = false;
  let thisImage: HTMLImageElement;

  onMount(() => {
    thisImage.onload = () => {
      loaded = true;
    };
  });
</script>

<img {src} {alt} class:loaded class="rounded mx-auto" bind:this={thisImage} />

<style>
  img {
    opacity: 0;
    transition: opacity 1200ms ease-out;
  }
  img.loaded {
    opacity: 1;
  }
</style>
