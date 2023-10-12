// chiedere all'utente di scegliere da pari o dispari
const sceltaUtente = prompt('Scegli tra pari o dispari');
// console.log(sceltaUtente)

// chiedere all'utente di scegliere un numero da 1 a 5
const numeroUtente = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(typeof numeroUtente, numeroUtente, 'num. utente');

// la scelta dei numiri sarà random

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
// ci sarà un'altra funzione che cacolerà la somma dei numneri casuali se è pari o dispari si vedrà chi ha vinto