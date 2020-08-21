'use strict';
const Stack = require('../../data_structures/stacksAndQueues/stacks-and-queues').Stack;


function multiBracketValidation(input){

  let openBrackets = ['(', '[', '{'];

  let closeMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  let checker = new Stack();

  for (let i = 0; i < input.length; i++) {

    if (Object.keys(closeMap).includes(input[i])) {
      if (!checker.top) return false;
      else if (checker.top) {
        let closing = checker.pop();
        if (closing!==closeMap[input[i]]) return false;
      }
    }

    if (openBrackets.includes(input[i])) checker.push(input[i]);
  }

  if (checker.top) return false;
  else return true;

}

module.exports = multiBracketValidation;

