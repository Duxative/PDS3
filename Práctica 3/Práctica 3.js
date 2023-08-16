const arr = [3,5,3,8,2,8,3,5];

function sumaNumeros(numeros){
    let suma = 0;
    for (let i = 0; i < numeros.length ; i++) {
        suma += arr[i]
    }
    console.log(`La suma de todos los valores es: ${suma}`)
    return suma;
}

function MaxMin(numeros){
    let sorted = numeros.sort()
    let Min = sorted[0]
    let Max = sorted[numeros.length-1]

    console.log(`Máximo: ${Max} \n Mínimo: ${Min}`)

}

function Average(numeros){
    let promedio = sumaNumeros(numeros) / numeros.length
    console.log(`El promedio es de : ${promedio}`)
}

function valorEnArray(numero,array){

    if (array.includes(numero)){
        console.log(`Simón si está el valor ${numero} en el array`)
    }else{
        console.log(`Nel we, no está el valor ${numero} en el array`)
    }
}

function getPares(numeros){
    let pares = numeros.filter((numero) => !(numero % 2))
    console.log(`Estos son los numeros pares del array: ${pares}`)
}

function acomodarArray(numeros){
    console.log(`El acomodo de manera ascendente es el siguiente : ${numeros.sort()}`)
}

function findTimesNumber(numero, array){
    repeticiones = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numero){
            repeticiones++;
        }
    }
    console.log(`El numero elegido ${numero} se repite la cantidad de : ${repeticiones}`)
}

function removeRepeated(numeros){
    let depurado = []
    for (let i = 0; i < numeros.length; i++) {
        if (!depurado.includes(numeros[i])){
            depurado.push(numeros[i])
        }
    }
    console.log(`El array depurado es el siguiente: ${depurado}`)
}
sumaNumeros(arr)
MaxMin(arr)
Average(arr)
valorEnArray(parseInt(Math.random()*10),arr)
getPares(arr)
acomodarArray(arr)
findTimesNumber(5,arr)
removeRepeated(arr)




