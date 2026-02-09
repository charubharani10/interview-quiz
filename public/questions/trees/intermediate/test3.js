export const test3 = [
  {
    question: "What is the height of a tree with only one node?",
    options: ["0", "1", "2", "Undefined"],
    correctAnswer: "0",
    explanation:
      "The height of a tree with only one node is 0, as there are no edges in the tree.",
  },

  {
    question:
      "Which of the following traversal techniques is not used to traverse a binary tree?",
    options: [
      "In-order traversal",
      "Pre-order traversal",
      "Post-order traversal",
      "Level-order traversal",
      "Breadth-first traversal",
    ],
    correctAnswer: "Breadth-first traversal",
    explanation:
      "Breadth-first traversal is not used in binary trees directly. It is used in graph traversal. Binary tree traversal techniques are in-order, pre-order, post-order, and level-order.",
  },

  {
    question:
      "What type of tree is defined as a tree where all the nodes except the leaf nodes have exactly two children?",
    options: [
      "Complete binary tree",
      "Full binary tree",
      "Perfect binary tree",
      "Balanced binary tree",
    ],
    correctAnswer: "Full binary tree",
    explanation:
      "A full binary tree is a tree where all nodes except leaf nodes have exactly two children.",
  },

  {
    question: "Which of the following is true for a perfect binary tree?",
    options: [
      "All levels are completely filled",
      "It is always balanced",
      "It has the minimum number of nodes for a given height",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "A perfect binary tree is one where all levels are completely filled, it is balanced, and has the minimum number of nodes for a given height.",
  },

  {
    question:
      "What is the time complexity of searching for a node in an unbalanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "In an unbalanced binary search tree, the time complexity of search can degrade to O(n), where n is the number of nodes in the tree.",
  },

  {
    question:
      "What does it mean when a binary tree is described as 'complete'?",
    options: [
      "All nodes are filled from left to right",
      "All leaf nodes are at the same level",
      "All nodes except the last level are completely filled",
      "All levels are completely filled",
    ],
    correctAnswer: "All nodes except the last level are completely filled",
    explanation:
      "A complete binary tree is a binary tree where all nodes are filled from left to right except for the last level.",
  },

  {
    question: "Which traversal method is used to delete a binary tree?",
    options: [
      "Pre-order traversal",
      "In-order traversal",
      "Post-order traversal",
      "Level-order traversal",
    ],
    correctAnswer: "Post-order traversal",
    explanation:
      "Post-order traversal is typically used to delete a tree, as it visits each node's children first before deleting the node itself.",
  },

  {
    question:
      "Which of the following is a key property of a binary search tree?",
    options: [
      "Left subtree contains only nodes with values greater than the root",
      "Right subtree contains only nodes with values less than the root",
      "Left subtree contains only nodes with values less than the root",
      "Right subtree contains only nodes with values greater than the root",
    ],
    correctAnswer:
      "Left subtree contains only nodes with values less than the root",
    explanation:
      "In a binary search tree, the left subtree contains only nodes with values less than the root, while the right subtree contains only nodes with values greater than the root.",
  },

  {
    question: "How can you check if a binary tree is balanced?",
    options: [
      "By checking if it is a full binary tree",
      "By checking if the height of the left and right subtrees differ by no more than one",
      "By checking if all leaf nodes are at the same depth",
      "By traversing the tree and ensuring all nodes have two children",
    ],
    correctAnswer:
      "By checking if the height of the left and right subtrees differ by no more than one",
    explanation:
      "A binary tree is balanced if the height of the left and right subtrees of every node differ by no more than one.",
  },

  {
    question:
      "What is the maximum number of nodes at level 'l' in a binary tree?",
    options: ["l", "2^l", "l^2", "2^l - 1"],
    correctAnswer: "2^l",
    explanation:
      "At level 'l' in a binary tree, the maximum number of nodes is 2^l.",
  },
  {
    question: "What is a common characteristic of a binary tree's leaves?",
    options: [
      "They are all at the same depth",
      "They have no children",
      "They are all at the root level",
      "They are all connected to their parent nodes by two edges",
    ],
    correctAnswer: "They have no children",
    explanation:
      "Leaves in a binary tree have no children and are the nodes at the bottom of the tree.",
  },

  {
    question:
      "Which traversal order guarantees that a binary search tree is visited in ascending order?",
    options: ["Pre-order", "Post-order", "In-order", "Level-order"],
    correctAnswer: "In-order",
    explanation:
      "In-order traversal of a binary search tree visits the nodes in ascending order.",
  },

  {
    question:
      "In a binary tree, what is the parent of the left child of the root called?",
    options: [
      "The left child",
      "The left sibling",
      "The left parent",
      "The root node",
    ],
    correctAnswer: "The left child",
    explanation:
      "The left child of the root node is directly called the left child and is a node with no parent node above it.",
  },

  {
    question:
      "Which type of tree is designed to hold elements in a sorted order for efficient searching?",
    options: [
      "Binary search tree",
      "Binary heap",
      "AVL tree",
      "Complete binary tree",
    ],
    correctAnswer: "Binary search tree",
    explanation:
      "A binary search tree stores elements in a sorted order for efficient searching, insertion, and deletion.",
  },

  {
    question: "How is a balanced binary tree defined?",
    options: [
      "All nodes have the same number of children",
      "The difference in height between the left and right subtrees of every node is at most 2",
      "The depth of the left and right subtrees are equal",
      "The left and right subtrees are filled completely",
    ],
    correctAnswer:
      "The difference in height between the left and right subtrees of every node is at most 2",
    explanation:
      "A balanced binary tree is defined by the height difference between the left and right subtrees of each node being at most 1.",
  },

  {
    question:
      "Which of the following binary tree properties is true for a full binary tree?",
    options: [
      "Every node has exactly one child",
      "Every node except the leaf nodes has exactly two children",
      "All nodes have either 0 or 1 child",
      "All nodes have exactly two children",
    ],
    correctAnswer: "Every node except the leaf nodes has exactly two children",
    explanation:
      "A full binary tree is a binary tree in which every node except the leaves has exactly two children.",
  },

  {
    question:
      "How do you determine if a binary tree is a complete binary tree?",
    options: [
      "The tree is filled at all levels except possibly the last",
      "It has at least one leaf node",
      "All levels except the last are completely filled from left to right",
      "All nodes have two children",
    ],
    correctAnswer:
      "All levels except the last are completely filled from left to right",
    explanation:
      "A complete binary tree is one where all levels except the last are completely filled from left to right.",
  },

  {
    question:
      "What is the difference between a binary tree and a binary search tree?",
    options: [
      "Binary trees have only one child per node",
      "In binary trees, nodes can have arbitrary number of children",
      "In a binary search tree, nodes are arranged based on their key values",
      "Binary trees have no left or right subtrees",
    ],
    correctAnswer:
      "In a binary search tree, nodes are arranged based on their key values",
    explanation:
      "In a binary search tree, the key value of each node is arranged such that the left subtree has values smaller than the node, and the right subtree has values larger.",
  },

  {
    question:
      "Which type of binary tree provides optimal search time in most cases?",
    options: [
      "Binary tree",
      "Binary search tree",
      "AVL tree",
      "Complete binary tree",
    ],
    correctAnswer: "AVL tree",
    explanation:
      "An AVL tree is a balanced binary search tree, which ensures O(log n) time complexity for search operations.",
  },

  {
    question:
      "Which traversal method would you use to retrieve nodes from a binary tree in the order they are inserted?",
    options: ["Pre-order", "Post-order", "In-order", "Level-order"],
    correctAnswer: "Level-order",
    explanation:
      "Level-order traversal retrieves nodes from a binary tree in the order they are inserted, from top to bottom and left to right.",
  },
];
