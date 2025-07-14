const miBoton = document.querySelector('#mi-boton');
const miBody = document.querySelector('body');
const miContainer = document.querySelector('.container');
const segundaImg = document.querySelector('.img-oculta');

function hacerMagia() {
    console.log('Le diste clic al botón');
}

function cambiarFondo() {
    miBody.style.backgroundColor = 'red';
}

// miBoton.addEventListener('click', hacerMagia);
// miBoton.addEventListener('click', cambiarFondo);

miContainer.addEventListener('mouseover', () => {
    segundaImg.classList.toggle('efecto');
    // segundaImg.classList.remove('efecto');
});
miContainer.addEventListener('mouseout', () => {
    segundaImg.classList.toggle('efecto');;
})



// If ternario //
let edad = 16

edad > 18 
    ? console.log('Tiene 18 años o más') 
    : console.log("Es menor de edad");

edad > 18 ? console.log('Tiene 18 años o más') : console.log("Es menor de edad");

// if (edad > 18) {
//     console.log('Tiene 18 años o más') 
// } else {
//     console.log("Es menor de edad")
// }