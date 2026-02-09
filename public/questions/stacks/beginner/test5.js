export const test5 = [
  {
    question: "What will be the output of a 'Push' operation in a stack?",
    options: [
      "An element is added to the stack",
      "An element is removed from the stack",
      "The top element is replaced",
      "None of the above",
    ],
    correctAnswer: "An element is added to the stack",
    explanation:
      "The 'Push' operation adds an element to the top of the stack.",
  },
  {
    question:
      "Which of the following is the correct order of operations performed on a stack?",
    options: [
      "Pop -> Peek -> Push",
      "Push -> Pop -> Peek",
      "Peek -> Push -> Pop",
      "Push -> Peek -> Pop",
    ],
    correctAnswer: "Push -> Peek -> Pop",
    explanation:
      "In a stack, you typically first add an element using 'Push', then view it with 'Peek', and finally remove it using 'Pop'.",
  },
  {
    question: "What does it mean when a stack is said to be 'full'?",
    options: [
      "No more elements can be added",
      "All the elements are removed",
      "The stack is empty",
      "The stack is in the process of being cleared",
    ],
    correctAnswer: "No more elements can be added",
    explanation:
      "When a stack is full, it means there is no more space to add elements into it.",
  },
  {
    question: "Which algorithm can be implemented using a stack?",
    options: [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Quick sort",
      "Merge sort",
    ],
    correctAnswer: "Depth-First Search (DFS)",
    explanation:
      "The DFS algorithm uses a stack for exploring nodes in a graph or tree structure.",
  },
  {
    question: "What is a stack overflow?",
    options: [
      "When you pop from an empty stack",
      "When you push into a full stack",
      "When there is not enough memory for a stack",
      "When the stack is not cleared properly",
    ],
    correctAnswer: "When you push into a full stack",
    explanation:
      "A stack overflow occurs when an attempt is made to push more elements into a stack that is already full.",
  },
  {
    question: "What will happen if you 'Push' an element to a full stack?",
    options: [
      "The element is added at the bottom",
      "An exception or error occurs",
      "The top element is overwritten",
      "The stack will automatically expand",
    ],
    correctAnswer: "An exception or error occurs",
    explanation:
      "If the stack is full, pushing an element will throw a stack overflow exception.",
  },
  {
    question: "What is the time complexity of the 'Push' operation in a stack?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'Push' operation in a stack has constant time complexity, O(1), as it only involves adding an element to the top.",
  },
  {
    question: "What is the time complexity of the 'Pop' operation in a stack?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'Pop' operation in a stack also has constant time complexity, O(1), as it simply removes the top element.",
  },
  {
    question:
      "Which data structure is used for implementing function calls in recursion?",
    options: ["Queue", "Stack", "Linked list", "Hash table"],
    correctAnswer: "Stack",
    explanation:
      "Function calls in recursion are managed by the stack, which keeps track of the return addresses and local variables.",
  },
  {
    question: "How does the stack help in undo operations in software?",
    options: [
      "By storing previous states in memory",
      "By allowing direct access to any action",
      "By reversing the actions from bottom to top",
      "By processing actions in a FIFO manner",
    ],
    correctAnswer: "By storing previous states in memory",
    explanation:
      "A stack can be used to store previous states of an application, and when an 'undo' operation is performed, the topmost state is popped off.",
  },
  {
    question: "What is the primary characteristic of a stack?",
    options: [
      "FIFO (First In First Out)",
      "LIFO (Last In First Out)",
      "Random Access",
      "None of the above",
    ],
    correctAnswer: "LIFO (Last In First Out)",
    explanation:
      "A stack follows the Last In, First Out (LIFO) principle, where the last element added is the first to be removed.",
  },
  {
    question: "What will be the result of popping from an empty stack?",
    options: [
      "Stack Overflow",
      "Stack Underflow",
      "An empty value is returned",
      "The top element is removed",
    ],
    correctAnswer: "Stack Underflow",
    explanation:
      "Attempting to pop an element from an empty stack results in a 'stack underflow' error, as there are no elements to remove.",
  },
  {
    question: "In which scenario would you use a stack in programming?",
    options: [
      "For maintaining order of elements in a queue",
      "For reversing data",
      "For searching elements in a binary tree",
      "For sorting elements in an array",
    ],
    correctAnswer: "For reversing data",
    explanation:
      "Stacks are often used for reversing data because of their LIFO nature, where the most recently added element is accessed first.",
  },
  {
    question: "Which of the following operations is not valid on a stack?",
    options: ["Push", "Pop", "Peek", "Insert at any position"],
    correctAnswer: "Insert at any position",
    explanation:
      "Stacks only allow 'Push' (adding an element) and 'Pop' (removing the top element), and they do not allow inserting elements at any arbitrary position.",
  },
  {
    question: "How do stacks handle memory management during recursion?",
    options: [
      "Stacks hold memory in a queue",
      "Stacks use memory in a hierarchical tree structure",
      "Stacks store function calls and return addresses",
      "Stacks cannot handle memory management in recursion",
    ],
    correctAnswer: "Stacks store function calls and return addresses",
    explanation:
      "In recursion, the function calls and their return addresses are stored in the stack, which is used to keep track of the function's execution.",
  },
  {
    question:
      "Which of the following is true about the 'Peek' operation in a stack?",
    options: [
      "It removes the top element from the stack",
      "It adds a new element to the stack",
      "It retrieves the top element without removing it",
      "It clears the stack",
    ],
    correctAnswer: "It retrieves the top element without removing it",
    explanation:
      "The 'Peek' operation allows you to look at the top element of the stack without modifying it.",
  },
  {
    question:
      "What happens to the top element when an element is pushed onto a stack?",
    options: [
      "It becomes the new bottom element",
      "It remains unchanged",
      "It becomes the new top element",
      "It is deleted",
    ],
    correctAnswer: "It becomes the new top element",
    explanation:
      "When an element is pushed onto the stack, it becomes the new topmost element in the stack.",
  },
  {
    question:
      "Which of the following is the correct way to define a stack in most programming languages?",
    options: [
      "Using a queue",
      "Using an array or linked list",
      "Using a hash table",
      "Using a binary tree",
    ],
    correctAnswer: "Using an array or linked list",
    explanation:
      "Stacks are typically implemented using arrays or linked lists, where elements are added or removed from one end.",
  },
  {
    question:
      "Which data structure is commonly used in evaluating expressions in post-fix (Reverse Polish) notation?",
    options: ["Stack", "Queue", "Linked List", "Array"],
    correctAnswer: "Stack",
    explanation:
      "Post-fix expressions are evaluated using a stack, where operators are applied to operands as they are popped from the stack.",
  },
  {
    question: "What is a common application of stacks in computer science?",
    options: [
      "Database indexing",
      "Memory allocation",
      "Function call management",
      "Searching algorithms",
    ],
    correctAnswer: "Function call management",
    explanation:
      "Stacks are used to manage function calls and return addresses during execution in most programming languages.",
  },
];
