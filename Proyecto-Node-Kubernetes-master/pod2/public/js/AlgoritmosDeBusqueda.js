
// DECLARO UN ARRAY CON LAS LETRAS DEL ABECEDARIO //
const array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
const array2 = ["q","p","i","r","c","z","w","u","e","a","y","l","v","n","f","x","j","d","s","m","b","g","k","h","o"];

// IMPRIMO MI ARRAY //
console.log('Mi array: '+JSON.stringify(array))

/**---------------------------------
 * ! ALGORITMO DE BUSQUEDA BINARIA
 * @param {*} array
 * @param {*} letter
------------------------------------*/
const BusquedaBinaria = (array, letter) => {

    let low = 0;

    let high = array.length - 1;

    while (low <= high) {

        let i = Math.floor((low + high) / 2);

        let mid = array[i];

        if (mid == String(letter).toLowerCase()) {

            return 'La letra '+String(letter).toUpperCase()+' ha sido encontrada en la posicion '+i+' del array';

        }

        if (mid > String(letter).toLowerCase()) {

            high = i - 1;

        } else {

            low = i + 1;

        }

    }

    return;

}

/**--------------------------------------------------
 * ! ALGORITMO DE BUSQUEDA POR METODO DE LA BURBUJA
 * @param {*} array
 * @param {*} letter
-----------------------------------------------------*/
const BusquedaBurbuja = (array2, letter) => {

    var n, i, k, aux;

    n = array2.length;

    for (k = 1; k < n; k++) {

        for (i = 0; i < (n - k); i++) {

            if (array2[i] > array2[i + 1]) {

                aux = array2[i];

                array2[i] = array2[i + 1];

                array2[i + 1] = aux;

                if(array2[i] == String(letter).toLowerCase()){

                    console.log('Array Desorganizado: '+ JSON.stringify(array2))
                    return 'La letra '+String(letter).toUpperCase()+' ha sido encontrada en la posicion '+i+' del array';
    
                }

            }

        }

    }

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
        console.log('Busqueda Binaria: '+BusquedaBinaria(array, letter))
        
        console.log('Busqueda por el Metodo Burbuja: '+BusquedaBurbuja(array2, letter))

    } else {

        alert('Debe escribir una letra del abecedario')
        letter = ''

    }

} while(!regex.test(letter) && letter.length != 1);

