export const test3 = [
  {
    question:
      "Which data structure is commonly used to implement a queue in most programming languages?",
    options: ["Linked List", "Stack", "Array", "Hash Map"],
    correctAnswer: "Array",
    explanation:
      "Most programming languages implement queues using arrays, as it allows for simple and efficient access to both ends of the queue.",
  },

  {
    question: "How does a priority queue handle the order of elements?",
    options: [
      "Elements are processed in FIFO order",
      "Elements are processed in LIFO order",
      "Elements with higher priority are processed first",
      "Elements are processed randomly",
    ],
    correctAnswer: "Elements with higher priority are processed first",
    explanation:
      "In a priority queue, elements with higher priority are dequeued before elements with lower priority, regardless of their position in the queue.",
  },

  {
    question: "What happens if you attempt to dequeue from an empty queue?",
    options: [
      "The operation succeeds with no changes",
      "An exception is thrown",
      "The queue becomes full",
      "The front pointer is reset",
    ],
    correctAnswer: "An exception is thrown",
    explanation:
      "Attempting to dequeue from an empty queue generally results in an exception or error, as there are no elements to remove.",
  },

  {
    question:
      "What is the main advantage of using a circular queue over a linear queue?",
    options: [
      "It increases the speed of dequeuing",
      "It prevents memory wastage by reusing freed space",
      "It allows dynamic resizing",
      "It improves sorting efficiency",
    ],
    correctAnswer: "It prevents memory wastage by reusing freed space",
    explanation:
      "In a circular queue, when the rear reaches the end of the array, it wraps around to the start, reusing space that would otherwise be wasted in a linear queue.",
  },

  {
    question:
      "How can you identify whether a queue is full in a circular queue implementation?",
    options: [
      "When front == rear",
      "When front == rear + 1",
      "When rear + 1 == front",
      "When rear == front",
    ],
    correctAnswer: "When rear + 1 == front",
    explanation:
      "In a circular queue, the queue is full when the 'rear' pointer is one position ahead of the 'front' pointer, i.e., when rear + 1 equals front.",
  },

  {
    question:
      "What is the time complexity of the 'Peek' operation in a queue implemented using a circular array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'Peek' operation, which retrieves the element at the front of the queue, is constant time O(1) in a circular array implementation.",
  },

  {
    question:
      "What is the primary disadvantage of using a linked list to implement a queue?",
    options: [
      "Memory wastage",
      "Slower access time",
      "Complexity in resizing",
      "Higher overhead for pointers",
    ],
    correctAnswer: "Higher overhead for pointers",
    explanation:
      "While linked lists are flexible, they incur additional memory overhead for storing pointers, which can be a disadvantage in certain situations.",
  },

  {
    question:
      "In which of the following scenarios is a priority queue most useful?",
    options: [
      "Task scheduling with deadlines",
      "FIFO data processing",
      "Cache management",
      "Queue for customer support",
    ],
    correctAnswer: "Task scheduling with deadlines",
    explanation:
      "A priority queue is most useful in scenarios like task scheduling where tasks need to be processed based on their priority levels.",
  },

  {
    question:
      "What is the time complexity of the 'Dequeue' operation in a queue implemented using an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In an array-based queue, the 'Dequeue' operation occurs in constant time O(1) when elements are simply removed from the front of the queue.",
  },

  {
    question:
      "What is the primary characteristic of a deque (double-ended queue)?",
    options: [
      "It allows removal of elements only from one end",
      "It allows insertion and removal of elements from both ends",
      "It only supports priority-based elements",
      "It prevents random access",
    ],
    correctAnswer: "It allows insertion and removal of elements from both ends",
    explanation:
      "A deque (double-ended queue) allows elements to be inserted and removed from both ends, making it more flexible than a standard queue.",
  },
  {
    question:
      "What is the time complexity of 'Enqueue' operation in a priority queue implemented using a min-heap?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a priority queue implemented using a min-heap, 'Enqueue' takes O(log n) time as it involves inserting an element and rebalancing the heap.",
  },

  {
    question:
      "What is the maximum number of elements in a full circular queue with size 'n'?",
    options: ["n-1", "n", "2n", "n/2"],
    correctAnswer: "n-1",
    explanation:
      "In a circular queue, the maximum number of elements is n-1 to avoid confusion between full and empty conditions when 'front' equals 'rear'.",
  },

  {
    question:
      "In which case does a queue implemented using a dynamic array grow in size?",
    options: [
      "When there is no space left to enqueue",
      "When more elements are dequeued than enqueued",
      "When the front pointer moves too fast",
      "When the queue reaches a certain threshold",
    ],
    correctAnswer: "When there is no space left to enqueue",
    explanation:
      "In a dynamic array implementation, the queue grows in size when there is no available space for new elements to be enqueued.",
  },

  {
    question:
      "What is the space complexity of a priority queue implemented using a binary heap?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of a binary heap-based priority queue is O(n), where 'n' is the number of elements in the queue.",
  },

  {
    question: "What is the main difference between a stack and a queue?",
    options: [
      "Stacks follow FIFO order, while queues follow LIFO order",
      "Stacks follow LIFO order, while queues follow FIFO order",
      "Stacks allow random access, while queues don't",
      "Stacks use arrays, while queues use linked lists",
    ],
    correctAnswer: "Stacks follow LIFO order, while queues follow FIFO order",
    explanation:
      "A stack follows Last-In-First-Out (LIFO) order, meaning the last element added is the first to be removed. A queue follows First-In-First-Out (FIFO) order, where the first element added is the first to be removed.",
  },

  {
    question:
      "What is the time complexity of the 'Enqueue' operation in a queue implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a linked list-based queue, 'Enqueue' is a constant time operation O(1) since it involves adding an element to the rear of the queue.",
  },

  {
    question:
      "In a queue, what operation removes an element from the rear of the queue?",
    options: ["Push", "Pop", "Dequeue", "None"],
    correctAnswer: "None",
    explanation:
      "In a queue, elements are removed from the front, not the rear. The 'Dequeue' operation removes elements from the front of the queue.",
  },

  {
    question:
      "What is the time complexity of the 'Dequeue' operation in a circular queue implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a circular queue implemented using a linked list, 'Dequeue' is a constant time operation O(1) as it involves removing an element from the front of the queue.",
  },

  {
    question:
      "Which of the following scenarios is a good use case for a queue?",
    options: [
      "Task scheduling",
      "Undo functionality in text editors",
      "Finding the longest path in a graph",
      "Binary search operations",
    ],
    correctAnswer: "Task scheduling",
    explanation:
      "Queues are ideal for task scheduling where tasks need to be processed in a first-come, first-served manner.",
  },

  {
    question:
      "Which operation in a priority queue might require reordering of the elements?",
    options: ["Enqueue", "Dequeue", "Peek", "All of the above"],
    correctAnswer: "All of the above",
    explanation:
      "All three operations — 'Enqueue', 'Dequeue', and 'Peek' — might require reordering of elements in a priority queue to maintain priority order.",
  },
];
