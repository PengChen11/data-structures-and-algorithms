'use strict';

const AnimalShelter = require('./fifo-animal-shelter');

describe('test for this animal shelter\'s enqueue function', () => {

  test('testing for init an empty shelter', ()=>{
    let testShelter = new AnimalShelter();
    expect(testShelter.front).toBe(null);
  });

  test('the shelter can enqueue animals',()=>{
    let testShelter = new AnimalShelter();
    testShelter.enqueue('Cat', 'Shasha');
    expect(testShelter.front.type).toBe('cat');
    expect(testShelter.front.name).toBe('Shasha');
  });

  test('the shelter can enqueue animals without a name',()=>{
    let testShelter = new AnimalShelter();
    testShelter.enqueue('Cat');
    expect(testShelter.front.type).toBe('cat');
    expect(testShelter.front.name).toBe(null);
  });

  test('the shelter can enqueue multiple animals',()=>{
    let testShelter = new AnimalShelter();
    testShelter.enqueue('cat', 'Shasha');
    testShelter.enqueue('Dog', 'Dandan');
    expect(testShelter.front.type).toBe('cat');
    expect(testShelter.front.name).toBe('Shasha');
    expect(testShelter.front.next.type).toBe('dog');
    expect(testShelter.front.next.name).toBe('Dandan');
  });

  test('if animal type is not defined, or not cats nor dogs, error should be thrown',()=>{
    let testShelter = new AnimalShelter();
    let wrongType = ()=>{
      testShelter.enqueue('spider', 'SpidrMan');
    };
    expect(wrongType).toThrow('this shelter only accept cats and dogs');
    expect(()=>{testShelter.enqueue();}).toThrow('this shelter only accept cats and dogs');
  });
});


describe('test for this shelter\'s dequeue() function ',()=>{

  test('if shelter is empty, should throw error',()=>{
    let testShelter = new AnimalShelter();
    expect(()=>{testShelter.dequeue();}).toThrow('The shelter is empty now');
  });

  test('if shelter doesn\'t have the type of animal prefered, should return null', ()=>{
    let testShelter = new AnimalShelter();
    testShelter.enqueue('cat', 'miuo');
    testShelter.enqueue('cat', 'Wawa');
    expect(testShelter.dequeue('dog')).toBe(null);
  });

  test('it can return the 1st matching type of animal in queue',()=>{
    let testShelter = new AnimalShelter();
    testShelter.enqueue('cat', 'miuo');
    testShelter.enqueue('cat', 'Wawa');
    expect(testShelter.dequeue('cat').name).toBe('miuo');
  });

  test('it can return the 1st matching type of animal in queue',()=>{
    let testShelter = new AnimalShelter();
    testShelter.enqueue('cat', 'miuo');
    testShelter.enqueue('cat', 'Wawa');
    testShelter.enqueue('dog', 'Dandan');
    expect(testShelter.dequeue('dog').name).toBe('Dandan');
  });

});


