export const test5 = [
  {
    question: "In a Treap, what is the expected time complexity for insertion?",
    options: ["O(1)", "O(log n)", "O(n)", "O(log² n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a Treap, insertion is expected to take O(log n) on average. This is because the tree is a balanced binary search tree in expectation, and insertion requires traversal along the height of the tree.",
  },

  {
    question:
      "What is the main advantage of using a Splay tree over an AVL tree?",
    options: [
      "Splay trees require less space",
      "Splay trees can perform faster for a sequence of similar operations",
      "AVL trees are easier to implement",
      "Splay trees guarantee O(log n) for all operations",
    ],
    correctAnswer:
      "Splay trees can perform faster for a sequence of similar operations",
    explanation:
      "Splay trees have a unique property where recently accessed nodes are moved to the root, which can be beneficial for sequences of similar operations. This amortized property can make splay trees faster in practice for certain workloads.",
  },

  {
    question: "Which of the following is NOT a property of a Red-Black tree?",
    options: [
      "The root is always black",
      "All leaves are black",
      "Every red node must have two black children",
      "All red nodes must have black children",
    ],
    correctAnswer: "All red nodes must have black children",
    explanation:
      "The property stating that all red nodes must have black children is incorrect. It should be that every red node must have two black children, but there are no explicit constraints about the parent node of red nodes.",
  },

  {
    question: "In a B-tree, what is the order of the tree?",
    options: [
      "The number of keys in each node",
      "The number of children in each node",
      "The height of the tree",
      "The maximum number of nodes in a level",
    ],
    correctAnswer: "The number of children in each node",
    explanation:
      "In a B-tree, the order is defined as the number of children each node can have. It is typically denoted as 'm', and each node can have up to 'm' children, while maintaining balanced properties.",
  },

  {
    question:
      "In a AVL tree, if an insertion operation results in a left-left imbalance, what kind of rotation is performed?",
    options: [
      "Right rotation",
      "Left rotation",
      "Left-right rotation",
      "Right-left rotation",
    ],
    correctAnswer: "Right rotation",
    explanation:
      "A left-left imbalance occurs when the left child of a left child node causes an imbalance. To restore balance, a right rotation is performed on the unbalanced node.",
  },

  {
    question:
      "What is the worst-case time complexity of inserting a node in a Red-Black tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a Red-Black tree, insertion takes logarithmic time, O(log n), as it ensures balancing after insertion, maintaining its properties.",
  },

  {
    question:
      "Which tree traversal technique is best suited for deleting a node in a binary tree?",
    options: [
      "Inorder traversal",
      "Postorder traversal",
      "Preorder traversal",
      "Level order traversal",
    ],
    correctAnswer: "Postorder traversal",
    explanation:
      "Postorder traversal is most suitable for deleting nodes in a binary tree because it ensures that children are processed before their parents, making it easier to handle node removal and maintenance of tree structure.",
  },

  {
    question: "In a B+ tree, where are the actual records stored?",
    options: [
      "In the internal nodes",
      "In the leaf nodes",
      "In the root node",
      "In both the internal and leaf nodes",
    ],
    correctAnswer: "In the leaf nodes",
    explanation:
      "In a B+ tree, actual records are stored in the leaf nodes, while the internal nodes store only keys to guide the search process.",
  },

  {
    question:
      "Which of the following statements is true about a Red-Black tree?",
    options: [
      "The height of the tree is exactly log(n)",
      "The height of the tree is bounded by 2*log(n)",
      "The number of red nodes is exactly half of the total nodes",
      "A Red-Black tree is a type of AVL tree",
    ],
    correctAnswer: "The height of the tree is bounded by 2*log(n)",
    explanation:
      "In a Red-Black tree, the height is bounded by 2*log(n), which ensures that search operations are efficient. The tree is not strictly balanced like an AVL tree, but it maintains good balance properties.",
  },

  {
    question:
      "In a Treap, what is the time complexity of finding the maximum element?",
    options: ["O(1)", "O(log n)", "O(n)", "O(log² n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a Treap, finding the maximum element involves traversing the rightmost path of the tree. Since the tree is a balanced binary search tree in expectation, this operation takes O(log n) time.",
  },
  {
    question:
      "In a Red-Black tree, how many black nodes are there on the path from the root to any leaf node?",
    options: [
      "The same number as the number of red nodes",
      "The number of black nodes can vary across different paths",
      "The number of black nodes is the same for all paths",
      "There is no specific rule regarding black node count",
    ],
    correctAnswer: "The number of black nodes is the same for all paths",
    explanation:
      "In a Red-Black tree, one of the key properties is that every path from the root to any leaf must contain the same number of black nodes, ensuring that the tree remains balanced.",
  },

  {
    question:
      "In a B-tree of order 5, what is the minimum number of keys a node can have?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    explanation:
      "In a B-tree of order 5, each node must have at least ⌈m/2⌉ - 1 keys, where m is the order of the tree. Therefore, a node must have at least 2 keys in this case.",
  },

  {
    question: "In a Treap, which of the following conditions must hold true?",
    options: [
      "The in-order traversal must produce a sorted sequence",
      "The max heap property must be maintained by the node values",
      "The root node must have the highest priority",
      "The node keys must form a binary search tree",
    ],
    correctAnswer: "The in-order traversal must produce a sorted sequence",
    explanation:
      "In a Treap, the in-order traversal must produce a sorted sequence, maintaining the binary search tree property, while the heap property is maintained based on priorities of the nodes.",
  },

  {
    question:
      "What is the space complexity of storing a balanced binary tree with n nodes?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of storing a binary tree is proportional to the number of nodes, n. Each node requires space for its data, pointers, and balancing information.",
  },

  {
    question:
      "What happens during a double rotation (left-right or right-left) in a Red-Black tree?",
    options: [
      "The tree is completely balanced",
      "A double rotation fixes the imbalance caused by a left-right or right-left violation",
      "Only the parent node is affected, not the child nodes",
      "It reduces the height of the tree by one level",
    ],
    correctAnswer:
      "A double rotation fixes the imbalance caused by a left-right or right-left violation",
    explanation:
      "A double rotation is used in Red-Black trees to fix imbalances caused by a left-right or right-left violation, which cannot be fixed by a single rotation.",
  },

  {
    question:
      "In an AVL tree, what is the worst-case time complexity for finding the successor of a node?",
    options: ["O(1)", "O(log n)", "O(n)", "O(log² n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Finding the successor of a node in an AVL tree requires traversing the tree, and the height of an AVL tree is O(log n), so the time complexity of finding the successor is O(log n).",
  },

  {
    question:
      "In a Trie, what is the time complexity for searching for a string of length k in a tree with n nodes?",
    options: ["O(1)", "O(log n)", "O(k)", "O(nk)"],
    correctAnswer: "O(k)",
    explanation:
      "In a Trie, searching for a string involves traversing the tree character by character, and each character requires a constant time operation. Thus, the time complexity is O(k), where k is the length of the string.",
  },

  {
    question: "What is the height of a complete B-tree of order m with n keys?",
    options: ["O(log m n)", "O(log n)", "O(n log n)", "O(log m n / log m)"],
    correctAnswer: "O(log_m n)",
    explanation:
      "The height of a complete B-tree is determined by the number of keys and the order of the tree. It is O(log_m n), where m is the order of the B-tree.",
  },

  {
    question:
      "Which traversal method is most efficient for converting a binary tree into a doubly linked list?",
    options: [
      "Inorder traversal",
      "Postorder traversal",
      "Preorder traversal",
      "Level-order traversal",
    ],
    correctAnswer: "Inorder traversal",
    explanation:
      "Inorder traversal is used to convert a binary tree into a doubly linked list, as it processes nodes in sorted order, which is necessary for the conversion to a sorted doubly linked list.",
  },

  {
    question:
      "Which tree type is best suited for applications requiring frequent updates and search operations with logarithmic time complexity?",
    options: ["Binary Search Tree", "AVL Tree", "Red-Black Tree", "B+ Tree"],
    correctAnswer: "Red-Black Tree",
    explanation:
      "Red-Black trees are best suited for applications requiring efficient updates and search operations because they maintain balanced height and guarantee logarithmic time complexity for most operations.",
  },
];
