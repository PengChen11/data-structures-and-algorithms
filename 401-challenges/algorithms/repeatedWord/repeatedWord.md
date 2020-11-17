# Code Challenge

[Click here to see the code](./repeatedWord.js)

[Click here to see the tester](repeatedWord.test.js)

Find the first repeated word in a book.

## Feature Tasks

- Write a function that accepts a lengthy string parameter.
- Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write at least three test assertions for each method that you define.

Ensure your tests are passing before you submit your solution.

## Example

|Input|Output|
|---|---|
|"Once upon a time, there was a brave princess who..."|"a"|
|"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."|"it"|
|"It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."|"Summer"|

## Approach & Efficiency

1. import previously built hash table

2. use regex to get rid of any non-letter charactors in the input string

3. for every word in the purified input string, check whether the hash table contains that word as a "key" or not, if not, add it; if yes, then return the key as output. That's the first repeated word we're looking for.

4. if the user want a count of all the words, then we will use the count of the words in the input string to build a hash table, associate the word as "key" and the count as value and store them in the has table.

5. if user want to know the most frequently used word, then we will track it and return it.

Big O effciency for this function is O(n).

## Solution

![img](1.PNG)