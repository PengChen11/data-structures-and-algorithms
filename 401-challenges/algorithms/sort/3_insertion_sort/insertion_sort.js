'use strict';

function insertion(arr){

  for (let i=1; i < arr.length; i++){

    let left = i-1;
    let right = i;

    while (left >= 0 && arr[right] < arr[left]){
      [arr[right],arr[left]] = [arr[left],arr[right]];
      left--;
      right--;
    }
  }

  return arr;
}

module.exports = insertion;
