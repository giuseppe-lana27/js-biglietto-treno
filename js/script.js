// 1. Inserimento numero di km da percorrere
var km = parseInt(prompt("Inserisci numero di Km da percorrere"));
// 2. Inserimento eta' viaggiatore
var eta = parseInt(prompt("Inserisci la tua eta'"));
// 3. Calcolo prezzo biglietto
var prezzo = 0.21;
var prezzoTotale = km * prezzo;
// 4. Calcolo sconto
var prezzoScontato;
if (eta < 18){
  prezzoScontato = ((prezzoTotale * 20) / 100);
  document.getElementById('prezzo').innerHTML = prezzoScontato + " &#x20AC;";
} else if (eta >= 65) {
  prezzoScontato = ((prezzoTotale * 40) / 100);
  document.getElementById('prezzo').innerHTML = prezzoScontato + " &#x20AC;";
} else {
  document.getElementById('prezzo').innerHTML = prezzoTotale + " &#x20AC;"
}
