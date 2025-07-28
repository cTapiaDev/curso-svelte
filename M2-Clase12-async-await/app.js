async function obtenerDatos() {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
            throw new Error('Error al capturar los datos');
        }
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Algo salió mal:", error);
    }
}

obtenerDatos();

async function obtenerPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/lapras');
        if (!response.ok) {
            throw new Error(`HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("¡Ha ocurrido un error! =", error);
    }
}

const pokemon = await obtenerPokemon();
console.log(pokemon);