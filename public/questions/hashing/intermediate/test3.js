export const test3 = [
  {
    question: "What is the primary goal of a hash function in a hash table?",
    options: [
      "To reduce collisions",
      "To ensure uniqueness of keys",
      "To store data efficiently",
      "To sort the keys",
    ],
    correctAnswer: "To reduce collisions",
    explanation:
      "The primary goal of a hash function is to map keys to an index in such a way that collisions are minimized.",
  },
  {
    question:
      "Which collision resolution technique involves using a secondary hash function when a collision occurs?",
    options: [
      "Quadratic probing",
      "Linear probing",
      "Double hashing",
      "Separate chaining",
    ],
    correctAnswer: "Double hashing",
    explanation:
      "Double hashing resolves collisions by using a second hash function to find a new location for the key.",
  },
  {
    question:
      "Which of the following is true about load factor in a hash table?",
    options: [
      "The higher the load factor, the better the performance",
      "A load factor of 0.5 indicates optimal performance",
      "The load factor should always be greater than 1",
      "The load factor does not impact performance",
    ],
    correctAnswer: "A load factor of 0.5 indicates optimal performance",
    explanation:
      "A load factor of 0.5 means that the hash table is half full, which ensures good performance. A higher load factor may increase collisions.",
  },
  {
    question: "In which scenario is rehashing required for a hash table?",
    options: [
      "When there is a collision",
      "When the hash table is too full",
      "When the hash function is weak",
      "When a key is deleted",
    ],
    correctAnswer: "When the hash table is too full",
    explanation:
      "Rehashing occurs when the load factor becomes too high, leading to frequent collisions and slower operations.",
  },
  {
    question:
      "What is a common way to handle collisions in a hash table with separate chaining?",
    options: [
      "Increase table size",
      "Use quadratic probing",
      "Link multiple elements in a list at the same index",
      "Apply rehashing",
    ],
    correctAnswer: "Link multiple elements in a list at the same index",
    explanation:
      "Separate chaining handles collisions by using a linked list at each hash table index, allowing multiple elements to be stored at the same index.",
  },
  {
    question: "Which method is used to avoid clustering in open addressing?",
    options: [
      "Separate chaining",
      "Quadratic probing",
      "Linear probing",
      "Double hashing",
    ],
    correctAnswer: "Double hashing",
    explanation:
      "Double hashing reduces clustering by applying a second hash function when collisions occur.",
  },
  {
    question:
      "What is a common problem that arises when using a poor hash function?",
    options: [
      "Increase in memory usage",
      "More frequent collisions",
      "Improved performance",
      "Faster insertion and deletion",
    ],
    correctAnswer: "More frequent collisions",
    explanation:
      "A poor hash function can result in many keys hashing to the same index, increasing the number of collisions and degrading performance.",
  },
  {
    question:
      "In which type of hash table collision resolution does each index hold a linked list?",
    options: [
      "Open addressing",
      "Separate chaining",
      "Quadratic probing",
      "Double hashing",
    ],
    correctAnswer: "Separate chaining",
    explanation:
      "In separate chaining, each hash table index contains a linked list, which stores all elements that hash to the same index.",
  },
  {
    question:
      "Which of the following operations is performed in a hash table when the load factor exceeds a certain threshold?",
    options: ["Insertion", "Deletion", "Rehashing", "Sorting"],
    correctAnswer: "Rehashing",
    explanation:
      "When the load factor exceeds a certain threshold, rehashing is performed to increase the size of the hash table and distribute keys more evenly.",
  },
  {
    question: "In the context of a hash table, what does 'rehashing' mean?",
    options: [
      "Hashing the same key again",
      "Resizing the hash table and reapplying the hash function to existing keys",
      "Removing unused hash entries",
      "Resorting the keys in the hash table",
    ],
    correctAnswer:
      "Resizing the hash table and reapplying the hash function to existing keys",
    explanation:
      "Rehashing involves resizing the table and recalculating the positions of all the keys using the hash function.",
  },
  {
    question:
      "What is the ideal load factor for a hash table to balance performance and memory usage?",
    options: ["0.1", "0.5", "0.7", "1.0"],
    correctAnswer: "0.7",
    explanation:
      "A load factor of 0.7 is often considered optimal, providing a good balance between space efficiency and minimizing collisions.",
  },
  {
    question: "How does linear probing resolve collisions?",
    options: [
      "By chaining elements into a linked list",
      "By finding the next available slot in the hash table",
      "By using a secondary hash function",
      "By randomly picking an index",
    ],
    correctAnswer: "By finding the next available slot in the hash table",
    explanation:
      "Linear probing searches for the next available slot sequentially when a collision occurs.",
  },
  {
    question:
      "In a hash table, which term refers to the time it takes to search for a key?",
    options: [
      "Time complexity",
      "Access time",
      "Hashing time",
      "Retrieval time",
    ],
    correctAnswer: "Time complexity",
    explanation:
      "Time complexity refers to the measure of how long an operation (like search) takes in a hash table, ideally O(1) for average cases.",
  },
  {
    question:
      "What happens when a key with a previously calculated hash value is inserted again in a hash table?",
    options: [
      "It overwrites the existing value",
      "It creates a new hash function",
      "It causes a collision",
      "It deletes the previous key",
    ],
    correctAnswer: "It causes a collision",
    explanation:
      "When a key hashes to an already occupied index, a collision occurs.",
  },
  {
    question: "What is a key benefit of using a well-designed hash table?",
    options: [
      "Faster lookups and retrievals",
      "Better space complexity",
      "Simpler algorithmic design",
      "Increased memory overhead",
    ],
    correctAnswer: "Faster lookups and retrievals",
    explanation:
      "A well-designed hash table provides constant time complexity for lookups and retrievals, improving efficiency.",
  },
  {
    question:
      "In the context of a hash table, what does 'collisions' refer to?",
    options: [
      "Two keys having the same hash value",
      "Two keys having different hash values",
      "Keys that hash to adjacent slots",
      "Empty slots in a hash table",
    ],
    correctAnswer: "Two keys having the same hash value",
    explanation:
      "Collisions occur when two keys produce the same hash value, resulting in them trying to occupy the same slot.",
  },
  {
    question:
      "Which collision resolution technique uses the concept of quadratic probing?",
    options: [
      "Open addressing",
      "Separate chaining",
      "Double hashing",
      "Rehashing",
    ],
    correctAnswer: "Open addressing",
    explanation:
      "Quadratic probing is a collision resolution method used in open addressing, where the next available slot is found by applying a quadratic function.",
  },
  {
    question:
      "Which hash function property ensures that the keys are distributed uniformly across the table?",
    options: ["Deterministic", "Simple", "Uniformity", "Compatibility"],
    correctAnswer: "Uniformity",
    explanation:
      "A uniform hash function ensures that the keys are distributed evenly across the hash table, minimizing collisions.",
  },
  {
    question: "When does a hash table typically need to be rehashed?",
    options: [
      "When the table is half full",
      "When the table is full",
      "When the load factor becomes too high",
      "When the keys are hashed incorrectly",
    ],
    correctAnswer: "When the load factor becomes too high",
    explanation:
      "Rehashing is necessary when the load factor exceeds a certain threshold to ensure good performance.",
  },
  {
    question:
      "What is the advantage of using separate chaining over linear probing?",
    options: [
      "No need for resizing",
      "Fewer collisions",
      "No clustering",
      "Faster search times",
    ],
    correctAnswer: "No clustering",
    explanation:
      "Separate chaining avoids clustering, which is common in linear probing, by allowing multiple elements at the same index using linked lists.",
  },
];
