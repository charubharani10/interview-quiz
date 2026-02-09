export const test3 = [
  {
    question: "What is the main difference between a stack and a queue?",
    options: [
      "Stacks follow FIFO, while queues follow LIFO",
      "Stacks follow LIFO, while queues follow FIFO",
      "Stacks and queues are the same",
      "Stacks allow random access, queues do not",
    ],
    correctAnswer: "Stacks follow LIFO, while queues follow FIFO",
    explanation:
      "Stacks follow the Last In, First Out (LIFO) principle, while queues follow the First In, First Out (FIFO) principle.",
  },
  {
    question: "In which case would you use a stack in programming?",
    options: [
      "For managing tasks in order of priority",
      "For undo/redo operations in applications",
      "For finding the shortest path in graphs",
      "For storing data in ascending order",
    ],
    correctAnswer: "For undo/redo operations in applications",
    explanation:
      "Stacks are often used in undo/redo functionality in applications, where the most recent action is undone first.",
  },
  {
    question: "What is a common application of the stack data structure?",
    options: [
      "Recursive algorithms",
      "Handling real-time streaming data",
      "Maintaining an order of elements",
      "Sorting elements",
    ],
    correctAnswer: "Recursive algorithms",
    explanation:
      "Stacks are frequently used in recursive algorithms to manage function calls and to track the state of execution.",
  },
  {
    question: "How can a stack be implemented in most programming languages?",
    options: [
      "Using an array",
      "Using a linked list",
      "Using a hash table",
      "Both A and B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Stacks can be implemented using either arrays or linked lists, depending on the requirements of the application.",
  },
  {
    question: "Which operation removes the top element from the stack?",
    options: ["Pop", "Push", "Peek", "Clear"],
    correctAnswer: "Pop",
    explanation:
      "The 'Pop' operation removes and returns the top element from the stack.",
  },
  {
    question: "What is the time complexity of the 'peek' operation in a stack?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'peek' operation has a time complexity of O(1), as it only accesses the top element without modifying the stack.",
  },
  {
    question: "Which type of memory structure does the stack use?",
    options: ["Heap", "Memory pool", "Dynamic memory", "Static memory"],
    correctAnswer: "Static memory",
    explanation:
      "Stacks typically use static memory allocation, meaning the size is predefined and does not dynamically change during execution.",
  },
  {
    question: "What will happen if you try to push an element to a full stack?",
    options: [
      "Stack overflow",
      "Stack underflow",
      "The element will be ignored",
      "An exception will be thrown",
    ],
    correctAnswer: "Stack overflow",
    explanation:
      "Pushing an element onto a full stack causes a stack overflow, indicating that the stack has reached its capacity.",
  },
  {
    question: "Which of the following is NOT a characteristic of a stack?",
    options: [
      "It follows the LIFO principle",
      "Elements are added at the top of the stack",
      "Elements are removed from the bottom of the stack",
      "It can be implemented using arrays or linked lists",
    ],
    correctAnswer: "Elements are removed from the bottom of the stack",
    explanation:
      "In a stack, elements are removed from the top (not the bottom) following the LIFO principle.",
  },
  {
    question: "What is the initial state of a stack after it is created?",
    options: [
      "Empty",
      "Contains a null value",
      "Contains the first pushed element",
      "Contains the last pushed element",
    ],
    correctAnswer: "Empty",
    explanation:
      "When a stack is created, it is initially empty, and elements can be added using the 'Push' operation.",
  },
  {
    question:
      "What is the term for the action of adding an element to a stack?",
    options: ["Pop", "Push", "Peek", "Insert"],
    correctAnswer: "Push",
    explanation: "Adding an element to a stack is called the 'Push' operation.",
  },
  {
    question:
      "Which of the following operations is used to check the top element of the stack without removing it?",
    options: ["Peek", "Pop", "Push", "Empty"],
    correctAnswer: "Peek",
    explanation:
      "The 'Peek' operation allows you to view the top element of a stack without removing it.",
  },
  {
    question: "What does it mean when a stack is said to be 'empty'?",
    options: [
      "It has one element",
      "It is full",
      "It has no elements",
      "It has a null value",
    ],
    correctAnswer: "It has no elements",
    explanation: "A stack is considered 'empty' when it has no elements in it.",
  },
  {
    question: "Which operation removes the last element added to the stack?",
    options: ["Push", "Peek", "Pop", "Clear"],
    correctAnswer: "Pop",
    explanation:
      "The 'Pop' operation removes and returns the last element added to the stack, following the LIFO principle.",
  },
  {
    question: "In which type of applications are stacks commonly used?",
    options: [
      "Memory management",
      "Application UI",
      "Database indexing",
      "Network communication",
    ],
    correctAnswer: "Memory management",
    explanation:
      "Stacks are commonly used in memory management, especially for managing function calls and recursion.",
  },
  {
    question: "Which of the following is NOT a typical use case for a stack?",
    options: [
      "Undo/redo operations",
      "Function call management",
      "Browser history",
      "Searching in databases",
    ],
    correctAnswer: "Searching in databases",
    explanation:
      "Stacks are typically used for undo/redo operations, function call management, and browser history, but not for searching in databases.",
  },
  {
    question:
      "What will happen if you attempt to pop an element from an empty stack?",
    options: [
      "Stack overflow",
      "Stack underflow",
      "Program crashes",
      "The operation is ignored",
    ],
    correctAnswer: "Stack underflow",
    explanation:
      "Popping an element from an empty stack causes a stack underflow, indicating that no element is available to remove.",
  },
  {
    question: "Which of the following data structures is similar to a stack?",
    options: ["Queue", "Hash map", "Tree", "Graph"],
    correctAnswer: "Queue",
    explanation:
      "Although a stack follows the LIFO principle, a queue follows FIFO. Both are linear data structures.",
  },
  {
    question:
      "What is the typical time complexity for both 'Push' and 'Pop' operations in a stack?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "Both 'Push' and 'Pop' operations in a stack typically have a time complexity of O(1), as they are constant-time operations.",
  },
  {
    question: "In what order does a stack store elements?",
    options: [
      "First In, First Out (FIFO)",
      "First In, Last Out (FILO)",
      "Last In, First Out (LIFO)",
      "Last In, Last Out (LILO)",
    ],
    correctAnswer: "Last In, First Out (LIFO)",
    explanation:
      "Stacks follow the Last In, First Out (LIFO) principle, meaning the most recently added element is the first to be removed.",
  },
  {
    question:
      "What happens when you push an element onto a stack that is already full?",
    options: [
      "Stack overflow",
      "Stack underflow",
      "Element is ignored",
      "An exception is thrown",
    ],
    correctAnswer: "Stack overflow",
    explanation:
      "When you push an element onto a stack that is already full, it causes a stack overflow.",
  },
];
