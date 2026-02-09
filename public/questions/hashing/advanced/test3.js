export const test3 = [
  {
    question:
      "What is the primary advantage of using cuckoo hashing over other collision resolution techniques?",
    options: [
      "It provides constant time lookup for all operations",
      "It avoids clustering and ensures a lower average lookup time",
      "It reduces the space complexity of hash tables",
      "It increases the likelihood of finding collisions",
    ],
    correctAnswer:
      "It avoids clustering and ensures a lower average lookup time",
    explanation:
      "Cuckoo hashing ensures that the average lookup time is constant by avoiding clustering and maintaining a balance between hash table occupancy and collisions.",
  },
  {
    question:
      "Which of the following hash functions is most suitable for hashing long strings in a hash table?",
    options: ["MurmurHash", "FNV-1a", "MD5", "SHA-256"],
    correctAnswer: "MurmurHash",
    explanation:
      "MurmurHash is a non-cryptographic hash function optimized for hashing strings, providing a good balance of speed and randomness for hash table applications.",
  },
  {
    question: "How does a hash table with chaining handle collisions?",
    options: [
      "By resizing the table",
      "By storing colliding elements in linked lists at each bucket",
      "By dropping the duplicate keys",
      "By using multiple hash functions",
    ],
    correctAnswer:
      "By storing colliding elements in linked lists at each bucket",
    explanation:
      "In chaining, each bucket in the hash table holds a linked list of elements, allowing multiple elements to be stored in the same bucket if they hash to the same index.",
  },
  {
    question:
      "In a hash table with separate chaining, what is the time complexity of a search operation in the worst case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst case, if all elements hash to the same bucket, the search operation will traverse the entire list in that bucket, resulting in O(n) time complexity.",
  },
  {
    question:
      "Which of the following best describes the concept of a load factor in a hash table?",
    options: [
      "The ratio of occupied buckets to the total number of buckets",
      "The total number of collisions divided by the table size",
      "The number of hash functions used in the table",
      "The number of successful insertions before resizing occurs",
    ],
    correctAnswer:
      "The ratio of occupied buckets to the total number of buckets",
    explanation:
      "The load factor of a hash table is the ratio of the number of elements (occupied buckets) to the total size of the table. It is an important factor in determining when to resize the table.",
  },
  {
    question:
      "In a perfect hash function, why is it important that there are no collisions?",
    options: [
      "To ensure that the keys can be stored in an encrypted form",
      "To achieve constant time complexity for all operations",
      "To minimize memory usage",
      "To allow multiple hash functions to be used",
    ],
    correctAnswer: "To achieve constant time complexity for all operations",
    explanation:
      "A perfect hash function ensures that each key maps to a unique index, allowing all operations (insertion, deletion, search) to run in constant time O(1).",
  },
  {
    question: "What is the role of a hash code in hashing algorithms?",
    options: [
      "To determine the size of the hash table",
      "To provide a cryptographic encryption of data",
      "To map a key to an index in a hash table",
      "To increase the collision probability",
    ],
    correctAnswer: "To map a key to an index in a hash table",
    explanation:
      "The hash code is generated from a key and is used to map that key to an index in the hash table. This helps locate the key quickly during search operations.",
  },
  {
    question:
      "What is the time complexity of deleting an element from a hash table using separate chaining in the average case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In the average case, deletion in a hash table using separate chaining is O(1), as it involves finding the element in a bucket and removing it from the linked list.",
  },
  {
    question:
      "Which hashing technique provides the best performance for scenarios where you expect most keys to have frequent collisions?",
    options: [
      "Separate chaining",
      "Linear probing",
      "Double hashing",
      "Cuckoo hashing",
    ],
    correctAnswer: "Cuckoo hashing",
    explanation:
      "Cuckoo hashing provides better performance in scenarios with frequent collisions because it reduces clustering and maintains a constant lookup time on average.",
  },
  {
    question: "What is the primary goal of a hash function in a hash table?",
    options: [
      "To minimize memory consumption",
      "To provide fast access to data by distributing keys uniformly across the table",
      "To store data in an encrypted format",
      "To guarantee that collisions will not occur",
    ],
    correctAnswer:
      "To provide fast access to data by distributing keys uniformly across the table",
    explanation:
      "The primary goal of a hash function is to map keys to indices in the hash table such that data can be accessed quickly and evenly distributed across the table.",
  },
  {
    question:
      "What is a hash collision and how is it resolved in a hash table using separate chaining?",
    options: [
      "A hash collision occurs when two keys have the same hash value. It is resolved by storing both keys in a linked list at the same bucket.",
      "A hash collision occurs when two keys have the same hash value. It is resolved by resizing the hash table.",
      "A hash collision occurs when two keys have different hash values. It is resolved by discarding one key.",
      "A hash collision occurs when there is no space in the hash table. It is resolved by using double hashing.",
    ],
    correctAnswer:
      "A hash collision occurs when two keys have the same hash value. It is resolved by storing both keys in a linked list at the same bucket.",
    explanation:
      "In separate chaining, when two keys hash to the same index, they are stored in a linked list at that bucket, thus resolving the collision.",
  },
  {
    question:
      "In cuckoo hashing, what happens if an insertion operation causes the eviction of an element that is already in the table?",
    options: [
      "The evicted element is discarded",
      "The evicted element is placed in another hash table",
      "The evicted element is reinserted into the hash table using a different hash function",
      "The evicted element is moved to a different bucket using linear probing",
    ],
    correctAnswer:
      "The evicted element is reinserted into the hash table using a different hash function",
    explanation:
      "Cuckoo hashing resolves collisions by evicting the element from its current location and reinserting it into the table using an alternate hash function, ensuring that every element is placed optimally.",
  },
  {
    question:
      "What is the primary advantage of using a universal hash function in a hash table?",
    options: [
      "It avoids all collisions",
      "It ensures that all keys are uniformly distributed across the table",
      "It provides constant time complexity for lookup",
      "It is faster than other hash functions",
    ],
    correctAnswer:
      "It ensures that all keys are uniformly distributed across the table",
    explanation:
      "Universal hashing aims to reduce collisions by selecting hash functions randomly from a set of hash functions, ensuring uniform distribution of keys.",
  },
  {
    question:
      "What is the main difference between the hash function used in a hash table and one used in a cryptographic hash algorithm?",
    options: [
      "A hash table function is deterministic and fast, while a cryptographic hash function emphasizes security and collision resistance.",
      "A hash table function uses encryption techniques, while a cryptographic hash function does not.",
      "A hash table function is based on asymmetric encryption, while a cryptographic hash function is based on symmetric encryption.",
      "A hash table function guarantees the uniqueness of the hash, while a cryptographic hash function does not.",
    ],
    correctAnswer:
      "A hash table function is deterministic and fast, while a cryptographic hash function emphasizes security and collision resistance.",
    explanation:
      "Hash table functions are designed for speed and efficiency, while cryptographic hash functions are designed to be secure and resistant to collisions, even against malicious input.",
  },
  {
    question:
      "Which method is most effective for reducing the occurrence of clustering in a hash table?",
    options: [
      "Using separate chaining",
      "Increasing the table size",
      "Using double hashing",
      "Reducing the number of hash functions",
    ],
    correctAnswer: "Using double hashing",
    explanation:
      "Double hashing helps reduce clustering by using a second hash function when collisions occur, leading to a better distribution of keys in the table.",
  },
  {
    question:
      "How does a hash table with rehashing improve performance when the load factor exceeds a threshold?",
    options: [
      "By resetting all keys and starting over",
      "By doubling the table size and rehashing all existing elements to new positions",
      "By applying a more complex hash function",
      "By using a smaller hash function to reduce memory usage",
    ],
    correctAnswer:
      "By doubling the table size and rehashing all existing elements to new positions",
    explanation:
      "When the load factor exceeds a certain threshold, rehashing doubles the table size and recalculates the positions of all existing elements to reduce collisions.",
  },
  {
    question: "What is the purpose of a hash bucket in a hash table?",
    options: [
      "To store hash keys securely",
      "To contain elements that map to the same hash index",
      "To serve as a backup for hash collisions",
      "To optimize the use of hash functions",
    ],
    correctAnswer: "To contain elements that map to the same hash index",
    explanation:
      "A hash bucket is a container for elements that hash to the same index. It holds multiple elements in case of collisions, especially when using separate chaining.",
  },
  {
    question:
      "What is a common method used to handle collisions in a hash table with open addressing?",
    options: [
      "Separate chaining",
      "Quadratic probing",
      "Cuckoo hashing",
      "Dynamic resizing",
    ],
    correctAnswer: "Quadratic probing",
    explanation:
      "Quadratic probing is a collision resolution technique where the next open slot is found using a quadratic function of the current hash index.",
  },
  {
    question:
      "What is the time complexity of inserting a new element into a hash table with separate chaining, assuming a good hash function and low load factor?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In the average case with a good hash function and low load factor, insertion into a hash table with separate chaining is an O(1) operation.",
  },
  {
    question: "What is the purpose of a rehash operation in a hash table?",
    options: [
      "To optimize the hash function",
      "To resize the table and redistribute elements to reduce collisions",
      "To compress the data stored in the table",
      "To delete redundant keys",
    ],
    correctAnswer:
      "To resize the table and redistribute elements to reduce collisions",
    explanation:
      "Rehashing is performed when the table is too full, resizing it and redistributing the elements to reduce collisions and maintain efficient performance.",
  },
];
