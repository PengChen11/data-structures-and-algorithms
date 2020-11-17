'use strict';

const repeatedWord = require('./repeatedWord');

describe('test for repeated word function', ()=>{

  it('this is the 1st test for basic func', ()=>{
    let test_str = 'Once upon a time, there was a brave princess who...';
    expect(repeatedWord(test_str)).toBe('a');
  });

  it('this is the 2nd test for basic func', ()=>{
    let test_str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(repeatedWord(test_str)).toBe('it');
  });

  it('this is the 3rd test for basic func', ()=>{
    let test_str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(repeatedWord(test_str)).toBe('summer');
  });

  it('this is the test to find the most frequently used word', ()=>{
    let test_str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    let testResult = repeatedWord(test_str, true);

    expect(testResult.frenquency).toBe(14);
    expect(testResult.most_frequent_word).toBe('the');
  });

});
