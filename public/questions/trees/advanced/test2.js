export const test2 = [
  {
    question:
      "What is the worst-case time complexity for searching an element in a binary search tree (BST) with unbalanced nodes?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In an unbalanced BST, the worst-case time complexity for searching an element is O(n), as it degenerates into a linked list structure with one child per node.",
  },

  {
    question:
      "What is the primary purpose of using an AVL tree over a regular binary search tree?",
    options: [
      "It allows faster insertions",
      "It ensures the tree is balanced after every insertion or deletion",
      "It uses less memory",
      "It reduces the number of nodes",
    ],
    correctAnswer:
      "It ensures the tree is balanced after every insertion or deletion",
    explanation:
      "An AVL tree is a self-balancing binary search tree where the height difference between the left and right subtrees is at most 1, ensuring faster operations in the worst case.",
  },

  {
    question:
      "In a red-black tree, which property ensures that no two consecutive red nodes appear on the same path from root to leaf?",
    options: [
      "The black-height property",
      "The root is always black",
      "Red nodes must have black children",
      "The number of black nodes must be the same for all paths",
    ],
    correctAnswer: "Red nodes must have black children",
    explanation:
      "In a red-black tree, no two consecutive red nodes can appear on the same path from the root to a leaf. This property ensures that the tree remains balanced.",
  },

  {
    question: "Which of the following is true about a B-tree of order 'm'?",
    options: [
      "Each node can have between m/2 and m children",
      "Each node can have between 1 and m children",
      "Each node can have between m and m^2 children",
      "Each node can have up to m/2 children",
    ],
    correctAnswer: "Each node can have between m/2 and m children",
    explanation:
      "A B-tree of order 'm' ensures that each node has at least m/2 children (except the root) and at most 'm' children. This keeps the tree balanced for efficient search and insertion.",
  },

  {
    question: "How does a splay tree work when a node is accessed?",
    options: [
      "It removes the accessed node from the tree",
      "It rotates the accessed node to the root using tree rotations",
      "It balances the tree by applying color changes",
      "It increases the height of the accessed node",
    ],
    correctAnswer:
      "It rotates the accessed node to the root using tree rotations",
    explanation:
      "A splay tree uses tree rotations to bring the accessed node to the root. This self-adjusting behavior makes subsequent accesses faster if they are near the root.",
  },

  {
    question: "In a ternary tree, how many children can a node have?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "3",
    explanation:
      "In a ternary tree, each node can have up to 3 children, as the name 'ternary' implies a tree with 3 branches per node.",
  },

  {
    question:
      "In a heap data structure, how is the heap property maintained after the deletion of the root element?",
    options: [
      "By rotating the heap",
      "By swapping the root with the last node and then heapifying the tree",
      "By adding a new node to the root",
      "By removing the smallest element from the heap",
    ],
    correctAnswer:
      "By swapping the root with the last node and then heapifying the tree",
    explanation:
      "After deleting the root element in a heap, the last element is moved to the root, and the heap property is restored by performing a heapify operation to maintain the structure.",
  },

  {
    question:
      "What is the time complexity for the worst-case deletion operation in a red-black tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a red-black tree, the deletion operation involves rebalancing the tree, and this rebalancing ensures that the height of the tree remains logarithmic. Thus, the time complexity for deletion is O(log n).",
  },

  {
    question:
      "What is a key feature of an R-tree, commonly used in spatial databases?",
    options: [
      "It is optimized for handling range queries on numerical data",
      "It stores hierarchical data with multiple dimensions",
      "It supports fast search queries on indexed strings",
      "It maintains a balanced tree structure using AVL properties",
    ],
    correctAnswer: "It stores hierarchical data with multiple dimensions",
    explanation:
      "R-trees are used in spatial databases to handle multi-dimensional data such as geographical coordinates. They are used to efficiently query data based on spatial properties.",
  },

  {
    question: "What is the time complexity of building a Segment Tree?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n log n)",
    explanation:
      "Building a segment tree requires O(n log n) time, where 'n' is the number of elements. This complexity arises from the need to build the tree and store the results for range queries.",
  },

  {
    question:
      "What is the main advantage of using a treap over a regular binary search tree?",
    options: [
      "It guarantees O(log n) height",
      "It combines binary search and heap properties for balanced trees",
      "It uses fewer nodes",
      "It automatically balances itself after every operation",
    ],
    correctAnswer:
      "It combines binary search and heap properties for balanced trees",
    explanation:
      "A treap is a probabilistic data structure that combines binary search tree properties (for ordering) with heap properties (for balancing), making it efficient for search, insertion, and deletion operations.",
  },
  {
    question:
      "What is the time complexity of performing an inorder traversal in a binary tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "In an inorder traversal, each node is visited once, so the time complexity is O(n), where n is the number of nodes in the tree.",
  },

  {
    question:
      "In a B+ tree, which structure is used to store the data records?",
    options: [
      "The leaf nodes",
      "The internal nodes",
      "The root node",
      "The data is stored across all nodes",
    ],
    correctAnswer: "The leaf nodes",
    explanation:
      "In a B+ tree, the data records are stored only in the leaf nodes, and the internal nodes store only keys to help in navigation.",
  },

  {
    question:
      "In a Splay Tree, which operation ensures that the last accessed node is moved to the root?",
    options: [
      "Zig-Zag Rotation",
      "Zig-Zig Rotation",
      "Splay Operation",
      "Tree Rotation",
    ],
    correctAnswer: "Splay Operation",
    explanation:
      "The splay operation ensures that the last accessed node is brought to the root by performing rotations. This helps to keep recently accessed nodes closer to the root for faster future access.",
  },

  {
    question: "In a 2-3 tree, how are the nodes structured?",
    options: [
      "Each node has exactly 2 or 3 children and 1 or 2 keys",
      "Each node has 2 or 3 keys and no children",
      "Each node has 2 children and 3 keys",
      "Each node can have any number of keys",
    ],
    correctAnswer: "Each node has exactly 2 or 3 children and 1 or 2 keys",
    explanation:
      "A 2-3 tree is a balanced search tree where each internal node has either 2 or 3 children, and each node contains 1 or 2 keys. This guarantees balanced search times.",
  },

  {
    question:
      "What is the main advantage of a Treap over other balanced trees like AVL or Red-Black trees?",
    options: [
      "It provides O(1) search time",
      "It requires fewer rotations for balancing",
      "It guarantees logarithmic height probabilistically",
      "It avoids duplicate values in the tree",
    ],
    correctAnswer: "It guarantees logarithmic height probabilistically",
    explanation:
      "A Treap combines properties of a binary search tree (BST) and a heap. It guarantees logarithmic height probabilistically, providing efficient search, insertion, and deletion operations.",
  },

  {
    question: "In a K-d tree, which of the following is a key characteristic?",
    options: [
      "It is a balanced binary search tree",
      "It splits data points based on multi-dimensional spaces",
      "It is used for priority queues",
      "It stores only integers",
    ],
    correctAnswer: "It splits data points based on multi-dimensional spaces",
    explanation:
      "A K-d tree is a binary tree used for organizing points in a K-dimensional space, making it ideal for applications like nearest neighbor search and range queries in multi-dimensional spaces.",
  },

  {
    question:
      "What is the time complexity of searching for a value in a Trie data structure?",
    options: [
      "O(1)",
      "O(n)",
      "O(m), where m is the length of the search key",
      "O(log n)",
    ],
    correctAnswer: "O(m), where m is the length of the search key",
    explanation:
      "In a Trie, the time complexity of searching for a value is proportional to the length of the search key (m), as it traverses the tree according to the characters of the key.",
  },

  {
    question: "What is the maximum height of a red-black tree with 'n' nodes?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "A red-black tree maintains balance by enforcing certain properties, ensuring that its height is logarithmic with respect to the number of nodes. Thus, the maximum height of a red-black tree is O(log n).",
  },

  {
    question:
      "Which of the following algorithms is used for efficiently finding the shortest path in a tree?",
    options: [
      "Dijkstra's Algorithm",
      "Breadth-First Search (BFS)",
      "Kruskal's Algorithm",
      "Prim's Algorithm",
    ],
    correctAnswer: "Breadth-First Search (BFS)",
    explanation:
      "BFS is an efficient algorithm for finding the shortest path in an unweighted tree or graph, as it explores all neighbors level by level.",
  },

  {
    question: "In a segment tree, what is the purpose of the 'merge' function?",
    options: [
      "To update the segment tree with new elements",
      "To query the range minimum or maximum in a segment",
      "To compute the result of a query by combining information from child segments",
      "To rotate the nodes for balance",
    ],
    correctAnswer:
      "To compute the result of a query by combining information from child segments",
    explanation:
      "The 'merge' function in a segment tree combines the information from child segments to compute the result of a query. For example, it may find the sum or minimum/maximum in a given range.",
  },

  {
    question:
      "Which tree structure is commonly used in databases to store large amounts of data with efficient search, insertion, and deletion operations?",
    options: ["AVL Tree", "Red-Black Tree", "B-tree", "Binary Search Tree"],
    correctAnswer: "B-tree",
    explanation:
      "B-trees are widely used in databases because they maintain balance and allow efficient search, insertion, and deletion operations, even with large data sets that don't fit into memory.",
  },
];
