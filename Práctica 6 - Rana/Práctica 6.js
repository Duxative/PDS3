
function SaltosDeRana(x,y,d){
    let saltos = 0
    while (x<y){
        saltos++
       x += d
   }
    console.log(`Los saltos que dio fueron ${saltos} y llegó a la distancia de ${x} `)
}

SaltosDeRana(20,85,30)