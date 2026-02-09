export const test4 = [
  {
    question:
      "Which of the following tree traversal methods is not a depth-first traversal?",
    options: ["In-order", "Pre-order", "Post-order", "Level-order"],
    correctAnswer: "Level-order",
    explanation:
      "Level-order traversal is not a depth-first traversal. It visits nodes level by level, whereas in-depth traversal methods (in-order, pre-order, post-order) explore as deeply as possible before backtracking.",
  },

  {
    question:
      "What is the main advantage of using a self-balancing binary search tree?",
    options: [
      "Faster node deletions",
      "Lower memory usage",
      "Optimal search time complexity",
      "Increased data duplication",
    ],
    correctAnswer: "Optimal search time complexity",
    explanation:
      "Self-balancing binary search trees, such as AVL or Red-Black trees, maintain a balanced structure to ensure that search time complexity is O(log n), which is optimal for most operations.",
  },

  {
    question:
      "Which data structure can be efficiently used to implement breadth-first traversal of a tree?",
    options: ["Stack", "Queue", "Array", "Linked List"],
    correctAnswer: "Queue",
    explanation:
      "Breadth-first traversal uses a queue to explore nodes level by level. A queue allows nodes to be processed in the correct order.",
  },

  {
    question:
      "What is the minimum number of nodes in a perfect binary tree of height 3?",
    options: ["7", "9", "15", "31"],
    correctAnswer: "15",
    explanation:
      "A perfect binary tree of height 3 has all levels fully populated. The total number of nodes in a perfect binary tree is given by the formula: 2^(h+1) - 1.",
  },

  {
    question:
      "In an AVL tree, what is the maximum allowed difference in height between the left and right subtrees for any node?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "1",
    explanation:
      "An AVL tree is a self-balancing binary search tree where the difference in height between the left and right subtrees of any node is at most 1.",
  },

  {
    question:
      "What is the time complexity of inserting an element into a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a balanced binary search tree, insertion is performed in O(log n) time because the tree is kept balanced and maintains a logarithmic height.",
  },

  {
    question: "Which of the following is a characteristic of a Red-Black tree?",
    options: [
      "It is always perfectly balanced",
      "It ensures O(n) complexity for search operations",
      "It uses two colors to balance the tree's height",
      "It uses only one type of rotation during balancing",
    ],
    correctAnswer: "It uses two colors to balance the tree's height",
    explanation:
      "A Red-Black tree uses two colors (red and black) for nodes, which helps maintain balance and ensure logarithmic height, providing O(log n) complexity for search operations.",
  },

  {
    question:
      "In a tree, what is the maximum number of children a node can have in a ternary tree?",
    options: ["2", "3", "4", "Unlimited"],
    correctAnswer: "3",
    explanation:
      "In a ternary tree, each node can have at most 3 children, as the word 'ternary' indicates three (from the Latin 'ternus').",
  },

  {
    question: "What is a key feature of a complete binary tree?",
    options: [
      "It is always perfectly balanced",
      "All levels are fully filled except the last one, which is filled from left to right",
      "It is a binary search tree",
      "Each node must have exactly two children",
    ],
    correctAnswer:
      "All levels are fully filled except the last one, which is filled from left to right",
    explanation:
      "A complete binary tree is one where all levels except the last are fully filled, and the last level is filled from left to right.",
  },

  {
    question:
      "What type of tree is used in memory management to prevent fragmentation?",
    options: ["AVL tree", "Red-Black tree", "B-tree", "Heap"],
    correctAnswer: "Heap",
    explanation:
      "A heap is used in memory management to allocate and deallocate memory dynamically and efficiently. It prevents fragmentation by maintaining a specific order property.",
  },
  {
    question:
      "What is the time complexity of searching for an element in a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a balanced binary search tree, search operations take O(log n) time because the tree maintains a logarithmic height.",
  },

  {
    question:
      "Which traversal technique can be used to get the nodes of a binary tree in non-decreasing order?",
    options: [
      "Pre-order traversal",
      "In-order traversal",
      "Post-order traversal",
      "Level-order traversal",
    ],
    correctAnswer: "In-order traversal",
    explanation:
      "In-order traversal visits nodes in non-decreasing order in a binary search tree. It visits the left subtree, then the root, and then the right subtree.",
  },

  {
    question: "What is a node's 'parent' in a tree structure?",
    options: [
      "The node that is connected directly below it",
      "The node that is connected directly above it",
      "The node that is farthest from it",
      "The node that is the same level as it",
    ],
    correctAnswer: "The node that is connected directly above it",
    explanation:
      "In a tree, the parent node is the one that is directly above a given node, and the node that is directly below is called the child.",
  },

  {
    question:
      "In a binary tree, what is the maximum number of edges between any two nodes?",
    options: ["1", "2", "3", "n-1"],
    correctAnswer: "n-1",
    explanation:
      "In a binary tree with n nodes, the maximum number of edges between any two nodes is n-1, which occurs when the tree is a linear chain (degenerate tree).",
  },

  {
    question: "In a Red-Black tree, what must be true about the root node?",
    options: [
      "It must be red",
      "It must be black",
      "It must have exactly two children",
      "It must have a black depth of 2",
    ],
    correctAnswer: "It must be black",
    explanation:
      "In a Red-Black tree, the root node must always be black to maintain the balancing properties of the tree.",
  },

  {
    question:
      "Which of the following is NOT a property of a binary search tree?",
    options: [
      "The left child is less than the parent",
      "The right child is greater than the parent",
      "All nodes have exactly two children",
      "The left and right subtrees are also binary search trees",
    ],
    correctAnswer: "All nodes have exactly two children",
    explanation:
      "In a binary search tree, each node can have zero, one, or two children, not necessarily exactly two.",
  },

  {
    question:
      "In an AVL tree, which type of rotation is applied when the left child of the left subtree becomes unbalanced?",
    options: [
      "Left rotation",
      "Right rotation",
      "Left-right rotation",
      "Right-left rotation",
    ],
    correctAnswer: "Right rotation",
    explanation:
      "In an AVL tree, a right rotation is applied when the left child of the left subtree becomes unbalanced (left-heavy). This rotation helps to restore balance.",
  },

  {
    question:
      "Which of the following is the correct worst-case time complexity for searching in a skewed binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst case, if the binary search tree is skewed (like a linked list), searching takes O(n) time since there will be no branching at all.",
  },

  {
    question:
      "What is the space complexity of the recursive implementation of tree traversals?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity for recursive tree traversal is O(n) due to the function call stack. The maximum depth of the recursion is equal to the height of the tree, which can be O(n) in the worst case.",
  },

  {
    question: "Which tree data structure is used to index files in a database?",
    options: ["Binary Search Tree", "Heap", "B-tree", "Trie"],
    correctAnswer: "B-tree",
    explanation:
      "B-trees are used in databases and file systems for indexing because they allow efficient searching, insertion, and deletion operations in logarithmic time.",
  },
];
