export const test4 = [
  {
    question:
      "What is the typical space complexity of a stack implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "A stack implemented using a linked list requires O(n) space where 'n' is the number of elements in the stack.",
  },
  {
    question:
      "Which stack operation results in the removal of the top element from the stack?",
    options: ["Peek", "Push", "Pop", "IsEmpty"],
    correctAnswer: "Pop",
    explanation:
      "The 'Pop' operation removes the top element from the stack and reduces the size of the stack.",
  },
  {
    question:
      "What does a stack overflow mean in the context of a stack implementation?",
    options: [
      "The stack is empty",
      "The stack has exceeded its capacity",
      "There is insufficient memory to add an element",
      "The stack is in the process of being cleared",
    ],
    correctAnswer: "The stack has exceeded its capacity",
    explanation:
      "A stack overflow occurs when an attempt is made to add an element to a full stack.",
  },
  {
    question:
      "Which of the following is a correct representation of a stack data structure?",
    options: ["FIFO", "LIFO", "Priority Queue", "Circular Queue"],
    correctAnswer: "LIFO",
    explanation:
      "A stack follows the Last-In, First-Out (LIFO) principle, where the last element added is the first to be removed.",
  },
  {
    question:
      "What is the time complexity of accessing the top element of a stack?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Accessing the top element of a stack is a constant time operation (O(1)) since it only involves reading the top element.",
  },
  {
    question: "In which scenario would you choose a stack over a queue?",
    options: [
      "When you need to process elements in FIFO order",
      "When you need to reverse a sequence of elements",
      "When you need to search for an element in O(1) time",
      "When you want to add elements at the front and remove from the rear",
    ],
    correctAnswer: "When you need to reverse a sequence of elements",
    explanation:
      "Stacks are ideal for reversing sequences due to their LIFO nature, as the last element added is the first to be processed.",
  },
  {
    question:
      "Which of the following scenarios would be an appropriate use of a stack?",
    options: [
      "Reversing a string",
      "Searching for an element in a list",
      "Handling incoming requests in a server",
      "Scheduling tasks",
    ],
    correctAnswer: "Reversing a string",
    explanation:
      "Stacks can reverse sequences efficiently by pushing each character onto the stack and popping them in reverse order.",
  },
  {
    question: "What is the time complexity of the 'push' operation in a stack?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'push' operation in a stack takes constant time (O(1)) because it simply adds an element to the top of the stack.",
  },
  {
    question:
      "What happens to the top element of the stack when a 'pop' operation is performed?",
    options: [
      "The top element is deleted",
      "The top element is returned without removal",
      "The top element is shifted down",
      "The top element is pushed back",
    ],
    correctAnswer: "The top element is deleted",
    explanation:
      "The 'pop' operation removes the top element from the stack and reduces the size of the stack.",
  },
  {
    question:
      "What is a potential drawback of using a stack to implement a function call?",
    options: [
      "Memory overflow",
      "Time complexity issues",
      "Limited capacity",
      "Lack of functionality for handling recursion",
    ],
    correctAnswer: "Memory overflow",
    explanation:
      "Using a stack for function calls can result in memory overflow (stack overflow) if recursion depth is too deep.",
  },
  {
    question:
      "In a stack, which operation would be used to check the number of elements in the stack?",
    options: ["Peek", "Push", "Pop", "Size"],
    correctAnswer: "Size",
    explanation:
      "The 'Size' operation can be used to check the number of elements currently in the stack.",
  },
  {
    question:
      "What is the correct sequence of operations to reverse the contents of a stack?",
    options: [
      "Push all elements, then pop and re-push in reverse order",
      "Pop all elements, then push them back in reverse order",
      "Push, pop, and peek in a loop",
      "All of the above",
    ],
    correctAnswer: "Pop all elements, then push them back in reverse order",
    explanation:
      "By popping all elements and pushing them back, you reverse the order of the elements in the stack.",
  },
  {
    question:
      "In the context of a stack, which of the following is a typical application?",
    options: [
      "Finding the shortest path in a graph",
      "Managing undo functionality in text editors",
      "Searching for an element in a tree",
      "Sorting elements in ascending order",
    ],
    correctAnswer: "Managing undo functionality in text editors",
    explanation:
      "Stacks are commonly used for managing undo functionality as the most recent changes are tracked in a LIFO order.",
  },
  {
    question:
      "Which of the following is an example of a real-world use of a stack?",
    options: [
      "A list of commands in a text editor",
      "A process queue in an operating system",
      "A stack of plates in a cafeteria",
      "Both A and C",
    ],
    correctAnswer: "Both A and C",
    explanation:
      "Stacks are used in text editors to manage commands and in real life, such as a stack of plates in a cafeteria.",
  },
  {
    question: "What would happen if you call 'pop' on an empty stack?",
    options: [
      "It returns null",
      "It throws a stack underflow error",
      "It results in a memory leak",
      "It returns the bottom element",
    ],
    correctAnswer: "It throws a stack underflow error",
    explanation:
      "Attempting to pop an element from an empty stack results in a 'stack underflow' error.",
  },
  {
    question: "Which of the following is the best use case for a stack?",
    options: [
      "Queueing tasks for execution",
      "Sorting elements",
      "Tracking function calls during recursion",
      "Handling priority requests",
    ],
    correctAnswer: "Tracking function calls during recursion",
    explanation:
      "Stacks are ideal for tracking function calls during recursion due to their LIFO nature.",
  },
  {
    question:
      "What is the key difference between an array-based stack and a linked list-based stack?",
    options: [
      "Array-based stack has constant time operations, while a linked list-based stack does not",
      "A linked list-based stack can grow dynamically, whereas an array-based stack has a fixed size",
      "Both have the same memory requirements",
      "Linked list-based stacks require more memory than array-based stacks",
    ],
    correctAnswer:
      "A linked list-based stack can grow dynamically, whereas an array-based stack has a fixed size",
    explanation:
      "Linked list-based stacks are dynamically sized and can grow without bounds, while array-based stacks have a fixed size.",
  },
  {
    question:
      "In which scenario would a stack be the worst choice of data structure?",
    options: [
      "Managing recursive function calls",
      "Reversing a list",
      "Finding the minimum element in a dynamic dataset",
      "Backtracking in algorithms",
    ],
    correctAnswer: "Finding the minimum element in a dynamic dataset",
    explanation:
      "Stacks are not optimal for finding the minimum element in a dynamic dataset. A queue or heap may be better suited.",
  },
  {
    question: "What is the time complexity of the 'peek' operation in a stack?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'peek' operation, which returns the top element without removing it, has constant time complexity (O(1)).",
  },
  {
    question:
      "What is the result of performing multiple push and pop operations on a stack where elements are pushed in the order: Push(3), Push(5), Push(7), Pop(), Push(2), Pop(), Pop()?",
    options: ["2", "3", "5", "7"],
    correctAnswer: "3",
    explanation:
      "The final result of the operations is 3, as the elements are popped in reverse order of their addition to the stack.",
  },
];
