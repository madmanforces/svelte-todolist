<script>
    import Button from './Button.svelte';
    import Logo from './Logo.svelte'
    import Logout from './Logout.svelte'
</script>
<header>
<Logout/>
<Logo/>
<Button>
    Dark-mode
</Button>
</header>
<style>
    :global(body) {
		background-color: whitesmoke;
			color:black;
		
	}
	:global(body.dark-mode) {
		background-color: #2f3640;
            color: white;
	}
    header {
        height: 15vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>