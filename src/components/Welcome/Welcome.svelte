<script lang="typescript">
	import { nav } from '@src/stores'
    import Typewriter from '@src/components/Typewriter/Typewriter.svelte'
	
	const handleClickNext = () => {
		$nav.current = 'quizzes'
	}
</script>
  
<style>
	* {
		font-family: NotoSans
	}
</style>

<div class="m-4">
	<button class="bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded" on:click={handleClickNext} >나만의 향수 찾으러 가기</button>
</div>
<Typewriter interval={200}>
	<h1>현재까지 300명이 함께 하고 있어요!</h1>
</Typewriter>