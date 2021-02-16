<script lang="ts">
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
	h1 {
		font-family: KOTRA_BOLD-Bold;
    word-break: keep-all;
	}
  p {
		font-family: RIDIBatang;
    word-break: keep-all;
  }
</style>
    
<div class="m-4 divide-y divide-pb-400">
  <h1 class="m-2 text-3xl">{title.title} {descriptions.animal}</h1>
  <p class="m-2 pt-2" >{title.sumamry}</p>
</div>