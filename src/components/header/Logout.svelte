<script>
    import { link } from 'svelte-spa-router';
    import active from 'svelte-spa-router/active'
</script>

<button>
    <a  
    use:link 
    use:active={'/'}
    href="/">
    LOG OUT
</a>
</button>


<style>
    a {
        color: inherit; 
        text-decoration-line: none;
        margin: 0 auto;
        align-items: center;
    }
    button {
        background-color: whitesmoke;
        color: black;
        border: 0px none;
        display: flex;
        align-items: center;
        font-weight: 300;
        text-decoration-line: none;
        padding-bottom: 0px;
    }
        :global(body.dark-mode) button {
            background-color: #2f3640;
            color: white;
        }
</style>