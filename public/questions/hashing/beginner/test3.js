export const test3 = [
  {
    question:
      "What is the time complexity of searching for an element in a hash table with chaining?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "In chaining, if there are no collisions, searching for an element can be done in constant time, O(1).",
  },
  {
    question:
      "What is the best-case time complexity of inserting an element into a hash table?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "In the best case, hash table insertion happens in constant time, O(1), when there are no collisions.",
  },
  {
    question: "In which situation does a hash function perform poorly?",
    options: [
      "When it produces a uniform distribution of hash values",
      "When it has a small hash table size",
      "When there are too many collisions",
      "When the table size is large",
    ],
    correctAnswer: "When there are too many collisions",
    explanation:
      "A poor hash function leads to many collisions, which can degrade the performance of the hash table.",
  },
  {
    question:
      "Which of the following is a key disadvantage of open addressing?",
    options: [
      "Increased memory usage",
      "Slower search times",
      "Potential clustering of elements",
      "Increased risk of collisions",
    ],
    correctAnswer: "Potential clustering of elements",
    explanation:
      "Open addressing can lead to clustering, where groups of consecutive elements form, increasing the chances of further collisions.",
  },
  {
    question: "What is the purpose of a hash function?",
    options: [
      "To find the largest element in a set",
      "To map a key to an index in a hash table",
      "To store elements in a sorted order",
      "To handle collisions in a hash table",
    ],
    correctAnswer: "To map a key to an index in a hash table",
    explanation:
      "The hash function maps a key to an index in the hash table, allowing for efficient storage and retrieval.",
  },
  {
    question:
      "What is the time complexity of rehashing a hash table when the table becomes full?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "Rehashing involves creating a new table and copying all elements, making the complexity O(n), where n is the number of elements.",
  },
  {
    question:
      "Which of the following is true about the load factor in a hash table?",
    options: [
      "It represents the number of collisions",
      "It represents the ratio of the number of elements to the table size",
      "It determines the maximum number of elements the table can hold",
      "It affects the hash function’s efficiency",
    ],
    correctAnswer:
      "It represents the ratio of the number of elements to the table size",
    explanation:
      "The load factor is the ratio of the number of elements to the size of the hash table, and it helps determine when to resize the table.",
  },
  {
    question: "Which strategy is used to avoid clustering in open addressing?",
    options: [
      "Double hashing",
      "Chaining",
      "Linear probing",
      "Separate chaining",
    ],
    correctAnswer: "Double hashing",
    explanation:
      "Double hashing reduces clustering by using a second hash function to determine the next slot when a collision occurs.",
  },
  {
    question: "What is the purpose of a rehash operation in a hash table?",
    options: [
      "To delete all elements in the table",
      "To increase the table size and reduce collisions",
      "To create a new hash function",
      "To sort the elements",
    ],
    correctAnswer: "To increase the table size and reduce collisions",
    explanation:
      "Rehashing resizes the table and redistributes elements to improve performance and reduce collisions.",
  },
  {
    question: "What happens when two keys are hashed to the same value?",
    options: [
      "The first key is overwritten by the second key",
      "A collision occurs and needs to be handled",
      "The second key is ignored",
      "The hash table is resized automatically",
    ],
    correctAnswer: "A collision occurs and needs to be handled",
    explanation:
      "When two keys hash to the same value, it results in a collision, which needs to be handled either by chaining or open addressing.",
  },
  {
    question:
      "Which of the following is a technique used in hash tables to reduce the time complexity of insertion?",
    options: [
      "Rehashing",
      "Linear probing",
      "Hashing prime numbers",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Rehashing, linear probing, and using prime numbers for table size all help in reducing insertion time complexity by minimizing collisions.",
  },
  {
    question:
      "Which of the following is an example of a collision resolution technique used in hashing?",
    options: [
      "Linear probing",
      "Double hashing",
      "Chaining",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Linear probing, double hashing, and chaining are all collision resolution techniques used in hash tables.",
  },
  {
    question: "What is the space complexity of a hash table with chaining?",
    options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of a hash table with chaining is proportional to the number of elements stored, which is O(n).",
  },
  {
    question:
      "Which hash function is commonly used to minimize collisions by distributing keys uniformly?",
    options: [
      "Modulo operation",
      "Multiplicative hash function",
      "Division method",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Different hash functions, including modulo, multiplicative, and division methods, can help minimize collisions by ensuring a uniform distribution of keys.",
  },
  {
    question:
      "In a hash table with chaining, what happens if the load factor exceeds a certain threshold?",
    options: [
      "The table is rehashed",
      "The table shrinks",
      "Collisions are ignored",
      "The search time decreases",
    ],
    correctAnswer: "The table is rehashed",
    explanation:
      "When the load factor exceeds a threshold, rehashing is triggered to resize the hash table and reduce collisions.",
  },
  {
    question:
      "Which of the following is not a valid method to handle collisions in a hash table?",
    options: ["Chaining", "Linear probing", "Binary search", "Double hashing"],
    correctAnswer: "Binary search",
    explanation:
      "Binary search is not a collision handling technique in hash tables; it is a search algorithm used in sorted arrays.",
  },
  {
    question: "How can the performance of a hash table be improved?",
    options: [
      "By using a good hash function",
      "By resizing the table as the number of elements grows",
      "By using proper collision resolution techniques",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Using a good hash function, resizing the table, and applying appropriate collision resolution techniques all contribute to improved hash table performance.",
  },
  {
    question: "In which case does the hash function produce a collision?",
    options: [
      "When the table size is a power of 2",
      "When two different keys map to the same index",
      "When the load factor is too low",
      "When the hash table is empty",
    ],
    correctAnswer: "When two different keys map to the same index",
    explanation:
      "A collision occurs when two different keys are mapped to the same index in the hash table.",
  },
  {
    question:
      "What is a common issue with using open addressing for collision resolution?",
    options: [
      "It requires too much space",
      "It can lead to clustering of elements",
      "It makes searching slower",
      "It automatically resizes the table",
    ],
    correctAnswer: "It can lead to clustering of elements",
    explanation:
      "In open addressing, clustering can occur when consecutive elements are placed together, resulting in longer probe sequences.",
  },
  {
    question:
      "What is the primary disadvantage of using chaining in hash tables?",
    options: [
      "It consumes more memory",
      "It increases the time complexity of search operations",
      "It may lead to longer search times if chains become long",
      "It does not handle collisions",
    ],
    correctAnswer: "It may lead to longer search times if chains become long",
    explanation:
      "In chaining, if many keys hash to the same index, long chains may form, leading to slower search times.",
  },
  {
    question: "What happens if a hash table is resized?",
    options: [
      "All keys are rehashed and redistributed into the new table",
      "The table becomes immutable",
      "The table’s capacity is reduced",
      "The elements are discarded",
    ],
    correctAnswer: "All keys are rehashed and redistributed into the new table",
    explanation:
      "When a hash table is resized, all existing elements are rehashed and redistributed into the larger table to reduce collisions.",
  },
  {
    question:
      "Which of the following hashing techniques can handle collisions by using a secondary hash function?",
    options: [
      "Linear probing",
      "Double hashing",
      "Chaining",
      "None of the above",
    ],
    correctAnswer: "Double hashing",
    explanation:
      "Double hashing uses a secondary hash function to calculate a new position for a key if a collision occurs.",
  },
];
