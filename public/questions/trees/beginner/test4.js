export const test4 = [
  {
    question:
      "What is the maximum number of children a node can have in a binary tree?",
    options: ["1", "2", "3", "Unlimited"],
    correctAnswer: "2",
    explanation:
      "In a binary tree, each node can have at most two children, commonly referred to as left and right children.",
  },

  {
    question: "Which of the following is not a type of tree?",
    options: ["Binary tree", "Ternary tree", "Quad tree", "Hex tree"],
    correctAnswer: "Hex tree",
    explanation:
      "Hex tree is not a standard type of tree. Common types include binary, ternary, and quad trees, but not hex trees.",
  },

  {
    question:
      "In a binary search tree, what is the relationship between the left child and the parent node?",
    options: [
      "The left child is greater than the parent node",
      "The left child is smaller than the parent node",
      "The left child is equal to the parent node",
      "There is no relationship",
    ],
    correctAnswer: "The left child is smaller than the parent node",
    explanation:
      "In a binary search tree (BST), the left child must be smaller than the parent node, and the right child must be larger.",
  },

  {
    question:
      "Which traversal technique is used to obtain values in sorted order in a binary search tree?",
    options: ["Pre-order", "In-order", "Post-order", "Level-order"],
    correctAnswer: "In-order",
    explanation:
      "In-order traversal of a binary search tree produces the values in sorted (ascending) order.",
  },

  {
    question: "What is the degree of a node in a tree?",
    options: [
      "The number of children it has",
      "The number of levels it spans",
      "The number of nodes in the tree",
      "The height of the node",
    ],
    correctAnswer: "The number of children it has",
    explanation:
      "The degree of a node in a tree is the number of children it has. A node with no children is called a leaf.",
  },

  {
    question:
      "Which of the following is the time complexity of searching for a node in a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a balanced binary search tree, the time complexity for searching for a node is O(log n), where n is the number of nodes in the tree.",
  },

  {
    question: "What is a balanced binary tree?",
    options: [
      "A tree where all nodes have the same number of children",
      "A tree where the height of the left and right subtrees of any node differ by no more than 1",
      "A tree where all nodes are leaf nodes",
      "A tree where the number of nodes is equal to the number of edges",
    ],
    correctAnswer:
      "A tree where the height of the left and right subtrees of any node differ by no more than 1",
    explanation:
      "A balanced binary tree ensures that the height of the left and right subtrees of any node does not differ by more than 1, which helps maintain efficient operations.",
  },

  {
    question: "What is the depth of a node in a tree?",
    options: [
      "The number of edges from the node to the root",
      "The number of nodes in the tree",
      "The height of the tree",
      "The level of the node in the tree",
    ],
    correctAnswer: "The number of edges from the node to the root",
    explanation:
      "The depth of a node is the number of edges along the path from the node to the root of the tree.",
  },

  {
    question: "In a binary tree, if a node has no children, it is called:",
    options: ["A root", "A leaf", "An internal node", "A sibling"],
    correctAnswer: "A leaf",
    explanation:
      "A node in a tree that has no children is called a leaf node. It is a terminal node.",
  },

  {
    question:
      "What is the time complexity of inserting a node into a binary search tree (BST) in the worst case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst case, the time complexity of inserting a node into a binary search tree can be O(n), which occurs when the tree is unbalanced and resembles a linked list.",
  },
  {
    question: "What is the height of a tree?",
    options: [
      "The number of nodes in the tree",
      "The number of edges from the root to the deepest leaf",
      "The number of children of the root node",
      "The depth of the root node",
    ],
    correctAnswer: "The number of edges from the root to the deepest leaf",
    explanation:
      "The height of a tree is defined as the number of edges from the root to the deepest leaf node.",
  },

  {
    question:
      "In a binary tree, which of the following is not a valid traversal method?",
    options: ["Pre-order", "In-order", "Post-order", "Side-order"],
    correctAnswer: "Side-order",
    explanation:
      "Side-order is not a valid tree traversal method. Common methods include pre-order, in-order, and post-order.",
  },

  {
    question:
      "In which traversal method of a binary tree, the left subtree is visited first, then the root node, and then the right subtree?",
    options: ["Pre-order", "In-order", "Post-order", "Level-order"],
    correctAnswer: "In-order",
    explanation:
      "In in-order traversal, the left subtree is visited first, then the root node, and then the right subtree.",
  },

  {
    question:
      "Which of the following is the correct definition of a full binary tree?",
    options: [
      "A tree where every node has two children",
      "A tree where every node has either zero or two children",
      "A tree where all nodes have exactly one child",
      "A tree where all nodes are leaf nodes",
    ],
    correctAnswer: "A tree where every node has either zero or two children",
    explanation:
      "A full binary tree is a tree where every node has either zero or two children, but never just one child.",
  },

  {
    question: "What is a leaf node in a tree?",
    options: [
      "A node with no children",
      "A node with one child",
      "A node with two children",
      "A node with more than two children",
    ],
    correctAnswer: "A node with no children",
    explanation:
      "A leaf node is a node in a tree that has no children, meaning it is at the end of a branch.",
  },

  {
    question:
      "What is the time complexity of searching for an element in a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a balanced binary search tree, searching for an element takes O(log n) time, where n is the number of nodes in the tree.",
  },

  {
    question:
      "Which of the following types of trees has each node having exactly two children, except for the leaf nodes?",
    options: [
      "Binary search tree",
      "Full binary tree",
      "Complete binary tree",
      "Balanced binary tree",
    ],
    correctAnswer: "Full binary tree",
    explanation:
      "A full binary tree is one in which every node has exactly two children, except for the leaf nodes.",
  },

  {
    question:
      "In a binary tree, how many edges does a node with no children have?",
    options: ["0", "1", "2", "3"],
    correctAnswer: "0",
    explanation: "A node with no children is a leaf node and has zero edges.",
  },

  {
    question: "What is a perfect binary tree?",
    options: [
      "A tree where every node has exactly two children",
      "A tree where all non-leaf nodes have two children and all leaves are at the same level",
      "A tree where all nodes are leaf nodes",
      "A tree where all nodes have one child",
    ],
    correctAnswer:
      "A tree where all non-leaf nodes have two children and all leaves are at the same level",
    explanation:
      "In a perfect binary tree, all non-leaf nodes have exactly two children, and all the leaf nodes are at the same level.",
  },

  {
    question:
      "Which type of tree is best suited for searching large datasets quickly?",
    options: ["Binary search tree", "Trie", "B-tree", "AVL tree"],
    correctAnswer: "B-tree",
    explanation:
      "B-trees are widely used for databases and file systems because they provide efficient search, insert, and delete operations for large datasets.",
  },
];
