'use strict';

const bubble = require('./1_bubble_sort/bubble_sort');
const selection = require('./2_selection_sort/selection_sort');
const insertion = require('./3_insertion_sort/insertion_sort');
const merge = require('./4_merge_sort/merge_sort');

function testForAll(sortMethod, methodName){
  describe(`Sorting array with ${methodName} sort method`, ()=>{

    it('test1', ()=>{
      let testArr = [29, 10, 14, 37, 14];
      expect(sortMethod(testArr)).toStrictEqual([10,14,14,29,37]);
    });

    it('test2', ()=>{
      let testArr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
      expect(sortMethod(testArr)).toStrictEqual([2,3,4,5,15,19,26,27,36,38,44,46,47,48,50]);
    });

    it('test3', ()=>{
      let testArr = [20,18,12,8,5,-2];
      expect(sortMethod(testArr)).toStrictEqual([-2,5,8,12,18,20]);
    });

    it('test4', ()=>{
      let testArr = [5,12,7,5,5,7];
      expect(sortMethod(testArr)).toStrictEqual([5,5,5,7,7,12]);
    });

    it('test5', ()=>{
      let testArr = [2,3,5,7,13,11];
      expect(sortMethod(testArr)).toStrictEqual([2,3,5,7,11,13]);
    });

  });
}

testForAll(bubble, 'Bubble');

testForAll(selection, 'Selection');

testForAll(insertion, 'Insertion');

testForAll(merge, 'Merge');


