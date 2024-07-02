class Database {
  #token = 'abc123';
  constructor() {
    this.#token = 'xyz789';
  }

  saveData(data) {
    this.#initDBConnection();
    this.#authorise();
    this.#updateQuery();
    console.log(this.#token);
  }

  #initDBConnection() {}
  #authorise() {}
  #updateQuery() {} //# hides the properties from outside of the class. They are ONLY available inside the class
}

const db = new Database();
console.log(db);
console.log(Object.getOwnPropertyNames(db));

console.log(db.token); //Returns undefined AND also acts as if its a totally new variable, same as if we were trying to call for db.hello (which would return undefined beacause it doesnt exist... 'token' is non existent once the # is added)

// This does NOT substitute code security, were mainly hiding it and preventing other developers from altering

class CustomDB extends Database {
  token = '12345';
  saveData(data) {
    super.initDBConnection(); // Does not work as method is made available ONLY in the class instance it was initialized in
  }
}

// Encapsulation is useful for creating functional classes to be used by end users/developers while hiding the inner workings to prevent errors or ill intended changes to code from breaking the code

// Static Keyword: Adds fields/Methods directy to the class object itself (Below, Utils). This will behave the same as a normal object and wont require an instance of Utils to be accessed. These properties WONT have the ability to ammended or changed. They belong to the Parent class object.

class Utils {
  static description = 'Awesome Utilities';
  description = 'Another description';

  static caps(str) {
    return str.toUpperCase();
  }

  lower(str) {
    return str.toLowerCase();
  }
}

consle.log(Utils.description);
console.log(Utils.caps);

console.log(Object.getOwnPropertyNames(Utils));

const utils = new Utils();
console.log(utils);
console.log(Object.getOwnPropertyNames(utils));
