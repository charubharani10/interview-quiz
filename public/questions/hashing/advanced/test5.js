export const test5 = [
  {
    question:
      "In a hash table using chaining, what is the time complexity of searching for an element in a chain where elements are stored in a balanced binary tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "When elements are stored in a balanced binary tree, searching for an element in the chain has a time complexity of O(log n), rather than O(n).",
  },
  {
    question:
      "How does a good hash function improve the performance of a hash table?",
    options: [
      "By reducing memory consumption",
      "By minimizing collisions and ensuring a uniform distribution of keys",
      "By making the hash table expandable",
      "By preventing the need for rehashing",
    ],
    correctAnswer:
      "By minimizing collisions and ensuring a uniform distribution of keys",
    explanation:
      "A good hash function minimizes collisions and spreads keys evenly across the table, leading to better overall performance.",
  },
  {
    question:
      "What is the primary drawback of using linear probing as a collision resolution method in a hash table?",
    options: [
      "It reduces search time by using a complex hash function",
      "It leads to primary clustering where consecutive slots are filled",
      "It requires additional memory compared to separate chaining",
      "It always results in O(1) search time",
    ],
    correctAnswer:
      "It leads to primary clustering where consecutive slots are filled",
    explanation:
      "Linear probing can cause primary clustering, where consecutive slots become filled, leading to longer search times.",
  },
  {
    question: "In the context of hashing, what is 'double hashing'?",
    options: [
      "Using a second hash function to resolve collisions",
      "Hashing the same data twice to increase security",
      "A process where two hash tables are combined",
      "Using two different data structures to store hashed data",
    ],
    correctAnswer: "Using a second hash function to resolve collisions",
    explanation:
      "Double hashing involves using a second hash function to resolve collisions, which reduces clustering compared to other methods.",
  },
  {
    question:
      "Which of the following is an example of a cryptographic hash function?",
    options: ["SHA-256", "MD5", "FNV-1", "Both SHA-256 and MD5"],
    correctAnswer: "Both SHA-256 and MD5",
    explanation:
      "Both SHA-256 and MD5 are widely used cryptographic hash functions that provide secure and deterministic outputs.",
  },
  {
    question:
      "What is the time complexity of searching for an element in a hash table with open addressing in the worst case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst case, when collisions occur frequently, searching in a hash table with open addressing can take O(n) time.",
  },
  {
    question:
      "Which of the following is a common technique for reducing the number of collisions in a hash table?",
    options: [
      "Using a prime number as the table size",
      "Using dynamic resizing with a fixed increment",
      "Using a cryptographic hash function",
      "Increasing the number of collisions accepted",
    ],
    correctAnswer: "Using a prime number as the table size",
    explanation:
      "Using a prime number as the table size helps reduce collisions by ensuring that the hash function distributes keys more evenly.",
  },
  {
    question:
      "What is the impact of a high load factor on the performance of a hash table with separate chaining?",
    options: [
      "It improves memory efficiency",
      "It decreases the number of collisions",
      "It increases the average time complexity of search operations",
      "It leads to faster rehashing",
    ],
    correctAnswer:
      "It increases the average time complexity of search operations",
    explanation:
      "A high load factor can lead to longer linked lists in separate chaining, increasing the time complexity for search operations.",
  },
  {
    question:
      "What is the key difference between cryptographic and non-cryptographic hash functions?",
    options: [
      "Cryptographic hash functions can be reversed, while non-cryptographic cannot",
      "Cryptographic hash functions have deterministic outputs, while non-cryptographic are random",
      "Cryptographic hash functions focus on security and collision resistance, while non-cryptographic hash functions prioritize speed and simplicity",
      "Cryptographic hash functions require more memory than non-cryptographic",
    ],
    correctAnswer:
      "Cryptographic hash functions focus on security and collision resistance, while non-cryptographic hash functions prioritize speed and simplicity",
    explanation:
      "Cryptographic hash functions are designed to be resistant to collisions and tampering, while non-cryptographic hash functions prioritize performance over security.",
  },
  {
    question:
      "How does the resizing process affect the hash table when it is triggered due to a high load factor?",
    options: [
      "It decreases the size of the hash table",
      "It reduces the number of collisions and improves performance",
      "It causes all the elements to be rehashed and redistributed",
      "It creates an empty table with random values",
    ],
    correctAnswer:
      "It causes all the elements to be rehashed and redistributed",
    explanation:
      "During resizing, the hash table is expanded, and all elements need to be rehashed and redistributed into the new, larger table.",
  },
  {
    question:
      "In a hash table with open addressing, what is the impact of high clustering on performance?",
    options: [
      "It reduces memory usage significantly",
      "It increases the time for searching and inserting elements",
      "It eliminates the need for rehashing",
      "It results in a perfect uniform distribution of keys",
    ],
    correctAnswer: "It increases the time for searching and inserting elements",
    explanation:
      "Clustering can lead to longer search times and make insertions more difficult in open addressing, reducing the overall performance.",
  },
  {
    question:
      "Which type of hashing technique is most suitable for applications that require constant-time lookups?",
    options: [
      "Perfect hashing",
      "Double hashing",
      "Separate chaining",
      "Linear probing",
    ],
    correctAnswer: "Perfect hashing",
    explanation:
      "Perfect hashing guarantees constant-time lookups by ensuring that there are no collisions, which is ideal for applications requiring fast access.",
  },
  {
    question:
      "How can 'load factor' be defined in the context of a hash table?",
    options: [
      "The number of empty slots in the table",
      "The ratio of the number of filled slots to the total number of slots",
      "The number of collisions in the hash table",
      "The time complexity of search operations",
    ],
    correctAnswer:
      "The ratio of the number of filled slots to the total number of slots",
    explanation:
      "The load factor is defined as the ratio of the number of elements to the total number of slots in the hash table.",
  },
  {
    question:
      "What is the primary advantage of using a balanced tree (e.g., AVL or Red-Black tree) in a hash table bucket?",
    options: [
      "It decreases the complexity of the hash function",
      "It reduces the average time complexity of search operations in the bucket",
      "It allows more collisions to occur without resizing",
      "It improves the security of the hash function",
    ],
    correctAnswer:
      "It reduces the average time complexity of search operations in the bucket",
    explanation:
      "Using a balanced tree in a hash table bucket improves search efficiency, as balanced trees have a time complexity of O(log n) for search operations.",
  },
  {
    question:
      "What is the purpose of the secondary hash function in double hashing?",
    options: [
      "To determine the next table slot when a collision occurs",
      "To ensure that the table size remains constant",
      "To minimize the number of collisions in separate chaining",
      "To make the hash table cryptographically secure",
    ],
    correctAnswer: "To determine the next table slot when a collision occurs",
    explanation:
      "In double hashing, the secondary hash function helps to compute a new slot when a collision occurs, reducing clustering.",
  },
  {
    question:
      "What does a cryptographic hash function typically provide that non-cryptographic hash functions do not?",
    options: [
      "Deterministic output",
      "Fast computation",
      "Collision resistance and pre-image resistance",
      "High memory efficiency",
    ],
    correctAnswer: "Collision resistance and pre-image resistance",
    explanation:
      "Cryptographic hash functions are designed to resist collisions and pre-image attacks, ensuring security.",
  },
  {
    question:
      "What is the worst-case time complexity of a hash table operation when the hash function has poor distribution and all keys map to the same index?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst case, all keys hashing to the same index would degrade the hash table operations to O(n), as searching and inserting would require traversing a list of n elements.",
  },
  {
    question: "What does 'separation chaining' refer to in hash tables?",
    options: [
      "Using multiple hash functions for better distribution",
      "Storing all elements in a single linked list",
      "Using an additional linked list at each index to handle collisions",
      "Disallowing collisions by increasing table size",
    ],
    correctAnswer:
      "Using an additional linked list at each index to handle collisions",
    explanation:
      "In separation chaining, each index in the hash table contains a linked list that stores all elements that hash to the same index.",
  },
  {
    question:
      "What is the average time complexity of a search operation in a hash table using separate chaining, assuming a good hash function and low load factor?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "If the hash function distributes keys evenly and the load factor is low, the average search time is O(1) in separate chaining.",
  },
  {
    question: "How does 'rehashing' impact the performance of a hash table?",
    options: [
      "It reduces memory usage but increases the lookup time",
      "It improves performance by resizing and redistributing elements when the load factor exceeds a threshold",
      "It increases the hash table size but keeps performance constant",
      "It prevents collisions by duplicating elements",
    ],
    correctAnswer:
      "It improves performance by resizing and redistributing elements when the load factor exceeds a threshold",
    explanation:
      "Rehashing increases the size of the hash table and redistributes elements, reducing collisions and improving performance.",
  },
];
