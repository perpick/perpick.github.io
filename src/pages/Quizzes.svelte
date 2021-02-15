<script lang="typescript">
    import ProgressBar from "@okrad/svelte-progressbar";
    
    import Quiz from '@src/components/Quiz/Quiz.svelte'
    import { pagination } from "@src/stores";
    import quizzes from '@src/constants/quizzes.json'
</script>
  
<style>
</style>

{#each quizzes as quiz}
    <Quiz quiz={quiz} />
{/each}
<!-- <div class="flex justify-center m-2">
<ProgressBar 
    width={360} 
    series={{
    perc: Math.ceil(($pagination.page / $pagination.max) * 100),
    color: '#B494E1'
    }} 
    valueLabel=" "/>
</div> -->