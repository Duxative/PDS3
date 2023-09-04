let A = [-7,1,5,2,-4,3,0]
let B = [8,2,1,0,3,1]
let C = [1,2,2,3,5,6,6,7,1,3,9]

function equilibrioDeArreglo(numeros){
    let sumaDerecha = 0;
    let sumaIzquierda = 0;
    if (!(numeros.length % 2 === 0)){
        numeros.splice(parseInt(""+numeros.length/2),1)
    }
    console.log(numeros)
        for (let i = 0; i < numeros.length; i++) {

            if (i < numeros.length/2){
                sumaIzquierda += numeros[i]
            }else{
                sumaDerecha += numeros[i]
            }
        }
        if (sumaDerecha === sumaIzquierda){
            console.log(`La suma de la izquierda es ${sumaIzquierda} y la suma izquierda es ${sumaDerecha} por ende son iguales`)
        }else {
            console.log(`La suma de la izquierda es ${sumaIzquierda} y la suma izquierda es ${sumaDerecha} por ende NO son iguales`)
        }
}
equilibrioDeArreglo(B)
equilibrioDeArreglo(A)

function Depurar(numeros){
    let depurado = []
    for (let i = 0; i < numeros.length; i++) {
        if(!depurado.includes(numeros[i])){
            depurado.push(numeros[i])
        }
    }
    console.log(`
---------------------------------------------------------------
Este es el arreglo original ${numeros}
---------------------------------------------------------------    
Este es el arreglo depurado ${depurado}
---------------------------------------------------------------
`)
}

Depurar(C)

let array = []
function LlenarArreglo(array){
    for (let i = 0; i < 10; i++) {
        array.push(parseInt(Math.random()*10))
    }
    LlenarArreglo.sort()

    console.log(array)
}
LlenarArreglo(array)










/*
Equilibrios
Duplicados
Orden de letras
azavdab
Aleatorios
 */