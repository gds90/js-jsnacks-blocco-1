Esercizio di oggi pomeriggio: Array Snacks
nome repo: js-jsnacks-blocco-1
:avviso: creiamo una sottocartella per ciascun esercizio/snack
1. TuttiFrutti
Cartella array-lista
Descrizione:
Abbiamo un frigorifero pieno di frutta:
'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
Suggerimenti/Indicazioni:
Sì, lo sappiamo che esiste la funzione includes() ma noi non la vogliamo utilizzare per cercare nel frigorifero.
2. La coda dell'Array
Cartella: array_tail
Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array
3.  (Bonus)
Cartella: array_bonus
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

<!-- 1) SOTTOPROBLEMI TUTTIFRUTTI-->

1) Creo un array con l'elenco della frutta presente nel frigorifero;
2) aggiungo l'elemento pesca all'array creata precedentemente;
3) creo una variabile flag con valore false che mi servirà dopo per controllare se 'cocomero' è presente nell'array;
4) creo un ciclo For e controllo se il frutto 'cocomero' è presente nell'array;
4.1) se è presente, stampo in console: "Trovato! Devo solo preparare il cocktail.";
4.2) altrimenti stampo in console: "Oh no, devo uscire a comprare il cocomero!"

<!-- 2) SOTTOPROBLEMI CODA DELL'ARRAY -->
1) Permetto all'utente di inserire tramite prompt un numero, che rappresenterà la lunghezza dell'array;
2) In base al numero inserito dall'utente, creo un array di quella lunghezza tramite ciclo For; 
2.1) per ogni ciclata, inserisco un numero random da 1 a 100 nell'array.
3) stampo in console gli ultimi 5 elementi dell'array;
4) Bonus: chiediamo all'utente quanti elementi dell'array dovremo stampare
