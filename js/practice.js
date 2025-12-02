// const obj = {
//     aman: function(){return double(num1) + num2;}
// }
// console.log(obj.aman())

function add(a) {
  return {
    'aman': function (b) {
        console.log("call",a,b);
        return a + b;
    },
  };
}

console.log(add(1).aman(1));
const result = add(5);
console.log(result.aman(3));
