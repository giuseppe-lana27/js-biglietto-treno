// 1. Inserimento numero di km da percorrere
var km = parseInt(prompt("Inserisci numero di Km da percorrere"));
if ( isNaN(km) ) {
  km = parseInt(prompt("Devi inserire il valore numererico di Km da percorrere"));
}
document.getElementById('kmtotali').innerHTML = km + " KM";
// 2. Inserimento eta' viaggiatore
var eta = parseInt(prompt("Inserisci la tua eta'"));
if ( isNaN(eta) ) {
  eta = parseInt(prompt("Inserisci la tua eta' con valore numerico"));
}
// 3. Calcolo prezzo biglietto
var prezzo = 0.21;
var prezzoTotale = km * prezzo;
// 4. Calcolo sconto
var prezzoScontato;
var totaleScontato;
if (eta < 18){
  prezzoScontato = ((prezzoTotale * 20) / 100);
  totaleScontato = prezzoTotale - prezzoScontato;
  document.getElementById('prezzo').innerHTML = totaleScontato + " &#x20AC;";
  document.getElementById('sconto').innerHTML = "E' stato applicato uno sconto del 20% pari a " + prezzoScontato + " &#x20AC;";
} else if (eta >= 65) {
  prezzoScontato = ((prezzoTotale * 40) / 100);
  totaleScontato = prezzoTotale - prezzoScontato;
  document.getElementById('prezzo').innerHTML = totaleScontato + " &#x20AC;";
  document.getElementById('sconto').innerHTML = "E' stato applicato uno sconto del 40% pari a " + prezzoScontato + " &#x20AC;";
} else {
  document.getElementById('prezzo').innerHTML = prezzoTotale + " &#x20AC;"
  document.getElementById('sconto').innerHTML = "Non è stato applicato nessuno sconto";
}
