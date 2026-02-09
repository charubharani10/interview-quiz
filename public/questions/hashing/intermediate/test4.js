export const test4 = [
  {
    question:
      "What is the main advantage of using a hash table over an array for storing data?",
    options: [
      "Lower memory usage",
      "Faster lookup and retrieval",
      "Support for dynamic resizing",
      "More efficient sorting",
    ],
    correctAnswer: "Faster lookup and retrieval",
    explanation:
      "A hash table provides constant-time lookups and retrievals (O(1)) on average, which is faster than arrays for search operations.",
  },
  {
    question: "What does 'hashing' refer to?",
    options: [
      "The process of converting a key into an integer value",
      "The process of storing keys in a linked list",
      "The process of sorting keys",
      "The process of finding the most frequent keys",
    ],
    correctAnswer: "The process of converting a key into an integer value",
    explanation:
      "Hashing is the process of transforming a key into a hash value, which is an integer that determines the index of storage in a hash table.",
  },
  {
    question:
      "What is the time complexity of searching for an element in a well-designed hash table?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a well-designed hash table, search operations can be performed in constant time, O(1), on average.",
  },
  {
    question:
      "What type of collision resolution technique is used in hash tables that use a secondary hash function to resolve collisions?",
    options: [
      "Separate chaining",
      "Quadratic probing",
      "Double hashing",
      "Linear probing",
    ],
    correctAnswer: "Double hashing",
    explanation:
      "Double hashing uses a secondary hash function to resolve collisions when the first hash function results in a collision.",
  },
  {
    question:
      "Which of the following techniques allows handling collisions by linking elements at the same index in a hash table?",
    options: [
      "Separate chaining",
      "Quadratic probing",
      "Linear probing",
      "Rehashing",
    ],
    correctAnswer: "Separate chaining",
    explanation:
      "In separate chaining, each hash table index stores a linked list of keys that hash to the same index, handling collisions efficiently.",
  },
  {
    question: "In the context of a hash table, what is meant by 'clustering'?",
    options: [
      "When keys are stored in an array",
      "When multiple keys hash to the same location",
      "When the hash table is resized",
      "When collisions are avoided",
    ],
    correctAnswer: "When multiple keys hash to the same location",
    explanation:
      "Clustering occurs when multiple keys hash to the same location, leading to performance degradation, especially in open addressing.",
  },
  {
    question:
      "In which type of hashing is a linked list used to store multiple elements that hash to the same index?",
    options: [
      "Separate chaining",
      "Linear probing",
      "Quadratic probing",
      "Double hashing",
    ],
    correctAnswer: "Separate chaining",
    explanation:
      "Separate chaining uses linked lists to store multiple elements at the same index in the hash table, making it easier to resolve collisions.",
  },
  {
    question:
      "What is the impact of a high load factor on hash table performance?",
    options: [
      "Improved performance",
      "Faster lookups",
      "Increased collisions and slower performance",
      "No impact on performance",
    ],
    correctAnswer: "Increased collisions and slower performance",
    explanation:
      "A high load factor increases collisions and slows down the performance of the hash table, as the table becomes more crowded.",
  },
  {
    question:
      "Which of the following statements is true about rehashing a hash table?",
    options: [
      "Rehashing increases the size of the table and redistributes the keys",
      "Rehashing is only done when keys are deleted",
      "Rehashing is unnecessary for large hash tables",
      "Rehashing is the process of creating a new hash function",
    ],
    correctAnswer:
      "Rehashing increases the size of the table and redistributes the keys",
    explanation:
      "Rehashing involves increasing the hash table size and redistributing the keys to ensure better performance when the table becomes full.",
  },
  {
    question:
      "Which method of collision resolution can result in clustering of keys?",
    options: [
      "Separate chaining",
      "Quadratic probing",
      "Linear probing",
      "Double hashing",
    ],
    correctAnswer: "Linear probing",
    explanation:
      "Linear probing resolves collisions by sequentially searching for the next available slot, which can lead to clustering of keys in the hash table.",
  },
  {
    question:
      "What is the primary disadvantage of using linear probing for collision resolution in a hash table?",
    options: [
      "It leads to clustering of keys",
      "It is slower than separate chaining",
      "It uses more memory",
      "It requires a secondary hash function",
    ],
    correctAnswer: "It leads to clustering of keys",
    explanation:
      "Linear probing can lead to clustering, where consecutive elements group together, which increases the number of collisions and decreases performance.",
  },
  {
    question:
      "What is the purpose of a secondary hash function in double hashing?",
    options: [
      "To resolve collisions",
      "To distribute keys evenly",
      "To sort the keys",
      "To reduce memory usage",
    ],
    correctAnswer: "To resolve collisions",
    explanation:
      "A secondary hash function is used in double hashing to resolve collisions by finding an alternate location for keys that hash to the same index.",
  },
  {
    question:
      "What is the worst-case time complexity for a lookup operation in a hash table with separate chaining?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst case, when all elements hash to the same index, the time complexity for lookup in a hash table using separate chaining is O(n).",
  },
  {
    question:
      "Which of the following best describes the concept of 'load factor' in a hash table?",
    options: [
      "The number of keys in the hash table",
      "The ratio of the number of keys to the table size",
      "The number of collisions in the hash table",
      "The time taken to insert an element",
    ],
    correctAnswer: "The ratio of the number of keys to the table size",
    explanation:
      "The load factor is the ratio of the number of keys in the hash table to the table size, helping to determine when rehashing is required.",
  },
  {
    question:
      "In a hash table with a load factor of 0.8, what does this indicate?",
    options: [
      "The table is 80% full",
      "The table has 20% available space",
      "The table has 80% unused capacity",
      "The table needs to be resized",
    ],
    correctAnswer: "The table is 80% full",
    explanation:
      "A load factor of 0.8 means the hash table is 80% filled, which may trigger a rehashing process to avoid performance degradation.",
  },
  {
    question:
      "How can we minimize the likelihood of collisions in a hash table?",
    options: [
      "Use a good hash function",
      "Decrease the load factor",
      "Increase the table size frequently",
      "Use open addressing only",
    ],
    correctAnswer: "Use a good hash function",
    explanation:
      "A good hash function distributes keys evenly across the hash table, minimizing the likelihood of collisions.",
  },
  {
    question:
      "In a hash table, what happens when a key hashes to an index that is already occupied?",
    options: [
      "The key is discarded",
      "The key is moved to a new index",
      "A collision occurs",
      "The key is inserted without change",
    ],
    correctAnswer: "A collision occurs",
    explanation:
      "A collision occurs when two keys hash to the same index, which must be handled using a collision resolution technique.",
  },
  {
    question:
      "What is the main drawback of using open addressing for collision resolution?",
    options: [
      "It consumes more memory",
      "It leads to slower lookups",
      "It can cause clustering and degraded performance",
      "It requires multiple hash functions",
    ],
    correctAnswer: "It can cause clustering and degraded performance",
    explanation:
      "Open addressing can cause clustering, which leads to increased search times and degraded performance.",
  },
  {
    question:
      "Which of the following methods for collision resolution maintains a linked list at each hash table index?",
    options: [
      "Linear probing",
      "Separate chaining",
      "Quadratic probing",
      "Double hashing",
    ],
    correctAnswer: "Separate chaining",
    explanation:
      "Separate chaining resolves collisions by linking multiple elements at the same index using a linked list.",
  },
  {
    question: "When does a hash table perform rehashing?",
    options: [
      "When the hash function is weak",
      "When the table size is too small",
      "When the load factor exceeds a certain threshold",
      "When too many collisions occur",
    ],
    correctAnswer: "When the load factor exceeds a certain threshold",
    explanation:
      "Rehashing occurs when the load factor exceeds a predefined threshold, typically around 0.7, to maintain efficient performance.",
  },
];
