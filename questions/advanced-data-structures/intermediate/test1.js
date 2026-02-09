export const test1 = [
  {
    question: "Which operation does not require a Segment Tree to be built?",
    options: [
      "Range minimum query",
      "Point updates",
      "Prefix sum query",
      "Counting inversions",
    ],
    correctAnswer: "Counting inversions",
    explanation:
      "Counting inversions can be done using a Fenwick Tree or other algorithms like merge sort, but it does not require a Segment Tree.",
  },
  {
    question:
      "What is the main difference between Fenwick Tree and Segment Tree?",
    options: [
      "Fenwick Tree is faster at range queries",
      "Fenwick Tree can handle more complex queries",
      "Segment Tree supports range updates and queries, while Fenwick Tree supports point updates",
      "Segment Tree uses less memory",
    ],
    correctAnswer:
      "Segment Tree supports range updates and queries, while Fenwick Tree supports point updates",
    explanation:
      "Segment Trees are more versatile, allowing range updates and queries, whereas Fenwick Trees can only handle point updates and prefix sums.",
  },
  {
    question:
      "What is the time complexity for querying the sum of an arbitrary range in a Segment Tree?",
    options: ["O(log n)", "O(n)", "O(log^2 n)", "O(1)"],
    correctAnswer: "O(log n)",
    explanation:
      "Segment Tree queries take O(log n) time to compute the sum of any arbitrary range, due to the logarithmic depth of the tree.",
  },
  {
    question:
      "Which operation can be done in logarithmic time using a Disjoint Set data structure?",
    options: ["Union", "Find", "Both Union and Find", "None of the above"],
    correctAnswer: "Both Union and Find",
    explanation:
      "With path compression and union by rank, both Union and Find operations in Disjoint Set (Union-Find) can be done in O(α(n)) time, where α(n) is very close to constant.",
  },
  {
    question:
      "Which of the following problems is typically solved using a Suffix Tree?",
    options: [
      "Finding the longest common subsequence",
      "Pattern matching",
      "Calculating prefix sums",
      "Finding the minimum spanning tree",
    ],
    correctAnswer: "Pattern matching",
    explanation:
      "Suffix Trees are designed for efficient pattern matching, as they store all suffixes of a string and allow quick substring searches.",
  },
  {
    question:
      "Which data structure is best suited for handling dynamic connectivity queries?",
    options: ["Binary Search Tree", "Union-Find", "Queue", "Heap"],
    correctAnswer: "Union-Find",
    explanation:
      "Union-Find is optimized for dynamic connectivity queries, allowing efficient merging of components and finding of connected components.",
  },
  {
    question:
      "In a Fenwick Tree, what is the purpose of the 'Lowbit' function?",
    options: [
      "To find the parent node",
      "To calculate the range sum",
      "To find the next set bit in the binary representation of an index",
      "To optimize memory usage",
    ],
    correctAnswer:
      "To find the next set bit in the binary representation of an index",
    explanation:
      "Lowbit is used to isolate the least significant set bit in the binary representation of a number, which helps in determining the range of the current prefix sum.",
  },
  {
    question:
      "What is the time complexity of the 'Find' operation in Union-Find with path compression and union by rank?",
    options: ["O(log n)", "O(n)", "O(α(n))", "O(1)"],
    correctAnswer: "O(α(n))",
    explanation:
      "Path compression and union by rank improve the time complexity of 'Find' to O(α(n)) where α(n) is the inverse Ackermann function, which is nearly constant.",
  },
  {
    question:
      "Which algorithm uses a Segment Tree for efficient range query and update operations?",
    options: [
      "Kruskal's algorithm",
      "Dijkstra's algorithm",
      "Range Minimum Query",
      "Bellman-Ford algorithm",
    ],
    correctAnswer: "Range Minimum Query",
    explanation:
      "Range Minimum Queries can be efficiently solved with a Segment Tree, which allows for fast querying and updating of ranges.",
  },
  {
    question: "When would you use a Suffix Array instead of a Suffix Tree?",
    options: [
      "When memory is a concern",
      "When you need faster pattern matching",
      "When you need to handle suffix queries in constant time",
      "When you need to process large datasets",
    ],
    correctAnswer: "When memory is a concern",
    explanation:
      "Suffix Arrays are more memory-efficient than Suffix Trees but may take longer for certain operations like pattern matching and suffix queries.",
  },
  {
    question: "What type of queries is a Fenwick Tree most efficient for?",
    options: [
      "Range minimum queries",
      "Range sum queries",
      "Range product queries",
      "Range maximum queries",
    ],
    correctAnswer: "Range sum queries",
    explanation:
      "Fenwick Trees (also known as Binary Indexed Trees) are most efficient for computing prefix sums or range sum queries.",
  },
  {
    question:
      "What is the space complexity of a Segment Tree for an array of size n?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
    correctAnswer: "O(n)",
    explanation:
      "Segment Trees require O(n) space to store the tree structure, where n is the size of the input array.",
  },
  {
    question: "In which scenario is Union-Find typically used?",
    options: [
      "Performing prefix sum queries",
      "Finding the connected components in a graph",
      "Solving shortest path problems",
      "Finding the maximum sum subarray",
    ],
    correctAnswer: "Finding the connected components in a graph",
    explanation:
      "Union-Find is a data structure used to efficiently find and union connected components in a graph, often used in algorithms like Kruskal's MST.",
  },
  {
    question: "Which is a characteristic of a Suffix Tree?",
    options: [
      "It is a binary tree",
      "It stores only the unique substrings of a string",
      "It allows for linear time pattern matching",
      "It does not require preprocessing",
    ],
    correctAnswer: "It allows for linear time pattern matching",
    explanation:
      "Suffix Trees allow linear-time pattern matching for substring searches, making them ideal for string processing tasks.",
  },
  {
    question:
      "In the Union-Find data structure, what is the purpose of 'union by rank'?",
    options: [
      "To speed up path compression",
      "To minimize the size of trees",
      "To improve the speed of union operations",
      "To balance the trees",
    ],
    correctAnswer: "To minimize the size of trees",
    explanation:
      "Union by rank is a technique that minimizes the height of the trees during union operations, helping improve the performance of the 'Find' operation.",
  },
  {
    question:
      "Which of the following is NOT an operation supported by a Segment Tree?",
    options: ["Range sum", "Range maximum", "Range minimum", "Binary search"],
    correctAnswer: "Binary search",
    explanation:
      "Segment Trees support operations like range sum, maximum, and minimum queries, but they do not support binary search directly.",
  },
  {
    question:
      "What is the time complexity of a 'Build' operation in a Segment Tree?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
    correctAnswer: "O(n)",
    explanation:
      "Building a Segment Tree requires O(n) time, as each node needs to be initialized based on the array elements.",
  },
  {
    question: "Which of the following is a limitation of a Fenwick Tree?",
    options: [
      "Cannot handle point updates",
      "Cannot handle range queries",
      "Cannot handle multiple types of queries",
      "Cannot handle range updates",
    ],
    correctAnswer: "Cannot handle range updates",
    explanation:
      "Fenwick Trees only support point updates and prefix sum queries, making them less suitable for range updates compared to Segment Trees.",
  },
  {
    question: "In a Suffix Array, how are suffixes sorted?",
    options: [
      "By lexicographical order",
      "By length",
      "By frequency of characters",
      "By occurrence of vowels",
    ],
    correctAnswer: "By lexicographical order",
    explanation:
      "Suffix Arrays sort the suffixes of a string lexicographically, which allows efficient substring searching.",
  },
  {
    question: "Which of the following is NOT a feature of a Suffix Tree?",
    options: [
      "Can find the longest repeated substring",
      "Can search for substrings efficiently",
      "Can handle range queries",
      "Can find the longest common prefix of two strings",
    ],
    correctAnswer: "Can handle range queries",
    explanation:
      "Suffix Trees are designed for string processing tasks like substring search and longest common prefix but not for general range queries.",
  },
];
