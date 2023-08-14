let texto = "anita lava la tina"
let numero = "773377"
texto = texto.split(' ').join('')
function invertir(texto){
let reverso= ""
    for (let i=texto.length;i >= 0; i--){
        reverso += texto.charAt(i)
    }
    console.log(reverso)
    if (texto === reverso){
        console.log("Se lee igual si lo lees de derecha a izquierda o de izquierda a derecha")
    }else{
        console.log("No es igual de leer")
    }
}

invertir(texto)
invertir(numero)



