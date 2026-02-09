export const test4 = [
  {
    question:
      "Which of the following is a characteristic of a good hash function?",
    options: [
      "It should produce a large number of collisions",
      "It should distribute keys uniformly across the hash table",
      "It should be easy to compute but difficult to reverse",
      "It should store keys in sequential order",
    ],
    correctAnswer: "It should distribute keys uniformly across the hash table",
    explanation:
      "A good hash function should evenly distribute keys across the hash table to minimize collisions and improve search performance.",
  },
  {
    question: "What does 'load factor' represent in a hash table?",
    options: [
      "The number of collisions in the table",
      "The number of empty slots in the table",
      "The ratio of elements to the size of the table",
      "The amount of space used by the table",
    ],
    correctAnswer: "The ratio of elements to the size of the table",
    explanation:
      "The load factor is the ratio of the number of elements in the hash table to the total number of slots in the table.",
  },
  {
    question:
      "In a hash table, what will happen if the load factor exceeds a certain threshold?",
    options: [
      "The hash table will shrink in size",
      "The hash table will rehash and increase its size",
      "The hash table will ignore new entries",
      "The table will automatically discard elements",
    ],
    correctAnswer: "The hash table will rehash and increase its size",
    explanation:
      "When the load factor becomes too high, the hash table is resized (rehashing) to prevent excessive collisions and maintain efficiency.",
  },
  {
    question:
      "What is the time complexity of inserting a key into a hash table using chaining?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Inserting a key into a hash table using chaining is typically O(1), assuming the hash function distributes keys uniformly and the table doesn't need resizing.",
  },
  {
    question:
      "What is the primary advantage of using chaining over open addressing for collision resolution?",
    options: [
      "It requires less memory",
      "It handles collisions more efficiently",
      "It avoids clustering",
      "It makes searching faster",
    ],
    correctAnswer: "It avoids clustering",
    explanation:
      "Chaining helps avoid clustering that can occur with open addressing and allows more flexible collision resolution by using linked lists.",
  },
  {
    question: "Which of the following is an example of a hash function?",
    options: [
      "Division method",
      "Multiplicative method",
      "Mid-square method",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "All the mentioned methods—division, multiplicative, and mid-square—are examples of hash functions used in hash tables.",
  },
  {
    question:
      "What is the disadvantage of using a poor hash function in a hash table?",
    options: [
      "It increases the memory usage",
      "It leads to an even distribution of keys",
      "It increases the number of collisions, slowing down operations",
      "It causes the table to shrink in size",
    ],
    correctAnswer:
      "It increases the number of collisions, slowing down operations",
    explanation:
      "A poor hash function can cause many collisions, leading to longer search and insertion times due to the inefficient distribution of keys.",
  },
  {
    question:
      "Which of the following is a situation where open addressing works well for resolving collisions?",
    options: [
      "When the table is full",
      "When the load factor is very high",
      "When the table has a low load factor",
      "When the hash function is poor",
    ],
    correctAnswer: "When the table has a low load factor",
    explanation:
      "Open addressing works best when the load factor is low because it minimizes the number of collisions and probing steps.",
  },
  {
    question: "How does double hashing handle collisions in a hash table?",
    options: [
      "By using a secondary hash function to calculate a new index",
      "By linking elements in a chain",
      "By discarding the colliding key",
      "By shrinking the table size",
    ],
    correctAnswer:
      "By using a secondary hash function to calculate a new index",
    explanation:
      "Double hashing resolves collisions by applying a second hash function to compute a new index for a colliding key.",
  },
  {
    question:
      "Which of the following is not a method of collision resolution in hash tables?",
    options: ["Chaining", "Linear probing", "Quick sorting", "Double hashing"],
    correctAnswer: "Quick sorting",
    explanation:
      "Quick sorting is a sorting algorithm, not a collision resolution technique in hash tables.",
  },
  {
    question:
      "What is the time complexity of searching for a key in a hash table with chaining?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Searching for a key in a hash table using chaining is typically O(1), assuming the hash function is good and the chains are not long.",
  },
  {
    question: "What is the primary goal of hashing in a data structure?",
    options: [
      "To sort the data",
      "To store data in an unordered format",
      "To map data to a fixed size",
      "To minimize collisions",
    ],
    correctAnswer: "To map data to a fixed size",
    explanation:
      "Hashing maps data to a fixed-size table by using a hash function, allowing for fast data retrieval and storage.",
  },
  {
    question: "In a hash table, what does a collision occur?",
    options: [
      "When two keys are hashed to the same index",
      "When a key is not found",
      "When a key is deleted",
      "When a hash table is resized",
    ],
    correctAnswer: "When two keys are hashed to the same index",
    explanation:
      "Collisions occur when two different keys are mapped to the same index in a hash table.",
  },
  {
    question:
      "Which of the following is an example of a collision resolution technique in a hash table?",
    options: ["Sorting", "Chaining", "Recursion", "Arrays"],
    correctAnswer: "Chaining",
    explanation:
      "Chaining is a technique used to resolve collisions by storing multiple elements at the same hash index using linked lists.",
  },
  {
    question: "In open addressing, how does the hash table handle collisions?",
    options: [
      "By using a secondary hash function",
      "By resizing the table",
      "By looking for the next available index in the table",
      "By chaining elements at the same index",
    ],
    correctAnswer: "By looking for the next available index in the table",
    explanation:
      "Open addressing resolves collisions by probing for the next available index within the table.",
  },
  {
    question:
      "What is the typical time complexity of inserting an element in a hash table using chaining?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Inserting an element in a hash table using chaining typically takes constant time, O(1), unless the hash function performs poorly.",
  },
  {
    question: "What happens when the hash table reaches its maximum capacity?",
    options: [
      "The table shrinks",
      "New elements are ignored",
      "The table rehashes and grows",
      "All elements are deleted",
    ],
    correctAnswer: "The table rehashes and grows",
    explanation:
      "When the hash table reaches its maximum capacity, it is resized and rehashed to accommodate more elements.",
  },
  {
    question: "What is a common example of a hash function?",
    options: [
      "The modulus operator (%)",
      "The division method",
      "The mid-square method",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Common hash functions include the modulus operator, division method, and mid-square method, all of which are used to map keys to indices.",
  },
  {
    question:
      "Which of the following is a disadvantage of using open addressing for collision resolution?",
    options: [
      "Requires additional memory",
      "May lead to clustering",
      "Slows down retrieval speed",
      "Uses linked lists",
    ],
    correctAnswer: "May lead to clustering",
    explanation:
      "Open addressing can cause clustering, where elements are grouped together, leading to inefficient probing and longer search times.",
  },
  {
    question: "How can the load factor in a hash table be calculated?",
    options: [
      "Number of collisions divided by the number of slots",
      "Number of elements divided by the table size",
      "Table size divided by the number of elements",
      "Number of elements minus the number of collisions",
    ],
    correctAnswer: "Number of elements divided by the table size",
    explanation:
      "The load factor is calculated by dividing the number of elements by the total number of slots in the hash table.",
  },
  {
    question:
      "What is the best-case time complexity for searching for an element in a hash table with chaining?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In the best case, searching in a hash table using chaining takes constant time, O(1), when there are no collisions.",
  },
  {
    question: "Which of the following is true about a hash function?",
    options: [
      "It should always result in a unique index for each key",
      "It should map keys to a fixed size output",
      "It should minimize the number of collisions",
      "Both B and C are true",
    ],
    correctAnswer: "Both B and C are true",
    explanation:
      "A good hash function should map keys to a fixed-size output and minimize the number of collisions to ensure efficient performance.",
  },
];
