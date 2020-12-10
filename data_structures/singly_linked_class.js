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
  //retrieving a node by it's position in a singly linked list
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter != index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  //changin the value of a node based on it's position in the linked list
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  //adds a node to the linked list at a specific position
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = -temp;
    this.length++;
    return true;
  }
  //removing a node from the linked list at a specific position
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop;

    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  //reversing the linked list in place
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var previous = null;
    var next = null;

    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this;
  }
}

var list = new SinglyLinkedList();
list.push('HELLO');
list.push('GOODBYE');
list.push("What's up?");
