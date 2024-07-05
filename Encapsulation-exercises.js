// EX - Warm up

class Printer {
  constructor(brand, colors) {
    this.#setupPrinter(brand, colors);
  }
  #setupPrinter(brand, colors) {
    this.brand = brand;
    this.colors = colors;
  }
}

let printer = new Printer('lg', ['blue', 'red', 'brown']);
console.log(printer.brand, printer.color);
console.log(printer);

// Ex1:
class Utilities {
  constructor() {}

  static camelCase(str) {
    console.log(str.toUpperCase());
  }
}

Utilities.camelCase('hellothere');

// Ex2:

class Animal {
  static knownMammals = [];
  mammal = false;
  eyes = 2;

  static isMammal() {}
  describe() {}
}

class Monkey extends Animal {
  static knownMonkeys = [];
  height;
  weight;

  static isCute() {}
  eatBanana() {}
}

const animal = new Animal();
console.log(Object.getOwnPropertyNames(animal));
console.log(Object.getOwnPropertyNames(animal._proto_));
console.log(Object.getOwnPropertyNames(Animal));
