//var 1 pet_preferito = 'gatto';
//console.log(1 pet_preferito);

/*var pet = 'gatto';
var Pet = 'cane';*/
// var petPreferito = 'criceto';
// var PetPreferito = 'coniglio';

// var $pet = 'giraffa';
// console.log($pet);
// var _pet = 'leone';
// console.log(_pet);
// var _pet2 = 'pantera';
// document.write(_pet2);

//var 12 = 'numero';



let secondoNumero = Number(prompt("scrivi il secondo numero"));

document.getElementById("risultato").innerHTML = primoNumero + secondoNumero

document.getElementById("risultato").style.color = 'red'


document.getElementById("risultato").onclick = function () { prompt("scrivi il primo numero") };