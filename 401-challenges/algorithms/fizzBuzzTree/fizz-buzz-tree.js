'use strict';
const {Tree, Node} = require('../../data_structures/tree/tree');

module.exports = tree => {
  // throw error if giving a bad tree
  if (!tree || !tree.root) throw new Error(`Can't process an empty tree`);

  // build up new tree
  let outputTree = new Tree();

  // use a method to calculate fizz or buzz and use it to update the new tree
  outputTree.root = new Node(fizzBuzzCalc(tree.root.value));

  //define current node of new tree
  let newTreeCurrent = outputTree.root;

  //recursive func to traverse inside of tree
  function traverse(root){
    // a way to track previous node of the new tree, cause the current node will be updated later
    let newTreePrev = newTreeCurrent;
    if (root.left){
      newTreeCurrent.left = new Node(fizzBuzzCalc(root.left.value));
      //update the new tree current node, ready to move on.
      newTreeCurrent = newTreeCurrent.left;
      traverse(root.left);
    }

    //after we've finished the left part, we will go back on level to check the right
    newTreeCurrent = newTreePrev;

    if (root.right){
      newTreeCurrent.right = new Node(fizzBuzzCalc( root.right.value));
      newTreeCurrent = newTreeCurrent.right;
      traverse(root.right);
    }
  }

  function fizzBuzzCalc(value){
    if (value%15 === 0) return 'FizzBuzz';
    else if (value%3 === 0) return 'Fizz';
    else if (value%5 === 0) return 'Buzz';
    else return value.toString();
  }

  traverse(tree.root);

  return outputTree;

};
