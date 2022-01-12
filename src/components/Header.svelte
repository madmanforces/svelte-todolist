<script>
    import { link } from 'svelte-spa-router';
    import active from 'svelte-spa-router/active'
    import Button from './Button.svelte';
</script>

<a  
    use:link 
    use:active={'/'}
    href="/">
    COIN TRACKER
    </a>
<Button>
    DarkMode
</Button>


<style>
    :global(body) {
		background-color: whitesmoke;
			color:black;
		
	}
	:global(body.dark-mode) {
		background-color: #2f3640;
            color: white;
	}
    a {
        color: rgb(223, 189, 1);
        font-size: 1.3em;
        font-weight: 500;
        text-decoration-line: none;
    }
</style>