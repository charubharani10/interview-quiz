export const test5 = [
  {
    question:
      "In a Fibonacci heap, what is the time complexity of the 'Union' operation?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'Union' operation in a Fibonacci heap takes O(1) amortized time by merging two root lists together.",
  },
  {
    question:
      "What is the time complexity of the 'Delete' operation in a Fibonacci heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "The 'Delete' operation in a Fibonacci heap involves cutting the node and consolidating trees, which takes O(log n) amortized time.",
  },
  {
    question:
      "Which heap structure allows you to merge two heaps with a time complexity of O(log n)?",
    options: ["Binary heap", "Binomial heap", "Fibonacci heap", "Leftist heap"],
    correctAnswer: "Binomial heap",
    explanation:
      "The 'Merge' operation in a binomial heap has a time complexity of O(log n), which is better than the binary heap's O(n) for merge.",
  },
  {
    question:
      "In a d-ary heap, how does the height of the heap change with respect to the number of elements 'n'?",
    options: ["O(log d n)", "O(log n)", "O(d log n)", "O(log d n / d)"],
    correctAnswer: "O(log_d n)",
    explanation:
      "In a d-ary heap, the height is O(log_d n), where d is the number of children each node has.",
  },
  {
    question:
      "How does a binomial heap differ from a Fibonacci heap in terms of 'Extract-Min' operation?",
    options: [
      "Binomial heap has a faster 'Extract-Min' operation.",
      "Fibonacci heap has a faster 'Extract-Min' operation.",
      "Both have the same time complexity.",
      "Binomial heap supports 'Extract-Min' in O(1) time.",
    ],
    correctAnswer: "Fibonacci heap has a faster 'Extract-Min' operation.",
    explanation:
      "The 'Extract-Min' operation in a Fibonacci heap has amortized time complexity of O(log n), which is better than the O(log n) complexity in binomial heaps.",
  },
  {
    question:
      "What is the primary advantage of a leftist heap over a binary heap?",
    options: [
      "Faster insertions",
      "Faster deletions",
      "Efficient merge operations",
      "Better space complexity",
    ],
    correctAnswer: "Efficient merge operations",
    explanation:
      "Leftist heaps offer efficient O(log n) merge operations, making them advantageous when frequent heap merges are required.",
  },
  {
    question:
      "In a Fibonacci heap, what is the amortized time complexity of the 'Find-Min' operation?",
    options: ["O(1)", "O(log n)", "O(n)", "O(log log n)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'Find-Min' operation in a Fibonacci heap takes O(1) amortized time, as it simply returns the minimum node in the root list.",
  },
  {
    question:
      "Which of the following operations is more efficient in a Fibonacci heap compared to other heap structures?",
    options: ["Insert", "Extract-Max", "Decrease-Key", "Extract-Min"],
    correctAnswer: "Decrease-Key",
    explanation:
      "Fibonacci heaps allow 'Decrease-Key' operations to be performed in O(1) amortized time, which is more efficient than other heap types.",
  },
  {
    question:
      "In a binomial heap, what is the maximum number of nodes in a binomial tree of order k?",
    options: ["O(2^k)", "O(k^2)", "O(2^k - 1)", "O(2k)"],
    correctAnswer: "O(2^k - 1)",
    explanation:
      "A binomial tree of order k has 2^k nodes, so the maximum number of nodes in such a tree is O(2^k - 1).",
  },
  {
    question: "In a 2-ary heap, each node can have how many children?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "2",
    explanation:
      "In a 2-ary heap (which is effectively a binary heap), each node can have at most 2 children.",
  },
  {
    question:
      "In a leftist heap, which property is used to ensure efficient merge operations?",
    options: ["Rank", "Degree", "Parent pointers", "Child pointers"],
    correctAnswer: "Rank",
    explanation:
      "Leftist heaps maintain the rank property, ensuring that the left subtree is always longer than the right subtree for efficient merging.",
  },
  {
    question:
      "What is the time complexity of the 'Merge' operation in a binomial heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "The 'Merge' operation in a binomial heap takes O(log n) time because it merges two binomial trees in a structured way.",
  },
  {
    question:
      "Which of the following heap types supports the 'Decrease-Key' operation with amortized time complexity O(1)?",
    options: ["Binary heap", "Binomial heap", "Fibonacci heap", "Leftist heap"],
    correctAnswer: "Fibonacci heap",
    explanation:
      "Fibonacci heaps support the 'Decrease-Key' operation in amortized O(1) time, making them very efficient for algorithms like Dijkstra's.",
  },
  {
    question:
      "What is the primary disadvantage of Fibonacci heaps in comparison to binary heaps?",
    options: [
      "Fibonacci heaps have a larger constant factor.",
      "Binary heaps are more space-efficient.",
      "Fibonacci heaps require more complex algorithms.",
      "Fibonacci heaps are faster for all operations.",
    ],
    correctAnswer: "Fibonacci heaps require more complex algorithms.",
    explanation:
      "While Fibonacci heaps provide faster amortized time for certain operations, they are more complex to implement than binary heaps.",
  },
  {
    question:
      "In a d-ary heap, what is the time complexity of the 'Delete-Min' operation?",
    options: ["O(1)", "O(log_d n)", "O(d log n)", "O(log n)"],
    correctAnswer: "O(d log n)",
    explanation:
      "In a d-ary heap, the 'Delete-Min' operation takes O(d log n) time as it involves reheapifying the structure after removing the minimum element.",
  },
  {
    question: "What is the space complexity of a binomial heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "A binomial heap requires O(n) space, as it stores nodes in binomial trees and uses pointers for structural links.",
  },
  {
    question:
      "Which heap structure is best suited for applications that involve repeated merging of heaps?",
    options: ["Binary heap", "Fibonacci heap", "Binomial heap", "Leftist heap"],
    correctAnswer: "Binomial heap",
    explanation:
      "Binomial heaps are ideal for applications that require repeated merging of heaps, as they support the 'Merge' operation in O(log n) time.",
  },
  {
    question:
      "What is the main purpose of the 'Consolidation' process in a Fibonacci heap?",
    options: [
      "To decrease the key of a node.",
      "To maintain the heap structure.",
      "To reduce the number of trees in the heap.",
      "To balance the heap.",
    ],
    correctAnswer: "To reduce the number of trees in the heap.",
    explanation:
      "Consolidation in a Fibonacci heap reduces the number of trees by merging trees of the same rank, ensuring efficient structure.",
  },
  {
    question:
      "In which of the following heaps is the 'Find-Min' operation the most efficient?",
    options: ["Binary heap", "Fibonacci heap", "Binomial heap", "Leftist heap"],
    correctAnswer: "Fibonacci heap",
    explanation:
      "In Fibonacci heaps, 'Find-Min' takes O(1) time, which is the most efficient among all heap structures.",
  },
  {
    question:
      "Which of the following heap types is most efficient for use in graph algorithms like Prim's or Dijkstra's?",
    options: ["Binary heap", "Fibonacci heap", "Binomial heap", "Leftist heap"],
    correctAnswer: "Fibonacci heap",
    explanation:
      "Fibonacci heaps provide the most efficient 'Decrease-Key' and 'Extract-Min' operations for graph algorithms like Dijkstra's.",
  },
];
