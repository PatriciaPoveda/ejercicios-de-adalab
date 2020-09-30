"use strict";
const containerElement = document.querySelector(".container");
const content = "<h1>Lorem ipsum</h1><p>Lorem ipsum</p>";
// const content = "<img scr="http://via.placeholder.com/350x150">";
containerElement.innerHTML = content;
const listElement = document.querySelector(".list");
listElement.innerHTML = "<li>1</li><li>2</li><li>3</li>";
