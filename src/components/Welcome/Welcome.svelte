<script lang="ts">
	import { nav, users } from '@src/stores'
    import Typewriter from '@src/components/Typewriter/Typewriter.svelte'
	import PICA from '@src/components/Commons/PICA.svelte'

	let submitted = false
	let dirty = false

	const handleLetsPerpick = () => {
		submitted = true
		handleNext()
		submitted = false
	}

	const handleNext = () => {
		$nav.current = 'quizzes'
	}

	const handleInputEmail: svelte.JSX.EventHandler<Event, HTMLInputElement> | undefined = (e) => {
		const { value } = e.currentTarget
		const cleaned = value.trim()
		console.log(value)
		dirty = cleaned.length >= 1
		
		$users.email = cleaned
	}
</script>
  
<style>
	* {
		font-family: NotoSans
	}
	button {
		background-color: #B493E7;
	}
</style>

<section class="mb-4">
	<div class="mb-2 divide-y-2 divide-pink-200 mx-4">
		<div class="m-4">
			<div class="relative flex w-full flex-wrap items-stretch mb-3">
				<input type="text" value={$users.email} on:input={handleInputEmail} placeholder="이메일을 입력해주세요!" class="px-2 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
				<span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
				  <i class="fas fa-user"></i>
				</span>
			</div>
			<p class="text-xs m-2 text-gray-400">개인정보 수집 동의하고 </p>
			<button class="text-white hover:text-purple-600 font-bold py-2 px-4 rounded disabled:opacity-50 " on:click={handleLetsPerpick} disabled={(!dirty || submitted)}>나만의 향수 찾으러 가기</button>
			<PICA placement="bottom"/>
		</div>
		<h1 class="text-xl">Perpick은 지금 </h1>
	</div>
	<Typewriter interval={100}>
		<h1>약 213,209개의 향수 데이터를 비교하고 있어요!</h1>
	</Typewriter>
</section>