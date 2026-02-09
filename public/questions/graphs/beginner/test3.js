export const test3 = [
  {
    question: "What is the degree of a vertex in a graph?",
    options: [
      "The number of edges connected to the vertex",
      "The number of vertices adjacent to the vertex",
      "The number of outgoing edges from a vertex",
      "The number of incoming edges to a vertex",
    ],
    correctAnswer: "The number of edges connected to the vertex",
    explanation:
      "The degree of a vertex in a graph is the number of edges incident to it.",
  },
  {
    question:
      "What is the time complexity of checking if a graph is connected using Depth-First Search (DFS)?",
    options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V)"],
    correctAnswer: "O(V + E)",
    explanation:
      "DFS checks if a graph is connected in O(V + E) time, where V is the number of vertices and E is the number of edges.",
  },
  {
    question: "What is a directed graph?",
    options: [
      "A graph where all edges have a direction from one vertex to another",
      "A graph where all edges are undirected",
      "A graph that only contains a cycle",
      "A graph where each vertex has a degree of 2",
    ],
    correctAnswer:
      "A graph where all edges have a direction from one vertex to another",
    explanation:
      "A directed graph (or digraph) is a graph where edges have direction, going from one vertex to another.",
  },
  {
    question: "What is a weighted graph?",
    options: [
      "A graph where each vertex has a weight",
      "A graph where each edge has a weight or cost associated with it",
      "A graph with no edges",
      "A graph that only contains directed edges",
    ],
    correctAnswer:
      "A graph where each edge has a weight or cost associated with it",
    explanation:
      "A weighted graph is a graph where each edge has an associated weight or cost, often representing distance or other measures.",
  },
  {
    question: "Which of the following is true for a tree graph?",
    options: [
      "It is a connected, undirected graph with no cycles",
      "It is an acyclic directed graph",
      "It is a graph that contains cycles",
      "It is a graph with only one vertex",
    ],
    correctAnswer: "It is a connected, undirected graph with no cycles",
    explanation:
      "A tree is a connected, acyclic graph, meaning it has no cycles.",
  },
  {
    question: "Which graph traversal technique uses a queue?",
    options: [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
    ],
    correctAnswer: "Breadth-First Search (BFS)",
    explanation:
      "Breadth-First Search (BFS) uses a queue to explore vertices level by level.",
  },
  {
    question: "In which case is a graph said to be cyclic?",
    options: [
      "When it has no edges",
      "When it has only one vertex",
      "When it has a closed loop or cycle",
      "When all vertices have even degree",
    ],
    correctAnswer: "When it has a closed loop or cycle",
    explanation:
      "A cyclic graph contains a cycle, which is a path that starts and ends at the same vertex without repeating any edges.",
  },
  {
    question:
      "What is the difference between an adjacency matrix and an adjacency list?",
    options: [
      "An adjacency matrix uses lists to store vertices, while an adjacency list stores edges",
      "An adjacency matrix is more space-efficient than an adjacency list",
      "An adjacency matrix is a 2D array representing edges, while an adjacency list is an array of lists representing edges",
      "An adjacency matrix can only be used for undirected graphs",
    ],
    correctAnswer:
      "An adjacency matrix is a 2D array representing edges, while an adjacency list is an array of lists representing edges",
    explanation:
      "An adjacency matrix is a 2D array that stores connections between vertices, while an adjacency list uses arrays or linked lists for each vertex to store its neighbors.",
  },
  {
    question:
      "What is the time complexity of Depth-First Search (DFS) in a graph with V vertices and E edges?",
    options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V)"],
    correctAnswer: "O(V + E)",
    explanation:
      "The time complexity of DFS is O(V + E), where V is the number of vertices and E is the number of edges.",
  },
  {
    question: "In a graph, what is an isomorphism?",
    options: [
      "A graph with the same number of vertices",
      "A one-to-one correspondence between vertices and edges of two graphs",
      "A graph with only directed edges",
      "A graph that is bipartite",
    ],
    correctAnswer:
      "A one-to-one correspondence between vertices and edges of two graphs",
    explanation:
      "Two graphs are isomorphic if there exists a one-to-one correspondence between their vertices and edges, meaning they are structurally identical.",
  },
  {
    question: "What is the degree sequence of a graph?",
    options: [
      "The number of vertices in the graph",
      "The number of edges in the graph",
      "The list of degrees of each vertex in a graph",
      "The number of connected components in the graph",
    ],
    correctAnswer: "The list of degrees of each vertex in a graph",
    explanation:
      "The degree sequence of a graph is the list of degrees of each vertex, usually in non-decreasing or non-increasing order.",
  },
  {
    question: "What is a leaf node in a tree?",
    options: [
      "A node with no children",
      "A node with exactly one child",
      "A node connected to only one edge",
      "A node with the highest degree",
    ],
    correctAnswer: "A node with no children",
    explanation: "A leaf node in a tree is a node that has no children.",
  },
  {
    question: "Which of the following is true about a complete graph?",
    options: [
      "It has exactly one edge connecting every pair of vertices",
      "It has no cycles",
      "All vertices have the same degree",
      "It contains a cycle",
    ],
    correctAnswer: "It has exactly one edge connecting every pair of vertices",
    explanation:
      "In a complete graph, every pair of vertices is connected by exactly one edge.",
  },
  {
    question: "How can a graph be represented using an adjacency list?",
    options: [
      "Each vertex is stored as an array",
      "Each vertex is represented by a linked list of its neighbors",
      "Each edge is represented by a matrix",
      "Each vertex is represented by a pair of coordinates",
    ],
    correctAnswer:
      "Each vertex is represented by a linked list of its neighbors",
    explanation:
      "An adjacency list represents each vertex as a linked list containing its neighboring vertices.",
  },
  {
    question: "Which of the following is not a type of graph?",
    options: [
      "Complete graph",
      "Bipartite graph",
      "Linear graph",
      "Tree graph",
    ],
    correctAnswer: "Linear graph",
    explanation:
      "A linear graph is not a specific type of graph in graph theory. The correct types include complete, bipartite, and tree graphs.",
  },
  {
    question: "What does the adjacency matrix of a graph represent?",
    options: [
      "The number of vertices in the graph",
      "The number of cycles in the graph",
      "A 2D array that shows whether pairs of vertices are adjacent or not",
      "The degree of each vertex in the graph",
    ],
    correctAnswer:
      "A 2D array that shows whether pairs of vertices are adjacent or not",
    explanation:
      "The adjacency matrix is a 2D array where each element indicates whether a pair of vertices is connected by an edge.",
  },
  {
    question: "What is a Hamiltonian path?",
    options: [
      "A path that visits every vertex exactly once",
      "A path that visits every edge exactly once",
      "A path that forms a cycle",
      "A path that only connects leaf nodes",
    ],
    correctAnswer: "A path that visits every vertex exactly once",
    explanation:
      "A Hamiltonian path is a path in a graph that visits every vertex exactly once.",
  },
  {
    question:
      "What is the time complexity of checking if a graph is bipartite using BFS?",
    options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V)"],
    correctAnswer: "O(V + E)",
    explanation:
      "Checking if a graph is bipartite using BFS takes O(V + E) time, where V is the number of vertices and E is the number of edges.",
  },
  {
    question: "What is a cut in a graph?",
    options: [
      "A set of edges that separates a graph into two disjoint sets",
      "A set of vertices that separates a graph into two disjoint sets",
      "A node with no adjacent edges",
      "A graph with no cycles",
    ],
    correctAnswer:
      "A set of edges that separates a graph into two disjoint sets",
    explanation:
      "A cut is a partition of the graph's vertices into two disjoint subsets, and it is defined by the edges between these subsets.",
  },
  {
    question: "What is a bridge in a graph?",
    options: [
      "An edge that is not part of any cycle",
      "A vertex with the highest degree",
      "An edge that connects two disjoint graphs",
      "A path between two vertices",
    ],
    correctAnswer: "An edge that is not part of any cycle",
    explanation:
      "A bridge (or cut-edge) is an edge whose removal increases the number of connected components in the graph.",
  },
];
