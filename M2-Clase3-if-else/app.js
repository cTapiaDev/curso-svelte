
// --- If/else ---

let tengoHambre = true;

if (tengoHambre === true) {
    console.log("Voy a comer una pizza 🍕");
} else {
    console.log("No tengo hambre.");
}

// --- PRACTICA ---
let userAge = 18;

if (userAge >= 18) {
    console.log("Acceso permitido al contenido.");
} else {
    console.log("Acceso denegado.");
}

// --- if / else if / else ---
let nota = 4.0;

if (nota === 7.0) {
    console.log("¡Excelente!");
} else if (nota >= 4.0 && nota < 7.0) { // true && true = true
    console.log("Buen trabajo");
} else if (nota >= 1.0 && nota < 4.0) {
    console.log("Necesitas estudiar más");
} else {
    console.log("Se debe ingresar un dato valido");
}


// --- && , || y ! (Y, O y NOT) ---

let edad = 25;
let esHombre = true;

console.log(edad >= 20 && edad <= 30);
console.log(edad >= 18 && esHombre === true); // true && true = true
console.log(edad >= 18 && esHombre === false); // true && false = false

console.log(edad >= 18 || esHombre === false);  // true || false = true
console.log(edad < 18 || esHombre === false); // false || false = false

console.log(!esHombre);

// --- Falsy ---

let dato = 5 - 5;

if (dato) {
    console.log("El dato es un Truthy");
} else {
    console.log("El dato es un Falsy");
}

let prueba = null;
console.log(typeof prueba);