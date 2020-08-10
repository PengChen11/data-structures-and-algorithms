# Code Challenge

Insert and shift an array in middle at index

[Click here to see the code](array_shift.js)

[Click here to see the tester](array_shift.test.js)

## Feature Tasks

Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Example

|Input|Output|
|---|---|
|`[2,4,6,8], 5`|`[2,4,5,6,8]`|
|`[4,8,15,23,42], 16`|`[4,8,15,16,23,42]`|

## Approach & Efficiency

1. Big O is length of input array's Floor division to 2
2. use the for loop to loop array.length/2 times, starts from the mid index to the end.
3. at the mid index, update the element with new value
4. each time after that, push origional one index after.
5. Return input array.

## Solution
<!-- Embedded whiteboard image -->
![img1](array_shift.png)
