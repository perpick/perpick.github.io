<script lang="typescript">
  import { users } from "@src/stores";
  import { PC } from '@src/utils'

  import Title from './Title.component.svelte'
  import MBTI from './MBTI.component.svelte'

  const descriptions = PC.getDescription($users.mbti)
    
  const tags =PC.getTagsWithAttr($users.mbti)
  const title = PC.getTitle($users.title)
</script>
  
<style>
</style>
  
<div class="">
  <div class="">
    {#if title }
    <Title title={title} />
    {/if}
    {#if descriptions && tags }
    <MBTI descriptions={descriptions} tags={tags} />
    {/if}
  </div>
</div>
