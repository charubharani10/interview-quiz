export const test5 = [
  {
    question:
      "Which of the following operations is typically used to remove the top element from a stack?",
    options: ["Push", "Pop", "Peek", "IsEmpty"],
    correctAnswer: "Pop",
    explanation:
      "The 'Pop' operation is used to remove the top element from a stack.",
  },
  {
    question:
      "What is the space complexity of a stack implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "A stack implemented using a linked list requires O(n) space where 'n' is the number of elements in the stack.",
  },
  {
    question:
      "In a stack, what is the time complexity of the 'peek' operation?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'peek' operation, which allows you to view the top element without removing it, takes constant time (O(1)).",
  },
  {
    question:
      "Which of the following data structures follows the LIFO (Last In First Out) principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: "Stack",
    explanation:
      "A stack follows the Last-In, First-Out (LIFO) principle, meaning the most recently added element is the first to be removed.",
  },
  {
    question: "How does a stack differ from a queue?",
    options: [
      "A stack follows LIFO, and a queue follows FIFO",
      "A stack is used for sorting, and a queue for searching",
      "A stack allows random access, while a queue does not",
      "A stack allows removing elements from the front, and a queue removes from the back",
    ],
    correctAnswer: "A stack follows LIFO, and a queue follows FIFO",
    explanation:
      "Stacks follow Last-In, First-Out (LIFO) while queues follow First-In, First-Out (FIFO).",
  },
  {
    question: "Which of the following is an application of stack?",
    options: [
      "Reversing a string",
      "Finding shortest paths in graphs",
      "Priority scheduling",
      "Binary tree traversal",
    ],
    correctAnswer: "Reversing a string",
    explanation:
      "Stacks are ideal for reversing sequences like strings because of their LIFO behavior.",
  },
  {
    question: "Which of the following is NOT a valid operation on a stack?",
    options: ["Push", "Pop", "Peek", "Dequeue"],
    correctAnswer: "Dequeue",
    explanation:
      "Dequeue is an operation associated with a queue, not a stack.",
  },
  {
    question:
      "What would happen if you try to pop an element from an empty stack?",
    options: [
      "Return null",
      "Throw an underflow error",
      "Return the last element",
      "Push an element into the stack",
    ],
    correctAnswer: "Throw an underflow error",
    explanation:
      "If you attempt to pop from an empty stack, it results in a stack underflow error.",
  },
  {
    question: "What is the main advantage of using a stack over an array?",
    options: [
      "It supports random access",
      "It allows insertion and deletion at arbitrary positions",
      "It allows quick insertion and removal of elements only at one end",
      "It requires less memory",
    ],
    correctAnswer:
      "It allows quick insertion and removal of elements only at one end",
    explanation:
      "Stacks allow for quick insertion and removal of elements at the top, making them more efficient than arrays in some cases.",
  },
  {
    question:
      "In which of the following cases is a stack a more efficient data structure than a queue?",
    options: [
      "For managing incoming requests",
      "For managing undo functionality in applications",
      "For scheduling tasks",
      "For traversing a graph",
    ],
    correctAnswer: "For managing undo functionality in applications",
    explanation:
      "Stacks are ideal for undo functionality because of their LIFO nature, which tracks the most recent operation.",
  },
  {
    question: "Which of the following scenarios would cause a stack overflow?",
    options: [
      "When the stack is empty",
      "When the stack reaches its maximum size",
      "When the top of the stack points to null",
      "When multiple elements are pushed onto the stack",
    ],
    correctAnswer: "When the stack reaches its maximum size",
    explanation:
      "A stack overflow occurs when an attempt is made to push an element onto a stack that has already reached its maximum size.",
  },
  {
    question: "What is the primary purpose of the 'push' operation in a stack?",
    options: [
      "To add an element to the stack",
      "To remove the top element",
      "To check the top element",
      "To clear the stack",
    ],
    correctAnswer: "To add an element to the stack",
    explanation: "'Push' adds an element to the top of the stack.",
  },
  {
    question: "Which of the following is NOT a valid operation on a stack?",
    options: ["Push", "Pop", "Peek", "Insert"],
    correctAnswer: "Insert",
    explanation:
      "Stacks do not have an 'Insert' operation, which is more appropriate for linked lists or arrays.",
  },
  {
    question: "When would a stack underflow occur?",
    options: [
      "When there is an attempt to pop from an empty stack",
      "When the stack becomes full",
      "When the stack is too deep",
      "When the stack is not initialized",
    ],
    correctAnswer: "When there is an attempt to pop from an empty stack",
    explanation:
      "Stack underflow occurs when an attempt is made to pop from an empty stack.",
  },
  {
    question:
      "Which of the following is a characteristic of a stack data structure?",
    options: [
      "Elements are inserted and removed at random",
      "The most recently added element is removed first",
      "Elements are inserted in sorted order",
      "Elements can be accessed at any position",
    ],
    correctAnswer: "The most recently added element is removed first",
    explanation:
      "Stacks follow the Last-In, First-Out (LIFO) principle, meaning the most recently added element is the first to be removed.",
  },
  {
    question:
      "What is the output of this series of operations on a stack: Push(1), Push(2), Push(3), Pop(), Peek()?",
    options: ["1", "2", "3", "Stack is empty"],
    correctAnswer: "2",
    explanation:
      "After pushing 1, 2, and 3, popping removes 3. 'Peek()' then returns 2, which is now at the top of the stack.",
  },
  {
    question:
      "Which operation is used to examine the top element of a stack without removing it?",
    options: ["Pop", "Peek", "Push", "IsEmpty"],
    correctAnswer: "Peek",
    explanation:
      "The 'Peek' operation allows you to view the top element of the stack without removing it.",
  },
  {
    question: "What is the time complexity of the 'pop' operation in a stack?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'pop' operation takes constant time (O(1)) because it simply removes the top element.",
  },
  {
    question:
      "What would happen if you perform a 'pop' operation when the stack is empty?",
    options: [
      "Return null",
      "Throw a stack underflow error",
      "Return the last element",
      "Push a new element",
    ],
    correctAnswer: "Throw a stack underflow error",
    explanation:
      "Performing a pop operation on an empty stack results in a stack underflow error.",
  },
  {
    question:
      "Which of the following is a real-world example of using a stack?",
    options: [
      "Undo functionality in software",
      "Serving customers at a checkout counter",
      "Routing network packets",
      "Scheduling jobs in an operating system",
    ],
    correctAnswer: "Undo functionality in software",
    explanation:
      "Stacks are ideal for tracking and undoing actions because of their LIFO behavior.",
  },
  {
    question:
      "Which of the following is the correct sequence of stack operations to reverse a string?",
    options: [
      "Push all characters, then pop them",
      "Push all characters, then push them back",
      "Pop characters, then push them",
      "Push characters, then peek them",
    ],
    correctAnswer: "Push all characters, then pop them",
    explanation:
      "To reverse a string, you push all characters onto a stack and then pop them to retrieve them in reverse order.",
  },
];
