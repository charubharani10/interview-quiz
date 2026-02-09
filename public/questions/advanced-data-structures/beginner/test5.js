export const test5 = [
  {
    question:
      "What is the main advantage of using a Segment Tree over a simple array?",
    options: [
      "Faster updates",
      "Faster range queries",
      "Less memory usage",
      "Easier to implement",
    ],
    correctAnswer: "Faster range queries",
    explanation:
      "Segment Trees allow efficient range queries (such as sum or minimum) in logarithmic time, while simple arrays require linear time for such queries.",
  },
  {
    question:
      "How does a Disjoint Set (Union-Find) handle the union operation?",
    options: [
      "By performing a merge operation",
      "By combining two sets into one",
      "By linking the smaller set under the larger set",
      "By checking for cycles in a graph",
    ],
    correctAnswer: "By linking the smaller set under the larger set",
    explanation:
      "In Union-Find, the smaller set is linked under the root of the larger set to keep the tree shallow, improving efficiency for future operations.",
  },
  {
    question:
      "What is the time complexity of the Find operation in a Union-Find data structure with path compression and union by rank?",
    options: ["O(1)", "O(log n)", "O(n)", "O(α(n))"],
    correctAnswer: "O(α(n))",
    explanation:
      "With path compression and union by rank, the time complexity of the Find operation in Union-Find becomes almost constant, represented as O(α(n)), where α is the inverse Ackermann function.",
  },
  {
    question:
      "Which of the following operations can be efficiently performed using a Fenwick Tree?",
    options: [
      "Point updates and range queries",
      "Sorting",
      "Finding the median",
      "Handling dynamic arrays",
    ],
    correctAnswer: "Point updates and range queries",
    explanation:
      "Fenwick Trees are ideal for performing point updates and range queries efficiently, typically for cumulative sum or frequency counts.",
  },
  {
    question:
      "What is the main purpose of the lazy propagation technique in Segment Trees?",
    options: [
      "To speed up range queries",
      "To avoid redundant updates during range updates",
      "To perform point queries faster",
      "To reduce the memory usage of the tree",
    ],
    correctAnswer: "To avoid redundant updates during range updates",
    explanation:
      "Lazy propagation defers updates in a Segment Tree to avoid redundant updates when handling range updates, thus making it more efficient.",
  },
  {
    question:
      "Which structure is often used for pattern matching and text processing tasks like searching for substrings?",
    options: ["Fenwick Tree", "Suffix Tree", "Segment Tree", "Disjoint Set"],
    correctAnswer: "Suffix Tree",
    explanation:
      "Suffix Trees are used in pattern matching and text processing tasks, allowing fast searches and substring queries in linear time relative to the length of the string.",
  },
  {
    question:
      "Which data structure is used to implement Kruskal’s Algorithm for finding the minimum spanning tree?",
    options: [
      "Binary Heap",
      "Segment Tree",
      "Disjoint Set (Union-Find)",
      "Fenwick Tree",
    ],
    correctAnswer: "Disjoint Set (Union-Find)",
    explanation:
      "Kruskal's Algorithm for finding the minimum spanning tree uses the Union-Find data structure to efficiently manage the merging of disjoint sets while processing edges.",
  },
  {
    question: "What is a typical application of a Fenwick Tree?",
    options: [
      "Efficient prefix sum calculations",
      "Fast sorting algorithms",
      "Dynamic graph connectivity",
      "Efficient median finding",
    ],
    correctAnswer: "Efficient prefix sum calculations",
    explanation:
      "Fenwick Trees are widely used to efficiently calculate prefix sums or cumulative frequencies, making them suitable for operations involving sums of elements in an array.",
  },
  {
    question:
      "What is the worst-case time complexity for updating a single element in a Fenwick Tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Updating a single element in a Fenwick Tree requires logarithmic time, O(log n), as it updates all relevant cumulative sums in the tree.",
  },
  {
    question: "In a Suffix Tree, how is the string typically represented?",
    options: [
      "As a binary tree",
      "As a compressed trie of all suffixes",
      "As an array of strings",
      "As a sequence of numbers",
    ],
    correctAnswer: "As a compressed trie of all suffixes",
    explanation:
      "A Suffix Tree is a compressed trie that contains all the suffixes of a string, which allows efficient searching and pattern matching.",
  },
  {
    question:
      "What is the main advantage of using a Segment Tree for range queries compared to a simple array?",
    options: [
      "It uses less memory",
      "It supports faster updates",
      "It allows faster range queries",
      "It is easier to implement",
    ],
    correctAnswer: "It allows faster range queries",
    explanation:
      "Segment Trees provide efficient querying of range sums or other range properties in logarithmic time, which would take linear time in a simple array.",
  },
  {
    question:
      "Which technique in Union-Find optimizes the time complexity of the 'Find' operation?",
    options: [
      "Path compression",
      "Union by size",
      "Backtracking",
      "Cycle detection",
    ],
    correctAnswer: "Path compression",
    explanation:
      "Path compression is a technique used in Union-Find to flatten the tree structure during the Find operation, which significantly improves the time complexity.",
  },
  {
    question: "How does a Fenwick Tree differ from a Segment Tree?",
    options: [
      "Fenwick Tree can handle range queries",
      "Fenwick Tree uses less memory",
      "Fenwick Tree can only handle point updates and prefix sums",
      "Fenwick Tree supports lazy propagation",
    ],
    correctAnswer: "Fenwick Tree can only handle point updates and prefix sums",
    explanation:
      "While both trees are used for similar purposes, Fenwick Trees are more specialized for prefix sums and point updates, whereas Segment Trees can handle more complex range queries.",
  },
  {
    question:
      "What is the time complexity of the 'Union' operation in a Union-Find data structure with path compression?",
    options: ["O(1)", "O(log n)", "O(n)", "O(α(n))"],
    correctAnswer: "O(α(n))",
    explanation:
      "The Union operation with path compression and union by rank takes O(α(n)) time, where α is the inverse Ackermann function, which grows very slowly and is practically constant.",
  },
  {
    question:
      "What type of problems are Disjoint Set (Union-Find) data structures typically used to solve?",
    options: [
      "Graph traversal",
      "Finding the minimum spanning tree",
      "Finding the longest common subsequence",
      "Sorting an array",
    ],
    correctAnswer: "Finding the minimum spanning tree",
    explanation:
      "Union-Find is often used in algorithms like Kruskal's for finding the minimum spanning tree by efficiently managing the connected components in a graph.",
  },
  {
    question: "What is the main application of a Suffix Tree?",
    options: [
      "Sorting strings",
      "Searching for a substring",
      "Performing range queries",
      "Calculating prefix sums",
    ],
    correctAnswer: "Searching for a substring",
    explanation:
      "Suffix Trees are specifically used in string processing tasks like substring searches and pattern matching, where all suffixes of a string are stored efficiently.",
  },
  {
    question: "Which of the following operations can a Segment Tree perform?",
    options: [
      "Prefix sum",
      "Maximum value in a range",
      "Minimum value in a range",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Segment Trees can be used to answer a variety of range queries, such as prefix sum, range maximum, and range minimum, all in logarithmic time.",
  },
  {
    question:
      "What is the space complexity of a Segment Tree for an array of size n?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
    correctAnswer: "O(n)",
    explanation:
      "A Segment Tree requires O(n) space to store the tree structure, which is proportional to the size of the input array.",
  },
  {
    question:
      "Which of the following is NOT a characteristic of a Fenwick Tree?",
    options: [
      "Efficient prefix sum calculation",
      "Efficient range sum query",
      "Efficient point updates",
      "Consumes less memory than a Segment Tree",
    ],
    correctAnswer: "Efficient range sum query",
    explanation:
      "While Fenwick Trees are efficient for prefix sum calculations and point updates, they are not efficient for range sum queries compared to Segment Trees.",
  },
  {
    question:
      "What is the primary advantage of using a Suffix Array over a Suffix Tree?",
    options: [
      "Suffix Arrays are more memory-efficient",
      "Suffix Arrays are faster for pattern matching",
      "Suffix Arrays can handle range queries",
      "Suffix Arrays support lazy propagation",
    ],
    correctAnswer: "Suffix Arrays are more memory-efficient",
    explanation:
      "Suffix Arrays are a more space-efficient representation of all the suffixes of a string compared to Suffix Trees, though they may require more time for certain operations.",
  },
];
