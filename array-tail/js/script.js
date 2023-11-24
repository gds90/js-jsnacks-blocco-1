// 1) Permetto all'utente di inserire tramite prompt un numero, che rappresenterà la lunghezza dell'array;
let array_length = parseInt(prompt('Inserisci di quanti numeri vuoi che sia lunga la lista:'));

// 2) In base al numero inserito dall'utente, creo un array di quella lunghezza tramite ciclo For; 
const array = [];
for (i=0; i<array_length; i++){

    // 2.1) per ogni ciclata, inserisco un numero random da 1 a 100 nell'array.
    let random_number = Math.floor(Math.random() * 100) +1;
    array.push(random_number);
}

// 3) stampo in console gli ultimi 5 elementi dell'array;
let array_last_five = array.slice(-5);
console.log(array_last_five)

// 4) Bonus: chiediamo all'utente quanti elementi dell'array dovremo stampare
let print_quantity = parseInt(prompt("Quanti elementi dell'array vuoi stampare?"));

if (print_quantity > array_length) {
    console.log("La quantità richiesta è maggiore della lunghezza dell'array.");
} else {
    let array_last_element = array.slice(-print_quantity);
    console.log("Ecco gli ultimi", print_quantity, "elementi dell'array:", array_last_element);
}