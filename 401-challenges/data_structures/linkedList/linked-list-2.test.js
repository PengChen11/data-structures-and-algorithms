'use strict';
const LinkedList = require('./linked-list');


describe('Test new empty linked list class', () => {
  test('The head should be undefined', () => {
    let testLL = new LinkedList;
    expect(testLL.head).toStrictEqual(undefined);
  });
});
