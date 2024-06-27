//1.
 class Person{
    // 'Setter'
    constructor(name,age){
        this.name=name;
        this.age=age;

    };

    // Good practice for security is to set a 'getter' for each property of a constructor
    getName=()=>{return this.name;};

    getAge=()=>{return this.age};


}

let person1 = new Person('pedro',19)
let person2 = new Person('James',22)
console.log(person1.getName())
console.log(person2.getName())
console.log(person1.getAge())
console.log(person2.getAge())

//2. 
class House{
    constructor(address,price,residents){
        this.address=address;
        this.price=price;
        this.residents=residents;
    }
    getAddress = ()=>{return this.address}
    getPrice=()=>{return this.price}
    getResidents=()=>{return this.residents}

    addResident = (resident)=>{
    this.residents.push(resident)
    }
}

let Pedro = new Person('Pedro',19)
let David = new Person('David',22)

let house = new House('1 random lane', 290000,[Pedro,David])
console.log(house.getResidents())

let Paulo = new Person('Paulo',24)
house.addResident(new Person('Peter',24))
console.log(house.getResidents())

// Practicing abstraction: Adding to newly added 'job' field

class Person2{

    constructor(name,age){
        this.name=name;
        this.age=age;
        this.job="" //expecting a string
    };

    getName=()=>{return this.name;};

    getAge=()=>{return this.age};

    setJob=(job)=>{this.job = job};
}

let Jim = new Person2('Jim',40)
let house2 = new House('2 Random Ave', 200000,[])
// house2.addResident(new Person2('Nick',20))
house2.addResident(Jim)
Jim.setJob('Developer')
console.log(house2.getResidents())

// 
// class Shopper{
//     constructor(name,age,bankBalance){
//         this.name=name;
//         this.age=age;
//         this.bankBalance=bankBalance;
//     }
//     getName = ()=>{return this.name}
//     getAge = ()=>{return this.age}
//     getBalance = ()=>{return this.bankBalance}
// }

// let Dave = new Shopper('Dave',28,2000)
// let Mike = new Shopper('Mike',18,4000)

// class ShoppingCart{
//     constructor(item,price,qty,customers){
//         this.item=item;
//         this.price=price;
//         this.qty=qty;
//         this.customers=customers
//     }

//     getItem = ()=>{return this.item};
//     getPrice = ()=>{return this.price};
//     getQty = ()=>{return this.qty};
//     getCustomers = ()=>{return this.customers}
// }

// let cart1 = new ShoppingCart('Chicken Breast',99,2,[Dave,Mike])
// console.log(cart1)

