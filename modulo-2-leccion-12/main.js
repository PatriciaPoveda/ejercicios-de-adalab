"use strict";
// EJERCICIO 01
const numbers = [1, 2, 3];

for(let i = 0; i < numbers.length; i++){
  const newItem = document.createElement('li');
  const newContent = document.createTextNode(numbers[i]);
  newItem.appendChild(newContent);
  const items = document.querySelector('.items');
  items.appendChild(newItem);
}
// EJERCICIO 03
const peopleList = [
  {name: "Patricia",
lastName: "Poveda",
telephone: "620620781"
},
  {name: "Edurne",
lastName: "Vila",
telephone: "607062812"
},
  {name: "Bruce",
lastName: "Wayne",
telephone: "555555555"
}
];

console.log(peopleList[0].name);
const selectEl = document.querySelector(".select");
const inputList = document.querySelectorAll(".input");
                           
function fillForm(){
  for (let i = 0; i < peopleList.length; i++) {
    const element = peopleList[i];
    // console.log(element);
    console.log(selectEl.value);
    if (selectEl.value === element.name){
      document.querySelector("#name").value = element.name;
      document.querySelector("#lastName").value = element.lastName;
      document.querySelector("#telephone").value = element.telephone;
    }    
  }
}

selectEl.addEventListener("change", fillForm);