// console.log('Palindromi')

// Con un prompt chiede allo utente di inserire una parola
let parolaUtente = prompt('inserisci una parola');
console.log('Parola utente inserita',parolaUtente);



// inizializzo una variabile che corrisponderà alla lunghezza della parola che la mia function analizzerà
const lunghezzaParolaUtente = parolaUtente.length;
// console.log(lunghezzaParolaUtente);

// convertire una stringa in un array
let arrayParolaUtente = parolaUtente.split('')
console.log(arrayParolaUtente)


// usiamo un array REVERSE per invertire l'ordine degli elementi
let arrayReverseParolaUtente = arrayParolaUtente.reverse();
console.log(arrayReverseParolaUtente)

//convertiamo array reverse in una STRINGA 
let parolaUtenteInvertita = arrayReverseParolaUtente.toString();
console.log('parola utente invertita',parolaUtenteInvertita)

function Ispalindrome(parola, parolaInversa){

    if (parola === parolaInversa) {
        return true 
    } else {
        return false
    }
}


if (Ispalindrome(parolaUtente, parolaUtenteInvertita)) {
    console.log('è palindroma')    
} else {
    console.log('non è palindroma')
}












