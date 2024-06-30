// EX1:
class Vehicle {
  constructor(name, maxSpeed) {
    this.name = name;
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed() {
    return this.maxSpeed;
  }
}

class Spaceship extends Vehicle {
  constructor(name, maxSpeed, numRocketEngines) {
    super(name, maxSpeed);
    this.numRocketEngines = numRocketEngines;
  }
}

// const spaceship = new Spaceship('Enterprise', 1000, 2);
// console.log(spaceship.getMaxSpeed());
// console.log(spaceship.numRocketEngines);

// EX2:
class Shape {
  constructor(color = 'Transparent') {
    this.color = color;
    this.type = 'shape';
  }
  describe() {
    console.log(`A ${this.color} ${this.type}`);
  }
}

class Square extends Shape {
  constructor(color, sideLength) {
    super(color);
    this.sideLength = sideLength;
    this.type = 'Square';
  }

  area() {
    return this.sideLength * this.sideLength;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
    this.type = 'Rectangle';
  }

  area() {
    return this.width * this.height;
  }
}

// const square = new Square('blue', 5);
// const rectangle = new Rectangle('red', 5, 6);
// console.log(square.area());
// console.log(rectangle.area());

// for (const shape of [square, rectangle]) shape.describe(); // Calls the describe method from 'Shape' is called with the characteristics

// EX3:
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
    this.shape = 'Circle';
  }

  area() {
    Math.PI * this.radius * this.radius;
  }
  describe() {
    console.log(`A round and awesome ${this.color} ${this.shape}`);
  }
}

// const square = new Square('blue', 5);
// const rectangle = new Rectangle('red', 5, 6);
// const circle = new Circle('green', 3);
// console.log(square.area());
// console.log(rectangle.area());
// console.log(circle.area());

// for (const shape of [square, rectangle, circle]) {
//   // Describe method from shapes is called for
//   shape.describe();
// }

// EX4:
class UNSC {
  constructor(name, lives, hp, level, team, weapon, ammo, kills = 0, warCry) {
    this.name = name;
    this.lives = lives;
    this.hp = hp;
    this.level = level;
    this.kills = kills;
    this.weapon = weapon;
    this.ammo = ammo;
    this.warCry = warCry;
  }

  getWarCry(phrase) {
    this.warCry = `${this.name}: ${phrase}`;
    return this.warCry;
  }
  shoot() {
    const ammoCount = this.ammo;
    setInterval(() => {
      this.ammo -= 1;
      if (this.ammo >= 0) {
        console.log(`Ammo: ${this.ammo}/${ammoCount}`);
      } else {
        return;
      }
    }, 100);
  }

  getKills(enemyAllies) {
    this.kills = 100 - enemyAllies;
    return this.kills;
  }
  getScore() {
    console.log(`Score: ${this.getKills * 10} `);
  }
}

class Covenant extends UNSC {
  constructor(name, lives, hp, level, team, weapon, ammo, kills = 0, species, allies) {
    this.species = species;
    this.allies = allies;
  }

  warCry(dialogue) {
    console.log(`${this.species}: ${dialogue}`);
  }
}

class Spartan extends UNSC {
  constructor(name, lives, hp, level, weapon, ammo, kills, armour) {
    super(name, lives, hp, level, weapon, ammo, kills);
    this.armour = armour;
  }
}

const John117 = new Spartan('John 117', 'Spartan III', 1000, 100, 'BR', 42, this.kills, 'Mjionir');
const Sirina100 = new Spartan('Sirina100', 'Spartan IV', 1000, 100, 'DMR', 42, this.kills, 'Mjionir');
const Buck09 = new Spartan('Buck09', 'Spartan IV', 1000, 100, 'S7 SNIPER', 42, this.kills, 'Mjionir');
const Ben249 = new Spartan('Ben249', 'Spartan V', 1000, 100, 'M90 Bulldog', 42, this.kills, 'Mjionir');
const Kyro110 = new Spartan('Kyro110', 'Spartan III', 1000, 100, 'BR', 42, this.kills, 'Mjionir');

let spartans = [
  John117.getWarCry('Locked and Loaded.'),
  Sirina100.getWarCry('Itching to hunt!'),
  Buck09.getWarCry('Looking for heads...'),
  Ben249.getWarCry('Havoc on the way!'),
  Kyro110.getWarCry('Ready to Roll')
];

for (let spartan of spartans) {
  console.log(spartan);
}
