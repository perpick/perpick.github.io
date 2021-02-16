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

<section class="p-1">
    <button
        type="button"
        style="transition: all .15s ease"
        class="bg-white text-pb-600 border-pb-600 border-2 active:bg-pb-600 active:text-white hover:bg-pb-600 hover:text-white font-bold uppercase text-sm px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" 
        on:click={showPopupLong}>{ title }</button>
</section>
