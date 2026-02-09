export const test5 = [
  {
    question: "What is the main difference between a graph and a tree?",
    options: [
      "A graph contains cycles, while a tree does not",
      "A tree contains cycles, while a graph does not",
      "A tree is a connected graph with no cycles",
      "A graph has only directed edges",
    ],
    correctAnswer: "A tree is a connected graph with no cycles",
    explanation:
      "A tree is a special type of graph that is connected and has no cycles.",
  },
  {
    question:
      "What is the maximum number of edges in a simple undirected graph with 'n' vertices?",
    options: ["n", "n(n-1)/2", "n^2", "n!"],
    correctAnswer: "n(n-1)/2",
    explanation:
      "The maximum number of edges in a simple undirected graph is given by the formula n(n-1)/2.",
  },
  {
    question: "What is the primary use of a graph traversal algorithm?",
    options: [
      "To calculate the shortest path between two vertices",
      "To visit all the vertices of a graph in a particular order",
      "To find cycles in the graph",
      "To count the number of edges in the graph",
    ],
    correctAnswer: "To visit all the vertices of a graph in a particular order",
    explanation:
      "Graph traversal algorithms are used to visit all the vertices of a graph in a particular order, such as breadth-first or depth-first.",
  },
  {
    question:
      "Which of the following algorithms is used to find a minimum spanning tree in a weighted graph?",
    options: [
      "Bellman-Ford Algorithm",
      "Kruskal's Algorithm",
      "Floyd-Warshall Algorithm",
      "Prim's Algorithm",
    ],
    correctAnswer: "Kruskal's Algorithm",
    explanation:
      "Kruskal's Algorithm is used to find the minimum spanning tree in a weighted graph.",
  },
  {
    question: "In a directed graph, what is an out-degree?",
    options: [
      "The number of edges leaving a vertex",
      "The number of edges entering a vertex",
      "The total number of edges in the graph",
      "The number of self-loops in the graph",
    ],
    correctAnswer: "The number of edges leaving a vertex",
    explanation:
      "In a directed graph, the out-degree of a vertex is the number of edges leaving the vertex.",
  },
  {
    question: "Which of the following graphs has no cycles?",
    options: [
      "A cyclic graph",
      "A tree",
      "A complete graph",
      "A bipartite graph",
    ],
    correctAnswer: "A tree",
    explanation: "A tree is a type of graph that contains no cycles.",
  },
  {
    question:
      "Which graph traversal algorithm is useful for finding the shortest path in a weighted graph?",
    options: [
      "Depth-First Search",
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
      "Breadth-First Search",
    ],
    correctAnswer: "Dijkstra's Algorithm",
    explanation:
      "Dijkstra's Algorithm is commonly used to find the shortest path in a weighted graph.",
  },
  {
    question: "What is a 'leaf' in a tree?",
    options: [
      "A node with no children",
      "A node with no parent",
      "A node that is part of a cycle",
      "A node that connects two subtrees",
    ],
    correctAnswer: "A node with no children",
    explanation: "A leaf in a tree is a node that has no children.",
  },
  {
    question: "What does it mean for a graph to be 'bipartite'?",
    options: [
      "It contains only even cycles",
      "Its vertices can be divided into two sets such that no two vertices in the same set are adjacent",
      "It has a single cycle",
      "Its vertices have only one incoming edge",
    ],
    correctAnswer:
      "Its vertices can be divided into two sets such that no two vertices in the same set are adjacent",
    explanation:
      "A bipartite graph can be colored with two colors such that no two adjacent vertices share the same color.",
  },
  {
    question:
      "Which data structure is typically used to implement the Breadth-First Search algorithm?",
    options: ["Stack", "Queue", "Array", "Hashmap"],
    correctAnswer: "Queue",
    explanation:
      "Breadth-First Search (BFS) is typically implemented using a queue to explore vertices level by level.",
  },
  {
    question: "Which of the following is a characteristic of a complete graph?",
    options: [
      "All vertices are connected by a single edge",
      "Every pair of vertices is connected by an edge",
      "It contains no edges",
      "It is always bipartite",
    ],
    correctAnswer: "Every pair of vertices is connected by an edge",
    explanation:
      "A complete graph is a graph in which every pair of vertices is connected by an edge.",
  },
  {
    question: "What is the purpose of the Floyd-Warshall algorithm?",
    options: [
      "To find the shortest path between two vertices",
      "To find all pairs of shortest paths in a graph",
      "To detect cycles in a graph",
      "To find a minimum spanning tree",
    ],
    correctAnswer: "To find all pairs of shortest paths in a graph",
    explanation:
      "The Floyd-Warshall algorithm is used to find all pairs of shortest paths in a graph.",
  },
  {
    question:
      "What is the time complexity of checking whether a graph contains a cycle using DFS?",
    options: ["O(V + E)", "O(V^2)", "O(E)", "O(log V)"],
    correctAnswer: "O(V + E)",
    explanation:
      "The time complexity of checking for cycles in a graph using DFS is O(V + E), where V is the number of vertices and E is the number of edges.",
  },
  {
    question: "What is an example of a weighted graph?",
    options: [
      "A graph with no edges",
      "A graph where each edge has a weight or cost associated with it",
      "A graph where all vertices are connected",
      "A graph where all vertices have the same degree",
    ],
    correctAnswer:
      "A graph where each edge has a weight or cost associated with it",
    explanation:
      "In a weighted graph, each edge has a weight or cost associated with it, representing some value like distance or cost.",
  },
  {
    question: "What is the degree of a vertex in a directed graph?",
    options: [
      "The number of outgoing edges",
      "The number of incoming edges",
      "The sum of incoming and outgoing edges",
      "The number of vertices connected to it",
    ],
    correctAnswer: "The sum of incoming and outgoing edges",
    explanation:
      "In a directed graph, the degree of a vertex is the sum of its incoming and outgoing edges.",
  },
  {
    question:
      "Which of the following algorithms is used for finding strongly connected components in a directed graph?",
    options: [
      "Kruskal's Algorithm",
      "Prim's Algorithm",
      "Tarjan's Algorithm",
      "Dijkstra's Algorithm",
    ],
    correctAnswer: "Tarjan's Algorithm",
    explanation:
      "Tarjan's Algorithm is used to find strongly connected components in a directed graph.",
  },
  {
    question: "What is the difference between a tree and a forest?",
    options: [
      "A tree is a graph with no cycles, while a forest is a graph with cycles",
      "A tree is a collection of disconnected trees, while a forest is a connected graph",
      "A tree is a connected acyclic graph, while a forest is a collection of disjoint trees",
      "There is no difference between a tree and a forest",
    ],
    correctAnswer:
      "A tree is a connected acyclic graph, while a forest is a collection of disjoint trees",
    explanation:
      "A forest is a collection of disjoint trees, whereas a tree is a connected acyclic graph.",
  },
  {
    question: "What is a spanning tree of a graph?",
    options: [
      "A tree that contains all the vertices of the graph",
      "A tree that contains all the edges of the graph",
      "A tree that contains only the leaf nodes",
      "A tree that has no cycles",
    ],
    correctAnswer: "A tree that contains all the vertices of the graph",
    explanation:
      "A spanning tree of a graph is a tree that includes all the vertices of the graph and some of the edges.",
  },
  {
    question: "What does 'graph coloring' mean?",
    options: [
      "Assigning a color to the vertices of the graph so that adjacent vertices have the same color",
      "Assigning a color to the edges of the graph",
      "Assigning different colors to all vertices",
      "Removing cycles from the graph",
    ],
    correctAnswer:
      "Assigning a color to the vertices of the graph so that adjacent vertices have different colors",
    explanation:
      "Graph coloring is the process of assigning colors to the vertices of a graph such that no two adjacent vertices share the same color.",
  },
  {
    question:
      "Which of the following graph representations uses an adjacency matrix?",
    options: [
      "Array of linked lists",
      "Hash table",
      "2D Array",
      "Array of edges",
    ],
    correctAnswer: "2D Array",
    explanation:
      "An adjacency matrix represents a graph using a 2D array where the element at position (i, j) represents an edge between vertex i and vertex j.",
  },
];
