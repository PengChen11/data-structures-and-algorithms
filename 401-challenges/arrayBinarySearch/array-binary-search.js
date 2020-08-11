'use strict';

function binarySearch (arr, key) {

  //the array is sorted, so if the key is bigger than the last element, then don't even search;

  if (arr[arr.length-1] < key) return -1;
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

module.exports = binarySearch;
