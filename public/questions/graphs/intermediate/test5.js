export const test5 = [
  {
    question: "Which of the following is an example of a complete graph?",
    options: [
      "A graph where every vertex is connected to every other vertex",
      "A graph where no two vertices are connected",
      "A graph with a single vertex",
      "A graph with only one edge",
    ],
    correctAnswer:
      "A graph where every vertex is connected to every other vertex",
    explanation:
      "A complete graph is a graph where every vertex is connected to every other vertex by an edge.",
  },
  {
    question: "What does it mean for a graph to be planar?",
    options: [
      "It can be drawn in a plane without any edges crossing",
      "It has a Hamiltonian cycle",
      "It is a connected graph",
      "It is a graph with no vertices of degree 2",
    ],
    correctAnswer: "It can be drawn in a plane without any edges crossing",
    explanation:
      "A planar graph is one that can be drawn on a plane without any of its edges crossing.",
  },
  {
    question:
      "Which algorithm is used to find the minimum spanning tree of a graph?",
    options: [
      "Kruskal’s Algorithm",
      "Dijkstra’s Algorithm",
      "Bellman-Ford Algorithm",
      "Floyd-Warshall Algorithm",
    ],
    correctAnswer: "Kruskal’s Algorithm",
    explanation:
      "Kruskal's algorithm is a greedy algorithm that finds the minimum spanning tree by sorting edges and adding them to the tree as long as they don't form a cycle.",
  },
  {
    question: "In a graph, what does a cycle mean?",
    options: [
      "A sequence of edges where no vertex is repeated",
      "A sequence of edges where at least one vertex is repeated",
      "A graph with no vertices",
      "A graph where all vertices have an equal degree",
    ],
    correctAnswer: "A sequence of edges where at least one vertex is repeated",
    explanation:
      "A cycle in a graph is a path that starts and ends at the same vertex, involving at least one repeated vertex.",
  },
  {
    question: "In a directed graph, what is an in-degree of a vertex?",
    options: [
      "The number of edges leaving the vertex",
      "The number of edges incident to the vertex",
      "The number of edges entering the vertex",
      "The sum of the weights of all edges connected to the vertex",
    ],
    correctAnswer: "The number of edges entering the vertex",
    explanation:
      "In-degree refers to the number of edges that point to a vertex in a directed graph.",
  },
  {
    question: "Which graph traversal algorithm uses a stack?",
    options: ["BFS", "DFS", "Kruskal’s Algorithm", "Dijkstra’s Algorithm"],
    correctAnswer: "DFS",
    explanation:
      "DFS (Depth-First Search) uses a stack to keep track of vertices as it explores the graph.",
  },
  {
    question:
      "Which algorithm is best suited for finding the shortest path in a weighted graph with negative weights?",
    options: [
      "Prim’s Algorithm",
      "Dijkstra’s Algorithm",
      "Floyd-Warshall Algorithm",
      "Bellman-Ford Algorithm",
    ],
    correctAnswer: "Bellman-Ford Algorithm",
    explanation:
      "The Bellman-Ford algorithm can handle graphs with negative weights and can also detect negative weight cycles.",
  },
  {
    question:
      "What is the time complexity of Dijkstra's algorithm using a priority queue?",
    options: ["O(V^2)", "O(V + E)", "O(E log V)", "O(V log E)"],
    correctAnswer: "O(E log V)",
    explanation:
      "Using a priority queue, Dijkstra's algorithm has a time complexity of O(E log V), where E is the number of edges and V is the number of vertices.",
  },
  {
    question:
      "Which of the following graph traversal techniques guarantees visiting all nodes in the shortest path order in an unweighted graph?",
    options: ["DFS", "BFS", "Floyd-Warshall", "Kruskal’s Algorithm"],
    correctAnswer: "BFS",
    explanation:
      "BFS (Breadth-First Search) guarantees visiting all nodes in the shortest path order in an unweighted graph.",
  },
  {
    question: "Which of the following is true about an acyclic graph?",
    options: [
      "It contains at least one cycle",
      "It contains no cycles",
      "It has more edges than vertices",
      "It has no isolated vertices",
    ],
    correctAnswer: "It contains no cycles",
    explanation:
      "An acyclic graph is a graph that does not contain any cycles.",
  },
  {
    question: "What is the main purpose of the Floyd-Warshall algorithm?",
    options: [
      "To find the shortest path between two nodes in a graph",
      "To detect negative weight cycles in a graph",
      "To find the shortest path between all pairs of nodes in a graph",
      "To compute the minimum spanning tree of a graph",
    ],
    correctAnswer:
      "To find the shortest path between all pairs of nodes in a graph",
    explanation:
      "The Floyd-Warshall algorithm is used to find the shortest paths between all pairs of nodes in a graph.",
  },
  {
    question: "Which of the following describes a bipartite graph?",
    options: [
      "A graph that has no cycles",
      "A graph that can be divided into two disjoint sets of vertices where no two vertices within the same set are connected",
      "A graph where all vertices are connected",
      "A graph where every vertex has an odd degree",
    ],
    correctAnswer:
      "A graph that can be divided into two disjoint sets of vertices where no two vertices within the same set are connected",
    explanation:
      "A bipartite graph is a graph whose vertices can be divided into two disjoint sets such that no two vertices within the same set are connected.",
  },
  {
    question:
      "What is the time complexity of Prim’s algorithm for finding the minimum spanning tree using a priority queue?",
    options: ["O(V^2)", "O(V log V)", "O(E log V)", "O(V + E)"],
    correctAnswer: "O(E log V)",
    explanation:
      "Prim's algorithm has a time complexity of O(E log V) when implemented using a priority queue.",
  },
  {
    question: "What is the purpose of a topological sort in a directed graph?",
    options: [
      "To find the shortest path between two nodes",
      "To list the nodes in the order of decreasing degree",
      "To order the vertices such that for every directed edge u → v, u comes before v",
      "To detect cycles in the graph",
    ],
    correctAnswer:
      "To order the vertices such that for every directed edge u → v, u comes before v",
    explanation:
      "Topological sorting orders the vertices of a directed graph such that for every directed edge u → v, u comes before v in the ordering.",
  },
  {
    question: "What is the degree of a vertex in an undirected graph?",
    options: [
      "The number of edges that connect to the vertex",
      "The number of vertices that are adjacent to the vertex",
      "The number of edges that leave the vertex",
      "The number of times the vertex appears in the graph",
    ],
    correctAnswer: "The number of edges that connect to the vertex",
    explanation:
      "The degree of a vertex in an undirected graph is the number of edges connected to that vertex.",
  },
  {
    question: "Which of the following is a correct statement about a tree?",
    options: [
      "A tree has exactly one cycle",
      "A tree is a connected graph with no cycles",
      "A tree can have multiple roots",
      "A tree has exactly two vertices",
    ],
    correctAnswer: "A tree is a connected graph with no cycles",
    explanation:
      "A tree is a connected acyclic graph, meaning it has no cycles.",
  },
  {
    question:
      "Which traversal technique is best for searching the nearest node in a graph?",
    options: [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Dijkstra’s Algorithm",
      "Prim’s Algorithm",
    ],
    correctAnswer: "Breadth-First Search (BFS)",
    explanation:
      "Breadth-First Search (BFS) explores the graph level by level and is best for finding the shortest path or the nearest node in an unweighted graph.",
  },
  {
    question:
      "Which of the following graph algorithms is used to find the shortest path from a source vertex to all other vertices in a graph with positive edge weights?",
    options: [
      "Kruskal's Algorithm",
      "Bellman-Ford Algorithm",
      "Dijkstra’s Algorithm",
      "Floyd-Warshall Algorithm",
    ],
    correctAnswer: "Dijkstra’s Algorithm",
    explanation:
      "Dijkstra’s Algorithm is used to find the shortest path from a source vertex to all other vertices in a graph with positive edge weights.",
  },
  {
    question:
      "In a graph with weighted edges, which of the following algorithms is used to compute the minimum spanning tree?",
    options: [
      "Bellman-Ford Algorithm",
      "Kruskal’s Algorithm",
      "Dijkstra’s Algorithm",
      "Floyd-Warshall Algorithm",
    ],
    correctAnswer: "Kruskal’s Algorithm",
    explanation:
      "Kruskal’s Algorithm is a greedy algorithm that is used to compute the minimum spanning tree for a graph with weighted edges.",
  },
  {
    question:
      "What is the characteristic of a strongly connected directed graph?",
    options: [
      "Every vertex is reachable from every other vertex",
      "No two vertices are connected by a path",
      "Each vertex has the same number of incoming and outgoing edges",
      "The graph contains a cycle",
    ],
    correctAnswer: "Every vertex is reachable from every other vertex",
    explanation:
      "In a strongly connected directed graph, every vertex is reachable from every other vertex.",
  },
];
