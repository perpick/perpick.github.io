<script lang="ts">
  import { onMount } from 'svelte'
	import { form, bindClass } from 'svelte-forms';

  import { users, pagination, nav } from '@src/stores'
  import AuthAPI from '@src/api/auth'
  import PerfumesAPI from '@src/api/perfumes'
	import PICA from '@src/components/Commons/PICA.svelte'
  import Typewriter from '@src/components/Typewriter/Typewriter.svelte'
  
  let total: number
  let submitted = false

  onMount(() => {
    $pagination.page = 1
    $users.selects = []
    $users.email = ''
    init()
  })

  const init = async () => {
        await AuthAPI.login()
        const { data } = await PerfumesAPI.getTotal()
        total = data
  }

	const emailForm = form(() => ({
		email: { value: $users.email, validators: ['required', 'email'] }
	}));

	const handleLetsPerpick = () => {
		submitted = true
		handleNext()
		submitted = false
	}

	const handleNext = () => {
		$nav.current = 'quizzes'
	}
</script>

  
<style>
	h1 {
		font-family: KOTRA_BOLD-Bold
	}
  p {
		font-family: RIDIBatang
  }
	button {
		background-color: #B493E7;
	}
</style>

<section class="mb-4">
	<div class="mb-2 divide-y-2 divide-pink-200 mx-4">
		<div class="m-4">
			<div class="relative flex w-full flex-wrap items-stretch mb-3">
				<input
					type="text" 
					bind:value={$users.email} 
					use:bindClass={{ form: emailForm }}
					placeholder="이메일을 입력해주세요!" 
					class="px-2 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
				<span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
				  <i class="fas fa-user"></i>
				</span>
			</div>
			<p class="text-xs m-2 text-gray-400">개인정보 수집 동의하고 </p>
			<button 
				on:click={handleLetsPerpick} 
				disabled={(!$emailForm.valid || submitted)}
				class={`text-white font-bold py-2 px-4 rounded disabled:opacity-50 ${(!$emailForm.valid || submitted) ? "cursor-not-allowed": "hover:text-purple-600"}`} >
				나만의 향수 찾으러 가기
			</button>
			<PICA placement="bottom"/>
		</div>
		<h1 class="text-xl pt-2">Perpick은 지금</h1>
	</div>
	<Typewriter interval={100} delay={500}>
    <p class="text-sm">약 { total }.000명이 함께하고 있어요!</p>
	</Typewriter>
</section>