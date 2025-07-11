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
});
miContainer.addEventListener('mouseout', () => {
    segundaImg.classList.toggle('efecto');;
})