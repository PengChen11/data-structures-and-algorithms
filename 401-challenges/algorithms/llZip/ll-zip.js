'use strict';

const LinkedList = require('../../data_structures/linkedList/linked-list');

/** function to zip two linked lists together. Can NOT take empty  linked list */
function zipLists(list1, list2){

  let current_1 = list1.head;
  let current_2 = list2.head;
  let newList = new LinkedList();
  if (current_1) newList.head = current_1;
  else if (current_2) newList.head = current_2;
  else throw new Error(`Can NOT zip two empty linked list`);

  while (current_1 && current_2){
    let temp_1 = current_1.next;
    let temp_2 = current_2.next;
    current_1.next = current_2;
    if (temp_1) current_2.next = temp_1;

    current_1 = temp_1;
    current_2 = temp_2;

  }
  return newList;
}

/**Function to merge two sorted linked list. Can NOT take empty linked list. */
function mergeSortedLL (list1, list2){
  let newList = new LinkedList();

  let current_1 = list1.head;
  let current_2 = list2.head;
  var current_new;

  // determine the head for the new linked list. It will be used later
  if (! current_1 || !current_2) {
    throw new Error('Linked list to be merged can NOT be empty');
  } else if (current_1 && current_2 && current_1.value <= current_2.value){
    newList.append(current_1.value);
    current_1 = current_1.next;
    current_new = newList.head;
  } else if (current_1 && current_2 && current_1.value > current_2.value) {
    newList.append(current_2.value);
    current_2 = current_2.next;
    current_new = newList.head;
  }

  while (current_1 || current_2){

    if (current_1 && current_2 && current_1.value <= current_2.value){
      newList.append(current_1.value);
      current_1 = current_1.next;
      current_new = current_new.next;
    } else if (current_1 && current_2 && current_1.value > current_2.value) {
      newList.append(current_2.value);
      current_2 = current_2.next;
      current_new = current_new.next;
    } else if (!current_1) {
      // this is why we need to track the current node of new list. If one of the givin linked list is done, the rest of the other linked list will be appended to new list.
      current_new.next = current_2;
      break;
    } else if (!current_2) {
      current_new.next = current_1;
      break;
    }
  }

  return newList;
}


module.exports = {zipLists, mergeSortedLL};
