export const test2 = [
  {
    question:
      "What is the time complexity of the 'Enqueue' operation in a queue implemented using a circular array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a circular array implementation of a queue, the 'Enqueue' operation occurs in constant time O(1), since it involves adding an element to the rear of the queue.",
  },

  {
    question: "Which data structure is typically used to implement a queue?",
    options: ["Linked List", "Hash Map", "Stack", "Set"],
    correctAnswer: "Linked List",
    explanation:
      "A queue can be efficiently implemented using a linked list because of its dynamic nature and constant-time insertion and deletion at both ends.",
  },

  {
    question:
      "In a priority queue, how is the priority of an element determined?",
    options: [
      "By the time it was added to the queue",
      "By the element’s value",
      "By the index of the element",
      "By the size of the element",
    ],
    correctAnswer: "By the element’s value",
    explanation:
      "In a priority queue, the priority of an element is typically determined by the element’s value, with higher values having higher priority.",
  },

  {
    question:
      "What is the space complexity of a queue implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of a queue implemented using a linked list is O(n), where 'n' is the number of elements in the queue.",
  },

  {
    question: "Which operation removes an element from the front of the queue?",
    options: ["Push", "Pop", "Enqueue", "Dequeue"],
    correctAnswer: "Dequeue",
    explanation:
      "The 'Dequeue' operation removes an element from the front of the queue, following the FIFO (First-In-First-Out) principle.",
  },

  {
    question:
      "In a queue, if the front pointer equals the rear pointer, what does that typically indicate in a circular queue?",
    options: [
      "Queue is empty",
      "Queue is full",
      "Queue has one element",
      "Queue is half full",
    ],
    correctAnswer: "Queue is full",
    explanation:
      "In a circular queue, if the 'front' pointer equals the 'rear' pointer, it indicates the queue is full, as there is no space left for more elements.",
  },

  {
    question:
      "What is the primary advantage of a circular queue over a linear queue?",
    options: [
      "It can dynamically expand in size",
      "It prevents memory waste by reusing freed space",
      "It allows for faster access to elements",
      "It supports reverse order processing",
    ],
    correctAnswer: "It prevents memory waste by reusing freed space",
    explanation:
      "A circular queue prevents memory wastage by reusing the space that becomes available when elements are removed from the front of the queue.",
  },

  {
    question: "What is the main purpose of a deque (double-ended queue)?",
    options: [
      "To remove elements from the front only",
      "To allow inserting and removing elements from both ends",
      "To provide random access to elements",
      "To implement a priority queue",
    ],
    correctAnswer: "To allow inserting and removing elements from both ends",
    explanation:
      "A deque (double-ended queue) allows insertion and removal of elements from both the front and rear ends, making it more flexible than a standard queue.",
  },

  {
    question:
      "What is the typical time complexity of 'Peek' in a queue implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'Peek' operation in a linked list-based queue operates in constant time O(1) because it only requires accessing the element at the front of the queue.",
  },

  {
    question:
      "In a priority queue, which of the following ensures that the highest-priority element is always at the front?",
    options: ["Heap", "Stack", "Linked List", "Hash Map"],
    correctAnswer: "Heap",
    explanation:
      "A priority queue can be implemented using a heap, which ensures that the highest-priority element is always at the front.",
  },
  {
    question: "What is the best data structure for implementing a queue?",
    options: ["Linked List", "Stack", "Array", "Hash Map"],
    correctAnswer: "Linked List",
    explanation:
      "A linked list is ideal for implementing a queue because it allows dynamic size changes and efficient insertion and deletion at both ends.",
  },

  {
    question:
      "What is the time complexity of the 'Enqueue' operation in a queue implemented using an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a fixed-size array-based queue, 'Enqueue' happens in constant time O(1), as long as there is space in the array.",
  },

  {
    question:
      "Which of the following scenarios is an example of using a queue?",
    options: [
      "Processing a series of tasks in the order they are received",
      "Undo functionality in text editors",
      "Evaluating expressions",
      "Finding the shortest path in a graph",
    ],
    correctAnswer:
      "Processing a series of tasks in the order they are received",
    explanation:
      "A queue is used to process tasks in the order they are received (FIFO), such as in print spooling or task scheduling.",
  },

  {
    question:
      "Which type of queue allows adding and removing elements from both ends?",
    options: ["Circular Queue", "Priority Queue", "Deque", "Stack"],
    correctAnswer: "Deque",
    explanation:
      "A deque (double-ended queue) allows elements to be added and removed from both ends, making it more flexible than a standard queue.",
  },

  {
    question: "How does a circular queue avoid memory wastage?",
    options: [
      "By allowing elements to move in a circular fashion",
      "By storing data in chunks",
      "By having a dynamic size",
      "By implementing a linked list structure",
    ],
    correctAnswer: "By allowing elements to move in a circular fashion",
    explanation:
      "A circular queue allows elements to wrap around when the end of the array is reached, reusing memory that would otherwise be wasted in a linear queue.",
  },

  {
    question: "Which operation checks if a queue is empty?",
    options: ["Peek", "Enqueue", "Dequeue", "IsEmpty"],
    correctAnswer: "IsEmpty",
    explanation:
      "The 'IsEmpty' operation checks if a queue is empty by verifying whether the 'front' pointer equals the 'rear' pointer.",
  },

  {
    question:
      "What is the time complexity of the 'Dequeue' operation in a priority queue implemented using a heap?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a priority queue implemented using a heap, the 'Dequeue' operation takes O(log n) time, as it involves removing the highest-priority element and maintaining the heap structure.",
  },

  {
    question:
      "In a circular queue, how do you handle a situation where the queue is full?",
    options: [
      "By expanding the array size",
      "By wrapping the rear pointer to the start of the array",
      "By implementing a dynamic data structure",
      "By throwing an exception",
    ],
    correctAnswer: "By wrapping the rear pointer to the start of the array",
    explanation:
      "In a circular queue, when the queue is full, the rear pointer wraps to the start of the array to reuse freed space, preventing memory wastage.",
  },

  {
    question:
      "What is the main disadvantage of using an array for implementing a queue?",
    options: [
      "Fixed size",
      "Memory wastage",
      "Slower access time",
      "Complex implementation",
    ],
    correctAnswer: "Fixed size",
    explanation:
      "A major disadvantage of using an array for a queue is its fixed size, which limits the number of elements that can be enqueued.",
  },

  {
    question:
      "What is the primary use case of a priority queue in a real-world application?",
    options: [
      "Resource scheduling",
      "Memory management",
      "Task prioritization",
      "FIFO task processing",
    ],
    correctAnswer: "Task prioritization",
    explanation:
      "Priority queues are commonly used in task scheduling systems to process tasks based on their priority levels.",
  },
  {
    question: "In a queue, which operation removes an element from the front?",
    options: ["Enqueue", "Peek", "Dequeue", "Insert"],
    correctAnswer: "Dequeue",
    explanation:
      "The 'dequeue' operation removes the front element from the queue.",
  },

  {
    question:
      "Which of the following is a typical use case of a queue in operating systems?",
    options: [
      "Managing I/O operations",
      "Data compression",
      "Binary tree traversal",
      "Memory allocation",
    ],
    correctAnswer: "Managing I/O operations",
    explanation:
      "Queues are frequently used in operating systems to manage I/O operations, ensuring tasks are processed in the order they arrive (FIFO).",
  },

  {
    question: "What does FIFO stand for in the context of a queue?",
    options: [
      "First-In, First-Out",
      "First-In, Fixed Order",
      "First-Out, Fixed Order",
      "Final In, First Out",
    ],
    correctAnswer: "First-In, First-Out",
    explanation:
      "FIFO stands for First-In, First-Out, which describes the order in which elements are dequeued from a queue.",
  },

  {
    question:
      "When implementing a queue using a linked list, what is the time complexity of inserting an element at the rear?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a linked list-based queue, inserting an element at the rear takes constant time O(1), assuming direct access to the rear pointer.",
  },

  {
    question:
      "Which data structure is commonly used to implement a queue in a circular fashion?",
    options: ["Array", "HashMap", "Stack", "Linked List"],
    correctAnswer: "Array",
    explanation:
      "A circular queue is commonly implemented using an array, allowing the 'rear' and 'front' pointers to wrap around and reuse empty spaces.",
  },

  {
    question:
      "What is the typical time complexity of the 'enqueue' operation in a queue implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a linked list-based queue, enqueue operations take constant time O(1), assuming you have direct access to the rear of the list.",
  },

  {
    question:
      "In a priority queue implemented using a heap, what is the time complexity of removing the highest-priority element?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(log n)",
    explanation:
      "Removing the highest-priority element from a heap-based priority queue takes O(log n) time as it requires reordering the heap.",
  },

  {
    question: "In a queue, what is the effect of an 'overflow' condition?",
    options: [
      "The queue becomes empty",
      "The queue becomes full and cannot accept any more elements",
      "The queue is automatically resized",
      "An error is raised when trying to enqueue an element",
    ],
    correctAnswer: "The queue becomes full and cannot accept any more elements",
    explanation:
      "An overflow occurs when the queue becomes full and cannot accept any more elements until some are dequeued.",
  },

  {
    question:
      "What is the primary advantage of using a circular queue compared to a linear queue?",
    options: [
      "It allows better memory utilization",
      "It provides faster element lookup",
      "It increases the queue size",
      "It does not require pointer manipulation",
    ],
    correctAnswer: "It allows better memory utilization",
    explanation:
      "Circular queues efficiently reuse memory by wrapping around, ensuring better utilization of available space.",
  },

  {
    question: "What is the time complexity of accessing an element in a queue?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In a queue, accessing an element typically takes O(n) time as you may have to dequeue elements to reach the desired position.",
  },
];
