<script lang="ts">
  import { users, pagination, nav } from "@src/stores";

  export let quiz: {
    page: number;
    title: string;
    selectors: {
      title: string;
      data: string;
    }[]
  };

  const handleClickSelct = (data: string) => {
    $users.selects = [...$users.selects, data]
    $pagination.page += 1
    if($pagination.page > $pagination.max) $nav.current = 'results'
  }
</script>

<style>
	* {
		font-family: Jal_Onuel;
    word-break: keep-all;
	}
</style>

<div class="px-2">
  {#if quiz.page === $pagination.page}
    <p class="text-xl">{quiz.title}</p>
    <div class="flex flex-wrap">
      {#each quiz.selectors as selector}
      <div class="w-full m-4 " on:click={() => handleClickSelct(selector.data)}>
        <button class={`w-full p-4 bg-white hover:bg-pb-400 border-pb-400 border-2 rounded text-base`}>{selector.title}</button>
      </div>
      {/each}
    </div>
  {/if}
</div>
