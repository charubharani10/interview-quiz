export const test1 = [
  {
    question: "What is the primary characteristic of a queue?",
    options: [
      "First In, First Out (FIFO)",
      "Last In, First Out (LIFO)",
      "Random access",
      "No order",
    ],
    correctAnswer: "First In, First Out (FIFO)",
    explanation:
      "A queue follows the First In, First Out (FIFO) principle, where the first element added is the first element to be removed.",
  },
  {
    question: "Which of the following operations is not supported by a queue?",
    options: ["Enqueue", "Dequeue", "Peek", "Pop"],
    correctAnswer: "Pop",
    explanation:
      "A queue supports operations like Enqueue (adding) and Dequeue (removing), but Pop is a term used in stacks, not queues.",
  },
  {
    question: "Which data structure is best for implementing a queue?",
    options: ["Array", "Linked list", "Stack", "Tree"],
    correctAnswer: "Linked list",
    explanation:
      "A linked list is often used to implement a queue because it allows efficient O(1) operations for both enqueue and dequeue.",
  },
  {
    question:
      "What is the time complexity of the enqueue operation in a queue implemented using an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In an array-based implementation, enqueue operation typically occurs in constant time, O(1).",
  },
  {
    question: "Which of the following is an example of a real-world queue?",
    options: [
      "A stack of plates",
      "A list of people waiting for a bus",
      "A stack of books",
      "A library bookshelf",
    ],
    correctAnswer: "A list of people waiting for a bus",
    explanation:
      "A queue is a linear structure that operates on the FIFO principle. People waiting for a bus form a queue.",
  },
  {
    question:
      "What is the time complexity of the dequeue operation in a queue implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The dequeue operation in a linked list-based queue is performed in constant time, O(1), since it removes the front node.",
  },
  {
    question: "In which scenario would you use a queue over a stack?",
    options: [
      "To reverse an order of items",
      "To evaluate expressions",
      "To process items in the order they arrive",
      "To store temporary data",
    ],
    correctAnswer: "To process items in the order they arrive",
    explanation:
      "A queue is ideal for processing items in the order they arrive, as it follows the FIFO principle.",
  },
  {
    question: "Which operation removes an element from the front of the queue?",
    options: ["Enqueue", "Dequeue", "Peek", "Push"],
    correctAnswer: "Dequeue",
    explanation: "Dequeue removes an element from the front of the queue.",
  },
  {
    question:
      "Which operation allows you to view the front element of a queue without removing it?",
    options: ["Enqueue", "Dequeue", "Peek", "Push"],
    correctAnswer: "Peek",
    explanation:
      "Peek allows you to view the front element of a queue without removing it.",
  },
  {
    question:
      "Which type of queue follows the First In, First Out (FIFO) principle?",
    options: [
      "Priority Queue",
      "Double-ended Queue (Deque)",
      "Circular Queue",
      "Simple Queue",
    ],
    correctAnswer: "Simple Queue",
    explanation:
      "A simple queue operates on the FIFO principle, meaning the first element added is the first element removed.",
  },
  {
    question: "What is a priority queue?",
    options: [
      "A queue where elements are added at the front",
      "A queue where elements are added at the rear",
      "A queue where elements are removed based on their priority",
      "A queue where elements are removed from the middle",
    ],
    correctAnswer: "A queue where elements are removed based on their priority",
    explanation:
      "In a priority queue, elements are removed based on their priority, not strictly in the order they were added.",
  },
  {
    question:
      "What is the main advantage of using a circular queue over a regular queue?",
    options: [
      "It allows dynamic resizing",
      "It eliminates the problem of wasted space",
      "It allows random access",
      "It has better memory management",
    ],
    correctAnswer: "It eliminates the problem of wasted space",
    explanation:
      "A circular queue is useful for eliminating wasted space, as it allows the queue to reuse empty spaces when elements are dequeued.",
  },
  {
    question: "Which data structure can be used to implement a circular queue?",
    options: ["Array", "Linked list", "Stack", "Heap"],
    correctAnswer: "Array",
    explanation:
      "A circular queue is often implemented using a fixed-size array, allowing the front and rear pointers to wrap around.",
  },
  {
    question: "How does a circular queue prevent wasted space?",
    options: [
      "By moving elements randomly",
      "By using a dynamic array",
      "By using a circular pointer system",
      "By removing elements faster",
    ],
    correctAnswer: "By using a circular pointer system",
    explanation:
      "In a circular queue, the front and rear pointers wrap around to reuse the space of dequeued elements.",
  },
  {
    question: "In a queue, where is an element added?",
    options: ["At the front", "At the rear", "In the middle", "At the top"],
    correctAnswer: "At the rear",
    explanation:
      "Elements are added to the rear of the queue using the enqueue operation.",
  },
  {
    question: "Which operation is used to add an element to the queue?",
    options: ["Pop", "Push", "Enqueue", "Dequeue"],
    correctAnswer: "Enqueue",
    explanation:
      "The enqueue operation adds an element to the rear of the queue.",
  },
  {
    question:
      "Which of the following queues allows insertion and deletion at both ends?",
    options: [
      "Simple Queue",
      "Circular Queue",
      "Priority Queue",
      "Double-ended Queue (Deque)",
    ],
    correctAnswer: "Double-ended Queue (Deque)",
    explanation:
      "A Deque allows insertion and deletion from both ends of the queue.",
  },
  {
    question:
      "In a queue, what is the time complexity of the dequeue operation?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The dequeue operation in a queue is performed in constant time, O(1).",
  },
  {
    question:
      "Which operation is performed to remove an element from the front of a queue?",
    options: ["Enqueue", "Dequeue", "Push", "Pop"],
    correctAnswer: "Dequeue",
    explanation:
      "The dequeue operation removes an element from the front of the queue.",
  },
  {
    question:
      "What is the main advantage of using a queue in a CPU scheduling algorithm?",
    options: [
      "To manage random access",
      "To manage tasks in an orderly fashion",
      "To optimize the performance of a CPU",
      "To allow simultaneous processing",
    ],
    correctAnswer: "To manage tasks in an orderly fashion",
    explanation:
      "Queues are useful in scheduling algorithms for managing tasks that need to be processed in the order they arrive (FIFO).",
  },
];
