'use strict';

class Node{
  constructor(value, next=undefined){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head){
    this.head = head;
  }

  add(value){
    let newNode = new Node(value);
    return;
  }
  toString(){
    return;
  }
}

module.exports = LinkedList;
