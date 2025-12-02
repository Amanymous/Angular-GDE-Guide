// console.log("singly Link List");
class Node {
    constructor(value) {
        this.value = value,
            this.next = null
    }
}
// let list = new Node("my")
// list.next = new Node("name")
// list.next.next = new Node("is")
// list.next.next.next = new Node("aman")
// console.log(list);

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    // pop() {
    //     if (!this.head) return undefined;
        
    //     let current = this.head;
    //     let newTail = current;
        
    //     for (let i = 1; i < this.length - 1; i++) {
    //       newTail = current;
    //       current = current.next;
    //     }
        
    //     this.tail = newTail;
    //     this.tail.next = null;
    //     this.length--;
        
    //     if (this.length === 0) {
    //       this.head = null;
    //       this.tail = null;
    //     }
        
    //     return current;
    //   }
      
    shift(){
        // remove first element from node
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        // add element in Node from starting
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
}

let single = new singlyLinkedList()
single.push("aman")
single.push("mughal")
single.push("!")
// single.shift()
single.unshift(100)
single.traversing()

// single.pop()
console.log(single);