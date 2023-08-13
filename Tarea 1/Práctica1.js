// Clousure función que funciona como parámetro de otra función

function FarenheitACentigrados(farenheit){
    conversion = 32+(9*farenheit/5)
    console.log("Son " +conversion+ " grados farenheit")
}
function AreaDeCircunferencia(radio){
    let area = 3.1416*radio**2
    console.log("El área es de " +area + "u^2")
}

function Velocidad(km){
    console.log(km*1000/3600+"m/s")
}

function Inverso(array){
    console.log(array.reverse())
}
function pitagoras(c1,c2){
    let hipotenusa = (c1**2 + c2**2)**(1/2)
    console.log("El valor es de "+ hipotenusa + "u^2")
}
FarenheitACentigrados(45)
AreaDeCircunferencia(2)
Velocidad(20)
pitagoras(3,5)
Inverso([1,2,3,4,5])