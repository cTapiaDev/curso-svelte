const datosJSON = '{"nombre": "Legolas", "arma": "Arco", "destino": "Tierras Altas"}';
const datosJS = JSON.parse(datosJSON);

console.log(datosJS);
console.log(datosJS.arma);
console.log(datosJS.destino);
console.log(datosJS.nombre);
console.log(datosJS.edad);