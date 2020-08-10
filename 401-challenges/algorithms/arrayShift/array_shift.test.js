'use strict';
const insertShiftArray = require('./array_shift.js');

describe('Testing [2,4,6,8] with 5', () => {
  test('It should return [2,4,5,6,8]', () => {
    expect(insertShiftArray([2,4,6,8], 5)).toStrictEqual([2,4,5,6,8]);
  });
});

describe('Testing [4,8,15,23,42] with 16', () => {
  test('It should return [4,8,15,16,23,42]', () => {
    expect(insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
  });
});

describe('Testing [1,2,3,5,6,7] with 4)', () => {
  test('It should return [1,2,3,4,5,6,7]', () => {
    expect(insertShiftArray([1,2,3,5,6,7], 4)).toStrictEqual([1,2,3,4,5,6,7]);
  });
});


describe('Testing [1,2,4] with 3)', () => {
  test('It should return [1,2,3,4]', () => {
    expect(insertShiftArray([1,2,4], 3)).toStrictEqual([1,2,3,4]);
  });
});
