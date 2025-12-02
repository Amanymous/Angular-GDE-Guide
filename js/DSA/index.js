class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let n = new Node(1);
n.next = new Node(10);
console.log(n.next);

class single {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      console.log("this.tail.next=", this.tail.next);
      this.tail = newNode;
      // console.log("this.tail=", this.tail);
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let prev = this.head;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
  }
}
let s = new single(10);
s.push(12);
s.push(13);
console.log(s);
