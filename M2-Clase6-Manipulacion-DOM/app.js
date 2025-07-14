const miTitulo = document.querySelector('h1');
const miCaja = document.querySelector('.caja');
const miCirculo = document.querySelector('.circulo');
const miRectangulo = document.querySelector('.rectangulo');

console.log(miTitulo);

// miTitulo.textContent = "Este es un nuevo título";
miTitulo.innerHTML = "Este nuevo Título es <em>¡ASOMBROSO!</em>"

miCaja.style.width = '500px';
miCaja.style.height = '500px';
miCaja.style.backgroundColor = 'cornflowerblue'; 
miCaja.style.padding = '20px';
miCaja.style.borderRadius = '10px';
miCaja.style.backgroundImage = 'url("https://www.directvsports.com/__export/1724976414353/sites/dsports/img/2024/08/29/cristiano_ronaldo_al-nassr.jpg_2072116970.jpg")';
miCaja.style.backgroundSize = 'cover';

miCirculo.classList.add('personaje');
miRectangulo.classList.toggle('personaje'); // Agregar o quitar, dependiendo si existe o no

// -- Práctico --
miParrafo = document.querySelector('p');
miParrafo.classList.add('resaltado');
miParrafo.style.fontSize = '100px';
miParrafo.textContent = "¡He sido modificado y resaltado!";
