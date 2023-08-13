console.log("hola mundo")

let nombre = ["Eduardo","Dennis","Rafel","Daisy","Melissa","Sofia","Fátima","José","Armando","Francisco"]
let apellidos = ["Ramírez","Salazar","Martínez","Hernández","Flores","López","Gómez","Jimenez","Limón","Ramos"]

for (let i=0; i<10;i++){
    let nombreCompleto = nombre[parseInt(Math.random()*10)] + " " + apellidos[parseInt(Math.random()*10)]
    let edad = parseInt(Math.random()*100)
    console.log( "Nombre: "+nombreCompleto + "\nEdad: "+edad)
    if (edad  > 50){
        console.log("Está viejón")
    }else if(edad === 25){
        console.log("Eres de mi edad padrino")
    }else{
        console.log("Todavía aguantas")
    }
}