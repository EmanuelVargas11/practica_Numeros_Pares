
// declarar array con sus valores y su indice
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20]
//             0, 1, 2, 3, 4  

// crear una funcion que recibe como parametro (una variable) el array 
function mostrarNumerosPares(numeros) {

    let pares = []
    

//  con el for recorre el array con valores que arranca del indice 0, 
// recorre su longitud e incrementa en 1 el indice. por cada vuelta 
// formando un ciclo

//  el array es numero[indice] siendo por el indice obtenemos su contenido  
 
    for(let indice = 0; indice <numeros.length; indice ++ ) {
    // comienza del indice 0, recorre la longitud del array que le indicamos, corre el indice +1   
        // console.log(indice);
        // console.log(numeros[indice]);


    // el if nos dice que si numero[indice] es dividido por 2 el resto es igual a 0. 
    // cada numero del indice que recorre lo divide por 2 y si el resultado es = 0 lo muestra como numero par 
        if(numeros[indice] % 2 == 0){
            //  console.log(numeros[indice]);
            
            pares.push(numeros[indice]);
        }
        
    }
    document.write('El siguiente el nuevo array con numeros pares: ',pares.join('-'))
    console.log(pares);
    
}

mostrarNumerosPares(numeros)



