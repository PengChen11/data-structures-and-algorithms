'use strict';
const Stack = require('./stacks-and-queues.js').Stack;
const Queue = require('./stacks-and-queues.js').Queue;


function stackBuilder(){
  let testStack = new Stack();
  testStack.push('a');
  testStack.push('b');
  testStack.push('c');
  return testStack;
}

describe('tests for Stack',()=>{

  it('test to instantiate an empty stack ', ()=>{
    let testStack = new Stack();
    expect(testStack.top).toBe(null);
  });


  it('test to push single value onto a stack. ', ()=>{
    let testStack = new Stack();
    testStack.push('a');
    expect(testStack.top.value).toBe('a');
  });


  it('test to push multiple values onto a stack. ', ()=>{
    let testStack = stackBuilder();
    expect(testStack.top.value).toBe('c');
    expect(testStack.top.next.value).toBe('b');
    expect(testStack.top.next.next.value).toBe('a');
  });


  it('test to pop off single value from a stack. ', ()=>{
    let testStack = stackBuilder();
    expect(testStack.pop()).toBe('c');
  });


  it('test to empty a stack after multiple pops ', ()=>{
    let testStack = stackBuilder();
    expect(testStack.pop()).toBe('c');
    expect(testStack.pop()).toBe('b');
    expect(testStack.pop()).toBe('a');
    expect(testStack.top).toBe(null);
  });


  it('test to trhow error when poping from an empty stack. ', ()=>{
    let testStack = new Stack();
    expect(()=>{testStack.pop();}).toThrow('Can NOT pop from empty stack.');
  });


  it('test to peek the top item on the stack', ()=>{
    let testStack = stackBuilder();
    expect(testStack.peek()).toBe('c');
  });


  it('test to trhow error when peeking from an empty stack. ', ()=>{
    let testStack = new Stack();
    expect(()=>{testStack.peek();}).toThrow('Can NOT peek from empty stack.');
  });


  it('test isEmpty with an empty stack. ', ()=>{
    let testStack = new Stack();
    expect(testStack.isEmpty()).toBeTruthy();
  });


  it('test isEmpty with an non-empty stack. ', ()=>{
    let testStack = stackBuilder();
    expect(testStack.isEmpty()).toBeFalsy();
  });

});


function queueBuilder(){
  let testQueue = new Queue();
  testQueue.enqueue('a');
  testQueue.enqueue('b');
  testQueue.enqueue('c');
  return testQueue;
}

describe('tests for Queue',()=>{

  it('test to instantiate an empty queue', ()=>{
    let testQueue = new Queue();
    expect(testQueue.front).toBe(null);
  });

  it('test to enqueue a single value into a queue', ()=>{
    let testQueue = new Queue();
    testQueue.enqueue('a');
    expect(testQueue.front.value).toBe('a');
  });


  it('test to enqueue multiple values into a queue', ()=>{
    let testQueue = queueBuilder();
    expect(testQueue.front.value).toBe('a');
    expect(testQueue.front.next.value).toBe('b');
    expect(testQueue.rear.value).toBe('c');
  });


  it('test to dequeue out of a queue the expected value', ()=>{
    let testQueue = queueBuilder();
    expect(testQueue.dequeue()).toBe('a');
    expect(testQueue.front.value).toBe('b');
  });


  it('test to dequeue all value and empty the queue', ()=>{
    let testQueue = queueBuilder();
    testQueue.dequeue();
    testQueue.dequeue();
    testQueue.dequeue();
    expect(testQueue.front).toBe(null);
  });


  it('test to throw error when dequeue out of an empty queue', ()=>{
    let testQueue = new Queue();
    expect(() => {testQueue.dequeue();}).toThrow('Can NOT dequeue from empty Queue.');
  });


  it('test to peek the front item on the queue', ()=>{
    let testQueue = queueBuilder();
    expect(testQueue.peek()).toBe('a');
  });


  it('test to throw error when peeking out of an empty queue', ()=>{
    let testQueue = new Queue();
    expect(() => {testQueue.peek();}).toThrow('Can NOT peek from empty Queue.');
  });


  it('test isEmpty with an empty queue. ', ()=>{
    let testQueue = new Queue();
    expect(testQueue.isEmpty()).toBeTruthy();
  });


  it('test isEmpty with an non-empty queue. ', ()=>{
    let testQueue = queueBuilder();
    expect(testQueue.isEmpty()).toBeFalsy();
  });

});
