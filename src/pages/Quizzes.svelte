<script lang="ts">
  import Quiz from "@src/components/Quiz/Quiz.svelte";
  import { pagination } from "@src/stores";
  import quizzes from "@src/constants/quizzes.json";
</script>

<div class="relative pt-1 m-4">
  <div class="flex mb-2 items-center justify-between">
    <div>
      {#if Math.ceil(($pagination.page / ($pagination.max + 1)) * 100) < 33}
        <span
          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 bg-pg-200"
        >
          이게 향수 추천과 관련 있는지 궁금해 하는 중
        </span>
      {:else if Math.ceil(($pagination.page / ($pagination.max + 1)) * 100) < 66}
        <span
          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-500 bg-pb-200"
        >
          이제 그만할까 생각하는 중
        </span>
      {:else}
        <span
          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-500 bg-pp-200"
        >
          거의 다 왔어! 힘을 내라구!
        </span>
      {/if}
    </div>
    <div class="text-right">
      <span class="text-xs font-semibold inline-block text-pink-600">
        {Math.ceil(($pagination.page / ($pagination.max + 1)) * 100)}%
      </span>
    </div>
  </div>
  <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
    <div
      style={`width:${Math.ceil(
        ($pagination.page / ($pagination.max + 1)) * 100,
      )}%`}
      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
    />
  </div>
</div>
{#each quizzes as quiz}
  <Quiz {quiz} />
{/each}

<style>
</style>
