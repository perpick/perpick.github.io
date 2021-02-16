<script lang="ts">
  import { nav } from '@src/stores'
	import Home from "@src/pages/Home.svelte";
	import Result from "@src/pages/Results.svelte";
	import Quizzes from "@src/pages/Quizzes.svelte";
  import IntersectionObserver from '@src/components/Image/IntersectionObserver.svelte'
  import RoundedImage from '@src/components/Image/RoundedImage.svelte'
  
  import "@src/styles/TailwindStyles.svelte";
</script>

<style>
  .wrap {
    min-width: 270px; 
    max-width: 420px; 
    margin: 0 auto;
    text-align: center;
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
</svelte:head>
<div class="w-full max-w-xs wrap">
  <header class="m-4" >
    <IntersectionObserver>
      <RoundedImage src="/banner.png" alt="logo"/>
    </IntersectionObserver>
</header>
  {#if $nav.current === 'home'}
    <Home />
  {/if}
  {#if $nav.current === 'quizzes'}
    <Quizzes />
  {/if}
  {#if $nav.current === 'results'}
    <Result />
  {/if}
</div>