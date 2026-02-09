export const test2 = [
  {
    question:
      "In a hash table using double hashing, what role does the second hash function serve?",
    options: [
      "To resize the table when the load factor is high",
      "To spread out keys that have caused collisions in the initial hash function",
      "To encrypt the keys for security",
      "To determine the exact location of each key in the table",
    ],
    correctAnswer:
      "To spread out keys that have caused collisions in the initial hash function",
    explanation:
      "In double hashing, the second hash function helps to reduce clustering by using an additional hashing mechanism when collisions occur.",
  },
  {
    question:
      "What are the benefits of using a cryptographic hash function in blockchain technology?",
    options: [
      "Fast computation",
      "Collision resistance and immutability of data",
      "Low memory consumption",
      "Encryption of transaction data",
    ],
    correctAnswer: "Collision resistance and immutability of data",
    explanation:
      "Cryptographic hash functions are used in blockchain for ensuring data integrity and immutability by preventing collisions and tampering.",
  },
  {
    question:
      "What is the typical time complexity of an insert operation in a hash table using open addressing when collisions occur frequently?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "When collisions occur frequently, the insert operation in open addressing can degrade to O(n) due to the time needed to resolve collisions.",
  },
  {
    question:
      "In perfect hashing, how is the hash function designed to eliminate collisions?",
    options: [
      "By choosing a very large table size",
      "By using a hash function that guarantees a unique output for each key",
      "By using multiple hash functions to divide the input space",
      "By rehashing periodically",
    ],
    correctAnswer:
      "By using a hash function that guarantees a unique output for each key",
    explanation:
      "In perfect hashing, the hash function is designed to ensure that every key maps to a unique index, thus avoiding collisions.",
  },
  {
    question:
      "How does the hash function in a Bloom filter work differently from traditional hash functions?",
    options: [
      "It maps an element to a single index in the hash table",
      "It uses multiple hash functions to set several bits in a bit array",
      "It stores data in a balanced tree structure",
      "It ensures that the bits it sets are reset after a lookup",
    ],
    correctAnswer:
      "It uses multiple hash functions to set several bits in a bit array",
    explanation:
      "In Bloom filters, multiple hash functions are used to set bits in a bit array, increasing the likelihood of detecting membership but introducing a small risk of false positives.",
  },
  {
    question:
      "What is a significant disadvantage of using open addressing with linear probing in a hash table?",
    options: [
      "It results in high memory usage",
      "It leads to primary clustering, increasing search times",
      "It guarantees perfect hash distribution",
      "It causes excessive rehashing",
    ],
    correctAnswer: "It leads to primary clustering, increasing search times",
    explanation:
      "Linear probing can cause primary clustering, where keys tend to group together, resulting in longer search times.",
  },
  {
    question:
      "What is the primary difference between a hash table and a hash map in terms of thread safety?",
    options: [
      "A hash table is synchronized and thread-safe, while a hash map is not",
      "A hash table has better performance in multi-threaded environments",
      "A hash map provides faster lookups than a hash table",
      "A hash map is synchronized and thread-safe, while a hash table is not",
    ],
    correctAnswer:
      "A hash table is synchronized and thread-safe, while a hash map is not",
    explanation:
      "Hash tables are synchronized and thread-safe, while hash maps are not synchronized and require external synchronization for thread safety.",
  },
  {
    question:
      "In cryptographic hash functions, what is the purpose of the avalanche effect?",
    options: [
      "To ensure that minor changes in the input drastically change the hash output",
      "To increase the hash function's computation speed",
      "To minimize the size of the hash value",
      "To encrypt the hash values for security",
    ],
    correctAnswer:
      "To ensure that minor changes in the input drastically change the hash output",
    explanation:
      "The avalanche effect ensures that even small changes to the input result in a significantly different hash, making the hash function resistant to collisions.",
  },
  {
    question:
      "In the context of hashing, what is the advantage of using a hash function with a well-designed mix function?",
    options: [
      "It speeds up hash computation",
      "It ensures the hash table has a lower load factor",
      "It evenly distributes keys across the table, reducing collisions",
      "It ensures better encryption of data",
    ],
    correctAnswer:
      "It evenly distributes keys across the table, reducing collisions",
    explanation:
      "A well-designed mix function ensures that keys are distributed evenly across the hash table, minimizing collisions and improving performance.",
  },
  {
    question:
      "What is the time complexity of searching for an element in a hash table that uses quadratic probing to resolve collisions in the worst case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In quadratic probing, collisions may still occur, and in the worst case, searching for an element may require O(n) time, as it may need to traverse a large portion of the table.",
  },
  {
    question:
      "Which of the following hashing methods is most suitable for applications where lookup speed is critical and there are no collisions?",
    options: [
      "Separate chaining",
      "Double hashing",
      "Perfect hashing",
      "Linear probing",
    ],
    correctAnswer: "Perfect hashing",
    explanation:
      "Perfect hashing ensures no collisions and provides constant time lookup, making it ideal for applications where lookup speed is critical.",
  },
  {
    question:
      "In a hash table that uses a dynamic resizing strategy, when is it appropriate to resize the table?",
    options: [
      "When the number of elements exceeds a fixed threshold relative to the table size",
      "When the hash function produces a perfect hash",
      "When the table is empty",
      "After every insert operation",
    ],
    correctAnswer:
      "When the number of elements exceeds a fixed threshold relative to the table size",
    explanation:
      "Dynamic resizing is triggered when the number of elements exceeds a threshold (typically the load factor), to ensure optimal performance and reduce collisions.",
  },
  {
    question:
      "What is the best hashing technique for a situation where the keys are known to have a uniform distribution?",
    options: [
      "Double hashing",
      "Linear probing",
      "Separate chaining",
      "Perfect hashing",
    ],
    correctAnswer: "Perfect hashing",
    explanation:
      "Perfect hashing is ideal when keys are uniformly distributed, as it avoids collisions by ensuring unique mappings to table slots.",
  },
  {
    question:
      "What is the impact of using a poor hash function in a hash table?",
    options: [
      "Increased memory usage",
      "Frequent collisions, leading to degraded performance",
      "Faster computation of hash values",
      "Reduced hash table size",
    ],
    correctAnswer: "Frequent collisions, leading to degraded performance",
    explanation:
      "A poor hash function increases the likelihood of collisions, which degrade performance by increasing search and insertion times.",
  },
  {
    question:
      "In a hash table, what happens if the hash function produces an index that is already occupied in an open addressing method?",
    options: [
      "The element is added to the next available index",
      "The operation fails immediately",
      "The table is resized",
      "The element is inserted at the original index",
    ],
    correctAnswer: "The element is added to the next available index",
    explanation:
      "In open addressing, when a collision occurs, the element is placed in the next available index using a probing strategy (e.g., linear or quadratic probing).",
  },
  {
    question:
      "What is the space complexity of a hash table with n elements and a table size of m, where m >= n?",
    options: ["O(1)", "O(m)", "O(n)", "O(m + n)"],
    correctAnswer: "O(m)",
    explanation:
      "The space complexity of a hash table is determined by the table size m. If m >= n, the space complexity is O(m).",
  },
  {
    question:
      "What is the primary difference between a hash table and a set in terms of hashing?",
    options: [
      "A hash table stores key-value pairs, while a set stores only keys",
      "A hash table uses multiple hash functions, while a set uses one",
      "A set is slower than a hash table",
      "A hash table requires less memory",
    ],
    correctAnswer:
      "A hash table stores key-value pairs, while a set stores only keys",
    explanation:
      "A hash table stores key-value pairs, while a set only stores keys, making the data structure slightly simpler in a set.",
  },
  {
    question:
      "What is the ideal load factor of a hash table to maintain a good balance between space and time complexity?",
    options: ["0.5 to 0.75", "0.25 to 0.5", "1 to 1.5", "1.5 to 2"],
    correctAnswer: "0.5 to 0.75",
    explanation:
      "A load factor between 0.5 and 0.75 is ideal for balancing space efficiency and time complexity, minimizing collisions while avoiding excessive memory usage.",
  },
  {
    question:
      "What technique can be used to improve the performance of hash tables in terms of collision resolution?",
    options: [
      "Using a better hash function",
      "Increasing the table size",
      "Using a combination of separate chaining and open addressing",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Improving the hash function, increasing table size, and using a combination of techniques like separate chaining and open addressing can help reduce collisions and improve performance.",
  },
  {
    question:
      "What is the average time complexity for searching in a hash table with quadratic probing in the best case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In the best case, when no collisions occur, the search operation in a hash table with quadratic probing has a time complexity of O(1).",
  },
  {
    question:
      "How does a hash table handle collisions in a dynamic hashing scheme?",
    options: [
      "It uses a secondary hash function",
      "It resizes the table and rehashes elements into new locations",
      "It drops the element causing the collision",
      "It stores collisions in an overflow list",
    ],
    correctAnswer:
      "It resizes the table and rehashes elements into new locations",
    explanation:
      "In dynamic hashing, when a collision occurs and the table is full, the table is resized and elements are rehashed into new locations to minimize collisions.",
  },
];
