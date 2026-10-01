function cantar(){
    console.log("lalalala")
}

cantar()

function cantar(letra){
    console.log(letra)
}

cantar("lololo")

function sumar(a,b){
    return a+b
}
let r = sumar(5,2)

//funcion anonima
let cocinar = function (){
    console.log("cocinando tortilla")
}

cocinar() //llamada a la funcionº
cocinar //referencia a la funcion

//funcion representada con fat arrow
let bailar = () => console.log("bailando")

function mifuncion(){
    console.log("hola")
}

let = mifuncion()