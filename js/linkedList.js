/**
 * @Basic linkedList is based on head,tail,node,val and next
 */
// class List{
//     constructor(data,data1){
//         this.head1 = {
//             value:data1,
//             next:1000
//         }
//         this.head = {
//             value: data,
//             next: null
//         }
//         this.tail = this.head,this.head1
//         this.size = 1
//     }
//     appenedNode(newData,newData1){
//         let newNode = {
//             value: newData,
//             next: null
//         }
//         let newNode1 = {
//             value: newData1,
//             next: null
//         }
//         this.tail.next = newNode,newNode1
//         this.tail = newNode,newNode1
//         this.size += 1

//     }
// }
// let list = new List(200,100)
// // let res = list.appendNode(400)
// console.log(list);

/**
 * @Traversing Linked List
 * Understand Logic
 * Write function for trvaersing
 * Print Nodes
 * next: mean value of next node
 * value: current value
 */

// class List {
//     constructor(data) {
//         this.head = {
//             value: data,
//             next: null,
//         };
//         this.tail = this.head;
//         this.size = 1;
//     }

//     appendNode(nodeData) {
//         let newNode = {
//             value: nodeData,
//             next: null,
//         };
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.size += 1;
//     }

//     traversing() {
//         let counter = 0;
//         let currentNode = this.head;
//         while (counter < this.size) {
//             // console.warn(currentNode);
//             currentNode = currentNode;
//             counter++;
//         }
//     }
// }

// let list = new List(200);
// list.appendNode(300);
// list.appendNode(400);
// list.appendNode(500);
// list.appendNode(600);
// list.appendNode(700);
// list.traversing();
// console.log("Traversing is  likedList:", list)

/**
 *  @Remove Node Linked List
 **/
class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  appenedNode(newData) {
    let newNode = {
      value: newData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 2;
  }

  trversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      currentNode = currentNode;
      counter++;
    }
  }

  insertNode(index, val) {
    let counter = 1;
    let currentNode = this.head;
    while (counter < index) {
      counter++;
      currentNode = currentNode.next;
    }
    let nextNode = currentNode.next;
    currentNode.next = {
      val: val,
      next: nextNode,
    };
  }

  deleteNode(index) {
    let counter = 1;
    let lead = this.head;
    if (index === 1) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      let nextNode = lead.next.next;
      lead.next = nextNode;
      console.log(lead);
    }
  }
  searchNode(data) {
    let result = undefined;
    let lead = this.head;
    let loop = true;
    while (loop) {
      lead = lead.next;
      loop = !!lead;
      if (loop && lead.value === data) {
        loop = false;
        result = lead;
      }
    }
    console.log(result);
  }
}
let list = new List(100);
list.appenedNode(111);
list.appenedNode(112);
list.appenedNode(113);
// list.searchNode(900)
list.insertNode(3, 1010);
// list.deleteNode(1)
// list.trversing()
console.log(list);
