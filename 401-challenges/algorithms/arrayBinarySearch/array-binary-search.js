'use strict';

function binarySearch (arr, key) {

  //the array is sorted, so if the key is bigger than the last element or smaller than the 1st one, then don't even do the search;
  if (arr[arr.length-1] < key || key < arr[0]) return -1;
  else if (arr.length===0) return -1;
  else {
    let start = 0;
    let end = arr.length-1;
    while (start<=end){
      let mid = Math.floor((start+end)/2);
      if (arr[mid] === key) return mid;
      else {
        if (key < arr[mid]) end = mid-1;
        else start = mid+1;
      }
    }
    return -1;
  }
}

// module.exports = binarySearch;

// fancy idea to use recursion, but it is slower.

function binarySearchRecursion(arr, key){
  //edge case validator
  if (arr[arr.length-1] < key || key < arr[0]) return -1;
  else if (arr.length===0) return -1;

  let index;
  let start = 0;
  let end = arr.length-1;
  recursionFn(start, end);

  function recursionFn(start, end){

    if (start > end) return -1;
    let mid = Math.floor((start+end)/2);
    if (arr[mid] === key) {
      index = mid;
      return;
    }
    else if (key < arr[mid]) recursionFn(start, mid-1);
    else recursionFn(mid+1, end);

  }
  if (index) return index;
  else return -1;
}

module.exports = binarySearchRecursion;

console.log(binarySearchRecursion([11,22,33,44,55,66,77],77));
