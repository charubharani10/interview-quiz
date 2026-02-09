export const test5 = [
  {
    question: "What is the purpose of 'rehashing' in a hash table?",
    options: [
      "To compress the hash values",
      "To redistribute the keys to a larger table",
      "To speed up the lookup process",
      "To optimize the hash function",
    ],
    correctAnswer: "To redistribute the keys to a larger table",
    explanation:
      "Rehashing involves resizing the hash table and redistributing the keys when the load factor exceeds a certain threshold.",
  },
  {
    question:
      "Which hashing technique avoids clustering by using a second hash function to resolve collisions?",
    options: [
      "Quadratic probing",
      "Double hashing",
      "Linear probing",
      "Separate chaining",
    ],
    correctAnswer: "Double hashing",
    explanation:
      "Double hashing uses a second hash function to resolve collisions, reducing clustering and improving performance.",
  },
  {
    question:
      "What is a potential disadvantage of separate chaining for collision resolution?",
    options: [
      "Requires additional memory for linked lists",
      "Slows down insertion operations",
      "Increases the number of hash functions required",
      "Cannot handle large datasets efficiently",
    ],
    correctAnswer: "Requires additional memory for linked lists",
    explanation:
      "Separate chaining requires additional memory for linked lists at each index in the hash table, which may be inefficient for space.",
  },
  {
    question:
      "Which of the following describes the main issue with linear probing in a hash table?",
    options: [
      "Increases the number of collisions",
      "Causes clustering of keys",
      "Requires a larger hash table size",
      "Is inefficient for large datasets",
    ],
    correctAnswer: "Causes clustering of keys",
    explanation:
      "Linear probing can cause clustering, where consecutive elements are grouped together, increasing collisions and search times.",
  },
  {
    question:
      "What happens when a hash table's load factor exceeds a predefined threshold?",
    options: [
      "The table performs rehashing",
      "The hash function is changed",
      "Keys are deleted to free up space",
      "All elements are reorganized",
    ],
    correctAnswer: "The table performs rehashing",
    explanation:
      "When the load factor exceeds a threshold, typically 0.7, the hash table is resized, and rehashing is performed to redistribute keys.",
  },
  {
    question:
      "In which scenario would you use double hashing over linear or quadratic probing?",
    options: [
      "When you want to reduce clustering",
      "When the hash table is very small",
      "When memory is not a concern",
      "When you have a weak hash function",
    ],
    correctAnswer: "When you want to reduce clustering",
    explanation:
      "Double hashing is used to reduce clustering by applying a second hash function, unlike linear or quadratic probing.",
  },
  {
    question:
      "Which of the following is the best characteristic of a good hash function?",
    options: [
      "It results in a uniform distribution of hash values",
      "It always produces a unique value for each key",
      "It is computationally expensive to calculate",
      "It uses multiple hash algorithms",
    ],
    correctAnswer: "It results in a uniform distribution of hash values",
    explanation:
      "A good hash function evenly distributes keys across the hash table, minimizing collisions and ensuring efficient performance.",
  },
  {
    question:
      "What is the main advantage of using a hash table over other data structures like arrays or linked lists?",
    options: [
      "It uses less memory",
      "It provides constant-time lookups on average",
      "It allows for faster sorting of elements",
      "It does not require resizing",
    ],
    correctAnswer: "It provides constant-time lookups on average",
    explanation:
      "Hash tables offer constant-time lookups (O(1)) on average, making them faster than arrays or linked lists for search operations.",
  },
  {
    question: "In what situation would rehashing occur in a hash table?",
    options: [
      "When the table is resized",
      "When the number of collisions exceeds a threshold",
      "When the load factor exceeds a predefined value",
      "When keys are removed from the table",
    ],
    correctAnswer: "When the load factor exceeds a predefined value",
    explanation:
      "Rehashing occurs when the load factor exceeds a certain threshold (often 0.7), prompting the table to resize and redistribute keys.",
  },
  {
    question: "What does the term 'load factor' indicate in a hash table?",
    options: [
      "The number of elements inserted into the hash table",
      "The number of collisions that occur",
      "The proportion of the table's capacity that is filled",
      "The average number of probes for each search",
    ],
    correctAnswer: "The proportion of the table's capacity that is filled",
    explanation:
      "Load factor is the ratio of the number of elements in the table to the table size. A high load factor indicates that the table is nearly full.",
  },
  {
    question:
      "Which hashing method avoids clustering by using a hash function that incorporates multiple hash values?",
    options: [
      "Quadratic probing",
      "Double hashing",
      "Separate chaining",
      "Linear probing",
    ],
    correctAnswer: "Double hashing",
    explanation:
      "Double hashing applies a second hash function to avoid clustering, distributing keys more evenly across the hash table.",
  },
  {
    question: "What is the primary purpose of using a good hash function?",
    options: [
      "To minimize collisions",
      "To optimize memory usage",
      "To improve the performance of sorting algorithms",
      "To allow faster insertion operations",
    ],
    correctAnswer: "To minimize collisions",
    explanation:
      "A good hash function minimizes collisions by distributing keys uniformly across the hash table, improving lookup and insertion efficiency.",
  },
  {
    question:
      "In which case would a hash table with separate chaining be less efficient?",
    options: [
      "When there is a low number of collisions",
      "When the table is very small",
      "When the number of elements is very large",
      "When keys are distributed uniformly",
    ],
    correctAnswer: "When the number of elements is very large",
    explanation:
      "When the number of elements is very large and collisions are frequent, separate chaining may require a significant amount of memory and become less efficient.",
  },
  {
    question:
      "What is the main disadvantage of using quadratic probing to resolve collisions?",
    options: [
      "It requires more memory",
      "It is computationally expensive",
      "It leads to clustering of keys",
      "It can cause the hash table to be too sparse",
    ],
    correctAnswer: "It leads to clustering of keys",
    explanation:
      "Quadratic probing can lead to clustering of keys, which makes search operations less efficient in certain cases.",
  },
  {
    question:
      "What is the expected time complexity for a successful lookup operation in a well-implemented hash table?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a well-implemented hash table, lookups are expected to be O(1), or constant time, on average, assuming the hash function distributes keys evenly.",
  },
  {
    question:
      "Which technique can be used to handle collisions in a hash table?",
    options: [
      "Rehashing",
      "Double hashing",
      "Separate chaining",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Rehashing, double hashing, and separate chaining are all common techniques used to handle collisions in a hash table.",
  },
  {
    question:
      "Which of the following operations on a hash table would most likely trigger rehashing?",
    options: ["Insertions", "Lookups", "Deletions", "All of the above"],
    correctAnswer: "Insertions",
    explanation:
      "Rehashing is typically triggered during insertions when the load factor exceeds a predefined threshold.",
  },
  {
    question:
      "What does 'open addressing' mean in the context of a hash table?",
    options: [
      "The hash table can store multiple elements at the same index",
      "Elements are probed to find the next available slot",
      "Keys are stored in a linked list at each hash table index",
      "Multiple hash functions are applied to resolve collisions",
    ],
    correctAnswer: "Elements are probed to find the next available slot",
    explanation:
      "Open addressing resolves collisions by probing subsequent slots in the hash table until an empty slot is found.",
  },
  {
    question:
      "What is the time complexity of the lookup operation in a hash table using linear probing, assuming a high load factor?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In linear probing, when the load factor is high, the lookup operation can degrade to O(n), as it may require scanning multiple entries.",
  },
  {
    question:
      "Which of the following is a key benefit of separate chaining in hash tables?",
    options: [
      "Minimizes collisions",
      "Requires less memory",
      "Can handle high load factors",
      "Improves cache locality",
    ],
    correctAnswer: "Can handle high load factors",
    explanation:
      "Separate chaining can handle high load factors without performance degradation, as it stores colliding elements in linked lists.",
  },
];
