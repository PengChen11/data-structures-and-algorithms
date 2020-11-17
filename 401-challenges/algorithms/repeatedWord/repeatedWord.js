'use strict';

const HashTable = require('../../data_structures/hashTable/hashTable');

function repeatedWord (input_str, freq = false){

  const pure_str = input_str.replace(/\W+/gi, '+');
  let word_list = pure_str.split('+');
  word_list.pop();

  let collection = new HashTable(word_list.length);


  let result = {
    most_frequent_word : null,
    frenquency : 0,
  };


  for (let i = 0; i<word_list.length; i++){
    if (! collection.contains(word_list[i].toLowerCase())){
      collection.add(word_list[i].toLowerCase(), 1);
    } else {
      if (freq === false ){
        return word_list[i].toLowerCase();
      } else {
        let newVal = collection.get(word_list[i].toLowerCase()) + 1;
        collection.add(word_list[i].toLowerCase(), newVal);
        if (freq) {
          if (result.frenquency < newVal){
            result.frenquency = newVal;
            result.most_frequent_word = word_list[i];
          }
        }
      }
    }
  }


  return result;

}

module.exports = repeatedWord;
