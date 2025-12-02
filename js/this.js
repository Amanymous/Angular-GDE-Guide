"use strict";
// 1)this in global scope non strict mode
// console.log(this); // always have value of global object inside browser is -window
// inside global object is defferent and inside node global object value is -global is different
// and in mobile global object is different it depends on javascript runtime enviornemnt

// 2)this inside a function non strict mode and strict mode
// function x() {
// window object in non strict mode
// global or globalThis object in strict mode
//   console.log(this);
//   console.log("global=", globalThis); // when you apply strict mode it will be undefined
// }
// x();

// this in non strict mode - (this substitution)

// If  the value of this keyword is undefined or null
// then this will be replaced with globalObject only in non strict mode

// this value depends on how this is called (window)
// x();
// window.x();

// this inside a objects method
let obj = {
  a: 10,
  x: function () {
    // this is known as method
    console.log(this);
    console.log(this.a);
    // return;
  },
};
console.log(obj.x());

// call apply bind methods (sharing methods)

// this inside arrow function

// this inside DOM
