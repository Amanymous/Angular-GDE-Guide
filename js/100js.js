// 1) What is javascript ? What is the role of javascript engine?
// js is programming language that is used for converting static web to
// interactive and dynamic web pages.A js engine is a program present in web
// browser that executes js code (google: V8,firefox:Spider Monkey,Safari: js core, edge: Chakra)
// all these are js engine

// 2) What is client side and server side?
// A client is device app,or software component that requests and consumes services or resource
// from a server.
// A server side is a device, computer or software app that provides sevice ,resource or
// functions to clients.

// 3) What is scope in js?
// There are 3 types of scope.
// Global Scope: let globalVariable = "global"; // Global - accessbile anywhere
// Functional Scope: accessbile inside function only.Example below
// myFunction();
// function myFunction() {
//     var message = "Hello inside the function!";

//     console.log(message); // ✔ Works: "Hello inside the function!"
// }
// Block scope: accessbile inside block only.Example below
// if(true){
// accessbile inside block only
// let blockVariables = "block"
// }
// global{ function { block { } } }

// 4) What is the type of a variable in js when it is declared without using the
// var,let or const keywords?
// "var" is the implicit type of variable when a variable is declared without var,let or const keywords.
// if(true) {
//   variable = 10;
// }
// console.log(variable);
// Output: 10

// 5) What is hoisting in javascript?
// hoisting will move the decleration of varaible and function to top of the scope at compile time
// of their respective scopes during the compilation phase
// hoistFunction();
// function hoistFunction() {

//     console.log("Hello inside the function!");
// }
// x = 10;
// console.log(x)
// var x

// 6) What is JSON?
// JSON(javascript object notation) is a lightweight data interchange format.
// JSON consists of key-value pairs
// API usually request and response the data in json format.

// 7) What are variables? What is the difference between var,let and const?
// only var is functional scope, let and const are block scope
// var
// function example(){
//     if(true) {
//     var count = 10;
//     console.log(count)
//     }
//     console.log(count)
// }
// example()
// output: 10,10
// var creates a function-scoped variable
// let
// function example(){
//     if(true) {
//     let count = 10;
//     console.log(count)
//     }
//     console.log(count)
// }
// example()
// output: 10 ERROR count is not defined
// let creates a blocked-scoped variable
// const
// function example(){
//     if(true) {
//     const count = 10;
//     console.log(count)
//     }
//     console.log(count)
// }
// example()
// output: 10 ERROR count is not defined
// const can be assigned only once and it's value cannot be changed afterwards.
// const z = 10
// z = 20
// this will result an error
// console.log(z)

// 8) What are data types i JS?
//  number let age = 25
// string let msg = 'hi'
// boolean let isTrue = true
// undefined let x; console.log(x); output: undefined
// Null let y = null; console.log(y); output: null
// Ther are 2 types of data types primitive and non primitve
// primitive: Number,String,Booleans,Undefined,null (primitive holds single value and they are simple data types)
// non-primitive: Object,Array,Function,Data,RegExp (non-primitive holds multiple values)
// primitive data types are immutable, meaning their values, once assigned, cannot be changed
// let age = 25 and the change age = 30 is js memory 8888(memory address) = 25 ,9999(memory address) = 30
// Non primitive data types can hold multiple value and methods and they are complex data types.
// They are mutable and their values can be changed same memery same location and same address

// 9) What is the difference between null and undefined in js?
// let undefinedVaraible; // no value assigned
// console.log(undefinedVaraible); output: undefined
// when a variable is declared but has not been assigned a value
// it is automatically initialized with undefined.Undefined can
// be used when you donot have the value right now, but you will
// get it after same logic or operation
// let nullVariable = null // null assigned
// console.log(nullVariable); output: null
// null: null variables are intentionally assigned the null value
// Null can be used, when you are sure you donot have any value for particular variable.

// 10) What is the use of typeof operator?
// typeof operator is used to determine the type of each variable.
// Real app use -> typeof operator can be used to validate the data received from externel source(api).
// typeof "Hello"; // "string"
// typeof 42; // "number"
// typeof true; // "boolean"
// typeof undefined; // "undefined"
// typeof Symbol(); // "symbol"
// typeof 10n; // "bigint"
// typeof notDefined; // "undefined"
// function test() {}
// typeof test === "function"; // true
// typeof { a: 1 }; // "object"
// typeof [1, 2, 3]; // "object" (arrays are also objects)
// typeof null; // "object" (historical bug)
// function sum(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     throw new Error("Arguments must be numbers");
//   }
//   return a + b;
// }

