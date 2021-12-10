// Crea un array vuoto.
//  Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

// const arrayVuoto = [];

// for (let i = 0; i < 6; i++) {
//     const numero = prompt('inserisci un numero');
//     console.log(numero);
//     if (numero % 2 == 0) {
//         arrayVuoto.push(numero);
//     }
// }
// console.log('numeri pari',arrayVuoto);

// ------------------------------------------------------------------------------

// Stampa il cubo dei primi N numeri,
//     dove N è un numero indicato dall’utente.

// const numero = prompt('inserisci il numero');

// for (let i = 0; i < numero; i++){
//     console.log(Math.pow(i, 3));
// }

// ------------------------------------------------------------------------------

// Crea due array che hanno un numero di elementi diversi.
//  Aggiungi elementi all’array che ha meno elementi
//  fino a quando ne avrà tanti quanti l’altro.

// Crea due array che hanno un numero di elementi diversi.

// const array1 = [
//     "1",
//     "1",
//     "1",
//     "1",
//     "1",
//     "1",
//     "1",
//     "1",
//     "1",
//     "1"
// ];

// const array2 = [
//     "2",
//     "2",
//     "2",
//     "2",
//     "2",
//     "2",
//     "2"
// ];

// let arrayMaggiore;
// let arrayMinore;

// if (array1.length > array2.length){
//     arrayMaggiore = array1;
//     arrayMinore = array2;
// } else if (array1.length < array2.length){
//     arrayMaggiore = array2;
//     arrayMinore = array1;
// } else {
//     alert('uguale grandezza')
// }

// let differenza = arrayMaggiore.length - arrayMinore.length;

// for (let i = 0; i < differenza; i++) {
//     arrayMinore.push('3');
// }

// console.log(array1);
// console.log(array2);

// ------------------------------------------------------------------------------

// * Crea un array vuoto e chiedi all’utente un numero
//     * da inserire nell’array.Continua a chiedere i numeri
//         * all’utente e a inserirli nell’array fino a quando
//             * la somma degli elementi è minore di 50.

// let arrayVuoto = [];

// let somma = 0;

// while (somma < 50) {
//     let numeroUtente = parseInt(prompt('inserisci un numero'));
//     somma += numeroUtente;
//     arrayVuoto.push(numeroUtente);
// }

// console.log(arrayVuoto);

// ------------------------------------------------------------------------------


// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// const zucchine = [
//     {
//         varietà: 'varietà1',
//         peso: 1,
//         lunghezza: '1',
//     },
//     {
//         varietà: 'varietà2',
//         peso: 2,
//         lunghezza: '2',
//     }, {
//         varietà: 'varietà3',
//         peso: 3,
//         lunghezza: '3',
//     }, {
//         varietà: 'varietà4',
//         peso: 4,
//         lunghezza: '4',
//     }, {
//         varietà: 'varietà5',
//         peso: 5,
//         lunghezza: '5',
//     },
//         {
//         varietà: 'varietà6',
//         peso: 6,
//         lunghezza: '6',
//     }, {
//         varietà: 'varietà7',
//         peso: 7,
//         lunghezza: '7',
//     }, {
//         varietà: 'varietà8',
//         peso: 8,
//         lunghezza: '8',
//     }, {
//         varietà: 'varietà9',
//         peso: 9,
//         lunghezza: '9',
//     }, {
//         varietà: 'varietà10',
//         peso: 10,
//         lunghezza: '10',
//     }
// ];


// for (let i = 0; i < zucchine.length; i++) {
//     let somma = 0;
//     const element = zucchine[i];
//     somma += element.peso;
//     console.log(somma);
// }

// ------------------------------------------------------------------------------

// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

// const zucchine = [
//     {
//         varietà: 'varietà1',
//         peso: 1,
//         lunghezza: 1,
//     },
//     {
//         varietà: 'varietà2',
//         peso: 2,
//         lunghezza: 2,
//     }, {
//         varietà: 'varietà3',
//         peso: 3,
//         lunghezza: 5,
//     }, {
//         varietà: 'varietà4',
//         peso: 4,
//         lunghezza: 20,
//     }, {
//         varietà: 'varietà5',
//         peso: 5,
//         lunghezza: 52,
//     },
//     {
//         varietà: 'varietà6',
//         peso: 6,
//         lunghezza: 55,
//     }, {
//         varietà: 'varietà7',
//         peso: 7,
//         lunghezza: 8,
//     }, {
//         varietà: 'varietà8',
//         peso: 8,
//         lunghezza: 13,
//     }, {
//         varietà: 'varietà9',
//         peso: 9,
//         lunghezza: 2,
//     }, {
//         varietà: 'varietà10',
//         peso: 10,
//         lunghezza: 9,
//     }
// ];

// // Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// let arrayMeno = [];
// let arrayPiu = [];
// let minSum = 0;
// let supSum = 0;

// for (let i = 0; i < zucchine.length; i++) {
//     const element = zucchine[i];

//     if (element.lunghezza < 15) {
//         arrayMeno.push(element.lunghezza);
//         minSum += element.peso;

//     } else {
//         arrayPiu.push(element.lunghezza);
//         supSum += element.peso;
//     }
// }
// console.log(arrayMeno, minSum);
// console.log(arrayPiu, supSum);

// ------------------------------------------------------------------------------

// Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].

let arraylettere = ['a', 'b', 'c'];
let arraynumeri = [1, 2, 3];

function myFunction(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i]);
        newArray.push(array2[i]);
    }
    console.log(newArray);
    return newArray;
}

myFunction(arraylettere, arraynumeri);