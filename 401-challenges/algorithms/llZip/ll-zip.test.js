'use strict';

const LinkedList = require('../../data_structures/linkedList/linked-list');
const zipLists = require('./ll-zip').zipLists;
const mergeLists = require('./ll-zip').mergeSortedLL;

describe('Zip two linked list tests', () => {

  it('test with equal length link lists', () => {
    let testLL_1 = new LinkedList();
    testLL_1.insert(2);
    testLL_1.insert(3);
    testLL_1.insert(1);

    let testLL_2 = new LinkedList();
    testLL_2.insert(4);
    testLL_2.insert(9);
    testLL_2.insert(5);

    let zipedLL = zipLists(testLL_1,testLL_2);

    expect(zipedLL.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL');
  });


  it('test with un-equal length link lists (list-1 is longer)', () => {
    let testLL_1 = new LinkedList();
    testLL_1.insert(3);
    testLL_1.insert(1);

    let testLL_2 = new LinkedList();
    testLL_2.insert(4);
    testLL_2.insert(9);
    testLL_2.insert(5);

    let zipedLL = zipLists(testLL_1,testLL_2);

    expect(zipedLL.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 4 } -> NULL');
  });


  it('test with un-equal length link lists (list-2 is longer)', () => {
    let testLL_1 = new LinkedList();
    testLL_1.insert(2);
    testLL_1.insert(3);
    testLL_1.insert(1);

    let testLL_2 = new LinkedList();
    testLL_2.insert(9);
    testLL_2.insert(5);

    let zipedLL = zipLists(testLL_1,testLL_2);

    expect(zipedLL.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> NULL');
  });


  it('test with one empty link lists (list-1 is empty)', () => {
    let testLL_1 = new LinkedList();

    let testLL_2 = new LinkedList();
    testLL_2.insert(9);
    testLL_2.insert(5);

    let zipedLL = zipLists(testLL_1,testLL_2);

    expect(zipedLL.toString()).toBe('{ 5 } -> { 9 } -> NULL');
  });


  it('test with one empty link lists (list-2 is empty)', () => {
    let testLL_1 = new LinkedList();
    testLL_1.insert(2);
    testLL_1.insert(3);
    testLL_1.insert(1);

    let testLL_2 = new LinkedList();

    let zipedLL = zipLists(testLL_1,testLL_2);

    expect(zipedLL.toString()).toBe('{ 1 } -> { 3 } -> { 2 } -> NULL');
  });


  it('test with two empty link lists, should throw error', () => {
    let testLL_1 = new LinkedList();

    let testLL_2 = new LinkedList();

    expect(() => {zipLists(testLL_1,testLL_2);}).toThrow('Can NOT zip two empty linked list');
  });


});


describe('Merge two sorted linked list tests', () => {

  it('testing with two linked list, one of them is empty. Should throw error', ()=>{
    let testLL_1 = new LinkedList();
    let testLL_2 = new LinkedList();
    testLL_2.insert(5);
    expect(()=>{mergeLists(testLL_1, testLL_2);}).toThrow('Linked list to be merged can NOT be empty');
  });


  it('testing with two equal length sorted linked list', () => {
    let testLL_1 = new LinkedList();
    testLL_1.insert(5);
    testLL_1.insert(3);
    testLL_1.insert(1);

    let testLL_2 = new LinkedList();
    testLL_2.insert(6);
    testLL_2.insert(4);
    testLL_2.insert(2);

    let mergedLL = mergeLists(testLL_1, testLL_2);

    expect(mergedLL.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
  });

  it('testing the same two equal length sorted linked list in altered args position', () => {

    let testLL_1 = new LinkedList();
    testLL_1.insert(5);
    testLL_1.insert(3);
    testLL_1.insert(1);

    let testLL_2 = new LinkedList();
    testLL_2.insert(6);
    testLL_2.insert(4);
    testLL_2.insert(2);

    let mergedLL = mergeLists(testLL_2, testLL_1);

    expect(mergedLL.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
  });


  it('testing with two un-equal length sorted linked list', () => {

    let testLL_1 = new LinkedList();

    testLL_1.insert(3);
    testLL_1.insert(1);
    let testLL_2 = new LinkedList();
    testLL_2.insert(6);
    testLL_2.insert(4);
    testLL_2.insert(2);

    let mergedLL = mergeLists(testLL_1, testLL_2);

    expect(mergedLL.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 6 } -> NULL');
  });

  it('testing with two un-equal length sorted linked list', () => {

    let testLL_1 = new LinkedList();
    testLL_1.insert(7);
    testLL_1.insert(3);
    testLL_1.insert(2);
    let testLL_2 = new LinkedList();
    testLL_2.insert(6);
    testLL_2.insert(1);

    let mergedLL = mergeLists(testLL_1, testLL_2);

    expect(mergedLL.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 6 } -> { 7 } -> NULL');
  });

  it('testing with two un-equal length sorted linked list', () => {

    let testLL_1 = new LinkedList();
    testLL_1.insert(5);
    testLL_1.insert(4);
    testLL_1.insert(3);
    let testLL_2 = new LinkedList();
    testLL_2.insert(2);
    testLL_2.insert(1);

    let mergedLL = mergeLists(testLL_1, testLL_2);

    expect(mergedLL.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> NULL');
  });


});
