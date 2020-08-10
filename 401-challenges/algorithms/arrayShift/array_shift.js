'use strict';

function insertShiftArray(arr, val) {
  let mid = Math.ceil(arr.length/2);
  let temp = arr[mid];
  arr[mid]=val;
  for (let i=mid; i<arr.length; i++){
    if (i===mid){
      if (temp===undefined){break;}
      else{[arr[mid+1], temp] = [temp, arr[mid+1]];}
    }
    else {
      if (temp===undefined){break;}
      else {[arr[i+1],temp] = [temp, arr[i+1]];}
    }
  }
  return arr;
}

module.exports = insertShiftArray;
