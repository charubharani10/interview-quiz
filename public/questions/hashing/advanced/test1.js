export const test1 = [
  {
    question:
      "What is the worst-case time complexity of search operations in a hash table that uses separate chaining when all keys hash to the same index?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst case, when all keys hash to the same index, the time complexity becomes O(n) as all elements are stored in a linked list.",
  },
  {
    question:
      "Which of the following can be considered an advantage of using double hashing over linear probing?",
    options: [
      "Reduces clustering by using a second hash function",
      "Requires less memory compared to separate chaining",
      "Improves the performance of the hash function",
      "Increases the hash table size",
    ],
    correctAnswer: "Reduces clustering by using a second hash function",
    explanation:
      "Double hashing helps to reduce clustering by using a secondary hash function to calculate probe offsets.",
  },
  {
    question:
      "Which property does a hash function need to satisfy for the 'perfect hashing' technique to be used?",
    options: [
      "It must be bijective",
      "It must be non-deterministic",
      "It must be deterministic and provide uniform distribution",
      "It must be a cryptographic hash function",
    ],
    correctAnswer: "It must be deterministic and provide uniform distribution",
    explanation:
      "For perfect hashing, the hash function must consistently map each input to a unique output, with uniform distribution of values.",
  },
  {
    question:
      "What is the time complexity of deleting an element in a hash table using separate chaining with a linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In separate chaining, if the linked list is long, deletion requires traversing the list, resulting in O(n) time complexity in the worst case.",
  },
  {
    question:
      "When resizing a hash table during rehashing, what happens to the elements in the old table?",
    options: [
      "They are discarded",
      "They are reinserted into the new hash table",
      "They are merged with new data",
      "They are hashed again and discarded",
    ],
    correctAnswer: "They are reinserted into the new hash table",
    explanation:
      "During rehashing, elements from the old table must be reinserted into the new, larger hash table.",
  },
  {
    question:
      "What happens when a hash table with quadratic probing reaches its maximum load factor?",
    options: [
      "Rehashing occurs",
      "Elements are deleted to free up space",
      "It switches to separate chaining",
      "Insertion operations are blocked",
    ],
    correctAnswer: "Rehashing occurs",
    explanation:
      "When a hash table using quadratic probing reaches its maximum load factor, rehashing is triggered to increase the table size.",
  },
  {
    question:
      "Which of the following is a drawback of using a simple hash function like modulus-based hashing?",
    options: [
      "It leads to poor performance when keys are uniformly distributed",
      "It may cause collisions in the case of non-uniform key distributions",
      "It is too complex for implementation",
      "It uses too much memory for large datasets",
    ],
    correctAnswer:
      "It may cause collisions in the case of non-uniform key distributions",
    explanation:
      "Simple hash functions like modulus-based hashing can lead to many collisions if the key values are not uniformly distributed.",
  },
  {
    question:
      "In double hashing, what should be the behavior of the second hash function to avoid clustering?",
    options: [
      "It should be a prime number",
      "It should be as complex as the first hash function",
      "It must produce values that are relatively prime to the table size",
      "It must hash to a smaller range of values",
    ],
    correctAnswer:
      "It must produce values that are relatively prime to the table size",
    explanation:
      "In double hashing, the second hash function should generate values that are relatively prime to the table size to avoid clustering and reduce collisions.",
  },
  {
    question:
      "Which of the following scenarios would be most suitable for using a hash function that minimizes collisions?",
    options: [
      "When the dataset is extremely large and the keys are uniformly distributed",
      "When memory usage is the primary concern",
      "When constant-time lookup is not necessary",
      "When the keys are integers in a small range",
    ],
    correctAnswer:
      "When the dataset is extremely large and the keys are uniformly distributed",
    explanation:
      "For large datasets with uniformly distributed keys, minimizing collisions with a good hash function ensures efficient performance in hash tables.",
  },
  {
    question:
      "What is the time complexity of searching in a hash table using separate chaining with a balanced binary tree as the bucket structure?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "When using a balanced binary tree in the buckets, searching within the bucket is O(log n), but the search time is still O(1) in the average case.",
  },
  {
    question:
      "How does the 'load factor' affect the performance of a hash table?",
    options: [
      "A higher load factor results in faster insertion times",
      "A higher load factor leads to more collisions, reducing performance",
      "A lower load factor makes the table faster but increases memory usage",
      "A lower load factor improves the time complexity of deletions",
    ],
    correctAnswer:
      "A higher load factor leads to more collisions, reducing performance",
    explanation:
      "As the load factor increases, collisions become more frequent, reducing the performance of the hash table's operations.",
  },
  {
    question:
      "In which case is open addressing (e.g., linear or quadratic probing) more effective than separate chaining?",
    options: [
      "When there are a large number of collisions",
      "When memory is constrained and linked lists are not practical",
      "When there is a high load factor",
      "When the hash function is poor",
    ],
    correctAnswer:
      "When memory is constrained and linked lists are not practical",
    explanation:
      "Open addressing is better for memory-constrained environments, as it avoids using linked lists.",
  },
  {
    question:
      "What is the most significant risk when a hash table has a poor hash function?",
    options: [
      "Hash table will become too large",
      "Collision rate increases, leading to performance degradation",
      "It makes it easier for a reverse lookup",
      "It decreases the hash table's load factor",
    ],
    correctAnswer:
      "Collision rate increases, leading to performance degradation",
    explanation:
      "A poor hash function can cause many collisions, degrading the performance of the hash table and making operations slower.",
  },
  {
    question:
      "When using separate chaining, what happens when the linked list at a hash table index becomes too long?",
    options: [
      "It leads to faster lookups",
      "It increases the average time complexity of search operations",
      "It automatically triggers a rehashing operation",
      "It reduces the memory usage of the table",
    ],
    correctAnswer:
      "It increases the average time complexity of search operations",
    explanation:
      "A long linked list at any index increases the time complexity of search operations to O(n) for that bucket.",
  },
  {
    question:
      "Which hashing strategy uses multiple hash functions to resolve collisions and optimize data distribution?",
    options: [
      "Double hashing",
      "Separate chaining",
      "Open addressing",
      "Perfect hashing",
    ],
    correctAnswer: "Double hashing",
    explanation:
      "Double hashing applies a second hash function to resolve collisions, improving data distribution and reducing clustering.",
  },
  {
    question:
      "How can a hash function be designed to handle a large dataset efficiently while avoiding collisions?",
    options: [
      "By using a simple modulus-based hash function",
      "By using a hash function that combines multiple properties of the key",
      "By minimizing the table size",
      "By avoiding dynamic resizing",
    ],
    correctAnswer:
      "By using a hash function that combines multiple properties of the key",
    explanation:
      "A good hash function for large datasets should combine multiple properties of the key (e.g., bitwise operations) to ensure a uniform distribution.",
  },
  {
    question:
      "What is the effect of using a hash table with a very small initial capacity and a high load factor?",
    options: [
      "It minimizes memory usage",
      "It results in a very low probability of collisions",
      "It causes frequent rehashing and performance degradation",
      "It ensures faster lookup times",
    ],
    correctAnswer: "It causes frequent rehashing and performance degradation",
    explanation:
      "A small initial capacity with a high load factor leads to frequent rehashing, which can degrade performance due to the cost of resizing.",
  },
  {
    question:
      "In a hash table using linear probing, what is the time complexity for searching an element that may be located after a sequence of filled slots?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In linear probing, if collisions occur, the search time increases as the number of probed slots increases, making it O(n) in the worst case.",
  },
  {
    question:
      "What happens when a hash table becomes overpopulated and the load factor exceeds a predefined threshold?",
    options: [
      "It triggers automatic deletion of elements",
      "It automatically increases the hash table size and rehashes the elements",
      "It stops further insertions until some elements are deleted",
      "It causes a direct lookup failure",
    ],
    correctAnswer:
      "It automatically increases the hash table size and rehashes the elements",
    explanation:
      "When the load factor exceeds a threshold, a hash table will trigger rehashing, where the size is increased and elements are rehashed.",
  },
  {
    question:
      "What is the key difference between open addressing and separate chaining?",
    options: [
      "Open addressing stores elements in the same array, while separate chaining uses additional linked lists",
      "Open addressing is faster for large datasets, while separate chaining is better for small datasets",
      "Open addressing uses a hash function twice, while separate chaining uses only one",
      "Open addressing avoids resizing, while separate chaining requires dynamic resizing",
    ],
    correctAnswer:
      "Open addressing stores elements in the same array, while separate chaining uses additional linked lists",
    explanation:
      "Open addressing stores all elements in the table itself, while separate chaining uses linked lists for handling collisions.",
  },
];
