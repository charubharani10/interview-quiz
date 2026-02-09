export const test1 = [
  {
    question:
      "Which of the following is the time complexity of the 'push' operation in a stack?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'push' operation in a stack takes constant time, as it adds an element to the top of the stack, regardless of the size of the stack.",
  },
  {
    question: "What is the main advantage of using a stack over a queue?",
    options: [
      "Stacks are faster",
      "Stacks follow LIFO, while queues follow FIFO",
      "Stacks are simpler to implement",
      "Stacks require less memory",
    ],
    correctAnswer: "Stacks follow LIFO, while queues follow FIFO",
    explanation:
      "Stacks follow the Last In, First Out (LIFO) principle, whereas queues follow the First In, First Out (FIFO) principle.",
  },
  {
    question: "What will happen if we attempt to pop from an empty stack?",
    options: [
      "Stack Underflow",
      "Stack Overflow",
      "No effect",
      "A null value is returned",
    ],
    correctAnswer: "Stack Underflow",
    explanation:
      "Popping from an empty stack causes an error called 'stack underflow', as there are no elements to remove.",
  },
  {
    question: "In which scenario would you use a stack?",
    options: [
      "To implement a priority queue",
      "To reverse a string",
      "For maintaining a sorted list",
      "To perform binary search",
    ],
    correctAnswer: "To reverse a string",
    explanation:
      "Stacks are often used for reversing data, such as strings, as the last element added is the first to be retrieved.",
  },
  {
    question: "What is the space complexity of a stack with 'n' elements?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of a stack is linear (O(n)) as each element requires space proportional to the number of elements in the stack.",
  },
  {
    question: "In which of the following situations would a stack be useful?",
    options: [
      "Navigating browser history",
      "Finding the median of a list",
      "Sorting an array",
      "Creating a priority list",
    ],
    correctAnswer: "Navigating browser history",
    explanation:
      "Stacks are often used in managing browser history, as users can go back and forward in a LIFO manner.",
  },
  {
    question: "What is the result of calling 'peek' on an empty stack?",
    options: [
      "Stack Overflow",
      "Stack Underflow",
      "Returns null",
      "Throws an error",
    ],
    correctAnswer: "Stack Underflow",
    explanation:
      "Calling 'peek' on an empty stack results in 'stack underflow' as there is no top element to retrieve.",
  },
  {
    question:
      "Which of the following is the correct operation to remove the top element from a stack?",
    options: ["Push", "Pop", "Peek", "Insert"],
    correctAnswer: "Pop",
    explanation: "The 'pop' operation removes the top element from a stack.",
  },
  {
    question:
      "How do stacks support function calls in most programming languages?",
    options: [
      "By using a stack frame",
      "By using recursive calls",
      "By implementing dynamic memory allocation",
      "By using binary trees",
    ],
    correctAnswer: "By using a stack frame",
    explanation:
      "Stacks maintain a stack frame for each function call, storing information like return addresses and local variables.",
  },
  {
    question: "What is the main difference between a stack and a queue?",
    options: [
      "Stacks follow FIFO, while queues follow LIFO",
      "Stacks follow LIFO, while queues follow FIFO",
      "Queues are faster than stacks",
      "Stacks use more memory than queues",
    ],
    correctAnswer: "Stacks follow LIFO, while queues follow FIFO",
    explanation:
      "Stacks follow the Last In, First Out (LIFO) principle, while queues follow the First In, First Out (FIFO) principle.",
  },
  {
    question:
      "In a stack, which operation can be used to check the current top element without removing it?",
    options: ["Pop", "Push", "Peek", "Insert"],
    correctAnswer: "Peek",
    explanation:
      "The 'peek' operation retrieves the top element without modifying the stack.",
  },
  {
    question:
      "What would happen if a stack's size is exceeded during the 'push' operation?",
    options: [
      "Stack Underflow",
      "Stack Overflow",
      "A new stack is created",
      "The operation is ignored",
    ],
    correctAnswer: "Stack Overflow",
    explanation:
      "If a stack exceeds its size during a 'push' operation, it results in a 'stack overflow' error.",
  },
  {
    question:
      "Which of the following operations is not typically used in the implementation of a stack?",
    options: ["Push", "Pop", "Peek", "Sort"],
    correctAnswer: "Sort",
    explanation:
      "Stacks typically support 'push', 'pop', and 'peek' operations but do not typically support sorting operations.",
  },
  {
    question:
      "Which data structure is commonly used to store function calls in recursion?",
    options: ["Queue", "Hash Table", "Stack", "Array"],
    correctAnswer: "Stack",
    explanation:
      "Stacks are used to store function calls and return addresses during recursion.",
  },
  {
    question: "How is a stack implemented using an array?",
    options: [
      "Elements are added to the end of the array",
      "Elements are inserted in the middle of the array",
      "Elements are added to the beginning of the array",
      "Elements are added to the top of the array",
    ],
    correctAnswer: "Elements are added to the end of the array",
    explanation:
      "In array-based stack implementations, elements are added to the end of the array and removed from the same end.",
  },
  {
    question:
      "What happens if you push elements onto a stack but don't pop them?",
    options: [
      "Memory leak",
      "Stack overflow",
      "Memory remains allocated but unused",
      "Nothing happens",
    ],
    correctAnswer: "Memory remains allocated but unused",
    explanation:
      "If you push elements onto a stack but don't pop them, the memory for those elements remains allocated but unused.",
  },
  {
    question: "Which of the following is a key property of stacks?",
    options: [
      "They allow random access to elements",
      "They allow access only to the top element",
      "They support insertion and deletion from any position",
      "They store elements in a tree structure",
    ],
    correctAnswer: "They allow access only to the top element",
    explanation:
      "Stacks allow access only to the topmost element, following the LIFO principle.",
  },
  {
    question: "In which scenario would you use a stack to reverse a string?",
    options: [
      "By iterating through the string and pushing characters onto a stack, then popping them off",
      "By sorting the string in ascending order",
      "By replacing each character with its ASCII value",
      "By applying a hashing function",
    ],
    correctAnswer:
      "By iterating through the string and pushing characters onto a stack, then popping them off",
    explanation:
      "Reversing a string using a stack involves pushing each character onto the stack, then popping them to retrieve the string in reverse order.",
  },
  {
    question: "In a stack, what is the space complexity of pushing an element?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Pushing an element onto a stack is a constant time operation with O(1) space complexity.",
  },
  {
    question: "What is the time complexity of the 'pop' operation in a stack?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Popping an element from a stack is a constant time operation with O(1) time complexity.",
  },
];
