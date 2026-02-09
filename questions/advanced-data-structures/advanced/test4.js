export const test4 = [
  {
    question:
      "Which advanced data structure is most suitable for answering range sum queries on an immutable array?",
    options: ["Fenwick Tree", "Segment Tree", "Disjoint Set", "Trie"],
    correctAnswer: "Segment Tree",
    explanation:
      "Segment Trees are ideal for answering range sum queries on immutable arrays, offering logarithmic time complexity for both updates and queries.",
  },
  {
    question: "In a Fenwick Tree, how is a range sum calculated?",
    options: [
      "By summing all elements in the range directly",
      "By querying multiple prefix sums",
      "By using a modified quicksort",
      "By performing binary search on the indices",
    ],
    correctAnswer: "By querying multiple prefix sums",
    explanation:
      "Range sums in a Fenwick Tree are calculated by summing the prefix sums at the start and end indices of the range.",
  },
  {
    question:
      "What is the primary disadvantage of a Suffix Tree compared to a Suffix Array?",
    options: [
      "Suffix Trees use more space",
      "Suffix Trees are slower to construct",
      "Suffix Trees cannot handle large inputs",
      "Suffix Trees are harder to implement",
    ],
    correctAnswer: "Suffix Trees use more space",
    explanation:
      "Suffix Trees require more space compared to Suffix Arrays, which is a trade-off for faster substring search and other operations.",
  },
  {
    question:
      "Which of the following data structures is efficient for finding the union of two sets in logarithmic time?",
    options: ["Disjoint Set", "Fenwick Tree", "Segment Tree", "Trie"],
    correctAnswer: "Disjoint Set",
    explanation:
      "Disjoint Set (Union-Find) is efficient for finding unions of two sets and typically uses path compression and union by rank to keep operations efficient.",
  },
  {
    question:
      "Which algorithm is used to construct a Suffix Array in O(N log N) time using the Radix Sort approach?",
    options: [
      "Skew Algorithm",
      "Manber-Myers Algorithm",
      "Radix Sort",
      "Karp-Rabin Algorithm",
    ],
    correctAnswer: "Manber-Myers Algorithm",
    explanation:
      "The Manber-Myers Algorithm can efficiently construct a Suffix Array in O(N log N) using a radix-like approach to sort suffixes.",
  },
  {
    question:
      "Which of the following is a benefit of using a Trie over a Hash Table?",
    options: [
      "Trie can handle dynamic data",
      "Trie supports efficient prefix-based searches",
      "Trie requires less memory",
      "Trie is faster for insertion and deletion",
    ],
    correctAnswer: "Trie supports efficient prefix-based searches",
    explanation:
      "Trie is designed for efficient prefix searches, which is a major advantage over Hash Tables, which do not handle prefixes efficiently.",
  },
  {
    question:
      "In the Disjoint Set data structure, what is the purpose of path compression?",
    options: [
      "To minimize the size of the sets",
      "To flatten the tree structure for faster find operations",
      "To balance the trees automatically",
      "To increase the memory usage",
    ],
    correctAnswer: "To flatten the tree structure for faster find operations",
    explanation:
      "Path compression helps flatten the tree structure by making each node in the path point directly to the root, optimizing future find operations.",
  },
  {
    question:
      "In a Segment Tree, which of the following operations is performed at each leaf node?",
    options: [
      "Storing the entire segment sum",
      "Storing the value at the corresponding index",
      "Storing the maximum value in the segment",
      "Storing the minimum value in the segment",
    ],
    correctAnswer: "Storing the value at the corresponding index",
    explanation:
      "In a Segment Tree, each leaf node stores the actual value of the array element at the corresponding index, which is used for building the segment tree.",
  },
  {
    question:
      "What is the complexity of constructing a Suffix Array using the Manber-Myers algorithm?",
    options: ["O(N log N)", "O(N log^2 N)", "O(N)", "O(N^2)"],
    correctAnswer: "O(N log N)",
    explanation:
      "Manber-Myers is an efficient algorithm for constructing Suffix Arrays in O(N log N) time, making it suitable for large inputs.",
  },
  {
    question:
      "Which of the following data structures is the best choice for efficiently supporting prefix sum queries?",
    options: ["Fenwick Tree", "Disjoint Set", "Suffix Array", "Heap"],
    correctAnswer: "Fenwick Tree",
    explanation:
      "Fenwick Tree (Binary Indexed Tree) is specifically designed for efficiently computing prefix sums and updates in O(log N) time.",
  },
  {
    question:
      "In a Suffix Array, what is the main difference between a Suffix Array and a Suffix Tree?",
    options: [
      "Suffix Arrays store the longest suffixes, while Suffix Trees store all prefixes",
      "Suffix Arrays store the indices of sorted suffixes, while Suffix Trees store the actual substrings",
      "Suffix Arrays are more space-efficient than Suffix Trees",
      "Suffix Trees are easier to construct than Suffix Arrays",
    ],
    correctAnswer:
      "Suffix Arrays store the indices of sorted suffixes, while Suffix Trees store the actual substrings",
    explanation:
      "A Suffix Array is a sorted list of suffix indices, while a Suffix Tree is a tree structure that represents all suffixes as substrings, making Suffix Trees more space-intensive but more powerful in terms of search capabilities.",
  },
  {
    question:
      "What is the time complexity of the ‘find’ operation in a Disjoint Set data structure without path compression?",
    options: ["O(log N)", "O(α(N))", "O(N)", "O(1)"],
    correctAnswer: "O(N)",
    explanation:
      "Without path compression, the ‘find’ operation in a Disjoint Set can have a linear time complexity O(N) as it may traverse up the tree linearly in the worst case.",
  },
  {
    question:
      "What is the time complexity of the ‘update’ operation in a Segment Tree with lazy propagation?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
    correctAnswer: "O(log N)",
    explanation:
      "The update operation in a Segment Tree with lazy propagation runs in O(log N) time, where N is the size of the array, because updates are propagated in a logarithmic number of steps.",
  },
  {
    question:
      "How does the inverse Ackermann function, α(n), behave as n grows large?",
    options: [
      "It grows exponentially",
      "It grows logarithmically",
      "It grows very slowly and is nearly constant for practical inputs",
      "It grows linearly",
    ],
    correctAnswer:
      "It grows very slowly and is nearly constant for practical inputs",
    explanation:
      "The inverse Ackermann function, α(n), grows extremely slowly and is effectively constant for all practical input sizes. For most real-world applications, α(n) ≤ 4.",
  },
  {
    question:
      "In the context of a Fenwick Tree (Binary Indexed Tree), what is the primary disadvantage when compared to a Segment Tree?",
    options: [
      "Lower space complexity",
      "Inability to support range queries",
      "Slower point updates",
      "Inability to handle prefix sum queries",
    ],
    correctAnswer: "Inability to support range queries",
    explanation:
      "Fenwick Tree (BIT) is limited to prefix sum queries and point updates. Unlike Segment Trees, it does not efficiently support range queries.",
  },
  {
    question:
      "Which technique is used in Suffix Arrays to speed up the construction process from O(N^2) to O(N log N)?",
    options: [
      "Suffix tree construction",
      "KMP algorithm",
      "Prefix doubling with sorting",
      "Quickselect algorithm",
    ],
    correctAnswer: "Prefix doubling with sorting",
    explanation:
      "The construction of Suffix Arrays can be optimized by using prefix doubling with sorting, reducing the complexity from O(N^2) to O(N log N).",
  },
  {
    question:
      "In the context of a Disjoint Set, what is the primary benefit of union by rank?",
    options: [
      "It speeds up the find operation",
      "It balances the tree structure, minimizing tree depth",
      "It reduces memory usage",
      "It improves the complexity of union operations",
    ],
    correctAnswer: "It balances the tree structure, minimizing tree depth",
    explanation:
      "Union by rank keeps the tree shallow, thereby improving the time complexity of the ‘find’ operation by minimizing tree depth.",
  },
  {
    question:
      "Which of the following operations is more efficient in a Segment Tree with lazy propagation than in one without lazy propagation?",
    options: [
      "Range sum queries",
      "Range updates",
      "Point updates",
      "Build operation",
    ],
    correctAnswer: "Range updates",
    explanation:
      "Lazy propagation in Segment Trees significantly improves the efficiency of range updates by delaying updates to child nodes until necessary.",
  },
  {
    question:
      "In the context of a Suffix Tree, what does the LCP (Longest Common Prefix) array store?",
    options: [
      "The longest common prefix for each suffix",
      "The longest substring with no duplicates",
      "The common prefix for every pair of suffixes",
      "The length of the longest palindrome in the string",
    ],
    correctAnswer: "The longest common prefix for each suffix",
    explanation:
      "The LCP array stores the lengths of the longest common prefixes between consecutive suffixes in a Suffix Array, aiding efficient substring comparisons.",
  },
];
