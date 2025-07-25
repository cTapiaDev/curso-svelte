fetch('https://pokeapi.co/api/v2/pokemon/charmander/1')
    .then(res => res.json())
    .then(data => {
        console.log(data.name);
        console.log(data.id);
        console.log(data.sprites.front_default);
        console.log(data.height);
        console.log(data.abilities[0].ability.name);
    });

