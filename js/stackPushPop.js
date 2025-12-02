/**
 * @stack is a linear data sturcture and operation only on top
 * in stack we remove element from top or add mean FILO
 * max value we have to decide because we have fix the value
 * operation are push , pop,isShow,peek  and isempty and peek also 
 */

let data = [];
let currentSize = data.length;
let max = 5;
function push(newVal) {
    if (currentSize >= max) {
        alert("Stack is full you can not add" + newVal);
    }
    data[currentSize] = newVal;
    currentSize += 1;
}

function pop() {
    if (currentSize > 0) {
        currentSize -= 1;
        data.length = currentSize;
    } else {
        alert("stack is already empty");
    }
}

push(20);
push(30);
push(10);
push(2);
pop();
pop();
pop();
push(25);
push(23);
console.log(data);
push(67);