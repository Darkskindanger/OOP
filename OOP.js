//
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.job = '';
  }
  getName = () => {
    return this.name;
  };
  getAge = () => {
    return this.age;
  };
  getJob = (job) => {
    return this.job;
  };
}

let Daniel = new Person('Daniel', 28);

class Home {
  constructor(address, price, residents) {
    this.address = address;
    this.price = price;
    this.residents = residents;
  }
  getAddress = () => {
    return this.address;
  };
  getPrice = () => {
    return this.price;
  };
  getResidents = () => {
    return this.residents;
  };
}

let home1 = new Home('1 default lane', 2900000, [Daniel]);
console.log(home1);

// Abstraction: Only showing necessary details needed to whomever is using the object

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.job = '';
  }
  getName = () => {
    return this.name;
  };
  getAge = () => {
    return this.age;
  };
  setJob = (job) => {
    this.job = job;
  };
}

let Chris = new Person2('Chris', 30);
Chris.setJob('Developer');
console.log(Chris);

// Encapsulation - Privatisation of code

class Person3 {
  constructor(name, age) {
    this._name = name; //Adding an underscore before the variable name tells other developers not to access/change properties individually
    this._age = age;
    this._job = '';
  }
  getName = () => {
    return this.name;
  };
  getAge = () => {
    return this.age;
  };
  getJob = (job) => {
    return this.job;
  };
}

//Inheritance:

class Programmer extends Person {
  // 'extends' is as stated, 1 child class extends a parent class (giving access to everything inside the parent class)
  constructor(name, age, company, salary, language) {
    super(name, age); // 'super() is used to create an instance of the parent class (Person) and specifies the intended classes to be filled
    this.company = company;
    this.salary = salary;
    this.language = language;
  }

  sayHi = () => {
    console.log(
      `Hello, i am a programmer! My name is ${this.getName()} and i work for ${
        this.company
      }`
    );
  };
}

let programmer = new Programmer('Pedro', 19, 'Twitch', 100000, 'Javascript');
programmer.sayHi();
