'use strict';

const HashTable = require('./hashTable');

describe('hash table tests', ()=>{


  it('can add value to table', ()=>{
    let testTable = new HashTable(10);
    testTable.add('test_key', 'test_value');

    testTable.table.forEach(key => {
      if (key){
        expect (key.head.value[0]).toBe('test_key');
        expect (key.head.value[1]).toBe('test_value');
      }
    });
  });


  it('can update value for exsiting key value pair', ()=>{
    let testTable = new HashTable(10);
    testTable.add('test_key', 'test_value');
    testTable.add('test_key', 'test_value_updated');

    testTable.table.forEach(key => {
      if (key){
        expect (key.head.value[0]).toBe('test_key');
        expect (key.head.value[1]).toBe('test_value_updated');
      }
    });
  });


  it('can get key from the table, bad key returns "null"', ()=>{
    let testTable = new HashTable(10);
    testTable.add('test_key', 'test_value');
    expect(testTable.get('test_key')).toBe('test_value');
    expect(testTable.get('bad_key')).toBeNull();
  });


  it('can return "true" if key is contained in hash table, bad key returns "false"', ()=>{
    let testTable = new HashTable(10);
    testTable.add('test_key', 'test_value');
    expect(testTable.contains('test_key')).toBeTruthy();
    expect(testTable.contains('bad_key')).toBeFalsy();
  });

});
