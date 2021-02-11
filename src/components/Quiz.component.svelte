<script lang="typescript">
  import { users, pagination } from "@src/stores";

  export let quiz: {
    title: string;
    selectors: {
      title: string;
      data: string;
    }[]
  };

  const handleClickSelct = (data: string) => {
    console.log(data)
  }
</script>

<style>
</style>
  
<div class="">
  {#each quiz.selectors as selector}
  <button on:click={() => handleClickSelct(selector.data)}>{selector.title}</button>
	{/each}

  <p>now : {$pagination.page} / {$pagination.max}</p>
</div>
