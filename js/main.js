/*
- Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
- Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/

//Creo un l'oggetto studente

var studente = {
  'nome': 'Alessandro',
  'cognome': 'Mancinelli',
  'età': 31
};

// Attraverso ciclo for-in stampo tutte le proprietà

for(var key in studente){
  $('.first > ul').append('<li>' + key + ' : ' + studente[key] + '</li>')
}

//Creo un array di oggetti studente

var studenti = [
  {
    'nome': 'Alessandro',
    'cognome': 'Mancinelli',
    'età': 31
  },
  {
    'nome': 'Marco',
    'cognome': 'Avola',
    'età': 26
  },
  {
    'nome': 'Federico',
    'cognome': 'Scalzilli',
    'età': 24
  },
  {
    'nome': 'Alessio',
    'cognome': 'Di Crescenzo',
    'età': 29
  }
];

//Ciclo sugli oggetti e per ognuno stampo nome e cognome

for(var i = 0; i < studenti.length; i++){
  $('.all > ol').append('<li>' + studenti[i].nome + ' ' + studenti[i].cognome + '</li>');
}

//Gestisco l'inserimento da parte dell'utente di un nuovo oggetto studente

var nuovoStudente = [];

nuovoStudente.nome = prompt('Inserisci il nome del nuovo studente');
nuovoStudente.cognome = prompt('Inserisci il cognome del nuovo studente');
nuovoStudente.età = parseInt(prompt("Inserisci l'età del nuovo studente"));

studenti.push(nuovoStudente);

// Stampo a video la lista tudenti aggiornata

for(var i = 0; i < studenti.length; i++){
  $('.refresh > ol').append('<li>' + studenti[i].nome + ' ' + studenti[i].cognome + '</li>');
}
