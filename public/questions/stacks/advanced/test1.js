export const test1 = [
  {
    question:
      "Which of the following is the time complexity of evaluating a postfix expression using a stack?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Evaluating a postfix expression takes linear time (O(n)), where n is the number of tokens in the expression.",
  },
  {
    question:
      "What would happen if you try to perform a 'pop' operation on a stack that has no elements?",
    options: [
      "Return null",
      "Throw a 'Stack Overflow' error",
      "Throw a 'Stack Underflow' error",
      "Return an error code",
    ],
    correctAnswer: "Throw a 'Stack Underflow' error",
    explanation:
      "Performing a pop on an empty stack results in a 'Stack Underflow' error.",
  },
  {
    question:
      "Which of the following scenarios requires using a stack data structure?",
    options: [
      "Processing recursive function calls",
      "Handling scheduling jobs in a multi-threaded system",
      "Storing elements in sorted order",
      "Searching elements in an unsorted array",
    ],
    correctAnswer: "Processing recursive function calls",
    explanation:
      "Stacks are often used to manage recursive function calls because they follow the LIFO principle, which tracks the most recent call.",
  },
  {
    question:
      "In which situation would a stack not be the most efficient choice of data structure?",
    options: [
      "Undo functionality in an editor",
      "Expression evaluation",
      "Storing log data",
      "Balancing parentheses in a string",
    ],
    correctAnswer: "Storing log data",
    explanation:
      "For log data, a queue or array would be more efficient, as logs need to be accessed in a FIFO manner rather than LIFO.",
  },
  {
    question:
      "When implementing a stack, what is the space complexity of the recursive solution for reversing a string?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Reversing a string using recursion requires a call stack, which consumes O(n) space where 'n' is the length of the string.",
  },
  {
    question:
      "What would be the result if you attempt to push an element onto a stack that is implemented using an array but is already full?",
    options: [
      "Stack Overflow",
      "Stack Underflow",
      "The operation is ignored",
      "The element is added at the bottom",
    ],
    correctAnswer: "Stack Overflow",
    explanation:
      "If an element is pushed onto a full stack, it results in a 'Stack Overflow' error.",
  },
  {
    question: "How would you implement a stack using two queues?",
    options: [
      "Insert into the first queue and dequeue from the second queue",
      "Dequeue elements from one queue, then enqueue them into the other queue",
      "Use one queue for storage and the other for retrieval",
      "Use both queues as alternating push and pop mechanisms",
    ],
    correctAnswer: "Use both queues as alternating push and pop mechanisms",
    explanation:
      "To implement a stack using two queues, elements can be alternately pushed and popped from the queues, where one queue is used for storage and the other for retrieval.",
  },
  {
    question:
      "What is the worst-case time complexity of accessing an element from a stack implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "A stack implemented using a linked list allows constant time (O(1)) access to the top element of the stack.",
  },
  {
    question:
      "Which of the following algorithms can be implemented using a stack to manage state during the computation?",
    options: [
      "QuickSort",
      "MergeSort",
      "Breadth-First Search (BFS)",
      "Depth-First Search (DFS)",
    ],
    correctAnswer: "Depth-First Search (DFS)",
    explanation:
      "Depth-First Search (DFS) is typically implemented using a stack to manage the state of the search as it explores nodes.",
  },
  {
    question:
      "What is the primary disadvantage of using a stack implemented as an array for dynamic stack operations?",
    options: [
      "Stack Overflow occurs when the size limit is reached",
      "It does not allow random access to elements",
      "It has a higher space complexity than linked list implementations",
      "It uses a lot of memory for storing elements",
    ],
    correctAnswer: "Stack Overflow occurs when the size limit is reached",
    explanation:
      "An array-based stack has a fixed size, and if the size limit is reached, it results in a 'Stack Overflow'.",
  },
  {
    question:
      "How can we implement a stack to support both 'push' and 'pop' operations in constant time using two stacks?",
    options: [
      "By using a queue for balancing",
      "By reversing the order of elements before popping",
      "By maintaining two stacks, one for push operations and one for pop operations",
      "By using an additional array for storing intermediate elements",
    ],
    correctAnswer:
      "By maintaining two stacks, one for push operations and one for pop operations",
    explanation:
      "You can maintain two stacks: one for storing elements during push operations, and another for pop operations. When the second stack is empty, transfer elements from the first stack.",
  },
  {
    question:
      "In which scenario would a stack overflow occur in a recursive algorithm?",
    options: [
      "When the base case is not reached",
      "When the recursion depth is too small",
      "When the recursion uses a queue",
      "When the recursion has too few arguments",
    ],
    correctAnswer: "When the base case is not reached",
    explanation:
      "A stack overflow in recursion occurs when the base case is not reached, leading to infinite recursive calls and filling the call stack.",
  },
  {
    question:
      "Which data structure can be used to simulate the behavior of a stack in an iterative recursive algorithm?",
    options: ["Array", "Linked List", "Queue", "Explicit Stack"],
    correctAnswer: "Explicit Stack",
    explanation:
      "In iterative recursive algorithms, an explicit stack can be used to manually simulate the recursive call stack.",
  },
  {
    question:
      "How can we evaluate an expression with both infix and postfix operators using a stack?",
    options: [
      "Use a queue for infix and a stack for postfix",
      "Convert infix to postfix and then evaluate",
      "Use multiple stacks for different operations",
      "First evaluate postfix, then handle infix using recursion",
    ],
    correctAnswer: "Convert infix to postfix and then evaluate",
    explanation:
      "To evaluate an expression with both infix and postfix operators, first convert infix to postfix, then evaluate the postfix expression using a stack.",
  },
  {
    question:
      "What is the time complexity of the 'push' operation in an amortized analysis of a stack implemented using an array with dynamic resizing?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In amortized analysis, the 'push' operation in a dynamically resizing array-based stack has constant time complexity (O(1)).",
  },
  {
    question:
      "Which of the following would be a reason for using a stack to reverse a queue?",
    options: [
      "Stacks allow random access to elements",
      "Stacks are faster at deleting from the front",
      "Stacks support LIFO operations, which are useful for reversal",
      "Stacks automatically sort the elements",
    ],
    correctAnswer:
      "Stacks support LIFO operations, which are useful for reversal",
    explanation:
      "Stacks are useful for reversing a queue because they follow LIFO, which can reverse the order of the elements.",
  },
  {
    question:
      "What is the maximum number of elements that can be stored in a stack with a size limit of 100 and dynamic memory allocation?",
    options: ["100", "Infinite", "1000", "Depends on the available memory"],
    correctAnswer: "Depends on the available memory",
    explanation:
      "With dynamic memory allocation, the stack's size can grow as long as there is enough memory available in the system.",
  },
  {
    question:
      "Which of the following is true about a stack's 'peek' operation in a multi-threaded environment?",
    options: [
      "It is always atomic and thread-safe",
      "It may require synchronization for thread safety",
      "It always modifies the stack",
      "It requires no memory overhead",
    ],
    correctAnswer: "It may require synchronization for thread safety",
    explanation:
      "In a multi-threaded environment, the 'peek' operation may require synchronization to ensure thread safety.",
  },
  {
    question:
      "In which of the following situations would a stack be the least useful?",
    options: [
      "Navigating back and forth in a web browser",
      "Tracking nested function calls in recursion",
      "Managing task execution in a multithreaded environment",
      "Reversing the order of elements in a collection",
    ],
    correctAnswer: "Managing task execution in a multithreaded environment",
    explanation:
      "A stack is less useful for managing tasks in a multithreaded environment as task scheduling often requires a queue, not a LIFO structure.",
  },
  {
    question:
      "Which algorithm utilizes a stack to track backtracking in search algorithms?",
    options: [
      "Binary Search",
      "Breadth-First Search",
      "Depth-First Search",
      "Dijkstra's Algorithm",
    ],
    correctAnswer: "Depth-First Search",
    explanation:
      "Depth-First Search (DFS) uses a stack to track backtracking as it explores nodes in a depth-first manner.",
  },
];
