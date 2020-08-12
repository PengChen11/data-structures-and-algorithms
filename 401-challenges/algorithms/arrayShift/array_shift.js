'use strict';

function insertShiftArray(arr, val) {
  let mid = Math.ceil(arr.length/2);
  let temp = arr[mid];
  arr[mid]=val;
  let len = arr.length;

  for (let i=mid+1; i<=len; i++) {

    [arr[i],temp] = [temp, arr[i]];

  }

  return arr;
}

module.exports = insertShiftArray;
