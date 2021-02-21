<script lang="ts">
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
  export let tags: string[]
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
  <h1 class="m-2 text-2xl text-pink-200">{descriptions.title}</h1>
  <p class="m-2 pt-2 text-base">{descriptions.detail}</p>
</div>