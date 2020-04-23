//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente

//Chiediamo un numero all'utente
var numero_utente = prompt('Indica un numero');
//console.log(numero_utente);
for (var i = 1; i <= numero_utente; i++) {
    //console.log(i);
    var cubo = Math.pow(i, 3);
    console.log(cubo);

}
