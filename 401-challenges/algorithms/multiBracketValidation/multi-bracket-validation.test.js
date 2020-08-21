'use strict';

const multiBracketValidation = require('./multi-bracket-validation');

describe('multi bracket validation function test',()=>{

  it('testing with {}', ()=>{
    let tester = '{}';
    expect(multiBracketValidation(tester)).toBeTruthy();
  });


  it('testing with {}(){}', ()=>{
    let tester = '{}(){}';
    expect(multiBracketValidation(tester)).toBeTruthy();
  });


  it('testing with ()[[Extra Characters]]', ()=>{
    let tester = '()[[Extra Characters]]';
    expect(multiBracketValidation(tester)).toBeTruthy();
  });


  it('testing with (){}[[]]', ()=>{
    let tester = '(){}[[]]';
    expect(multiBracketValidation(tester)).toBeTruthy();
  });


  it('testing with {}{Code}[Fellows](())', ()=>{
    let tester = '{}{Code}[Fellows](())';
    expect(multiBracketValidation(tester)).toBeTruthy();
  });


  it('testing with [({}]', ()=>{
    let tester = '[({}]';
    expect(multiBracketValidation(tester)).toBeFalsy();
  });


  it('testing with (](', ()=>{
    let tester = '[(](';
    expect(multiBracketValidation(tester)).toBeFalsy();
  });


  it('testing with {(})', ()=>{
    let tester = '{(})';
    expect(multiBracketValidation(tester)).toBeFalsy();
  });



  it('testing with }{()})', ()=>{
    let tester = '}{()})';
    expect(multiBracketValidation(tester)).toBeFalsy();
  });


});
