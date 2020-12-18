"use strict";

// EJERCICIO 01

class square {
  perimeter(side) {
    return side * 4;
  }
  area(side) {
    return Math.pow(side, 2);
  }
}
const objSquare = new square();
console.log(`El perímetro del cuadrado es: ${objSquare.perimeter(9)}`);
console.log(`El área del cuadrado es:  ${objSquare.area(9)}`);

// EJERCICIO 02

class square2 {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return Math.pow(this.side, 2);
  }
}

const objSquare2 = new square2(9);
console.log(`El perímetro del cuadrado es: ${objSquare2.perimeter()}`);
console.log(`El área del cuadrado es:  ${objSquare2.area()}`);

const objSquareA = new square2(1);
console.log(`El perímetro del cuadrado es: ${objSquareA.perimeter()}`);
console.log(`El área del cuadrado es:  ${objSquareA.area()}`);

const objSquareB = new square2(3);
console.log(`El perímetro del cuadrado es: ${objSquareB.perimeter()}`);
console.log(`El área del cuadrado es:  ${objSquareB.area()}`);

const objSquareC = new square2(7);
console.log(`El perímetro del cuadrado es: ${objSquareC.perimeter()}`);
console.log(`El área del cuadrado es:  ${objSquareC.area()}`);

// EJERCICIO BONUS A

class Polygon {
  constructor(side, base, height) {
    this.numberOfSides = side;
    this.base = base;
    this.height = height;
  }
  perimeter() {
    return this.base * this.numberOfSides;
  }
  area() {
    return this.base * this.height;
  }
}
class square3 extends Polygon {
  constructor(side) {
    super(4, side, side);
    this.side = side;
  }
}
class triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }
  area() {
    return super.area() / 2;
  }
}

const objPolygon3 = new Polygon();
const objSquare3 = new square3(4);
const triangle3 = new triangle(4, 3);

console.log(`El perímetro del cuadrado es: ${objSquare3.perimeter()}`);
console.log(`El área del cuadrado es:  ${objSquare3.area()}`);
console.log(`El perímetro del triángulo es: ${triangle3.perimeter()}`);
console.log(`El área del triángulo es:  ${triangle3.area()}`);

// EJERCICIO PAIR
let adalabers = [];
fetch("http://api.igarrido.es/adalab.json")
  .then((Response) => Response.json())
  .then((data) => {
    adalabers = data;
    bucle();
  });

class adalaber {
  constructor(fullname, promo, github) {
    this.fullname = fullname;
    this.promo = promo;
    this.github = github;
  }
  render() {
    const name = document.querySelector(".js-text");
    let html = "";
    html += `<div>`;
    html += `<p>`;
    html += `NOMBRE: ${this.fullname}`;
    html += `</p>`;
    html += `<p>`;
    html += `PROMO: ${this.promo}`;
    html += `</p>`;
    html += `<p>`;
    html += `GITHUB: ${this.github}`;
    html += `</p>`;
    html += `</div>`;
    return (name.innerHTML += html);
  }
}

function bucle() {
  let fullname;
  let promo;
  let github;
  for (let i = 0; i < adalabers.length; i++) {
    fullname = adalabers[i].fullname;
    promo = adalabers[i].promo;
    github = adalabers[i].github;
    const adalab = new adalaber(fullname, promo, github);
    adalab.render();
  }
}
