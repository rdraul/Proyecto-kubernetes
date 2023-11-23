
// DECLARO UN ARRAY CON LAS LETRAS DEL ABECEDARIO //
const array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

// IMPRIMO MI ARRAY //
console.log('Mi array: '+JSON.stringify(array))

/**------------------------------------
 * ! ALGORITMO DE BUSQUEDA SECUENCIAL
 * @param {*} array
 * @param {*} letter
---------------------------------------*/
const BusquedaSecuencial = (array, letter) => {

    for (let i = 0; i < array.length; i++) {

        if (array[i] == String(letter).toLowerCase()) {

            return 'La letra '+String(letter).toUpperCase()+' ha sido encontrada en la posicion '+i+' del array';

        }

    }

}

/**------------------------------------
 * ! ALGORITMO DE BUSQUEDA POR SALTOS
 * @param {*} array
 * @param {*} letter
---------------------------------------*/
const BusquedaPorSalto = (array, letter) => {
    
    const length = array.length;

    let step = Math.floor(Math.sqrt(length));

    let i = 0;

    while (array[Math.min(step, length) - 1] < String(letter).toLowerCase()) {
        i = step;
        step += step;
        if (i >= length) {
            return;
        }
    }

    let upperBound = Math.min(step, length);

    while (array[i] < String(letter).toLowerCase()) {
        i++;
        if (i == upperBound) {
            return;
        }
    }

    if (array[i] == String(letter).toLowerCase()) {
        return 'La letra '+String(letter).toUpperCase()+' ha sido encontrada en la posicion '+i+' del array';
    }

    return;

}

// INICIALIZO LA letIABLE letter //
let letter = '';

// DECLARO UNA EXPRESION REGULAR //
const regex = new RegExp('[a-zA-Z]');

// HAGO UN DO WHILE //
do{
    
    // LE PIDO UNA LETRA AL USUARIO //
    letter = prompt('Escriba una letra')

    // PREGUNTO SI LO QUE SE ESCRIBIO ES UNA LETRA //
    if(regex.test(letter) && letter.length == 1){

        // SI ES ASI ENTONCES IMPRIMO Y LLAMO LAS FUNCIONES DE BUSQUEDA //
        console.log('Busqueda Secuencial: '+BusquedaSecuencial(array, letter))

        console.log('Busqueda Por Saltos: '+BusquedaPorSalto(array, letter))

    } else {

        alert('Debe escribir una letra del abecedario')
        letter = ''

    }

} while(!regex.test(letter) && letter.length != 1);

