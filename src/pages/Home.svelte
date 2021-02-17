<script lang="ts">
  import { onMount } from 'svelte'
  import { users, pagination } from '@src/stores'
  import Welcome from '@src/components/Welcome/Welcome.svelte'
  
  onMount(() => {
    $pagination.page = 1
    $users.selects = []
    $users.email = ''
  })
</script>

<Welcome />