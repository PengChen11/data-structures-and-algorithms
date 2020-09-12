# Bubble Sort

[Click here to see the code](bubble_sort.js)

[Click here to see the tester](../all_sort.test.js)

## Get started

Given an array of N elements, Bubble Sort will:

1. Compare a pair of adjacent items (a, b),

2. Swap that pair if the items are out of order (in this case, when a > b),

3. Repeat Step 1 and 2 until we reach the end of array
(the last pair is the (N-2)-th and (N-1)-th items as we use 0-based indexing),

4. By now, the largest item will be at the last position.
We then reduce N by 1 and repeat Step 1 until we have N = 1.

## Big O

Comparison and swap require time that is bounded by a constant, let's call it c.

There are two nested loops in (the standard) Bubble Sort.

The outer loop runs for exactly N iterations.
But the inner loop runs get shorter and shorter:
When i=0, (N−1) iterations (of comparisons and possibly swaps),
When i=1, (N−2) iterations,
...,
When i=(N−2), 1 iteration,
When i=(N−1), 0 iteration.
Thus, the total number of iterations = (N−1)+(N−2)+...+1+0 = N*(N−1)/2 (derivation).
Total time = c*N*(N−1)/2 = O(N^2).

## Limitations

Bubble Sort is actually inefficient with its O(N^2) time complexity. Imagine that we have N = 105 numbers. Even if our computer is super fast and can compute 108 operations in 1 second, Bubble Sort will need about 100 seconds to complete.

However, it can be terminated early, e.g. try Bubble Sort on the small sorted ascending example shown above [3, 6, 11, 25, 39] where it terminates in O(N) time.

The improvement idea is simple: If we go through the inner loop with no swapping at all, it means that the array is already sorted and we can stop Bubble Sort at that point.

Discussion: Although it makes Bubble Sort runs faster in general cases, this improvement idea does not change O(N^2) time complexity of Bubble Sort... Why?
