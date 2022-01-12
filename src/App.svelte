<script>
	import  Something  from './Something.svelte'
	import { lifecycle, delayRender } from './lifecycle.js'
	let done = delayRender()
	lifecycle()
</script>


{#if $done}
	<h1>hello life cycle</h1>
{/if}

<Something />







