'use strict';

const binarySearch = require('./array-binary-search');

describe('Testing [4,8,15,16,23,42], 15', () => {
  test('It should return index number 2', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2);
  });
});


describe('Testing [11,22,33,44,55,66,77] with 90', () => {
  test('It should return -1', () => {
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
  });
});


describe('Testing 100 element array (0-99) with 56', () => {
  test('It should return index number 56', () => {
    let arr = [];
    for (let i=0; i<10; i++) arr.push(i);
    let arr1 =arr;

    expect(binarySearch(arr1, 6)).toStrictEqual(6);
  });
});


describe('Testing 10000 element array (0-9999) with 5656', () => {
  test('It should return index number 5656', () => {
    let arr = [];
    for (let i=0; i<10000; i++) arr.push(i);

    expect(binarySearch(arr, 5656)).toStrictEqual(5656);
  });
});


describe('Testing 1000000 element array (0-999999) with 565656', () => {
  test('It should return index number 565656', () => {
    let arr = [];
    for (let i=0; i<1000000; i++) arr.push(i);

    expect(binarySearch(arr, 565656)).toStrictEqual(565656);
  });
});

