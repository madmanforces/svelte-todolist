<script>
    import {onMount, onDestroy, beforeUpdate, afterUpdate} from 'svelte'

    let name = 'Something..'
    let h1
    

    function moreDot() {
        name += '.'
    }
    beforeUpdate(() => {
        console.log('비포 업데이트!')
        console.log(h1 && h1.innerText)
    })
    afterUpdate(() => {
        console.log('에프터 업데이트!')
        console.log(h1.innerText)
    })
    onMount(() => {
        console.log('마운트됐어!')
        h1 = document.querySelector('h1')
        })
    onDestroy(() => {
        console.log('파괴 했다구!')
    })
</script>

<h1 on:click={moreDot}>{name}</h1>