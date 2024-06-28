// Exercises (tech with Nader)

// Warm up:
class Animal {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  getType = () => {
    return this.type;
  };
  getName = () => {
    return this.name;
  };
}

let tiger = new Animal('Mammal', 'tiger');
tiger.name = 'Liam';
console.log(tiger);
let bear = new Animal('Mammal', 'Bear');
bear.name = 'Chris';
console.log(bear);

// Ex:1
// 1. Create a class called "Student"
// 2. Allow us to pass in 3 properties/fields to the Student constructor which get set to the instance: -name (String), major (String), grades (Array of Numbers)
// 3. Create a method on "Student" called "addGrade" that has one paramater "grade". It will simply push the "grade" given on to the "grades" Array.
// 4. Create a method on "Student" called "gpa" that will return the AVERAGE grade of the student's "grades"
// 5. Create an instance of the Student class like so: const eva = new Student ("Eva", "Arts", [95, 75, 83])
// 4. Print out the "eva" instance
// 6. Use the "gpa" method on "eva" to print out their average grade (Should be 84.33)

let initiator = 0;
class Student {
  constructor(name, major, grades) {
    this.name = name;
    this.major = major;
    this.grades = grades;
  }
  getName = () => {
    return this.name;
  };
  getMajor = () => {
    return this.major;
  };
  getGrades = () => {
    return this.grades;
  };

  addGrade = (grade) => {
    this.grades.push(grade);
  };
  gpa = (arr) => {
    arr.forEach((element) => {
      initiator += element;
    });
    return initiator / arr.length;
  };
}

let eva = new Student('Eva', 'Arts', [95, 75, 83]);
eva.addGrade(100);
console.log(eva.gpa(eva.grades));

// Ex:2
// 1. Create a class called "Bookstore"
// 2. The "Bookstore" constructor has a single parameter called "books" which is an Array of Book Objects. Assign the argument passed in to the instance within the constructor.
// 3. Create a "listBooks" method on the "Bookstore" class that will loop through and print out all the Books in the Store (assume they have a name and author) so you can format each like this:
// `${book.name} by ${book.auther}`
// 3. Create another class called "Book"
// 4. The "Book" constructor has 2 parameters:
// - name
// - author
// Assign these to the instance within the constructor
// 5. Create 2 Books:
// const nineteen84 = new Book("1984", "George Orwell") const hp = new Book ("Harry Potter", "J.K. Rowling")
// 6.Create a Bookstore: const bookstore = new Bookstore([nineteen84,hp])
// 7.Call bookstore.listBooks() and make sure it works:
// 1984 by George Orwell
// Harry Potter by J.K Rowling

class Bookstore {
  constructor(books) {
    this.books = books;
  }
  listbooks = (books) => {
    this.books.forEach((book) => {
      console.log(`${book.name} by ${book.author}`);
    });
  };
}

class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }
  getName = () => {
    return this.name;
  };
  getAuthor = () => {
    return this.author;
  };
}

const nineteen84 = new Book('1984', 'George Orwell');
const hp = new Book('Harry Potter', 'JK Rowling');

const bookstore = new Bookstore([nineteen84, hp]);
console.log(bookstore);
bookstore.listbooks(bookstore);

// 1. Lookup the retro arcade game: Space Invaders
// on Google for some pictures
// Eg:
// https://en.wikipedia.org/wiki/Space_Invaders
// 2. How would you build a class to model the Player (Spaceship) and the Enemy (Flying Alien)?
// 3. Try to think of all the different fields and methods each would have in a real game. What would you want to have in them?
// 4. Write these out first on paper/text to brainstorm, then implement the classes in JS
// * This is purposefully open-ended to allow you the creative freedom to design these classes

class Player {
  constructor(lives, level, highScore, lowScore, avgScore, confirmedKills) {
    this.lives = lives;
    this.level = level;
    this.highScore = highScore;
    this.lowScore = lowScore;
    this.avgScore = avgScore;
    this.confirmedKills = confirmedKills;
  }
  getLives = () => {
    return this.lives;
  };
  getLevel = () => {
    return this.level;
  };
  getHighScore = () => {
    return this.highScore;
  };

  getAvgScore = () => {
    this.avgScore = (this.highScore + this.lowScore) / 2;
    return this.avgScore;
  };
  getConfirmedKills = (allies) => {
    this.confirmedKills = 100 - allies;
    return this.confirmedKills;
  };
}
class Enemy {
  constructor(species, level, hp, allies) {
    this.species = species;
    this.level = level;
    this.hp = hp;
    this.allies = allies;
  }

  getSpecies = () => {
    return this.species;
  };
  getLevel = () => {
    return this.level;
  };
  getHp = () => {
    return this.hp;
  };
  getAlliess = () => {
    return this.allies;
  };
}

let player1 = new Player(3, 10, 200, 45);
let enemy1 = new Enemy('noopa', 99, 45, 78);
console.log(enemy1);
console.log(player1.getAvgScore()); //set the avg score based on the input high/low scores
player1.getConfirmedKills(enemy1.allies); // set the confrimed kills based on creating the enemy obj and providing the ally count
console.log(player1);
