export const test4 = [
  {
    question:
      "What is the worst-case time complexity of a Fibonacci heap's Extract-Min operation?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst case, the Extract-Min operation in a Fibonacci heap can take O(n) time due to the need to consolidate trees.",
  },
  {
    question:
      "Which heap structure allows for amortized constant time 'Decrease-Key' and 'Insert' operations?",
    options: ["Binary heap", "Binomial heap", "Fibonacci heap", "Leftist heap"],
    correctAnswer: "Fibonacci heap",
    explanation:
      "Fibonacci heaps allow 'Insert' and 'Decrease-Key' operations to be performed in amortized O(1) time.",
  },
  {
    question:
      "In a binary heap, how is the parent of a node at index 'i' determined?",
    options: [
      "Parent index = i / 2",
      "Parent index = (i - 1) / 2",
      "Parent index = 2 * i + 1",
      "Parent index = 2 * i - 1",
    ],
    correctAnswer: "Parent index = (i - 1) / 2",
    explanation:
      "In a binary heap, the parent of a node at index 'i' can be found at index (i - 1) / 2.",
  },
  {
    question:
      "What is the key advantage of a Fibonacci heap over other heap data structures?",
    options: [
      "Faster extraction of maximum elements.",
      "Efficient 'Decrease-Key' and 'Delete' operations.",
      "Simpler implementation.",
      "Better space efficiency.",
    ],
    correctAnswer: "Efficient 'Decrease-Key' and 'Delete' operations.",
    explanation:
      "Fibonacci heaps offer more efficient 'Decrease-Key' and 'Delete' operations, making them useful for algorithms like Dijkstra's and Prim's.",
  },
  {
    question: "Which of the following is a characteristic of a d-ary heap?",
    options: [
      "It has a height of log2(n).",
      "Each node can have at most d children.",
      "It maintains a strict binary structure.",
      "It has the same time complexity for all operations as a binary heap.",
    ],
    correctAnswer: "Each node can have at most d children.",
    explanation:
      "A d-ary heap generalizes the binary heap by allowing each node to have up to 'd' children, which changes its structure and operation time complexities.",
  },
  {
    question: "In a leftist heap, how is the rank of a node defined?",
    options: [
      "The number of children of the node.",
      "The height of the left subtree.",
      "The number of leftmost child nodes.",
      "The length of the shortest path from the node to a leaf.",
    ],
    correctAnswer: "The length of the shortest path from the node to a leaf.",
    explanation:
      "The rank of a node in a leftist heap is defined as the length of the shortest path from the node to a leaf.",
  },
  {
    question:
      "In a binomial heap, how is the structure of each binomial tree determined?",
    options: [
      "By its depth.",
      "By the order of the heap.",
      "By its rank.",
      "By the number of children.",
    ],
    correctAnswer: "By its order.",
    explanation:
      "In a binomial heap, each binomial tree of order 'k' has 2^k nodes and a height of k.",
  },
  {
    question:
      "Which of the following heap data structures is most efficient when performing a sequence of merge operations?",
    options: ["Binary heap", "Fibonacci heap", "Binomial heap", "Leftist heap"],
    correctAnswer: "Binomial heap",
    explanation:
      "Binomial heaps are more efficient for merging operations, with a time complexity of O(log n), making them ideal for applications that frequently merge heaps.",
  },
  {
    question:
      "In which scenario would a leftist heap be more useful than a binary heap?",
    options: [
      "When merge operations are frequent.",
      "When memory usage is a concern.",
      "When the heap needs to be balanced strictly.",
      "When the heap is very small.",
    ],
    correctAnswer: "When merge operations are frequent.",
    explanation:
      "Leftist heaps provide efficient merge operations, which makes them preferable when frequent merging of heaps is required.",
  },
  {
    question:
      "Which heap type has the best amortized time complexity for the 'Merge' operation?",
    options: ["Binary heap", "Fibonacci heap", "Binomial heap", "Leftist heap"],
    correctAnswer: "Fibonacci heap",
    explanation:
      "Fibonacci heaps allow the 'Merge' operation to be performed in O(1) amortized time, making them ideal for applications that require frequent heap merging.",
  },
  {
    question:
      "What is the time complexity of the 'Insert' operation in a binomial heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(log n * log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Inserting into a binomial heap involves merging a single element into the heap, which takes O(log n) time.",
  },
  {
    question:
      "What is the average time complexity for the 'Extract-Min' operation in a Fibonacci heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(log n * log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "The 'Extract-Min' operation in a Fibonacci heap takes O(log n) amortized time due to the need for tree consolidation.",
  },
  {
    question: "How do leftist heaps maintain balance?",
    options: [
      "By ensuring that all nodes have the same rank.",
      "By keeping track of the rank of nodes.",
      "By having a binary structure.",
      "By ensuring the left subtree has more nodes than the right.",
    ],
    correctAnswer:
      "By ensuring the left subtree has more nodes than the right.",
    explanation:
      "In leftist heaps, balance is maintained by ensuring that the left subtree is always longer than the right subtree.",
  },
  {
    question:
      "Which heap operation has the best time complexity in a Fibonacci heap?",
    options: ["Extract-Min", "Insert", "Decrease-Key", "Delete"],
    correctAnswer: "Decrease-Key",
    explanation:
      "The 'Decrease-Key' operation in a Fibonacci heap has an amortized time complexity of O(1), which is better than other heap operations.",
  },
  {
    question: "What is the space complexity of a Fibonacci heap?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "A Fibonacci heap requires O(n) space because it maintains a collection of trees and various pointers.",
  },
  {
    question: "How does the 'Decrease-Key' operation work in a Fibonacci heap?",
    options: [
      "By merging the heap.",
      "By swapping nodes.",
      "By marking nodes as decreased.",
      "By cutting and moving the node to the root list.",
    ],
    correctAnswer: "By cutting and moving the node to the root list.",
    explanation:
      "The 'Decrease-Key' operation in a Fibonacci heap cuts the node from its parent and moves it to the root list, helping maintain the heap properties.",
  },
  {
    question:
      "In a 4-ary heap, how many children can each node have at maximum?",
    options: ["4", "8", "16", "2"],
    correctAnswer: "4",
    explanation:
      "In a 4-ary heap, each node can have at most 4 children, as specified by the arity.",
  },
  {
    question:
      "What is the worst-case time complexity of deleting a node in a Fibonacci heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Deleting a node in a Fibonacci heap takes O(log n) time due to the need to restructure the heap after the node removal.",
  },
  {
    question:
      "Which heap is known for having the worst-case time complexity of O(n) for the 'Extract-Min' operation?",
    options: ["Binary heap", "Binomial heap", "Leftist heap", "Fibonacci heap"],
    correctAnswer: "Fibonacci heap",
    explanation:
      "The worst-case time complexity of the 'Extract-Min' operation in a Fibonacci heap can be O(n) in some cases due to tree consolidation.",
  },
  {
    question:
      "In which heap does the 'Insert' operation take O(1) amortized time?",
    options: ["Binary heap", "Binomial heap", "Fibonacci heap", "Leftist heap"],
    correctAnswer: "Fibonacci heap",
    explanation:
      "Fibonacci heaps allow the 'Insert' operation to be performed in O(1) amortized time due to their efficient structure.",
  },
];
