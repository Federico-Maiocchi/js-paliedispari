// chiedere all'utente di scegliere da pari o dispari
const sceltaUtente = prompt('Scegli tra pari o dispari');
// console.log(sceltaUtente)

// chiedere all'utente di scegliere un numero da 1 a 5
const numeroUtente = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(typeof numeroUtente, numeroUtente, 'num. utente');

// la scelta del pc sarà random

let numRandom

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    numRandom = Math.floor(Math.random() * (max - min) + min);
    return numRandom
}
// numero random del pc
numRandom = getRandomInt(1, 6);
console.log(numRandom)


// fare la somma dei due numeri TOTALE
const totale = numeroUtente + numRandom;
console.log('totale conteggio',totale)

// funzione che indicherà il risultato se sarà pari o dispari
function isEven(num) {

    if (num % 2 === 0) {
        return true

    }

    return false
}

// console.log che indicherà se pari o dispari il risultato
if (isEven(totale)) {
    console.log('pari')
} else {
    console.log('dispari')
}

// decretare il vincitore in base alle scelte

