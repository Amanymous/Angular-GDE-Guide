// 1) What is OOP in typescript?
// Class and Object,Encapsulation(Data Security),Inheritance(Code Reusaability)
// Ploymorphism(Mulitple Forms means can create multiple method in calss with same name)
// and Abstraction(hide complexity of code)
// In typescript doing OOP is very easy comparision to js(creating class and inheritance is diffcult)

// 2) What are classes and object in ts?
// class Person {
//   // classes are blueprint for individual objects
//   // objects are the blueprint of a class
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   familyCount() {
//     return 10;
//   }
// }
// let obj = new Person("Aman", 25);

// let countFamily = obj.familyCount();
// console.log(obj.name + " " + obj.age + " " + countFamily);

// 3) What is constructor in Angular?
// The constructor is a method in Typescript
// class that automatically gets called when the class is being instantiated
// constructor always run before any angular hook and it's not of lifecyle hook.
// constructor is widely used to inject dependencies(services) into component class.

// 4) What is Encapsulation in ts?
// Ecapsulation is wrapping of data(field) and function together
// to restrict the direct access of the data.
// class Employee {
//   private _empId: number;
//   empName: string;
//   getEmpId() {
//     return this._empId;
//   }
//   setEmpId(empId: number) {
//     if (empId < 0) {
//       console.log("Td cannot be less then 0");
//     } else {
//       this._empId = empId;
//     }
//   }
// }
// let obj = new Employee();
// obj.setEmpId(10);
// console.log(obj.getEmpId());

// 5) What is inheritance in ts?
// inheritance is a feature where drived class will acquire
// the propertise and method of base class.
// class Animal {
//   eat() {
//     console.log("eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("bark");
//   }
// }

// let objDog = new Dog();
// objDog.sleep(); // fixed

// class Cat extends Animal {
//   meow() {
//     console.log("meow");
//   }
// }

// let objCat = new Cat();
// objCat.meow(); // fixed

// 6) Waht is interface and why do we use it?
// Interface acts like a contract in your app
let age: number;
interface IEmployee {
  Role(): void;
}

class PermanentEmployee implements IEmployee {
  Role() {
    console.log("Lead");
  }
}

class ContractEmployee implements IEmployee {
  Role() {
    console.log("Developer");
  }
}
