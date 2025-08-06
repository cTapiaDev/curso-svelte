<script>
	let userName = "Aragorn";
	let level = 5;

	const user = {
		email: "aragorn@mordor.so"
	}

	let contador = 0;

	function aumentar() {
		contador++;
	}

	function disminuir() {
		contador--;
	}

</script>

<h1>Bienvenido, {userName}</h1>

<p>Tu nivel es: {level * 10}</p>
<p>Email: {user.email}</p>

<h2>{contador}</h2>

<button on:click={aumentar}>Aumentar</button>
<button on:click={disminuir}>Disminuir</button>

<style>

</style>