<script lang="ts">
  import { nav } from '@src/stores'
	import Home from "@src/pages/Home.svelte";
	import Result from "@src/pages/Results.svelte";
	import Quizzes from "@src/pages/Quizzes.svelte";
	import Types from "@src/pages/Types.svelte";
	import Type from "@src/pages/Type.svelte";
  import IntersectionObserver from '@src/components/Image/IntersectionObserver.svelte'
  import RoundedImage from '@src/components/Image/RoundedImage.svelte'
  import MailChimp from '@src/components/MailChimp.svelte'

  import "@src/styles/TailwindStyles.svelte";
</script>

<style>
  .wrap {
    min-width: 270px; 
    max-width: 420px; 
    margin: 0 auto;
    text-align: center;
  }
  @font-face {
    font-family: 'Jal_Onuel';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Jal_Onuel.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'KOTRA_BOLD-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.1/KOTRA_BOLD-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'RIDIBatang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'HangeulNuri-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/HangeulNuri-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
</svelte:head>
<div class="w-full max-w-xs wrap ">
  <header class="m-4  cursor-pointer" on:click={() => { $nav.current = 'home' }}>
    <IntersectionObserver>
      <RoundedImage src="/banner.png" alt="logo"/>
    </IntersectionObserver>
  </header>
  <main>
    {#if $nav.current === 'home'}
      <Home />
    {/if}
    {#if $nav.current === 'quizzes'}
      <Quizzes />
    {/if}
    {#if $nav.current === 'results'}
      <IntersectionObserver>
        <Result />
      </IntersectionObserver>
    {/if}
    {#if $nav.current === 'types'}
      <Types />
    {/if}
    {#if $nav.current === 'type'}
      <IntersectionObserver>
        <Type />
      </IntersectionObserver>
    {/if}
  </main>
  <footer class="pb-24 divide-y-4 divide-gray-200">
    {#if $nav.current === 'results' || $nav.current === 'type'}
      <MailChimp />
    {/if}
    <div class="flex text-center justify-center tracking-widest">
      <span class="m-0 text-xs">Made by&nbsp;</span>
      <a href="https://github.com/perpick/perpick.github.io" class="text-purple-300 text-xs">@Perpick</a>
      <span class="m-0 text-xs">, See source&nbsp;</span>
      <a href="https://github.com/perpick/perpick.github.io" class="text-purple-300 text-xs">GitHub</a>
    </div>
  </footer>
</div>