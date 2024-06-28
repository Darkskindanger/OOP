
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
  constructor(name, hp, mp, items, shield, callPhrase) {
    super(name, hp, mp, items, callPhrase); // Call the superclass constructor with these parameters
    this.shield = shield;
  }
}

const warrior1 = new Warrior(
  'Genghis Khan',
  99,
  20,
  ['sword', 'food'],
  'leather shield'
);
warrior1.callPhrase('WE GO TO WAR');
console.log(warrior1);
