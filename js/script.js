var surname= [];
var index = [];
for (var i=0;i<3;i++){

  var input = prompt('inserisci il tuo cognome:');
  surname.push(input);
  surname.sort();

  var indexNum = i+1;
  index.push(indexNum);
}

// print 1
for (var i=0;i<surname.length;i++){
  console.log(index[i] + ' ' + surname[i]);
}

// print 2
// var i = 0;
// while (i<surname.length){
//   console.log(index[i] + ' ' + surname[i]);
//   i++
// }