// 11) What is type coercion in js?
// type coercion is the automatic conversion of values from one data type to another during certain
// operationor comparisions.Type coercion can be used during String and Number concatenation
// Type coercion can be used while using comparison operators.
// "5" + 2; // "52"  (number → string)
// "5" - 2; // 3     (string → number)
// 1 == "1"; // true  (string → number)
// Number("10"); // 10
// String(50); // "50"
// Boolean(0); // false
// "Hello " + 5; // "Hello 5"
// "4" * 2; // 8
// true + 1; // 2
// Boolean(""); // false
// Boolean("hi"); // true
// Boolean(0); // false
// Boolean(1); // true
// 1 == "1"   // true
// 1 === "1"  // false

// 12) What is operator precedence?
// As per operator precedence, operators with higher precedence are evaluated first
// Brackets → Orders → Division/Multiplication → Addition/Subtraction
// let a = 6;
// let b = 3;
// let c = 2;
// let result = a+b*c+(a-b)
// console.log(result); // output: 15

// 13) What is the difference between unary,binar and ternary operators?
// unary
// let x = 5;
// -x;         // Unary minus
// ++x;        // Increment
// typeof x;   // Type check
// !true;      // Logical NOT

// Binary
// 5 + 3;
// 10 - 2;
// 4 * 2;
// x > y;
// a && b;

// ternary
// let age = 18;
// let canVote = age >= 18 ? "Yes" : "No";

// 12) What is short-circuit evaluation in js?
// Short-circuit evaluation stops the execution as soon as the result can be determine without
// evaluating the remaining sub-expression
// short-circuit evaluation with logical AND
// let result = false && someFunction()
// console.log(result) output: false
// short-circuit evaluation with logical OR
// let result = true || someFunction()
// console.log(result) output: true

// 13) What are the types of conditional statement in js?
// if else, ternary operator and switch statement

// 14) What is the difference between == and ===?
// loose equality
// console.log(1 == '1'); output: true
// console.log(true == 1); output: true
// Loose Equality (==) operator compares two values for equality after performing type coercion
// strict equality
// console.log(1 === '1'); output: false
// console.log(true === 1); output: false
// Strict Equality (===) operator compares two values for equality without performing type coercion

// 15) What is the difference between Spread and Rest operator in js?
// The spread operator(...) is used to expand or spread elements from an iterable
// (such as array,string or object) into individual elements.
// uses of spread operator (copying an array, merging arrays and passing multiple arguments to function)
// const array = [1,2,3]
// console.log(...array); output: 1,2,3
// copying an array
// const originalArray = [1,2,3]
// const copiedArrray = [...originalArray]
// console.log(copiedArrray)
// passing multiple arguments to function
// const numbers = [1,2,3,4,5]
// sum(numbers)
// function sum(a,b,c,d,e){
//   console.log(a+b+c+d+e); output: 15
// }
// The rest operator is used in function parameters to collect all remaining arguments into an array.
// display(1, 2, 3, 4, 5);
// function display(first, second, ...restArguments) {
//   console.log(first);
//   output: 1;
//   console.log(second);
//   output: 2;
//   console.log(restArguments);
//   output: [3, 4, 5];
// }

// 16) What are arrays? how to get, add and remove elements from arrays?
// An array is a data type that allows you to store multiple values in a single variable.
// Arrays methods
// Gets: indexOf(),find(),filter(),Slice()
// Add: push(), concat()
// Remove: pop(), shift(), splice()
// Modify: map(), forEach()
// Others: join(), length, sort(), reverse(), reduce(), some(), every()

// push is use to add element in last index
// let arr = [1,2,3,4]
// arr.push(5)
// console.log(arr) output: [1,2,3,4,5]

// unshift is use to add element in first index
// let arr = [1,2,3,4]
// arr.unshift(5)
// console.log(arr) output: [ 5, 1, 2, 3, 4 ]

// shift() Removes the first element of an array and returns it.
// const arr = [10, 20, 30];
// const removed = arr.shift();
// console.log(removed); // 10
// console.log(arr);     // [20, 30]

