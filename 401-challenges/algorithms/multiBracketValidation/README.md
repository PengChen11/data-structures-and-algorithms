# Multi-bracket Validation

[Click here to see the code](./multi-bracket-validation.js)

[Click here to see the tester](./multi-bracket-validation.test.js)

## Feature Tasks

Create a function called ```multi_bracket_validation(input)```

Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

- Round Brackets : ()
- Square Brackets : []
- Curly Brackets : {}

## Example

|Input|Output|
|--|--|
|{}|TRUE|
|{}(){}|TRUE|
|()[[Extra Characters]]|TRUE|
|`(){}[[]]`|TRUE|
|`{}{Code}[Fellows](())`|TRUE|
|`[({}]`|FALSE|
|(](|FALSE|
|{(})|FALSE|

## Solution

- a Stack is used.
- Big O for this solution is O(n) of time and O(n) of space.

This is too easy I really don't wanna spend much time to draw a white board picture. Here's the algrosthm:

1. loop through the input string with a for loop head to tail.
2. if current index charactor is an opening bracket, then push to Stack.
3. if it's a closing bracket, then pop() from the stack:
   1. if can't pop, then return false;
   2. if whatever poped does not match type of the branckets, return false;
4. at the end, if there's anything left in the stack, return false;
5. otherwise, return true.
