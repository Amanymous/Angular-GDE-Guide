//  function recursion(x,i){
//    if(i>10) return
//    console.log(x+"*"+i+"="+x*i);
//    return recursion(x,i+1)

// }

// console.log(recursion(5,1));
// console.log("res:",5*recursion(5-1)*recursion(4-1),recursion(5-1));
function app(x, i) {
  if (i > 10) return;
  // console.log(x + "*" + i + "=" + x * i);
  return app(x, i);
}
console.log(app(2, 10));
