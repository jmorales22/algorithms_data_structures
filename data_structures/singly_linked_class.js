//piece of data - val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

//Instead of what we wrote on lines 11 to 15, we will create a singly linked list class
class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  //like an array, adds a value to the end of the linked list
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //removes a node from the end of a linked list and assigns a new tail
  pop() {
    if (!this.head) return undefined;

    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  //removing a new node from the beginning of a linked list
  shift() {
    if (!this.head) return undefined;

    var removeHead = this.head;
    this.head = removeHead.next;
    this.length--;
    if (length === 0) {
      this.tail = null;
    }
    return removeHead;
  }
  //adding a new node to the beginning of the linked list
  unshift(val) {
    var newHead = new Node(val);

    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
}

var list = new SinglyLinkedList();
list.push('HELLO');
list.push('GOODBYE');
list.push("What's up?");
