export const test2 = [
  {
    question: "What is the root of a tree?",
    options: [
      "The node with no children",
      "The first node added to the tree",
      "The topmost node of the tree",
      "The last node added to the tree",
    ],
    correctAnswer: "The topmost node of the tree",
    explanation:
      "The root of a tree is the topmost node in a tree. It has no parent and is the starting point of all traversals.",
  },

  {
    question: "In a binary tree, what is the height of a tree?",
    options: [
      "The number of nodes in the tree",
      "The number of edges on the longest path from the root to a leaf",
      "The number of children of the root node",
      "The depth of the deepest node",
    ],
    correctAnswer:
      "The number of edges on the longest path from the root to a leaf",
    explanation:
      "The height of a tree is defined as the number of edges along the longest path from the root to any leaf.",
  },

  {
    question: "What is a complete binary tree?",
    options: [
      "A tree in which all levels except the last are completely filled, and all nodes are as far left as possible",
      "A tree in which every node has two children",
      "A tree with no missing nodes",
      "A tree in which the number of nodes on each level is the same",
    ],
    correctAnswer:
      "A tree in which all levels except the last are completely filled, and all nodes are as far left as possible",
    explanation:
      "A complete binary tree is one where all levels, except possibly the last, are fully filled, and nodes in the last level are filled from left to right.",
  },

  {
    question: "In which order is the post-order traversal of a tree performed?",
    options: [
      "Root, left, right",
      "Left, right, root",
      "Right, left, root",
      "Left, root, right",
    ],
    correctAnswer: "Left, right, root",
    explanation:
      "Post-order traversal visits the left subtree first, then the right subtree, and finally the root node.",
  },

  {
    question:
      "Which of the following is a characteristic of a balanced binary tree?",
    options: [
      "All leaf nodes are at the same level",
      "The height of the left and right subtrees of every node differ by at most one",
      "The root node has the highest value",
      "The tree is perfectly balanced at every level",
    ],
    correctAnswer:
      "The height of the left and right subtrees of every node differ by at most one",
    explanation:
      "In a balanced binary tree, the left and right subtrees of every node should have a height difference of at most one.",
  },

  {
    question:
      "Which of the following is true about the in-order traversal of a binary search tree?",
    options: [
      "It visits the root first, then the left subtree, and finally the right subtree",
      "It visits the left subtree first, then the root, and finally the right subtree",
      "It visits the right subtree first, then the root, and finally the left subtree",
      "It visits the root first, then the right subtree, and finally the left subtree",
    ],
    correctAnswer:
      "It visits the left subtree first, then the root, and finally the right subtree",
    explanation:
      "In-order traversal of a binary search tree visits nodes in ascending order, starting from the leftmost node and ending with the rightmost.",
  },

  {
    question:
      "Which of the following tree types does not allow duplicate elements?",
    options: ["Binary search tree", "Binary tree", "N-ary tree", "AVL tree"],
    correctAnswer: "Binary search tree",
    explanation:
      "A binary search tree (BST) does not allow duplicate elements. All values in the left subtree are smaller than the parent, and all values in the right subtree are greater.",
  },

  {
    question: "In a tree, what is a sibling?",
    options: [
      "A node that has the same parent as another node",
      "A node that has the same value as another node",
      "A node that is directly connected to another node",
      "A node that appears after another node in a traversal",
    ],
    correctAnswer: "A node that has the same parent as another node",
    explanation: "In a tree, siblings are nodes that share the same parent.",
  },

  {
    question: "What is a depth-first search in trees?",
    options: [
      "A search method that explores as far as possible down a branch before backtracking",
      "A search method that explores level by level",
      "A search method that finds the root node first",
      "A search method that explores the leaves first",
    ],
    correctAnswer:
      "A search method that explores as far as possible down a branch before backtracking",
    explanation:
      "Depth-first search (DFS) explores a tree branch as far as possible before backtracking and visiting the next branch.",
  },

  {
    question: "What is the main characteristic of a degenerate tree?",
    options: [
      "It is fully balanced",
      "It resembles a linked list, where each node has only one child",
      "It has no children",
      "All nodes are leaf nodes",
    ],
    correctAnswer:
      "It resembles a linked list, where each node has only one child",
    explanation:
      "A degenerate tree is a tree where each node has only one child, making it resemble a linked list.",
  },
  {
    question: "What is the degree of a node in a tree?",
    options: [
      "The number of child nodes of the node",
      "The number of parent nodes of the node",
      "The level of the node in the tree",
      "The height of the node in the tree",
    ],
    correctAnswer: "The number of child nodes of the node",
    explanation:
      "The degree of a node is the number of child nodes it has in a tree.",
  },

  {
    question:
      "In a binary tree, how many maximum nodes can exist at level 'l'?",
    options: ["l", "2^l", "2^l - 1", "2^(l+1) - 1"],
    correctAnswer: "2^l",
    explanation:
      "In a binary tree, the maximum number of nodes at level 'l' is 2^l, where 'l' is the level starting from 0.",
  },

  {
    question:
      "Which of the following is true about the parent of a node in a tree?",
    options: [
      "Every node has exactly one parent",
      "Every node has exactly two parents",
      "A node without a parent is called a root node",
      "A node without a parent is called a leaf node",
    ],
    correctAnswer: "A node without a parent is called a root node",
    explanation:
      "In a tree, the node that does not have a parent is called the root node.",
  },

  {
    question:
      "What type of tree does not allow more than two children for any node?",
    options: ["Binary tree", "N-ary tree", "AVL tree", "Trie"],
    correctAnswer: "Binary tree",
    explanation:
      "In a binary tree, each node can have at most two children: a left child and a right child.",
  },

  {
    question: "Which traversal method visits the root node last?",
    options: ["Pre-order", "In-order", "Post-order", "Level-order"],
    correctAnswer: "Post-order",
    explanation:
      "Post-order traversal visits the root node last, after visiting both the left and right subtrees.",
  },

  {
    question: "In a tree, what is a leaf node?",
    options: [
      "A node with no parent",
      "A node with no children",
      "A node with the highest value",
      "A node that is the root of the tree",
    ],
    correctAnswer: "A node with no children",
    explanation: "A leaf node is a node in a tree that has no children.",
  },

  {
    question: "Which of the following is an example of a non-binary tree?",
    options: ["Binary search tree", "AVL tree", "N-ary tree", "Red-black tree"],
    correctAnswer: "N-ary tree",
    explanation:
      "An N-ary tree allows each node to have any number of children, unlike binary trees where each node can have at most two children.",
  },

  {
    question: "Which of the following is true about the root node of a tree?",
    options: [
      "It has no parent and is the first node in the tree",
      "It has no parent and is the last node in the tree",
      "It can have multiple parents",
      "It is always a leaf node",
    ],
    correctAnswer: "It has no parent and is the first node in the tree",
    explanation:
      "The root node is the topmost node in a tree that has no parent. It is the first node added to the tree.",
  },

  {
    question:
      "In a binary search tree (BST), where are nodes with smaller values located?",
    options: [
      "On the left side of the root",
      "On the right side of the root",
      "On the top of the tree",
      "On the bottom of the tree",
    ],
    correctAnswer: "On the left side of the root",
    explanation:
      "In a binary search tree (BST), the left child node contains a value smaller than its parent, and the right child node contains a value greater.",
  },

  {
    question: "What is the height of a tree with only one node?",
    options: ["0", "1", "2", "It depends on the tree type"],
    correctAnswer: "0",
    explanation:
      "The height of a tree with only one node (the root node) is 0 because the height is defined as the number of edges from the root to the farthest leaf.",
  },
];
