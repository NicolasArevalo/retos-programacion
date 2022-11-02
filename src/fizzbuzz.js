/* 
Escribir una función que al pasarle un número 
    - Muestre fizz si es multiplo de 3
    - Muestre buzz si es multiplo de 5
    - Muestre fizzbuzz si es de ambos
    - Muestre el número si no es de ninguno

*/

function number(n){

    let esDeTres
    let esDeCinco

    if(!Boolean(n%3)) esDeTres = true
    if(!Boolean(n%5)) esDeCinco = true

    if(!esDeTres & !esDeCinco){ console.log(n); return}

    if(esDeCinco & esDeTres){
        console.log('fizzbuzz')
    } else if(esDeCinco){
        console.log('buzz')
    } else{
        console.log('fizz')
    }
}

number(3)