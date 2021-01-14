// Node class - each node has a value, a previous, and a next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// Our Doubly Linked List class

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // insert new node at end of list - tail
  push(val) {
    var newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length ++;
    return this;
  }
  // remove the last item from the list
  pop(){
      if(!this.head) return undefinded;
      var poppedNode = this.tail;
      if(this.length === 1){
          this.head = null;
          this.tail = null;
      } else {
          this.tail = poppedNode.prev;
          this.tail.next = null;
          poppedNode.prev = null;
      }
      this.length --;
      return poppedNode; 
  }
  // removing a node from the beginning of a list
  shift(){
    if(!this.head) return undefinded;
    var oldHead = this.head;
    if(this.length === 1){
        this.head = null;
        this.tail = null;
    } else {
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  // insert a node at the beginning of the list
  unshift(val){
      var newNode = new Node(val);
      if(this.length === 0){
          this.head = newNode;
          this.tail = newNode;
      } else{
          this.head.prev = newNode;
          newNode.next = this.head;
          this.head = newNode;
      }
      this.length++;
      return this;
  }
}
