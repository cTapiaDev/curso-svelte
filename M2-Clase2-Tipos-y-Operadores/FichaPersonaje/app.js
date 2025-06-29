
const characterName = "Vegeta";
const characterRace = "Saiyan";
let currentLevel = 160;
let healthPoints = 1000;
let isAlive = true;

console.log("--- Ficha de Personaje ---")
console.log("Nombre:", characterName);
console.log("Raza:", characterRace);
console.log("Nivel:", currentLevel);
console.log("PV:", healthPoints);
console.log("¿Está vivo?:", isAlive);

// --- Cálculos de Atributos ---
const attackPower = currentLevel * 12;
let defensePoints = healthPoints / 4;

const characterBio = `${characterName} (${characterRace}): Nivel ${currentLevel}`

// --- Verificaciones Lógicas ---
const isPowerful = attackPower > 100;
const canEnterDungeon = (currentLevel >= 100) && (isAlive === true);

console.log("--------------------")
console.log(characterBio);
console.log(`Poder de Ataque: ${attackPower}`);
console.log(`Puntos de Defensa: ${defensePoints}`);
console.log(`¿Es poderoso?: ${isPowerful}`);
console.log(`¿Puede entrar en una mazmorra?: ${canEnterDungeon}`);
