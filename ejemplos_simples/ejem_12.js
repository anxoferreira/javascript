let proucto = {
  nombre: "naranja",
  precio: 5,
};

for (let propiedad in producto) {
  console.log(propiedad + " : " + producto[propiedad]);
}
let nombresPersonas = ["juan", "alvaro", "angel", "roberto"];
for (let i = 0; i < nombresPersonas.length; i++) {
  console.log(i + " : " + nombresPersonas[i]);
}

for (let nombre of nombresPersonas) {
  console.log(nombre);
}
