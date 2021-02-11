<script lang="typescript">
    import { pagination } from '@src/stores'
    import Quiz from '@src/components/Quiz.component.svelte'
    import quizzes from '../constants/quizzes.json'

    const quiz = quizzes.find((quiz) => quiz.page=== $pagination.page)
</script>
  
<style>
</style>

{#if quiz}
    <Quiz quiz={quiz} />
{/if}