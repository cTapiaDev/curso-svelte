console.log("-------------------------")
console.log("--- Actividad Clase 1 ---")
console.log("-------------------------")

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

console.log("");
console.log("-------------------------")
console.log("--- Actividad Clase 2 ---")
console.log("-------------------------")

// --- Cálculos de Atributos ---
const attackPower = currentLevel * 12;
let defensePoints = healthPoints / 4;

const characterBio = `${characterName} (${characterRace}): Nivel ${currentLevel}`

// --- Verificaciones Lógicas ---
const isPowerful = attackPower > 100;
const canEnterDungeon = (currentLevel >= 100) && (isAlive === true);

console.log(characterBio);
console.log(`Poder de Ataque: ${attackPower}`);
console.log(`Puntos de Defensa: ${defensePoints}`);
console.log(`¿Es poderoso?: ${isPowerful}`);
console.log(`¿Puede entrar en una mazmorra?: ${canEnterDungeon}`);

console.log("");
console.log("-------------------------")
console.log("--- Actividad Clase 3 ---")
console.log("-------------------------")
// --- Decisión de Batalla ---
if (healthPoints > 70) {
    console.log(`¡${characterName} está en plena forma!`);
} else if (healthPoints > 30) {
    console.log(`¡${characterName} está herido, cuidado!`);
} else {
    console.log(`¡PELIGRO! ¡${characterName} necesita ayuda urgente!`);
}

// --- Cofre del Tesoro ---
let hasGoldenKey = true;
let enemyGuarding = false;

if (hasGoldenKey && !enemyGuarding) {
    console.log("¡El cofre se abre y revela un tesoro!");
} else {
    console.log("El camino hacia el cofre está bloqueado...");
}

console.log("");
console.log("-------------------------")
console.log("--- Actividad Clase 4 ---")
console.log("-------------------------")

function checkStatus(currentLife) {
    if (currentLife > 70) {
        console.log(`¡${characterName} está en plena forma!`);
    } else if (currentLife > 30) {
        console.log(`¡${characterName} está herido, cuidado!`);
    } else {
        console.log(`¡PELIGRO! ¡${characterName} necesita ayuda urgente!`);
    }
}

function canPerformMission(level, energy) {
    return level > 5 && energy > 60;
}

for (let i = 1; i <= 5; i++) {
    currentLevel++;
    console.log(`¡Entrenamiento completado! Nuevo nivel: ${currentLevel}`);
}

checkStatus(healthPoints);
let canGo = canPerformMission(currentLevel, 80);
console.log(`¿Listo para la misión? ${canGo}`);