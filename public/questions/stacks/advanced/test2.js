export const test2 = [
  {
    question:
      "What is the best way to check whether a given string has balanced parentheses using a stack?",
    options: [
      "Push every opening parenthesis and pop when encountering a closing parenthesis",
      "Push every closing parenthesis and pop when encountering an opening parenthesis",
      "Use an array and compare counts of opening and closing parentheses",
      "Use a queue to match parentheses pairs",
    ],
    correctAnswer:
      "Push every opening parenthesis and pop when encountering a closing parenthesis",
    explanation:
      "By pushing opening parentheses onto the stack and popping when encountering closing parentheses, you can check for balanced parentheses.",
  },
  {
    question:
      "When implementing a stack using two queues, what is the time complexity of the 'push' operation in the worst case?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst case, pushing an element onto a stack using two queues requires transferring all elements from one queue to the other, resulting in O(n) complexity.",
  },
  {
    question:
      "What is the time complexity of the 'peek' operation for a stack implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'peek' operation in a stack implemented using a linked list can be done in constant time (O(1)) because we can directly access the top element.",
  },
  {
    question:
      "Which of the following is the primary disadvantage of using a stack to manage recursive calls in an algorithm?",
    options: [
      "It consumes excessive memory for deep recursion",
      "It is faster than an iterative solution",
      "It allows random access to elements",
      "It is simpler to implement than using a queue",
    ],
    correctAnswer: "It consumes excessive memory for deep recursion",
    explanation:
      "Stacks, when used for deep recursion, can lead to high memory consumption, potentially causing stack overflow in some cases.",
  },
  {
    question:
      "Which of the following is the key property of a stack that allows it to be useful for undo/redo operations in software applications?",
    options: ["FIFO", "LIFO", "Priority-based", "Hashing"],
    correctAnswer: "LIFO",
    explanation:
      "The Last-In-First-Out (LIFO) principle of stacks makes them ideal for undo/redo operations, as the last action is undone first.",
  },
  {
    question:
      "When using a stack for function call management in a recursive algorithm, which operation is responsible for restoring the previous state of the function?",
    options: ["Push", "Pop", "Peek", "Dequeue"],
    correctAnswer: "Pop",
    explanation:
      "In a recursive algorithm, the 'pop' operation is responsible for removing the function call from the stack, restoring the previous state.",
  },
  {
    question:
      "What is the primary reason for using a stack to evaluate expressions in post-order (reverse Polish notation)?",
    options: [
      "It simplifies operations by evaluating operators after their operands",
      "It maintains operator precedence naturally",
      "It allows for immediate evaluation of expressions as they are encountered",
      "It ensures that no operators are evaluated until the end",
    ],
    correctAnswer:
      "It simplifies operations by evaluating operators after their operands",
    explanation:
      "In post-order expressions, operators are evaluated after their operands, which is naturally suited for stack-based evaluation.",
  },
  {
    question:
      "Which data structure is primarily used to handle recursion and manage state in functional programming?",
    options: ["Array", "Queue", "Stack", "HashMap"],
    correctAnswer: "Stack",
    explanation:
      "Stacks are used to manage the state and keep track of recursive function calls in functional programming.",
  },
  {
    question:
      "In the context of a stack-based depth-first search (DFS) algorithm, how do you backtrack to the previous state after reaching a dead-end?",
    options: [
      "Pop elements from the stack",
      "Push elements onto the stack",
      "Dequeue elements from a queue",
      "Recursively call the DFS function",
    ],
    correctAnswer: "Pop elements from the stack",
    explanation:
      "In a stack-based DFS, you backtrack by popping elements from the stack, which represents the previous state.",
  },
  {
    question:
      "What is the time complexity of the 'pop' operation in a stack implemented using a doubly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'pop' operation in a stack implemented using a doubly linked list can be done in constant time (O(1)), as we only need to adjust pointers at the top.",
  },
  {
    question:
      "Which of the following is the correct approach to implement a stack that supports constant time for both 'push' and 'pop' operations?",
    options: [
      "Using an array with dynamic resizing",
      "Using a singly linked list",
      "Using a doubly linked list",
      "Using a balanced tree",
    ],
    correctAnswer: "Using a doubly linked list",
    explanation:
      "A doubly linked list allows for constant-time push and pop operations from both ends of the stack.",
  },
  {
    question: "How would you efficiently reverse a queue using two stacks?",
    options: [
      "Push all elements into the first stack, then push them into the second stack",
      "Push elements into a stack, and pop from the same stack",
      "Enqueue elements into a second queue, and reverse the order while popping",
      "Perform a binary search on the queue elements",
    ],
    correctAnswer:
      "Push all elements into the first stack, then push them into the second stack",
    explanation:
      "To reverse a queue using two stacks, first push all elements into the first stack, then push them into the second stack to reverse their order.",
  },
  {
    question:
      "What is the time complexity of a 'peek' operation on a stack that is implemented using a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'peek' operation in a stack implemented using a singly linked list can be done in constant time (O(1)) by accessing the top node.",
  },
  {
    question:
      "In which case would a stack-based implementation of a recursive algorithm be less efficient than an iterative approach?",
    options: [
      "When the recursion depth is small",
      "When the recursive algorithm requires a large amount of state preservation",
      "When the problem can be solved in constant space",
      "When the recursion depth exceeds the maximum stack size",
    ],
    correctAnswer: "When the recursion depth exceeds the maximum stack size",
    explanation:
      "If the recursion depth is too deep, a stack-based implementation can result in a stack overflow, making an iterative approach more efficient.",
  },
  {
    question:
      "What is the purpose of using a stack to store function return addresses in a recursive algorithm?",
    options: [
      "To preserve the order of execution",
      "To store local variables",
      "To enable random access of functions",
      "To store temporary results",
    ],
    correctAnswer: "To preserve the order of execution",
    explanation:
      "The stack is used to store function return addresses to ensure that when the recursive call finishes, execution can continue in the correct order.",
  },
  {
    question:
      "Which of the following is true about the time complexity of using a stack to reverse a string?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Reversing a string using a stack involves pushing each character and popping them in reverse order, which takes linear time (O(n)).",
  },
  {
    question:
      "Which algorithm is a typical example of using a stack to traverse a graph?",
    options: [
      "Breadth-First Search (BFS)",
      "Binary Search",
      "Depth-First Search (DFS)",
      "Dijkstra's Algorithm",
    ],
    correctAnswer: "Depth-First Search (DFS)",
    explanation:
      "DFS uses a stack to explore nodes in a graph, where the most recently discovered node is processed first.",
  },
  {
    question:
      "How does the 'push' operation behave in a stack that uses a circular buffer for implementation?",
    options: [
      "It overwrites the element at the top",
      "It pushes elements in a circular manner",
      "It requires extra space for buffer management",
      "It increases the stack size dynamically",
    ],
    correctAnswer: "It pushes elements in a circular manner",
    explanation:
      "In a circular buffer implementation, the push operation wraps around the buffer when it reaches the end, allowing for efficient space utilization.",
  },
  {
    question:
      "How would you implement a min-stack that supports retrieving the minimum element in constant time?",
    options: [
      "Use an auxiliary stack to track minimums",
      "Use a doubly linked list",
      "Store all elements in an array and sort them",
      "Use a priority queue",
    ],
    correctAnswer: "Use an auxiliary stack to track minimums",
    explanation:
      "An auxiliary stack can be used to track minimum elements as they are pushed and popped, allowing for O(1) retrieval of the minimum.",
  },
  {
    question:
      "What is the primary advantage of using a stack in memory management for handling function calls?",
    options: [
      "It allows for dynamic memory allocation",
      "It helps in the efficient handling of recursion",
      "It provides a way to manage thread execution",
      "It ensures constant time memory access",
    ],
    correctAnswer: "It helps in the efficient handling of recursion",
    explanation:
      "Stacks are crucial for managing function calls and recursive function execution, maintaining the state of each call until it returns.",
  },
];
