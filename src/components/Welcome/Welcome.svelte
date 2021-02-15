<script lang="typescript">
    import Typewriter from '@src/components/Typewriter/Typewriter.svelte'
    import API from '@src/api/perfumes'

API.getPerfumes()
</script>
  
<style>
</style>
  
<Typewriter>
	<h1>Testing the typewriter effect</h1>
	<h2>The typewriter effect cascades by default</h2>
	<p>Lorem ipsum dolor sit amet consectetur</p>
</Typewriter>