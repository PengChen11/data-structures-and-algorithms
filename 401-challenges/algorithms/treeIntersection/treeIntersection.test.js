'use strict';

const {BinarySearchTree} = require('../../data_structures/tree/tree');
const treeIntersection = require('./treeIntersection');

let tree1Values = [150,100,250,75,160,200,350,125,175,300,500];
let BT1 = new BinarySearchTree;
let tree2Values = [42,100,600,15,160,200,350,125,175,4,500];
let BT2 = new BinarySearchTree;

tree1Values.forEach((value)=>{
  BT1.add(value);
});

tree2Values.forEach(value =>{
  BT2.add(value);
});

it('tree intersection tests, should return [100,160,125,175,200,350,500]', ()=>{
  let result = treeIntersection(BT1, BT2);
  expect(result).toStrictEqual([100,160,125,200,175,350,500]);
});
