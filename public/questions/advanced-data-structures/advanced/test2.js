export const test2 = [
  {
    question:
      "What is the main advantage of using a Fenwick Tree over a Segment Tree?",
    options: [
      "Smaller space complexity",
      "Faster updates",
      "Better for dynamic range queries",
      "Easier to implement",
    ],
    correctAnswer: "Smaller space complexity",
    explanation:
      "Fenwick Trees generally require O(N) space and can be more space-efficient compared to Segment Trees, which often require more space for storing additional data.",
  },
  {
    question:
      "Which algorithm is used to solve the Longest Common Substring problem efficiently using Suffix Arrays?",
    options: [
      "KMP Algorithm",
      "Binary Search",
      "Manber-Myers Algorithm",
      "Suffix Tree Algorithm",
    ],
    correctAnswer: "Suffix Tree Algorithm",
    explanation:
      "The Longest Common Substring problem can be efficiently solved using Suffix Trees, which allow for linear-time substring search.",
  },
  {
    question:
      "How does the Disjoint Set data structure optimize the 'find' operation?",
    options: [
      "By using path compression",
      "By using union by rank",
      "By using hashing",
      "By storing elements in sorted order",
    ],
    correctAnswer: "By using path compression",
    explanation:
      "Path compression flattens the structure of the tree, making subsequent find operations faster by ensuring that the trees remain shallow.",
  },
  {
    question:
      "In a Segment Tree, what operation is performed at each internal node?",
    options: [
      "Store the maximum value of the segment",
      "Store the sum of values of the segment",
      "Store the minimum value of the segment",
      "Store the median of values",
    ],
    correctAnswer: "Store the sum of values of the segment",
    explanation:
      "Segment Trees typically store the sum of values for each segment, allowing for efficient range sum queries.",
  },
  {
    question:
      "In the context of a Suffix Tree, what does the 'deepest' node represent?",
    options: [
      "The longest common prefix",
      "The longest suffix",
      "The smallest lexicographical suffix",
      "The most frequent substring",
    ],
    correctAnswer: "The longest common prefix",
    explanation:
      "In a Suffix Tree, the deepest node represents the longest common prefix between two or more suffixes in the string.",
  },
  {
    question:
      "What is the time complexity of finding the lowest common ancestor (LCA) in a Suffix Tree?",
    options: ["O(N)", "O(log N)", "O(1)", "O(N log N)"],
    correctAnswer: "O(N)",
    explanation:
      "Finding the lowest common ancestor (LCA) in a Suffix Tree is typically done in O(N) time, where N is the length of the string.",
  },
  {
    question:
      "Which algorithm can be used to efficiently construct a Suffix Array in O(N log N) time?",
    options: [
      "Skew Algorithm",
      "Manber-Myers Algorithm",
      "Radix Sort",
      "Ukkonen's Algorithm",
    ],
    correctAnswer: "Manber-Myers Algorithm",
    explanation:
      "Manber-Myers is a known O(N log N) time complexity algorithm to build Suffix Arrays, making it efficient for string manipulation problems.",
  },
  {
    question:
      "In the context of Union-Find, what is the 'union by rank' strategy?",
    options: [
      "Attaching the smaller tree to the larger tree",
      "Attaching the larger tree to the smaller tree",
      "Balancing the trees by attaching equal-sized trees",
      "Flattening the tree by ranking nodes",
    ],
    correctAnswer: "Attaching the smaller tree to the larger tree",
    explanation:
      "Union by rank attaches the smaller tree to the root of the larger tree, keeping the trees balanced and ensuring faster find operations.",
  },
  {
    question:
      "Which of the following is a common application of a Segment Tree?",
    options: [
      "Binary search",
      "Efficient range queries and updates",
      "Sorting an array",
      "Heap operations",
    ],
    correctAnswer: "Efficient range queries and updates",
    explanation:
      "Segment Trees are used for efficient range queries (sum, min, max) and updates in logarithmic time.",
  },
  {
    question:
      "What is the time complexity of a single update in a Fenwick Tree?",
    options: ["O(1)", "O(log N)", "O(N)", "O(log^2 N)"],
    correctAnswer: "O(log N)",
    explanation:
      "Updating a value in a Fenwick Tree requires O(log N) time, where N is the size of the array.",
  },
  {
    question:
      "What is the time complexity of building a Suffix Tree for a string of length N?",
    options: ["O(N log N)", "O(N)", "O(N^2)", "O(N^3)"],
    correctAnswer: "O(N)",
    explanation:
      "Suffix Trees can be built in O(N) time using efficient algorithms such as Ukkonen's algorithm.",
  },
  {
    question:
      "Which of the following algorithms can be used to construct a Suffix Tree in linear time?",
    options: [
      "Radix Sort",
      "Skew Algorithm",
      "Ukkonen's Algorithm",
      "KMP Algorithm",
    ],
    correctAnswer: "Ukkonen's Algorithm",
    explanation:
      "Ukkonen's Algorithm is a linear-time algorithm for constructing Suffix Trees, which is efficient for large strings.",
  },
  {
    question:
      "In a Fenwick Tree, which operation is performed using the BIT (Binary Indexed Tree) data structure?",
    options: [
      "Range queries",
      "Prefix sum queries",
      "Sorting",
      "Binary search",
    ],
    correctAnswer: "Prefix sum queries",
    explanation:
      "Fenwick Trees are mainly used for efficient prefix sum queries and updates in logarithmic time.",
  },
  {
    question:
      "In the Disjoint Set (Union-Find) data structure, which operation merges two sets?",
    options: ["Find", "Union", "Insert", "Split"],
    correctAnswer: "Union",
    explanation:
      "The Union operation merges two sets in the Disjoint Set data structure, and it can be optimized with techniques such as union by rank.",
  },
  {
    question:
      "What is the space complexity of a Suffix Tree for a string of length N?",
    options: ["O(N)", "O(N log N)", "O(N^2)", "O(log N)"],
    correctAnswer: "O(N)",
    explanation:
      "Suffix Trees require O(N) space, where N is the length of the string, due to the structure needed to store all suffixes.",
  },
  {
    question:
      "Which of the following strategies helps optimize the Disjoint Set data structure for faster find operations?",
    options: [
      "Path compression",
      "Union by rank",
      "Both path compression and union by rank",
      "Depth-first search",
    ],
    correctAnswer: "Both path compression and union by rank",
    explanation:
      "Using both path compression and union by rank optimizes the find and union operations in the Disjoint Set data structure.",
  },
  {
    question:
      "In a Segment Tree, what is the time complexity of updating a single element?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
    correctAnswer: "O(log N)",
    explanation:
      "Updating a single element in a Segment Tree requires O(log N) time due to the need to propagate changes through the tree.",
  },
  {
    question:
      "Which of the following data structures is most suitable for efficient range minimum and range maximum queries?",
    options: ["Segment Tree", "Trie", "Heap", "Hash Table"],
    correctAnswer: "Segment Tree",
    explanation:
      "Segment Trees are efficient for both range minimum and range maximum queries, with O(log N) query time.",
  },
  {
    question:
      "Which operation is commonly optimized in the Disjoint Set data structure using path compression?",
    options: ["Find", "Union", "Insert", "Split"],
    correctAnswer: "Find",
    explanation:
      "Path compression optimizes the 'find' operation by flattening the tree structure, reducing the time complexity of future find operations.",
  },
  {
    question:
      "What is the main advantage of using a Suffix Array over a Suffix Tree?",
    options: [
      "Faster construction",
      "Lower space complexity",
      "More efficient for finding LCP",
      "Handles larger input sizes",
    ],
    correctAnswer: "Lower space complexity",
    explanation:
      "Suffix Arrays use less space compared to Suffix Trees, making them more suitable for memory-limited environments.",
  },
];
