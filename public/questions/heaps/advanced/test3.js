export const test3 = [
  {
    question:
      "What is the time complexity of inserting an element into a binomial heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Inserting an element into a binomial heap requires combining two heaps and possibly consolidating trees, which takes O(log n) time.",
  },
  {
    question:
      "Which heap data structure can be used to efficiently implement the priority queue for Dijkstra's algorithm?",
    options: ["Binary heap", "Fibonacci heap", "Binomial heap", "Leftist heap"],
    correctAnswer: "Fibonacci heap",
    explanation:
      "Fibonacci heaps provide better performance for decrease-key operations, making them ideal for Dijkstra's algorithm.",
  },
  {
    question:
      "What is the primary benefit of using a leftist heap over a binary heap?",
    options: [
      "Lower space complexity.",
      "More balanced structure.",
      "Faster merge operations.",
      "Better performance for Extract-Min.",
    ],
    correctAnswer: "Faster merge operations.",
    explanation:
      "Leftist heaps provide faster merging operations compared to binary heaps, which makes them ideal for applications involving merging heaps.",
  },
  {
    question:
      "Which heap is best suited for applications where merge operations are frequent?",
    options: ["Binary heap", "Fibonacci heap", "Binomial heap", "Leftist heap"],
    correctAnswer: "Binomial heap",
    explanation:
      "Binomial heaps are optimized for merge operations with time complexity O(log n), making them suitable for applications with frequent heap merging.",
  },
  {
    question: "Which operation in a Fibonacci heap takes O(1) amortized time?",
    options: ["Extract-Min", "Insert", "Decrease-Key", "Delete"],
    correctAnswer: "Insert",
    explanation:
      "Inserting an element into a Fibonacci heap takes O(1) amortized time because the node is simply added to the root list.",
  },
  {
    question:
      "What is the key difference between a binary heap and a d-ary heap?",
    options: [
      "A d-ary heap has more children per node.",
      "A binary heap allows duplicate values.",
      "A binary heap is more balanced.",
      "A d-ary heap requires less memory.",
    ],
    correctAnswer: "A d-ary heap has more children per node.",
    explanation:
      "A d-ary heap generalizes a binary heap by allowing each node to have d children, which can result in faster operations in certain scenarios.",
  },
  {
    question:
      "How do Fibonacci heaps improve the performance of decrease-key operations compared to binary heaps?",
    options: [
      "By reducing the number of nodes.",
      "By delaying consolidation until necessary.",
      "By requiring less memory.",
      "By ensuring that the heap is always balanced.",
    ],
    correctAnswer: "By delaying consolidation until necessary.",
    explanation:
      "Fibonacci heaps delay consolidation, which allows decrease-key operations to be performed in O(1) amortized time, making them faster than binary heaps for this operation.",
  },
  {
    question:
      "What is the time complexity of the delete operation in a Fibonacci heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "The delete operation in a Fibonacci heap is performed by combining the Extract-Min and decrease-key operations, leading to a time complexity of O(log n).",
  },
  {
    question: "In a leftist heap, what is the 'rank' of a node?",
    options: [
      "The number of children.",
      "The height of the node.",
      "The distance between the longest and shortest paths to a leaf.",
      "The depth of the node.",
    ],
    correctAnswer:
      "The distance between the longest and shortest paths to a leaf.",
    explanation:
      "In a leftist heap, the rank of a node is defined as the distance between the shortest and longest paths from the node to a leaf.",
  },
  {
    question: "What is the time complexity of merging two Fibonacci heaps?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "Merging two Fibonacci heaps is done in O(1) time, as it simply involves concatenating the root lists of the two heaps.",
  },
  {
    question: "What operation in a leftist heap takes O(log n) time?",
    options: ["Extract-Min", "Insert", "Merge", "Decrease-Key"],
    correctAnswer: "Extract-Min",
    explanation:
      "Extract-Min operation in a leftist heap takes O(log n) time because it requires consolidating nodes to maintain the heap property.",
  },
  {
    question: "How can you achieve a faster merge operation in heaps?",
    options: [
      "By using a Fibonacci heap.",
      "By using a binary heap.",
      "By using a leftist heap.",
      "By using a binomial heap.",
    ],
    correctAnswer: "By using a binomial heap.",
    explanation:
      "Binomial heaps provide efficient merge operations with time complexity O(log n), making them suitable for applications with frequent heap merging.",
  },
  {
    question:
      "Which of the following best describes the structure of a Fibonacci heap?",
    options: [
      "A balanced binary tree.",
      "A collection of trees.",
      "A complete binary tree.",
      "A single binary tree.",
    ],
    correctAnswer: "A collection of trees.",
    explanation:
      "A Fibonacci heap is a collection of trees, each of which satisfies the min-heap property. It allows for faster operations such as decrease-key and merge.",
  },
  {
    question:
      "What is the time complexity of the 'Decrease-Key' operation in a binomial heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "The Decrease-Key operation in a binomial heap requires potentially reorganizing the heap, which takes O(log n) time.",
  },
  {
    question:
      "What is the minimum number of nodes required to form a binomial tree of order 4?",
    options: ["10", "15", "16", "20"],
    correctAnswer: "16",
    explanation:
      "A binomial tree of order 4 has 16 nodes, following the recurrence relation for the number of nodes in a binomial tree.",
  },
  {
    question:
      "How does the space complexity of Fibonacci heap compare to other heaps?",
    options: [
      "It uses less space.",
      "It uses the same space.",
      "It uses more space.",
      "It uses exponentially more space.",
    ],
    correctAnswer: "It uses more space.",
    explanation:
      "Fibonacci heaps use more space than binary heaps and other simpler heap structures due to their additional pointers and tree structures.",
  },
  {
    question: "What is the main drawback of using a Fibonacci heap?",
    options: [
      "It has a high time complexity for the Extract-Min operation.",
      "It requires a lot of memory.",
      "It has a complex implementation.",
      "It is less flexible than other heaps.",
    ],
    correctAnswer: "It has a complex implementation.",
    explanation:
      "While Fibonacci heaps provide efficient operations, their implementation is more complex compared to simpler heap structures like binary heaps.",
  },
  {
    question:
      "In a 3-ary heap, what is the maximum number of children any node can have?",
    options: ["3", "6", "9", "12"],
    correctAnswer: "3",
    explanation:
      "In a 3-ary heap, each node can have at most 3 children, as defined by the heap's arity.",
  },
  {
    question:
      "What is the time complexity of Extract-Min operation in a Fibonacci heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Extract-Min operation in a Fibonacci heap takes O(log n) time due to the need for consolidating trees after removal of the minimum element.",
  },
  {
    question:
      "In which scenario is a d-ary heap preferable over a binary heap?",
    options: [
      "When fewer comparisons are required.",
      "When insertion speed is more important.",
      "When more children per node is beneficial for balancing.",
      "When the heap needs to maintain strict balance.",
    ],
    correctAnswer: "When more children per node is beneficial for balancing.",
    explanation:
      "A d-ary heap is useful in scenarios where having more children per node can improve performance, especially in large-scale heaps.",
  },
];