// filter() checks every item in an array and keeps only the items that match your condition.
// let arr = [1, 2, 3, 4];
// let result = arr.filter((num) => num !== 3);
// console.log(result); // [1, 2, 4]

// map() transforms every item in the array and returns a new array of the same length.
// let numbers = [1, 2, 3, 4];
// let doubled = numbers.map((n) => n * 2);
// console.log(doubled); // [2, 4, 6, 8]

// concat() joins arrays together.
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let result = arr1.concat(arr2);
// console.log(result); // [1, 2, 3, 4]

// 17) What is the indexOf() method of an array?
// indexOf is used get the element index of that array
// let arr = [1, 2, 3, 4];
// let result = arr.indexOf(3);
// console.log(result); // 2

// 18) What is the difference between find() and filter() method of an array?
// find() method get the first element that satisfies a condition
// let arr = [1, 2, 3, 4, 8];
// let result = arr.find((num)=> num%2 ===0);
// console.log(result); // 2

// filter() is used get the array of elements that stisfies the condition
// let arr = [1, 2, 3, 4, 8];
// let result = arr.filter((num) => num % 2 === 0);
// console.log(result); // [ 2, 4, 8 ]

// 19) What is the slice() method of an Array?
// slice method get a subset of the array from start index to end index(end index not included)
// let arr = ['a','b','c','d'];
// let result = arr.slice(1,4);
// console.log(result); // [ 'b', 'c', 'd' ]

// 20) What is the difference between push() and concat() methods of an array?
// Push() will modify the original array itself
// let arr = ['a','b','c','d'];
// arr.push('e','f')
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// Concat() method will create new array and not modify the original array
// let arr = ['a','b','c','d'];
// let arr1 = arr.concat('e','f')
// console.log(arr,arr1); // [ 'a', 'b', 'c', 'd' ] [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// 21) What is the difference between pop() and shift() method of an array?
// pop is use to remove element from last index of the array
// let arr = [1,2,3,4]
// arr.pop()
// console.log(arr)

// shift() will remove the first element of the array
// let arr = ['a','b','c','d'];
// arr.shift()
// console.log(arr); // [ 'b', 'c', 'd' ]

// 22) What is the splice method of an array?
// splice() is used to add,remove or replace elements in an array
// array.splice(startIndex, deleteCount, ...itemsToAdd)
// let arr = ['a','b','c','d'];
// arr.splice(1,2,'m','n')
// console.log(arr); // [ 'a', 'm', 'n', 'd' ]
// let arr = ['a','b','c','d'];
// arr.splice(1,1)
// console.log(arr); // [ 'a', 'c', 'd' ]
// let arr = ['a','b','c','d'];
// arr.splice(1,1,'A')
// console.log(arr); // [ 'a', 'A', 'c', 'd' ]

// 23)What is the difference between map and forEach array methods of an arrray?
// map() is used when you want to modify each element of an array and create a
// new array with modified values
// let arr1 = [1,2,3]
// let mapArray = arr1.map((e)=> e*2)
// console.log(mapArray) output: [2,4,6]

// forEach() method is used when you want to perform some operation on each element
// of an arrray without creating new array.
// let arr = [1,2,3]
// arr.forEach((e)=>{
//   console.log(e*2);
// })
// does not return anything
// 2 4 6

// 24) How to sort and reverse an array?
// sort() work with string but not with numbers directly
// let arr1 = ['a','h','l','b','c','d'];
// arr1.sort()
// console.log(arr1); // [ 'a', 'b', 'c', 'd', 'h', 'l' ]

// let arr2 = ['a','h','l','b','c','d'];
// arr2.reverse()
// console.log(arr2); // [ 'd', 'c', 'b', 'l', 'h', 'a' ]

// 25) What is array Desturcturing in js?
// array desturcturing allows you to extract the elements from an array
// and assign them to individuals variable in single statement
// const fruits = ['apple','banana','orange']
// const [firstFruit,secondFruit,thirdFruit] = fruits

// 26) What are array-like objects in js?
// array-like object are object that have indexed elements and a length property,similar
// to arrays,but they may not have all the methods of arrays like push(),pop() and others
// let str = 'hii'
// console.log(str) // hii
// console.log(str.length); // 3
// console.log(str[0]); // h

