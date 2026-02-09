export const test1 = [
  {
    question:
      "What is the time complexity of constructing a Segment Tree for an array of size n?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    correctAnswer: "O(n log n)",
    explanation:
      "Constructing a Segment Tree requires O(n log n) time as each node in the tree is updated based on its children.",
  },
  {
    question: "Which operation is efficiently supported by a Segment Tree?",
    options: [
      "Single element update",
      "Range query",
      "Both range query and point update",
      "None",
    ],
    correctAnswer: "Both range query and point update",
    explanation:
      "Segment Trees allow efficient range queries and point updates in logarithmic time.",
  },
  {
    question:
      "What is the space complexity of a Segment Tree for an array of size n?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(2n - 1)"],
    correctAnswer: "O(2n - 1)",
    explanation:
      "The space complexity is O(2n - 1) as a complete binary tree is formed with n leaves and n-1 internal nodes.",
  },
  {
    question:
      "Which of the following operations can be performed in O(log n) time in a Segment Tree?",
    options: [
      "Range query",
      "Updating a single element",
      "Both range query and update",
      "Inserting a new element",
    ],
    correctAnswer: "Both range query and update",
    explanation:
      "Segment Trees can handle range queries and updates in O(log n) time due to their balanced binary tree structure.",
  },
  {
    question: "What type of problems are Segment Trees primarily used for?",
    options: [
      "Sorting",
      "Dynamic programming",
      "Range query problems",
      "Graph traversal",
    ],
    correctAnswer: "Range query problems",
    explanation:
      "Segment Trees are ideal for problems involving range queries like range minimum/maximum and sum queries.",
  },
  {
    question:
      "How many leaf nodes does a Segment Tree for an array of size n contain?",
    options: ["n", "n-1", "n/2", "2n"],
    correctAnswer: "n",
    explanation:
      "A Segment Tree contains n leaf nodes, one for each element in the input array.",
  },
  {
    question: "In a Segment Tree, what does each internal node represent?",
    options: [
      "A single element",
      "A subrange of elements",
      "The sum of all elements",
      "The maximum element",
    ],
    correctAnswer: "A subrange of elements",
    explanation:
      "Each internal node of a Segment Tree represents a subrange of elements from the original array.",
  },
  {
    question:
      "For an array of size n, what is the maximum height of the corresponding Segment Tree?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(2^n)"],
    correctAnswer: "O(log n)",
    explanation:
      "The height of a Segment Tree is O(log n), as it is a balanced binary tree.",
  },
  {
    question:
      "Which of the following problems can be solved efficiently using Segment Trees?",
    options: [
      "Graph coloring",
      "Range minimum query",
      "Breadth-first search",
      "Infix to postfix conversion",
    ],
    correctAnswer: "Range minimum query",
    explanation:
      "Segment Trees are commonly used to solve range query problems like range minimum queries.",
  },
  {
    question:
      "Which data structure can be considered a simpler version of a Segment Tree for range sum queries?",
    options: ["Binary search tree", "Fenwick Tree", "Heap", "AVL Tree"],
    correctAnswer: "Fenwick Tree",
    explanation:
      "A Fenwick Tree (Binary Indexed Tree) can also handle range sum queries but is simpler and takes less space than a Segment Tree.",
  },
  {
    question: "What is another name for a Fenwick Tree?",
    options: [
      "AVL Tree",
      "Segment Tree",
      "Binary Indexed Tree",
      "Red-Black Tree",
    ],
    correctAnswer: "Binary Indexed Tree",
    explanation:
      "A Fenwick Tree is also known as a Binary Indexed Tree (BIT), and it's used for efficiently performing range queries.",
  },
  {
    question: "What is the primary use of a Fenwick Tree?",
    options: [
      "Sorting",
      "Graph traversal",
      "Range sum queries and updates",
      "String matching",
    ],
    correctAnswer: "Range sum queries and updates",
    explanation:
      "Fenwick Trees are primarily used to solve problems involving range sum queries and point updates efficiently.",
  },
  {
    question: "What is the time complexity of point updates in a Fenwick Tree?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Both point updates and prefix sum queries can be done in O(log n) time using a Fenwick Tree.",
  },
  {
    question:
      "What is the space complexity of a Fenwick Tree for an array of size n?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "A Fenwick Tree has the same space complexity as the input array, i.e., O(n).",
  },
  {
    question: "In a Fenwick Tree, how is the parent of a node found?",
    options: [
      "By moving left in the tree",
      "By subtracting the last set bit from the index",
      "By adding the last set bit to the index",
      "By dividing the index by 2",
    ],
    correctAnswer: "By subtracting the last set bit from the index",
    explanation:
      "In a Binary Indexed Tree, the parent of a node is found by subtracting the last set bit from the current index.",
  },
  {
    question:
      "Which operation is more efficient in a Fenwick Tree compared to a Segment Tree?",
    options: [
      "Point updates",
      "Range queries",
      "Both are equally efficient",
      "None",
    ],
    correctAnswer: "Point updates",
    explanation:
      "Fenwick Trees tend to have a smaller constant factor, making point updates more efficient compared to Segment Trees.",
  },
  {
    question:
      "What type of queries can be efficiently solved using a Fenwick Tree?",
    options: [
      "Single element lookup",
      "Range sum queries",
      "Sorting",
      "Inorder traversal",
    ],
    correctAnswer: "Range sum queries",
    explanation:
      "Fenwick Trees are designed to efficiently handle range sum queries and single element updates.",
  },
  {
    question:
      "How is the prefix sum of elements in a range [0, i] calculated in a Fenwick Tree?",
    options: [
      "By iterating through all elements",
      "By summing up relevant nodes in the tree",
      "By binary search",
      "By linear scan",
    ],
    correctAnswer: "By summing up relevant nodes in the tree",
    explanation:
      "A Fenwick Tree calculates prefix sums by summing up nodes in the tree that represent portions of the array.",
  },
  {
    question:
      "What is the difference between a Fenwick Tree and a Segment Tree in terms of space complexity?",
    options: [
      "Fenwick Tree uses O(n log n) space, Segment Tree uses O(n)",
      "Both use the same space, O(n)",
      "Fenwick Tree uses O(n), Segment Tree uses O(2n - 1)",
      "Fenwick Tree uses O(log n), Segment Tree uses O(n)",
    ],
    correctAnswer: "Fenwick Tree uses O(n), Segment Tree uses O(2n - 1)",
    explanation:
      "A Fenwick Tree uses O(n) space, while a Segment Tree typically uses O(2n - 1) space.",
  },
  {
    question:
      "Which of the following is NOT a valid operation for a Fenwick Tree?",
    options: [
      "Range sum query",
      "Point update",
      "Range minimum query",
      "Prefix sum query",
    ],
    correctAnswer: "Range minimum query",
    explanation:
      "Fenwick Trees do not support range minimum queries. They are primarily used for range sum and prefix sum queries.",
  },
];
