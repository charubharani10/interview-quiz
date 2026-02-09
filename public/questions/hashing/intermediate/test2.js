export const test2 = [
  {
    question: "What is the main advantage of using a hash table for searching?",
    options: [
      "It provides O(n) time complexity",
      "It provides O(log n) time complexity",
      "It provides O(1) time complexity for average search operations",
      "It provides constant space complexity",
    ],
    correctAnswer:
      "It provides O(1) time complexity for average search operations",
    explanation:
      "In ideal conditions, hash tables provide constant time complexity for search operations due to direct indexing.",
  },
  {
    question:
      "Which of the following is a key disadvantage of using open addressing for collision resolution?",
    options: [
      "Memory overhead",
      "Slower performance under high load factor",
      "Requires additional hash functions",
      "No collisions occur",
    ],
    correctAnswer: "Slower performance under high load factor",
    explanation:
      "Open addressing can lead to slower performance when the load factor is high, as it requires probing multiple positions for available slots.",
  },
  {
    question:
      "Which method resolves collisions by keeping a linked list at each index?",
    options: [
      "Quadratic probing",
      "Separate chaining",
      "Linear probing",
      "Double hashing",
    ],
    correctAnswer: "Separate chaining",
    explanation:
      "Separate chaining uses a linked list at each index in the hash table to handle collisions, allowing multiple elements to be stored at the same index.",
  },
  {
    question:
      "What type of function is typically used in hashing to generate a key index?",
    options: [
      "A complex function",
      "A polynomial function",
      "A hash function",
      "A sorting function",
    ],
    correctAnswer: "A hash function",
    explanation:
      "A hash function is used to generate an index for a key in the hash table, mapping the key to a specific position in the table.",
  },
  {
    question: "How is a collision typically handled in linear probing?",
    options: [
      "By creating a new hash table",
      "By directly linking colliding elements",
      "By searching sequentially for the next available slot",
      "By rehashing the key",
    ],
    correctAnswer: "By searching sequentially for the next available slot",
    explanation:
      "In linear probing, if a collision occurs, the algorithm searches for the next available slot sequentially in the hash table.",
  },
  {
    question:
      "What is the main drawback of using linear probing for collision resolution?",
    options: [
      "It requires more memory",
      "It leads to clustering of elements",
      "It increases the time complexity",
      "It leads to resizing of the table",
    ],
    correctAnswer: "It leads to clustering of elements",
    explanation:
      "Linear probing can cause clustering, where groups of adjacent occupied slots form, degrading performance.",
  },
  {
    question: "What is the purpose of a good hash function in a hash table?",
    options: [
      "To increase the size of the hash table",
      "To distribute keys evenly across the hash table",
      "To reduce the number of elements in the table",
      "To ensure keys are unique",
    ],
    correctAnswer: "To distribute keys evenly across the hash table",
    explanation:
      "A good hash function distributes keys uniformly across the hash table, minimizing collisions and improving performance.",
  },
  {
    question: "What is double hashing?",
    options: [
      "A method to resize a hash table",
      "A method to handle collisions by using two hash functions",
      "A method to divide the hash table into two parts",
      "A method to hash numeric values only",
    ],
    correctAnswer: "A method to handle collisions by using two hash functions",
    explanation:
      "Double hashing uses two hash functions to resolve collisions. When a collision occurs, a second hash function is applied to find a new index.",
  },
  {
    question:
      "Which of the following is a method of collision resolution where an additional hash function is used to find the next available slot?",
    options: [
      "Quadratic probing",
      "Linear probing",
      "Double hashing",
      "Separate chaining",
    ],
    correctAnswer: "Double hashing",
    explanation:
      "Double hashing uses a second hash function to resolve collisions, reducing the chance of clustering and improving distribution.",
  },
  {
    question:
      "What is the time complexity of searching in a hash table with separate chaining in the worst case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst case, when all elements hash to the same index, searching takes linear time, O(n), in separate chaining.",
  },
  {
    question: "What is the effect of increasing the size of the hash table?",
    options: [
      "It reduces the number of collisions",
      "It increases the load factor",
      "It increases the number of hash functions",
      "It reduces the time complexity of all operations",
    ],
    correctAnswer: "It reduces the number of collisions",
    explanation:
      "Increasing the size of the hash table reduces the load factor, which decreases the number of collisions.",
  },
  {
    question: "In a hash table, what is typically used to handle collisions?",
    options: [
      "Linked lists",
      "Rehashing",
      "Primary hash functions",
      "Key sorting",
    ],
    correctAnswer: "Linked lists",
    explanation:
      "Linked lists (used in separate chaining) are commonly employed to handle collisions in a hash table.",
  },
  {
    question:
      "What is the time complexity of searching for an element in a hash table with quadratic probing in the average case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In the average case, quadratic probing can provide O(1) search time if the hash table is not heavily loaded.",
  },
  {
    question: "Which of the following is a disadvantage of quadratic probing?",
    options: [
      "Slower insertion",
      "Increased collisions",
      "Clustering",
      "Memory inefficiency",
    ],
    correctAnswer: "Clustering",
    explanation:
      "Quadratic probing can still cause clustering, although less frequently than linear probing.",
  },
  {
    question: "What is rehashing in the context of hash tables?",
    options: [
      "A method of increasing the table size and rehashing all keys",
      "A method of recalculating the hash function",
      "A method of reducing memory usage",
      "A method of optimizing the hash function",
    ],
    correctAnswer:
      "A method of increasing the table size and rehashing all keys",
    explanation:
      "Rehashing involves increasing the table size and reapplying the hash function to all existing keys, which helps reduce collisions.",
  },
  {
    question:
      "In a well-designed hash table, what should be the time complexity of insertion?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a well-designed hash table with no collisions, insertion occurs in constant time, O(1).",
  },
  {
    question:
      "How does a poor hash function affect the performance of a hash table?",
    options: [
      "It increases memory usage",
      "It causes too many collisions, reducing efficiency",
      "It improves performance",
      "It ensures unique indices",
    ],
    correctAnswer: "It causes too many collisions, reducing efficiency",
    explanation:
      "A poor hash function leads to clustering and increased collisions, which degrade the performance of the hash table.",
  },
  {
    question:
      "Which of the following is a common method used to handle collisions in open addressing?",
    options: [
      "Linear probing",
      "Binary search",
      "Separate chaining",
      "Multiple hash functions",
    ],
    correctAnswer: "Linear probing",
    explanation:
      "Linear probing is a common method for resolving collisions in open addressing by searching for the next available slot.",
  },
  {
    question:
      "What is the term for when two keys hash to the same index in a hash table?",
    options: ["Clustering", "Collision", "Clash", "Hashing conflict"],
    correctAnswer: "Collision",
    explanation:
      "When two different keys produce the same hash value, it results in a collision.",
  },
  {
    question:
      "In which scenario would a hash table with open addressing likely perform the worst?",
    options: [
      "Low load factor",
      "High load factor",
      "Low number of collisions",
      "High number of keys",
    ],
    correctAnswer: "High load factor",
    explanation:
      "When the load factor is high, open addressing performance degrades because more collisions occur and more probing is required.",
  },
];
