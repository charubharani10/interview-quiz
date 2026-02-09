export const test4 = [
  {
    question:
      "What is the time complexity of a stack-based algorithm that uses the two-pointer technique to reverse a string in place?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Reversing a string using two pointers requires iterating through half of the string and swapping characters, which results in O(n) time complexity.",
  },
  {
    question:
      "Which type of stack-based approach is often used to implement recursive algorithms in a non-recursive fashion?",
    options: [
      "Dynamic Programming",
      "Depth-First Search (DFS)",
      "Backtracking",
      "Explicit Stack Simulation",
    ],
    correctAnswer: "Explicit Stack Simulation",
    explanation:
      "Recursive algorithms can be transformed into non-recursive algorithms by explicitly using a stack to simulate the call stack.",
  },
  {
    question:
      "In a stack implementation, what will happen if you perform a pop operation on an empty stack?",
    options: [
      "It will throw an error",
      "It will return null",
      "It will block the operation",
      "It will reset the stack to its initial state",
    ],
    correctAnswer: "It will throw an error",
    explanation:
      "Attempting to pop from an empty stack is an invalid operation and usually results in an error or exception.",
  },
  {
    question:
      "What is the primary advantage of using a stack in algorithms such as converting infix to postfix expressions?",
    options: [
      "Stacks help store temporary results",
      "Stacks ensure that the infix order is maintained",
      "Stacks eliminate the need for operators",
      "Stacks allow for easy access to the first operand",
    ],
    correctAnswer: "Stacks help store temporary results",
    explanation:
      "Stacks are used to temporarily hold operators and operands during the conversion of infix expressions to postfix.",
  },
  {
    question:
      "What is the worst-case time complexity of a balanced parentheses matching algorithm using a stack?",
    options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
    correctAnswer: "O(n)",
    explanation:
      "Matching balanced parentheses requires iterating over the input string once, which results in a linear time complexity of O(n).",
  },
  {
    question:
      "When implementing a recursive function for depth-first traversal of a graph, what alternative data structure can be used to simulate recursion?",
    options: ["Priority Queue", "Stack", "HashMap", "Queue"],
    correctAnswer: "Stack",
    explanation:
      "A stack can simulate recursion by explicitly storing the state of each function call, allowing depth-first traversal without using the call stack.",
  },
  {
    question:
      "Which problem can be solved using a stack that keeps track of the current state at each step?",
    options: [
      "Sorting an array",
      "Pathfinding in a graph",
      "Balanced parentheses checking",
      "Shortest path in a graph",
    ],
    correctAnswer: "Balanced parentheses checking",
    explanation:
      "Balanced parentheses checking uses a stack to push opening parentheses and pop them when closing ones are encountered, tracking the state efficiently.",
  },
  {
    question:
      "In which scenario would a stack be the most appropriate data structure to use when solving problems involving backtracking?",
    options: [
      "When you need to maintain a list of recently visited nodes",
      "When you need to reverse the order of operations",
      "When you need to access the most recently added item",
      "When you need to access items in a specific order",
    ],
    correctAnswer: "When you need to access the most recently added item",
    explanation:
      "Backtracking problems can be efficiently solved using a stack because it follows the Last In, First Out (LIFO) principle, allowing you to access the most recent state.",
  },
  {
    question:
      "How can you implement a stack that supports retrieving the minimum element in constant time?",
    options: [
      "Use a hash map to store the minimum values",
      "Use an auxiliary stack to keep track of minimums",
      "Sort the stack on every push operation",
      "Use recursion to find the minimum element",
    ],
    correctAnswer: "Use an auxiliary stack to keep track of minimums",
    explanation:
      "An auxiliary stack can be used to track the minimum elements as new elements are pushed and popped from the main stack.",
  },
  {
    question:
      "What is the advantage of using a stack to solve the problem of evaluating infix expressions with operators and operands?",
    options: [
      "Allows for more efficient expression parsing",
      "Supports constant-time complexity",
      "Eliminates the need for parentheses",
      "Directly evaluates the expression without using operators",
    ],
    correctAnswer: "Allows for more efficient expression parsing",
    explanation:
      "Stacks allow efficient parsing of infix expressions by handling operator precedence and ensuring correct operator application.",
  },
  {
    question:
      "In which case would a stack-based algorithm be more efficient than a recursive solution?",
    options: [
      "When the function calls are deep and the recursion limit is reached",
      "When the function calls are shallow and the recursion is constant",
      "When the recursion depth is small",
      "When the recursion calls are optimized",
    ],
    correctAnswer:
      "When the function calls are deep and the recursion limit is reached",
    explanation:
      "In cases where recursion depth is deep, using a stack-based algorithm prevents stack overflow errors by manually managing the state.",
  },
  {
    question:
      "Which of the following algorithms uses a stack to solve the problem of evaluating postfix expressions?",
    options: [
      "Dijkstra's algorithm",
      "Kruskal's algorithm",
      "Depth-First Search",
      "Shunting Yard algorithm",
    ],
    correctAnswer: "Shunting Yard algorithm",
    explanation:
      "The Shunting Yard algorithm uses a stack to evaluate postfix expressions, handling operator precedence and associativity.",
  },
  {
    question:
      "What is the time complexity of the depth-first traversal algorithm using a stack when applied to a tree with 'n' nodes?",
    options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
    correctAnswer: "O(n)",
    explanation:
      "In depth-first traversal, each node is visited exactly once, resulting in O(n) time complexity for a tree with 'n' nodes.",
  },
  {
    question:
      "Which technique uses a stack to perform the traversal of a graph in a non-recursive manner?",
    options: [
      "Breadth-First Search",
      "Depth-First Search",
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
    ],
    correctAnswer: "Depth-First Search",
    explanation:
      "DFS can be implemented using an explicit stack to simulate the recursion involved in visiting nodes.",
  },
  {
    question:
      "What is the space complexity of using a stack to reverse a linked list in place?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Reversing a linked list using a stack requires storing all the nodes, which results in O(n) space complexity.",
  },
  {
    question:
      "In a stack-based depth-first traversal of a binary tree, how are the nodes visited?",
    options: [
      "From top to bottom",
      "From left to right",
      "From bottom to top",
      "From right to left",
    ],
    correctAnswer: "From top to bottom",
    explanation:
      "In a depth-first traversal using a stack, nodes are visited in a top-to-bottom fashion, with the most recent node being processed first.",
  },
  {
    question:
      "In a stack-based algorithm, what happens if you attempt to push an element onto a full stack implemented using an array?",
    options: [
      "It will overflow the stack",
      "It will throw an exception",
      "It will remove the bottom element to make space",
      "It will discard the new element",
    ],
    correctAnswer: "It will throw an exception",
    explanation:
      "A full stack implemented using an array cannot accept more elements and will throw an exception when a push is attempted.",
  },
  {
    question:
      "What type of stack-based algorithm is often used to solve problems involving evaluating and converting expressions with various operators?",
    options: [
      "Queue-based algorithm",
      "Postfix evaluation algorithm",
      "Infix evaluation algorithm",
      "Shunting Yard algorithm",
    ],
    correctAnswer: "Shunting Yard algorithm",
    explanation:
      "The Shunting Yard algorithm is used to convert infix expressions to postfix expressions, and it uses a stack to handle operators.",
  },
  {
    question:
      "Which operation in a stack is responsible for removing the most recently added element?",
    options: ["Peek", "Push", "Pop", "Top"],
    correctAnswer: "Pop",
    explanation:
      "The 'pop' operation removes the most recently added element from the stack.",
  },
  {
    question:
      "What can be used to enhance the efficiency of a stack when repeatedly finding the minimum or maximum element?",
    options: [
      "Binary Search Tree",
      "Hash Table",
      "Double-ended Queue",
      "Auxiliary stack",
    ],
    correctAnswer: "Auxiliary stack",
    explanation:
      "An auxiliary stack can be used to maintain the minimum or maximum elements, making these operations efficient in constant time.",
  },
];
