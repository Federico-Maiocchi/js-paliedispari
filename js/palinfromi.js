// con un prompt chiedo all'utente di digitare una parola
const parola = prompt('inserisci una parola');
console.log(parola)

// inizializzo una variabile per la lunghezza della parola dell'utente
lunghezzaParolaUtente = parola.length

// dichiariamo una variabile al di fuori del ciclo for,così da poterla usarla poi usare
// nell'invocazione della fuction "isPalindrome"

// i '' li usiamo per indicare che il contenuto interno verrà riempito dal ciclo for 
let parolaInversa = ''

// usiamo il ciclo for INVERSO per rendere una parola al contrario 
for (let i = lunghezzaParolaUtente -1; i >= 0; i--) {
    const char = parola[i]
    console.log(char)

    // += li usiamo che indicare che dovrà considerare tutti gli indici 
    // nel momento in cui verrà stampato
    parolaInversa += char

}

console.log(parolaInversa)

// creiamo una funzione apposita per fare il confronto della parola originale confir
// quella inversa. Ci dovrà dare due risultati:
// se le due parole coincidono verrà considerata vera (true)
// altrimenti verrà considerata falsa (false)
function isPalindrome(parola, parolaInverita){

    if (parola === parolaInverita) {
        return true 
    } else {
        return false
    }
}

// invochiamo la funzione 'isPalindrome' per inziare il nostro controllo 
if (isPalindrome(parola, parolaInversa)) {
    console.log('è palindroma')    
} else {
    console.log('non è palindroma')
}





























// // console.log('Palindromi')

// // Con un prompt chiede allo utente di inserire una parola
// let parolaUtente = prompt('inserisci una parola');
// console.log('Parola utente inserita',parolaUtente);



// // inizializzo una variabile che corrisponderà alla lunghezza della parola che la mia function analizzerà
// const lunghezzaParolaUtente = parolaUtente.length;
// // console.log(lunghezzaParolaUtente);

// // convertire una stringa in un array
// let arrayParolaUtente = parolaUtente.split('')
// console.log(arrayParolaUtente)


// // usiamo un array REVERSE per invertire l'ordine degli elementi
// let arrayReverseParolaUtente = arrayParolaUtente.reverse('');
// console.log(arrayReverseParolaUtente)

// //convertiamo array reverse in una STRINGA 
// let parolaUtenteInvertita = arrayReverseParolaUtente.toString();
// console.log('parola utente invertita',parolaUtenteInvertita)

// function Ispalindrome(parola, parolaInversa){

//     if (parola === parolaInversa) {
//         return true 
//     } else {
//         return false
//     }
// }


// if (Ispalindrome(parolaUtente, parolaUtenteInvertita)) {
//     console.log('è palindroma')    
// } else {
//     console.log('non è palindroma')
// }












