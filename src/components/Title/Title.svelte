<script lang="ts">
  export let title: {
    type: string;
    title: string;
    sumamry: string;
    tags: string[];
    emoji: string;
  }
  export let descriptions: {
    mbti: string;
    sub_title: string;
    advice: string;
    title: string;
    detail: string;
    word: string;
    animal: string;
    emoji: string;
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
    
<div class="m-4 divide-y-2 divide-gray-200 tracking-widest">
  <div>
    <h1 class="m-2 text-2xl  text-pink-200">{title.emoji}{descriptions.emoji}</h1>
    <h1 class="m-2 text-2xl  text-pink-200">{title.title} {descriptions.animal}</h1>
  </div>
  <p class="m-2 pt-2" >{title.sumamry}</p>
</div>