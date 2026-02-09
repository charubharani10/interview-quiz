export const test3 = [
  {
    question:
      "What is the primary advantage of using a stack for reversing a string?",
    options: [
      "It allows us to reverse the string in linear time",
      "It reverses the string without requiring extra space",
      "It allows us to process each character once",
      "It reverses the string by using recursion",
    ],
    correctAnswer: "It allows us to reverse the string in linear time",
    explanation:
      "Stacks follow the LIFO principle, which allows reversing a string in linear time by pushing and popping characters.",
  },
  {
    question:
      "In a stack, which of the following operations takes the least amount of time?",
    options: ["Push", "Pop", "Peek", "All operations take the same time"],
    correctAnswer: "All operations take the same time",
    explanation:
      "All basic stack operations, such as push, pop, and peek, are performed in constant time (O(1)).",
  },
  {
    question:
      "Which of the following data structures is not typically implemented using stacks?",
    options: [
      "Undo functionality in applications",
      "Browser history",
      "Function call management in recursion",
      "Queue implementation",
    ],
    correctAnswer: "Queue implementation",
    explanation:
      "Queues are implemented using a FIFO approach, whereas stacks are LIFO. A queue is typically not implemented using stacks.",
  },
  {
    question:
      "Which of the following is the correct order of elements in a stack after performing a sequence of operations: Push(1), Push(2), Pop(), Push(3), Pop()?",
    options: ["3, 1", "2, 3", "1, 3", "2, 1"],
    correctAnswer: "1, 3",
    explanation:
      "After performing the operations, the stack will contain the elements 1 and 3, with 3 being the top.",
  },
  {
    question:
      "Which algorithm uses a stack to backtrack and search for a solution?",
    options: [
      "Breadth-First Search (BFS)",
      "Depth-First Search (DFS)",
      "Dijkstra's Algorithm",
      "Binary Search",
    ],
    correctAnswer: "Depth-First Search (DFS)",
    explanation:
      "DFS uses a stack to explore each node, backtracking when necessary to find the correct solution.",
  },
  {
    question:
      "What is the term used when an attempt is made to pop an element from an empty stack?",
    options: [
      "Stack Underflow",
      "Stack Overflow",
      "Memory Leak",
      "Null Reference",
    ],
    correctAnswer: "Stack Underflow",
    explanation:
      "Popping from an empty stack causes a 'stack underflow' error, as there are no elements to remove.",
  },
  {
    question:
      "Which of the following stack operations would be used to examine the top element without removing it?",
    options: ["Push", "Pop", "Peek", "Insert"],
    correctAnswer: "Peek",
    explanation:
      "'Peek' allows you to view the top element of the stack without modifying it.",
  },
  {
    question:
      "Which of the following represents the correct order of elements in a stack if the following sequence of operations is executed: Push(3), Push(5), Push(7), Pop(), Push(2), Pop()?",
    options: ["2, 3, 5", "3, 5, 2", "7, 3, 5", "3, 5"],
    correctAnswer: "3, 5",
    explanation:
      "After executing the sequence, the stack contains elements 3 and 5, with 3 being the top.",
  },
  {
    question:
      "Which of the following is a common use case of a stack in programming?",
    options: [
      "Queueing tasks",
      "Managing recursive calls",
      "Sorting elements",
      "Handling concurrency",
    ],
    correctAnswer: "Managing recursive calls",
    explanation:
      "Stacks are essential for managing recursive function calls, as each function call is pushed onto the stack until it is completed.",
  },
  {
    question:
      "How do you convert an infix expression to a postfix expression using a stack?",
    options: [
      "By keeping the operators and parentheses in their original position",
      "By placing the operators before the operands",
      "By pushing operators to the stack and popping them based on precedence rules",
      "By evaluating the expression from left to right",
    ],
    correctAnswer:
      "By pushing operators to the stack and popping them based on precedence rules",
    explanation:
      "In infix to postfix conversion, operators are pushed to the stack and popped based on operator precedence and associativity.",
  },
  {
    question:
      "What is the result of performing a 'push' operation on a stack that is already full?",
    options: [
      "The element is inserted at the bottom of the stack",
      "The stack grows automatically",
      "The element is discarded",
      "A stack overflow error occurs",
    ],
    correctAnswer: "A stack overflow error occurs",
    explanation:
      "Pushing onto a full stack leads to a 'stack overflow' error because there is no space to add new elements.",
  },
  {
    question:
      "Which of the following operations would not be valid in an empty stack?",
    options: ["Pop", "Peek", "Push", "All are valid operations"],
    correctAnswer: "Pop",
    explanation:
      "Performing a pop on an empty stack is not valid and results in a 'stack underflow' error.",
  },
  {
    question:
      "What is the time complexity of the 'push' and 'pop' operations in a stack implemented using an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Both push and pop operations are constant time (O(1)) in a stack implemented using an array.",
  },
  {
    question:
      "What is the best data structure for solving the expression evaluation problem?",
    options: ["Array", "Stack", "Linked List", "Tree"],
    correctAnswer: "Stack",
    explanation:
      "Stacks are the best data structure for evaluating expressions as they handle operator precedence and manage intermediate results.",
  },
  {
    question: "Which of the following will lead to a stack overflow?",
    options: [
      "Infinite recursion",
      "A loop with no termination condition",
      "Pushing more elements than the stack's capacity",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "All of these scenarios can lead to a stack overflow, as the stack is unable to hold more elements.",
  },
  {
    question:
      "Which of the following is an example of a real-life application of a stack?",
    options: [
      "A ticket booking system",
      "Function call management in programming",
      "Handling page requests in a browser",
      "File management",
    ],
    correctAnswer: "Function call management in programming",
    explanation:
      "Stacks are commonly used to manage function calls and recursive operations in programming languages.",
  },
  {
    question:
      "In a stack, what happens when you attempt to pop an element from an empty stack?",
    options: [
      "Returns null",
      "Stack Underflow error occurs",
      "Stack Overflow error occurs",
      "The top element is removed",
    ],
    correctAnswer: "Stack Underflow error occurs",
    explanation:
      "A pop operation on an empty stack leads to a 'stack underflow' error, as there are no elements to remove.",
  },
  {
    question:
      "Which of the following operations can be performed in constant time on a stack?",
    options: ["Push", "Pop", "Peek", "All of the above"],
    correctAnswer: "All of the above",
    explanation:
      "Push, pop, and peek operations are all constant time (O(1)) operations in a stack.",
  },
  {
    question: "What is the result of calling 'peek' on an empty stack?",
    options: [
      "It returns null",
      "It throws an exception",
      "It returns 0",
      "It returns the bottom element",
    ],
    correctAnswer: "It throws an exception",
    explanation:
      "Attempting to 'peek' on an empty stack causes an error as there are no elements to return.",
  },
  {
    question: "Which operation checks if a stack is empty?",
    options: ["Size", "Empty", "Peek", "IsEmpty"],
    correctAnswer: "IsEmpty",
    explanation:
      "The 'IsEmpty' operation is used to check whether a stack contains any elements.",
  },
];
