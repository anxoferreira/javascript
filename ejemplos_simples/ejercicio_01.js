//array de alumnos cada alumno tiene nombre y nota
let alumnos = [
  { nombre: "juan", nota: 3 },
  { nombre: "alvaro", nota: 10 },
  { nombre: "angel", nota: 7 },
];

//añadir uno nuebo que se llama rober de nota 2
alumnos.push({ nombre: "roberto", nota: 2 });

//muesta la nota de alvaro
console.log(alumnos.at[3].nota);

//muestra cuantos alumnos hay
console.log(alumnos.length);

//funcion que se pase array parametro y devuelva el numero de aprobados
function numeroAprobados(alumnos) {
  let contador = 0;
  for (let alumno of alumnos) {
    if (alumno.nota >= 5) {
      contador++;
    }
  }
  return contador;
}

console.log(numeroAprobados(alumnos));

//programacion declarativa
console.log(alumnos.filter((a) => a.nota >= 5).length);

//funcion que reciba array y de la media
function notaMedia(alumnos) {
  let suma = 0;
  for (let alumno of alumnos) {
    suma += alumno.nota;
  }
  return suma / alumnos.length;
}

console.log(notaMedia(alumnos))