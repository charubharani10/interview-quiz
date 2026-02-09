export const test3 = [
  {
    question: "Which of the following is a common application of queues?",
    options: [
      "Undo functionality in text editors",
      "Resource scheduling in operating systems",
      "Searching in databases",
      "Sorting algorithms",
    ],
    correctAnswer: "Resource scheduling in operating systems",
    explanation:
      "Queues are used in operating systems for resource scheduling, where tasks are executed in the order they are received (FIFO).",
  },
  {
    question:
      "In a queue implemented using an array, what happens when the 'front' pointer exceeds the rear pointer?",
    options: [
      "Queue becomes full",
      "The queue is considered empty",
      "The queue wraps around to the beginning",
      "The array automatically resizes",
    ],
    correctAnswer: "The queue wraps around to the beginning",
    explanation:
      "In a circular queue, when the 'front' pointer exceeds the rear pointer, it wraps around to the beginning of the array, reusing the freed space.",
  },
  {
    question:
      "In a queue, what operation is used to remove an element from the front of the queue?",
    options: ["Dequeue", "Enqueue", "Peek", "Add"],
    correctAnswer: "Dequeue",
    explanation:
      "The dequeue operation is used to remove the element from the front of the queue.",
  },
  {
    question:
      "Which of the following is not a valid implementation of a queue?",
    options: ["Linked list", "Array", "Circular linked list", "Hash table"],
    correctAnswer: "Hash table",
    explanation:
      "Queues can be implemented using arrays, linked lists, and circular linked lists. Hash tables are not typically used to implement queues.",
  },
  {
    question:
      "Which of the following operations has a time complexity of O(1) in a queue?",
    options: ["Enqueue", "Peek", "Dequeue", "All of the above"],
    correctAnswer: "All of the above",
    explanation:
      "Enqueue, Peek, and Dequeue operations all have a time complexity of O(1) in a queue, regardless of the implementation.",
  },
  {
    question:
      "What does a queue with a maximum size of 5 elements do when a 6th element is added?",
    options: [
      "It throws an overflow exception",
      "It removes the oldest element",
      "It automatically increases the size",
      "It ignores the element",
    ],
    correctAnswer: "It throws an overflow exception",
    explanation:
      "If the queue has a maximum size of 5 and a 6th element is added, it will throw an overflow exception because the queue cannot accommodate more elements.",
  },
  {
    question:
      "What type of queue is implemented when both ends of the data structure can be accessed for inserting and removing elements?",
    options: [
      "Simple Queue",
      "Double-ended Queue (Deque)",
      "Circular Queue",
      "Priority Queue",
    ],
    correctAnswer: "Double-ended Queue (Deque)",
    explanation:
      "A double-ended queue (Deque) allows inserting and removing elements from both the front and the rear.",
  },
  {
    question:
      "Which operation in a queue is used to view the element at the front without removing it?",
    options: ["Enqueue", "Peek", "Dequeue", "Add"],
    correctAnswer: "Peek",
    explanation:
      "The peek operation allows you to view the front element of the queue without removing it.",
  },
  {
    question:
      "In which scenario would a circular queue be particularly useful?",
    options: [
      "When memory needs to be dynamically allocated",
      "When elements need to be accessed randomly",
      "When continuous insertion and removal operations are performed",
      "When priority ordering is important",
    ],
    correctAnswer:
      "When continuous insertion and removal operations are performed",
    explanation:
      "A circular queue is useful in scenarios where continuous insertion and removal happen, such as in circular buffers or resource scheduling.",
  },
  {
    question:
      "What would happen if the 'dequeue' operation is performed on an empty queue?",
    options: [
      "It will remove the last element",
      "It will return null or throw an underflow exception",
      "It will return the front element",
      "It will add a new element",
    ],
    correctAnswer: "It will return null or throw an underflow exception",
    explanation:
      "If the queue is empty and a dequeue operation is performed, it either returns null or throws an underflow exception.",
  },
  {
    question:
      "In which of the following scenarios would a queue be appropriate?",
    options: [
      "Reverse ordering of elements",
      "Processing tasks in a specific order",
      "Random access of elements",
      "Reversing the elements",
    ],
    correctAnswer: "Processing tasks in a specific order",
    explanation:
      "Queues are used to process tasks in a specific order, following the FIFO principle, such as in task scheduling.",
  },
  {
    question:
      "Which operation in a queue removes the front element from the queue?",
    options: ["Enqueue", "Peek", "Dequeue", "Add"],
    correctAnswer: "Dequeue",
    explanation:
      "The dequeue operation removes and returns the element from the front of the queue.",
  },
  {
    question: "Which of the following is not a standard queue operation?",
    options: ["Enqueue", "Dequeue", "Peek", "Insert"],
    correctAnswer: "Insert",
    explanation:
      "The correct operation for adding elements to a queue is 'Enqueue', not 'Insert'.",
  },
  {
    question:
      "What happens if a queue is implemented using an array and the array becomes full?",
    options: [
      "It increases its size automatically",
      "It throws an overflow exception",
      "It wraps around and starts overwriting",
      "It stops accepting new elements",
    ],
    correctAnswer: "It throws an overflow exception",
    explanation:
      "If an array-based queue becomes full, it throws an overflow exception since it cannot add new elements beyond its capacity.",
  },
  {
    question: "In a priority queue, how are elements removed?",
    options: [
      "In the order they were added",
      "Based on their priority value",
      "Randomly",
      "In FIFO order",
    ],
    correctAnswer: "Based on their priority value",
    explanation:
      "In a priority queue, elements are removed based on their priority, with higher-priority elements dequeued before lower-priority ones.",
  },
  {
    question:
      "Which of the following is the main difference between a queue and a stack?",
    options: [
      "Queue follows LIFO, while stack follows FIFO",
      "Queue follows FIFO, while stack follows LIFO",
      "Stack allows access to random elements, while queue doesn't",
      "Queue is faster in access time than stack",
    ],
    correctAnswer: "Queue follows FIFO, while stack follows LIFO",
    explanation:
      "The key difference between a queue and a stack is that a queue operates on FIFO (First In, First Out) and a stack operates on LIFO (Last In, First Out).",
  },
  {
    question:
      "What is the time complexity of enqueue and dequeue operations in a queue implemented with a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a queue implemented using a linked list, both enqueue and dequeue operations occur in constant time O(1).",
  },
  {
    question: "How can you represent a circular queue in memory?",
    options: [
      "Using a dynamic array",
      "Using a linked list",
      "Using a stack",
      "Using a double-ended queue",
    ],
    correctAnswer: "Using a dynamic array",
    explanation:
      "A circular queue is typically represented using a dynamic array where the front and rear pointers wrap around when the end of the array is reached.",
  },
  {
    question:
      "Which of the following scenarios would be inappropriate for a queue?",
    options: [
      "Task scheduling",
      "Handling requests in a web server",
      "Reversing elements",
      "Printer spooler management",
    ],
    correctAnswer: "Reversing elements",
    explanation:
      "A queue is not appropriate for reversing elements as it follows FIFO. Reversing elements is more suited to a stack, which follows LIFO.",
  },
  {
    question:
      "What is the time complexity of the 'peek' operation in a queue implemented using an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The peek operation, which allows viewing the front element of the queue, has a constant time complexity O(1).",
  },
];
