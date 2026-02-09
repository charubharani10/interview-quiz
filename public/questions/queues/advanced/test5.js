export const test5 = [
  {
    question:
      "What is the time complexity of accessing the front element in a circular queue?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "Accessing the front element of a circular queue takes constant time O(1) because it can be directly accessed without the need for traversal.",
  },

  {
    question:
      "In a circular queue, what would be the issue if the front and rear pointers overlap but the queue is not full?",
    options: [
      "The queue will be stuck in an infinite loop",
      "You cannot distinguish between an empty and a full queue",
      "The queue will automatically reset",
      "There will be a memory overflow",
    ],
    correctAnswer: "You cannot distinguish between an empty and a full queue",
    explanation:
      "In a circular queue, if the front and rear pointers overlap, it can be difficult to distinguish between a full and empty queue. Additional mechanisms are used to handle this situation.",
  },

  {
    question:
      "Which data structure is best for implementing a queue with priority levels?",
    options: ["Array", "Linked List", "Priority Queue", "Stack"],
    correctAnswer: "Priority Queue",
    explanation:
      "A priority queue is best for handling elements with priority levels, as it allows elements to be dequeued based on their priority rather than their insertion order.",
  },

  {
    question:
      "What is the primary disadvantage of using a linked list to implement a queue?",
    options: [
      "Requires constant memory allocation",
      "Slow enqueue operations",
      "Cannot dynamically expand",
      "Difficult to implement in low-level languages",
    ],
    correctAnswer: "Requires constant memory allocation",
    explanation:
      "In a linked list-based queue, each element requires dynamic memory allocation for the node, leading to increased overhead compared to a fixed-size array-based implementation.",
  },

  {
    question: "What does the 'enqueue' operation in a queue do?",
    options: [
      "Removes an element from the front",
      "Adds an element to the front",
      "Adds an element to the rear",
      "Removes an element from the rear",
    ],
    correctAnswer: "Adds an element to the rear",
    explanation:
      "The 'enqueue' operation adds an element to the rear of the queue, following the FIFO (First In, First Out) principle.",
  },

  {
    question: "Which of the following is a valid use case for a queue?",
    options: [
      "Evaluating mathematical expressions",
      "Implementing undo operations",
      "Scheduling tasks in operating systems",
      "Recursive traversal of graphs",
    ],
    correctAnswer: "Scheduling tasks in operating systems",
    explanation:
      "Queues are often used in task scheduling algorithms in operating systems, where tasks are processed in the order they arrive (FIFO).",
  },

  {
    question:
      "In a queue implemented using two stacks, what happens when you attempt to dequeue an element when both stacks are empty?",
    options: [
      "It throws an exception",
      "It returns null",
      "It causes an infinite loop",
      "It performs a no-op",
    ],
    correctAnswer: "It throws an exception",
    explanation:
      "When both stacks are empty in a queue implementation using two stacks, attempting to dequeue throws an exception because there are no elements to dequeue.",
  },

  {
    question:
      "In a priority queue implemented using a binary heap, how is the element with the lowest priority extracted?",
    options: [
      "At the root",
      "At the leftmost leaf",
      "At the rightmost leaf",
      "At the middle of the heap",
    ],
    correctAnswer: "At the root",
    explanation:
      "In a binary heap implementation of a priority queue, the element with the lowest priority is located at the root of the heap and is extracted first.",
  },

  {
    question:
      "What is the main advantage of a circular queue over a regular queue?",
    options: [
      "It requires less memory",
      "It eliminates memory wastage by reusing empty space",
      "It allows faster access to elements",
      "It provides more flexibility in data types",
    ],
    correctAnswer: "It eliminates memory wastage by reusing empty space",
    explanation:
      "A circular queue effectively reuses space when elements are dequeued, thus eliminating memory wastage compared to a regular queue that may have unused space after elements are dequeued.",
  },

  {
    question: "In which scenario would you prefer to use a deque over a queue?",
    options: [
      "When you need constant time access to elements at both ends",
      "When you need a high degree of thread safety",
      "When you are processing large amounts of data",
      "When the data needs to be stored in an ordered sequence",
    ],
    correctAnswer:
      "When you need constant time access to elements at both ends",
    explanation:
      "A deque allows constant time O(1) insertion and removal of elements from both ends, making it more flexible than a regular queue.",
  },
];
