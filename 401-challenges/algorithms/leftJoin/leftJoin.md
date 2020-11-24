# Code Challenge

Implement a simplified LEFT JOIN for 2 Hashmaps.

[Click here to see the solution code](leftJoin.js)

[Click here to see the tester code](leftJoin.test.js)

## Feature Tasks

- Write a function that LEFT JOINs two hashmaps into a single data structure.
- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
- LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
- The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.
- Avoid utilizing any of the library methods available to your language.

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write at least three test assertions for each method that you define.

Ensure your tests are passing before you submit your solution.

## Example

![img1](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-33/dsa-33-io-table.png)

## Approach & Efficiency

1. get in the 1st hashmap, loop throught every key.

2. then check the key in 2nd hashmap by using the get method. If key exists, it returns the value; or None.

3. combine the returned search result from 2nd hashmap with the key value pair in 1st hash map, then append it to output list.

4. return the output list.

the big O time is O(n), big O space is O(n)

## Solution

![img](https://github.com/PengChen11/python-data-structures-and-algorithms/raw/master/dsa/challenges/left_join/1.png)