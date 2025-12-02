console.log("Prototype - Object oriented programming in Javascript");

// 'use strict';

// const Person = function (firstName, birthYear) {
//     // these are instance propertise
//     this.firstName = firstName
//     this.birthYear = birthYear

//     // never create method inside constructor function 
//     // this.calcAge = function(){
//     //     console.log(2020 - this.birthYear);
//     // }

//     // console.log(this);
// }
// // new Person("aman",1999)
// const aman = new Person("aman", 1999)
// const imran = new Person("imran", 1999)
// const rehan = new Person("rehan", 1999)
// const jay = 'Jay'
// // console.log(aman instanceof Person, imran instanceof Person, jay instanceof Person);
// // 1) New empty { } is created
// // 2) function is called, this = {}
// // 3) linked to prototype
// // 4) function automatically return  {}

// console.log(Person.prototype)
// Person.prototype.abc = function () {
//     console.log(2020 - this.birthYear);
// }
// console.log(aman.__proto__ === Person.prototype);
// console.log("Person.prototype.isPrototypeOf:",Person.prototype.isPrototypeOf(aman));
// console.log("Person.prototype.isPrototypeOf:",Person.prototype.isPrototypeOf(imran));
// console.log("Person.prototype.isPrototypeOf:",Person.prototype.isPrototypeOf(rehan));
// console.log("Person.prototype.isPrototypeOf:",Person.prototype.isPrototypeOf(Person));
// // prototype means linked Objects

// Person.prototype.species = "Animal"
// console.log(aman,imran,rehan);
// console.log("Property or not:",aman.hasOwnProperty('species'));
function BankAccount(customerName, balance = 10) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // this.deposit = function (amount=1) {
    //     this.balance += amount;
    // };

    // this.withdraw = (amount) => {
    //     this.balance -= amount;
    // };
}

const amanAccount = new BankAccount("Aman",13)
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
} 
BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
}
amanAccount.deposit(120)
amanAccount.withdraw(120)
console.log("account deposite==",amanAccount);
console.log("BankAccount.prototype==",BankAccount.prototype)


