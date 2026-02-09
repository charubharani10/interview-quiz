export const test4 = [
  {
    question: "What type of query is typically optimized by a Segment Tree?",
    options: [
      "Point queries",
      "Range queries",
      "Matrix queries",
      "Single element lookup",
    ],
    correctAnswer: "Range queries",
    explanation:
      "Segment Trees are designed to efficiently answer range queries, such as sum or minimum in a range, in logarithmic time.",
  },
  {
    question:
      "Which of the following is the main benefit of using a Fenwick Tree over a Segment Tree?",
    options: [
      "Easier to implement",
      "Faster for all types of queries",
      "Requires less memory",
      "Supports dynamic array resizing",
    ],
    correctAnswer: "Requires less memory",
    explanation:
      "Fenwick Trees (Binary Indexed Trees) are more memory-efficient than Segment Trees because they require less storage for the same tasks.",
  },
  {
    question:
      "In a Disjoint Set (Union-Find), which operation is optimized by using union by rank?",
    options: [
      "Find operation",
      "Union operation",
      "Insert operation",
      "Delete operation",
    ],
    correctAnswer: "Union operation",
    explanation:
      "Union by rank improves the efficiency of the union operation by attaching the smaller tree under the root of the larger tree, reducing the tree's height.",
  },
  {
    question: "What is the purpose of lazy propagation in a Segment Tree?",
    options: [
      "To defer updates and optimize range updates",
      "To speed up point queries",
      "To make the tree dynamic",
      "To balance the tree",
    ],
    correctAnswer: "To defer updates and optimize range updates",
    explanation:
      "Lazy propagation allows for deferring updates in a Segment Tree, making it more efficient for performing range updates.",
  },
  {
    question:
      "What is the typical time complexity of the Find operation in a Disjoint Set when using path compression?",
    options: ["O(log n)", "O(n)", "O(1)", "O(α(n))"],
    correctAnswer: "O(α(n))",
    explanation:
      "With path compression, the time complexity of the Find operation in a Disjoint Set is almost constant, represented by the inverse Ackermann function (α(n)).",
  },
  {
    question:
      "In a Fenwick Tree, what operation is typically performed in O(log n) time?",
    options: [
      "Updating an element",
      "Deleting an element",
      "Finding the minimum element",
      "Range sum query",
    ],
    correctAnswer: "Range sum query",
    explanation:
      "A Fenwick Tree (Binary Indexed Tree) can efficiently perform range sum queries and point updates in logarithmic time.",
  },
  {
    question:
      "Which data structure is used to represent suffixes of a string efficiently for pattern matching?",
    options: ["Suffix Tree", "Segment Tree", "Trie", "Binary Search Tree"],
    correctAnswer: "Suffix Tree",
    explanation:
      "A Suffix Tree is a compressed trie that is used for efficient pattern matching and substring queries.",
  },
  {
    question: "What is the primary use case for a Suffix Array?",
    options: [
      "String comparison",
      "Searching for substrings",
      "Sorting an array",
      "Binary search",
    ],
    correctAnswer: "Searching for substrings",
    explanation:
      "A Suffix Array is used for efficiently searching substrings within a string by sorting all suffixes of the string.",
  },
  {
    question:
      "In Union-Find, what is the primary benefit of using path compression?",
    options: [
      "Speeds up the Union operation",
      "Flattens the tree during Find operations",
      "Reduces the space complexity",
      "Allows dynamic resizing",
    ],
    correctAnswer: "Flattens the tree during Find operations",
    explanation:
      "Path compression flattens the tree structure, improving the efficiency of future Find operations by linking nodes directly to the root.",
  },
  {
    question:
      "Which operation in a Fenwick Tree requires a bitwise AND operation?",
    options: [
      "Range update",
      "Point update",
      "Finding the prefix sum",
      "Deleting an element",
    ],
    correctAnswer: "Finding the prefix sum",
    explanation:
      "To find the prefix sum in a Fenwick Tree, bitwise operations are used to move through the structure, improving query efficiency.",
  },
  {
    question:
      "What is the time complexity of querying a range sum in a Fenwick Tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "A Fenwick Tree performs range sum queries in logarithmic time, making it efficient for cumulative frequency calculations.",
  },
  {
    question:
      "Which of the following is the primary use of a Disjoint Set (Union-Find) in algorithms?",
    options: [
      "Finding shortest paths",
      "Managing network connectivity",
      "Sorting elements",
      "Handling duplicate entries",
    ],
    correctAnswer: "Managing network connectivity",
    explanation:
      "Union-Find is typically used in algorithms for managing network connectivity, such as determining whether two elements belong to the same set.",
  },
  {
    question: "In which scenario is a Segment Tree particularly useful?",
    options: [
      "Range minimum queries",
      "Finding the median of an array",
      "Efficiently sorting elements",
      "Performing binary search",
    ],
    correctAnswer: "Range minimum queries",
    explanation:
      "Segment Trees are particularly useful for efficiently performing range queries like range minimum queries or range sum queries.",
  },
  {
    question:
      "What is the space complexity of a Fenwick Tree for storing an array of size n?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "O(n)",
    explanation:
      "A Fenwick Tree requires an array of size n to store its cumulative sums, so its space complexity is O(n).",
  },
  {
    question: "How does a Suffix Tree optimize pattern matching?",
    options: [
      "By storing sorted substrings",
      "By reducing the number of comparisons",
      "By storing all possible suffixes in a compressed trie",
      "By performing binary search on suffixes",
    ],
    correctAnswer: "By storing all possible suffixes in a compressed trie",
    explanation:
      "A Suffix Tree efficiently stores all suffixes of a string, allowing for fast pattern matching and substring queries.",
  },
  {
    question:
      "Which technique is used to optimize the Find operation in Union-Find data structure?",
    options: [
      "Path compression",
      "Rank balancing",
      "Lazy propagation",
      "Binary search",
    ],
    correctAnswer: "Path compression",
    explanation:
      "Path compression flattens the tree structure in Union-Find, making future Find operations faster by directly linking nodes to the root.",
  },
  {
    question: "In a Suffix Array, what is stored in the array?",
    options: [
      "Suffixes sorted in lexicographical order",
      "The original string",
      "Prefix sums of suffixes",
      "Positions of the longest substrings",
    ],
    correctAnswer: "Suffixes sorted in lexicographical order",
    explanation:
      "A Suffix Array stores the starting positions of all suffixes of a string sorted in lexicographical order, enabling fast substring searching.",
  },
  {
    question:
      "What is a common use of the Disjoint Set data structure in graph algorithms?",
    options: [
      "Detecting cycles",
      "Shortest path calculation",
      "Finding the minimum spanning tree",
      "Topological sorting",
    ],
    correctAnswer: "Detecting cycles",
    explanation:
      "Union-Find is often used in graph algorithms to detect cycles or to find connected components, such as in Kruskal’s algorithm for the minimum spanning tree.",
  },
  {
    question: "How does a Segment Tree handle range updates?",
    options: [
      "By updating the entire array at once",
      "By performing updates in logarithmic time",
      "By using lazy propagation",
      "By storing only the final result of updates",
    ],
    correctAnswer: "By using lazy propagation",
    explanation:
      "Segment Trees use lazy propagation to efficiently handle range updates, deferring updates to segments until necessary to minimize redundant operations.",
  },
  {
    question:
      "What is the primary reason for using a Fenwick Tree over a Segment Tree?",
    options: [
      "Segment Trees are faster",
      "Fenwick Trees require less space and are simpler",
      "Fenwick Trees can handle dynamic changes",
      "Fenwick Trees can perform non-commutative operations",
    ],
    correctAnswer: "Fenwick Trees require less space and are simpler",
    explanation:
      "Fenwick Trees are simpler to implement and use less memory than Segment Trees, making them suitable for cumulative frequency calculations where only prefix sums are required.",
  },
];
