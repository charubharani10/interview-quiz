export const test2 = [
  {
    question: "What does the term 'stack overflow' refer to?",
    options: [
      "When there is too much memory allocated to the stack",
      "When too many elements are pushed onto the stack",
      "When a stack operation is performed without checking for emptiness",
      "When the stack exceeds its allocated memory space",
    ],
    correctAnswer: "When the stack exceeds its allocated memory space",
    explanation:
      "Stack overflow occurs when the stack grows beyond its allocated memory space due to excessive pushing of elements.",
  },
  {
    question:
      "Which data structure is used to implement recursion in most programming languages?",
    options: ["Queue", "Array", "Stack", "Linked List"],
    correctAnswer: "Stack",
    explanation:
      "Recursion in most programming languages is implemented using a stack, where function calls are pushed onto the call stack.",
  },
  {
    question:
      "What is the time complexity of the push and pop operations in a stack?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "Both the 'push' and 'pop' operations on a stack have a time complexity of O(1), meaning they are constant-time operations.",
  },
  {
    question: "What is the stack data structure's key feature?",
    options: [
      "First In First Out",
      "Last In First Out",
      "First Come First Serve",
      "None of the above",
    ],
    correctAnswer: "Last In First Out",
    explanation:
      "Stacks operate on the Last In First Out (LIFO) principle, where the most recently added element is the first to be removed.",
  },
  {
    question:
      "Which of the following is a common example of a stack in real life?",
    options: [
      "A deck of cards",
      "A line of customers at a counter",
      "A bookshelf",
      "A parking garage",
    ],
    correctAnswer: "A deck of cards",
    explanation:
      "A deck of cards can be considered a real-life stack, where the topmost card is the first one removed.",
  },
  {
    question: "Which method is used to add elements to a stack?",
    options: ["Insert", "Add", "Push", "Append"],
    correctAnswer: "Push",
    explanation:
      "The 'Push' operation is used to add elements to the top of a stack.",
  },
  {
    question:
      "Which operation allows you to view the top element of a stack without removing it?",
    options: ["Peek", "Pop", "Push", "Top"],
    correctAnswer: "Peek",
    explanation:
      "The 'Peek' operation lets you view the top element of the stack without removing it.",
  },
  {
    question:
      "In which scenario would a stack be a poor choice for a data structure?",
    options: [
      "When you need to access elements in a random order",
      "When the elements need to be processed in reverse order",
      "When you need fast lookups",
      "When you need to manage function calls",
    ],
    correctAnswer: "When you need to access elements in a random order",
    explanation:
      "Stacks are not ideal for random access, as they operate in a LIFO manner, limiting access to only the top element.",
  },
  {
    question:
      "What happens when you try to pop an element from an empty stack?",
    options: [
      "Returns null",
      "Throws an exception",
      "Removes a random element",
      "Stack size becomes zero",
    ],
    correctAnswer: "Throws an exception",
    explanation:
      "Trying to pop an element from an empty stack typically throws an exception, indicating that the stack is underflowed.",
  },
  {
    question: "How does a stack handle memory management?",
    options: [
      "By using heap memory",
      "By using a fixed amount of memory",
      "By dynamically resizing memory",
      "By using a memory pool",
    ],
    correctAnswer: "By using a fixed amount of memory",
    explanation:
      "In a typical stack, memory is allocated in a fixed amount, either by the operating system or the language runtime.",
  },
  {
    question: "How is a stack typically implemented?",
    options: [
      "Using arrays or linked lists",
      "Using queues",
      "Using binary trees",
      "Using hash maps",
    ],
    correctAnswer: "Using arrays or linked lists",
    explanation:
      "Stacks can be implemented using arrays or linked lists, where elements are added and removed from the top.",
  },
  {
    question:
      "What is the space complexity of a stack implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "A stack implemented using a linked list has space complexity of O(n) because each node of the list requires space.",
  },
  {
    question: "Which of the following is not a valid operation on a stack?",
    options: ["Push", "Pop", "Peek", "Insert"],
    correctAnswer: "Insert",
    explanation:
      "The valid operations on a stack are push, pop, and peek. Insert is not a standard operation for stacks.",
  },
  {
    question:
      "What happens when the stack pointer is at the top of a full stack?",
    options: [
      "Stack overflow",
      "Stack underflow",
      "Stack is cleared",
      "Element is pushed to the next memory location",
    ],
    correctAnswer: "Stack overflow",
    explanation:
      "When the stack is full and a new element is pushed, it results in a 'stack overflow' because there is no more space available.",
  },
  {
    question:
      "What is the relationship between stack operations and recursion?",
    options: [
      "Stack is used to manage recursive calls",
      "Recursion is faster than stacks",
      "Stack operations and recursion are unrelated",
      "Stacks can replace recursion entirely",
    ],
    correctAnswer: "Stack is used to manage recursive calls",
    explanation:
      "Recursion involves pushing function calls onto the stack and popping them off as they return.",
  },
  {
    question: "How does a stack handle memory management for function calls?",
    options: [
      "By storing function parameters on the heap",
      "By using an array-based memory pool",
      "By pushing and popping function calls from the call stack",
      "By allocating stack memory dynamically",
    ],
    correctAnswer: "By pushing and popping function calls from the call stack",
    explanation:
      "The stack handles memory management for function calls by pushing and popping function call frames to and from the call stack.",
  },
  {
    question: "Which of the following scenarios is best suited to use a stack?",
    options: [
      "Breadth-first search in a graph",
      "Undo functionality in a text editor",
      "Processing jobs in a queue",
      "Searching for an element in a list",
    ],
    correctAnswer: "Undo functionality in a text editor",
    explanation:
      "Stacks are commonly used for undo functionality in text editors, where each change is pushed onto the stack and popped to undo the action.",
  },
  {
    question:
      "In a stack, what happens to the element at the top when the 'pop' operation is performed?",
    options: [
      "It is moved to the bottom of the stack",
      "It is removed and discarded",
      "It is returned to the stack",
      "It is transferred to a new stack",
    ],
    correctAnswer: "It is removed and discarded",
    explanation:
      "The 'Pop' operation removes the topmost element from the stack and discards it.",
  },
  {
    question: "What would happen if you called 'peek' on an empty stack?",
    options: [
      "It returns null",
      "It throws a stack overflow exception",
      "It returns 0",
      "It throws a stack underflow exception",
    ],
    correctAnswer: "It throws a stack underflow exception",
    explanation:
      "If you try to 'peek' on an empty stack, it results in a 'stack underflow' exception, as there are no elements to view.",
  },
  {
    question:
      "What is the most common application of stacks in operating systems?",
    options: [
      "Memory management",
      "Process scheduling",
      "Function call stack management",
      "Disk file management",
    ],
    correctAnswer: "Function call stack management",
    explanation:
      "Operating systems use stacks to manage function calls, where each call pushes a new frame onto the stack and pops it off once the function returns.",
  },
];
