# Capire se la parola è palindroma

- chiedere all' utente di digitare la parola


- inizializzo questa variabile per ricavare la lunghezza della parola

- dichiariamo una variabile fuori dal ciclo for che utilizzeremo per  la futura function

- usiamo un ciclo for per invertire la parola digitata dall'utente
    - dichiariamo la variabile I =  alla lunghezza della parola e sottraioamo(-1) per avere come punto di partenza l'ultima lettera che sarà la prima
    - la condizione è I >= 0 per comprire tutta la lunghezza della parola
    - I-- è il decremento che ci serve per avere la parola al contrario
    - recuperiamo la dichiarabile parolaInvera e sarà += char, ci permettera di stampare tutti glie elementi del ciclo

- creiamo una funzione apposita per fare il confronto della parola originale confir
    - quella inversa. Ci dovrà dare due risultati:
        - SE le due parole coincidono verrà considerata vera (true)
        - ALTRIMENTI verrà considerata falsa (false)

- INVOCHIAMO la funzione 'isPalindrome' per inziare il nostro controllo 


# Pari o Dispari

- chiediamo all'utente di scegliere tra pari/dispari con un prompt

- chiediamo all'utente di scegliere un numero tra 1 e 5

- il pc scegliera un numero casuale tramite una funzione
    - inizializziamo una costante fuori dalla funzione chiamata let numRandom
    - dichiariamo la variabile precendente dentro la funzione con la formula Math.random

- invochiamo la funzione nella variabile  nuRandom indicando i numeri da 1 a 5

- per ricavarci il totale faremo una funzione che ci aiuterà a calcolare il tot
    - indichiamo nella funzione la somma del numeroUtente + numRandom(del pc)

- creiamo una funzione che indicherà se il totale sarà pari e dispari isEven(num)

- invochiamo la funzione per stabilire se il tot è pari o dispari

- decretiamo la vincita comparando la scelta del giocatore con il numero di gioco
