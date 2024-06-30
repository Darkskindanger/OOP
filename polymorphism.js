// Polymorphism: Being able to mix both custom functionality and generic/default functionality.
class Player {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }
  // The below method wont work due to it being an arrow function. This bounds it ONLY to this instance (Player)
  // speak = (phrase) => {
  //   console.log(`${this.name} says: ${phrase}`);
  // };
  speak(phrase) {
    console.log(`${this.name} says: ${phrase}`);
  }
}
class Spartan extends Player {
  constructor(name, hp, mp, items, shield) {
    super(name, hp, mp, items);
    this.shield = shield;
  }
  // Override
  speak(phrase) {
    console.log(`${phrase}!!!`);
  }
}
class Marine extends Player {
  constructor(name, hp, mp, items, pistol, speak) {
    super(name, hp, mp, items, speak);
    this.pistol = pistol;
  }

  speak(phrase) {
    console.log(`${phrase} sir!`);
  }
}
class Medic extends Player {
  constructor(name, hp, mp, items, bandages) {
    super(name, hp, mp, items);
    this.bandages = bandages;

    // MEDIC DOESNT HAVE speak
  }
}

const spartan = new Spartan('John 117', 1000, 500, ['DMR', 'PISTOL', 'GRENADES'], 'Energy Shield');
const marine = new Marine('Mark', 300, 150, ['AR', 'PISTOL', 'GRENADES'], 'Glock 19');
const medic = new Medic('Moe', 220, 120, ['APRON', 'FIRST AID KIT', 'PISTOL'], 'BAND 1000');

// Polymorphism here explained: Both spartana and marine have inherited and customised the 'speak' method to their own liking. Medic however hasnt...

// Below we actually call the speak on all the players... even MEDIC!
// Since medic doesnt have a speak method, it looks up to the PLAYER prototype to use the 'speak' method.
console.log(spartan.speak('Hello'));
const players = [spartan, marine, medic];

for (player of players) {
  player.speak('i am Speaking');
}
