<script>
    let count = 0;

    function increment() {
        count += 1;
    }

    function decrement() {
        count -= 1;
    }
</script>

<main>
    <h1>Contador</h1>
    <p>El valor actual es: {count}</p>
    <button on:click={increment}>
        Aumentar
    </button>
    <button on:click={decrement}>
        Disminuir
    </button>
</main>

<style>
    main {
        text-align: center;
        padding: 32px;
    }

    h1 {
        color: chocolate;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }
</style>