var surname= ['tizio', 'caio', 'sempronio'];
var input = prompt('inserisci il tuo cognome:');
surname.push(input);
surname.sort();

console.log((surname.indexOf(input) + 1) + ' ' + input);
