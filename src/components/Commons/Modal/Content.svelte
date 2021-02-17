<script lang="ts">
    import { getContext } from 'svelte';
    import PopupLong from './PopupLong.svelte';

    export let title: string, descHead: string,descBody: string
  
    const { open } = getContext('simple-modal');

    const showPopupLong = () => {
        open(PopupLong, { descHead, descBody});
    };
</script>

<style>
    * {
      font-family: HangeulNuri-Bold;
      word-break: keep-all;
    }
</style>

<section class="text-center">
    <button
        type="button"
        style="transition: all .15s ease"
        class="bg-white text-pink-200 border-b-2 active:bg-pp-600 active:text-white font-bold uppercase text-sm px-2 pb-1 hover:text-gray-400 hover:border-pink-200 outline-none focus:outline-none" 
        on:click={showPopupLong}>{ title }</button>
</section>
