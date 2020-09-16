'use strict';

function quick_sort(arr){

  function sorting(arr, start, end){
    if (start<end){
      let pivotIndex = patition(arr,start,end);
      sorting(arr, start, pivotIndex-1);
      sorting(arr, pivotIndex+1, end);
    }
  }

  function patition(arr, start, end){

    let partitionIndex = start;
    let pivot = arr[end];

    for (let i = start; i < end; i++){
      if (arr[i] <= pivot) {
        [arr[partitionIndex], arr[i]] = [arr[i], arr[partitionIndex]];
        partitionIndex++;
      }
    }
    [arr[partitionIndex], arr[end]] = [arr[end], arr[partitionIndex]];
    return partitionIndex;
  }

  sorting(arr, 0, arr.length-1);

  return arr;
}

module.exports = quick_sort;
