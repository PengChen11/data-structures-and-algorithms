'use strict';

const BTree = require('./tree').Tree;
const BSTree = require('./tree').BinarySearchTree;
const Node = require('./tree').Node;


function bTreeBuilder(){
  let newTree = new BTree();
  newTree.root = new Node(1);
  newTree.root.left = new Node(2);
  newTree.root.right = new Node(3);
  newTree.root.left.left = new Node(4);
  newTree.root.left.right = new Node(5);
  newTree.root.right.left = new Node(6);
  newTree.root.right.right = new Node(7);
  return newTree;
}


describe('Binary Tree traverse tests', ()=>{

  it('Pre-Order traverse tests', ()=>{
    let testTree = bTreeBuilder();
    let preOrder = testTree.preOrder();
    expect(preOrder).toStrictEqual([1,2,4,5,3,6,7]);
  });

  it('In-Order traverse tests', ()=>{
    let testTree = bTreeBuilder();
    let inOrder = testTree.inOrder();
    expect(inOrder).toStrictEqual([4,2,5,1,6,3,7]);
  });


  it('Post-Order traverse tests', ()=>{
    let testTree = bTreeBuilder();
    let postOrder = testTree.postOrder();
    expect(postOrder).toStrictEqual([4,5,2,6,7,3,1]);
  });

  it('When traverse in an empty tree, error should be thrown', ()=>{
    let testTree = new BTree();
    expect(()=>{testTree.preOrder();}).toThrow('Can NOT traverse in an empty binary tree');
    expect(()=>{testTree.inOrder();}).toThrow('Can NOT traverse in an empty binary tree');
    expect(()=>{testTree.postOrder();}).toThrow('Can NOT traverse in an empty binary tree');
  });
});


function bsTreeBuilder(){
  let newTree = new BSTree();
  newTree.root = new Node(10);
  newTree.root.left = new Node(5);
  newTree.root.right = new Node(15);
  newTree.root.left.left = new Node(2);
  newTree.root.left.right = new Node(8);
  newTree.root.right.left = new Node(12);
  newTree.root.right.right = new Node(18);
  return newTree;
}

describe('Binary Search Tree tests', ()=>{

  it('testing to add null to an BST, should throw error', ()=>{
    let testTree = bsTreeBuilder();
    expect(()=>{testTree.add();}).toThrow('Can NOT add null to Binary Search Tree.');
  });

  it('testing to add to an empty BST',()=>{
    let testTree = new BSTree();
    testTree.add(10);
    expect(testTree.root.value).toBe(10);
  });

  it('test to add to the left side of the root', ()=>{
    let testTree = bsTreeBuilder();
    testTree.add(6);
    expect(testTree.root.left.right.left.value).toBe(6);
  });

  it('test to add to the right side of the root', ()=>{
    let testTree = bsTreeBuilder();
    testTree.add(13);
    expect(testTree.root.right.left.right.value).toBe(13);
  });
});


describe('binary search tree contains() tests', ()=>{

  it('testing BST contains a value, should return true', ()=>{
    let testTree = bsTreeBuilder();
    expect(testTree.contains(8)).toBeTruthy();
  });


  it('testing BST does NOT contains a value, should return false', ()=>{
    let testTree = bsTreeBuilder();
    expect(testTree.contains(28)).toBeFalsy();
  });


  it('testing BST contains with null value, should throw error', ()=>{
    let testTree = bsTreeBuilder();
    expect(()=>{testTree.contains();}).toThrow('Value can NOT be null');
  });
});


describe('binary tree find maximum value function test', ()=>{

  it('find max value function will throw error if given empty tree', ()=>{
    let testTree = new BTree();
    expect(()=>{testTree.findMaxVal();}).toThrow('Can NOT find any value in an empty binary tree');
  });

  it('can find the max value in the binary tree', ()=>{
    let testTree = bTreeBuilder();
    expect(testTree.findMaxVal()).toBe(7);
  });
});


describe('Binary tree breadth first traverse function test', ()=>{

  it('function will throw error if an empty tree being given', ()=>{
    let testTree = new BTree();
    expect(()=>{testTree.breadthFirst();}).toThrow('');
  });

  it('breadth traverse will return correct values', ()=>{
    let testTree = bTreeBuilder();
    expect(testTree.breadthFirst()).toStrictEqual([1,2,3,4,5,6,7]);
  });

});
