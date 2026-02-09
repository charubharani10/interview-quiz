export const test1 = [
  {
    question:
      "What is the time complexity of deleting the maximum element in a max heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "To delete the maximum element in a max heap, the root element is removed and replaced by the last element, followed by 'heapify down' operation, which takes O(log n) time.",
  },
  {
    question:
      "In which scenario is it beneficial to use a Fibonacci heap over a binary heap?",
    options: [
      "When there are frequent decrease-key operations.",
      "When there is no need for decrease-key operations.",
      "When insertion operations are more frequent.",
      "When building the heap from an unsorted array.",
    ],
    correctAnswer: "When there are frequent decrease-key operations.",
    explanation:
      "Fibonacci heaps have a better amortized time complexity for decrease-key operations (O(1)) compared to binary heaps (O(log n)).",
  },
  {
    question: "What is the space complexity of a Fibonacci heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "Fibonacci heaps have a space complexity of O(n) because they store multiple trees, but they require only a constant amount of additional space for each operation.",
  },
  {
    question: "In a 2-3 heap, how are nodes structured?",
    options: [
      "Each node contains one or two children.",
      "Each node contains up to three children.",
      "Each node contains either one or two keys.",
      "Each node is a complete binary tree.",
    ],
    correctAnswer: "Each node contains either one or two keys.",
    explanation:
      "A 2-3 heap is a type of heap where each node can contain either one or two keys, allowing for flexible balance between efficiency and heap properties.",
  },
  {
    question:
      "How does the running time of Dijkstra’s algorithm change when a Fibonacci heap is used compared to a binary heap?",
    options: [
      "It becomes slower.",
      "It remains the same.",
      "It becomes faster.",
      "It becomes more complex.",
    ],
    correctAnswer: "It becomes faster.",
    explanation:
      "Using a Fibonacci heap for Dijkstra’s algorithm reduces the time complexity of decrease-key operations, resulting in faster performance compared to binary heaps.",
  },
  {
    question: "What is the time complexity of merging two Fibonacci heaps?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "Merging two Fibonacci heaps is an O(1) operation, as it simply involves concatenating the root lists of the two heaps.",
  },
  {
    question:
      "What is the key advantage of using a binomial heap over a binary heap?",
    options: [
      "It supports fast deletion of the minimum element.",
      "It supports fast insertion and merging.",
      "It has a better space complexity.",
      "It supports faster access to the root.",
    ],
    correctAnswer: "It supports fast insertion and merging.",
    explanation:
      "Binomial heaps allow fast merging (O(log n)) and insertion, making them useful when combining heaps or inserting multiple elements.",
  },
  {
    question:
      "What is the worst-case time complexity of extracting the minimum element in a binomial heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Extracting the minimum element in a binomial heap involves combining the subtrees, which takes O(log n) time.",
  },
  {
    question: "In a leftist heap, how is the heap property maintained?",
    options: [
      "The left subtree is always larger than the right subtree.",
      "The left subtree is always smaller than the right subtree.",
      "The left subtree is always shorter than the right subtree.",
      "The right subtree is always shorter than the left subtree.",
    ],
    correctAnswer: "The left subtree is always shorter than the right subtree.",
    explanation:
      "In a leftist heap, the heap property is maintained by ensuring that the left subtree is always shorter or equal in length compared to the right subtree.",
  },
  {
    question:
      "What is the time complexity of building a Fibonacci heap from an unsorted array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "Building a Fibonacci heap from an unsorted array can be done in O(n) time, since it involves linking nodes in the heap without requiring reordering.",
  },
  {
    question:
      "Which operation in a Fibonacci heap has an amortized time complexity of O(1)?",
    options: ["Extract-Min", "Decrease-Key", "Insert", "Delete"],
    correctAnswer: "Decrease-Key",
    explanation:
      "The Decrease-Key operation in a Fibonacci heap has an amortized time complexity of O(1), making it efficient compared to binary heaps.",
  },
  {
    question: "What is the structure of a Fibonacci heap?",
    options: [
      "A single binary tree",
      "A collection of binary trees",
      "A collection of binomial trees",
      "A collection of circular doubly linked lists",
    ],
    correctAnswer: "A collection of binomial trees",
    explanation:
      "A Fibonacci heap consists of a collection of binomial trees, which are linked together to form a heap.",
  },
  {
    question: "In a binomial heap, how is the tree structure defined?",
    options: [
      "It is a full binary tree.",
      "It is a complete binary tree.",
      "It is a collection of binomial trees.",
      "It is a collection of AVL trees.",
    ],
    correctAnswer: "It is a collection of binomial trees.",
    explanation:
      "A binomial heap is made up of binomial trees, where each tree is structured based on binomial coefficients.",
  },
  {
    question: "What is the purpose of the 'rank' in a binomial heap?",
    options: [
      "It tracks the size of the heap.",
      "It determines the number of children in a node.",
      "It helps in balancing the tree structure.",
      "It helps in merging binomial trees.",
    ],
    correctAnswer: "It helps in merging binomial trees.",
    explanation:
      "The 'rank' of a binomial tree helps in merging trees of the same rank during heap operations.",
  },
  {
    question:
      "What is the time complexity of building a leftist heap from an unsorted array?",
    options: ["O(1)", "O(n log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Building a leftist heap from an unsorted array can be done in linear time O(n) by inserting the elements one by one.",
  },
  {
    question: "In a Fibonacci heap, how are the trees organized?",
    options: [
      "By decreasing degree.",
      "By increasing degree.",
      "By the order of insertion.",
      "By random arrangement.",
    ],
    correctAnswer: "By decreasing degree.",
    explanation:
      "In a Fibonacci heap, the trees are organized in a way that the trees of smaller degrees appear before the trees of higher degrees.",
  },
  {
    question: "How do you combine two Fibonacci heaps?",
    options: [
      "By merging the root lists.",
      "By adding the second heap to the first heap.",
      "By recursively merging all trees.",
      "By rearranging the heap elements.",
    ],
    correctAnswer: "By merging the root lists.",
    explanation:
      "To combine two Fibonacci heaps, you simply merge the root lists of the two heaps.",
  },
  {
    question:
      "What is the amortized time complexity of the Extract-Min operation in a Fibonacci heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "The Extract-Min operation in a Fibonacci heap has an amortized time complexity of O(log n), as it involves consolidating trees and restructuring the heap.",
  },
  {
    question:
      "What is the primary advantage of Fibonacci heaps over binary heaps?",
    options: [
      "They require less memory.",
      "They have faster extract-min operations.",
      "They support faster decrease-key operations.",
      "They have better space complexity.",
    ],
    correctAnswer: "They support faster decrease-key operations.",
    explanation:
      "Fibonacci heaps provide faster decrease-key operations, which makes them more efficient in certain applications like Dijkstra’s algorithm.",
  },
  {
    question:
      "Which operation in a Fibonacci heap has an amortized time complexity of O(log n)?",
    options: ["Extract-Min", "Decrease-Key", "Insert", "Delete"],
    correctAnswer: "Extract-Min",
    explanation:
      "The Extract-Min operation in a Fibonacci heap takes O(log n) amortized time due to the consolidation process.",
  },
];
