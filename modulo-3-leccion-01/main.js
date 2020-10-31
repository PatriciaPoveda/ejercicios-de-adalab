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
console.log(objSquare.perimeter(9));
console.log(objSquare.area(9));

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
console.log(objSquare2.perimeter());
console.log(objSquare2.area());

const objSquareA = new square2(1);
console.log(objSquareA.perimeter());
console.log(objSquareA.area());

const objSquareB = new square2(3);
console.log(objSquareB.perimeter());
console.log(objSquareB.area());

const objSquareC = new square2(7);
console.log(objSquareC.perimeter());
console.log(objSquareC.area());

// EJERCICIO 03

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

console.log(objSquare3.perimeter());
console.log(objSquare3.area());
console.log(triangle3.perimeter());
console.log(triangle3.area());

// EJERCICIO PAIR
let adalabers = [];
fetch("http://api.igarrido.es/adalab.json")
  .then((Response) => Response.json())
  .then((data) => {
    adalabers = data;
  });

class adalaber {
  constructor(fullname, promo, github) {
    this.fullname = fullname;
    this.promo = promo;
    this.github = github;
  }
  render() {
    const name = document.querySelector(".js-text");
    name.innerHTML = `nombre: ${this.fullname}`;
  }
}
let fullname;
let promo;
let github;
for (let i = 0; i < adalabers.length; i++) {
  fullname = adalabers.fullname;
  promo = adalabers.promo;
  github = adalabers.github;
}
const adalab = new adalaber(fullname, promo, github);
