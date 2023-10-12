// chiedere all'utente di scegliere da pari o dispari
const sceltaUtente = prompt('Scegli tra pari o dispari');
console.log(sceltaUtente)

// chiedere all'utente di scegliere un numero da 1 a 5
const numeroUtente = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(typeof numeroUtente, numeroUtente, 'num. utente');

// la scelta del numero del pc sarà random
let numRandom 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    numRandom = Math.floor(Math.random() * (max - min) + min);
    return numRandom
}
// numero random del pc
numRandom = getRandomInt(1, 5);
console.log(numRandom)


// fare la somma dei due numeri TOTALE
function somma(num1, num2)  {
    const totale = numeroUtente + numRandom;
    // console.log('totale conteggio',totale)
    return totale
}

const tot = somma(numeroUtente + numRandom);
console.log('totale conteggio',tot)

// funzione che indicherà il risultato se sarà pari o dispari
function isEven(num) {

    if (num % 2 === 0) {
        return true

    }

    return false
}

// console.log che indicherà se pari o dispari il risultato
if (isEven(tot)) {
    // console.log('pari')
} else {
    // console.log('dispari')
}

// decretare il vincitore in base alle scelte

// compariamo il la scelta del giocatore e il numero del giocatore con i risultati
// controlliamo se ha vinto o meno
if (isEven(tot) === true && sceltaUtente === 'pari') {
console.log('hai vinto')
} else if (isEven(tot) === false && sceltaUtente === 'dispari') {
    console.log('hai vinto')
} else {
    console.log('hai perso')
}
