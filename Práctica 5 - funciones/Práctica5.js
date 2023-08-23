function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

const flecha = (nombre) => console.log(`hola ${nombre}`)

function operar(a,b,suma){
    suma(a,b)
}

// Ejercicio 1
saludar("Mariana")

// Ejercicio 2
flecha("Eduardo")

//Ejercicio 3
let suma = function (a,b){ console.log(`El resultado de la operación es : ${a+b}`)}
operar(1,2,suma)

// Ejercicio 4
let array = [1,2,3,4,5,6,7]
let array2 = array.map(array => array*2)
console.log("Los numeros al doble son: "+array2)


// Ejercicio 5
let nombres = ["Eduardo","Dennis","Mariana","Luis","Pedro"]
console.log("Los nombres con más de 5 letras: " + nombres.filter((nombres=>{return nombres.length>5})))