export const test2 = [
  {
    question:
      "Which traversal method is commonly used in creating a mirror image of a tree?",
    options: ["In-order", "Pre-order", "Post-order", "Level-order"],
    correctAnswer: "Post-order",
    explanation:
      "Post-order traversal is useful when creating a mirror image of a tree, as it ensures that the children are mirrored first before the node itself.",
  },

  {
    question:
      "What is the minimum height of a binary search tree with 15 nodes?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
    explanation:
      "The minimum height of a binary search tree with 15 nodes is 4, as it forms a perfectly balanced tree.",
  },

  {
    question: "Which of the following is not a valid type of binary tree?",
    options: [
      "Complete Binary Tree",
      "Perfect Binary Tree",
      "Left-skewed Binary Tree",
      "Circular Binary Tree",
    ],
    correctAnswer: "Circular Binary Tree",
    explanation:
      "A circular binary tree is not a valid type of binary tree. All other types (complete, perfect, left-skewed) are valid.",
  },

  {
    question:
      "In a binary tree, what is the maximum number of children a node can have?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    explanation:
      "A binary tree is a type of tree where each node can have at most two children, typically referred to as the left and right child.",
  },

  {
    question: "Which of the following tree structures is balanced?",
    options: ["AVL Tree", "Splay Tree", "Red-Black Tree", "All of the above"],
    correctAnswer: "All of the above",
    explanation:
      "All the listed tree structures, including AVL trees, Splay trees, and Red-Black trees, are balanced in some form.",
  },

  {
    question:
      "How do you delete a node from a binary search tree when it has two children?",
    options: [
      "Replace it with its in-order predecessor",
      "Replace it with its in-order successor",
      "Simply remove it",
      "None of the above",
    ],
    correctAnswer: "Replace it with its in-order successor",
    explanation:
      "When deleting a node with two children, it is typically replaced by either its in-order predecessor or successor to maintain the binary search tree property.",
  },

  {
    question: "In a binary tree, what is a leaf node?",
    options: [
      "A node with only one child",
      "A node with no children",
      "A node with two children",
      "A node with the largest value",
    ],
    correctAnswer: "A node with no children",
    explanation: "A leaf node in a binary tree is a node that has no children.",
  },

  {
    question:
      "Which traversal method is used to visit all nodes at the current depth before moving to the next depth?",
    options: ["Pre-order", "In-order", "Post-order", "Level-order"],
    correctAnswer: "Level-order",
    explanation:
      "Level-order traversal visits all nodes at the current depth before proceeding to the next depth, which is typically implemented using a queue.",
  },

  {
    question:
      "What is the height of a perfectly balanced binary tree with 7 nodes?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "2",
    explanation:
      "The height of a perfectly balanced binary tree with 7 nodes is 2, as it forms a complete tree with three levels.",
  },

  {
    question:
      "What is the height of a binary tree with 31 nodes in the best case scenario?",
    options: ["5", "4", "6", "7"],
    correctAnswer: "5",
    explanation:
      "A perfectly balanced binary tree with 31 nodes has a height of 5, as it has 5 levels.",
  },
  {
    question:
      "What is the time complexity of searching for an element in a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a balanced binary search tree, the time complexity of search is O(log n), as the height of the tree is logarithmic.",
  },

  {
    question:
      "In a binary tree, what is the number of edges on the path from the root to a leaf node called?",
    options: ["Depth", "Height", "Level", "Height of the tree"],
    correctAnswer: "Depth",
    explanation:
      "The number of edges from the root to a leaf node is called the depth of the node. The height of a tree is the longest path from the root to a leaf.",
  },

  {
    question: "What is a full binary tree?",
    options: [
      "A tree where every node has two children",
      "A tree where every node has at most two children",
      "A tree where all leaf nodes are at the same level",
      "A tree where every node has either zero or two children",
    ],
    correctAnswer: "A tree where every node has either zero or two children",
    explanation:
      "A full binary tree is a tree where every node has either zero or two children, with no nodes having only one child.",
  },

  {
    question:
      "Which traversal technique is used in finding the height of a tree?",
    options: [
      "Pre-order traversal",
      "In-order traversal",
      "Post-order traversal",
      "Level-order traversal",
    ],
    correctAnswer: "Post-order traversal",
    explanation:
      "Post-order traversal is typically used to calculate the height of a tree as it allows visiting the children of a node before the node itself.",
  },

  {
    question:
      "What is the key difference between a Binary Tree and a Binary Search Tree (BST)?",
    options: [
      "A Binary Tree can have more than two children",
      "A Binary Tree does not require ordering of values",
      "A BST has values ordered by a specific rule",
      "Both trees must be balanced",
    ],
    correctAnswer: "A BST has values ordered by a specific rule",
    explanation:
      "In a Binary Search Tree, values are ordered such that the left child is less than the parent, and the right child is greater, which is not a requirement in a regular binary tree.",
  },

  {
    question:
      "In a Binary Tree, which of the following is true about the root node?",
    options: [
      "It has no parent",
      "It has at least one child",
      "It can have only one child",
      "It must have two children",
    ],
    correctAnswer: "It has no parent",
    explanation:
      "The root node is the top-most node of a binary tree and does not have a parent.",
  },

  {
    question: "What is the purpose of a 'depth-first search' in a tree?",
    options: [
      "To explore all nodes at the current level before moving deeper",
      "To explore as far as possible along each branch before backtracking",
      "To explore all nodes in level-order",
      "To check for balanced tree properties",
    ],
    correctAnswer:
      "To explore as far as possible along each branch before backtracking",
    explanation:
      "Depth-first search (DFS) explores a branch as deep as possible before backtracking to explore other branches. This is done using a stack.",
  },

  {
    question:
      "In a binary search tree, which traversal method is typically used to print the nodes in ascending order?",
    options: ["Pre-order", "In-order", "Post-order", "Level-order"],
    correctAnswer: "In-order",
    explanation:
      "In-order traversal visits the nodes of a binary search tree in ascending order, as it recursively visits the left subtree, the root node, and then the right subtree.",
  },

  {
    question: "How is a tree height defined?",
    options: [
      "The number of edges from the root to the deepest node",
      "The number of nodes from the root to the deepest node",
      "The number of levels of the tree",
      "The number of child nodes in the tree",
    ],
    correctAnswer: "The number of edges from the root to the deepest node",
    explanation:
      "The height of a tree is the number of edges on the longest path from the root to the deepest leaf node.",
  },

  {
    question:
      "What is the time complexity of inserting a node into a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Inserting a node into a balanced binary search tree has a time complexity of O(log n), as the height of the tree is logarithmic.",
  },

  {
    question:
      "What is the space complexity of the recursive approach to traversing a binary tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of a recursive traversal is O(n), where n is the number of nodes in the tree, as recursion uses the call stack.",
  },
];
