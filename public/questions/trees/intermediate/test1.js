export const test1 = [
  {
    question:
      "What is the time complexity of searching in a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a balanced binary search tree, the time complexity for search is O(log n), where n is the number of nodes.",
  },

  {
    question:
      "In a binary tree, if a node has two children, what can we say about its position?",
    options: [
      "It is a leaf node",
      "It is a root node",
      "It is an internal node",
      "It is a subtree",
    ],
    correctAnswer: "It is an internal node",
    explanation:
      "An internal node is a node that has at least one child. If it has two children, it is still an internal node.",
  },

  {
    question:
      "Which tree traversal is useful for printing a binary tree from the top to bottom level?",
    options: ["Level-order", "In-order", "Pre-order", "Post-order"],
    correctAnswer: "Level-order",
    explanation:
      "Level-order traversal visits nodes level by level from top to bottom, which is useful for printing a tree from top to bottom.",
  },

  {
    question:
      "In a binary tree, the sum of the number of nodes at all levels is always:",
    options: [
      "A power of 2",
      "Equal to the number of leaves",
      "Equal to the number of edges",
      "A perfect square",
    ],
    correctAnswer: "A power of 2",
    explanation:
      "The number of nodes at level 'i' of a perfect binary tree is 2^i, making the total number of nodes at all levels a sum of powers of 2.",
  },

  {
    question:
      "In a full binary tree, every non-leaf node has how many children?",
    options: ["Zero", "One", "Two", "Three"],
    correctAnswer: "Two",
    explanation:
      "In a full binary tree, every non-leaf node has exactly two children, which makes it different from a complete or perfect binary tree.",
  },

  {
    question:
      "Which tree traversal is used to find the inorder predecessor of a node?",
    options: ["In-order", "Pre-order", "Post-order", "Level-order"],
    correctAnswer: "In-order",
    explanation:
      "The in-order traversal can be used to find the inorder predecessor by going one step back in the sequence after visiting the current node.",
  },

  {
    question:
      "How do we handle deleting a node with two children in a binary search tree?",
    options: [
      "Remove the node and update the parent pointer",
      "Replace the node with its left child",
      "Replace the node with its in-order predecessor or successor",
      "Remove all the children first",
    ],
    correctAnswer:
      "Replace the node with its in-order predecessor or successor",
    explanation:
      "To delete a node with two children in a binary search tree, we replace it with its in-order predecessor or successor and then remove the predecessor or successor.",
  },

  {
    question:
      "What is the main difference between a binary search tree and a binary tree?",
    options: [
      "In a binary search tree, nodes must follow a specific ordering property",
      "Binary trees allow multiple child nodes",
      "In a binary search tree, every node has at most two children",
      "Binary trees have no parent node",
    ],
    correctAnswer:
      "In a binary search tree, nodes must follow a specific ordering property",
    explanation:
      "The key difference is that in a binary search tree, for each node, the left subtree contains nodes with smaller values and the right subtree contains nodes with larger values.",
  },

  {
    question:
      "What is the maximum number of nodes at level 'k' in a binary tree?",
    options: ["2^k", "2^(k-1)", "k^2", "k!"],
    correctAnswer: "2^k",
    explanation:
      "The maximum number of nodes at level 'k' in a binary tree is 2^k, where 'k' is the level number starting from 0.",
  },

  {
    question:
      "In a red-black tree, which property ensures the tree remains balanced?",
    options: [
      "The number of black nodes must be the same on all paths from the root to the leaves",
      "The root node must be red",
      "No two red nodes can be adjacent",
      "Each node must have a left and right child",
    ],
    correctAnswer:
      "The number of black nodes must be the same on all paths from the root to the leaves",
    explanation:
      "In a red-black tree, the property that ensures balance is that all paths from the root to the leaves must contain the same number of black nodes.",
  },
  {
    question:
      "What is the time complexity of searching for a value in a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a balanced binary search tree, the time complexity for searching is O(log n), where n is the number of nodes.",
  },

  {
    question: "In a complete binary tree, how many children can a node have?",
    options: ["Zero", "One", "Two", "Three"],
    correctAnswer: "Two",
    explanation:
      "In a complete binary tree, every node (except the leaves) must have exactly two children.",
  },

  {
    question:
      "What is the key difference between a binary tree and a binary search tree?",
    options: [
      "Binary trees have no constraints on node values",
      "Binary trees have exactly two children per node",
      "Binary search trees are always balanced",
      "Binary search trees allow for faster lookups",
    ],
    correctAnswer: "Binary trees have no constraints on node values",
    explanation:
      "A binary search tree follows a strict ordering property, while a binary tree has no such constraints on node values.",
  },

  {
    question:
      "In a binary tree, what is the maximum number of nodes at level 3?",
    options: ["2^3", "2^2", "2^4", "2^5"],
    correctAnswer: "2^3",
    explanation:
      "The maximum number of nodes at level 'k' in a binary tree is 2^k. At level 3, there can be 2^3 = 8 nodes.",
  },

  {
    question:
      "In which traversal method is the left child processed before the right child?",
    options: ["In-order", "Pre-order", "Post-order", "Level-order"],
    correctAnswer: "Pre-order",
    explanation:
      "In pre-order traversal, the node is processed first, followed by the left child and then the right child.",
  },

  {
    question:
      "Which tree traversal method is best for printing the nodes of a binary tree in sorted order?",
    options: ["Pre-order", "Post-order", "In-order", "Level-order"],
    correctAnswer: "In-order",
    explanation:
      "In-order traversal visits nodes in sorted order, making it ideal for printing the elements of a binary search tree in ascending order.",
  },

  {
    question: "In a red-black tree, which color must the root node always be?",
    options: ["Red", "Black", "Green", "White"],
    correctAnswer: "Black",
    explanation:
      "In a red-black tree, the root node is always black as part of the properties that ensure the tree remains balanced.",
  },

  {
    question:
      "In a balanced binary tree, what is the relationship between the height of the tree and the number of nodes?",
    options: [
      "Height is proportional to the square root of the number of nodes",
      "Height is equal to the logarithm of the number of nodes",
      "Height is proportional to the number of nodes",
      "Height is constant regardless of the number of nodes",
    ],
    correctAnswer: "Height is equal to the logarithm of the number of nodes",
    explanation:
      "In a balanced binary tree, the height is proportional to log n, where n is the number of nodes.",
  },

  {
    question:
      "In which type of binary tree does every node have either zero or two children?",
    options: [
      "Complete Binary Tree",
      "Full Binary Tree",
      "Perfect Binary Tree",
      "Skewed Binary Tree",
    ],
    correctAnswer: "Full Binary Tree",
    explanation:
      "In a full binary tree, every node either has two children or none (leaf nodes).",
  },

  {
    question: "In an AVL tree, what is the balance factor of a node?",
    options: [
      "The difference between the number of nodes in the left and right subtrees",
      "The height of the left subtree",
      "The height of the right subtree",
      "The number of descendants of the node",
    ],
    correctAnswer:
      "The difference between the number of nodes in the left and right subtrees",
    explanation:
      "The balance factor of a node in an AVL tree is the difference in height between the left and right subtrees. A balance factor of -1, 0, or 1 is allowed.",
  },
];
