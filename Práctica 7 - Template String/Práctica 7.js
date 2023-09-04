let a = "hola,"
let b = "mi nombre es juan"
console.log(`${a+b}`)

let c = 10
let d = 20
console.log(`${c+d}`);


function saludar (nombre,callback){
    var Nombre = "Hola juan. " + nombre;
    callback (Nombre);
}
function saludo(nombre){
    console.log(nombre)
}
saludar("saludos",saludo);

function operation (x,y,callback){
    var z = 0 + x;
    var w = 0 + y;
    callback (z,w);
}
function resultado(x,y){
    console.log(x+y)
}
operation(5,10 ,resultado);

function transformarTexto (texto,callback){
    var transformar = "me transformare " + texto;
    callback (transformar);
}
function transformate(Mayusculas){
    console.log(Mayusculas.toUpperCase())
}
transformarTexto("Felicidades por transformarte",transformate);