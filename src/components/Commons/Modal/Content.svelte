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
</style>

<section class="p-1">
    <button
    type="button"
    style="transition: all .15s ease"
    class="bg-pink-400 text-white active:bg-pink-500 hover:bg-pink-500 font-bold uppercase text-sm px-4 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" 
     on:click={showPopupLong}>{ title }</button>
</section>
