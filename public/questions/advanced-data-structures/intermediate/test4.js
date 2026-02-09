export const test4 = [
  {
    question:
      "What is the time complexity of a 'range query' in a Segment Tree?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
    correctAnswer: "O(log N)",
    explanation:
      "A range query in a Segment Tree takes O(log N) time as the tree is built to have a logarithmic height, allowing efficient querying over a range.",
  },
  {
    question: "How does a Fenwick Tree handle updates?",
    options: [
      "Updates are done in O(1) time",
      "Updates take O(log N) time",
      "Updates take O(N) time",
      "Fenwick Tree doesn't support updates",
    ],
    correctAnswer: "Updates take O(log N) time",
    explanation:
      "In Fenwick Trees, updates to individual elements are handled in O(log N) time by adjusting relevant elements in the internal array.",
  },
  {
    question:
      "Which data structure is best suited for finding the Lowest Common Ancestor (LCA) in trees?",
    options: [
      "Segment Tree",
      "Fenwick Tree",
      "Suffix Tree",
      "Disjoint Set (Union-Find)",
    ],
    correctAnswer: "Segment Tree",
    explanation:
      "Segment Trees can be used to solve the Lowest Common Ancestor (LCA) problem efficiently by storing precomputed depths of nodes.",
  },
  {
    question:
      "In the context of a Disjoint Set, what does the term 'path compression' mean?",
    options: [
      "Flattening the entire tree to make the structure efficient",
      "Ensuring that every node points directly to the root in a single operation",
      "Balancing the trees for efficiency",
      "Decreasing the rank of the set",
    ],
    correctAnswer:
      "Ensuring that every node points directly to the root in a single operation",
    explanation:
      "Path compression flattens the tree by making each node point directly to the root, improving the efficiency of future queries.",
  },
  {
    question:
      "What is the time complexity of 'union' operation in a Disjoint Set with path compression?",
    options: ["O(1)", "O(log N)", "O(N)", "O(log* N)"],
    correctAnswer: "O(log* N)",
    explanation:
      "The union operation with path compression and union by rank runs in almost constant time, denoted as O(log* N), where log* N is an extremely slow-growing function.",
  },
  {
    question: "In a Suffix Array, how are the suffixes sorted?",
    options: [
      "By their length",
      "Lexicographically",
      "By frequency",
      "By their frequency of occurrence",
    ],
    correctAnswer: "Lexicographically",
    explanation:
      "In a Suffix Array, suffixes are sorted in lexicographical order, which allows for efficient searching and substring matching.",
  },
  {
    question:
      "What is the main advantage of using a Fenwick Tree over a Segment Tree?",
    options: [
      "Better space complexity",
      "Faster updates",
      "Faster query time",
      "Support for complex range queries",
    ],
    correctAnswer: "Better space complexity",
    explanation:
      "Fenwick Trees are more space-efficient than Segment Trees. They use O(N) space compared to the O(2N) space used by Segment Trees.",
  },
  {
    question:
      "What is the difference between a Suffix Tree and a Suffix Array?",
    options: [
      "Suffix Tree is more memory efficient",
      "Suffix Array provides better query time",
      "Suffix Tree supports substring queries more efficiently",
      "Suffix Array supports substring queries more efficiently",
    ],
    correctAnswer: "Suffix Tree supports substring queries more efficiently",
    explanation:
      "Suffix Trees allow fast substring queries, while Suffix Arrays require additional algorithms (like binary search) for substring queries.",
  },
  {
    question: "What is the time complexity of building a Suffix Tree?",
    options: ["O(N log N)", "O(N)", "O(N^2)", "O(N^3)"],
    correctAnswer: "O(N)",
    explanation:
      "Suffix Trees can be constructed in linear time O(N), where N is the length of the string, using specialized algorithms like Ukkonen's algorithm.",
  },
  {
    question:
      "Which of the following operations can be performed in O(1) time in Disjoint Set with path compression?",
    options: ["Find", "Union", "Both Find and Union", "None of the above"],
    correctAnswer: "Find",
    explanation:
      "The 'find' operation with path compression can be performed in nearly constant time, O(1), in Disjoint Set, whereas 'union' requires O(log N) time.",
  },
];
