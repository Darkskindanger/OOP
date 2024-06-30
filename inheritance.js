
// Super/Main class (to hold the shared characteristics/methods)
class Player {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }
  callPhrase = (phrase) => {
    console.log(`${this.name} says: ${phrase}`);
  };
}
const player1 = new Player('player', 80, 39, ['stone', 'matches']);
player1.callPhrase('Ready to go');
console.log(player1);

// sub-class Warrior
class Warrior extends Player {
  constructor(name, hp, mp, items, shield) {
    super(name, hp, mp, items); //'super' keyword: Points to the prototype of the extended class 
                                //Call the superclass constructor with these parameters
    this.shield = shield;
    // super.callPhrase('Rawr')
  }
}

const warrior1 = new Warrior(
  'Genghis Khan',
  99,
  20,
  ['sword', 'food'],
  'leather shield'
);
// warrior1.callPhrase('WE GO TO WAR');
console.log(warrior1);

// 'instanceOf' keyword : Used to check prototypal inheritance chain
console.log(Player instanceof Object)
console.log(warrior1 instanceof Player)
console.log(warrior1 instanceof Warrior)
console.log(warrior1 instanceof Array)
console.log(warrior1 instanceof Object)