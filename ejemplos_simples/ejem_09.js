let datos = ["pepe", "marta", "angel", "antonio", "daniel", "miguel"];
console.log(datos[1]);
console.log(datos[datos.length - 1]);

console.log(datos.at[1]);
console.log(datos.at[-1]);

datos.push("Juan");

for (let profe of datos) {
  console.log(profe);
}

datos.forEach(function trabaja(profe) {
  console.log(profe);
});

let valores = [4, 6, 2, 7];

console.log(
  valores.filter(function esPositivo(num) {
    //funcion que devueva true si es poritivo y false si es negativo lo que se pasa por parametro
    return num >= 0;
  }),
);

let nombre = ["juan", "maria", "vitrasa", "rosario", "mauricio", "pio"];
//mostrar por pantalla la gente con nombre de mas de 4 caracteres

//usar la funcion de orden superior filter
console.log(nombres.filter(moreThan4Characters));
//crea una funcion para filtrat array
//funcion que determine si el prametro pasado tiene mas de 4 carcteres
function moreThan4Characters(nombre) {
  return nombre.length > 4;
}

//lo mismo en codigo bello (muesta los nombres de +4 caracteres)
console.log(nombres.filter(nombre => nombre.length > 4));
