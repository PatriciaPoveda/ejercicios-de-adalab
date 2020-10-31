"use strict";
// EJERCICIO 01
const arr = [];
const get100Numbers = function(){
  for (let i = 1; i <= 100; i++){
    arr.push(i);
  }
  return arr;
}                                  
console.log(get100Numbers());

// EJERCICIO 02
const getReverse100Numbers = function(){
console.log (get100Numbers().reverse());
}

getReverse100Numbers();


// EJERCICIO 03
const lostNumbers = [4, 8, 15, 16, 23, 42];
const numberPar = []
const numberTres = []
const bestLostNumbers = function(){
  for (let i = 0; i < lostNumbers.length; i++){
    if(lostNumbers[i] % 2 === 0){
    numberPar.push(lostNumbers[i]);
    }    
    if (lostNumbers[i] % 3 === 0) {
    numberTres.push(lostNumbers[i]);
    }  
  }
  return numberPar.concat(numberTres);
}
     console.log(bestLostNumbers());