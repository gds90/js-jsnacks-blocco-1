// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// SOTTOPROBLEMI
// 1) Creo 2 array, una di 7 e l'altra di 3 elementi;
// 2) Dichiaro una variabile il cui valore sarà la differenza tra le lunghezze delle due array;
// 3) verifico che la differenza tra le due stringhe non sia negativa;
// 4) Tramite un ciclo for, aggiungo X elementi (numeri casuali da 1 a 100) all'array che ha meno elementi, in cui X è la differenza di lunghezza tra le due array;

// 1) Creo 2 array, una di 7 e l'altra di 3 elementi;
let array_2 = [33, 12, 9, 46, 88, 53, 68];
let array_1 = [82, 71, 16];

// 2) Dichiaro una variabile il cui valore sarà la differenza tra le lunghezze delle due array;
diff = array_1.length - array_2.length;

// 3) verifico che la differenza tra le due stringhe non sia negativa;
if (diff < 0){

    // nel caso sia un numero negativo, lo trasformo in positivo;
    diff *= -1;
}

// 4) Tramite un ciclo for, aggiungo X elementi (numeri casuali da 1 a 100) all'array che ha meno elementi, in cui X è la differenza di lunghezza tra le due array;
for (i=1; i<=diff; i++){
    let random_number = Math.floor(Math.random() * 100) +1;
    array_2.push(random_number);
}

console.log(array_1, array_2);

