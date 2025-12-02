// function along with lexical scope is called closure

function x() {
  var a = 9;
  function y() {
    console.log(a);
  }
  // y();
  return y;
}

x();
