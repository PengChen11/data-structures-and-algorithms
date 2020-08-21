'use strict';

class PseudoQueue{
  constructor(){
    let stack_1 = new Stack();
    let stack_2 = new Stack();
    this.stack_1 = stack_1;
    this.stack_2 = stack_2;
  }

  enqueue(value){
    if (this.stack_2.peek()){
      let current_2 = this.stack_2.top;
      while (current_2){
        this.stack_1.push(this.stack_2.pop());
        current_2 = current_2.next;
      }
      this.stack_1.push(value);
      let current_1 = this.stack_1.top;
      while (current_1){
        this.stack_2.push(this.stack_1.pop());
        current_1 = current_1.next;
      }
    }
    else {
      this.stack_2.push(value);
    }
  }

  dequeue(){
    if (!this.stack_2.peek()) throw new Error('can\'t dequeue from an empty queue');
    else {
      return this.stack_2.pop();
    }
  }

}

class Node{
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(value){
    if (!value) throw new Error(`value can't be empty`);
    this.top = new Node(value, this.top);
  }

  pop(){
    if (!this.top) throw new Error(`can not pop from empty stack`);
    let output = this.top.value;
    this.top = this.top.next;
    return output;
  }

  //why do I need a peek?
  peek(){
    if (!this.top) return null;
    else return this.top.value;
  }
}

module.exports = PseudoQueue;
