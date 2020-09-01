'use strict';

const {Tree, Node} = require('../../data_structures/tree/tree');
const fizzBuzzTree = require('./fizz-buzz-tree');

function treeBuilder(){
  let testTree = new Tree();
  testTree.root = new Node(1);
  testTree.root.left = new Node(3);
  testTree.root.right = new Node(5);
  testTree.root.left.left = new Node(7);
  testTree.root.left.right = new Node(9);
  testTree.root.right.left = new Node (15);
  testTree.root.right.left.left = new Node(20);
  testTree.root.right.left.right = new Node(30);
  return testTree;
}

describe('testing Fizz Buzz function', ()=>{


  it('testing with empty tree, should throw error', ()=>{
    let testTree = new Tree();
    expect(()=>{fizzBuzzTree(testTree);}).toThrow(`Can't process an empty tree`);
  });


  it('testing new tree with breadth first method, should currently covert it', ()=>{
    let testTree = treeBuilder();
    let modifiedTree = fizzBuzzTree(testTree);
    expect(modifiedTree.breadthFirst()).toStrictEqual(['1', 'Fizz', 'Buzz', '7', 'Fizz', 'FizzBuzz', 'Buzz', 'FizzBuzz' ]);
  });

  it('testing new tree with in order traverse method, should currently covert it', ()=>{
    let testTree = treeBuilder();
    let modifiedTree = fizzBuzzTree(testTree);
    expect(modifiedTree.inOrder()).toStrictEqual(['7', 'Fizz', 'Fizz', '1', 'Buzz', 'FizzBuzz', 'FizzBuzz', 'Buzz' ]);
  });
});
