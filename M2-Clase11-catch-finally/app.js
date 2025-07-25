fetch('https://fakestoreapi.com/product')
    .then(res => {
        if (!res.ok) {
            throw new Error(`ERROR HTTP: ${res.status}`);
        }
        return res.json();
    })
    .then(data => console.log("¡Exito!", data))
    .catch(error => console.error("¡Ha ocurrido un error!", error))
    .finally(() => console.log("Se está ejecutando el finally. No importa si falló o no."));