// 27) How to convert an array-like object into an array?
// let arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
// let arr1 = Array.from(arrayLike);
// let arr2 = [...arrayLike];
// let arr3 = Array.prototype.slice.call(arrayLike);
// console.log(arr1); // ['a', 'b', 'c']
// console.log(arr2); // ['a', 'b', 'c']
// console.log(arr3); // ['a', 'b', 'c']

// 28) What is the difference between while and for loops?
// For loop allows to iterate a block of code a specific number of times.
// for loop is better for condition with initialization and with increment because all
// can be set in just one line of code.
// for(let i = 0; i < 5; i++){
//   console.log(i);
// }
// output: 0 1 2 3 4 5

// While loop executes a block of code while a certain condition is true.
// While loop is better when ther is only condition, no initialization, no increment
// let j = 0;
// while(j < 5){
//   console.log(j);
//   j++
// }

// 29) What is the difference between while and do while loops?
// do while loop is similar to the while loop,except that block of code is executed
// at least once, even if the condition is false
// let k = 0
// do{
//   console.log(k);
//   k++
// } while(k > 1)
// output: 0

// 30) What is the difference between break and continue statement?
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }
// output: 1 2
// break statement is used to terminate the loop

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }
// output: 1 2 4 5
// continue statement is used to skip the current iteration of the loop
// and move on to the next iteration

// 31) What is the difference between for and for of loop in js?
// for loop is slightly more complex having more lines of code
// whereas for of is much simpler and better for iterating object and array.
// let obj = {1: "a", 2: "b", 3: "c"};

// for (let val of Object.values(obj)) {
//     console.log(val);
// }
// output: a b c

// let arr = [1,2,3]

// for (let val of arr) {
//     console.log(val);
// }
// output: 1 2 3

// let arr = [1,2,3]
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }
// output: 1 2 3

// 32) What is the difference between for of and for in loop?
// for of loop is used to loop through the values of an object like arrays, strings.
// it allows you to access each value directly without having to use an index.
// let arr = [1,2,3]
// for(let val of arr){
//   console.log(val);
// }
// output: 1 2 3
// for in loop is used to loop through the propertise of an object.
// It allows you to iterate over the keys of an object and access
// the values associated by using keys as the index
// const person = {
//   name: "Happy",
//   role: "Developer",
// };
// for (let key in person) {
//   console.log(person[key]);
// }
// output: Happy Developer

// 33) What is forEach method? Compare it with for of and for in loop?
// forEach() is a method available on arrays or object that allows you
// you iterate over each element of the array and perform some action on each element.
// let arr = [1,2,3]
// for(let val of arr){
//   console.log(val);
// }
// output: 1 2 3
// let arr = [1,2,3]
// arr.forEach(function(element){
//     console.log(element)
// })
// output: 1 2 3

// const person = {
//   name: "Happy",
//   role: "Developer",
// };
// for (let key in person) {
//   console.log(person[key]);
// }
// output: Happy Developer
// const person = {
//   name: "Happy",
//   role: "Developer",
// };
// Object.values(person).forEach(function(element){
//     console.log(element)
// })
// output: Happy Developer
// const person = {
//   name: "Happy",
//   role: "Developer",
// };
// Object.values(person).forEach(function(element){
//     console.log(element)
// })
// const person = {
//   name: "Happy",
//   role: "Developer",
// };
// Object.keys(person).forEach(function(element){
//     console.log(element)
// })
// output: name role

// 34) When to use for of loop when to use forEach method in app?
// for of loop is more suitable when you need more control over
// the loop, such as using break statement or continue statement inside
// let arr = [1,2,3]
// for(let val of arr){
//   console.log(val);
//   if(val === 2){
//       break
//   }
// }
// output: 1 2

// forEach method iterate over each element of the array and perform
// some action on each element.
// let arr = [1,2,3]
// arr.forEach(function (item){
//   console.log(item);
//   if(item === 2){
//     break
//   }
// })
// SyntaxError: Illegal break statement

// 35) What is the difference between named and anonymous function? When to use what in app?
// Named funcitons have a name identifier
// Named Function
// Function Decleration
// function sum(a,b){
//   return a+b
// }
// sum(5,3)
// output: 8
// use named function for big and complex logics
// use when you want to reuse one function at multiple places

// Anonymous functions donot have a name identifier and
// cannot be referenced directly by name
// Anonymous Function
// console.log(function(a,b){
//   return a*b
// }(4,5));
// output: 20
// use anonymous function for small logics
// use when want to use a function in single place

