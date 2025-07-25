const pokemonName = document.querySelector('#pokemon-name');
const pokemonImage = document.querySelector('#pokemon-image');
const errorMessage = document.querySelector('#error-message');
const finalMessage = document.querySelector('#final-message');


fetch('https://pokeapi.co/api/v2/pokemon/lapras')
    .then(res => {
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        pokemonName.textContent = data.name;
        pokemonImage.src = data.sprites.front_default;
    })
    .catch(error => {
        errorMessage.textContent = "¡Ups! No pudimos contactar al servidor: Revisa tu conexión"
    })
    .finally(() => {
        finalMessage.textContent = "Proceso finalizado";
    })