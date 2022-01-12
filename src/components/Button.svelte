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
            border: none;
            border-radius: 4px;
            padding: 0.5rem;
            text-transform: uppercase;
            
        }
        :global(body.dark-mode) button {
            background-color: #2f3640;
            color: white;
        }
    </style>