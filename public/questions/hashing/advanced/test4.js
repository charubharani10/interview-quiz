export const test4 = [
  {
    question:
      "What is the primary disadvantage of using open addressing in hash tables?",
    options: [
      "It has a high space complexity",
      "It can lead to clustering and performance degradation in the presence of collisions",
      "It increases the load factor exponentially",
      "It cannot handle deletion operations efficiently",
    ],
    correctAnswer:
      "It can lead to clustering and performance degradation in the presence of collisions",
    explanation:
      "Open addressing can result in clustering, especially when the load factor is high, which can degrade the performance of insert, delete, and search operations.",
  },
  {
    question:
      "Which of the following statements about universal hashing is true?",
    options: [
      "It reduces the probability of collisions by selecting a random hash function from a set of functions for each operation.",
      "It guarantees zero collisions for all inputs.",
      "It uses a deterministic function to handle all key types.",
      "It increases the time complexity of hash table operations.",
    ],
    correctAnswer:
      "It reduces the probability of collisions by selecting a random hash function from a set of functions for each operation.",
    explanation:
      "Universal hashing minimizes collisions by randomly selecting a hash function from a set of possible functions, ensuring uniform distribution of keys.",
  },
  {
    question:
      "What is the purpose of using a prime number as the table size in hashing algorithms?",
    options: [
      "To ensure that all keys are mapped uniquely",
      "To minimize the chances of collision by reducing common divisors",
      "To make the hash table more compact",
      "To increase the hash code length",
    ],
    correctAnswer:
      "To minimize the chances of collision by reducing common divisors",
    explanation:
      "Prime numbers help reduce collisions by ensuring that there are fewer common divisors between the table size and the hash values of the keys.",
  },
  {
    question:
      "Which of the following hashing techniques is most likely to result in clustering when dealing with large datasets?",
    options: [
      "Separate chaining",
      "Double hashing",
      "Linear probing",
      "Cuckoo hashing",
    ],
    correctAnswer: "Linear probing",
    explanation:
      "Linear probing suffers from clustering because it searches sequentially for an available slot when a collision occurs, which can lead to a concentration of elements in consecutive slots.",
  },
  {
    question: "How does a hash table with linear probing handle collisions?",
    options: [
      "By inserting the colliding element into a linked list",
      "By finding the next available slot by linearly probing subsequent positions",
      "By using multiple hash functions",
      "By resizing the table before inserting the element",
    ],
    correctAnswer:
      "By finding the next available slot by linearly probing subsequent positions",
    explanation:
      "In linear probing, when a collision occurs, the hash table searches sequentially from the colliding position for the next available slot.",
  },
  {
    question:
      "What is the worst-case time complexity of a hash table operation using open addressing, assuming a high load factor and a poor hash function?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst case, with a high load factor and a poor hash function, the time complexity for operations in a hash table using open addressing can degrade to O(n).",
  },
  {
    question:
      "What is the primary function of the 'rehash' operation in a hash table?",
    options: [
      "To compress the table and reduce memory usage",
      "To increase the table size and reinsert existing elements to new positions",
      "To apply a more complex hash function",
      "To sort the keys before insertion",
    ],
    correctAnswer:
      "To increase the table size and reinsert existing elements to new positions",
    explanation:
      "Rehashing increases the table size when the load factor exceeds a threshold, and redistributes the existing elements to new positions to improve performance.",
  },
  {
    question:
      "What is the typical time complexity for a search operation in a hash table using separate chaining in the worst case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst case, if all keys are hashed to the same bucket, the search operation will take O(n) time to traverse the entire list.",
  },
  {
    question:
      "Which of the following best describes the principle of 'load factor' in a hash table?",
    options: [
      "The ratio of keys inserted to the size of the table",
      "The ratio of empty slots to the total number of slots",
      "The average time complexity of operations",
      "The maximum number of elements that can be inserted",
    ],
    correctAnswer: "The ratio of keys inserted to the size of the table",
    explanation:
      "The load factor is the ratio of the number of elements (keys) to the size of the table, which helps determine when the table should be resized.",
  },
  {
    question:
      "What is the primary advantage of cuckoo hashing over linear probing in terms of collision resolution?",
    options: [
      "It avoids clustering by using multiple hash functions and evicting elements",
      "It provides faster insertion by using smaller hash tables",
      "It ensures that collisions are resolved using a single hash function",
      "It improves memory usage by dynamically resizing the table",
    ],
    correctAnswer:
      "It avoids clustering by using multiple hash functions and evicting elements",
    explanation:
      "Cuckoo hashing resolves collisions by evicting the existing element and reinserting it in a new location, which helps avoid clustering and maintains a balanced load.",
  },
  {
    question:
      "Which of the following hashing techniques ensures that each key is hashed to a unique index without any collisions?",
    options: [
      "Perfect hashing",
      "Open addressing",
      "Separate chaining",
      "Double hashing",
    ],
    correctAnswer: "Perfect hashing",
    explanation:
      "Perfect hashing is a hashing technique that ensures no collisions by creating a hash function that uniquely maps each key to a distinct index.",
  },
  {
    question:
      "In a hash table using separate chaining, how does the insertion time complexity change when the table becomes full?",
    options: [
      "It remains O(1)",
      "It becomes O(log n)",
      "It becomes O(n)",
      "It becomes O(n^2)",
    ],
    correctAnswer: "It becomes O(n)",
    explanation:
      "When the hash table becomes full, insertions require finding the appropriate bucket, which may take O(n) time if many keys hash to the same bucket.",
  },
  {
    question:
      "Which of the following statements about the load factor in a hash table is correct?",
    options: [
      "A load factor of 0 ensures no collisions",
      "A load factor of 1 ensures maximum efficiency",
      "A higher load factor increases the probability of collisions",
      "A lower load factor leads to increased memory usage",
    ],
    correctAnswer:
      "A higher load factor increases the probability of collisions",
    explanation:
      "As the load factor increases, the table becomes more filled, which increases the likelihood of collisions, thus reducing the efficiency of hash operations.",
  },
  {
    question:
      "What is the primary disadvantage of using double hashing in a hash table?",
    options: [
      "It increases the probability of collisions",
      "It requires two hash functions, which can slow down the lookup process",
      "It increases memory usage",
      "It guarantees no collisions",
    ],
    correctAnswer:
      "It requires two hash functions, which can slow down the lookup process",
    explanation:
      "Double hashing uses two hash functions, which can slightly slow down lookup operations as both functions need to be evaluated for every collision.",
  },
  {
    question:
      "How does quadratic probing help reduce clustering in hash tables?",
    options: [
      "By using a fixed step size for each probe",
      "By using a quadratic function to search for the next available slot",
      "By resizing the table before each insertion",
      "By storing colliding elements in a linked list",
    ],
    correctAnswer:
      "By using a quadratic function to search for the next available slot",
    explanation:
      "Quadratic probing uses a quadratic function to calculate the next slot to probe, reducing primary clustering and improving distribution of keys.",
  },
  {
    question:
      "What is the time complexity of searching for an element in a hash table with separate chaining, assuming a good hash function and low load factor?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "With a good hash function and low load factor, searching in a hash table with separate chaining is typically O(1), as the elements are evenly distributed across the buckets.",
  },
  {
    question: "What is the purpose of using 'rehashing' in hash tables?",
    options: [
      "To optimize the hash function",
      "To increase the table size and improve performance during collisions",
      "To compress stored data",
      "To minimize the number of hash functions used",
    ],
    correctAnswer:
      "To increase the table size and improve performance during collisions",
    explanation:
      "Rehashing is performed when the load factor is too high, increasing the table size and redistributing the elements to reduce collisions.",
  },
  {
    question:
      "Which of the following statements about cuckoo hashing is false?",
    options: [
      "Cuckoo hashing uses multiple hash functions",
      "Cuckoo hashing involves evicting elements from their current positions",
      "Cuckoo hashing improves memory efficiency",
      "Cuckoo hashing always ensures O(1) time complexity for insertion",
    ],
    correctAnswer:
      "Cuckoo hashing always ensures O(1) time complexity for insertion",
    explanation:
      "While cuckoo hashing typically ensures constant time insertion, it may require rehashing if the table becomes too full, which can affect time complexity.",
  },
  {
    question: "What is a characteristic of perfect hashing in hash tables?",
    options: [
      "It has a high chance of collisions",
      "It requires resizing the table frequently",
      "It guarantees no collisions by using a carefully designed hash function",
      "It is slower than other hashing techniques",
    ],
    correctAnswer:
      "It guarantees no collisions by using a carefully designed hash function",
    explanation:
      "Perfect hashing ensures no collisions by designing a hash function specifically for a given set of keys, making it ideal for fixed datasets with no dynamic insertions.",
  },
  {
    question:
      "What is the average-case time complexity of search, insertion, and deletion operations in a hash table with separate chaining, assuming a good hash function and low load factor?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "With a good hash function and low load factor, all hash table operations (search, insertion, deletion) are typically O(1) on average.",
  },
];
