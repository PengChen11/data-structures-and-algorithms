'use strict';

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    let newNode = new Node(value, this.top);
    this.top = newNode;
  }

  pop(){
    if (this.top === null) throw new Error('Can NOT pop from empty stack.');
    let output = this.top;
    this.top = this.top.next;
    return output.value;
  }

  peek(){
    if (this.top === null) throw new Error('Can NOT peek from empty stack.');
    return this.top.value;
  }

  isEmpty(){
    return this.top === null;
  }
}


class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    let newNode = new Node(value);
    if (this.front === null) this.front = this.rear = newNode;
    else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue(){
    if (this.front === null) throw new Error('Can NOT dequeue from empty Queue.');
    else {
      var output = this.front.value;
      this.front = this.front.next;
    }
    return output;
  }

  peek(){
    if (this.front === null) throw new Error('Can NOT peek from empty Queue.');
    else return this.front.value;
  }

  isEmpty(){
    return this.front === null;
  }

}


module.exports = {Stack,Queue};
