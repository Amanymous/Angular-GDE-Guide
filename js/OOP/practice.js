'use strict';

const Person = function (firstName, birthYear) {
    // these are instance propertise
    this.firstName = firstName
    this.birthYear = birthYear

    // never create method inside constructor function 
    // this.calcAge = function(){
    //     console.log(2020 - this.birthYear);
    // }

    // console.log(this);
}
// new Person("aman",1999)
const aman = new Person("aman", 1999)
const imran = new Person("imran", 1999)
const rehan = new Person("rehan", 1999)
const jay = 'Jay'
// console.log(aman instanceof Person, imran instanceof Person, jay instanceof Person);
// 1) New empty { } is created
// 2) function is called, this = {}
// 3) linked to prototype
// 4) function automatically return  {}

console.log(Person.prototype)
Person.prototype.abc = function () {
    console.log(2020 - this.birthYear);
}
console.log(aman.__proto__ === Person.prototype);
console.log("Person.prototype.isPrototypeOf:",Person.prototype.isPrototypeOf(aman));
console.log("Person.prototype.isPrototypeOf:",Person.prototype.isPrototypeOf(imran));
console.log("Person.prototype.isPrototypeOf:",Person.prototype.isPrototypeOf(rehan));
console.log("Person.prototype.isPrototypeOf:",Person.prototype.isPrototypeOf(Person));
// prototype means linked Objects

Person.prototype.species = "Animal"
console.log(aman,imran,rehan);
console.log("Property or not:",aman.hasOwnProperty('species'));