
const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

lienzo.width = window.innerWidth;
lienzo.height = window.innerHeight;

let particulas = [];
const mouse = { x: null, y: null, radio: 150 };

window.addEventListener('mousemove', (evento) => {
    mouse.x = evento.x;
    mouse.y = evento.y;
});

ctx.fillStyle = 'white';
ctx.font = 'bold 12vw Poppins';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('HOLA', lienzo.width / 2, lienzo.height / 2);

const datosImagen = ctx.getImageData(0, 0, lienzo.width, lienzo.height);

class Particula {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.tamano = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.densidad = (Math.random() * 40) + 5;
    }

    dibujar() {
        ctx.fillStyle = '#00ffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.tamano, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    actualizar() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distancia = Math.sqrt(dx * dx + dy * dy);
        let fuerzaDireccionX = dx / distancia;
        let fuerzaDireccionY = dy / distancia;
        let fuerzaMaxima = mouse.radio;
        let fuerza = (fuerzaMaxima - distancia) / fuerzaMaxima;
        let direccionX = fuerzaDireccionX * fuerza * this.densidad;
        let direccionY = fuerzaDireccionY * fuerza * this.densidad;

        if (distancia < mouse.radio) {
            this.x -= direccionX;
            this.y -= direccionY;
        } else {
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 10;
            }
            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 10;
            }
        }
    }
}