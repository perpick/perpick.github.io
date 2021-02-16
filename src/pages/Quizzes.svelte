<script lang="ts">
    import Quiz from '@src/components/Quiz/Quiz.svelte'
    import quizzes from '@src/constants/quizzes.json'
</script>
  
<style>
</style>

<div class="relative pt-1">
    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
      <div style="width:30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
    </div>
  </div>
{#each quizzes as quiz}
    <Quiz quiz={quiz} />
{/each}