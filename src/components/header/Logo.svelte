<script>
    import { link } from 'svelte-spa-router';
    import active from 'svelte-spa-router/active'
</script>

<a  
    use:link 
    use:active={'/'}
    href="/">
    SKYROCKET
</a>

<style>
    a {
        font-size: 48px;
        color: gold;
        font-weight: 700;
        text-decoration-line: none;
        margin: 0 auto
    }
</style>