// 36) What is function expression in js?
// Anonymous Function Expression
// const add = function(a,b){
//   return a+b
// }
// add(5,3)
// output: 8

// Named Function experssion
// const add = function sum(a,b){
//   return a+b
// }
// add(5,3)
// output: 8
// not good apprach you can use direct sum(5,3) as well

// 37) What is arrow function in js? What is the use?
// Arrow functions, also known as fat arrow functions
// is asimpler and shorter way for defining function in js

// Traditional Approach
// function add(x,y){
//   return x+y
// }
// add(5,8)
// output: 8

// Arrow function
// const add = (x,y) => x+y
// add(5,3)
// output: 8

// 38) What are callback Functions? What is it use?
// function add(x, y) {
//   return x + y;
// }
// let a = 3;
// let b = 5;
// let result = add(a, b);
// console.log(result); // 8
// A callback function is a function that is passed as anargument to another function
// function display(x,y,operation){
//   let result = operation(x,y)
//   console.log(result);
// }
// display(10, 5, (a, b) => a + b); // 15

// function display(x, y, operation) {
//   let result = operation(x, y);
//   console.log(result);
// }

// function add(a, b) {
//   return a + b;
// }

// display(10, 5, add);  // 15

// 39) What is higher order function in js?
// Take one or more functions as arguments(callback function) OR
// Return a function as a result

// function hof(func) {
//   func();
// }
// hof(sayHi);

// function sayHi() {
//   console.log("hi");
// }
// output: hi

// Return a function as a result
// function createAdder(number) {
//   return function (value) {
//     return value + number;
//   };
// }
// const addFive = createAdder(5);
// console.log(addFive(4)); // 9

// 40) What is the difference between arguments and parameters?
// Parameter are the placeholder defined in the function decleration
// a and b are parameters
// function add(a,b){
//   console.log(a,b);
// }

// Arguments are the actual values passed to a function when it is invoked or called
// add(3,4)
// 3 and 4 are arguments

// 41) In how many ways can you pass the arguments to a function?
// Positional Arguments, Named Arguments and Arguments Object
// Positional Arguments
// function add(a,b){
//   console.log(a+b);
// }
// add(4,5) // 9

// Named Arguments
// var person = {
//   name: "Happy",
//   role: "Developer",
// };
// function greet(person) {
//   console.log(person.name + " " + person.role);
// }
// greet(person); // Happy Developer

// Arguments Object
// sum(1, 2, 3);
// function sum() {
//   console.log(arguments[0], arguments[1], arguments[2], arguments.length);
// }
// output: 1 2 3 3

// 42) How do you use default parameters in a function?
// In js default parameters allow you to specify default value for function parameters.
// function with default parameters
// function greet(name = "John") {
//   console.log("Hi," + name + "!");
// }
// greet(); // Hi,John!
// greet("Joe"); // Hi,Joe!

// 43) What are first class function in js?
// A programming language is said to have first-class functions
// if functions in that language are treated like other variables

// functions are treated like vriables: Assignable, Passable as Arguments and Returnable as Value

// Assigning function like a variable
// const myFunction = function () {
//   console.log("hi");
// };
// myFunction()

// Passing function as an argument like variable
// function double(number) {
//   return number * 2;
// }
// function performOperation(double, value) {
//   return double(value);
// }
// console.log(performOperation(double, 5)); // 10

// A function that returns another function
// function createSimpleFunction() {
//   return function () {
//     console.log("I am from return function");
//   };
// }
// const simpleFunction = createSimpleFunction();
// simpleFunction(); // I am from return function

// 44) What is pure and impure function in js?
// A pure function is a function that always produces the output for same input.
// pure function cannot modify the state and cannot have side effect
// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 5)); // 8
// console.log(add(3, 5)); // 8

// An impure function can produce different outputs for the same input.
// impure function can modify the state and can have side effect
// let total = 0;
// function addTotal(value){
//   total += value
//   return total
// }
// console.log(addTotal(5)); // 5
// console.log(addTotal(5)); // 10
// console.log(addTotal(5)); // 15

// 45) What is function currying in js?
// currying in js transforma function with multiple arguments into a
// nested series of function each taking a single argument.

