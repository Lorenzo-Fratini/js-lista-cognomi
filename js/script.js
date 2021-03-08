var surname= ['tizio', 'caio', 'sempronio'];
var input = prompt('inserisci il tuo cognome:');
surname.push(input);
surname.sort();

for (var i=0;i<surname.length;i++){
  console.log(surname[i]);
}

console.log(surname.indexOf(input) + 1);
