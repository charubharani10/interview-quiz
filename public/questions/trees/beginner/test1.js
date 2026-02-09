export const test1 = [
  {
    question: "What is a tree in data structures?",
    options: [
      "A linear data structure",
      "A non-linear data structure",
      "A type of stack",
      "A type of queue",
    ],
    correctAnswer: "A non-linear data structure",
    explanation:
      "A tree is a non-linear data structure consisting of nodes connected by edges. Unlike arrays or linked lists, trees allow hierarchical relationships between elements.",
  },

  {
    question: "Which of the following is not a type of binary tree?",
    options: [
      "Complete Binary Tree",
      "Balanced Binary Tree",
      "Circular Binary Tree",
      "Full Binary Tree",
    ],
    correctAnswer: "Circular Binary Tree",
    explanation:
      "A Circular Binary Tree is not a standard type of binary tree. Binary trees can be classified as full, complete, or balanced.",
  },

  {
    question:
      "What is the maximum number of children a node can have in a binary tree?",
    options: ["1", "2", "3", "No limit"],
    correctAnswer: "2",
    explanation:
      "In a binary tree, each node can have a maximum of two children: left and right.",
  },

  {
    question: "What is the root of a tree?",
    options: [
      "The last node in the tree",
      "The node with no parent",
      "The first node in the tree",
      "The node with the highest value",
    ],
    correctAnswer: "The node with no parent",
    explanation:
      "The root is the topmost node in a tree and does not have any parent. All other nodes are its descendants.",
  },

  {
    question: "What is the depth of a tree?",
    options: [
      "The number of edges from the root to the deepest node",
      "The number of nodes in the tree",
      "The number of children in the tree",
      "The number of levels in the tree",
    ],
    correctAnswer: "The number of edges from the root to the deepest node",
    explanation:
      "The depth of a tree is defined as the number of edges from the root to the deepest node in the tree.",
  },

  {
    question:
      "In which traversal method of a binary tree is the root node visited first?",
    options: [
      "In-order traversal",
      "Pre-order traversal",
      "Post-order traversal",
      "Level-order traversal",
    ],
    correctAnswer: "Pre-order traversal",
    explanation:
      "In pre-order traversal, the root node is visited first, followed by the left subtree and then the right subtree.",
  },

  {
    question:
      "Which type of tree is balanced if the height of the left and right subtrees of any node differ by at most 1?",
    options: ["AVL Tree", "Binary Search Tree", "Red-Black Tree", "B-Tree"],
    correctAnswer: "AVL Tree",
    explanation:
      "An AVL tree is a self-balancing binary search tree where the height of the left and right subtrees differ by at most 1.",
  },

  {
    question: "What is the height of a tree?",
    options: [
      "The number of nodes in the longest path from the root to a leaf",
      "The number of edges in the longest path from the root to a leaf",
      "The number of nodes at the bottom level",
      "The number of levels in the tree",
    ],
    correctAnswer:
      "The number of edges in the longest path from the root to a leaf",
    explanation:
      "The height of a tree is the number of edges in the longest path from the root to a leaf node.",
  },

  {
    question: "In a binary tree, which node is considered a leaf node?",
    options: [
      "A node with no children",
      "A node with two children",
      "A node with one child",
      "The node with the highest value",
    ],
    correctAnswer: "A node with no children",
    explanation:
      "A leaf node is a node that does not have any children in a binary tree.",
  },

  {
    question:
      "What is the primary difference between a binary tree and a binary search tree?",
    options: [
      "A binary tree is more efficient",
      "A binary search tree has ordered nodes",
      "A binary tree can have more than two children",
      "A binary search tree has no left subtree",
    ],
    correctAnswer: "A binary search tree has ordered nodes",
    explanation:
      "In a binary search tree, for each node, all elements in its left subtree are smaller, and all elements in its right subtree are larger.",
  },
  {
    question:
      "Which of the following is the correct definition of a binary tree?",
    options: [
      "A tree where each node has at most three children",
      "A tree where each node has at most two children",
      "A tree where each node has one child",
      "A tree where every node has the same number of children",
    ],
    correctAnswer: "A tree where each node has at most two children",
    explanation:
      "A binary tree is a type of tree where each node can have at most two children: a left child and a right child.",
  },

  {
    question: "What is a node in a tree?",
    options: [
      "A point that holds data and references to other nodes",
      "A set of edges in a tree",
      "The root node of the tree",
      "The leaves of the tree",
    ],
    correctAnswer: "A point that holds data and references to other nodes",
    explanation:
      "A node in a tree is an element that contains data and links to its child nodes (if any). It forms the basic unit of a tree structure.",
  },

  {
    question: "In a binary tree, what is a parent node?",
    options: [
      "A node that has no children",
      "A node that is the left child of its parent",
      "A node that has one or more children",
      "A node that is the root",
    ],
    correctAnswer: "A node that has one or more children",
    explanation:
      "A parent node is a node that has one or more children in a binary tree.",
  },

  {
    question:
      "Which of the following is not a valid traversal method of a tree?",
    options: [
      "In-order traversal",
      "Pre-order traversal",
      "Post-order traversal",
      "Reverse-order traversal",
    ],
    correctAnswer: "Reverse-order traversal",
    explanation:
      "Reverse-order traversal is not a standard tree traversal method. The correct traversal methods are in-order, pre-order, and post-order.",
  },

  {
    question: "What is the left subtree of a node in a binary tree?",
    options: [
      "The subtree that contains only left children",
      "The subtree rooted at the left child of the node",
      "The subtree that contains both left and right children",
      "The subtree rooted at the right child of the node",
    ],
    correctAnswer: "The subtree rooted at the left child of the node",
    explanation:
      "The left subtree of a node in a binary tree is the subtree that is rooted at the left child of the node.",
  },

  {
    question:
      "In a binary tree, which of the following is true about a leaf node?",
    options: [
      "It has at most one child",
      "It has no children",
      "It has exactly two children",
      "It has the highest value in the tree",
    ],
    correctAnswer: "It has no children",
    explanation:
      "A leaf node in a binary tree is a node that does not have any children.",
  },

  {
    question: "What is the main advantage of using a tree data structure?",
    options: [
      "Trees provide fast access to data",
      "Trees allow for hierarchical storage of data",
      "Trees are better than arrays for storing large amounts of data",
      "Trees use less memory than linked lists",
    ],
    correctAnswer: "Trees allow for hierarchical storage of data",
    explanation:
      "Trees are useful for storing hierarchical data, such as file systems, database indexing, and organizational charts.",
  },

  {
    question: "In an N-ary tree, each node can have at most how many children?",
    options: ["One", "Two", "Three", "N"],
    correctAnswer: "N",
    explanation: "In an N-ary tree, each node can have at most N children.",
  },

  {
    question: "What is the key characteristic of a binary search tree (BST)?",
    options: [
      "The left subtree contains values greater than the parent",
      "The right subtree contains values greater than the parent",
      "The left subtree contains values smaller than the parent",
      "The left and right subtrees are not sorted",
    ],
    correctAnswer: "The left subtree contains values smaller than the parent",
    explanation:
      "In a binary search tree, for each node, all the values in the left subtree are smaller, and all the values in the right subtree are larger than the node.",
  },

  {
    question: "What is the primary purpose of balancing a binary search tree?",
    options: [
      "To ensure that the tree is complete",
      "To improve the efficiency of tree operations",
      "To ensure that the tree has the highest height possible",
      "To reduce the number of child nodes",
    ],
    correctAnswer: "To improve the efficiency of tree operations",
    explanation:
      "Balancing a binary search tree helps maintain efficient time complexity for operations such as insertion, deletion, and search. An unbalanced tree can degrade performance.",
  },
];
