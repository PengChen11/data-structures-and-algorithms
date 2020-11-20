'use strict';
const HashTable = require('../../data_structures/hashTable/hashTable');

function treeIntersection(tree1, tree2){

  let newTable = new HashTable(100);
  let output = [];

  function traverse(node, first = false){
    if (!node) return;

    if (first === true){
      if (!newTable.contains(node.value)){
        newTable.add(node.value, true);
      }

      traverse(node.left, true);
      traverse(node.right, true);
    }
    else {
      if (newTable.contains(node.value)){
        output.push(node.value);
      }

      traverse(node.left);
      traverse(node.right);
    }
  }

  traverse(tree1.root, true);
  traverse(tree2.root);

  return output;
}

module.exports = treeIntersection;
