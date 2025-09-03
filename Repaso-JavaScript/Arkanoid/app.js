// ELEMENTOS DEL DOM
const lienzo = document.querySelector('#lienzo-juego');
const contexto = lienzo.getContext('2d');
const mensajeVictoria = document.querySelector('#mensaje-victoria');
const mensajeDerrota = document.querySelector('#mensaje-derrota');

// VARIABLES DEL JUEGO
// --- Bola ---
let bola = {
    x: lienzo.width / 2,
    y: lienzo.height - 30,
    radio: 10,
    velocidadX: 4,
    velocidadY: -4
};

// --- Paleta ---
let paleta = {
    altura: 10,
    ancho: 100,
    x: (lienzo.width - 100) / 2
};

// --- Ladrillos ---
let ladrillos = [];
const configLadrillos = {
    filas: 5,
    columnas: 8,
    ancho: 75,
    altura: 20,
    padding: 10,
    margenSuperior: 40,
    margenIzquierdo: 65
}

// --- Generales ---
let puntaje = 0;
let vidas = 3;


// ESTRUCTURA DE LADRILLOS
function crearLadrillos() {
    ladrillos = [];
    for (let c = 0; c < configLadrillos.columnas; c++) {
        ladrillos[c] = [];
        for (let f = 0; f < configLadrillos.filas; f++) {
            const ladrilloX = (c * (configLadrillos.ancho + configLadrillos.padding)) + configLadrillos.margenIzquierdo;
            const ladrilloY = (f * (configLadrillos.altura + configLadrillos.padding)) + configLadrillos.margenSuperior;
            ladrillos[c][f] = { x: ladrilloX, y: ladrilloY, visible: true };
        }
    }
}

// FUNCIONES DEL DIBUJO
function dibujarBola() {
    contexto.beginPath();
    contexto.arc(bola.x, bola.y, bola.radio, 0, Math.PI * 2);
    contexto.fillStyle = '#e0fbfc';
    contexto.fill();
    contexto.closePath();
}

function dibujarPaleta() {
    contexto.beginPath();
    contexto.rect(paleta.x, lienzo.height - paleta.altura, paleta.ancho, paleta.altura);
    contexto.fillStyle = '#4d9de0';
    contexto.fill();
    contexto.closePath()
}

function dibujarLadrillos() {
    ladrillos.forEach(columna => {
        columna.forEach(ladrillo => {
            if (ladrillo.visible) {
                contexto.beginPath();
                contexto.rect(ladrillo.x, ladrillo.y, configLadrillos.ancho, configLadrillos.altura);
                contexto.fillStyle = '#e15554';
                contexto.fill();
                contexto.closePath();
            }
        })
    })
}

function dibujarInfo() {
    contexto.font = '18px Arial';
    contexto.fillStyle = '#e0fbfc';
    contexto.fillText(`Puntaje: ${puntaje}`, 8, 20);
    contexto.fillText(`Vidas: ${vidas}`, lienzo.width - 75, 20);
}

// MOVIMIENTO Y COLISIONES
function moverTodo() {
    bola.x += bola.velocidadX;
    bola.y += bola.velocidadY;

    // Colisión con paredes (izquierda/derecha)
    if (bola.x + bola.radio > lienzo.width || bola.x - bola.radio < 0) {
        bola.velocidadX *= -1;
    }

    // Colisión con pared (superior)
    if (bola.y - bola.radio < 0) {
        bola.velocidadY *= -1;
    }

    // Colisión con paleta
    if (bola.y + bola.radio > lienzo.height - paleta.altura &&
        bola.x > paleta.x &&
        bola.x < paleta.x + paleta.ancho) {
        bola.velocidadY *= -1;
    }

    // Colisión con pared (inferior) - Pierde una vida
    if (bola.y + bola.radio > lienzo.height) {
        vidas--;
        if (vidas === 0) {
            mensajeDerrota.style.display = 'block';
            // document.location.reload();
        } else {
            reiniciarPosiciones();
        }
    }

    // Colisión con ladrillos
    ladrillos.forEach(columna => {
        columna.forEach(ladrillo => {
            if (ladrillo.visible) {
                if (bola.x > ladrillo.x &&
                    bola.x < ladrillo.x + configLadrillos.ancho &&
                    bola.y > ladrillo.y &&
                    bola.y < ladrillo.y + configLadrillos.altura) {
                    bola.velocidadY *= -1;
                    ladrillo.visible = false;
                    puntaje++;

                    // Comprobar si ganó
                    if (puntaje === configLadrillos.filas * configLadrillos.columnas) {
                        mensajeVictoria.style.display = 'block';
                        // document.location.reload();
                    }
                }
            }
        });
    });
}

function reiniciarPosiciones() {
    bola.x = lienzo.width / 2;
    bola.y = lienzo.height - 30;
    bola.velocidadX = 4,
    bola.velocidadY = -4;
    paleta.x = (lienzo.width - paleta.ancho) / 2;
}

// JUEGO PRINCIPAL
function actualizar() {
    contexto.clearRect(0, 0, lienzo.width, lienzo.height);

    dibujarBola();
    dibujarPaleta();
    dibujarLadrillos();
    dibujarInfo();

    moverTodo();

    requestAnimationFrame(actualizar);
}

function moverPaleta(evento) {
    const rect = lienzo.getBoundingClientRect();
    const posicionRelativaX = evento.clientX - rect.left;

    if (posicionRelativaX > 0 && posicionRelativaX < lienzo.width) {
        paleta.x = posicionRelativaX - paleta.ancho / 2;
    }
}

document.addEventListener('mousemove', moverPaleta);

crearLadrillos();
actualizar();

mensajeVictoria.addEventListener('click', () => document.location.reload());
mensajeDerrota.addEventListener('click', () => document.location.reload());

