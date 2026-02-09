export const test5 = [
  {
    question:
      "What is the result of `arr.flat(2)` for `arr = [[1, 2], [3, 4], [5, 6]]`?",
    options: [
      "[1, 2, 3, 4, 5, 6]",
      "[[1, 2], [3, 4], [5, 6]]",
      "[[1, 2, 3, 4], [5, 6]]",
      "[1, 2, 3, 4, 5, 6, []]",
    ],
    correctAnswer: "[1, 2, 3, 4, 5, 6]",
    explanation:
      "The `flat()` method is used to flatten an array up to the specified depth. `flat(2)` flattens the array up to 2 levels deep.",
  },
  {
    question:
      "What will `arr.every(el => el > 5)` return for `arr = [6, 7, 8]`?",
    options: ["true", "false", "undefined", "null"],
    correctAnswer: "true",
    explanation:
      "`every()` checks if all elements satisfy the condition. Here, all elements are greater than `5`, so it returns `true`.",
  },
  {
    question:
      "What is the output of `arr.reduce((acc, val) => acc + val, 0)` for `arr = [1, 2, 3, 4, 5]`?",
    options: ["15", "12", "10", "9"],
    correctAnswer: "15",
    explanation:
      "The `reduce()` method iterates through the array and accumulates the result. Here, the sum of all values is `1 + 2 + 3 + 4 + 5 = 15`.",
  },
  {
    question:
      "Which of the following methods can reverse the contents of an array?",
    options: ["arr.reverse()", "arr.sort()", "arr.flip()", "arr.shift()"],
    correctAnswer: "arr.reverse()",
    explanation:
      "The `reverse()` method reverses the order of elements in an array, modifying the original array.",
  },
  {
    question:
      "What is the time complexity of the `arr.push()` method in JavaScript?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "The `push()` method adds elements to the end of an array in constant time, hence its time complexity is `O(1)`.",
  },
  {
    question: "How can you create a shallow copy of an array in JavaScript?",
    options: ["arr.slice()", "arr.copy()", "arr.clone()", "arr.copyWithin()"],
    correctAnswer: "arr.slice()",
    explanation:
      "`slice()` creates a shallow copy of a portion of an array, returning a new array without modifying the original.",
  },
  {
    question:
      "What will be the result of `arr[5] = 10; arr.length` if `arr = [1, 2, 3, 4, 5]`?",
    options: ["5", "6", "10", "undefined"],
    correctAnswer: "6",
    explanation:
      "When an element is assigned to an index greater than the current array length, the array will expand, and the `length` property will reflect the new length.",
  },
  {
    question: "How can you merge two arrays in JavaScript?",
    options: ["arr.concat()", "arr.append()", "arr.merge()", "arr.add()"],
    correctAnswer: "arr.concat()",
    explanation:
      "The `concat()` method merges two or more arrays and returns a new array without modifying the original arrays.",
  },
  {
    question:
      "What will the expression `arr[2] = 10; arr.splice(1, 1)` result in for `arr = [1, 2, 3, 4]`?",
    options: ["[1, 10, 4]", "[10, 2, 3, 4]", "[1, 10, 4]", "[1, 4]"],
    correctAnswer: "[1, 10, 4]",
    explanation:
      "The assignment `arr[2] = 10` modifies the third element. Then `splice(1, 1)` removes the second element (`2`), leaving `[1, 10, 4]`.",
  },
  {
    question:
      "Which method would you use to sort an array of numbers in descending order?",
    options: [
      "arr.sort((a, b) => a - b)",
      "arr.sort((a, b) => b - a)",
      "arr.reverse()",
      "arr.sort()",
    ],
    correctAnswer: "arr.sort((a, b) => b - a)",
    explanation:
      "To sort an array in descending order, the comparison function `b - a` is used.",
  },
  {
    question:
      "What will `arr.findIndex(x => x > 10)` return for `arr = [1, 5, 10, 15, 20]`?",
    options: ["3", "4", "-1", "2"],
    correctAnswer: "3",
    explanation:
      "The `findIndex()` method returns the index of the first element that satisfies the condition. Here, the first element greater than `10` is `15`, at index `3`.",
  },
  {
    question: "What is the purpose of `Array.from()` method?",
    options: [
      "Creates a new array from an iterable object",
      "Adds elements to an array",
      "Fills the array with elements",
      "Removes the last element from an array",
    ],
    correctAnswer: "Creates a new array from an iterable object",
    explanation:
      "The `Array.from()` method creates a new array instance from an array-like or iterable object.",
  },
  {
    question:
      "What is the output of the following code: `arr = [2, 4, 6]; arr.map(x => x * 2).reduce((a, b) => a + b)`?",
    options: ["24", "12", "16", "8"],
    correctAnswer: "24",
    explanation:
      "The `map()` method doubles each element (`[4, 8, 12]`), and then `reduce()` sums them up (`4 + 8 + 12 = 24`).",
  },
  {
    question: "What is the output of `arr.join('-')` for `arr = [1, 2, 3]`?",
    options: ["1-2-3", "[1, 2, 3]", "123", "1,2,3"],
    correctAnswer: "1-2-3",
    explanation:
      "The `join()` method joins all elements of an array into a single string, with the specified separator (`'-'` in this case).",
  },
  {
    question:
      "How would you remove the first element from an array and return it?",
    options: ["arr.pop()", "arr.shift()", "arr.slice(1)", "arr.delete()"],
    correctAnswer: "arr.shift()",
    explanation:
      "The `shift()` method removes and returns the first element of an array, modifying the original array.",
  },
  {
    question:
      "Which of the following methods is used to execute a function on each element in an array?",
    options: ["arr.each()", "arr.map()", "arr.apply()", "arr.reduce()"],
    correctAnswer: "arr.map()",
    explanation:
      "The `map()` method executes a function on each element of an array and returns a new array with the results.",
  },
  {
    question:
      "Which method would you use to add elements to the beginning of an array?",
    options: ["arr.push()", "arr.shift()", "arr.unshift()", "arr.prepend()"],
    correctAnswer: "arr.unshift()",
    explanation:
      "The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.",
  },
  {
    question:
      "What is the result of `arr.slice(1, -1)` for `arr = [10, 20, 30, 40]`?",
    options: ["[20, 30]", "[30, 40]", "[10, 20, 30]", "[20, 30, 40]"],
    correctAnswer: "[20, 30]",
    explanation:
      "The `slice()` method extracts a portion of the array, starting from index `1` (inclusive) to index `-1` (exclusive), which gives `[20, 30]`.",
  },
  {
    question:
      "What is the time complexity of the `Array.prototype.includes()` method?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "`includes()` checks if an element exists in the array, and in the worst case, it will iterate through all elements, resulting in linear time complexity `O(n)`.",
  },
  {
    question:
      "What will the following code return: `arr = [1, 2, 3]; arr.map(x => x * 2).filter(x => x > 3)`?",
    options: ["[2, 4, 6]", "[4, 6]", "[2, 4]", "[6]"],
    correctAnswer: "[4, 6]",
    explanation:
      "The `map()` method first doubles each element (`[2, 4, 6]`), and then `filter()` keeps only elements greater than `3`, which results in `[4, 6]`.",
  },
  {
    question:
      "Which of the following algorithms is used to find the shortest path from a source to all other vertices in a weighted graph with non-negative weights?",
    options: [
      "Kruskal's Algorithm",
      "Prim's Algorithm",
      "Dijkstra's Algorithm",
      "Bellman-Ford Algorithm",
    ],
    correctAnswer: "Dijkstra's Algorithm",
    explanation:
      "Dijkstra's Algorithm is used to find the shortest path from a source vertex to all other vertices in a weighted graph with non-negative weights.",
  },
  {
    question:
      "In which data structure is a graph most efficiently stored if we frequently check if there is an edge between two vertices?",
    options: [
      "Adjacency list",
      "Adjacency matrix",
      "Incidence matrix",
      "Edge list",
    ],
    correctAnswer: "Adjacency matrix",
    explanation:
      "An adjacency matrix is most efficient for checking if an edge exists between two vertices, as it provides O(1) time complexity for edge lookup.",
  },
  {
    question:
      "What is the primary condition for a graph to have a Hamiltonian Cycle?",
    options: [
      "The graph must have exactly one cycle",
      "The graph must be fully connected and have no isolated vertices",
      "The graph must be bipartite",
      "The graph must have exactly two odd-degree vertices",
    ],
    correctAnswer:
      "The graph must be fully connected and have no isolated vertices",
    explanation:
      "For a graph to have a Hamiltonian Cycle, it must be fully connected with no isolated vertices, as the cycle must visit all vertices.",
  },
  {
    question:
      "In a directed acyclic graph (DAG), which traversal method is used to order the vertices based on their dependencies?",
    options: [
      "In-order Traversal",
      "Pre-order Traversal",
      "Post-order Traversal",
      "Topological Sorting",
    ],
    correctAnswer: "Topological Sorting",
    explanation:
      "Topological sorting is used to order the vertices of a Directed Acyclic Graph (DAG) based on dependencies, ensuring that each vertex appears before its dependent vertices.",
  },
  {
    question:
      "Which algorithm is preferred for finding the shortest path in a graph with negative edge weights but no negative weight cycles?",
    options: [
      "Kruskal's Algorithm",
      "Bellman-Ford Algorithm",
      "Dijkstra's Algorithm",
      "Floyd-Warshall Algorithm",
    ],
    correctAnswer: "Bellman-Ford Algorithm",
    explanation:
      "The Bellman-Ford Algorithm is used to find the shortest path in graphs with negative edge weights. It can also detect negative weight cycles.",
  },
  {
    question:
      "How does a depth-first traversal (DFS) differ from a breadth-first traversal (BFS) in terms of exploration?",
    options: [
      "DFS explores all vertices at the current level before moving deeper",
      "DFS uses a queue for exploration",
      "DFS explores paths deeply first, while BFS explores paths level by level",
      "DFS is less efficient for sparse graphs than BFS",
    ],
    correctAnswer:
      "DFS explores paths deeply first, while BFS explores paths level by level",
    explanation:
      "DFS explores a path deeply before backtracking, while BFS explores all vertices at the current level before moving on to the next.",
  },
  {
    question:
      "What is the time complexity of the Bellman-Ford algorithm for finding shortest paths from a single source vertex to all other vertices in a graph with V vertices and E edges?",
    options: ["O(E log V)", "O(V^2)", "O(EV)", "O(V^3)"],
    correctAnswer: "O(VE)",
    explanation:
      "The Bellman-Ford algorithm has a time complexity of O(VE), where V is the number of vertices and E is the number of edges.",
  },
  {
    question:
      "In a graph, which traversal technique can be used to determine if the graph contains a cycle?",
    options: [
      "In-order traversal",
      "Depth-first traversal",
      "Breadth-first traversal",
      "Topological sorting",
    ],
    correctAnswer: "Depth-first traversal",
    explanation:
      "DFS can be used to detect cycles in a graph. If a back edge is found during traversal, the graph contains a cycle.",
  },
  {
    question:
      "Which type of graph is best suited for representing hierarchical structures, such as file systems or organizational charts?",
    options: ["Undirected graph", "Directed graph", "Weighted graph", "Tree"],
    correctAnswer: "Tree",
    explanation:
      "A tree is a type of graph that is well-suited for representing hierarchical structures, with a single root and no cycles.",
  },
  {
    question:
      "In a graph with weighted edges, which of the following algorithms is used to find the Minimum Spanning Tree (MST)?",
    options: [
      "Floyd-Warshall Algorithm",
      "Prim's Algorithm",
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
    ],
    correctAnswer: "Kruskal's Algorithm",
    explanation:
      "Kruskal’s Algorithm is used to find the Minimum Spanning Tree (MST) by considering edges in increasing order of their weights and using a union-find data structure.",
  },
];
