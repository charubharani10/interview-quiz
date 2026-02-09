export const test1 = [
  {
    question: "What is the basic principle of a stack?",
    options: [
      "Last In First Out (LIFO)",
      "First In First Out (FIFO)",
      "Random Access",
      "Ordered Collection",
    ],
    correctAnswer: "Last In First Out (LIFO)",
    explanation:
      "Stacks operate on the Last In First Out (LIFO) principle, meaning the last element added to the stack is the first one to be removed.",
  },
  {
    question: "Which operation is used to remove an element from a stack?",
    options: ["Pop", "Push", "Peek", "Insert"],
    correctAnswer: "Pop",
    explanation:
      "The 'Pop' operation removes the topmost element from the stack.",
  },
  {
    question:
      "What is the time complexity of the push and pop operations in a stack?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Both push and pop operations are performed in constant time O(1) in a stack.",
  },
  {
    question:
      "What is the name of the operation used to add an element to a stack?",
    options: ["Push", "Pop", "Peek", "Insert"],
    correctAnswer: "Push",
    explanation:
      "The 'Push' operation adds an element to the top of the stack.",
  },
  {
    question: "Which of the following is not a use case for stacks?",
    options: [
      "Undo operations in text editors",
      "Function call management in recursion",
      "Evaluating expressions",
      "Storing large files",
    ],
    correctAnswer: "Storing large files",
    explanation:
      "Stacks are primarily used for tasks like undo operations, managing function calls, and evaluating expressions, but not for storing large files.",
  },
  {
    question: "In which data structure is recursion typically implemented?",
    options: ["Array", "Stack", "Queue", "Linked List"],
    correctAnswer: "Stack",
    explanation:
      "Recursion uses a stack to manage function calls, with each recursive call being pushed onto the stack and popped off when it returns.",
  },
  {
    question:
      "What would happen if we try to pop an element from an empty stack?",
    options: [
      "Stack overflow",
      "Stack underflow",
      "No operation",
      "Memory leak",
    ],
    correctAnswer: "Stack underflow",
    explanation:
      "Trying to pop an element from an empty stack results in a 'stack underflow,' meaning there are no elements to remove.",
  },
  {
    question: "What is the function of the 'peek' operation in a stack?",
    options: [
      "To remove the top element",
      "To view the top element without removing it",
      "To add an element to the stack",
      "To clear the stack",
    ],
    correctAnswer: "To view the top element without removing it",
    explanation:
      "The 'Peek' operation allows you to view the topmost element of the stack without removing it.",
  },
  {
    question: "What is a typical real-world example of a stack?",
    options: [
      "A queue at a ticket counter",
      "A stack of plates in a cafeteria",
      "A list of phone contacts",
      "A file system",
    ],
    correctAnswer: "A stack of plates in a cafeteria",
    explanation:
      "A stack of plates in a cafeteria operates on the LIFO principle, where the last plate added is the first to be removed.",
  },
  {
    question:
      "In an array-based stack, what happens if the stack grows beyond its fixed size?",
    options: [
      "It causes stack underflow",
      "It causes stack overflow",
      "It crashes the system",
      "It is automatically resized",
    ],
    correctAnswer: "It causes stack overflow",
    explanation:
      "In an array-based stack, if the stack grows beyond its allocated size, it results in a 'stack overflow,' meaning there is no more space to add new elements.",
  },
  {
    question: "What is the main purpose of a stack?",
    options: [
      "To store elements in random order",
      "To retrieve elements in the order they were inserted",
      "To provide efficient insertion and deletion",
      "To manage elements in a LIFO manner",
    ],
    correctAnswer: "To manage elements in a LIFO manner",
    explanation:
      "The stack operates on the Last In First Out (LIFO) principle, meaning that the most recently added element is the first to be removed.",
  },
  {
    question: "Which of the following is a valid use case of a stack?",
    options: [
      "Undo functionality in applications",
      "Browsing history in web browsers",
      "Syntax parsing in compilers",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Stacks are used in various applications such as undo functionality, browsing history, and syntax parsing in compilers.",
  },
  {
    question: "How can we check if a stack is empty?",
    options: [
      "By checking if the size is 0",
      "By performing a pop operation",
      "By performing a peek operation",
      "By comparing the top element with null",
    ],
    correctAnswer: "By checking if the size is 0",
    explanation:
      "To check if a stack is empty, we can verify if its size is 0. Alternatively, a 'null' top element can also indicate the stack is empty.",
  },
  {
    question:
      "Which of the following is true for a stack implemented with an array?",
    options: [
      "The size of the stack is fixed",
      "The stack can grow dynamically",
      "The stack uses more memory than a linked list",
      "The elements are inserted at the middle",
    ],
    correctAnswer: "The size of the stack is fixed",
    explanation:
      "When a stack is implemented using an array, its size is typically fixed, meaning it has a limited capacity for elements.",
  },
  {
    question:
      "Which of the following stack operations retrieves, but does not remove, the top element?",
    options: ["Pop", "Peek", "Push", "Clear"],
    correctAnswer: "Peek",
    explanation:
      "The 'Peek' operation retrieves the top element of the stack without removing it, while 'Pop' removes the top element.",
  },
  {
    question: "In what situation would you use a stack?",
    options: [
      "When the order of elements matters",
      "When you need to repeatedly remove the last element added",
      "When you need to insert and remove elements from both ends",
      "When elements need to be sorted",
    ],
    correctAnswer: "When you need to repeatedly remove the last element added",
    explanation:
      "Stacks are useful when you need to remove the last element added, as they follow the LIFO principle.",
  },
  {
    question: "What is the role of the top pointer in a stack?",
    options: [
      "To point to the last inserted element",
      "To point to the first inserted element",
      "To manage memory",
      "To store the size of the stack",
    ],
    correctAnswer: "To point to the last inserted element",
    explanation:
      "The top pointer always points to the last inserted element in the stack, allowing quick access to the most recent item.",
  },
  {
    question:
      "What would happen if we try to push an element into a full stack implemented using an array?",
    options: [
      "Stack overflow",
      "Stack underflow",
      "The element will be added to the next memory location",
      "The stack will be automatically resized",
    ],
    correctAnswer: "Stack overflow",
    explanation:
      "If the stack is full and we try to push a new element, it results in 'stack overflow' since no more elements can be added.",
  },
  {
    question: "What type of memory does the stack use to store data?",
    options: ["Heap memory", "Static memory", "Dynamic memory", "Stack memory"],
    correctAnswer: "Stack memory",
    explanation:
      "Stacks use 'stack memory,' which is a specific region of memory used for function calls, local variables, and managing execution context.",
  },
  {
    question: "Which operation removes the topmost element from a stack?",
    options: ["Push", "Pop", "Peek", "Clear"],
    correctAnswer: "Pop",
    explanation:
      "The 'Pop' operation removes the topmost element from the stack.",
  },
];
