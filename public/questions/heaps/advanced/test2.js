export const test2 = [
  {
    question: "What is the worst-case time complexity of heap sort?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n log n)",
    explanation:
      "Heap sort has a worst-case time complexity of O(n log n) due to the repeated extraction of the maximum element and reheapification.",
  },
  {
    question: "How does a d-ary heap differ from a binary heap?",
    options: [
      "It has more children per node.",
      "It has fewer children per node.",
      "It allows faster heapify-down operations.",
      "It supports faster merge operations.",
    ],
    correctAnswer: "It has more children per node.",
    explanation:
      "A d-ary heap generalizes a binary heap by allowing each node to have d children, which can improve the time complexity of certain operations.",
  },
  {
    question:
      "In a 4-ary heap, what is the maximum number of children any node can have?",
    options: ["4", "2", "8", "16"],
    correctAnswer: "4",
    explanation:
      "In a 4-ary heap, each node can have up to 4 children, as the number of children per node is defined by the arity.",
  },
  {
    question:
      "Which heap is ideal for implementing a priority queue that supports decrease-key operations efficiently?",
    options: ["Binary heap", "Fibonacci heap", "Binomial heap", "Leftist heap"],
    correctAnswer: "Fibonacci heap",
    explanation:
      "Fibonacci heaps are ideal for implementing priority queues with efficient decrease-key operations (O(1) amortized time).",
  },
  {
    question: "Which of the following is NOT a characteristic of a min heap?",
    options: [
      "The root node is the minimum element.",
      "Each parent node is smaller than its children.",
      "The left child is smaller than the right child.",
      "The heap is a complete binary tree.",
    ],
    correctAnswer: "The left child is smaller than the right child.",
    explanation:
      "In a min heap, there is no specific ordering between the left and right children of a node. The only rule is that each parent is smaller than its children.",
  },
  {
    question: "What is the purpose of the 'heapify' function?",
    options: [
      "To build a heap from an unsorted array.",
      "To re-organize the heap after a deletion.",
      "To maintain the heap property after insertion.",
      "To merge two heaps.",
    ],
    correctAnswer: "To build a heap from an unsorted array.",
    explanation:
      "The 'heapify' function is used to transform an unsorted array into a heap by adjusting elements to maintain the heap property.",
  },
  {
    question:
      "In a leftist heap, which property determines the heap structure?",
    options: [
      "The number of keys in the heap.",
      "The minimum key property.",
      "The distance between the shortest and longest paths.",
      "The rank of each node.",
    ],
    correctAnswer: "The distance between the shortest and longest paths.",
    explanation:
      "In a leftist heap, the rank of a node is defined by the distance between the shortest and longest paths from the node to its descendant leaves.",
  },
  {
    question:
      "What is the amortized time complexity of inserting an element into a Fibonacci heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "Inserting an element into a Fibonacci heap takes O(1) amortized time because it simply involves adding the new node to the root list.",
  },
  {
    question: "Which operation in a binomial heap takes O(log n) time?",
    options: ["Insert", "Extract-Min", "Delete", "Decrease-Key"],
    correctAnswer: "Extract-Min",
    explanation:
      "Extract-Min operation in a binomial heap takes O(log n) time because it requires consolidating trees after removing the root with the minimum key.",
  },
  {
    question: "What is the space complexity of a binary heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "A binary heap stores the elements in an array and requires O(n) space, where n is the number of elements in the heap.",
  },
  {
    question: "What is the time complexity of merging two binomial heaps?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "Merging two binomial heaps requires combining the root lists, which takes O(n) time in the worst case.",
  },
  {
    question: "How does a d-ary heap affect the time complexity of insertion?",
    options: [
      "Insertion time decreases logarithmically.",
      "Insertion time remains constant.",
      "Insertion time increases logarithmically.",
      "Insertion time remains linear.",
    ],
    correctAnswer: "Insertion time decreases logarithmically.",
    explanation:
      "A d-ary heap reduces the number of levels in the heap, which decreases the time complexity of insertion to O(log_d n), where d is the arity.",
  },
  {
    question:
      "Which of the following operations can be performed in O(1) time on a Fibonacci heap?",
    options: ["Extract-Min", "Insert", "Decrease-Key", "Delete"],
    correctAnswer: "Insert",
    explanation:
      "Inserting an element into a Fibonacci heap takes O(1) time because it involves adding the new node to the root list without any heap restructuring.",
  },
  {
    question:
      "Which of the following is a disadvantage of using a Fibonacci heap?",
    options: [
      "Poor performance for Insert operation.",
      "Requires more memory compared to binary heaps.",
      "Not suitable for priority queue implementations.",
      "Lack of support for merging two heaps efficiently.",
    ],
    correctAnswer: "Requires more memory compared to binary heaps.",
    explanation:
      "Fibonacci heaps use more memory compared to binary heaps due to their tree structures and additional pointers.",
  },
  {
    question:
      "Which of the following heap structures supports efficient 'merge' operations?",
    options: ["Binary heap", "Fibonacci heap", "Binomial heap", "Leftist heap"],
    correctAnswer: "Binomial heap",
    explanation:
      "Binomial heaps support efficient merging operations with time complexity O(log n), making them suitable for applications that require merging heaps frequently.",
  },
  {
    question: "What is the advantage of using a 2-3 heap over a binary heap?",
    options: [
      "Faster insertion.",
      "Easier to merge heaps.",
      "More balanced structure.",
      "Better time complexity for Decrease-Key.",
    ],
    correctAnswer: "More balanced structure.",
    explanation:
      "A 2-3 heap is more balanced than a binary heap, which can result in more efficient operations on average.",
  },
  {
    question:
      "What is the amortized time complexity of the Extract-Min operation in a binomial heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "The Extract-Min operation in a binomial heap takes O(log n) time due to the need to consolidate trees after the minimum element is removed.",
  },
  {
    question: "How is the heap property maintained in a leftist heap?",
    options: [
      "By making sure the left subtree is shorter than the right subtree.",
      "By ensuring that the right subtree is smaller than the left subtree.",
      "By maintaining a balance factor.",
      "By using a priority queue.",
    ],
    correctAnswer:
      "By making sure the left subtree is shorter than the right subtree.",
    explanation:
      "In a leftist heap, the heap property is maintained by ensuring that the left subtree is shorter or equal in height compared to the right subtree.",
  },
  {
    question:
      "What is the primary advantage of using a Fibonacci heap over a binary heap?",
    options: [
      "Lower space complexity.",
      "Better time complexity for extract-min.",
      "Better support for merging.",
      "Better performance for decrease-key operations.",
    ],
    correctAnswer: "Better performance for decrease-key operations.",
    explanation:
      "Fibonacci heaps have better performance for decrease-key operations, making them preferable for algorithms like Dijkstra's algorithm.",
  },
  {
    question:
      "What operation in a Fibonacci heap is considered to be the most expensive?",
    options: ["Extract-Min", "Insert", "Decrease-Key", "Merge"],
    correctAnswer: "Extract-Min",
    explanation:
      "Extract-Min is the most expensive operation in a Fibonacci heap due to the need for consolidation of trees.",
  },
];
