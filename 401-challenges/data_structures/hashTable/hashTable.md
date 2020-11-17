# Implementation: Hash Tables

[Click here to see the code](hashTable.js)

[Click here to see the tests](hashTable.test.js)

## Features

Implement a Hashtable with the following methods:

- add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get: takes in the key and returns the value from the table.
- contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
- hash: takes in an arbitrary key and returns an index in the collection.

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write tests to prove the following functionality:

1. Adding a key/value to your hashtable results in the value being in the data structure
2. Retrieving based on a key returns the value stored
3. Successfully returns null for a key that does not exist in the hashtable
4. Successfully handle a collision within the hashtable
5. Successfully retrieve a value from a bucket within the hashtable that has a collision
6. Successfully hash a key to an in-range value
Ensure your tests are passing before you submit your solution.

## Efficiency

Big O time ideally should be O(1), but if mulpital node is take the same index in hashing table, it will be equal to the length of the nodes taking that spot.

## API

1. **add** method:
   - this method hashs the key by using **hash** method
   - using internal _value method to check whether key already exsists, if it does, update the value, or add the key and value to linked list at the index position
   - if multipul keys using the same hashed_key,  handle collisions by adding them to the linked list

2. **get** method:
   - this method hashs the key by using **hash** method
   - calling internal method _value to get the value for the key, or None
   -

3. **contains** method:
   - this method hashs the key by using **hash** method
   - check whether the hashed key index exsist. if it does, then:
   - calling internal method _value to check whether the value for that key exsist. if does. return True, otherwise False.

4. **hash** method:
   - take a key, hash it by:
      - add ASCII number for all the characters in the string and get the sum
      - mulplty sum by 1234.
      - then find the modulas by deviding the size of the hash table.

5. **_value** method:
   - if calling it with both key and value, it will check whether the key exsist in the linked list, if it does, update the value; Or add both.
   - when calling it with just the key, it will just return the value of that key.
