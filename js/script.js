var surname= [];

// for method
for (var i=0;i<3;i++){
  var input = prompt('inserisci il tuo cognome:');
  surname.push(input);
  surname.sort();
}

for (var i=0;i<surname.length;i++){
  var index = i+1;
  console.log(index + ' ' + surname[i]);
}

// while method
// var i=0;
// while (i<3){
//   var input = prompt('inserisci il tuo cognome:');
//   surname.push(input);
//   surname.sort();
//
//   i++;
// }
//
// var x = 0;
// while (x<surname.length){
//   var index = x+1;
//   console.log(index + ' ' + surname[x]);
//   x++
// }
