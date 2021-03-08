var surname= [];
var index = [];

// for method
for (var i=0;i<3;i++){

  var input = prompt('inserisci il tuo cognome:');
  surname.push(input);
  surname.sort();

  var indexNum = i+1;
  index.push(indexNum);
}

for (var i=0;i<surname.length;i++){
  console.log(index[i] + ' ' + surname[i]);
}

// while method
// var i=0;
// while (i<3){
//   var input = prompt('inserisci il tuo cognome:');
//   surname.push(input);
//   surname.sort();
//
//   var indexNum = i+1;
//   index.push(indexNum);
//   i++;
// }
//
// var x = 0;
// while (x<surname.length){
//   console.log(index[x] + ' ' + surname[x]);
//   x++
// }
