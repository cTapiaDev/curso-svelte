const msjResultado = document.querySelector('#resultado');
const oUsuario = document.querySelector('#optUsuario');
const oMaquina = document.querySelector('#optMaquina');
const btnPiedra = document.querySelector('#oPiedra');
const btnPapel = document.querySelector('#oPapel');
const btnTijera = document.querySelector('#oTijera');
const btnOpcion = document.querySelectorAll("[data-opcion]");

// const opciones = ["Piedra", "Papel", "Tijera"];

btnPiedra.addEventListener("click", () => {
    const random = Math.floor(Math.random() * 3);

    if (random === 0) {
        msjResultado.textContent = "¡EMPATE!";
        oUsuario.textContent = "Usuario: Piedra";
        oMaquina.textContent = "Maquina: Piedra";
    } else if (random === 1) {
        msjResultado.textContent = "¡PERDISTE!";
        oUsuario.textContent = "Usuario: Piedra";
        oMaquina.textContent = "Maquina: Papel";
    } else {
        msjResultado.textContent = "¡GANASTE!";
        oUsuario.textContent = "Usuario: Piedra";
        oMaquina.textContent = "Maquina: Tijera";
    }
});

btnPapel.addEventListener("click", () => {
    const random = Math.floor(Math.random() * 3);

    if (random === 0) {
        msjResultado.textContent = "¡GANASTE!";
        oUsuario.textContent = "Usuario: Papel";
        oMaquina.textContent = "Maquina: Piedra";
    } else if (random === 1) {
        msjResultado.textContent = "¡EMPATE!";
        oUsuario.textContent = "Usuario: Papel";
        oMaquina.textContent = "Maquina: Papel";
    } else {
        msjResultado.textContent = "¡PERDISTE!";
        oUsuario.textContent = "Usuario: Papel";
        oMaquina.textContent = "Maquina: Tijera";
    }
});

btnTijera.addEventListener("click", () => {
    const random = Math.floor(Math.random() * 3);

    if (random === 0) {
        msjResultado.textContent = "¡PERDISTE!";
        oUsuario.textContent = "Usuario: Tijera";
        oMaquina.textContent = "Maquina: Piedra";
    } else if (random === 1) {
        msjResultado.textContent = "¡GANASTE!";
        oUsuario.textContent = "Usuario: Tijera";
        oMaquina.textContent = "Maquina: Papel";
    } else {
        msjResultado.textContent = "¡EMPATE!";
        oUsuario.textContent = "Usuario: Tijera";
        oMaquina.textContent = "Maquina: Tijera";
    }
});

// function jugar(opcionUsuario) {
//     const indiceMaquina = Math.floor(Math.random() * 3);
//     const opcionMaquina = opciones[indiceMaquina];

//     const resultado = determinarResultado(opcionUsuario, opcionMaquina);
//     actualizarUI(resultado, opcionUsuario, opcionMaquina);
// }

// function determinarResultado(usuario, maquina) {
//     if (usuario === maquina) {
//         return "¡EMPATE!";
//     }

//     if (
//         (usuario === "Piedra" && maquina === "Tijera") ||
//         (usuario === "Papel" && maquina === "Piedra") ||
//         (usuario === "Tijera" && maquina === "Papel")
//     ) {
//         return "¡GANASTE!";
//     }

//     return "¡PERDISTE!";s
// }

// function actualizarUI(resultado, usuario, maquina) {
//     msjResultado.textContent = resultado;
//     oUsuario.textContent = `Usuario: ${usuario}`;
//     oMaquina.textContent = `Maquina: ${maquina}`;
// }

// btnOpcion.forEach(btn => {
//     btn.addEventListener("click", () => {
//         const opcionSeleccionada = btn.dataset.opcion;
//         jugar(opcionSeleccionada);
//     });
// });
