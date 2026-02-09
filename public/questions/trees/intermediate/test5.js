export const test5 = [
  {
    question:
      "In a binary tree, what is the minimum number of nodes needed to form a complete binary tree of height 3?",
    options: ["3", "5", "7", "9"],
    correctAnswer: "7",
    explanation:
      "A complete binary tree of height 3 has 7 nodes. It includes all levels except the last one, which is filled from left to right.",
  },

  {
    question: "What is a key property of a perfect binary tree?",
    options: [
      "All nodes have two children",
      "All levels are completely filled",
      "There is no child node without a parent",
      "The height is equal to the number of nodes",
    ],
    correctAnswer: "All levels are completely filled",
    explanation:
      "In a perfect binary tree, all levels are completely filled, meaning every node has exactly two children, and the tree is perfectly balanced.",
  },

  {
    question: "In a binary search tree (BST), the in-order traversal produces:",
    options: [
      "The nodes in ascending order",
      "The nodes in descending order",
      "The nodes in random order",
      "The nodes at the same level",
    ],
    correctAnswer: "The nodes in ascending order",
    explanation:
      "In-order traversal of a binary search tree results in nodes being visited in ascending order, which is a key property of the BST.",
  },

  {
    question:
      "What is the height of a balanced binary search tree with 15 nodes?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "3",
    explanation:
      "In a balanced binary search tree, the height is the logarithm base 2 of the number of nodes, rounded down. For 15 nodes, the height is 3.",
  },

  {
    question:
      "Which of the following is the worst-case time complexity for insertion in a binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst-case scenario, if the tree is unbalanced (degenerate or skewed), the insertion operation can take O(n) time.",
  },

  {
    question: "What is a key characteristic of a Red-Black Tree?",
    options: [
      "The root node is red",
      "The tree is balanced with a strict height restriction",
      "Each node must have exactly two children",
      "Nodes are colored to ensure balancing properties",
    ],
    correctAnswer: "Nodes are colored to ensure balancing properties",
    explanation:
      "A Red-Black Tree uses colors (red or black) to enforce balancing properties, such as ensuring the path to every leaf has the same number of black nodes.",
  },

  {
    question:
      "In a level-order traversal of a tree, which data structure is commonly used?",
    options: ["Stack", "Queue", "Array", "Hash Table"],
    correctAnswer: "Queue",
    explanation:
      "A queue is typically used for level-order traversal because it processes nodes in the order they are encountered, ensuring nodes at each level are visited sequentially.",
  },

  {
    question:
      "Which traversal technique is used to print the nodes of a binary tree from bottom-up?",
    options: [
      "Pre-order traversal",
      "In-order traversal",
      "Post-order traversal",
      "Level-order traversal",
    ],
    correctAnswer: "Post-order traversal",
    explanation:
      "Post-order traversal visits the nodes from the bottom up, as it recursively traverses the left and right subtrees before visiting the root.",
  },

  {
    question:
      "Which type of tree traversal guarantees visiting the root node after all of its children have been visited?",
    options: ["Pre-order", "In-order", "Post-order", "Level-order"],
    correctAnswer: "Post-order",
    explanation:
      "In post-order traversal, the root node is visited after all of its left and right subtrees have been traversed, making it a bottom-up approach.",
  },

  {
    question:
      "What is the time complexity of finding the maximum value in a binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "In a binary search tree, finding the maximum value in the worst case (if the tree is skewed) takes O(n) time as we must traverse to the far right.",
  },
  {
    question:
      "What is the time complexity of inserting an element in an AVL tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In an AVL tree, insertion maintains balance through rotations. As a result, the time complexity of insertion remains O(log n), ensuring logarithmic depth.",
  },

  {
    question:
      "Which of the following operations is NOT allowed in a binary search tree?",
    options: ["Insertion", "Deletion", "Searching", "Swapping elements"],
    correctAnswer: "Swapping elements",
    explanation:
      "Swapping elements is not a standard operation in a binary search tree. The typical operations are insertion, deletion, and searching based on the BST properties.",
  },

  {
    question:
      "Which traversal technique is typically used for printing the contents of a binary tree from top-down?",
    options: [
      "In-order traversal",
      "Pre-order traversal",
      "Post-order traversal",
      "Level-order traversal",
    ],
    correctAnswer: "Pre-order traversal",
    explanation:
      "Pre-order traversal visits the root node before its children, making it useful for top-down traversal of the tree.",
  },

  {
    question: "Which of the following describes a full binary tree?",
    options: [
      "All nodes have two children",
      "Every level except possibly the last is completely filled",
      "All nodes at each level are filled from left to right",
      "The tree is balanced with equal height on both sides",
    ],
    correctAnswer: "All nodes have two children",
    explanation:
      "A full binary tree is one in which every node has either zero or two children. This contrasts with complete or balanced trees.",
  },

  {
    question:
      "In which type of tree are the elements arranged such that for any given node, the left subtree contains only elements smaller than the node and the right subtree contains only elements larger?",
    options: ["Binary Tree", "Binary Search Tree", "AVL Tree", "Heap"],
    correctAnswer: "Binary Search Tree",
    explanation:
      "In a binary search tree (BST), for each node, the left subtree contains only elements smaller than the node, and the right subtree contains only elements larger, maintaining order.",
  },

  {
    question:
      "Which of the following properties are shared by a Binary Search Tree (BST) and an AVL Tree?",
    options: [
      "Both are self-balancing trees",
      "Both have logarithmic time complexity for search operations",
      "Both support duplicate values",
      "Both allow quick search, insertion, and deletion in O(n) time",
    ],
    correctAnswer:
      "Both have logarithmic time complexity for search operations",
    explanation:
      "Both BSTs and AVL trees provide logarithmic time complexity for search operations due to the balanced nature of the tree structure, though AVL trees are more strictly balanced.",
  },

  {
    question:
      "What is the key difference between a binary search tree and an AVL tree?",
    options: [
      "An AVL tree allows duplicate nodes, while a BST does not",
      "An AVL tree is more strictly balanced than a binary search tree",
      "A binary search tree has a higher space complexity",
      "An AVL tree allows more levels of depth than a binary search tree",
    ],
    correctAnswer:
      "An AVL tree is more strictly balanced than a binary search tree",
    explanation:
      "An AVL tree is a self-balancing binary search tree that maintains a strict balance condition, ensuring that the height difference between left and right subtrees is at most 1.",
  },

  {
    question:
      "What is the worst-case time complexity for searching an element in a binary search tree when it is completely unbalanced?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst-case scenario, when a binary search tree is completely unbalanced (like a linked list), the search operation takes O(n) time.",
  },

  {
    question:
      "In a binary tree, what is the term for a node that has no children?",
    options: ["Leaf", "Root", "Parent", "Child"],
    correctAnswer: "Leaf",
    explanation:
      "A leaf node is a node in a binary tree that has no children, meaning it is a terminal node.",
  },

  {
    question:
      "Which of the following is a method of traversing a tree in a depth-first manner?",
    options: [
      "Pre-order traversal",
      "Post-order traversal",
      "In-order traversal",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "All three traversal methods—pre-order, post-order, and in-order—are depth-first traversals as they explore a tree’s nodes deeply along each branch.",
  },
];
