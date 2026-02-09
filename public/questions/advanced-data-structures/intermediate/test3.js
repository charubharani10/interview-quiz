export const test3 = [
  {
    question:
      "Which of the following operations can be performed with a Segment Tree?",
    options: [
      "Point query",
      "Range query",
      "Range updates",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Segment Trees can be used to perform point queries, range queries, and even range updates efficiently with appropriate modifications.",
  },

  {
    question:
      "What is the purpose of 'Union by Rank' in Disjoint Set (Union-Find)?",
    options: [
      "To balance the trees by ensuring smaller trees are attached under larger ones",
      "To speed up the union operation",
      "To reduce the time complexity of path compression",
      "To minimize the number of sets",
    ],
    correctAnswer:
      "To balance the trees by ensuring smaller trees are attached under larger ones",
    explanation:
      "Union by Rank ensures that smaller trees are attached under larger ones, keeping the tree as flat as possible to optimize query operations.",
  },

  {
    question:
      "Which of the following best describes the structure of a Fenwick Tree?",
    options: [
      "Binary tree",
      "Balanced tree",
      "Heap",
      "Array with tree-like properties",
    ],
    correctAnswer: "Array with tree-like properties",
    explanation:
      "A Fenwick Tree is implemented using an array that exhibits tree-like properties, allowing efficient prefix sum queries and updates.",
  },

  {
    question: "In a Suffix Tree, which of the following is true?",
    options: [
      "Every suffix of a string is represented as a path from the root to a leaf",
      "Each internal node corresponds to a substring of the original string",
      "The number of edges in the tree is proportional to the length of the string",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "A Suffix Tree represents all suffixes of a string and has internal nodes that correspond to substrings. The number of edges is proportional to the string's length.",
  },

  {
    question: "How does a Disjoint Set (Union-Find) perform path compression?",
    options: [
      "By making all nodes point directly to the root during find operations",
      "By keeping track of the rank of each node",
      "By flattening the entire tree",
      "By only compressing one path at a time",
    ],
    correctAnswer:
      "By making all nodes point directly to the root during find operations",
    explanation:
      "Path compression is a technique where, during the find operation, all nodes along the path are made to point directly to the root, ensuring a flatter tree and faster future queries.",
  },

  {
    question:
      "In which of the following scenarios is a Segment Tree more useful than a Fenwick Tree?",
    options: [
      "When range updates are required",
      "When the array is sorted",
      "When frequent element deletions are required",
      "When the array has constant values",
    ],
    correctAnswer: "When range updates are required",
    explanation:
      "Segment Trees are more suited for range updates, whereas Fenwick Trees are typically better for prefix sums and point updates.",
  },

  {
    question:
      "What is the time complexity of querying a range sum in a Fenwick Tree?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
    correctAnswer: "O(log N)",
    explanation:
      "Querying a range sum in a Fenwick Tree takes O(log N) time due to the logarithmic height of the tree and efficient traversal using the least significant bit (LSB).",
  },

  {
    question:
      "Which of the following is a key advantage of Suffix Arrays over Suffix Trees?",
    options: [
      "Better space complexity",
      "Faster construction",
      "Smaller memory usage",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Suffix Arrays are more space-efficient than Suffix Trees because they only store indices and are easier to construct, but they require additional algorithms for efficient substring search.",
  },

  {
    question:
      "Which of the following can be used to perform a 'union' operation in Disjoint Set?",
    options: [
      "Union by rank",
      "Union by size",
      "Union by path compression",
      "Both Union by rank and Union by size",
    ],
    correctAnswer: "Both Union by rank and Union by size",
    explanation:
      "Both Union by Rank and Union by Size techniques are used in Disjoint Set to optimize the tree structure and improve the time complexity of union and find operations.",
  },

  {
    question: "What is the space complexity of a Segment Tree?",
    options: ["O(N)", "O(N log N)", "O(log N)", "O(2^N)"],
    correctAnswer: "O(N)",
    explanation:
      "A Segment Tree requires O(N) space to store the nodes of the tree, which is linear in the size of the input array.",
  },

  {
    question:
      "What is the primary difference between Fenwick Tree and Segment Tree?",
    options: [
      "Fenwick Tree is more space-efficient",
      "Segment Tree supports more types of queries",
      "Fenwick Tree requires O(N) time for range updates",
      "Segment Tree can handle point queries faster",
    ],
    correctAnswer: "Segment Tree supports more types of queries",
    explanation:
      "Segment Trees are more versatile than Fenwick Trees as they support a wider variety of queries (e.g., range minimum, range maximum, range sum) but at the cost of slightly more complex operations.",
  },
];