// Advantage: Reuseability,modularity, and specialization, big, complex
// functions with multiple arguments can be broken down intop samll
// reusable function with fewer arguments.

// Regular function that takes two arguments
// and return their product
// function multiply(a,b){
//   return a*b
// }

// Curried version of the multiply function
// function curriedMultiply(a) {
//   return function (b) {
//     return a * b;
//   };
// }

// create a specialized function for doubling a number
// const double = curriedMultiply(2);
// console.log(double(5)); // 10;

// create a specialized function for tripling a number
// const triple = curriedMultiply(3);
// console.log(triple(5)); // 15

// 46) What are call,apply and bind methids in js?
// call,apply and bind are three methods in js that are used to work
// with functions and control how they are invoked and what context
// they operate in.
// These methods provide a way to manipulate the this value and pass
// arguments to functions.

// Defining function that uses the "this" context and an argument
// function sayHi(message) {
//   console.log(`${message}, ${this.name}`);
// }
// const person = { name: "john" };

// Call using the "call" method to invoke the function
// with a specific context and argument
// sayHi.call(person, ["Hi"]); // Hi, john

// apply using the "apply" method to invoke the function
// with a specific context and an array of arguments
// sayHi.apply(person, ["Hi"]); // Hi, john

// bind using the "bind" method to create a new function
// with a specific context (not invoking it immediately)
// const greetPerson = sayHi.bind(person);
// greetPerson("Greetings");

// 47) What are template literals and string interpolation in string?
// var myName = "John";
// var str3 = `Hi ${myName}!`;
// console.log(str3); // Hi John!

// 48) What are some important string operation in js?
// let str1 = "Hi";
// let str2 = "whats up";
// let result = str1.concat(" ", str2);
// console.log(result);
// let subString = result.substring(6, 11);
// console.log(subString);
// console.log(result.length);
// let arr = result.split(" ");
// console.log(arr);
// console.log(result.replace("Hi", "Bye"));
// let str = "   yooo";
// let trimmedStr = str.trim();
// console.log(trimmedStr);

// 49) String in js are considered immutable because you cannot modify
// the contents of an existing string directly
// 88888(memory address) = 'Hi', 99999(memory address) = 'Hi there'
// it will create new memory address but donot modify
// var str = "Hi";
// str = str + " there";
// console.log(str);

// 50) In how many ways you can concatenate strings?
// there 4 ways +operator,Concat() method,template literals and join() method
// let s1 = "hi";
// let s2 = "there";
// +operator
// let r1 = s1 + s2;
// console.log(r1);
// Concat()
// let r2 = s1.concat(s2);
// console.log(r2);
// template literal
// let r3 = `${s1} ${s2}`;
// console.log(r3);
// let strings = [s1, s2];
// let r4 = strings.join("");
// console.log(r4);

// 51) What is error handling in js?
// Error handling is the process of managing errors.
// try {
//   const result = someUndefineVariable + 10;
//   console.log(result);
// } catch (error) {
//   console.log("An error occurred:", error.message);
// }
// An error occurred: someUndefineVariable is not defined

// 52) What is the role of finally block in js?
// finally block is used to execute some code irrespective of error.
// try {
//   const result = someUndefineVariable + 10;
//   console.log(result);
// } catch (error) {
//   console.log("An error occurred:", error.message);
// } finally {
// finally block to execute code regardless of whether
// an error occured or not
//   console.log("finally executed");
// }
// An error occurred: someUndefineVariable is not defined
// finally executed

// 53) What is the purpose of the throw statement in js?
// The throw statement stops the execution of the current function
// as passes the error to the catch block of calling function

// function userData() {
//   try {
//     validateUserAge(25);
//     validateUserAge("invalid");
//     validateUserAge(15);
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }
// userData();

// function validateUserAge(age) {
//   if (typeof age !== "number") {
//     throw new Error("Age must be number");
//   }
//   console.log("User age is valid");
// }
// User age is valid
// ERROR!
// Error: Age must be number

// 54) What is Error propagation in js?
// Error propagation refers to the process of passing or propagating
// an error from one part of the code to another by using the throw
// statement with try catch.

// function validateUserAge(age) {
//   if (typeof age !== "number") {
//     throw new Error("Age must be number");
//   }
//   console.log("User age is valid");
// }
// User age is valid
// ERROR!
// Error: Age must be number

