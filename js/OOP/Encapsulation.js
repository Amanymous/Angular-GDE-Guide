console.log("Encapsulation - Object oriented programming in Javascript");

// const person = {
//     name: "Aman",
//     age: 23,
    
//     getAge(){
//         return this.age;
//     },

//     setAge(newAge){
//         if(newAge > 0){
//             this.age = newAge;
//         }
//     }
// }
// console.log(person.getAge());
// console.log(person.getAge());

function Person(name, age) {
    let _name = name;
    let _age = age;
  
    this.getName = function () {
      return _name;
    };
  
    this.getAge = function () {
      return _age;
    };
  
    this.setAge = function (newAge) {
      if (newAge > 0) {
        _age = newAge;
      }
    };
  }
  
  const person = new Person("John", 30);
  console.log(person.getName()); // Output: John
  console.log(person.getAge()); // Output: 30
  
  person.setAge(35);
  console.log(person.getAge()); // Output: 35
  