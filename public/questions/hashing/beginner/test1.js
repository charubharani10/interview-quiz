export const test1 = [
  {
    question: "What is the primary purpose of hashing?",
    options: [
      "To sort data",
      "To store data in a way that enables quick lookups",
      "To encrypt data",
      "To compress data",
    ],
    correctAnswer: "To store data in a way that enables quick lookups",
    explanation:
      "Hashing is used to store data efficiently and allows for fast retrieval of values based on a key.",
  },
  {
    question: "What is a hash function?",
    options: [
      "A function that generates a key from an input",
      "A function that checks the validity of data",
      "A function that sorts data",
      "A function that encrypts data",
    ],
    correctAnswer: "A function that generates a key from an input",
    explanation:
      "A hash function is used to compute a hash value, which is a unique identifier for an input (such as a string or number).",
  },
  {
    question:
      "Which data structure is commonly used to implement a hash table?",
    options: ["Array", "Stack", "Queue", "Linked List"],
    correctAnswer: "Array",
    explanation:
      "Hash tables are often implemented using arrays, where the index is calculated using a hash function.",
  },
  {
    question:
      "In a hash table, what is the term for a situation where two keys hash to the same index?",
    options: ["Collision", "Hashing Error", "Overflow", "Miss"],
    correctAnswer: "Collision",
    explanation:
      "A collision occurs when two different keys hash to the same index in a hash table.",
  },
  {
    question: "What technique is used to handle collisions in a hash table?",
    options: [
      "Linked Lists",
      "Open Addressing",
      "Chaining",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Collisions can be handled using various techniques like chaining (using linked lists) or open addressing (finding an alternate spot in the table).",
  },
  {
    question:
      "What is the average time complexity for searching, inserting, and deleting in a well-implemented hash table?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "In a well-implemented hash table, the average time complexity for searching, inserting, and deleting is O(1), assuming a good hash function and low collision rate.",
  },
  {
    question: "What is the purpose of a load factor in a hash table?",
    options: [
      "To determine the size of the hash table",
      "To decide when to resize the hash table",
      "To store hash values",
      "To increase collision probability",
    ],
    correctAnswer: "To decide when to resize the hash table",
    explanation:
      "The load factor is the ratio of the number of elements to the capacity of the hash table. When it exceeds a certain threshold, the hash table is resized.",
  },
  {
    question: "Which of the following is a disadvantage of using a hash table?",
    options: [
      "Fast access time",
      "High memory usage",
      "Increased risk of collisions",
      "Efficient search operations",
    ],
    correctAnswer: "Increased risk of collisions",
    explanation:
      "A hash table can encounter collisions, which can degrade performance if not handled properly.",
  },
  {
    question: "What is the purpose of a hash code in the context of hashing?",
    options: [
      "To compress data",
      "To generate a unique identifier for a key",
      "To sort the data",
      "To encrypt the key",
    ],
    correctAnswer: "To generate a unique identifier for a key",
    explanation:
      "A hash code is a numerical value generated from a key, used to store and retrieve values in a hash table.",
  },
  {
    question:
      "Which of the following hash table techniques involves storing values at adjacent positions when collisions occur?",
    options: ["Open Addressing", "Chaining", "Linked List", "Double Hashing"],
    correctAnswer: "Open Addressing",
    explanation:
      "Open Addressing resolves collisions by storing values at other positions within the hash table, rather than using linked lists.",
  },
  {
    question:
      "Which of the following is the best hash function property for a hash table?",
    options: ["Deterministic", "Random", "Variable", "Non-deterministic"],
    correctAnswer: "Deterministic",
    explanation:
      "A good hash function should always produce the same output (deterministic) for the same input, ensuring consistent key mapping.",
  },
  {
    question: "What is a 'bucket' in the context of hashing?",
    options: [
      "The array that stores all keys",
      "The index in the hash table",
      "The container for handling collisions",
      "The part of the hash function",
    ],
    correctAnswer: "The container for handling collisions",
    explanation:
      "In hashing, a bucket is used to store all elements that hash to the same index in the hash table, especially when collisions occur.",
  },
  {
    question:
      "Which of the following is a common way to resolve collisions in hashing?",
    options: [
      "Linear Probing",
      "Double Hashing",
      "Chaining",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Collisions can be resolved using techniques like linear probing, double hashing, and chaining.",
  },
  {
    question:
      "What is the time complexity of inserting an element into a hash table (on average)?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "In a hash table with a good hash function, the average time complexity for inserting an element is O(1).",
  },
  {
    question:
      "What happens if two keys hash to the same index and chaining is used to resolve collisions?",
    options: [
      "The second key replaces the first key",
      "Both keys are stored in a linked list at that index",
      "The second key is ignored",
      "The table expands automatically",
    ],
    correctAnswer: "Both keys are stored in a linked list at that index",
    explanation:
      "With chaining, if two keys hash to the same index, they are stored in a linked list at that index.",
  },
  {
    question: "What does the term 'hash collision' refer to?",
    options: [
      "When two elements have the same hash code",
      "When two elements are stored in different positions",
      "When the hash table is full",
      "When the keys are too large",
    ],
    correctAnswer: "When two elements have the same hash code",
    explanation:
      "A hash collision occurs when two different keys produce the same hash code, resulting in a conflict.",
  },
  {
    question:
      "Which of the following is an example of an open addressing technique to handle collisions?",
    options: ["Linked Lists", "Chaining", "Linear Probing", "Double Hashing"],
    correctAnswer: "Linear Probing",
    explanation:
      "Linear Probing is an open addressing technique where if a collision occurs, the algorithm looks for the next available slot in the array.",
  },
  {
    question:
      "Which of the following hash functions is considered to have the best distribution?",
    options: [
      "Division Method",
      "Multiplicative Hashing",
      "Universal Hashing",
      "Modulus Operation",
    ],
    correctAnswer: "Universal Hashing",
    explanation:
      "Universal Hashing is considered to produce a good distribution of hash values, minimizing collisions.",
  },
  {
    question: "What is the role of a hash table's capacity?",
    options: [
      "To determine the number of collisions",
      "To hold the keys and values",
      "To calculate the hash code",
      "To decide the size of the hash code",
    ],
    correctAnswer: "To hold the keys and values",
    explanation:
      "The capacity of a hash table refers to the number of slots or buckets available to store the keys and values.",
  },
  {
    question:
      "Which of the following can result in a hash function performing poorly?",
    options: [
      "A low load factor",
      "A large hash table",
      "A poor choice of hash function",
      "Using an array for storage",
    ],
    correctAnswer: "A poor choice of hash function",
    explanation:
      "A poor choice of hash function can lead to a high number of collisions and reduce performance.",
  },
];
