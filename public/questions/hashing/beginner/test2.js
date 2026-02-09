export const test2 = [
  {
    question: "What is the primary purpose of a hash function?",
    options: [
      "To generate unique IDs",
      "To map data to a fixed-size value",
      "To store elements in an array",
      "To increase the array size",
    ],
    correctAnswer: "To map data to a fixed-size value",
    explanation:
      "A hash function is used to map data to a fixed-size value, allowing fast data retrieval in hash tables.",
  },
  {
    question: "What is a hash table?",
    options: [
      "A data structure that maps keys to values using a hash function",
      "A list of elements stored in a sequential manner",
      "A method to sort elements in a table",
      "A collection of key-value pairs with no specific structure",
    ],
    correctAnswer:
      "A data structure that maps keys to values using a hash function",
    explanation:
      "A hash table is a data structure that uses a hash function to map keys to their associated values, ensuring efficient lookups.",
  },
  {
    question:
      "Which of the following is NOT a valid way to handle hash collisions?",
    options: [
      "Chaining",
      "Open addressing",
      "Linear probing",
      "Hash code increase",
    ],
    correctAnswer: "Hash code increase",
    explanation:
      "Increasing the hash code does not handle collisions; it's handled by techniques like chaining or open addressing.",
  },
  {
    question:
      "What is a common problem when the hash table’s load factor becomes too high?",
    options: [
      "It becomes slower due to collisions",
      "It automatically resizes",
      "The table becomes too large",
      "It generates unique hash values",
    ],
    correctAnswer: "It becomes slower due to collisions",
    explanation:
      "A high load factor means more collisions, which can slow down the hash table operations.",
  },
  {
    question: "Which of the following is an example of a dynamic hash table?",
    options: [
      "A table with fixed size",
      "A table that automatically resizes when needed",
      "A table with no collision handling",
      "A table that stores values without any keys",
    ],
    correctAnswer: "A table that automatically resizes when needed",
    explanation:
      "Dynamic hash tables resize when the number of elements grows, allowing them to maintain performance.",
  },
  {
    question:
      "In which scenario does open addressing perform better than chaining?",
    options: [
      "When the hash table is sparse",
      "When the hash table is full",
      "When collisions are rare",
      "When memory is limited",
    ],
    correctAnswer: "When memory is limited",
    explanation:
      "Open addressing stores all elements directly in the table, saving memory compared to chaining, which uses additional linked lists.",
  },
  {
    question: "What is a perfect hash function?",
    options: [
      "A hash function that produces unique values for every key",
      "A hash function that resolves all collisions",
      "A hash function that uses linear probing",
      "A hash function that stores values in an array",
    ],
    correctAnswer: "A hash function that produces unique values for every key",
    explanation:
      "A perfect hash function produces unique hash values for every key, eliminating collisions altogether.",
  },
  {
    question:
      "What is the time complexity of searching for an element in a well-designed hash table?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "In a well-designed hash table, searching for an element can be done in constant time, O(1).",
  },
  {
    question:
      "What happens when the load factor of a hash table exceeds a predefined threshold?",
    options: [
      "The hash table is expanded",
      "The table shrinks",
      "New keys are discarded",
      "All elements are rehashed",
    ],
    correctAnswer: "The hash table is expanded",
    explanation:
      "When the load factor exceeds a certain threshold, the hash table is resized and rehashed to accommodate more elements.",
  },
  {
    question: "What is the best way to avoid collisions in a hash table?",
    options: [
      "Using a complex hash function",
      "Increasing the size of the hash table",
      "Using a prime number for table size",
      "Using chaining",
    ],
    correctAnswer: "Using a complex hash function",
    explanation:
      "A well-designed, complex hash function minimizes collisions by distributing the keys evenly across the hash table.",
  },
  {
    question: "What is a hash collision?",
    options: [
      "When two keys are stored in the same hash bucket",
      "When two different keys have different hash values",
      "When a hash table grows too large",
      "When the hash function produces a unique value",
    ],
    correctAnswer: "When two keys are stored in the same hash bucket",
    explanation:
      "A hash collision occurs when two different keys are mapped to the same hash value and hence the same hash bucket.",
  },
  {
    question:
      "Which data structure is typically used to handle hash collisions in chaining?",
    options: ["Stack", "Queue", "Linked list", "Array"],
    correctAnswer: "Linked list",
    explanation:
      "In chaining, each hash bucket stores a linked list of key-value pairs that hash to the same value.",
  },
  {
    question:
      "What is the time complexity of inserting an element into a hash table with chaining?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "Insertion into a hash table with chaining can be done in constant time, O(1), if there are no collisions.",
  },
  {
    question:
      "In open addressing, what is the primary method used to handle collisions?",
    options: ["Linear probing", "Hashing", "Chaining", "Rehashing"],
    correctAnswer: "Linear probing",
    explanation:
      "Linear probing handles collisions in open addressing by finding the next available slot in the hash table.",
  },
  {
    question:
      "Which of the following is the most common technique used in a hash table to ensure quick lookups?",
    options: [
      "Using prime numbers for the table size",
      "Double hashing",
      "Linear probing",
      "Chaining",
    ],
    correctAnswer: "Using prime numbers for the table size",
    explanation:
      "Using a prime number for the hash table size helps reduce collisions and improves lookup efficiency.",
  },
  {
    question: "What happens when a hash table’s load factor exceeds 1.0?",
    options: [
      "It expands automatically",
      "It shrinks automatically",
      "It becomes slower due to increased collisions",
      "It creates a new hash function",
    ],
    correctAnswer: "It expands automatically",
    explanation:
      "When the load factor exceeds 1.0, the hash table is resized to accommodate more elements and reduce collisions.",
  },
  {
    question: "What is the purpose of rehashing in a hash table?",
    options: [
      "To shrink the hash table",
      "To resolve collisions",
      "To increase the size and redistribute the elements",
      "To delete unused keys",
    ],
    correctAnswer: "To increase the size and redistribute the elements",
    explanation:
      "Rehashing occurs when a hash table grows, and it redistributes elements to ensure an even distribution of keys.",
  },
  {
    question:
      "What is the time complexity of deleting an element from a hash table with open addressing?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "Deletion from a hash table using open addressing can typically be done in constant time, O(1), if there are no collisions.",
  },
  {
    question: "In which situation is double hashing most useful?",
    options: [
      "When there is a high load factor",
      "When a hash table is small",
      "When using chaining",
      "When the keys are sequential numbers",
    ],
    correctAnswer: "When there is a high load factor",
    explanation:
      "Double hashing is used to reduce collisions in hash tables, particularly when the load factor is high.",
  },
  {
    question:
      "What is a common strategy to improve the performance of a hash function?",
    options: [
      "Using a hash table of fixed size",
      "Minimizing the number of collisions",
      "Storing values instead of keys",
      "Increasing the table’s capacity to match the number of elements",
    ],
    correctAnswer: "Minimizing the number of collisions",
    explanation:
      "A good hash function minimizes collisions, ensuring efficient lookups, insertions, and deletions.",
  },
];
