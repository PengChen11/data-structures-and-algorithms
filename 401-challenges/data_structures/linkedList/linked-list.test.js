'use strict';
const LinkedList = require('./linked-list');


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


describe('Test to return a collection of all the values that exist in the linked list', () => {
  test('It should return { a } -> { b } -> { c } -> NULL ', () => {
    let testLL = new LinkedList;
    testLL.insert('c');
    testLL.insert('b');
    testLL.insert('a');
    expect(testLL.toString()).toStrictEqual('{ a } -> { b } -> { c } -> NULL');
  });
});

