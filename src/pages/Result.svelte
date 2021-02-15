<script lang="typescript">
    import Result from '@src/components/Results/Result.svelte'

    const searchPerfumes = () => {

    }
</script>

<style>
</style>
  {#await searchPerfumes then perfumes}
  {/await}
<Result />
