export const test5 = [
  {
    question:
      "Which of the following is a use case of Disjoint Set (Union-Find)?",
    options: [
      "Cycle detection in a graph",
      "Finding the shortest path in a graph",
      "Sorting elements",
      "Finding connected components in a graph",
    ],
    correctAnswer: "Finding connected components in a graph",
    explanation:
      "Disjoint Set is commonly used for finding connected components in a graph, as it efficiently handles union and find operations.",
  },
  {
    question: "Which of the following best describes a Suffix Array?",
    options: [
      "An array of all suffixes of a string sorted lexicographically",
      "A tree representing all suffixes of a string",
      "A data structure for storing longest common prefixes",
      "A balanced binary search tree",
    ],
    correctAnswer:
      "An array of all suffixes of a string sorted lexicographically",
    explanation:
      "A Suffix Array is a sorted array of all suffixes of a string, enabling efficient substring searches.",
  },
  {
    question:
      "What is the worst-case time complexity of range queries in a Segment Tree?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
    correctAnswer: "O(log N)",
    explanation:
      "Segment Tree allows range queries to be answered in logarithmic time, O(log N), by navigating through the tree.",
  },
  {
    question:
      "What is the primary purpose of 'rank' in a Disjoint Set data structure?",
    options: [
      "To track the height of trees",
      "To optimize union operations by attaching shorter trees to taller ones",
      "To ensure that each set has an equal number of elements",
      "To find the root of the set faster",
    ],
    correctAnswer:
      "To optimize union operations by attaching shorter trees to taller ones",
    explanation:
      "The rank is used in Disjoint Set to optimize union operations by keeping the tree balanced, ensuring better performance.",
  },
  {
    question: "What is the space complexity of a Fenwick Tree?",
    options: ["O(N)", "O(N log N)", "O(log N)", "O(1)"],
    correctAnswer: "O(N)",
    explanation:
      "Fenwick Trees use O(N) space to store the internal array, where N is the size of the input data.",
  },
  {
    question:
      "How can you achieve efficient range minimum query using Segment Tree?",
    options: [
      "Store minimum values at internal nodes",
      "Use an additional data structure",
      "Query the root node only",
      "Use a priority queue",
    ],
    correctAnswer: "Store minimum values at internal nodes",
    explanation:
      "To efficiently query the minimum value in a range, Segment Trees store the minimum value at each internal node.",
  },
  {
    question: "What is the time complexity of building a Fenwick Tree?",
    options: ["O(N)", "O(log N)", "O(N log N)", "O(N^2)"],
    correctAnswer: "O(N)",
    explanation:
      "Building a Fenwick Tree takes O(N) time, as each element needs to be updated at most log N times.",
  },
  {
    question:
      "Which of the following algorithms is used for building a Suffix Tree?",
    options: [
      "Ukkonen's algorithm",
      "KMP algorithm",
      "Dijkstra's algorithm",
      "Prim's algorithm",
    ],
    correctAnswer: "Ukkonen's algorithm",
    explanation:
      "Ukkonen's algorithm is an efficient linear-time algorithm used to build Suffix Trees.",
  },
  {
    question: "What is the typical use of a Suffix Tree?",
    options: [
      "Pattern matching",
      "Binary search",
      "Sorting strings",
      "Finding the shortest path in graphs",
    ],
    correctAnswer: "Pattern matching",
    explanation:
      "Suffix Trees are commonly used in string matching algorithms, as they allow efficient pattern searches within strings.",
  },
  {
    question:
      "What is the time complexity of finding the LCA (Lowest Common Ancestor) using a Segment Tree?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
    correctAnswer: "O(log N)",
    explanation:
      "Using a Segment Tree, finding the Lowest Common Ancestor can be done in O(log N) time.",
  },
];
