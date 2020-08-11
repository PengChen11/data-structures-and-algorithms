'use strict';

class Node{
  constructor(value, next=undefined){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head=undefined){
    this.head = head;
  }

  insert(value){
    let newNode = new Node(value);
    if (this.head === undefined) this.head = newNode;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  includes(value){
    let current = this.head;
    while (current){
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  toString(){
    let current = this.head;
    let output='';
    if (current === undefined) return 'NULL';
    while (current){
      output += `{ ${current.value} } -> `;
      current = current.next;
    }
    output += `NULL`;
    return output;
  }
}

module.exports = LinkedList;

