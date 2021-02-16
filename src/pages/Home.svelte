<script lang="ts">
  import { users, pagination } from '@src/stores'
  import Welcome from '@src/components/Welcome/Welcome.svelte'
  
  $pagination.page = 1
  $users.selects = []
</script>

<Welcome />