'use strict';

const PseudoQueue = require('./queue-with-stacks');

describe('Test enqueue() and dequeue() for this Crazy Fake queue using 2 stack:', ()=>{

  it('can enqueue() and dequeue() all in one test', ()=>{
    let testQueue = new PseudoQueue;
    testQueue.enqueue(20);
    testQueue.enqueue(15);
    testQueue.enqueue(10);
    testQueue.enqueue(5);
    expect(testQueue.dequeue()).toBe(20);
    expect(testQueue.dequeue()).toBe(15);
    expect(testQueue.dequeue()).toBe(10);
    expect(testQueue.dequeue()).toBe(5);
    expect(()=>{testQueue.dequeue();}).toThrow('can\'t dequeue from an empty queue');
  });
});
