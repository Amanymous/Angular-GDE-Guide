class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(value) {
        let newNode = new Node(value)
        if (!this.head | this.length === 0) {
            this.head = newNode
            this.tail = newNode
            // this.prev = this.head

        }
        else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode

        }
        this.length++
        return this;
    }
    pop() {
        if (!this.head) return undefined
        let poppedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.tail = poppedNode.prev
            this.tail.next = null
        }
        this.length--
        return poppedNode
    }
    shift() {
        // remove first element from node
        if (this.length === 0) return undefined
        let oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.head = oldHead.next
            console.log("this.head = oldHead.next:", this.head);
            this.head.prev = null
            console.log("this.head.prev = null:", this.head.prev);
            oldHead.prev = null
            console.log("oldHead.prev = null:", oldHead.prev);
        }
        this.length--
        return oldHead
    }
    unshift(value) {
        // add element in Node from starting
        let newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index) {
        let current,count,counter
        if (index < 0 || index >= this.length) return undefined
        if (index <= this.length/2) {
            console.log("start");
            console.log(this.length,this.length / 2);
            counter = 0
            current = this.head
            while (counter !== index) {
                current = current.next
                counter++
            }
        }
        else{
            console.log("End");
            count = this.length-1
            current = this.tail
            while(count !== index){
                current = current.prev
                count--
            }
        }

        return current
    }
    set(index,value){
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.value = value
            return true
        }
        return false
    }
    insert(index,value){
        if(index < 0 || index > this.length) return false
        if(index === this.length) return !!this.push(value)
        if(index === 0) return !!this.unshift(value)
        let newNode = new Node(value);
        let beforeNode = this.get(index-1)
        let afterNode = beforeNode.next
        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode
        this.length++
        return true

    }

    remove(index){

        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()
        let removeNode = this.get(index)
        let beforeNode = removeNode.prev
        let afterNode = removeNode.next
        beforeNode.next = afterNode
        afterNode.prev = beforeNode
        // removeNode.prev.next = removeNode.next
        // removeNode.next.prev = removeNode.prev
        removeNode.next = null
        removeNode.prev = null
        this.length--
        return removeNode

    }
}

let list = new DoublyLinkedList()
list.push(10)
console.log(list);