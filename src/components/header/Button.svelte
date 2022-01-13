<script>
    function toggle() {
        window.document.body.classList.toggle('dark-mode')
    }
    </script>
    <button on:click={toggle}>
        <slot/>
    </button>
    <style>
        button {
            background-color: whitesmoke;
            color: black;
            border: 0px none;
            display: flex;
            align-items: center;
            font-weight: 300;
            text-decoration-line: none;
            
        }
        :global(body.dark-mode) button {
            background-color: #2f3640;
            color: white;
        }
    </style>