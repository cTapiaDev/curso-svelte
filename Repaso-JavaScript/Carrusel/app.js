document.addEventListener('DOMContentLoaded', () => {

    const diapositivasContenedor = document.querySelector('.carrusel-diapositivas');
    const diapositivas = Array.from(document.querySelectorAll('.diapositiva'));
    const botonAnterior = document.querySelector('#boton-anterior');
    const botonSiguiente = document.querySelector('#boton-siguiente');
    const puntosContenedor = document.querySelector('.carrusel-puntos');

    let indiceActual = 0;
    const totalDiapositivas = diapositivas.length;

    diapositivas.forEach((_, i) => {
        const punto = document.createElement('div');
        punto.classList.add('punto');
        punto.setAttribute('data-indice', i);
        puntosContenedor.appendChild(punto);
    });

    const puntos = document.querySelectorAll('.punto');

    // --- Funciones ---
    function actualizarCarrusel() {
        diapositivasContenedor.style.transform = `translateX(-${indiceActual * 100}%)`;

        puntos.forEach(punto => {
            punto.classList.remove('activo');
            if (Number(punto.getAttribute('data-indice')) === indiceActual) {
                punto.classList.add('activo');
            }
        });
    }

    // --- Manejo de eventos ---
    botonSiguiente.addEventListener('click', () => {
        indiceActual = (indiceActual + 1) % totalDiapositivas;
        actualizarCarrusel();
    });

    botonAnterior.addEventListener('click', () => {
        indiceActual = (indiceActual - 1 + totalDiapositivas) % totalDiapositivas;
        actualizarCarrusel();
    });

    puntosContenedor.addEventListener('click', (evento) => {
        if (evento.target.classList.contains('punto')) {
            indiceActual = Number(evento.target.getAttribute('data-indice'));
            actualizarCarrusel();
        }
    });

    actualizarCarrusel();
});