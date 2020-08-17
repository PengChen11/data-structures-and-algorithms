'use strict';

class Node{
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head=null){
    this.head = head;
    this.tail = this.head;
  }

  insert(value){
    let newNode = new Node(value);
    if (this.head === null) this.head =this.tail = newNode;
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
    if (current === null) return 'NULL';
    while (current){
      output += `{ ${current.value} } -> `;
      current = current.next;
    }
    output += `NULL`;
    return output;
  }

  append(value){
    let current = this.head;
    let newNode = new Node(value);
    if (!current) this.head =this.tail = newNode;
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // while (current){
    //   if (current.next === null) {
    //     current.next = newNode;
    //     break;
    //   }
    //   current = current.next;
    // }
  }

  insertBefore(value, newVal){
    let current = this.head;
    let newNode = new Node(newVal);
    if (current.value === value){
      let temp = current;
      this.head = newNode;
      newNode.next = temp;
      return;
    }
    while (current.next) {
      if (current.next.value === value){
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        return;
      }
      current = current.next;
    }
    throw new Error(`Can not find value ${value} in linked list`);
  }

  insertAfter(value, newVal){
    let current = this.head;
    let newNode = new Node(newVal);
    while (current) {
      if (current.value === value){
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        return;
      }
      current = current.next;
    }
    throw new Error(`Can not find value ${value} in linked list`);
  }

  delete(value){
    let current = this.head;
    let next = current.next;
    if (current.value===value) {
      this.head = null;
      return;
    }
    while (next){
      if (next.value===value){
        current.next = next.next;
        return;
      }
      current = current.next;
      next = next.next;
    }
    throw new Error(`Can not find value ${value} in linked list`);
  }

  reverseSearch(key){
    if (key<0 || !Number.isInteger(key)) throw new Error(`Key has to be an int, and can NOT be a negative int`);
    let current = this.head;
    let keyFinder = this.head;
    for (let i = 0; i<key; i++){
      if (keyFinder===null){
        throw new Error(`Linked list does NOT have the ${key}th value from the end`);
      }
      keyFinder = keyFinder.next;
    }
    while (keyFinder){
      if (!keyFinder.next) break;
      keyFinder = keyFinder.next;
      current = current.next;
    }
    return current.value;
  }

  findMid(){
    if (this.head === null) return null;
    let current = this.head;
    let midVal = this.head;
    while (current){
      if (current.next === null) return midVal.value;
      else if (current.next.next === null) return midVal.next.value;
      else {
        current = current.next.next;
        midVal = midVal.next;
      }
    }
  }
}

module.exports = LinkedList;

