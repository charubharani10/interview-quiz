export const test5 = [
  {
    question: "What is the main purpose of a hash table?",
    options: [
      "To perform linear search efficiently",
      "To store key-value pairs for fast access",
      "To sort data in ascending order",
      "To implement a queue",
    ],
    correctAnswer: "To store key-value pairs for fast access",
    explanation:
      "A hash table stores key-value pairs and provides efficient access to values based on the keys.",
  },
  {
    question: "In which scenario would you prefer to use a hash table?",
    options: [
      "When you need ordered data",
      "When you want fast lookup by key",
      "When you need to handle large datasets",
      "When you need to perform recursive operations",
    ],
    correctAnswer: "When you want fast lookup by key",
    explanation:
      "Hash tables are ideal for situations where fast access to elements based on a unique key is required.",
  },
  {
    question:
      "Which of the following is a potential problem when using hash tables?",
    options: [
      "Excessive memory usage",
      "Difficulty in retrieving keys",
      "Collisions",
      "High time complexity for insertion",
    ],
    correctAnswer: "Collisions",
    explanation:
      "Collisions occur when two different keys are hashed to the same index, causing potential performance issues.",
  },
  {
    question:
      "Which method is commonly used to handle collisions in hash tables?",
    options: [
      "Multiplicative hashing",
      "Probing and chaining",
      "Linear sorting",
      "Bitwise operations",
    ],
    correctAnswer: "Probing and chaining",
    explanation:
      "Collisions are often handled through probing (open addressing) or chaining, where elements at the same hash index are stored in linked lists.",
  },
  {
    question:
      "In a hash table, which of the following statements is true about the time complexity of search operation in the best case?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In the best-case scenario, searching for an element in a hash table can take constant time, O(1), if there are no collisions.",
  },
  {
    question: "How does chaining resolve collisions in a hash table?",
    options: [
      "By storing multiple elements at each index using linked lists",
      "By increasing the table size",
      "By performing a secondary hash",
      "By using a more complex hash function",
    ],
    correctAnswer:
      "By storing multiple elements at each index using linked lists",
    explanation:
      "Chaining resolves collisions by linking multiple elements at the same hash index through a linked list.",
  },
  {
    question:
      "What is the primary function of the hash function in a hash table?",
    options: [
      "To ensure that all keys are stored in ascending order",
      "To generate a unique index for each key",
      "To reduce the time complexity of sorting operations",
      "To create a random index for each key",
    ],
    correctAnswer: "To generate a unique index for each key",
    explanation:
      "The hash function takes a key as input and generates a unique index to map the key to a specific location in the hash table.",
  },
  {
    question:
      "Which of the following is a disadvantage of chaining as a collision resolution method?",
    options: [
      "It requires additional memory to store linked lists",
      "It increases time complexity for insertion",
      "It reduces memory usage",
      "It makes hash table operations faster",
    ],
    correctAnswer: "It requires additional memory to store linked lists",
    explanation:
      "Chaining requires additional memory to store the linked lists at each hash table index, potentially leading to higher space complexity.",
  },
  {
    question: "What happens to a hash table when the load factor exceeds 1?",
    options: [
      "It shrinks",
      "It triggers rehashing to increase its size",
      "It performs better",
      "It remains unaffected",
    ],
    correctAnswer: "It triggers rehashing to increase its size",
    explanation:
      "When the load factor exceeds 1, the hash table needs to be resized and rehashed to ensure efficient performance and avoid excessive collisions.",
  },
  {
    question: "What is a common strategy to reduce collisions in a hash table?",
    options: [
      "Use a larger hash table",
      "Use a better hash function",
      "Use open addressing",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Reducing collisions can be achieved by using a better hash function, resizing the table, or employing open addressing techniques.",
  },
  {
    question: "What is the purpose of a hash function in a hash table?",
    options: [
      "To sort the keys in the table",
      "To determine the index where the key-value pair is stored",
      "To resolve collisions",
      "To remove duplicate keys",
    ],
    correctAnswer: "To determine the index where the key-value pair is stored",
    explanation:
      "A hash function maps a key to an index in the hash table, which is where the key-value pair will be stored.",
  },
  {
    question: "What is a hash collision?",
    options: [
      "When two different keys are hashed to the same index",
      "When a key is hashed to a negative index",
      "When a hash table is full",
      "When an element is deleted from the hash table",
    ],
    correctAnswer: "When two different keys are hashed to the same index",
    explanation:
      "A hash collision occurs when two different keys produce the same hash value, causing a conflict in the table.",
  },
  {
    question:
      "Which of the following is a method used to handle hash collisions?",
    options: [
      "Hashing again",
      "Linear probing",
      "Inverting the hash function",
      "Rehashing the keys",
    ],
    correctAnswer: "Linear probing",
    explanation:
      "Linear probing is a collision resolution technique where, upon collision, the algorithm checks the next available index.",
  },
  {
    question: "What is the load factor in a hash table?",
    options: [
      "The number of elements in the table divided by the total number of possible slots",
      "The number of collisions divided by the number of elements",
      "The total size of the table",
      "The number of keys that hash to the same index",
    ],
    correctAnswer:
      "The number of elements in the table divided by the total number of possible slots",
    explanation:
      "The load factor is calculated by dividing the number of elements by the total capacity of the hash table.",
  },
  {
    question: "In which scenario would you need to resize a hash table?",
    options: [
      "When the number of elements is less than half the table's capacity",
      "When the hash function produces a negative hash value",
      "When the load factor exceeds a certain threshold",
      "When collisions are too rare",
    ],
    correctAnswer: "When the load factor exceeds a certain threshold",
    explanation:
      "If the load factor exceeds the threshold (typically 0.7 or 0.75), the hash table needs to be resized to accommodate more elements and reduce collisions.",
  },
  {
    question: "What is the purpose of rehashing in a hash table?",
    options: [
      "To increase the hash function's efficiency",
      "To handle hash collisions",
      "To resize the table and rehash all existing keys to a new table",
      "To sort the hash table's keys",
    ],
    correctAnswer:
      "To resize the table and rehash all existing keys to a new table",
    explanation:
      "Rehashing involves creating a new table with a larger size and rehashing all keys to ensure efficient access and fewer collisions.",
  },
  {
    question: "How does open addressing resolve hash collisions?",
    options: [
      "By storing collisions in separate hash tables",
      "By using a different hash function",
      "By searching for the next available empty slot in the table",
      "By increasing the size of the hash table",
    ],
    correctAnswer:
      "By searching for the next available empty slot in the table",
    explanation:
      "Open addressing resolves collisions by finding the next empty slot in the hash table, rather than using linked lists or secondary tables.",
  },
  {
    question: "Which of the following is a disadvantage of linear probing?",
    options: [
      "It is slow compared to chaining",
      "It can lead to clustering, where groups of consecutive slots are filled",
      "It doesn't handle collisions well",
      "It requires more memory",
    ],
    correctAnswer:
      "It can lead to clustering, where groups of consecutive slots are filled",
    explanation:
      "Linear probing can cause clustering, where multiple collisions result in a group of consecutive occupied slots, making further operations slow.",
  },
  {
    question:
      "Which of the following is a hash table operation that takes constant time in the best case?",
    options: ["Search", "Insert", "Delete", "All of the above"],
    correctAnswer: "All of the above",
    explanation:
      "In the best-case scenario, hash table operations such as search, insert, and delete can all take constant time, O(1).",
  },
  {
    question:
      "What is the time complexity for searching an element in a hash table when there are no collisions?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "If there are no collisions, searching in a hash table takes constant time, O(1), because the hash function directly maps the key to an index.",
  },
  {
    question: "When should you use a hash table instead of an array?",
    options: [
      "When you need fast lookup by key",
      "When you need to store elements in sorted order",
      "When you need to perform quick mathematical operations",
      "When elements are sequentially indexed",
    ],
    correctAnswer: "When you need fast lookup by key",
    explanation:
      "Hash tables are ideal for scenarios where you need fast access to elements by a unique key, whereas arrays are better for ordered or sequential access.",
  },
];
