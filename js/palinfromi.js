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

function Ispalindrome(array, arrayReverse){
    if (array = arrayReverse) {
        return true 
    } else {
        return false
    }
}

if (Ispalindrome(arrayParolaUtente, arrayReverseParolaUtente)) {
    console.log('è palindroma')    
} else {
    console.log('non è palindroma')
}


// for ( let i = 0; i < lunghezzaParolaUtente; i++) {
//     const char = parolaUtente.charAt(i)
//     // console.log(char)

// }


// const array = [char]
// console.log(array)

// funzione per capire capire se la parola dell'utente è palindroma
// ciao