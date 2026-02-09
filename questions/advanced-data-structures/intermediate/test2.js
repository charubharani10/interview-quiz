export const test2 = [
  {
    question:
      "What is the main advantage of using a Suffix Tree over a Suffix Array?",
    options: [
      "Suffix Trees take less space",
      "Suffix Trees allow linear time pattern matching",
      "Suffix Arrays are faster for suffix queries",
      "Suffix Trees are simpler to implement",
    ],
    correctAnswer: "Suffix Trees allow linear time pattern matching",
    explanation:
      "Suffix Trees allow linear time pattern matching, which is not directly possible with Suffix Arrays.",
  },
  {
    question: "What is the purpose of path compression in Union-Find?",
    options: [
      "To reduce the memory usage",
      "To optimize the Find operation",
      "To speed up union operations",
      "To allow for range queries",
    ],
    correctAnswer: "To optimize the Find operation",
    explanation:
      "Path compression speeds up the Find operation by making the tree flatter, reducing the time for subsequent queries.",
  },
  {
    question:
      "In the Disjoint Set Union-Find data structure, what is the time complexity of a 'Union' operation with both path compression and union by rank?",
    options: ["O(log n)", "O(1)", "O(n)", "O(α(n))"],
    correctAnswer: "O(α(n))",
    explanation:
      "With path compression and union by rank, the Union operation in Union-Find is performed in nearly constant time, denoted by O(α(n)).",
  },
  {
    question: "What kind of queries is a Fenwick Tree most commonly used for?",
    options: [
      "Range maximum queries",
      "Range minimum queries",
      "Prefix sum queries",
      "Range updates",
    ],
    correctAnswer: "Prefix sum queries",
    explanation:
      "Fenwick Trees are best suited for handling prefix sum queries efficiently.",
  },
  {
    question:
      "In a Segment Tree, what is the time complexity of a range update operation?",
    options: ["O(1)", "O(log n)", "O(n)", "O(log^2 n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a Segment Tree, both range queries and range updates can be done in O(log n) time.",
  },
  {
    question: "How can you optimize memory usage in a Segment Tree?",
    options: [
      "Using a Fenwick Tree",
      "Storing only leaf nodes",
      "Using a sparse table",
      "Storing only non-null nodes",
    ],
    correctAnswer: "Storing only non-null nodes",
    explanation:
      "By storing only non-null nodes, we reduce the space complexity of a Segment Tree.",
  },
  {
    question:
      "Which technique is used to find the lowest common ancestor in a Disjoint Set Union-Find?",
    options: [
      "Path compression",
      "Binary search",
      "Union by rank",
      "DFS traversal",
    ],
    correctAnswer: "Path compression",
    explanation:
      "Path compression flattens the tree, helping to optimize subsequent operations like finding the lowest common ancestor.",
  },
  {
    question: "Which type of problem can be solved using a Segment Tree?",
    options: [
      "Dynamic minimum spanning tree",
      "Querying the sum of a range of elements",
      "Pathfinding on a grid",
      "Finding the diameter of a graph",
    ],
    correctAnswer: "Querying the sum of a range of elements",
    explanation:
      "Segment Trees are used for range queries like sum, minimum, and maximum on arrays or ranges.",
  },
  {
    question: "What is the main application of a Suffix Array?",
    options: [
      "Finding the longest common subsequence",
      "Efficiently searching for patterns in a string",
      "Solving dynamic programming problems",
      "Handling range sum queries",
    ],
    correctAnswer: "Efficiently searching for patterns in a string",
    explanation:
      "Suffix Arrays are designed to efficiently search for patterns within strings.",
  },
  {
    question: "What is the time complexity of constructing a Suffix Tree?",
    options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
    correctAnswer: "O(n)",
    explanation:
      "Building a Suffix Tree can be done in linear time O(n), where n is the length of the input string.",
  },
  {
    question:
      "What is the time complexity of building a Segment Tree for an array of size N?",
    options: ["O(N)", "O(N log N)", "O(log N)", "O(N^2)"],
    correctAnswer: "O(N log N)",
    explanation:
      "Building a Segment Tree takes O(N log N) time because for each level, you need to combine results from two nodes. There are log N levels in a balanced tree, and O(N) work is done at each level.",
  },

  {
    question:
      "What is the primary advantage of Fenwick Tree over Segment Tree?",
    options: [
      "Faster updates",
      "Lower space complexity",
      "Faster range queries",
      "Easier to implement",
    ],
    correctAnswer: "Faster updates",
    explanation:
      "Fenwick Tree, also known as Binary Indexed Tree (BIT), provides O(log N) updates and queries, making it faster for dynamic updates than a Segment Tree which takes O(log N) for both updates and queries.",
  },

  {
    question: "Which of the following is NOT a property of a Suffix Array?",
    options: [
      "It stores the starting indexes of all suffixes in lexicographical order",
      "It is used for efficient substring search",
      "It requires O(N^2) time to build",
      "It provides the suffixes of a string in a sorted order",
    ],
    correctAnswer: "It requires O(N^2) time to build",
    explanation:
      "Suffix Arrays can be built in O(N log N) or even O(N) time with certain algorithms, such as induced sorting, and are primarily used for efficient substring searching.",
  },

  {
    question:
      "Which of the following is the main drawback of Disjoint Set (Union-Find) in its basic form?",
    options: [
      "No path compression",
      "No union by rank",
      "It has O(N^2) time complexity",
      "No efficient way to find connected components",
    ],
    correctAnswer: "No path compression",
    explanation:
      "In its basic form, Disjoint Set lacks path compression, leading to longer query times. With optimizations like path compression and union by rank, it can achieve nearly constant time.",
  },

  {
    question:
      "In a Fenwick Tree, what is the purpose of the least significant bit (LSB) in the index?",
    options: [
      "To perform range updates",
      "To track the sum of the prefix up to that point",
      "To handle overflow cases",
      "To store the maximum value in the array",
    ],
    correctAnswer: "To track the sum of the prefix up to that point",
    explanation:
      "In Fenwick Tree, the least significant bit of an index helps in identifying the range for prefix sum queries. It efficiently propagates the sum in logarithmic time.",
  },

  {
    question:
      "How does the Disjoint Set (Union-Find) algorithm ensure that the trees remain flat and efficient for operations?",
    options: [
      "Path compression",
      "Binary search",
      "Rank-based union",
      "Both path compression and rank-based union",
    ],
    correctAnswer: "Both path compression and rank-based union",
    explanation:
      "The Disjoint Set (Union-Find) algorithm uses both path compression and rank-based union to keep the trees flat, optimizing the time complexity to nearly constant time for most operations.",
  },

  {
    question: "What is the main purpose of a Segment Tree?",
    options: [
      "Efficiently find the maximum value in a range",
      "Efficiently find the sum in a range",
      "Efficiently find both minimum and sum in a range",
      "Efficiently update values in an array",
    ],
    correctAnswer: "Efficiently find both minimum and sum in a range",
    explanation:
      "Segment Trees allow efficient range queries and updates. They can be used to find both minimum and sum over a range, making them versatile in various scenarios.",
  },

  {
    question:
      "Which of the following operations can a Fenwick Tree perform in O(log N) time?",
    options: [
      "Querying the prefix sum",
      "Updating an element",
      "Querying the range sum",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Fenwick Tree (Binary Indexed Tree) supports both prefix sum queries and element updates in O(log N) time, making it efficient for many applications, especially dynamic cumulative sums.",
  },

  {
    question:
      "What is the time complexity for finding the minimum value in a Segment Tree?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
    correctAnswer: "O(log N)",
    explanation:
      "In a Segment Tree, the time complexity for finding the minimum value in a range is O(log N) due to the tree's height and the need to traverse the tree's nodes.",
  },

  {
    question:
      "What is the time complexity of updating an element in a Fenwick Tree?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
    correctAnswer: "O(log N)",
    explanation:
      "Updating an element in a Fenwick Tree requires updating multiple elements, but the time complexity remains O(log N) due to its tree structure and propagation of changes.",
  },
];
