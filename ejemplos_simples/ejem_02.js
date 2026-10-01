let saludo = 'hola'
let saludo2 = "hola"
let saludo3 = `hola`

console.log(saludo)

let casada = false
casada = true

console.log(casada)

let nulo = null
console.log(nulo)

let indefinido = undefined
console.log(indefinido)

let cosa //undefined
console.log(cosa)

//objeto de javascript
let estudianteManolo = {
    nombre: "Manolo",
    edad: 22,
    aprobado: false
}

//array
let entero = [1, 2, 3, 4, 5]
let cosas = ["hola", 5, true, null, undefined, estudianteManolo]
console.log(cosas[3])

function saludo() {
    console.log("Hola")
}

let saludo2 = function() {
    console.log("Hola")
}

//casteos
let valor = 5
let valor_textual= String(valor)

let numero = "22"
let numeroEntero = Number(numero)
