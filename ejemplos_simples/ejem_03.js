let a = 0.1
let b = 0.2
let c = a + b
console.log(c) // 0.30000000000000004
console.log(c === 0.3) // false, debido a la imprecisión de los números de punto flotante

let x = "5"
let y = 10
 // Concatenación de cadenas, será "510"
console.log(x+y) // "510"

let a1 = 5
let b1 = a1++ //lo usa primero y luego incrementa poe lo que b1 es 5 y a1 es 6
console.log(a1) // 6
console.log(b1) // 5

let aa = 5; let bb = 10
let cc = aa + bb // Suma de números, cc será 15
console.log(cc) // 15
