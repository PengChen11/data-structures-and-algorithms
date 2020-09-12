'use strict';

function bubble(arr){

  do {
    var swapped = false;
    var arrEnd = 1;
    for (let i = 0; i < arr.length-arrEnd; i++){
      if (arr[i] > arr[i+1]){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        swapped = true;
      }
    }
    arrEnd++;
  }
  while (swapped);

  return arr;
}

module.exports = bubble;
