export const test3 = [
  {
    question:
      "What is the space complexity of using a stack to reverse a linked list?",
    options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
    correctAnswer: "O(n)",
    explanation:
      "Reversing a linked list using a stack requires storing all the nodes in the stack, which results in O(n) space complexity.",
  },
  {
    question:
      "What is the time complexity of finding the middle element of a stack implemented using a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In a stack implemented using a singly linked list, finding the middle element requires traversing the entire list, which takes O(n) time.",
  },
  {
    question:
      "What is the key advantage of using a monotonic stack over a regular stack for solving problems involving element comparisons?",
    options: [
      "It stores all elements in sorted order",
      "It can maintain the order of insertion",
      "It keeps track of the minimum/maximum element efficiently",
      "It allows easy backtracking to previous elements",
    ],
    correctAnswer: "It keeps track of the minimum/maximum element efficiently",
    explanation:
      "A monotonic stack allows efficient tracking of the minimum or maximum element, which is useful for problems like finding the next smaller/larger element.",
  },
  {
    question:
      "Which of the following is an example of using a stack to evaluate expressions with operators and operands?",
    options: [
      "Binary tree traversal",
      "Postfix notation evaluation",
      "Binary search",
      "Depth-first search in a graph",
    ],
    correctAnswer: "Postfix notation evaluation",
    explanation:
      "In postfix notation, operators follow their operands, and a stack can be used to evaluate the expression in a single pass.",
  },
  {
    question:
      "What is the main reason for using a stack to store recursive calls in algorithms?",
    options: [
      "To preserve the order of operations",
      "To minimize memory usage",
      "To allow direct access to previous values",
      "To store all variables in a shared memory space",
    ],
    correctAnswer: "To preserve the order of operations",
    explanation:
      "Stacks are used to store recursive calls in order to preserve the execution flow and return to the previous state after a function completes.",
  },
  {
    question:
      "Which data structure can be used to implement a min-stack, which supports both push, pop, and retrieving the minimum element in constant time?",
    options: ["Linked list", "Queue", "Array", "Two stacks"],
    correctAnswer: "Two stacks",
    explanation:
      "A min-stack can be implemented using two stacks: one to store the elements and another to store the minimums.",
  },
  {
    question:
      "How can you optimize the stack for the problem of finding the next greater element for each element in an array?",
    options: [
      "Use two stacks to track both the current and next elements",
      "Use an array to store intermediate results",
      "Use a queue to maintain the elements",
      "Use recursion to calculate the result",
    ],
    correctAnswer: "Use two stacks to track both the current and next elements",
    explanation:
      "Using two stacks allows you to efficiently track both the current and next elements to determine the next greater element.",
  },
  {
    question:
      "Which algorithm involves pushing and popping elements from a stack to process nodes in a graph?",
    options: [
      "Depth-First Search (DFS)",
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
      "Bellman-Ford Algorithm",
    ],
    correctAnswer: "Depth-First Search (DFS)",
    explanation:
      "In DFS, a stack is used to explore nodes in the graph, ensuring that nodes are visited in the correct order.",
  },
  {
    question:
      "What is the space complexity of a stack-based depth-first search (DFS) algorithm when exploring a graph with 'V' vertices and 'E' edges?",
    options: ["O(1)", "O(V + E)", "O(V)", "O(E)"],
    correctAnswer: "O(V)",
    explanation:
      "In DFS, the stack used to keep track of the visited nodes requires space proportional to the number of vertices (V), so the space complexity is O(V).",
  },
  {
    question:
      "When using a stack to reverse a string, what is the correct order of operations?",
    options: [
      "Push each character into the stack and then pop them to reverse the string",
      "Push the entire string at once into the stack and then pop it",
      "Directly swap characters in place without using a stack",
      "Use recursion instead of a stack",
    ],
    correctAnswer:
      "Push each character into the stack and then pop them to reverse the string",
    explanation:
      "To reverse a string using a stack, you push each character onto the stack and then pop them to obtain the reversed string.",
  },
  {
    question:
      "In a depth-first search (DFS) algorithm, when using a stack to traverse a graph, what happens if there is a cycle in the graph?",
    options: [
      "The stack will overflow",
      "The algorithm will terminate prematurely",
      "The algorithm will revisit nodes, leading to infinite looping",
      "The cycle will be ignored",
    ],
    correctAnswer:
      "The algorithm will revisit nodes, leading to infinite looping",
    explanation:
      "In DFS, if the graph contains cycles and no visited nodes tracking is performed, the algorithm may revisit nodes indefinitely, causing an infinite loop.",
  },
  {
    question:
      "What is the correct way to implement a stack that can support retrieving the maximum element in constant time?",
    options: [
      "Use an auxiliary stack to store maximums",
      "Use a hash map to store maximums",
      "Use a linked list to track the maximums",
      "Use a priority queue",
    ],
    correctAnswer: "Use an auxiliary stack to store maximums",
    explanation:
      "An auxiliary stack that tracks the maximum element during push and pop operations ensures that the maximum can be retrieved in constant time.",
  },
  {
    question:
      "Which data structure is best suited for implementing an undo/redo operation in text editors?",
    options: ["Stack", "Queue", "Hash Table", "Linked List"],
    correctAnswer: "Stack",
    explanation:
      "Stacks are ideal for undo/redo operations because they follow the LIFO (Last In, First Out) principle, allowing easy rollback to the last operation.",
  },
  {
    question:
      "How does a stack-based algorithm handle backtracking in problems like maze solving or puzzle-solving?",
    options: [
      "By pushing and popping the state at each decision point",
      "By using recursion instead of a stack",
      "By storing the entire solution path in an array",
      "By maintaining a list of visited states",
    ],
    correctAnswer: "By pushing and popping the state at each decision point",
    explanation:
      "In backtracking problems, a stack can be used to push the current state and pop when a dead-end is reached, allowing the algorithm to backtrack.",
  },
  {
    question:
      "Which of the following best describes the space complexity of a recursive algorithm that uses a stack to keep track of function calls?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of a recursive algorithm using a stack for function calls is proportional to the depth of recursion, which is O(n).",
  },
  {
    question:
      "When using a stack to evaluate a postfix expression, what happens when an operator is encountered?",
    options: [
      "Pop two operands from the stack, apply the operator, and push the result",
      "Push the operator onto the stack",
      "Apply the operator immediately to the last two elements",
      "Pop an operand, apply the operator, and push the result",
    ],
    correctAnswer:
      "Pop two operands from the stack, apply the operator, and push the result",
    explanation:
      "In postfix notation, operators are applied to the two most recent operands popped from the stack, and the result is then pushed back onto the stack.",
  },
  {
    question:
      "What type of problems can be efficiently solved using a stack data structure?",
    options: [
      "Problems requiring Last In, First Out (LIFO) behavior",
      "Problems requiring First In, First Out (FIFO) behavior",
      "Problems involving priority ordering",
      "Problems requiring sorting of elements",
    ],
    correctAnswer: "Problems requiring Last In, First Out (LIFO) behavior",
    explanation:
      "Stacks are best suited for problems that require Last In, First Out (LIFO) behavior, such as recursive algorithms and undo/redo operations.",
  },
  {
    question:
      "Which data structure can be used to efficiently implement a balanced parentheses checker?",
    options: ["Queue", "Stack", "Hash Map", "Priority Queue"],
    correctAnswer: "Stack",
    explanation:
      "A stack is ideal for balancing parentheses because it allows you to push open parentheses and pop them when closing parentheses are encountered.",
  },
  {
    question:
      "Which of the following is an example of a problem that can be solved using a stack-based dynamic programming approach?",
    options: [
      "Finding the longest common subsequence",
      "Calculating Fibonacci numbers",
      "Finding the maximum subarray sum",
      "Solving the knapsack problem",
    ],
    correctAnswer: "Finding the longest common subsequence",
    explanation:
      "The longest common subsequence can be solved using a stack-based dynamic programming approach by breaking it down into smaller subproblems.",
  },
  {
    question:
      "How would you implement a stack with constant time complexity for accessing both the minimum and maximum values?",
    options: [
      "Using two auxiliary stacks for minimum and maximum",
      "Using a doubly linked list",
      "Using a queue",
      "Using a priority queue",
    ],
    correctAnswer: "Using two auxiliary stacks for minimum and maximum",
    explanation:
      "Two auxiliary stacks can be used to track both the minimum and maximum values as elements are pushed and popped from the main stack.",
  },
  {
    question: "Which algorithm uses a stack to check if a graph is acyclic?",
    options: [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
    ],
    correctAnswer: "Depth-First Search (DFS)",
    explanation:
      "DFS can be used to detect cycles in a graph by tracking visited nodes using a stack and checking for back edges.",
  },
];
