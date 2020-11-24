'use strict';
const HashTable = require('../../data_structures/hashTable/hashTable');
const leftJoin = require('./leftJoin');

function tableBiulder (table, context){
  context.forEach((pair)=>{
    table.add(pair[0],pair[1]);
  });
}

const table1 = new HashTable(10);
const table1Context = [
  ['fond', 'enamored'],
  ['wrath', 'anger'],
  ['diligent', 'employed'],
  ['outift', 'garb'],
  ['guide', 'usher']
];

const table2 = new HashTable(10);
const table2Context = [
  ['fond', 'averse'],
  ['wrath', 'delight'],
  ['diligent', 'idle'],
  ['guide', 'follow'],
  ['flow', 'jam']
];

tableBiulder(table1, table1Context);
tableBiulder(table2, table2Context);

test('test for left-join feature',()=>{
  let answer = [
    ['wrath', 'anger', 'delight'],
    ['fond', 'enamored', 'averse'],
    ['diligent', 'employed', 'idle'],
    ['guide', 'usher', 'follow'],
    ['outift', 'garb', null]
  ];
  expect(leftJoin(table1,table2)).toStrictEqual(answer);
});
