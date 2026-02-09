export const test4 = [
  {
    question: "What is the time complexity of the 'Push' operation in a stack?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'Push' operation in a stack has a time complexity of O(1), as it adds an element in constant time.",
  },
  {
    question:
      "What is the correct sequence of operations for using a stack to reverse a string?",
    options: [
      "Push each character, then pop each character",
      "Pop each character, then push each character",
      "Peek each character, then push each character",
      "Push and pop the characters at random",
    ],
    correctAnswer: "Push each character, then pop each character",
    explanation:
      "To reverse a string using a stack, you push each character onto the stack, and then pop them to retrieve the reversed order.",
  },
  {
    question: "Which of the following is NOT a characteristic of a stack?",
    options: [
      "Last In, First Out (LIFO)",
      "Operations performed at one end (top)",
      "Elements are accessed randomly",
      "Elements are removed in reverse order of addition",
    ],
    correctAnswer: "Elements are accessed randomly",
    explanation:
      "A stack does not allow random access to elements; instead, elements are accessed in reverse order of their addition.",
  },
  {
    question: "Which of the following is a valid operation on a stack?",
    options: ["Enqueue", "Push", "Insert", "Add"],
    correctAnswer: "Push",
    explanation: "'Push' is the operation used to add an element to the stack.",
  },
  {
    question: "In which scenario is a stack particularly useful?",
    options: [
      "Navigating through website pages",
      "Performing breadth-first search",
      "Managing function calls in recursion",
      "Sorting elements in ascending order",
    ],
    correctAnswer: "Managing function calls in recursion",
    explanation:
      "Stacks are particularly useful for managing function calls in recursion, as they keep track of the execution context.",
  },
  {
    question: "What does it mean when a stack is described as 'full'?",
    options: [
      "It cannot add more elements",
      "It cannot pop any more elements",
      "The top element is null",
      "The stack is empty",
    ],
    correctAnswer: "It cannot add more elements",
    explanation:
      "A stack is considered 'full' when it cannot accommodate any more elements due to its fixed size.",
  },
  {
    question:
      "Which of the following best describes the 'Pop' operation in a stack?",
    options: [
      "It removes the top element from the stack",
      "It adds a new element to the stack",
      "It checks the top element without removing it",
      "It clears all elements from the stack",
    ],
    correctAnswer: "It removes the top element from the stack",
    explanation:
      "The 'Pop' operation removes and returns the top element of the stack.",
  },
  {
    question: "What is the 'Stack Overflow' condition?",
    options: [
      "When the stack has no elements",
      "When the stack exceeds its capacity",
      "When an element is pushed into an empty stack",
      "When an element is popped from the stack",
    ],
    correctAnswer: "When the stack exceeds its capacity",
    explanation:
      "Stack Overflow occurs when a 'Push' operation tries to add an element to a full stack.",
  },
  {
    question:
      "Which of the following structures can be implemented using stacks?",
    options: [
      "Priority Queue",
      "Graph Traversal",
      "Circular Queue",
      "Recursion",
    ],
    correctAnswer: "Recursion",
    explanation:
      "Recursion can be implemented using stacks, as the call stack stores function calls and local variables.",
  },
  {
    question:
      "Which of the following is the primary drawback of using a stack in memory management?",
    options: [
      "Limited capacity",
      "Accessing elements randomly is slow",
      "Limited use in algorithms",
      "Unreliable performance",
    ],
    correctAnswer: "Limited capacity",
    explanation:
      "The primary drawback of a stack is its limited capacity, which can lead to stack overflow if it exceeds its maximum size.",
  },
  {
    question: "Which of the following is the correct way to define a stack?",
    options: [
      "An unordered collection of elements",
      "A collection of elements arranged in a queue",
      "A collection of elements arranged in a FIFO manner",
      "A collection of elements arranged in a LIFO manner",
    ],
    correctAnswer: "A collection of elements arranged in a LIFO manner",
    explanation:
      "A stack follows the Last-In, First-Out (LIFO) principle, meaning that the last element added is the first to be removed.",
  },
  {
    question:
      "In a stack, what happens when a 'Pop' operation is performed on an empty stack?",
    options: [
      "The stack overflows",
      "An exception is thrown",
      "The element is added automatically",
      "The top element is replaced",
    ],
    correctAnswer: "An exception is thrown",
    explanation:
      "When attempting to 'Pop' an element from an empty stack, an exception (such as underflow) is thrown.",
  },
  {
    question: "What type of data structure is a stack?",
    options: [
      "Linear data structure",
      "Non-linear data structure",
      "Graph",
      "Tree",
    ],
    correctAnswer: "Linear data structure",
    explanation:
      "A stack is a linear data structure because it organizes elements sequentially and follows a specific order (LIFO).",
  },
  {
    question: "Which operation on a stack would remove the topmost element?",
    options: ["Enqueue", "Peek", "Pop", "Push"],
    correctAnswer: "Pop",
    explanation:
      "The 'Pop' operation removes and returns the topmost element from the stack.",
  },
  {
    question: "What is the top element in a stack?",
    options: [
      "The first element added",
      "The last element added",
      "The middle element",
      "The second element from the top",
    ],
    correctAnswer: "The last element added",
    explanation:
      "In a stack, the top element is the last element that was added, following the LIFO principle.",
  },
  {
    question: "What will happen if you try to pop from an empty stack?",
    options: [
      "Stack underflow",
      "Stack overflow",
      "Null pointer exception",
      "The last element will be repeated",
    ],
    correctAnswer: "Stack underflow",
    explanation:
      "Popping from an empty stack results in a stack underflow, as there are no elements to remove.",
  },
  {
    question: "How can a stack be implemented?",
    options: [
      "Using arrays or linked lists",
      "Using only arrays",
      "Using only linked lists",
      "Using a set",
    ],
    correctAnswer: "Using arrays or linked lists",
    explanation:
      "Stacks can be implemented using either arrays or linked lists to store elements in a LIFO manner.",
  },
  {
    question: "What is the function of the 'Peek' operation in a stack?",
    options: [
      "It removes the top element",
      "It adds a new element",
      "It returns the top element without removing it",
      "It checks if the stack is empty",
    ],
    correctAnswer: "It returns the top element without removing it",
    explanation:
      "The 'Peek' operation allows you to view the top element of the stack without removing it.",
  },
  {
    question: "What does the stack data structure mainly support?",
    options: [
      "Searching",
      "Random access",
      "Insertion and deletion at any position",
      "Insertion and deletion at one end",
    ],
    correctAnswer: "Insertion and deletion at one end",
    explanation:
      "A stack supports insertion and deletion only at one end, which is called the 'top'.",
  },
  {
    question: "What is the memory management method that uses a stack?",
    options: [
      "Garbage collection",
      "Stack-based memory allocation",
      "Heap memory allocation",
      "Memory pooling",
    ],
    correctAnswer: "Stack-based memory allocation",
    explanation:
      "In stack-based memory allocation, local variables and function calls are stored in the stack memory.",
  },
];
