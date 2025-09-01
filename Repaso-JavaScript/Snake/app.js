document.addEventListener('DOMContentLoaded', () => {

    // --- Seleccionar los elementos
    const lienzo = document.querySelector('#lienzo-juego');
    const puntajeActual = document.querySelector('#puntaje-actual');
    const puntajeMaximo = document.querySelector('#puntaje-maximo');
    const mensajeGameOver = document.querySelector('#mensaje-game-over');
    const contexto = lienzo.getContext('2d');

    // --- Estado del juego
    const TAMANIO_CELDA = 20;
    const ANCHO_TABLERO = lienzo.width / TAMANIO_CELDA;
    const ALTO_TABLERO = lienzo.height / TAMANIO_CELDA;

    let serpiente = [{ x: 10, y: 10 }];
    let comida = generarPosicionComida();
    let direccion = 'derecha';
    let intervaloJuego;
    let puntaje = 0;
    let puntajeMax = localStorage.getItem('puntajeMaximoSnakeCanvas') || 0;
    let juegoTerminado = false;
    
    puntajeMaximo.textContent = puntajeMax;

    // --- Funciones
    function dibujar() {
        contexto.fillStyle = '#1a1a1a';
        contexto.fillRect(0, 0, lienzo.width, lienzo.height);

        contexto.fillStyle = '#e74c3c';
        contexto.fillRect(comida.x * TAMANIO_CELDA, comida.y * TAMANIO_CELDA, TAMANIO_CELDA, TAMANIO_CELDA);

        contexto.fillStyle = '#2ecc71';
        serpiente.forEach(segmento => {
            contexto.fillRect(segmento.x * TAMANIO_CELDA, segmento.y * TAMANIO_CELDA, TAMANIO_CELDA, TAMANIO_CELDA);
        })


    }

});