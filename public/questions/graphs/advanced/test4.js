export const test4 = [
  {
    question:
      "What is the time complexity of the Bellman-Ford algorithm for finding the shortest paths from a single source to all other vertices?",
    options: ["O(V^2)", "O(E log V)", "O(VE)", "O(V^3)"],
    correctAnswer: "O(VE)",
    explanation:
      "The Bellman-Ford algorithm has a time complexity of O(VE), where V is the number of vertices and E is the number of edges.",
  },
  {
    question:
      "In a graph, which of the following properties must hold true for the graph to be considered a tree?",
    options: [
      "It must have exactly one cycle",
      "It must have no cycles and be connected",
      "It must have more than one connected component",
      "It must have at least two leaves",
    ],
    correctAnswer: "It must have no cycles and be connected",
    explanation:
      "A tree is a connected graph with no cycles. It must have exactly V-1 edges for V vertices.",
  },
  {
    question:
      "What type of graph is required for applying Kruskal’s algorithm to find the minimum spanning tree (MST)?",
    options: [
      "A graph with non-negative edge weights",
      "A directed graph",
      "An undirected graph with non-negative edge weights",
      "A fully connected graph",
    ],
    correctAnswer: "An undirected graph with non-negative edge weights",
    explanation:
      "Kruskal's algorithm works on undirected graphs and assumes that the edges have non-negative weights.",
  },
  {
    question:
      "What does a topological sort of a directed acyclic graph (DAG) provide?",
    options: [
      "A cyclic order of the vertices",
      "An ordering of the vertices such that for every directed edge u -> v, vertex u appears before vertex v",
      "An ordering where vertices are sorted based on the number of edges",
      "A random order of the vertices",
    ],
    correctAnswer:
      "An ordering of the vertices such that for every directed edge u -> v, vertex u appears before vertex v",
    explanation:
      "A topological sort of a DAG orders vertices so that for each directed edge u -> v, u appears before v.",
  },
  {
    question:
      "Which of the following is a valid application of a breadth-first search (BFS)?",
    options: [
      "Finding the shortest path in a weighted graph",
      "Cycle detection in directed graphs",
      "Finding the shortest path in an unweighted graph",
      "Finding strongly connected components in a directed graph",
    ],
    correctAnswer: "Finding the shortest path in an unweighted graph",
    explanation:
      "BFS is well-suited for finding the shortest path in unweighted graphs by exploring vertices level by level.",
  },
  {
    question:
      "What is the primary advantage of using an adjacency matrix over an adjacency list in a graph with a dense number of edges?",
    options: [
      "It requires less memory",
      "It allows quicker edge lookup",
      "It can store weights for edges more efficiently",
      "It is better suited for sparse graphs",
    ],
    correctAnswer: "It allows quicker edge lookup",
    explanation:
      "In a dense graph, the adjacency matrix allows O(1) time complexity for edge lookups, making it faster for dense graphs.",
  },
  {
    question:
      "Which algorithm can be used to find all strongly connected components (SCCs) in a directed graph?",
    options: [
      "Dijkstra’s Algorithm",
      "Floyd-Warshall Algorithm",
      "Tarjan’s Algorithm",
      "Kruskal’s Algorithm",
    ],
    correctAnswer: "Tarjan’s Algorithm",
    explanation:
      "Tarjan’s algorithm can find all strongly connected components (SCCs) in a directed graph in linear time.",
  },
  {
    question: "In a graph, what is a strongly connected component (SCC)?",
    options: [
      "A set of vertices that are connected to each other through directed edges",
      "A set of vertices where every vertex is reachable from every other vertex",
      "A cycle in a directed graph",
      "A set of vertices that forms a tree",
    ],
    correctAnswer:
      "A set of vertices where every vertex is reachable from every other vertex",
    explanation:
      "A strongly connected component (SCC) is a maximal subgraph where each vertex is reachable from every other vertex in the component.",
  },
  {
    question:
      "Which of the following algorithms is best suited for finding the shortest paths in a graph with negative edge weights but no negative cycles?",
    options: [
      "Bellman-Ford Algorithm",
      "Dijkstra’s Algorithm",
      "Prim’s Algorithm",
      "Kruskal’s Algorithm",
    ],
    correctAnswer: "Bellman-Ford Algorithm",
    explanation:
      "The Bellman-Ford algorithm can handle graphs with negative edge weights and detects negative weight cycles.",
  },
  {
    question:
      "In a bipartite graph, which of the following properties holds true?",
    options: [
      "Every vertex in one set is connected to every vertex in the other set",
      "Every vertex in one set is connected to at least one vertex in the other set",
      "There is no edge between two vertices in the same set",
      "There is at least one edge between two vertices in the same set",
    ],
    correctAnswer: "There is no edge between two vertices in the same set",
    explanation:
      "In a bipartite graph, there are no edges between vertices within the same set.",
  },
  {
    question:
      "What is the primary characteristic of a graph that is said to be Eulerian?",
    options: [
      "All vertices have even degree",
      "The graph has no cycles",
      "The graph has an even number of edges",
      "All vertices are connected",
    ],
    correctAnswer: "All vertices have even degree",
    explanation:
      "An Eulerian graph is one where all vertices have even degree, and it contains a path or cycle that visits every edge exactly once.",
  },
  {
    question:
      "Which algorithm is used to find the Minimum Spanning Tree (MST) of a graph with edge weights?",
    options: [
      "Kruskal's Algorithm",
      "Dijkstra's Algorithm",
      "Bellman-Ford Algorithm",
      "Floyd-Warshall Algorithm",
    ],
    correctAnswer: "Kruskal's Algorithm",
    explanation:
      "Kruskal’s Algorithm is used to find the Minimum Spanning Tree (MST) by considering edges in ascending order of their weights.",
  },
  {
    question:
      "What is the time complexity of Dijkstra’s algorithm when using a min-heap (priority queue) for a graph with V vertices and E edges?",
    options: ["O(V^2)", "O(E + V log V)", "O(V log E)", "O(V + E log V)"],
    correctAnswer: "O(E + V log V)",
    explanation:
      "Dijkstra’s algorithm using a min-heap has a time complexity of O(E + V log V), where E is the number of edges and V is the number of vertices.",
  },
  {
    question:
      "What is a possible drawback of using an adjacency matrix representation for sparse graphs?",
    options: [
      "Increased space complexity",
      "Reduced edge lookup time",
      "Lower space complexity",
      "Reduced memory usage",
    ],
    correctAnswer: "Increased space complexity",
    explanation:
      "An adjacency matrix consumes O(V^2) space, which is inefficient for sparse graphs where the number of edges (E) is much smaller than V^2.",
  },
  {
    question:
      "In which type of graph traversal is recursion often employed due to its nature of exploring paths deeply before backtracking?",
    options: [
      "Breadth-first search (BFS)",
      "Depth-first search (DFS)",
      "Kruskal's Algorithm",
      "Prim's Algorithm",
    ],
    correctAnswer: "Depth-first search (DFS)",
    explanation:
      "DFS typically uses recursion to explore paths deeply before backtracking to explore other paths.",
  },
  {
    question:
      "Which graph traversal algorithm can be used to find the shortest path in a graph with unweighted edges?",
    options: [
      "Depth-first search (DFS)",
      "Breadth-first search (BFS)",
      "Dijkstra's Algorithm",
      "Floyd-Warshall Algorithm",
    ],
    correctAnswer: "Breadth-first search (BFS)",
    explanation:
      "BFS is ideal for finding the shortest path in an unweighted graph by exploring all vertices at the current depth before moving on to the next level.",
  },
  {
    question:
      "What is the time complexity of the Floyd-Warshall algorithm for finding the shortest paths between all pairs of vertices?",
    options: ["O(V^3)", "O(E log V)", "O(V^2)", "O(VE)"],
    correctAnswer: "O(V^3)",
    explanation:
      "The Floyd-Warshall algorithm has a time complexity of O(V^3), where V is the number of vertices in the graph.",
  },
  {
    question:
      "Which of the following is true about a graph with an Eulerian Circuit?",
    options: [
      "It must have exactly two vertices with odd degree",
      "All vertices must have even degrees",
      "It must have exactly one cycle",
      "It must be a bipartite graph",
    ],
    correctAnswer: "All vertices must have even degrees",
    explanation:
      "An Eulerian Circuit requires that all vertices in the graph have even degrees and that the graph is connected.",
  },
  {
    question: "In the context of a directed graph, what is a 'sink' vertex?",
    options: [
      "A vertex with no outgoing edges",
      "A vertex with no incoming edges",
      "A vertex with at least one outgoing edge",
      "A vertex with at least one incoming edge",
    ],
    correctAnswer: "A vertex with no outgoing edges",
    explanation:
      "A sink vertex is a vertex in a directed graph that has no outgoing edges but may have incoming edges.",
  },
  {
    question:
      "What is the time complexity of the Prim's algorithm when implemented using a binary heap for a graph with V vertices and E edges?",
    options: ["O(E + V log V)", "O(V^2)", "O(E log V)", "O(E + V^2)"],
    correctAnswer: "O(E + V log V)",
    explanation:
      "Prim's algorithm using a binary heap has a time complexity of O(E + V log V).",
  },
  {
    question:
      "In which scenario would a graph with a high number of vertices and low number of edges be better represented using an adjacency list rather than an adjacency matrix?",
    options: [
      "When the graph is dense",
      "When the graph is sparse",
      "When the graph is a tree",
      "When the graph contains cycles",
    ],
    correctAnswer: "When the graph is sparse",
    explanation:
      "For sparse graphs, adjacency lists are more space-efficient as they only store edges, unlike an adjacency matrix which consumes O(V^2) space.",
  },
];
