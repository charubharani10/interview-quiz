export const test1 = [
  {
    question: "What is the time complexity of BFS in a graph?",
    options: ["O(V)", "O(E)", "O(V + E)", "O(E^2)"],
    correctAnswer: "O(V + E)",
    explanation:
      "Breadth-First Search (BFS) has a time complexity of O(V + E), where V is the number of vertices and E is the number of edges.",
  },
  {
    question: "Which of the following is true about a tree in graph theory?",
    options: [
      "A tree is a connected graph with no cycles",
      "A tree is always a complete graph",
      "A tree contains at least one cycle",
      "A tree has more edges than vertices",
    ],
    correctAnswer: "A tree is a connected graph with no cycles",
    explanation:
      "A tree is a type of graph that is connected and contains no cycles.",
  },
  {
    question:
      "What is the primary characteristic of a strongly connected directed graph?",
    options: [
      "Every vertex can reach every other vertex",
      "Every vertex has exactly two edges",
      "All edges are directed",
      "No vertex is isolated",
    ],
    correctAnswer: "Every vertex can reach every other vertex",
    explanation:
      "In a strongly connected directed graph, there is a path from each vertex to every other vertex.",
  },
  {
    question:
      "Which algorithm is used to find the Minimum Spanning Tree (MST) of a graph?",
    options: [
      "Dijkstra's Algorithm",
      "Prim's Algorithm",
      "Bellman-Ford Algorithm",
      "Floyd-Warshall Algorithm",
    ],
    correctAnswer: "Prim's Algorithm",
    explanation:
      "Prim's Algorithm is commonly used to find the Minimum Spanning Tree (MST) of a graph.",
  },
  {
    question:
      "Which graph traversal technique is best suited for finding the shortest path in an unweighted graph?",
    options: [
      "Depth-First Search",
      "Breadth-First Search",
      "Dijkstra's Algorithm",
      "Bellman-Ford Algorithm",
    ],
    correctAnswer: "Breadth-First Search",
    explanation:
      "Breadth-First Search (BFS) is ideal for finding the shortest path in an unweighted graph, as it explores vertices in layers.",
  },
  {
    question: "What is a directed acyclic graph (DAG)?",
    options: [
      "A graph with no cycles",
      "A graph where edges have directions and contain no cycles",
      "A graph with all vertices connected to each other",
      "A graph that can be traversed using BFS only",
    ],
    correctAnswer: "A graph where edges have directions and contain no cycles",
    explanation:
      "A Directed Acyclic Graph (DAG) is a directed graph with no cycles, often used in scheduling and dependency resolution.",
  },
  {
    question: "What is the difference between BFS and DFS?",
    options: [
      "DFS uses a queue, BFS uses a stack",
      "DFS explores all neighbors of a vertex before moving to the next, BFS explores level by level",
      "DFS always finds the shortest path, BFS never does",
      "DFS is faster than BFS in all cases",
    ],
    correctAnswer:
      "DFS explores all neighbors of a vertex before moving to the next, BFS explores level by level",
    explanation:
      "DFS (Depth-First Search) explores as deep as possible before backtracking, whereas BFS (Breadth-First Search) explores all vertices at the current level before moving to the next.",
  },
  {
    question: "What is a bipartite graph?",
    options: [
      "A graph with an even number of vertices",
      "A graph whose vertices can be divided into two disjoint sets such that no two vertices within the same set are adjacent",
      "A graph with no edges",
      "A graph with a Hamiltonian cycle",
    ],
    correctAnswer:
      "A graph whose vertices can be divided into two disjoint sets such that no two vertices within the same set are adjacent",
    explanation:
      "A bipartite graph has two disjoint sets of vertices where no two vertices within the same set are adjacent.",
  },
  {
    question:
      "Which of the following algorithms can be used to find the shortest path in a graph with negative edge weights?",
    options: [
      "Dijkstra's Algorithm",
      "Bellman-Ford Algorithm",
      "Kruskal's Algorithm",
      "Prim's Algorithm",
    ],
    correctAnswer: "Bellman-Ford Algorithm",
    explanation:
      "Bellman-Ford Algorithm can handle graphs with negative edge weights, unlike Dijkstra's Algorithm.",
  },
  {
    question: "Which of the following describes a complete graph?",
    options: [
      "A graph in which every vertex is connected to exactly one other vertex",
      "A graph in which every pair of distinct vertices is connected by a unique edge",
      "A graph where all vertices have the same degree",
      "A graph with no edges",
    ],
    correctAnswer:
      "A graph in which every pair of distinct vertices is connected by a unique edge",
    explanation:
      "A complete graph is one where every pair of distinct vertices is connected by a unique edge.",
  },
  {
    question: "What is the primary difference between a tree and a graph?",
    options: [
      "A tree has no cycles, but a graph may have cycles",
      "A tree is directed, but a graph is undirected",
      "A tree has more edges than vertices",
      "A tree is disconnected, but a graph is connected",
    ],
    correctAnswer: "A tree has no cycles, but a graph may have cycles",
    explanation:
      "A tree is a special kind of graph that is connected and acyclic, whereas a graph may contain cycles.",
  },
  {
    question: "What is a degree of a vertex in a graph?",
    options: [
      "The number of vertices connected to it",
      "The number of edges connected to it",
      "The number of vertices not connected to it",
      "The number of edges connected to it, divided by the total number of vertices",
    ],
    correctAnswer: "The number of edges connected to it",
    explanation:
      "The degree of a vertex is defined as the number of edges connected to it.",
  },
  {
    question:
      "What is the time complexity of Dijkstra’s algorithm using an adjacency list and a binary heap?",
    options: ["O(V + E)", "O(V log V + E log V)", "O(V^2)", "O(E log E)"],
    correctAnswer: "O(V log V + E log V)",
    explanation:
      "Dijkstra's algorithm with an adjacency list and binary heap has a time complexity of O(V log V + E log V).",
  },
  {
    question:
      "Which of the following is not a valid traversal technique for a graph?",
    options: [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Dijkstra’s Algorithm",
      "Binary Search",
    ],
    correctAnswer: "Binary Search",
    explanation:
      "Binary Search is not a graph traversal technique. It is used for searching in sorted arrays.",
  },
  {
    question:
      "In a directed graph, if there is an edge from vertex A to vertex B, what is the corresponding adjacency matrix entry?",
    options: [
      "1 at position (A, B)",
      "0 at position (A, B)",
      "1 at position (B, A)",
      "No entry",
    ],
    correctAnswer: "1 at position (A, B)",
    explanation:
      "In an adjacency matrix of a directed graph, an edge from vertex A to vertex B is represented by a 1 at position (A, B).",
  },
  {
    question:
      "Which traversal algorithm would you use to find the shortest path in an unweighted graph?",
    options: [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Dijkstra’s Algorithm",
      "Kruskal’s Algorithm",
    ],
    correctAnswer: "Breadth-First Search (BFS)",
    explanation:
      "BFS is ideal for finding the shortest path in an unweighted graph, as it explores vertices level by level.",
  },
  {
    question:
      "In which type of graph does each edge connect two vertices with an undirected edge?",
    options: [
      "Directed graph",
      "Undirected graph",
      "Weighted graph",
      "Cyclic graph",
    ],
    correctAnswer: "Undirected graph",
    explanation:
      "In an undirected graph, edges have no direction and connect two vertices.",
  },
  {
    question: "Which of the following is true for a complete bipartite graph?",
    options: [
      "It has only one set of vertices",
      "Each vertex in one set is connected to every vertex in the other set",
      "It contains cycles",
      "It is always a directed graph",
    ],
    correctAnswer:
      "Each vertex in one set is connected to every vertex in the other set",
    explanation:
      "In a complete bipartite graph, vertices are divided into two sets, and every vertex in one set is connected to every vertex in the other set.",
  },
  {
    question:
      "What is the space complexity of an adjacency matrix representation of a graph with V vertices and E edges?",
    options: ["O(V)", "O(V + E)", "O(V^2)", "O(E^2)"],
    correctAnswer: "O(V^2)",
    explanation:
      "The adjacency matrix representation requires O(V^2) space, as it uses a V × V matrix to store all possible edges.",
  },
  {
    question: "In which graph traversal algorithm is a stack used?",
    options: [
      "Breadth-First Search (BFS)",
      "Depth-First Search (DFS)",
      "Dijkstra’s Algorithm",
      "Kruskal’s Algorithm",
    ],
    correctAnswer: "Depth-First Search (DFS)",
    explanation:
      "Depth-First Search (DFS) uses a stack (either explicitly or via recursion) to explore the graph.",
  },
];
