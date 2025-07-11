// --- TIPOS DE DATOS ---
console.log(5 + 5); // 10
console.log("Hola" + " " + "Mundo"); // Hola Mundo
console.log("Hola" + "Mundo"); // HolaMundo
console.log("Hola", "Mundo"); // Hola Mundo
console.log("5" + "5"); // 55
console.log("5", "5"); // 5 5
console.log(5, 5); // 5 5
console.log(5 + "5"); // 55
console.log(500 + "5"); // "5005"
console.log("5" + 500); // "5500"

console.log("Pikachu: 'Nivel 10'"); // ("    ")
console.log('Pikachu: "Nivel 10"'); // ('    ')
// console.log('Pikachu: 'Nivel 10'');

let nombre;
console.log(nombre); // undefined

let apellido = null;
console.log(apellido); // Null

let datoNumerico = 25;
let datoDeTexto = "Hola Mundo 2";
let datoBooleano = true;

console.log(typeof datoNumerico); // numeric - int - integer
console.log(typeof datoDeTexto); // string
console.log(typeof datoBooleano); // booleano - boolean - bool
console.log(typeof nombre); // undefined



// --- OPERADORES ARITMÉTICOS ---
let num1 = 10;
let num2 = 5;

let suma = num1 + num2; // let suma = 10 + 5;
console.log("Suma:", suma); // Suma: 15

let resta = num1 - num2; // let resta = 10 - 5;
console.log("Resta:", resta); // Resta: 5

let multi = num1 * num2; 
console.log("Multiplicación:", multi);

let division = num1 / num2;
console.log("División:", division);

let modulo1 = 10 % 2; // 0
let modulo2 = 10 % 3; // 1
let modulo3 = 14 % 5; // 4
 
console.log("Modulo1:", modulo1);
console.log("Modulo2:", modulo2);
console.log("Modulo3:", modulo3);

let score = 10;
// score = score + 5;
// score += 5;
// score -= 5;
score++; // score = score + 1;
score++;
score++;
score--; // score = score - 1;
console.log("Score:", score);



// --- CONCATENAR CON STRINGS ---
let characterName = "Superman";
let power = "Volar";

let frase = "Mi héroe es " + characterName + " y su poder es " + power + ".";
console.log(frase);

frase = "Mi héroe es", characterName, "y su poder es", power;
// Mi héroe es Superman y su poder es volar

frase = `Mi héroe es ${characterName} y su poder es ${power}.`;
// Mi héroe es Superman y su poder es volar.
console.log(frase);
// ``

// --- OPERADORES DE COMPARACIÓN ---
console.log(10 > 5); // ¿10 es mayor a 5? -> True
console.log(10 < 5); // ¿10 es menor a 5? -> False
console.log(10 > 10); // ¿10 es mayor a 10? -> False
console.log(10 >= 10); // ¿10 es mayor o igual a 10? -> True
console.log(10 < 10); // ¿10 es menor a 10? -> False
console.log(10 <= 10); // ¿10 es menor o igual a 10? -> True
console.log(10 != 10); // ¿10 es diferente de 10? -> False
// console.log(10 = 10); // ERROR porque es como si quisiéramos guardar algo en una variable.
console.log(10 == 10); // ¿10 es igual a 10? -> True
console.log(10 == "10"); // --> true (Evalúa el contenido) -> True
console.log(10 === "10"); // --> false (Evalúa el contenido y el tipo de dato) -> False
console.log(10 != "10"); // --> false (Evalúa el contenido) -> False
console.log(10 !== "10"); // --> true (Evalúa el contenido y el tipo de dato) -> True
