export const test1 = [
  {
    question:
      "Which algorithm is best suited to find the maximum flow in a network flow graph?",
    options: [
      "Kruskal's Algorithm",
      "Ford-Fulkerson Algorithm",
      "Dijkstra's Algorithm",
      "Bellman-Ford Algorithm",
    ],
    correctAnswer: "Ford-Fulkerson Algorithm",
    explanation:
      "The Ford-Fulkerson algorithm is used to compute the maximum flow in a flow network.",
  },
  {
    question:
      "What is the time complexity of Dijkstra's algorithm when implemented with a priority queue?",
    options: ["O(V^2)", "O(E log V)", "O(V log V + E)", "O(E + V log V)"],
    correctAnswer: "O(E log V)",
    explanation:
      "When implemented with a priority queue, Dijkstra's algorithm has a time complexity of O(E log V).",
  },
  {
    question:
      "What is the characteristic of a strongly connected component (SCC) in a directed graph?",
    options: [
      "Every vertex is reachable from every other vertex within the same SCC",
      "There is exactly one cycle in an SCC",
      "SCC is a connected subgraph in an undirected graph",
      "SCC can contain multiple disconnected vertices",
    ],
    correctAnswer:
      "Every vertex is reachable from every other vertex within the same SCC",
    explanation:
      "A strongly connected component is a maximal subgraph where every vertex is reachable from every other vertex within the same component.",
  },
  {
    question:
      "Which algorithm is used to find the minimum spanning tree for a graph with negative weights?",
    options: [
      "Prim’s Algorithm",
      "Kruskal’s Algorithm",
      "Dijkstra’s Algorithm",
      "Bellman-Ford Algorithm",
    ],
    correctAnswer: "Kruskal’s Algorithm",
    explanation:
      "Kruskal's Algorithm can find the minimum spanning tree even if the graph has negative edge weights.",
  },
  {
    question:
      "In a graph with a maximum degree of D, what is the maximum possible number of edges in a simple graph?",
    options: ["D * (D - 1)", "D * V", "D * (V - 1) / 2", "V * (V - 1) / 2"],
    correctAnswer: "D * (V - 1) / 2",
    explanation:
      "In a simple graph with a maximum degree D, the maximum number of edges is D * (V - 1) / 2.",
  },
  {
    question:
      "Which of the following is NOT a necessary condition for a graph to be Eulerian?",
    options: [
      "All vertices must have an even degree",
      "The graph must be connected",
      "The graph must be directed",
      "The graph must have exactly one connected component",
    ],
    correctAnswer: "The graph must be directed",
    explanation:
      "A graph is Eulerian if all vertices have even degree, the graph is connected, and it is undirected.",
  },
  {
    question:
      "Which algorithm is used to find the shortest path in a graph with negative edge weights?",
    options: [
      "Kruskal’s Algorithm",
      "Bellman-Ford Algorithm",
      "Floyd-Warshall Algorithm",
      "Dijkstra’s Algorithm",
    ],
    correctAnswer: "Bellman-Ford Algorithm",
    explanation:
      "Bellman-Ford Algorithm is used to find the shortest paths in a graph with negative edge weights and to detect negative weight cycles.",
  },
  {
    question:
      "What is the time complexity of the Floyd-Warshall algorithm for finding all-pairs shortest paths?",
    options: ["O(V^2)", "O(V^3)", "O(E log V)", "O(VE)"],
    correctAnswer: "O(V^3)",
    explanation:
      "The time complexity of Floyd-Warshall for finding all-pairs shortest paths is O(V^3), where V is the number of vertices.",
  },
  {
    question:
      "What is the main purpose of a topological sort in a directed acyclic graph (DAG)?",
    options: [
      "To list the nodes in the order of decreasing in-degrees",
      "To find the shortest path in a DAG",
      "To order the vertices so that for every directed edge u → v, u comes before v",
      "To detect the presence of cycles",
    ],
    correctAnswer:
      "To order the vertices so that for every directed edge u → v, u comes before v",
    explanation:
      "Topological sorting orders vertices in a DAG such that for every directed edge u → v, vertex u appears before v.",
  },
  {
    question:
      "Which of the following algorithms can be used to detect negative weight cycles in a graph?",
    options: [
      "Dijkstra’s Algorithm",
      "Floyd-Warshall Algorithm",
      "Bellman-Ford Algorithm",
      "Prim’s Algorithm",
    ],
    correctAnswer: "Bellman-Ford Algorithm",
    explanation:
      "The Bellman-Ford Algorithm can detect negative weight cycles in a graph.",
  },
  {
    question:
      "In a directed graph, what does a strongly connected component (SCC) imply?",
    options: [
      "A subgraph where every node can reach every other node",
      "A subgraph that has no cycles",
      "A subgraph where all nodes have the same in-degree",
      "A subgraph with exactly one vertex",
    ],
    correctAnswer: "A subgraph where every node can reach every other node",
    explanation:
      "A strongly connected component (SCC) is a subgraph in which every node can reach every other node within that component.",
  },
  {
    question:
      "In a graph, which of the following is a correct property of a bipartite graph?",
    options: [
      "All vertices can be colored using two colors without adjacent vertices having the same color",
      "There are no self-loops in the graph",
      "The graph contains no cycles",
      "Each vertex has the same degree",
    ],
    correctAnswer:
      "All vertices can be colored using two colors without adjacent vertices having the same color",
    explanation:
      "A bipartite graph can be colored using two colors such that no adjacent vertices have the same color.",
  },
  {
    question:
      "Which of the following graph traversal algorithms can be used to detect a cycle in an undirected graph?",
    options: [
      "Depth First Search (DFS)",
      "Breadth First Search (BFS)",
      "Bellman-Ford Algorithm",
      "Kruskal’s Algorithm",
    ],
    correctAnswer: "Depth First Search (DFS)",
    explanation:
      "Depth First Search (DFS) can be used to detect cycles in an undirected graph by checking for back edges.",
  },
  {
    question:
      "What is the key difference between Prim's Algorithm and Kruskal's Algorithm for finding a Minimum Spanning Tree (MST)?",
    options: [
      "Prim’s Algorithm starts from a random vertex, while Kruskal’s Algorithm processes edges by weight",
      "Prim’s Algorithm uses a priority queue, while Kruskal’s Algorithm uses a disjoint set",
      "Prim’s Algorithm is slower than Kruskal’s Algorithm",
      "Prim’s Algorithm works only on directed graphs",
    ],
    correctAnswer:
      "Prim’s Algorithm starts from a random vertex, while Kruskal’s Algorithm processes edges by weight",
    explanation:
      "Prim's Algorithm builds the MST from a random vertex, whereas Kruskal’s Algorithm processes edges by their weights to build the MST.",
  },
  {
    question:
      "In a directed graph, what is the purpose of a depth-first search (DFS) for detecting cycles?",
    options: [
      "It detects cycles by identifying back edges",
      "It computes the shortest paths between all vertices",
      "It orders vertices in a topological sort",
      "It calculates the in-degree and out-degree of each vertex",
    ],
    correctAnswer: "It detects cycles by identifying back edges",
    explanation:
      "DFS detects cycles by identifying back edges, which connect a node to one of its ancestors in the DFS tree.",
  },
  {
    question:
      "Which data structure is typically used to represent a graph in memory for fast access of neighbors of each vertex?",
    options: ["Adjacency matrix", "Adjacency list", "Hash map", "Array"],
    correctAnswer: "Adjacency list",
    explanation:
      "An adjacency list is a more space-efficient representation for sparse graphs where each vertex has only a few neighbors.",
  },
  {
    question: "In the context of graph theory, what is a 'cut' in a graph?",
    options: [
      "A partition of the vertices into two disjoint sets",
      "A subgraph where all vertices are connected",
      "A set of edges that form a cycle",
      "A vertex with no edges",
    ],
    correctAnswer: "A partition of the vertices into two disjoint sets",
    explanation:
      "A cut in a graph is a partition of the vertices into two disjoint sets, and it is used in problems like the Max-Flow Min-Cut Theorem.",
  },
  {
    question:
      "What is the time complexity of the Bellman-Ford algorithm for finding the shortest paths from a source vertex to all other vertices?",
    options: ["O(V^2)", "O(E log V)", "O(VE)", "O(V^3)"],
    correctAnswer: "O(VE)",
    explanation:
      "The Bellman-Ford algorithm has a time complexity of O(VE), where V is the number of vertices and E is the number of edges.",
  },
  {
    question:
      "What is the primary purpose of a topological sort in a directed acyclic graph (DAG)?",
    options: [
      "To order vertices such that for every directed edge u → v, u comes before v",
      "To minimize the total distance of all edges",
      "To detect cycles in the graph",
      "To find the minimum spanning tree",
    ],
    correctAnswer:
      "To order vertices such that for every directed edge u → v, u comes before v",
    explanation:
      "Topological sorting orders vertices in a DAG such that for every directed edge u → v, vertex u appears before v.",
  },
  {
    question:
      "In a graph with V vertices and E edges, which of the following is the maximum number of edges in a complete graph?",
    options: ["V^2", "E = V*(V-1)/2", "E = V*(V-1)", "E = V^2/2"],
    correctAnswer: "E = V*(V-1)/2",
    explanation:
      "In a complete graph, each vertex is connected to every other vertex, so the maximum number of edges is E = V*(V-1)/2.",
  },
  {
    question: "What is a spanning tree of a graph?",
    options: [
      "A subgraph that contains all vertices and exactly V-1 edges",
      "A connected subgraph that contains all vertices and a cycle",
      "A subgraph that contains all vertices and all edges",
      "A subgraph that contains some vertices and no edges",
    ],
    correctAnswer:
      "A subgraph that contains all vertices and exactly V-1 edges",
    explanation:
      "A spanning tree of a graph is a subgraph that includes all vertices of the graph and exactly V-1 edges, forming a tree.",
  },
  {
    question:
      "Which graph traversal algorithm is used to find the connected components in an undirected graph?",
    options: [
      "Depth First Search (DFS)",
      "Breadth First Search (BFS)",
      "Both DFS and BFS",
      "Bellman-Ford Algorithm",
    ],
    correctAnswer: "Both DFS and BFS",
    explanation:
      "Both DFS and BFS can be used to find connected components in an undirected graph.",
  },
];
