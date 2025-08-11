// --- SELECCIÓN DE LOS ELEMENTOS DEL DOM ---
const buscadorFormulario = document.querySelector('#buscador-formulario');
const buscadorInput = document.querySelector('#buscador-input');
const contenedorResultados = document.querySelector('#contenedor-resultados');

// --- LÓGICA DE LA API ---
async function buscarShows(query) {
    const API_URL = `https://api.tvmaze.com/search/shows?q=${query}`;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al buscar un show:", error);
        return [];
    }
}

// --- LÓGICA DE RENDERIZADO --- 

function mostrarResultados(shows) {
    // 1. Limpiamos los resultados anteriores.
    contenedorResultados.innerHTML = "";

    // 2. Comprobar si existen o no resultados.
    if (shows.length === 0) {
        contenedorResultados.innerHTML = `<p>No se encontraron resultados para tu búsqueda.</p>`;
        return;
    }

    // 3. Recorremos el array completo.
    shows.forEach(item => {
        const show = item.show;

        const urlImagen = show.image ? show.image.medium : 'https://placehold.co/210x295.png';

        const tarjetaShow = document.createElement('div');

        tarjetaShow.classList.add('tarjeta-show');

        tarjetaShow.innerHTML = `
            <img src="${urlImagen}" alt="Póster de ${show.name}">
            <h3>${show.name}</h3>
        `;

        contenedorResultados.appendChild(tarjetaShow);
    });
}

// --- MANEJO DEL EVENTO ---
buscadorFormulario.addEventListener('submit', async (event) => {
    event.preventDefault();

    const terminoBusqueda = buscadorInput.value.trim(); 

    if (terminoBusqueda) {
        contenedorResultados.innerHTML = "<p>Buscando...</p>";

        const shows = await buscarShows(terminoBusqueda);

        mostrarResultados(shows);
    }
})