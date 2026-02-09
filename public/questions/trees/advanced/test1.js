export const test1 = [
  {
    question:
      "In a Red-Black Tree, which property ensures that the tree remains balanced after insertion or deletion?",
    options: [
      "Every node must have two children",
      "The path from any node to its descendants must contain an equal number of red and black nodes",
      "The root node must always be black",
      "There are no restrictions on the placement of red nodes",
    ],
    correctAnswer:
      "The path from any node to its descendants must contain an equal number of red and black nodes",
    explanation:
      "In a Red-Black Tree, the balance is maintained by enforcing a set of properties that regulate the number of red and black nodes along any path, ensuring that the tree remains balanced after insertion and deletion.",
  },

  {
    question:
      "What is the time complexity of searching for an element in a Splay Tree in the worst-case scenario?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst case, searching for an element in a Splay Tree takes linear time, O(n), when the tree degenerates into a list. However, amortized time for search is O(log n).",
  },

  {
    question: "Which of the following describes a complete binary tree?",
    options: [
      "All nodes except the last level are completely filled, and nodes are added from left to right in the last level",
      "Every node in the tree has two children",
      "All levels of the tree are completely filled except possibly the last one, which is filled from right to left",
      "The height of the tree is log(n)",
    ],
    correctAnswer:
      "All nodes except the last level are completely filled, and nodes are added from left to right in the last level",
    explanation:
      "In a complete binary tree, every level except possibly the last is completely filled, and the nodes in the last level are filled from left to right.",
  },

  {
    question:
      "What is the key characteristic of an AVL tree that distinguishes it from a standard binary search tree?",
    options: [
      "AVL trees allow duplicate values",
      "The height difference between the left and right subtrees of any node is limited to 1",
      "Nodes in an AVL tree can only have one child",
      "An AVL tree requires more space for storage than a standard binary search tree",
    ],
    correctAnswer:
      "The height difference between the left and right subtrees of any node is limited to 1",
    explanation:
      "An AVL tree is a self-balancing binary search tree where the difference in height between the left and right subtrees of any node is no more than 1.",
  },

  {
    question:
      "In a B-tree of order m, what is the maximum number of children a node can have?",
    options: ["m", "m-1", "2m", "m+1"],
    correctAnswer: "m",
    explanation:
      "A node in a B-tree of order m can have at most m children, with the tree remaining balanced and maintaining logarithmic height.",
  },

  {
    question:
      "Which of the following is NOT a valid traversal method for a binary tree?",
    options: ["In-order", "Pre-order", "Post-order", "Breadth-first"],
    correctAnswer: "Breadth-first",
    explanation:
      "Breadth-first traversal is not a depth-first traversal method. It explores the tree level by level, while in-order, pre-order, and post-order are all depth-first traversal techniques.",
  },

  {
    question:
      "In a segment tree, what is the time complexity for querying the sum of elements in a range?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Segment trees allow querying the sum of elements in a range in logarithmic time, O(log n), by breaking down the problem into smaller segments.",
  },

  {
    question:
      "In a trie, what is the primary purpose of using the 'end of word' marker?",
    options: [
      "To indicate a node with a value",
      "To separate characters within the word",
      "To mark the end of a word in the trie",
      "To store additional information",
    ],
    correctAnswer: "To mark the end of a word in the trie",
    explanation:
      "In a trie, the 'end of word' marker is used to signify the end of a valid word. Without it, multiple words could share the same path in the trie.",
  },

  {
    question: "What is the height of a complete binary tree with 10 nodes?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "3",
    explanation:
      "A complete binary tree with 10 nodes has a height of 3, as the tree is filled from left to right up to level 3.",
  },

  {
    question:
      "What is the primary advantage of using a 2-3 tree over a binary search tree?",
    options: [
      "Faster search operations",
      "Balanced structure, ensuring logarithmic height",
      "Allows duplicate values",
      "Simpler implementation",
    ],
    correctAnswer: "Balanced structure, ensuring logarithmic height",
    explanation:
      "A 2-3 tree is a balanced search tree that ensures logarithmic height, unlike binary search trees, which can degenerate into lists and take linear time for operations.",
  },
  {
    question:
      "What is the primary advantage of a threaded binary tree over a regular binary tree?",
    options: [
      "It consumes less memory",
      "It supports faster searching",
      "It allows in-order traversal without recursion or a stack",
      "It is easier to implement",
    ],
    correctAnswer: "It allows in-order traversal without recursion or a stack",
    explanation:
      "In a threaded binary tree, the null pointers are replaced with pointers to the in-order predecessor or successor. This allows in-order traversal without using recursion or a stack.",
  },

  {
    question:
      "In a trie, how do you optimize memory usage for storing words with common prefixes?",
    options: [
      "By using dynamic arrays",
      "By merging nodes with shared prefixes",
      "By storing the word in a compressed format",
      "By using a hash map instead of a tree structure",
    ],
    correctAnswer: "By merging nodes with shared prefixes",
    explanation:
      "In a trie, nodes with shared prefixes are merged into a single node to optimize memory usage and reduce space complexity.",
  },

  {
    question: "What is the primary use case of a suffix tree?",
    options: [
      "To store all possible substrings of a string",
      "To store the longest common prefix of a string",
      "To efficiently search for substring matches in a string",
      "To implement sorting algorithms",
    ],
    correctAnswer: "To efficiently search for substring matches in a string",
    explanation:
      "Suffix trees are used for efficient substring searches, allowing for fast pattern matching within strings. They are essential in string processing and bioinformatics applications.",
  },

  {
    question:
      "Which of the following tree structures is best suited for disk-based storage and search in databases?",
    options: ["Binary Search Tree", "Red-Black Tree", "B-Tree", "Segment Tree"],
    correctAnswer: "B-Tree",
    explanation:
      "B-Trees are designed for efficient disk-based storage and retrieval in databases. They minimize disk I/O operations by keeping the tree balanced and allowing for fast search, insert, and delete operations.",
  },

  {
    question:
      "What is the time complexity for building a segment tree for range queries?",
    options: ["O(1)", "O(n)", "O(n log n)", "O(log n)"],
    correctAnswer: "O(n log n)",
    explanation:
      "Building a segment tree takes O(n log n) time, where 'n' is the number of elements. The process involves constructing the tree structure and populating it with values for range queries.",
  },

  {
    question:
      "In a binary search tree (BST), which property must hold true for all nodes?",
    options: [
      "The left subtree's keys are less than the parent node's key, and the right subtree's keys are greater",
      "The left subtree's keys are greater than the parent node's key, and the right subtree's keys are smaller",
      "All nodes must have two children",
      "The root node must be the largest value",
    ],
    correctAnswer:
      "The left subtree's keys are less than the parent node's key, and the right subtree's keys are greater",
    explanation:
      "A binary search tree (BST) maintains the property that for every node, all keys in the left subtree are smaller, and all keys in the right subtree are greater.",
  },

  {
    question:
      "Which traversal algorithm is most useful for printing a binary tree level by level?",
    options: [
      "In-order traversal",
      "Pre-order traversal",
      "Post-order traversal",
      "Breadth-first traversal",
    ],
    correctAnswer: "Breadth-first traversal",
    explanation:
      "Breadth-first traversal (or level-order traversal) is used to visit all nodes in a tree level by level, starting from the root and moving down the tree.",
  },

  {
    question: "What is the height of a perfect binary tree with 15 nodes?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "3",
    explanation:
      "A perfect binary tree is fully balanced with all levels completely filled. For 15 nodes, the height is 3, as a perfect binary tree with height h has 2^(h+1) - 1 nodes.",
  },

  {
    question:
      "What is the maximum number of children a node can have in a 2-3 tree?",
    options: ["2", "3", "4", "Unlimited"],
    correctAnswer: "3",
    explanation:
      "A 2-3 tree is a balanced tree where each node can have 2 or 3 children, ensuring logarithmic height for efficient search, insertion, and deletion.",
  },

  {
    question:
      "In a heap, what is the relationship between a node and its children?",
    options: [
      "Each parent must be greater than or equal to its children (min-heap)",
      "Each parent must be smaller than or equal to its children (max-heap)",
      "Each node can have any number of children",
      "There is no specific relationship",
    ],
    correctAnswer:
      "Each parent must be greater than or equal to its children (min-heap)",
    explanation:
      "In a min-heap, the parent node must always be smaller than or equal to its children, ensuring that the smallest element is at the root. The same applies for max-heaps, but the relationship is reversed.",
  },
];
