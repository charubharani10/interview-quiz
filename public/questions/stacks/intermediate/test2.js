export const test2 = [
  {
    question: "What is the main use of stacks in evaluating expressions?",
    options: [
      "To evaluate arithmetic expressions in reverse order",
      "To store intermediate results in a mathematical equation",
      "To handle function calls in recursion",
      "To process large files efficiently",
    ],
    correctAnswer: "To evaluate arithmetic expressions in reverse order",
    explanation:
      "Stacks are often used in evaluating expressions, such as converting infix expressions to postfix or evaluating postfix expressions.",
  },
  {
    question: "Which of the following is a real-life analogy of a stack?",
    options: [
      "A queue of people in a line",
      "A stack of plates in a cafeteria",
      "A stack of papers on a desk",
      "A linked list of books on a shelf",
    ],
    correctAnswer: "A stack of plates in a cafeteria",
    explanation:
      "A stack of plates in a cafeteria follows the LIFO (Last In, First Out) principle, just like a stack in computer science.",
  },
  {
    question: "How can you determine if a stack is empty?",
    options: [
      "Check if the size is greater than zero",
      "Check if the top element is null",
      "Check if the size is zero",
      "Check if the stack is full",
    ],
    correctAnswer: "Check if the size is zero",
    explanation:
      "A stack is considered empty when its size is zero, meaning there are no elements in it.",
  },
  {
    question:
      "Which stack operation allows you to examine the top element without removing it?",
    options: ["Push", "Pop", "Peek", "Insert"],
    correctAnswer: "Peek",
    explanation:
      "The 'peek' operation retrieves the top element without modifying the stack.",
  },
  {
    question: "In what case would you use a stack instead of a queue?",
    options: [
      "When order of processing matters",
      "When you need to perform FIFO operations",
      "When elements need to be processed in reverse order",
      "When sorting a list of numbers",
    ],
    correctAnswer: "When elements need to be processed in reverse order",
    explanation:
      "Stacks are useful when you need to process elements in reverse order, following the LIFO principle.",
  },
  {
    question: "What does a stack overflow indicate?",
    options: [
      "The stack is full",
      "The stack is empty",
      "The top element has been removed",
      "A new stack has been created",
    ],
    correctAnswer: "The stack is full",
    explanation:
      "Stack overflow occurs when you attempt to push an element onto a full stack.",
  },
  {
    question:
      "Which operation is used to add an element to the top of a stack?",
    options: ["Push", "Pop", "Peek", "Insert"],
    correctAnswer: "Push",
    explanation:
      "The 'push' operation adds an element to the top of the stack.",
  },
  {
    question: "What is the advantage of using a stack in recursion?",
    options: [
      "Stacks allow direct access to any element",
      "Stacks manage the recursive function calls by saving return addresses and local variables",
      "Stacks provide a memory-efficient way to handle large data",
      "Stacks allow sorting of function calls",
    ],
    correctAnswer:
      "Stacks manage the recursive function calls by saving return addresses and local variables",
    explanation:
      "Stacks are useful in managing recursive function calls, storing return addresses and local variables for each function call.",
  },
  {
    question:
      "Which type of error occurs when a 'pop' operation is performed on an empty stack?",
    options: [
      "Stack Overflow",
      "Stack Underflow",
      "Memory Leak",
      "Index Out of Bound",
    ],
    correctAnswer: "Stack Underflow",
    explanation:
      "Performing a 'pop' operation on an empty stack leads to a 'stack underflow' error.",
  },
  {
    question:
      "How does a stack differ from a queue in terms of insertion and removal?",
    options: [
      "Stacks allow insertion at both ends, while queues only at one end",
      "Stacks allow insertion and removal at one end, while queues allow insertion at the rear and removal at the front",
      "Stacks allow insertion and removal at both ends",
      "Queues allow insertion and removal at one end",
    ],
    correctAnswer:
      "Stacks allow insertion and removal at one end, while queues allow insertion at the rear and removal at the front",
    explanation:
      "Stacks follow the LIFO principle, where both insertion ('push') and removal ('pop') happen at the top, while queues follow FIFO where insertion happens at the rear and removal at the front.",
  },
  {
    question:
      "Which of the following is the space complexity of a stack with 'n' elements?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "A stack with 'n' elements requires linear space, so the space complexity is O(n).",
  },
  {
    question:
      "What happens when you perform a 'push' operation on a full stack?",
    options: [
      "The element is added to the bottom",
      "The stack is resized automatically",
      "The operation fails, resulting in a stack overflow",
      "The operation returns null",
    ],
    correctAnswer: "The operation fails, resulting in a stack overflow",
    explanation:
      "When you try to push onto a full stack, it results in a 'stack overflow'.",
  },
  {
    question:
      "What will happen if we use a stack with no size limit and try to push indefinitely?",
    options: [
      "Memory overflow",
      "Stack underflow",
      "Stack overflow",
      "NullPointerException",
    ],
    correctAnswer: "Memory overflow",
    explanation:
      "Without a size limit, pushing indefinitely would eventually cause memory overflow as the stack consumes all available memory.",
  },
  {
    question:
      "What is the output of the following stack operations: Push(5), Push(10), Pop(), Push(15), Pop()?",
    options: ["15, 10", "10, 15", "5, 15", "10, 5"],
    correctAnswer: "10, 5",
    explanation:
      "First, 5 and 10 are pushed onto the stack. After the first pop(), 10 is removed, and 15 is pushed. The second pop() removes 15.",
  },
  {
    question: "How do we convert an infix expression to postfix using a stack?",
    options: [
      "By pushing operands and operators onto the stack in the given order",
      "By pushing operators and applying precedence rules for operands",
      "By evaluating expressions from left to right",
      "By reversing the infix expression first",
    ],
    correctAnswer:
      "By pushing operators and applying precedence rules for operands",
    explanation:
      "When converting infix to postfix, we use a stack to handle operators, following precedence rules for operands.",
  },
  {
    question: "In a stack implementation, what is the 'top' pointer used for?",
    options: [
      "To indicate the last element",
      "To track the size of the stack",
      "To point to the bottom of the stack",
      "To point to the first element",
    ],
    correctAnswer: "To indicate the last element",
    explanation:
      "The 'top' pointer in a stack points to the last element added to the stack.",
  },
  {
    question: "What happens if a 'peek' operation is called on an empty stack?",
    options: [
      "Returns the top element",
      "Throws a StackOverflowError",
      "Throws a StackUnderflowError",
      "Returns null",
    ],
    correctAnswer: "Throws a StackUnderflowError",
    explanation:
      "When a 'peek' is called on an empty stack, it causes a stack underflow error.",
  },
  {
    question: "Which of the following is not a characteristic of a stack?",
    options: [
      "It is a LIFO data structure",
      "Elements are added at the top and removed from the top",
      "It allows random access to elements",
      "It can be implemented using arrays or linked lists",
    ],
    correctAnswer: "It allows random access to elements",
    explanation:
      "Stacks do not allow random access; elements can only be accessed from the top.",
  },
  {
    question: "What is the time complexity of the 'pop' operation in a stack?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'pop' operation in a stack is constant time (O(1)) as it only removes the top element.",
  },
  {
    question:
      "What is the primary purpose of the stack data structure in a depth-first search (DFS) algorithm?",
    options: [
      "To keep track of the nodes visited",
      "To store elements as they are processed",
      "To implement the backtracking mechanism",
      "To store all unvisited nodes",
    ],
    correctAnswer: "To implement the backtracking mechanism",
    explanation:
      "Stacks are used in DFS to backtrack through the nodes and manage recursion calls.",
  },
];
