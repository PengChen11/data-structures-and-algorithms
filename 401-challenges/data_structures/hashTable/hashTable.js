'use strict';
const LinkedList = require('../linkedList/linked-list');

class HashTable {
  constructor(size){
    this.size = size;
    this.table = new Array(this.size);
  }

  hash (key){
    var total = 0;
    [...key].forEach(char =>{
      total += char.charCodeAt();
    });
    total *= 1234;
    let hash_key = total%this.size;
    return hash_key;
  }

  handleValueInLinkedList (linkedList, key, value=undefined){
    if (value){
      let current = linkedList.head;
      while (current){
        if (current.value[0]===key && current.value[1]===value){
          return;
        }
        current = current.next;
      }
      linkedList.append([key, value]);
    } else {
      if (! linkedList){
        return null;
      } else{
        let current = linkedList.head;
        while ( current){
          if (current.value[0] === key){
            return current.value[1];
          }
          current = current.next;
        }
      }
    }
  }

  add (key, value){
    let hashed_key = this.hash(String(key));
    if (! this.table[hashed_key]){
      this.table[hashed_key] = new LinkedList;
    }
    this.handleValueInLinkedList(this.table[hashed_key], String(key),value );
  }

  get (key){
    let hashed_key = this.hash(String(key));
    return this.table[hashed_key] ? this.handleValueInLinkedList(this.table[hashed_key], String(key)) : null;
  }

  contains (key){
    let hashed_key = this.hash(String(key));
    return this.handleValueInLinkedList(this.table[hashed_key], String(key)) ? true : false;
  }
}

module.exports = HashTable;

