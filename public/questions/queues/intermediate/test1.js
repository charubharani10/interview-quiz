export const test1 = [
  {
    question: "Which operation removes an element from the front of a queue?",
    options: ["Enqueue", "Dequeue", "Peek", "Push"],
    correctAnswer: "Dequeue",
    explanation:
      "The dequeue operation removes an element from the front of the queue, which follows the FIFO (First-In-First-Out) principle.",
  },

  {
    question:
      "What is the main difference between a simple queue and a priority queue?",
    options: [
      "A simple queue is FIFO, while a priority queue dequeues elements based on priority.",
      "A simple queue allows random access, while a priority queue only allows sequential access.",
      "A priority queue stores elements in reverse order.",
      "A simple queue allows circular operations.",
    ],
    correctAnswer:
      "A simple queue is FIFO, while a priority queue dequeues elements based on priority.",
    explanation:
      "A simple queue follows the FIFO principle, whereas a priority queue dequeues elements based on priority levels assigned to them.",
  },

  {
    question:
      "What is the time complexity of the 'Peek' operation in a queue implemented using an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'Peek' operation occurs in constant time O(1), as it only requires accessing the element at the front of the queue.",
  },

  {
    question: "What would happen if you try to dequeue from an empty queue?",
    options: [
      "It will throw an underflow exception",
      "It will return null",
      "It will remove the last element in the queue",
      "It will throw an overflow exception",
    ],
    correctAnswer: "It will throw an underflow exception",
    explanation:
      "Attempting to dequeue from an empty queue will result in an underflow exception because there are no elements to remove.",
  },

  {
    question: "Which data structure is best for implementing a queue?",
    options: ["Stack", "Linked List", "Hash Map", "Set"],
    correctAnswer: "Linked List",
    explanation:
      "A linked list is ideal for implementing a queue because it allows efficient insertion and removal of elements at both ends.",
  },

  {
    question:
      "In a circular queue, what is the main advantage of wrapping the 'rear' pointer around when the end of the array is reached?",
    options: [
      "It allows for unlimited queue expansion",
      "It prevents queue overflow",
      "It uses memory more efficiently by reusing space",
      "It simplifies the implementation of the queue",
    ],
    correctAnswer: "It uses memory more efficiently by reusing space",
    explanation:
      "In a circular queue, when the 'rear' pointer reaches the end of the array, it wraps around to the beginning and reuses empty space, making efficient use of memory.",
  },

  {
    question:
      "Which of the following operations is used to view the element at the front of the queue without removing it?",
    options: ["Peek", "Pop", "Push", "Enqueue"],
    correctAnswer: "Peek",
    explanation:
      "The 'Peek' operation allows you to view the front element of the queue without removing it.",
  },

  {
    question:
      "In a deque (double-ended queue), which operations are allowed at both ends?",
    options: [
      "Insert at the front and remove from the front",
      "Insert at the rear and remove from the front",
      "Insert and remove from both ends",
      "Insert at the front and remove from the rear",
    ],
    correctAnswer: "Insert and remove from both ends",
    explanation:
      "A deque allows insertion and removal of elements from both the front and the rear, offering more flexibility compared to a standard queue.",
  },

  {
    question: "In a priority queue, how are elements removed?",
    options: [
      "In the order they are enqueued",
      "Based on the highest priority",
      "In reverse order of their priority",
      "Randomly",
    ],
    correctAnswer: "Based on the highest priority",
    explanation:
      "In a priority queue, elements are removed based on their priority. Higher-priority elements are dequeued before lower-priority ones.",
  },

  {
    question: "Which of the following best describes a use case for a queue?",
    options: [
      "Undo functionality in text editors",
      "Resource scheduling in operating systems",
      "Expression evaluation",
      "Sorting of elements",
    ],
    correctAnswer: "Resource scheduling in operating systems",
    explanation:
      "Queues are used in resource scheduling, where processes or tasks are handled in a First-In-First-Out (FIFO) manner.",
  },
  {
    question:
      "What is the typical time complexity of the 'Dequeue' operation in a queue implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'Dequeue' operation in a linked list-based queue operates in constant time O(1) since it only involves updating the front pointer.",
  },

  {
    question:
      "When implementing a queue using two stacks, which operation is the most time-consuming?",
    options: [
      "Enqueue",
      "Dequeue",
      "Both operations take equal time",
      "None of the above",
    ],
    correctAnswer: "Dequeue",
    explanation:
      "When implementing a queue using two stacks, the 'Dequeue' operation is typically more time-consuming because it may require transferring elements between the two stacks.",
  },

  {
    question: "In which scenario would you use a circular queue?",
    options: [
      "When you need to implement a stack",
      "When the queue needs to wrap around when full",
      "When you need a priority queue",
      "When elements need to be sorted",
    ],
    correctAnswer: "When the queue needs to wrap around when full",
    explanation:
      "A circular queue is used when the queue needs to wrap around at the end to use the space that has been freed at the beginning of the array.",
  },

  {
    question:
      "How do you check if a queue is full when implemented using an array?",
    options: [
      "If the 'front' pointer is equal to the 'rear' pointer",
      "If the 'rear' pointer is at the end of the array",
      "If the 'front' pointer is greater than the 'rear' pointer",
      "If the 'front' pointer is at the beginning of the array",
    ],
    correctAnswer: "If the 'front' pointer is equal to the 'rear' pointer",
    explanation:
      "When the 'front' and 'rear' pointers are the same, it indicates the queue is full in a circular array implementation.",
  },

  {
    question: "What does a priority queue implement?",
    options: [
      "LIFO principle",
      "FIFO principle",
      "Deque principle",
      "Elements based on priority",
    ],
    correctAnswer: "Elements based on priority",
    explanation:
      "A priority queue dequeues elements based on their priority, with higher-priority elements dequeued before lower-priority ones.",
  },

  {
    question:
      "What is the space complexity of a queue implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of a linked list-based queue is O(n), where 'n' is the number of elements in the queue.",
  },

  {
    question:
      "Which operation is used to check the element at the front of the queue without removing it?",
    options: ["Pop", "Peek", "Push", "Enqueue"],
    correctAnswer: "Peek",
    explanation:
      "The 'Peek' operation allows you to view the element at the front of the queue without removing it.",
  },

  {
    question:
      "In which scenario is a deque (double-ended queue) more useful than a standard queue?",
    options: [
      "When elements are processed in a FIFO order",
      "When elements need to be added or removed from both ends",
      "When a priority queue is required",
      "When a fixed-size array is used",
    ],
    correctAnswer: "When elements need to be added or removed from both ends",
    explanation:
      "A deque allows insertion and removal of elements from both the front and rear ends, making it more versatile than a standard queue.",
  },

  {
    question:
      "Which of the following describes the time complexity of the 'Enqueue' operation in a circular queue implemented using an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a circular queue, the 'Enqueue' operation occurs in constant time O(1) as it involves adding an element at the rear of the queue.",
  },

  {
    question:
      "In a priority queue, which operation is used to remove the element with the lowest priority?",
    options: ["Dequeue", "Pop", "Peek", "Insert"],
    correctAnswer: "Dequeue",
    explanation:
      "In a priority queue, the 'Dequeue' operation removes the element with the highest priority, but if we want to remove the lowest priority, we'd adjust priority levels accordingly.",
  },
  {
    question:
      "What is the major advantage of using a circular queue over a linear queue?",
    options: [
      "Circular queue allows infinite memory allocation",
      "Circular queue ensures memory usage efficiency by reusing freed spaces",
      "Circular queue provides faster enqueue and dequeue operations",
      "Circular queue uses a doubly linked list for faster processing",
    ],
    correctAnswer:
      "Circular queue ensures memory usage efficiency by reusing freed spaces",
    explanation:
      "A circular queue efficiently reuses freed spaces in the array, avoiding memory wastage unlike a linear queue that may have unused spaces.",
  },

  {
    question:
      "Which of the following would be a common application of a queue in networking?",
    options: [
      "Caching",
      "Handling incoming packets",
      "File compression",
      "Binary search",
    ],
    correctAnswer: "Handling incoming packets",
    explanation:
      "In networking, queues are often used to handle incoming packets, where the first packet received is processed first (FIFO order).",
  },

  {
    question:
      "In a priority queue, if two elements have the same priority, what is typically used to determine their order?",
    options: [
      "Their arrival time",
      "Their memory size",
      "Their type",
      "Their alphabetical order",
    ],
    correctAnswer: "Their arrival time",
    explanation:
      "When two elements have the same priority in a priority queue, their arrival time is typically used to break ties, processing the earliest-arriving element first.",
  },

  {
    question:
      "What is the time complexity of deleting the front element in a queue implemented using an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In an array-based queue, deleting the front element requires shifting all other elements forward, which takes O(n) time.",
  },

  {
    question:
      "In a circular queue, how is the 'rear' pointer managed when the queue is full?",
    options: [
      "It is reset to the front",
      "It stays at the end of the array",
      "It becomes NULL",
      "It points to the middle of the array",
    ],
    correctAnswer: "It is reset to the front",
    explanation:
      "In a circular queue, the 'rear' pointer wraps around to the front when the queue becomes full, allowing it to reuse space in the array.",
  },

  {
    question:
      "Which of the following operations on a queue takes constant time (O(1))?",
    options: ["Enqueue", "Dequeue", "Peek", "All of the above"],
    correctAnswer: "All of the above",
    explanation:
      "In both array-based and linked list-based implementations, enqueue, dequeue, and peek operations on a queue are all performed in constant time, O(1).",
  },

  {
    question:
      "What happens to the 'front' pointer in a queue when an element is dequeued?",
    options: [
      "It moves to the next element in the array",
      "It is set to NULL",
      "It moves to the previous element in the array",
      "It is reset to the start of the array",
    ],
    correctAnswer: "It moves to the next element in the array",
    explanation:
      "In a queue, when an element is dequeued, the 'front' pointer is moved to the next element in the array, and the previous element is removed.",
  },

  {
    question: "What is a real-life example of a priority queue?",
    options: [
      "People waiting in line at a grocery store",
      "A CPU scheduler for processes",
      "A customer service queue",
      "None of the above",
    ],
    correctAnswer: "A CPU scheduler for processes",
    explanation:
      "A CPU scheduler uses a priority queue to manage processes, where more important or time-sensitive processes are given higher priority.",
  },

  {
    question:
      "What is the primary limitation of using a queue with a fixed array size?",
    options: [
      "It can only store integers",
      "It is not efficient for large datasets",
      "It can run out of space even when there are free slots",
      "It doesn't support enqueue operations",
    ],
    correctAnswer: "It can run out of space even when there are free slots",
    explanation:
      "In an array-based queue with a fixed size, if elements are dequeued but space is not reused efficiently, it can run out of space even if there are free slots.",
  },

  {
    question:
      "Which of the following is true about the 'peek' operation in a queue?",
    options: [
      "It removes the front element from the queue",
      "It returns the front element without removing it",
      "It adds an element to the queue",
      "It checks if the queue is empty",
    ],
    correctAnswer: "It returns the front element without removing it",
    explanation:
      "The 'peek' operation allows you to view the front element of the queue without removing it, ensuring you can check the element without altering the queue.",
  },
];
