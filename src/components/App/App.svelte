<script lang="typescript">
  import { nav } from '@src/stores'
	import Home from "@src/pages/Home.svelte";
	import Result from "@src/pages/Result.svelte";
	import Quiz from "@src/pages/Quiz.svelte";

  import { GoogleAnalytics } from "@src/utils";

  import "@src/styles/TailwindStyles.svelte";
</script>

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