export const test3 = [
  {
    question: "What is the depth of a node in a tree?",
    options: [
      "The number of edges from the root to the node",
      "The number of edges from the node to the root",
      "The number of child nodes of the node",
      "The number of nodes in the tree",
    ],
    correctAnswer: "The number of edges from the root to the node",
    explanation:
      "The depth of a node is defined as the number of edges from the root node to the given node.",
  },

  {
    question: "Which traversal method visits nodes in left-root-right order?",
    options: ["Pre-order", "In-order", "Post-order", "Level-order"],
    correctAnswer: "In-order",
    explanation:
      "In-order traversal visits nodes in left-root-right order, first visiting the left subtree, then the root, and finally the right subtree.",
  },

  {
    question: "Which type of tree is a complete binary tree?",
    options: [
      "All nodes have exactly two children",
      "All levels except the last are completely filled, and all nodes are as left as possible",
      "All nodes have only one child",
      "No nodes are connected",
    ],
    correctAnswer:
      "All levels except the last are completely filled, and all nodes are as left as possible",
    explanation:
      "A complete binary tree is one where all levels except the last are fully filled, and all nodes in the last level are as left as possible.",
  },

  {
    question: "Which of the following tree structures is self-balancing?",
    options: ["Binary search tree", "AVL tree", "B-tree", "Trie"],
    correctAnswer: "AVL tree",
    explanation:
      "An AVL tree is a self-balancing binary search tree where the height of the two child subtrees of any node differs by no more than one.",
  },

  {
    question:
      "What is the primary difference between a binary tree and a binary search tree (BST)?",
    options: [
      "Binary trees have more than two children, while BSTs have exactly two children",
      "In a BST, the left child is smaller than the parent, and the right child is larger",
      "Binary trees have no restrictions on node values, while BSTs have specific ordering properties",
      "Binary trees store values in a sorted manner, while BSTs store values randomly",
    ],
    correctAnswer:
      "In a BST, the left child is smaller than the parent, and the right child is larger",
    explanation:
      "In a binary search tree (BST), for each node, the left child has a smaller value, and the right child has a larger value.",
  },

  {
    question: "Which traversal method visits nodes in root-left-right order?",
    options: ["Pre-order", "In-order", "Post-order", "Level-order"],
    correctAnswer: "Pre-order",
    explanation:
      "In pre-order traversal, nodes are visited in root-left-right order, first the root, then the left subtree, and finally the right subtree.",
  },

  {
    question:
      "In a binary tree, what is the term for a node that has no children?",
    options: ["Leaf node", "Root node", "Parent node", "Internal node"],
    correctAnswer: "Leaf node",
    explanation: "A leaf node in a binary tree is a node that has no children.",
  },

  {
    question: "What does a perfect binary tree look like?",
    options: [
      "All levels are completely filled",
      "All levels except the last are filled, and nodes in the last level are as left as possible",
      "Each node has exactly one child",
      "No nodes are connected",
    ],
    correctAnswer: "All levels are completely filled",
    explanation:
      "A perfect binary tree is one where all levels are fully filled, meaning every non-leaf node has exactly two children.",
  },

  {
    question: "In which traversal method are nodes processed level by level?",
    options: ["Pre-order", "In-order", "Post-order", "Level-order"],
    correctAnswer: "Level-order",
    explanation:
      "Level-order traversal processes nodes level by level from top to bottom, and from left to right within each level.",
  },

  {
    question: "What is the height of a complete binary tree with 7 nodes?",
    options: ["2", "3", "4", "1"],
    correctAnswer: "2",
    explanation:
      "In a complete binary tree, the height is the number of edges from the root to the farthest leaf. With 7 nodes, the height of the tree is 2.",
  },
  {
    question: "Which of the following is true about a binary tree?",
    options: [
      "Each node has at most one child",
      "Each node can have more than two children",
      "Each node can have exactly two children",
      "There is no restriction on the number of children for a node",
    ],
    correctAnswer: "Each node can have exactly two children",
    explanation:
      "A binary tree is a type of tree where each node has at most two children, referred to as the left and right children.",
  },

  {
    question: "What is a full binary tree?",
    options: [
      "Every node has either 0 or 2 children",
      "Every node has exactly one child",
      "All nodes have the same number of children",
      "The tree is completely balanced",
    ],
    correctAnswer: "Every node has either 0 or 2 children",
    explanation:
      "A full binary tree is a tree in which every node has either zero or two children.",
  },

  {
    question:
      "Which of the following traversal techniques can be used to traverse a binary tree?",
    options: ["Pre-order", "In-order", "Post-order", "All of the above"],
    correctAnswer: "All of the above",
    explanation:
      "Pre-order, in-order, and post-order are all valid techniques used to traverse a binary tree.",
  },

  {
    question: "What is the height of a tree with only one node?",
    options: ["1", "0", "2", "Cannot be determined"],
    correctAnswer: "0",
    explanation:
      "The height of a tree is defined as the number of edges on the longest path from the root to a leaf. A tree with only one node has no edges, so its height is 0.",
  },

  {
    question:
      "In a binary search tree (BST), where are values greater than the root node stored?",
    options: [
      "In the left subtree",
      "In the right subtree",
      "At the root",
      "Anywhere in the tree",
    ],
    correctAnswer: "In the right subtree",
    explanation:
      "In a binary search tree (BST), values greater than the root node are stored in the right subtree, while values smaller are stored in the left subtree.",
  },

  {
    question:
      "What is the minimum number of nodes in a binary tree of height 3?",
    options: ["7", "4", "8", "5"],
    correctAnswer: "4",
    explanation:
      "A binary tree of height 3 can have a minimum of 4 nodes, which occurs in a degenerate (or pathological) tree where each node has only one child.",
  },

  {
    question: "What is the order of the traversal for post-order?",
    options: [
      "Left, Root, Right",
      "Root, Left, Right",
      "Left, Right, Root",
      "Right, Left, Root",
    ],
    correctAnswer: "Left, Right, Root",
    explanation:
      "In post-order traversal, nodes are visited in the order: left subtree, right subtree, and finally the root.",
  },

  {
    question: "Which of the following is a property of a perfect binary tree?",
    options: [
      "All levels except the last are completely filled",
      "All nodes are as left as possible",
      "All leaf nodes are at the same level",
      "Only the root has children",
    ],
    correctAnswer: "All leaf nodes are at the same level",
    explanation:
      "In a perfect binary tree, all leaf nodes are at the same level, and all internal nodes have exactly two children.",
  },

  {
    question:
      "Which tree traversal method is used in the expression tree to evaluate mathematical expressions?",
    options: ["Pre-order", "In-order", "Post-order", "Level-order"],
    correctAnswer: "Post-order",
    explanation:
      "In an expression tree, post-order traversal is used to evaluate mathematical expressions, as it processes the operators after the operands.",
  },

  {
    question:
      "What is the maximum number of nodes at level 2 of a binary tree?",
    options: ["2", "4", "8", "16"],
    correctAnswer: "4",
    explanation:
      "In a binary tree, level 0 contains 1 node (the root), level 1 contains 2 nodes, and level 2 contains 4 nodes, which is the maximum number of nodes at that level.",
  },
];
