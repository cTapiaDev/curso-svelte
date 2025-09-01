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
        });
    }

    function mover() {
        if (juegoTerminado) return;

        const cabeza = { ...serpiente[0] };

        switch (direccion) {
            case 'arriba': cabeza.y--; break;
            case 'abajo': cabeza.y++; break;
            case 'izquierda': cabeza.x--; break;
            case 'derecha': cabeza.x++; break;
        }

        serpiente.unshift(cabeza);

        if (cabeza.x === comida.x && cabeza.y === comida.y) {
            puntaje++;
            puntajeActual.textContent = puntaje;
            comida = generarPosicionComida();
        } else {
            serpiente.pop();
        }

        verificarColisiones();
        dibujar();
    }

    function verificarColisiones() {
        const cabeza = serpiente[0];

        if (cabeza.x < 0 || cabeza.x >= ANCHO_TABLERO || cabeza.y < 0 || cabeza.y >= ALTO_TABLERO) {
            terminarJuego();
        }

        for (let i = 1; i < serpiente.length; i++) {
            if (cabeza.x === serpiente[i].x && cabeza.y === serpiente[i].y) {
                terminarJuego();
                return;
            }
        }
    }

    function generarPosicionComida() {
        let nuevaPosicion;
        do {
            nuevaPosicion = {
                x: Math.floor(Math.random() * ANCHO_TABLERO),
                y: Math.floor(Math.random() * ALTO_TABLERO)
            };
        } while (serpiente.some(s => s.x === nuevaPosicion.x && s.y === nuevaPosicion.y));
        return nuevaPosicion;
    }

    function terminarJuego() {
        juegoTerminado = true;
        clearInterval(intervaloJuego);
        mensajeGameOver.classList.add('mostrar');

        if (puntaje > puntajeMax) {
            puntajeMax = puntaje;
            puntajeMaximo.textContent = puntajeMax;
            localStorage.setItem('puntajeMaximoSnakeCanvas', puntajeMax);
        }
    }

    function iniciarJuego() {
        juegoTerminado = false;
        serpiente = [{ x: 10, y: 10 }];
        comida = generarPosicionComida();
        direccion = 'derecha';
        puntaje = 0;
        puntajeActual.textContent = puntaje;
        mensajeGameOver.classList.remove('mostrar');

        clearInterval(intervaloJuego);
        intervaloJuego = setInterval(mover, 150);
    }

    function manejarTeclado(evento) {
        if (evento.key === 'Enter' && juegoTerminado) {
            iniciarJuego();
            return;
        }

        const irArriba = (direccion !== 'abajo');
        const irAbajo = (direccion !== 'arriba');
        const irIzquierda = (direccion !== 'derecha');
        const irDerecha = (direccion !== 'izquierda');

        switch (evento.key) {
            case 'ArrowUp': if (irArriba) direccion = 'arriba'; break;
            case 'ArrowDown': if (irAbajo) direccion = 'abajo'; break;
            case 'ArrowLeft': if (irIzquierda) direccion = 'izquierda'; break;
            case 'ArrowRight': if (irDerecha) direccion = 'derecha'; break;
        }
    }

    document.addEventListener('keydown', manejarTeclado);

    iniciarJuego();

});