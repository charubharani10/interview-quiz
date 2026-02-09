export const test5 = [
  {
    question:
      "What is the space complexity of a depth-first search (DFS) using a stack to traverse a graph with 'n' nodes and 'e' edges?",
    options: ["O(1)", "O(n)", "O(n + e)", "O(n^2)"],
    correctAnswer: "O(n + e)",
    explanation:
      "In DFS, a stack is used to store nodes to visit. The space complexity depends on the number of nodes 'n' and the number of edges 'e' in the graph.",
  },
  {
    question: "Which of the following is NOT a valid use case for a stack?",
    options: [
      "Undo functionality in text editors",
      "Expression evaluation (infix, postfix)",
      "Recursive function call simulation",
      "Finding the shortest path in a graph",
    ],
    correctAnswer: "Finding the shortest path in a graph",
    explanation:
      "Stacks are useful for problems like undo functionality, expression evaluation, and recursive simulation, but they are not used to find the shortest path in graphs.",
  },
  {
    question:
      "Which of the following data structures is NOT related to stack-based algorithms?",
    options: [
      "Backtracking",
      "DFS (Depth First Search)",
      "Breadth First Search",
      "Expression parsing",
    ],
    correctAnswer: "Breadth First Search",
    explanation:
      "Breadth First Search (BFS) uses a queue, not a stack. Stacks are used in DFS, backtracking, and expression parsing.",
  },
  {
    question:
      "What is the primary challenge when implementing a balanced parentheses checking algorithm?",
    options: [
      "Ensuring parentheses are closed",
      "Handling multiple types of brackets",
      "Maintaining a stack with multiple data types",
      "Handling nested parentheses correctly",
    ],
    correctAnswer: "Handling nested parentheses correctly",
    explanation:
      "The primary challenge is ensuring that parentheses (and other brackets) are properly nested, and the stack helps with this.",
  },
  {
    question:
      "Which is the correct time complexity for the pop operation in a stack implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The pop operation in a stack, whether implemented using an array or linked list, occurs in constant time, O(1), as only the top element is removed.",
  },
  {
    question:
      "Which stack-based algorithm can be used to determine whether a graph contains a cycle?",
    options: ["DFS", "BFS", "Kruskal’s algorithm", "Bellman-Ford algorithm"],
    correctAnswer: "DFS",
    explanation:
      "DFS can be used to detect cycles in a graph. By tracking the visited nodes and checking for back edges, cycles can be identified.",
  },
  {
    question:
      "When using a stack to implement recursive function calls, what is the primary advantage?",
    options: [
      "More space efficiency",
      "Avoiding stack overflow",
      "Eliminating memory usage",
      "Simulating depth-first traversal",
    ],
    correctAnswer: "Simulating depth-first traversal",
    explanation:
      "By using an explicit stack, we can simulate recursive function calls and control the depth-first traversal of the graph without using the call stack.",
  },
  {
    question: "What is the main difference between a queue and a stack?",
    options: [
      "A queue follows FIFO, a stack follows LIFO",
      "Stacks allow multiple elements to be added at once",
      "Queues support random access, while stacks don't",
      "Stacks support multiple operations at the same time",
    ],
    correctAnswer: "A queue follows FIFO, a stack follows LIFO",
    explanation:
      "Queues operate on a First In, First Out (FIFO) principle, while stacks operate on a Last In, First Out (LIFO) principle.",
  },
  {
    question:
      "What can be used to improve the space efficiency of a recursive depth-first search (DFS) in a graph?",
    options: [
      "A priority queue",
      "A hash table",
      "A stack-based approach",
      "A cyclic graph detection",
    ],
    correctAnswer: "A stack-based approach",
    explanation:
      "Using an explicit stack can replace recursive calls in DFS, preventing issues like stack overflow and improving space efficiency.",
  },
  {
    question:
      "Which algorithm leverages a stack to evaluate expressions that contain operators such as +, -, *, and / in infix notation?",
    options: [
      "Shunting Yard algorithm",
      "Merge Sort algorithm",
      "Quick Sort algorithm",
      "Prim's algorithm",
    ],
    correctAnswer: "Shunting Yard algorithm",
    explanation:
      "The Shunting Yard algorithm uses a stack to convert infix expressions to postfix or prefix notation for easier evaluation.",
  },
  {
    question:
      "What is the time complexity of reversing a stack using an auxiliary stack?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Reversing a stack using an auxiliary stack requires pushing and popping each element once, resulting in O(n) time complexity.",
  },
  {
    question:
      "Which type of traversal uses a stack to process nodes in a depth-first manner?",
    options: [
      "Breadth-first traversal",
      "Depth-first traversal",
      "Pre-order traversal",
      "Level-order traversal",
    ],
    correctAnswer: "Depth-first traversal",
    explanation:
      "In DFS, a stack is used to explore nodes as deeply as possible before backtracking, making it a depth-first traversal.",
  },
  {
    question:
      "Which problem-solving technique commonly uses stacks for backtracking?",
    options: [
      "Sorting",
      "Depth-first search",
      "Balanced parentheses",
      "N-queens problem",
    ],
    correctAnswer: "N-queens problem",
    explanation:
      "The N-queens problem can be solved using a stack to backtrack through different configurations and place queens in valid positions.",
  },
  {
    question: "What is the time complexity of the peek operation in a stack?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The peek operation retrieves the top element of the stack in constant time, O(1).",
  },
  {
    question:
      "How can a stack be used to solve the problem of balancing multiple types of parentheses (e.g., {}, [], and ())?",
    options: [
      "By iterating over the stack and removing matching pairs",
      "By counting the number of open and closed parentheses",
      "By using different stacks for each type of parenthesis",
      "By pushing and popping based on matching types",
    ],
    correctAnswer: "By pushing and popping based on matching types",
    explanation:
      "A stack can be used to track opening parentheses and check for matching closing ones, ensuring that all parentheses are balanced.",
  },
  {
    question:
      "In a stack-based algorithm to evaluate a postfix expression, what is the first operation when encountering an operator?",
    options: [
      "Push the operator onto the stack",
      "Pop two operands from the stack",
      "Evaluate the expression",
      "Push the result onto the stack",
    ],
    correctAnswer: "Pop two operands from the stack",
    explanation:
      "In postfix evaluation, when an operator is encountered, the algorithm pops the two most recent operands from the stack, applies the operator, and pushes the result back.",
  },
  {
    question:
      "What is the space complexity of a stack-based algorithm that simulates the evaluation of an infix expression?",
    options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity depends on the number of operands and operators in the expression, which is proportional to 'n'.",
  },
  {
    question:
      "What is the primary use of a stack in function call management during recursive programming?",
    options: [
      "Storing function arguments",
      "Tracking the return addresses",
      "Handling recursion depth",
      "Storing global variables",
    ],
    correctAnswer: "Tracking the return addresses",
    explanation:
      "The stack manages return addresses during recursive function calls, enabling the program to return to the correct place after a function completes.",
  },
  {
    question:
      "Which data structure would you use to implement a function that needs to backtrack through previously visited states or configurations?",
    options: ["Queue", "Heap", "Stack", "HashSet"],
    correctAnswer: "Stack",
    explanation:
      "A stack's Last In, First Out (LIFO) property makes it ideal for backtracking through configurations or previously visited states.",
  },
  {
    question:
      "In an expression evaluation algorithm that uses a stack, what is the function of the 'push' operation?",
    options: [
      "To place operands on the stack",
      "To place operators on the stack",
      "To evaluate an expression",
      "To remove an operand from the stack",
    ],
    correctAnswer: "To place operands on the stack",
    explanation:
      "In expression evaluation, the 'push' operation is used to place operands on the stack, which will later be used by operators.",
  },
];
