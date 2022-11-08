/* chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */

const costoBiglietto = 0.21;

//chiedere numero di km
let km = parseFloat(prompt("Inserisci quanti km vuoi percorrere:"));

console.log(km);

//chiedere età
let eta = parseInt(prompt("inserisci la tua età:"));
console.log(eta);


// calcolo perzzo biglietto per intero
prezzo = costoBiglietto * km;
console.log(prezzo);

//applicazione sconto
let tot;
 
// sconto per minorenni
if(eta > 18 && eta < 65){
    tot =  prezzo;
}

if(eta < 18){
    let sconto = (prezzo / 100) * 20;
    tot = prezzo - sconto;
}

// sconto per over 65
if(eta > 65){
    let sconto = (prezzo / 100) * 40;
    tot = prezzo - sconto;
}

console.log(tot);


//output
document.getElementById("km").innerHTML = `${km}`;
document.getElementById("eta").innerHTML = `${eta}`;
document.getElementById("price").innerHTML = `${tot.toFixed(2)}€`;