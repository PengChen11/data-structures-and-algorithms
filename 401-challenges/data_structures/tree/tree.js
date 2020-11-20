'use strict';

const {Queue} = require('../stacksAndQueues/stacks-and-queues');

class Node{
  constructor(value, left=null, right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree{
  constructor(){
    this.root = null;
  }

  preOrder(){
    if (!this.root) throw new Error('Can NOT traverse in an empty binary tree');
    let output = [];

    function traverse(root){
      // get the value first. (always root -> left -> right)
      output.push(root.value);
      //then traverse to the left;
      if (root.left) traverse(root.left);
      if (root.right) traverse(root.right);
    }

    traverse(this.root);
    return output;
  }

  inOrder(){
    if (!this.root) throw new Error('Can NOT traverse in an empty binary tree');

    let output = [];

    function traverse(root){
      // always travese first
      if (root.left) traverse(root.left);
      // when at the left leaf, get the value;
      output.push(root.value);
      //then go to the right.
      if (root.right) traverse(root.right);
    }

    traverse(this.root);
    return output;
  }

  postOrder(){
    if (!this.root) throw new Error('Can NOT traverse in an empty binary tree');
    let output = [];

    function traverse(root){
      // always traverse first
      if (root.left) traverse(root.left);
      if (root.right) traverse(root.right);
      // then record the value;
      output.push(root.value);
    }

    traverse(this.root);
    return output;

  }

  findMaxVal(){
    if (!this.root) throw new Error('Can NOT find any value in an empty binary tree');
    let output;
    //use pre-order method to travese inside of the tree
    function traverse(root){
      //compair the root value with output value. replace output value if root value is greater than it
      if (!output) output=root.value;
      else if (output < root.value) output = root.value;

      if (root.left) traverse(root.left);
      if (root.right) traverse(root.right);
    }

    traverse(this.root);
    return output;
  }

  breadthFirst(){
    if (!this.root) throw new Error('Can NOT traverse in an empty binary tree');
    let output = [];
    let queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()){
      let current = queue.dequeue();
      output.push(current.value);
      if (current.left) queue.enqueue(current.left);
      if (current.right) queue.enqueue(current.right);
    }
    return output;
  }

}

class BinarySearchTree extends Tree{
  constructor(){
    super();
  }

  add(value){
    if (!value) throw new Error('Can NOT add null to Binary Search Tree.');

    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while(current){
      if (current.value >= value){
        if (current.left){
          current = current.left;
          continue;
        }else {
          current.left = newNode;
          return;
        }
      }

      if (current.value < value){
        if (current.right){
          current = current.right;
          continue;
        }else {
          current.right = newNode;
          return;
        }
      }
    }
  }

  contains(value){
    if(!value) throw new Error('Value can NOT be null');
    let result = false;
    function traverse(root){
      if (root.value === value) result = true;
      if (root.left) traverse(root.left);
      if (root.right) traverse(root.right);
    }
    traverse(this.root);
    return result;
  }
}

module.exports={Tree, BinarySearchTree, Node};
