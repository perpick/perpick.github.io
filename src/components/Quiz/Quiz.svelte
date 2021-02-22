<script lang="ts">
  import { users, pagination, nav } from "@src/stores";

  export let quiz: {
    page: number;
    title: string;
    selectors: {
      title: string;
      data: string;
    }[];
  };

  const handleClickSelct = (data: string) => {
    document.body.blur();
    $users.selects = [...$users.selects, data];
    $pagination.page += 1;
    if ($pagination.page > $pagination.max) $nav.current = "results";
  };
</script>

<div class="px-2">
  {#if quiz.page === $pagination.page}
    <p class="text-xl">{quiz.title}</p>
    <div class="flex flex-wrap">
      {#each quiz.selectors as selector}
        <div
          class="w-full m-4 "
          on:click={() => handleClickSelct(selector.data)}
        >
          <button
            class={`w-full p-4 bg-white shadow rounded text-base focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50  hover:outline-none hover:ring-2 hover:ring-purple-400 hover:ring-opacity-50  active:outline-none active:ring-2 active:ring-purple-400 active:ring-opacity-50`}
            >{selector.title}</button
          >
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  * {
    font-family: Jal_Onuel;
    word-break: keep-all;
  }
</style>
