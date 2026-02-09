export const test4 = [
  {
    question:
      "In an AVL tree, what is the maximum height of a tree with n nodes?",
    options: ["O(log n)", "O(n)", "O(n log n)", "O(log² n)"],
    correctAnswer: "O(log n)",
    explanation:
      "An AVL tree is a self-balancing binary search tree. It maintains balance by ensuring that the heights of the two child subtrees of any node differ by no more than 1. Therefore, the height of an AVL tree is logarithmic in terms of the number of nodes.",
  },

  {
    question:
      "Which of the following tree traversal techniques produces nodes in ascending order for a binary search tree?",
    options: [
      "Pre-order traversal",
      "In-order traversal",
      "Post-order traversal",
      "Level-order traversal",
    ],
    correctAnswer: "In-order traversal",
    explanation:
      "In-order traversal visits nodes in the left subtree, then the root, and finally the right subtree. For a binary search tree, this results in visiting nodes in ascending order.",
  },

  {
    question:
      "In a min-heap, what is the time complexity of inserting a new element?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Inserting an element into a min-heap requires adding the new element at the end of the tree and then 'bubbling up' to restore the heap property, which takes O(log n) time.",
  },

  {
    question:
      "What is the worst-case time complexity of searching for an element in a perfectly balanced binary tree with n nodes?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a perfectly balanced binary tree, the height is log(n), and searching involves traversing down the tree from the root to the target element, resulting in O(log n) time complexity.",
  },

  {
    question:
      "In a B+ tree, which of the following is true about its leaf nodes?",
    options: [
      "Leaf nodes are linked to each other in a sorted order",
      "Leaf nodes contain keys and data",
      "Leaf nodes are at different levels of the tree",
      "Internal nodes and leaf nodes store the same information",
    ],
    correctAnswer: "Leaf nodes are linked to each other in a sorted order",
    explanation:
      "In a B+ tree, the leaf nodes are connected in a linked list, which allows for efficient range queries and ordered traversal.",
  },

  {
    question:
      "Which of the following operations on a Treap has an expected time complexity of O(log n)?",
    options: ["Insertion", "Deletion", "Search", "All of the above"],
    correctAnswer: "All of the above",
    explanation:
      "A Treap is a binary search tree with random priorities assigned to each node, and its expected time complexity for insertion, deletion, and search is O(log n), assuming the priorities are distributed uniformly.",
  },

  {
    question:
      "What is the time complexity of balancing a Red-Black tree after insertion in the worst case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "After inserting a new node into a Red-Black Tree, it may require rotations and color changes to maintain balance. These operations take O(log n) time in the worst case.",
  },

  {
    question:
      "In a Splay tree, what happens to the root after accessing a node?",
    options: [
      "The accessed node becomes the root",
      "The root becomes the parent of the accessed node",
      "The root is unchanged",
      "The accessed node is removed",
    ],
    correctAnswer: "The accessed node becomes the root",
    explanation:
      "In a Splay tree, the accessed node is splayed to the root, which may involve rotations to move it closer to the top of the tree for faster future accesses.",
  },

  {
    question: "In a Red-Black tree, how many colors can a node have?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    explanation:
      "A Red-Black tree uses two colors: red and black. The colors are used to enforce balance properties and ensure that the tree remains balanced.",
  },

  {
    question: "What is the purpose of the ‘parent pointers’ in a binary tree?",
    options: [
      "To enable traversal in reverse order",
      "To reduce the height of the tree",
      "To store additional information about the node",
      "To avoid the use of recursion in tree operations",
    ],
    correctAnswer: "To enable traversal in reverse order",
    explanation:
      "Parent pointers are used to traverse the tree in reverse order or to move upwards in the tree, which can be helpful in certain tree algorithms like finding the lowest common ancestor.",
  },
  {
    question:
      "In an AVL tree, what condition must hold for a tree to be balanced?",
    options: [
      "The heights of the two child subtrees of every node differ by at most 1",
      "The difference between the number of left and right children at each node must be at most 1",
      "The number of nodes in the left and right subtree of every node must be equal",
      "All leaf nodes must be at the same level",
    ],
    correctAnswer:
      "The heights of the two child subtrees of every node differ by at most 1",
    explanation:
      "An AVL tree is a balanced binary search tree that ensures the difference in height between the left and right subtrees of any node is at most 1. This keeps the tree balanced.",
  },

  {
    question:
      "In a B-tree of order m, what is the maximum number of children a node can have?",
    options: ["m", "m-1", "2m", "2m-1"],
    correctAnswer: "m",
    explanation:
      "In a B-tree of order m, each node can have a maximum of m children. The B-tree ensures balanced properties where each internal node has at least ⌈m/2⌉ children.",
  },

  {
    question:
      "What is the time complexity of searching for a key in a B+ tree with n elements?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "B+ trees are balanced trees where searching for a key involves traversing from the root to the leaf level, which takes logarithmic time, O(log n).",
  },

  {
    question:
      "In a Red-Black tree, what is the maximum number of black nodes on any path from the root to a leaf node?",
    options: ["1", "log n", "2 log n", "log² n"],
    correctAnswer: "log n",
    explanation:
      "In a Red-Black tree, all paths from the root to the leaves must have the same number of black nodes. The height of a Red-Black tree is bounded by 2 log n, and thus the number of black nodes is log n.",
  },

  {
    question:
      "What is the time complexity for finding the lowest common ancestor in a binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(log² n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a balanced binary search tree, finding the lowest common ancestor involves traversing from the root to both nodes and is logarithmic in time, O(log n). In unbalanced trees, the time complexity becomes O(n).",
  },

  {
    question: "In a Treap, what property does the heap order maintain?",
    options: [
      "Keys are inserted in a sorted order",
      "The priority of a node is greater than or equal to the priorities of its children",
      "The depth of the left subtree is always greater than the right subtree",
      "The root always contains the highest priority",
    ],
    correctAnswer:
      "The priority of a node is greater than or equal to the priorities of its children",
    explanation:
      "A Treap is a binary search tree with random priorities. It maintains two properties: the binary search tree property with respect to keys and the heap property with respect to priorities.",
  },

  {
    question:
      "What is the primary reason for using a B+ tree instead of a B-tree in database indexing?",
    options: [
      "B+ trees require less memory",
      "B+ trees allow for efficient range queries",
      "B+ trees allow for faster insertions",
      "B+ trees are easier to implement",
    ],
    correctAnswer: "B+ trees allow for efficient range queries",
    explanation:
      "In a B+ tree, all the keys are stored in leaf nodes, which are linked sequentially. This structure makes it more efficient for performing range queries compared to a B-tree, where keys are distributed across all nodes.",
  },

  {
    question:
      "In a binary search tree, what is the time complexity of deleting a node with two children?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Deleting a node with two children in a binary search tree involves finding the node's successor or predecessor and replacing it with that node. This process, including the search and replacement, takes logarithmic time, O(log n).",
  },

  {
    question:
      "What is the primary difference between a red-black tree and an AVL tree?",
    options: [
      "Red-black trees are always balanced, while AVL trees are not",
      "Red-black trees have stricter balancing rules than AVL trees",
      "Red-black trees are less strict in balancing, resulting in faster insertions and deletions",
      "AVL trees maintain a stricter balancing, which is faster for searching",
    ],
    correctAnswer:
      "Red-black trees are less strict in balancing, resulting in faster insertions and deletions",
    explanation:
      "Red-black trees are less strict in balancing compared to AVL trees, which leads to faster insertion and deletion operations, but may result in slightly less optimal search times.",
  },

  {
    question:
      "In a Splay tree, what is the time complexity for accessing an element in the worst case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "In a Splay tree, the worst-case time complexity for accessing an element is O(n) if the tree is highly unbalanced. However, the amortized time complexity for accessing an element is O(log n).",
  },
];
