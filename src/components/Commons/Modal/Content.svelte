<script>
    import { getContext } from 'svelte';
    import PopupLong from './PopupLong.svelte';

    export let title, descHead,descBody
  
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
    class="bg-indigo-400 text-white active:bg-indigo-500 hover:bg-indigo-500 font-bold uppercase text-sm px-4 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" 
     on:click={showPopupLong}>{ title }</button>
</section>
