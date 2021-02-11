<script lang="typescript">
  import { nav } from './stores'
	import Home from "./pages/Home.page.svelte";
	import Result from "./pages/Result.page.svelte";
	import Quiz from "./pages/Quiz.page.svelte";

  import { GoogleAnalytics } from "@src/utils";

  import "./styles/TailwindStyles.svelte";
  
</script>

<style>
  
</style>

<GoogleAnalytics />
<header>
</header>
<div>
  {#if $nav.current === 'home'}
    <Home />
  {/if}
  {#if $nav.current === 'result'}
    <Result />
  {/if}
  {#if $nav.current === 'quizzes'}
    <Quiz />
  {/if}
</div>