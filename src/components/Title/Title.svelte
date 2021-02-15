<script lang="typescript">
  export let title: {
    type: string;
    title: string;
    sumamry: string;
    tags: string[];
  }
  export let descriptions: {
    mbti: string;
    sub_title: string;
    advice: string;
    title: string;
    detail: string;
    word: string;
    animal: string;
  }
</script>
  
<style>
</style>
    
<div class="m-4">
  <p class="m-2">{title.title} {descriptions.animal}</p>
  <p class="m-2" >{title.sumamry}</p>
</div>