// 55) What are objects in js?
// An object is data type that allows you to store key-value pairs.
// let obj = {name:"john"}

// 56) In how many ways we can create an object?
// Object literal
// var person = {
//   name: "John",
//   age: 25,
//   role: "developer"
// }
// console.log(person);

// Object constructor
// var person = new Object();
// person.name = "John";
// person.age = 25;
// person.role = "Developer";
// console.log(person);

// Object.create() method
// var person = {
//   name: "",
//   age: 25,
//   role: "developer",
// };
// var men = Object.create(person);
// men.name = "john";
// men.age = 25;
// men.role = "developer";

// 57) how do you check if property exists in an object?
// var person = {
//   name: "John",
//   age: 25,
// };
// using operator in
// console.log("name" in person);
// console.log("city" in person);

// hasOwnproprty method
// console.log(person.hasOwnProperty("name"));
// console.log(person.hasOwnProperty("city"));

// 58) How do you clone or copy an object?
// const orignalobject = {
//   name: "John",
//   age: 25,
//   role: "Developer",
// };
// spread syntax
// const cloneObjectSpread = { ...orignalobject }; // shallow copy

// Object.assign() (shallow copy) parameters:target,source
// const clonedObjectAssign = Object.assign({}, orignalobject);

// JSON.parse() and JSON.stringify() (deep copy)
// const clonedObjectJSON = JSON.parse(JSON.stringify(orignalobject));

// 59) What is the difference between deep copy and shallow copy in js?
// shallow copy in nested object case will modify the parent object
// property value, if cloned object property value is changed.But deep
// copy will not modify the parent object property value.

// const person = {
//   name: "Ali",
//   age: 25,
//   address: {
//     city: 'Karachi',
//     country: 'Pakistan'
//   }
// }

// shallow copy using Object.assign()
// const shallowCopy = Object.assign({},person)
// shallowCopy.address.city = 'Lahore',
// console.log(person.address.city); // Lahore
// console.log(shallowCopy.address.city); // Lahore

// Deep copy using JSON.parse() and JSON.stringify()
// const deepCopy = JSON.parse(JSON.stringify(person));
// deepCopy.address.city = "Islamabad";
// console.log(person.address.city); // karachi
// console.log(deepCopy.address.city); // Islamabad

// 60) What is Set Object in js?
// The set object is a collection of unique values, meaningthat duplicate
// values are not allowed
// Set provides methods for adding,deleteing and checking the existence of values in the set.
// Set can be used to remove duplicate values from arrays
// const mySet = new Set();
// mySet.add(10);
// mySet.add(20);
// mySet.has(10); // true
// mySet.delete(20);
// const mySets = new Set([1, 2, 3]);
// console.log(mySets.size); // 3
// mySet.clear();
// const set = new Set(["a", "b", "c"]);

// for (const value of set) {
//   console.log(value);
// }

// const numbers = new Set([1, 2, 3, 3, 4]);
// console.log(numbers); // Set(4) {1, 2, 3, 4}

// 61) What is Map Object in js?
// The map object is a collection of key-value pair where each key can be
// of any type and each value can also be of any type.
// A map maintains the order of key-value pairs as they were inserted.

// const map = new Map();
// map.set({id: 1}, "Object as key");
// map.set("name", "Alice");
// map.get("name"); // "Alice"
// map.delete("name");
// map.clear();
// for (const [key, value] of map) {
//   console.log(key, value);
// }
// map.forEach((value, key) => {
//   console.log(key, value);
// });
// console.log(map)

// synchronous executes line by line consecutively in sequential manner
// code that waits for an operation to complete

// console.log("Start");

// function syncTask() {
//   for (let i = 0; i < 3; i++) {
//     console.log("Processing:", i);
//   }
// }

// syncTask();
// console.log("End");

// Start
// Processing: 0
// Processing: 1
// Processing: 2
// End

// asynchronous allow multiple operations to be performed concurrently
// without waiting doesn't block the execution flows and allows the program to
// continue (I/O operation,network requests, fetching data)
// handled with callbacks,promises,async await

// function func1(callback) {
//   setTimeout(() => {
//     console.log("Task 1");
//     callback();
//   }, 1000);
// }
// function func2() {
//   console.log("Task 2");
//   console.log("Task 3");
//   console.log("Task 4");
// }
// func1(func2);
