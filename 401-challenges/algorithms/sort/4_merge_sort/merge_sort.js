'use strict';

function merge_sort(arr){

  function devide(arr){
    let len = arr.length;
    if (len < 2) return;
    let mid = Math.floor(len/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    devide(left);
    devide(right);
    merge(left,right,arr);

  }

  devide(arr);

  function merge(left, right, arr){
    let lenL = left.length;
    let lenR = right.length;
    let l = 0;
    let r = 0;
    let a = 0;
    while(l < lenL && r < lenR){
      if (left[l] <= right[r]) {
        arr[a] = left[l];
        l++;
        a++;
      } else {
        arr[a] = right[r];
        r++;
        a++;
      }
    }

    while(l < lenL){
      arr[a] = left[l]; a++; l++;
    }

    while(r < lenR){
      arr[a] = right[r]; a++; r++;
    }
  }
  return arr;
}

module.exports = merge_sort;
