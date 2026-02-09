export const test5 = [
  {
    question: "What is the degree of a node in a tree?",
    options: [
      "The number of edges connected to the node",
      "The number of children of the node",
      "The number of parent nodes of the node",
      "The number of siblings of the node",
    ],
    correctAnswer: "The number of children of the node",
    explanation:
      "The degree of a node is the number of children attached to that node.",
  },

  {
    question: "What is the depth of a node in a tree?",
    options: [
      "The number of ancestors of the node",
      "The number of edges from the node to the root",
      "The number of levels from the node to the root",
      "The number of leaves under the node",
    ],
    correctAnswer: "The number of edges from the node to the root",
    explanation:
      "The depth of a node is the number of edges from the node to the root.",
  },

  {
    question: "What is a binary search tree?",
    options: [
      "A tree where all nodes have exactly two children",
      "A tree where the left child is smaller than the parent and the right child is greater",
      "A tree where all nodes are at the same level",
      "A tree where the root has no children",
    ],
    correctAnswer:
      "A tree where the left child is smaller than the parent and the right child is greater",
    explanation:
      "In a binary search tree, the left child of a node is smaller than the parent, and the right child is larger.",
  },

  {
    question: "What does a binary tree with height 3 look like?",
    options: [
      "A tree with 3 nodes",
      "A tree with 7 nodes",
      "A tree with 15 nodes",
      "A tree with 9 nodes",
    ],
    correctAnswer: "A tree with 7 nodes",
    explanation:
      "A binary tree with height 3 contains 7 nodes, as the number of nodes in a perfect binary tree of height h is 2^(h+1) - 1.",
  },

  {
    question: "In a tree, what is the root node?",
    options: [
      "The first node",
      "The last node",
      "The node with no parent",
      "The node with the highest degree",
    ],
    correctAnswer: "The node with no parent",
    explanation:
      "The root node is the node in a tree that has no parent and serves as the topmost node in the tree.",
  },

  {
    question: "How can you determine the number of nodes in a binary tree?",
    options: [
      "By counting the total number of leaves",
      "By counting the number of edges in the tree",
      "By adding the degree of all nodes",
      "By traversing the tree using any traversal method",
    ],
    correctAnswer: "By traversing the tree using any traversal method",
    explanation:
      "The number of nodes in a tree can be counted by performing any tree traversal, such as in-order, pre-order, or post-order.",
  },

  {
    question:
      "Which of the following is a characteristic of a complete binary tree?",
    options: [
      "All nodes have two children",
      "All levels are completely filled except possibly the last level",
      "All nodes have at least one child",
      "The height of the tree is minimized",
    ],
    correctAnswer:
      "All levels are completely filled except possibly the last level",
    explanation:
      "In a complete binary tree, all levels are filled except possibly the last one, which is filled from left to right.",
  },

  {
    question: "What is a balanced binary tree?",
    options: [
      "A tree where all nodes have exactly two children",
      "A tree where the height difference between the left and right subtrees is no more than one",
      "A tree where all nodes are at the same depth",
      "A tree where all leaf nodes are at the same depth",
    ],
    correctAnswer:
      "A tree where the height difference between the left and right subtrees is no more than one",
    explanation:
      "A balanced binary tree is a tree where the height difference between the left and right subtrees of every node is no more than one.",
  },

  {
    question:
      "Which type of binary tree has nodes that are sorted in ascending order?",
    options: [
      "Binary search tree",
      "Complete binary tree",
      "Perfect binary tree",
      "Full binary tree",
    ],
    correctAnswer: "Binary search tree",
    explanation:
      "In a binary search tree, nodes are sorted in ascending order. The left child is always smaller than the parent, and the right child is larger.",
  },

  {
    question:
      "What is the maximum number of nodes in a binary tree of height 4?",
    options: ["31", "15", "7", "63"],
    correctAnswer: "31",
    explanation:
      "The maximum number of nodes in a binary tree of height h is 2^(h+1) - 1. For height 4, the number of nodes is 31.",
  },
  {
    question: "What is the height of a tree?",
    options: [
      "The number of edges from the root to the farthest leaf",
      "The number of nodes from the root to the farthest leaf",
      "The number of leaves in the tree",
      "The number of levels in the tree",
    ],
    correctAnswer: "The number of edges from the root to the farthest leaf",
    explanation:
      "The height of a tree is the number of edges from the root node to the farthest leaf node.",
  },

  {
    question:
      "In which tree structure does each node have at most two children?",
    options: ["Binary tree", "Ternary tree", "N-ary tree", "Trie"],
    correctAnswer: "Binary tree",
    explanation:
      "In a binary tree, each node has at most two children, typically called the left and right child.",
  },

  {
    question: "What is a leaf node in a tree?",
    options: [
      "A node with no children",
      "A node with two children",
      "A node with the highest degree",
      "A node that has only one child",
    ],
    correctAnswer: "A node with no children",
    explanation: "A leaf node is a node in a tree that has no children.",
  },

  {
    question:
      "Which traversal visits nodes in the following order: left, root, right?",
    options: ["In-order", "Pre-order", "Post-order", "Level-order"],
    correctAnswer: "In-order",
    explanation:
      "In in-order traversal, the left subtree is visited first, followed by the root node, and then the right subtree.",
  },

  {
    question: "What is the number of edges in a binary tree with 5 nodes?",
    options: ["5", "4", "6", "10"],
    correctAnswer: "4",
    explanation:
      "In a tree with n nodes, there are always n - 1 edges. Therefore, for 5 nodes, there are 4 edges.",
  },

  {
    question:
      "What is the maximum number of children a node can have in a binary tree?",
    options: ["One", "Two", "Three", "Any number"],
    correctAnswer: "Two",
    explanation: "In a binary tree, each node can have at most two children.",
  },

  {
    question:
      "Which traversal visits the root node first, followed by the left and right subtrees?",
    options: ["In-order", "Pre-order", "Post-order", "Level-order"],
    correctAnswer: "Pre-order",
    explanation:
      "In pre-order traversal, the root node is visited first, followed by the left subtree, and then the right subtree.",
  },

  {
    question: "What is the primary purpose of a balanced binary tree?",
    options: [
      "To make the tree as wide as possible",
      "To minimize the height of the tree and ensure efficient operations",
      "To ensure every node has two children",
      "To store data in sorted order",
    ],
    correctAnswer:
      "To minimize the height of the tree and ensure efficient operations",
    explanation:
      "A balanced binary tree helps minimize the height of the tree, ensuring efficient operations such as search, insertion, and deletion.",
  },

  {
    question: "What is the key feature of a perfect binary tree?",
    options: [
      "All leaf nodes are at the same depth",
      "Each node has exactly two children",
      "All nodes have the same degree",
      "The tree has minimal height",
    ],
    correctAnswer: "All leaf nodes are at the same depth",
    explanation:
      "A perfect binary tree is a binary tree in which all leaf nodes are at the same depth, and all internal nodes have exactly two children.",
  },

  {
    question:
      "In which tree traversal is the right subtree visited before the left subtree?",
    options: ["Pre-order", "Post-order", "In-order", "Reverse in-order"],
    correctAnswer: "Reverse in-order",
    explanation:
      "In reverse in-order traversal, the right subtree is visited first, followed by the root node, and then the left subtree.",
  },
];
