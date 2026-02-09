export const test1 = [
  {
    question:
      "What is the time complexity of inserting an element in a hash table when there are no collisions?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a hash table with no collisions, insertion takes constant time, O(1), because the index is directly computed using the hash function.",
  },
  {
    question:
      "What happens if a hash function maps multiple keys to the same index?",
    options: [
      "Hash collision occurs",
      "Hashing becomes slower",
      "The table automatically resizes",
      "The function is re-calculated",
    ],
    correctAnswer: "Hash collision occurs",
    explanation:
      "When two different keys hash to the same index, a collision occurs, which must be handled using collision resolution techniques.",
  },
  {
    question: "What is the purpose of the 'resize' operation in a hash table?",
    options: [
      "To reduce the size of the table",
      "To handle collisions more effectively",
      "To shrink the memory used",
      "To increase the capacity and reduce the load factor",
    ],
    correctAnswer: "To increase the capacity and reduce the load factor",
    explanation:
      "Resizing a hash table increases its capacity and helps reduce the load factor, minimizing collisions.",
  },
  {
    question:
      "Which of the following is NOT a common collision resolution technique in hash tables?",
    options: [
      "Linear probing",
      "Quadratic probing",
      "Separate chaining",
      "Binary search",
    ],
    correctAnswer: "Binary search",
    explanation:
      "Binary search is not a collision resolution technique. Linear probing, quadratic probing, and separate chaining are common methods used.",
  },
  {
    question: "How does quadratic probing differ from linear probing?",
    options: [
      "It uses a quadratic formula to find the next available slot",
      "It avoids collisions altogether",
      "It shifts elements to the right",
      "It requires more memory",
    ],
    correctAnswer:
      "It uses a quadratic formula to find the next available slot",
    explanation:
      "Quadratic probing uses a quadratic function (e.g., i^2) to resolve collisions, whereas linear probing increments by a fixed amount.",
  },
  {
    question: "In separate chaining, where are the colliding elements stored?",
    options: [
      "In a secondary hash table",
      "In a separate array",
      "In a linked list at the same index",
      "In the first available slot",
    ],
    correctAnswer: "In a linked list at the same index",
    explanation:
      "Separate chaining resolves collisions by creating a linked list at the same index for all colliding elements.",
  },
  {
    question:
      "What happens when the load factor of a hash table exceeds a threshold?",
    options: [
      "The table is resized",
      "The performance improves",
      "The hash function is redefined",
      "The keys are reorganized",
    ],
    correctAnswer: "The table is resized",
    explanation:
      "When the load factor exceeds a certain threshold, the hash table is resized to reduce collisions and improve performance.",
  },
  {
    question:
      "Which of the following hash functions is the simplest to implement?",
    options: [
      "Division method",
      "Multiplication method",
      "Mid-square method",
      "Hashing by sum of digits",
    ],
    correctAnswer: "Division method",
    explanation:
      "The division method is the simplest hash function, where a key is divided by the table size and the remainder is used as the index.",
  },
  {
    question: "What is the impact of a poor hash function on a hash table?",
    options: [
      "Increased collisions and performance degradation",
      "Faster search times",
      "Increased table size",
      "Fewer insertions",
    ],
    correctAnswer: "Increased collisions and performance degradation",
    explanation:
      "A poor hash function leads to more collisions, slowing down operations like search, insert, and delete.",
  },
  {
    question:
      "What is the typical load factor threshold at which resizing a hash table is triggered?",
    options: ["0.5", "0.7", "0.8", "0.9"],
    correctAnswer: "0.7",
    explanation:
      "A load factor of 0.7 is typically used as the threshold to trigger resizing in most hash table implementations.",
  },
  {
    question:
      "What is the expected time complexity of searching for a key in a well-distributed hash table?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In the best-case scenario, where there are no collisions, searching for a key takes constant time, O(1).",
  },
  {
    question: "Which of the following statements about hash functions is true?",
    options: [
      "A good hash function minimizes collisions",
      "A good hash function ensures that all keys have unique hash values",
      "A good hash function avoids resizing",
      "A good hash function generates random values",
    ],
    correctAnswer: "A good hash function minimizes collisions",
    explanation:
      "A good hash function distributes keys uniformly to minimize collisions.",
  },
  {
    question:
      "In separate chaining, what happens if multiple keys hash to the same index?",
    options: [
      "They are stored in a single linked list at that index",
      "They replace the existing element",
      "They are stored in a new hash table",
      "They are discarded",
    ],
    correctAnswer: "They are stored in a single linked list at that index",
    explanation:
      "In separate chaining, collisions are handled by storing colliding elements in a linked list at the same index.",
  },
  {
    question: "Which method is used to avoid clustering in open addressing?",
    options: [
      "Linear probing",
      "Quadratic probing",
      "Separate chaining",
      "Resizing",
    ],
    correctAnswer: "Quadratic probing",
    explanation:
      "Quadratic probing reduces clustering by using a quadratic function to search for the next available slot.",
  },
  {
    question:
      "What is the key idea behind open addressing collision resolution?",
    options: [
      "Storing colliding keys in a secondary hash table",
      "Storing colliding keys in a linked list",
      "Finding the next available slot within the same table",
      "Using a secondary hash function",
    ],
    correctAnswer: "Finding the next available slot within the same table",
    explanation:
      "Open addressing resolves collisions by probing the table for the next available slot.",
  },
  {
    question:
      "Which of the following is a key disadvantage of separate chaining?",
    options: [
      "It requires more memory",
      "It has slower search times",
      "It increases hash table size",
      "It requires a secondary hash function",
    ],
    correctAnswer: "It requires more memory",
    explanation:
      "Separate chaining uses extra memory to store linked lists, especially when collisions are frequent.",
  },
  {
    question: "What type of hash function is used in the division method?",
    options: [
      "A modulo operation",
      "A multiplication operation",
      "A bitwise operation",
      "A logarithmic operation",
    ],
    correctAnswer: "A modulo operation",
    explanation:
      "In the division method, a key is divided by the table size and the remainder is used as the hash value.",
  },
  {
    question:
      "What is the time complexity of deleting a key in a hash table using separate chaining?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In separate chaining, if you know the key’s location in the linked list, deletion takes constant time, O(1).",
  },
  {
    question: "What is the primary goal of a hash function in a hash table?",
    options: [
      "To generate a unique key",
      "To map keys to a specific index in the table",
      "To sort the keys",
      "To handle collisions",
    ],
    correctAnswer: "To map keys to a specific index in the table",
    explanation:
      "A hash function is designed to map keys to specific indices within the hash table, minimizing collisions.",
  },
  {
    question: "How do you determine the capacity of a hash table?",
    options: [
      "By the number of collisions",
      "By the number of keys",
      "By the table size specified during initialization",
      "By the hash function used",
    ],
    correctAnswer: "By the table size specified during initialization",
    explanation:
      "The capacity of a hash table is typically specified during initialization and determines the number of slots in the table.",
  },
];
