'use strict';
const LinkedList = require('./linked-list');
// Set spys on console objects
// let spyLog = jest.spyOn(console, 'log');
// beforeEach( () => {
//     spyLog.mockReset();
// });

describe('Test new empty linked list class', () => {
  test('The head should be undefined', () => {
    let testLL = new LinkedList;
    expect(testLL.head).toStrictEqual(undefined);
  });
});

describe('Test insertion into the head of a new empty linked list', () => {
  test('It should return a as value', () => {
    let testLL = new LinkedList;
    testLL.insert('a');
    expect(testLL.head.value).toStrictEqual('a');
  });
});

describe('Test the head property can properly point to the first node in the linked list', () => {
  test('It should return c as value ', () => {
    let testLL = new LinkedList;
    testLL.insert('a');
    testLL.insert('b');
    testLL.insert('c');
    expect(testLL.head.value).toStrictEqual('c');
  });
});

describe('Test to insert multiple nodes into the linked list', () => {
  test('It should find the 1st inputed value c ', () => {
    let testLL = new LinkedList;
    testLL.insert('c');
    testLL.insert('b');
    testLL.insert('a');
    expect(testLL.head.next.next.value).toStrictEqual('c');
  });
});

describe('Test to return true when finding a value within the linked list that exists', () => {
  test('It should return true', () => {
    let testLL = new LinkedList;
    testLL.insert('c');
    testLL.insert('b');
    testLL.insert('a');
    expect(testLL.includes('c')).toStrictEqual(true);
  });
});

describe('Test to return false when searching for a value in the linked list that does not exist', () => {
  test('It should return false', () => {
    let testLL = new LinkedList;
    testLL.insert('c');
    testLL.insert('b');
    testLL.insert('a');
    expect(testLL.includes('aa')).toStrictEqual(false);
  });
});

describe('Test to return NULL if an empty linked list .toString() is called', () => {
  test('It should return NULL ', () => {
    let testLL = new LinkedList;
    expect(testLL.toString()).toStrictEqual('NULL');
  });
});

describe('Test to return a collection of all the values that exist in the linked list', () => {
  test('It should return { a } -> { b } -> { c } -> NULL ', () => {
    let testLL = new LinkedList;
    testLL.insert('c');
    testLL.insert('b');
    testLL.insert('a');
    expect(testLL.toString()).toStrictEqual('{ a } -> { b } -> { c } -> NULL');
  });
});


// class 06 challenge

describe('Test to add node(s) to the end of the linked list', () => {
  test('Starts with a, b, c, Should add d in the end', () => {
    let testLL = new LinkedList;
    testLL.insert('c');
    testLL.insert('b');
    testLL.insert('a');
    testLL.append('d');
    expect(testLL.toString()).toStrictEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
  });

  test('Starts with a, b, c, Should add d and e in the end', () => {
    let testLL = new LinkedList;
    testLL.insert('c');
    testLL.insert('b');
    testLL.insert('a');
    testLL.append('d');
    testLL.append('e');
    expect(testLL.toString()).toStrictEqual('{ a } -> { b } -> { c } -> { d } -> { e } -> NULL');
  });
});

describe('Test to insert a node before a node located in the middle of a linked list', () => {
  test('Starts with 1, 3, 2, need to add 5 before 3, should return 1, 5, 3, 2', () => {
    let testLL = new LinkedList;
    testLL.insert(1);
    testLL.append(3);
    testLL.append(2);
    testLL.insertBefore(3,5);
    expect(testLL.toString()).toStrictEqual('{ 1 } -> { 5 } -> { 3 } -> { 2 } -> NULL');
  });

  test('Starts with 1, 3, 2, need to add 5 before 1, should return 5, 1, 3, 2', () => {
    let testLL = new LinkedList;
    testLL.insert(1);
    testLL.append(3);
    testLL.append(2);
    testLL.insertBefore(1,5);
    expect(testLL.toString()).toStrictEqual('{ 5 } -> { 1 } -> { 3 } -> { 2 } -> NULL');
  });

  test('Starts with 1, 2, 2, need to add 5 before 2, should return 1, 5, 2, 2', () => {
    let testLL = new LinkedList;
    testLL.insert(1);
    testLL.append(2);
    testLL.append(2);
    testLL.insertBefore(2,5);
    expect(testLL.toString()).toStrictEqual('{ 1 } -> { 5 } -> { 2 } -> { 2 } -> NULL');
  });

  test('When inserting a value to some value that does NOT exsit, should raise an error', () => {
    let testLL = new LinkedList;
    testLL.insert(1);
    testLL.append(3);
    testLL.append(2);
    expect(()=>{testLL.insertBefore(4,5);}).toThrow('Can not find value 4 in linked list');

  });

});


describe('Test to insert node(s) after a node located in a linked list', () => {
  test('Starts with 1, 3, 2, need to add 5 after 3, should return 1, 3, 5, 2', () => {
    let testLL = new LinkedList;
    testLL.insert(1);
    testLL.append(3);
    testLL.append(2);
    testLL.insertAfter(3,5);
    expect(testLL.toString()).toStrictEqual('{ 1 } -> { 3 } -> { 5 } -> { 2 } -> NULL');
  });

  test('Starts with 1, 3, 2, need to add 5 after 2, should return 1, 3, 2, 5', () => {
    let testLL = new LinkedList;
    testLL.insert(1);
    testLL.append(3);
    testLL.append(2);
    testLL.insertAfter(2,5);
    expect(testLL.toString()).toStrictEqual('{ 1 } -> { 3 } -> { 2 } -> { 5 } -> NULL');
  });

  test('Starts with 1, 2, 2, need to add 5 after 2, should return 1, 2, 5, 2', () => {
    let testLL = new LinkedList;
    testLL.insert(1);
    testLL.append(2);
    testLL.append(2);
    testLL.insertAfter(2,5);
    expect(testLL.toString()).toStrictEqual('{ 1 } -> { 2 } -> { 5 } -> { 2 } -> NULL');
  });

  test('When inserting a value to some value that does NOT exsit, should raise an error', () => {
    let testLL = new LinkedList;
    testLL.insert(1);
    testLL.append(3);
    testLL.append(2);
    expect(()=>{testLL.insertAfter(4,5);}).toThrow('Can not find value 4 in linked list');
  });

});
