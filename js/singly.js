class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Single {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let tailVal = current;
    while (current.next) {
      tailVal = current;
      current = current.next;
    }
    this.tail = tailVal;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head, (this.tail = null);
    }
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  shift() {
    if (!this.head) return null;
    let currentNode = this.head;
    this.head = currentNode.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentNode;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index,val){
    
  }
}
let s = new Single();
s.push(1);
s.push(2);
s.push(3);
// s.set(0,5)
console.log(s);

// console.log(getVal);
