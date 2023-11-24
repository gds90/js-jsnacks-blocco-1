// 1) Creo un array con l'elenco della frutta presente nel frigorifero;
const fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

// 2) aggiungo l'elemento pesca all'array creata precedentemente;
fruits.push('pesca');

// 3) creo una variabile flag con valore false che mi servirà dopo per controllare se 'cocomero' è presente nell'array;
let flag = false;

// 4) creo un ciclo For e controllo se il frutto 'cocomero' è presente nell'array;
for (i=0; i<fruits.length; i++){
    if (fruits[i] == 'cocomero'){
        flag = true;
    }
}

if (flag){

    // 4.1) se è presente, stampo in console: "Trovato! Devo solo preparare il cocktail.";
    console.log('Trovato! Devo solo preparare il cocktail.')
}
else {

        // 4.2) altrimenti stampo in console: "Oh no, devo uscire a comprare il cocomero!"
        console.log('Oh no, devo uscire a comprare il cocomero!')
    }
