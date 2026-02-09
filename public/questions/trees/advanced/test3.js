export const test3 = [
  {
    question:
      "Which tree structure is used in external memory to store data and manage disk accesses efficiently?",
    options: ["B-tree", "AVL Tree", "Red-Black Tree", "Trie"],
    correctAnswer: "B-tree",
    explanation:
      "B-trees are optimized for external memory systems, where they reduce disk I/O by keeping the number of accesses low and managing data in blocks.",
  },

  {
    question:
      "In a segment tree, if the query range is [l, r], how many nodes need to be visited in the worst case?",
    options: ["O(log n)", "O(n)", "O(log² n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a segment tree, querying a range [l, r] requires visiting O(log n) nodes in the worst case, since it recursively splits the range into smaller segments.",
  },

  {
    question: "In a Treap, how is the priority of each node maintained?",
    options: [
      "It is stored as a key in the node",
      "It is assigned randomly when the node is inserted",
      "It is determined by the depth of the node",
      "It is recalculated during balancing",
    ],
    correctAnswer: "It is assigned randomly when the node is inserted",
    explanation:
      "A Treap is a randomized binary search tree where each node has a randomly assigned priority. This priority is used to maintain heap-order while ensuring binary search tree properties.",
  },

  {
    question:
      "What is the worst-case time complexity of inserting a new node in a Red-Black Tree?",
    options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a Red-Black Tree, insertion takes O(log n) time, where n is the number of nodes, due to the need for balancing the tree after insertion.",
  },

  {
    question:
      "What is the time complexity of constructing a balanced AVL tree from an unsorted array of n elements?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
    correctAnswer: "O(n log n)",
    explanation:
      "To construct a balanced AVL tree from an unsorted array, the array must first be sorted, which takes O(n log n) time, and then an AVL tree is built, which takes linear time.",
  },

  {
    question:
      "In a 2-3 tree, what happens to the structure of the tree when an insert causes a node to split?",
    options: [
      "The root node is split",
      "The tree is rebalanced by rotating nodes",
      "The parent node receives the middle key, and a new child node is created",
      "The new node is appended as a leaf node",
    ],
    correctAnswer:
      "The parent node receives the middle key, and a new child node is created",
    explanation:
      "In a 2-3 tree, when a node splits during an insert, the middle key is pushed to the parent, and a new child node is created to maintain the properties of the 2-3 tree.",
  },

  {
    question:
      "Which tree traversal algorithm is best suited for finding the kth smallest element in a BST?",
    options: [
      "Pre-order traversal",
      "Post-order traversal",
      "In-order traversal",
      "Breadth-first traversal",
    ],
    correctAnswer: "In-order traversal",
    explanation:
      "In-order traversal of a Binary Search Tree (BST) visits the nodes in ascending order, which makes it ideal for finding the kth smallest element.",
  },

  {
    question:
      "In a Trie, what happens when multiple strings share common prefixes?",
    options: [
      "They are stored as separate nodes for each string",
      "They are compressed into a single node",
      "They are stored in a single path, sharing the prefix nodes",
      "Each prefix is stored in its own Trie",
    ],
    correctAnswer: "They are stored in a single path, sharing the prefix nodes",
    explanation:
      "In a Trie, common prefixes are shared among strings. This structure helps to save space by not duplicating nodes for shared prefixes.",
  },

  {
    question: "Which of the following is true about a complete binary tree?",
    options: [
      "All levels except possibly the last are completely filled",
      "All levels are completely filled",
      "The last level contains exactly n/2 nodes",
      "It has a height of O(n)",
    ],
    correctAnswer: "All levels except possibly the last are completely filled",
    explanation:
      "In a complete binary tree, all levels are fully filled except possibly the last level, which is filled from left to right.",
  },

  {
    question:
      "In a 2-3-4 tree, what type of node can hold more than 2 children?",
    options: ["Leaf node", "Root node", "Internal node", "Any node"],
    correctAnswer: "Internal node",
    explanation:
      "In a 2-3-4 tree, internal nodes can hold up to 3 keys and therefore can have up to 4 children, while leaf nodes only store data.",
  },
  {
    question:
      "What is the time complexity of finding the lowest common ancestor (LCA) in a Binary Search Tree (BST) with n nodes?",
    options: ["O(n)", "O(log n)", "O(log² n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a Binary Search Tree, the LCA can be found in O(log n) time by traversing down the tree from the root, because the tree is sorted and the search space reduces at each step.",
  },

  {
    question:
      "What is the height of a perfectly balanced binary tree with n nodes?",
    options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a perfectly balanced binary tree, the height is logarithmic in terms of the number of nodes, because each level of the tree doubles the number of nodes.",
  },

  {
    question:
      "Which of the following is not a valid property of a Red-Black Tree?",
    options: [
      "The root is always red",
      "Every path from a node to its descendant leaves must have the same number of black nodes",
      "Red nodes cannot have red children",
      "The height of the tree is at most 2*log(n)",
    ],
    correctAnswer: "The root is always red",
    explanation:
      "In a Red-Black Tree, the root is always black, not red. This property helps maintain balance in the tree.",
  },

  {
    question:
      "In a Binary Search Tree (BST), what is the time complexity of inserting a new node in the worst case?",
    options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst case, if the BST becomes skewed (like a linked list), insertion of a new node will take O(n) time.",
  },

  {
    question:
      "How does a Splay Tree handle tree rotations when accessing a node?",
    options: [
      "It uses AVL-like rotations",
      "It performs rotations based on the recently accessed node",
      "It only rotates once during access",
      "It performs a single right rotation",
    ],
    correctAnswer: "It performs rotations based on the recently accessed node",
    explanation:
      "A Splay Tree performs rotations during access to a node, known as splaying, to move the accessed node closer to the root for faster subsequent access.",
  },

  {
    question:
      "In a B+ tree, how does it differ from a B-tree regarding data storage?",
    options: [
      "B+ tree stores data in both internal and leaf nodes",
      "B+ tree stores all data in the leaf nodes only, and internal nodes act as guides",
      "B+ tree stores data in internal nodes, not in leaf nodes",
      "B+ tree stores duplicate keys in the leaf nodes",
    ],
    correctAnswer:
      "B+ tree stores all data in the leaf nodes only, and internal nodes act as guides",
    explanation:
      "In a B+ tree, all the actual data is stored in the leaf nodes, while the internal nodes only store keys to guide searches.",
  },

  {
    question: "In a Treap, what type of balancing is used?",
    options: [
      "Height balancing",
      "Priority balancing",
      "Size balancing",
      "Rank balancing",
    ],
    correctAnswer: "Priority balancing",
    explanation:
      "A Treap is a randomized binary search tree that maintains heap-order by assigning priorities randomly to each node. This is the key to balancing the tree.",
  },

  {
    question:
      "What is the time complexity of deleting a node from a Red-Black Tree in the worst case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Deleting a node from a Red-Black Tree involves finding the node, removing it, and performing rotations to maintain the tree's balance, all of which takes O(log n) time.",
  },

  {
    question:
      "What happens when a node in a AVL tree becomes unbalanced after insertion?",
    options: [
      "The tree performs rotations to restore balance",
      "The node is removed",
      "The tree shrinks in height",
      "The tree becomes unbalanced permanently",
    ],
    correctAnswer: "The tree performs rotations to restore balance",
    explanation:
      "AVL trees perform rotations to maintain balance after insertions, ensuring the height of the tree remains logarithmic.",
  },

  {
    question:
      "In a B-tree of order m, what is the maximum number of children a node can have?",
    options: ["m", "m-1", "m+1", "2m"],
    correctAnswer: "m",
    explanation:
      "In a B-tree of order m, each node can have up to m children, making it suitable for multi-level indexing systems like databases.",
  },
];
