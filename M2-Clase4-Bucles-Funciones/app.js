// --- BUCLE FOR ---
for (let i = 1; i <= 5; i++) {
    console.log(`Vuelta número: ${i}`);
}

// --- PRACTICA DESPEGUE ---
for (let i = 10; i >= 1; i--) {
    console.log(i);
    if (i === 1) {
        console.log("¡Despegue!");
    }
}

// --- FUNCIONES ---
function saludar() {
    console.log("¡Hola, equipo!");
    console.log("¡Vamos a programar!");
}

saludar();

// --- Función con parámetros ---
function saludarPersona(nombre) {
    console.log(`¡Buenos días, ${nombre}!`);
}

saludarPersona("Ana");
saludarPersona("Constanza");
saludarPersona("Roberto");

// --- Función con return ---
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(10, 20);
let resultado2 = sumar(50, 100);
console.log(`El resultado de la suma es: ${resultado}`);
console.log(`El resultado dos de la suma es: ${resultado2}`);

// --- Función Scope ---
function prueba() {
    let saludoPrueba = "Hola desde la función";
    saludoPrueba = "Hola desde función con prueba modificada";
    console.log(saludoPrueba);
}

const saludoPrueba = "Saludos desde fuera de la función";
console.log(saludoPrueba);
prueba();

