export const test5 = [
  {
    question:
      "What is the primary difference between a deque and a regular queue?",
    options: [
      "A deque allows insertion and removal at both ends, while a queue only allows insertion at the rear and removal at the front",
      "A deque only allows insertion at the rear",
      "A queue supports random access, while a deque does not",
      "A deque supports priority ordering",
    ],
    correctAnswer:
      "A deque allows insertion and removal at both ends, while a queue only allows insertion at the rear and removal at the front",
    explanation:
      "A deque (double-ended queue) allows insertion and removal of elements from both ends, while a regular queue only allows insertion at the rear and removal from the front.",
  },

  {
    question:
      "In a queue implemented using a linked list, what is the time complexity for both enqueue and dequeue operations?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Both enqueue and dequeue operations can be performed in constant time O(1) in a queue implemented using a linked list.",
  },

  {
    question:
      "What would be the consequence of trying to dequeue from an empty queue?",
    options: [
      "Nothing happens",
      "An exception or error is raised",
      "The queue is automatically reinitialized",
      "The queue deletes all elements",
    ],
    correctAnswer: "An exception or error is raised",
    explanation:
      "Dequeueing from an empty queue is an invalid operation, and it typically raises an exception or error.",
  },

  {
    question:
      "Which of the following algorithms is often implemented using a queue?",
    options: [
      "Binary Search",
      "Quick Sort",
      "Breadth-First Search (BFS)",
      "Dijkstra's Algorithm",
    ],
    correctAnswer: "Breadth-First Search (BFS)",
    explanation:
      "Breadth-First Search (BFS) is often implemented using a queue, as it processes nodes layer by layer in FIFO order.",
  },

  {
    question: "Which of the following can be implemented as a priority queue?",
    options: [
      "Task scheduling system",
      "Round-robin scheduling",
      "First Come First Serve (FCFS)",
      "None of the above",
    ],
    correctAnswer: "Task scheduling system",
    explanation:
      "A priority queue is ideal for task scheduling systems where tasks are processed based on priority rather than arrival order.",
  },

  {
    question:
      "What is the maximum size of a queue that can be implemented using an array with fixed size?",
    options: [
      "Unlimited",
      "Size of the array",
      "Size of the array minus 1",
      "Size of the array divided by 2",
    ],
    correctAnswer: "Size of the array minus 1",
    explanation:
      "In an array-based queue, the maximum size is the size of the array minus 1, as one position must be reserved to differentiate between full and empty states.",
  },

  {
    question:
      "In a circular queue, what is the time complexity of an enqueue operation?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a circular queue, both enqueue and dequeue operations can be performed in constant time O(1) by using a circular array.",
  },

  {
    question: "What is the purpose of a 'front' pointer in a circular queue?",
    options: [
      "To point to the first element",
      "To point to the last element",
      "To track the size of the queue",
      "To manage memory",
    ],
    correctAnswer: "To point to the first element",
    explanation:
      "In a circular queue, the 'front' pointer points to the first element in the queue, allowing for proper tracking and management of the queue.",
  },

  {
    question:
      "In a priority queue implemented using a heap, what is the time complexity for inserting a new element?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a heap-based priority queue, inserting a new element requires bubbling up the element to maintain the heap property, which takes O(log n) time.",
  },

  {
    question:
      "What is the most common application of queues in operating systems?",
    options: [
      "Task scheduling",
      "Sorting algorithms",
      "Memory management",
      "File compression",
    ],
    correctAnswer: "Task scheduling",
    explanation:
      "Queues are frequently used in operating systems for task scheduling, where tasks are processed in the order of their arrival.",
  },
  {
    question:
      "In a queue, what happens when you try to enqueue an element into a full queue?",
    options: [
      "The element is added to the queue",
      "An error or overflow occurs",
      "The queue size is automatically increased",
      "The oldest element is overwritten",
    ],
    correctAnswer: "An error or overflow occurs",
    explanation:
      "If the queue is full, an error or overflow occurs when trying to enqueue an element, as there is no space left in the queue.",
  },

  {
    question: "Which of the following is a common use of a circular queue?",
    options: [
      "Task scheduling",
      "Memory management",
      "Buffer management in networking",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Circular queues are commonly used in task scheduling, memory management, and buffer management due to their efficient use of space.",
  },

  {
    question:
      "What is the complexity of accessing an element in a queue implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Accessing an element in a queue implemented using a linked list requires traversing the list, which takes O(n) time.",
  },

  {
    question:
      "In which situation is it appropriate to use a circular queue instead of a regular queue?",
    options: [
      "When there is a fixed-size memory buffer",
      "When elements are processed in FIFO order",
      "When elements are processed based on priority",
      "None of the above",
    ],
    correctAnswer: "When there is a fixed-size memory buffer",
    explanation:
      "A circular queue is ideal when you need a fixed-size memory buffer and want to efficiently reuse memory by wrapping around the queue.",
  },

  {
    question: "How is a priority queue typically implemented?",
    options: [
      "Using a stack",
      "Using a heap",
      "Using a linked list",
      "Using a queue",
    ],
    correctAnswer: "Using a heap",
    explanation:
      "A priority queue is commonly implemented using a heap data structure, which allows for efficient insertion and removal based on priority.",
  },

  {
    question:
      "Which of the following is an advantage of using a linked list to implement a queue?",
    options: [
      "Memory-efficient for dynamic size",
      "Faster random access",
      "Fixed memory usage",
      "None of the above",
    ],
    correctAnswer: "Memory-efficient for dynamic size",
    explanation:
      "Using a linked list to implement a queue allows for dynamic memory allocation, making it memory-efficient as the size can grow or shrink as needed.",
  },

  {
    question: "What is the time complexity of the 'peek' operation in a queue?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'peek' operation in a queue (viewing the front element without removing it) takes constant time O(1).",
  },

  {
    question:
      "Which of the following statements about priority queues is true?",
    options: [
      "All elements are processed in FIFO order",
      "Elements with higher priority are dequeued before elements with lower priority",
      "Priority queues are implemented using stacks",
      "Priority queues can only store integers",
    ],
    correctAnswer:
      "Elements with higher priority are dequeued before elements with lower priority",
    explanation:
      "In a priority queue, elements are dequeued based on their priority, with higher priority elements processed first.",
  },

  {
    question:
      "What is the main disadvantage of using an array-based queue implementation?",
    options: [
      "Limited size",
      "Slower enqueue operation",
      "Slower dequeue operation",
      "None of the above",
    ],
    correctAnswer: "Limited size",
    explanation:
      "An array-based queue has a fixed size, which can limit its ability to grow dynamically if the number of elements exceeds its initial size.",
  },

  {
    question: "How does a queue differ from a stack?",
    options: [
      "A queue follows LIFO order, while a stack follows FIFO order",
      "A queue follows FIFO order, while a stack follows LIFO order",
      "A stack is faster than a queue",
      "None of the above",
    ],
    correctAnswer:
      "A queue follows FIFO order, while a stack follows LIFO order",
    explanation:
      "A queue operates in FIFO (First-In-First-Out) order, whereas a stack operates in LIFO (Last-In-First-Out) order.",
  },
];
