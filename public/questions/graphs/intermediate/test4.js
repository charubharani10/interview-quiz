export const test4 = [
  {
    question:
      "What is the time complexity of BFS in a graph with V vertices and E edges?",
    options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V * E)"],
    correctAnswer: "O(V + E)",
    explanation:
      "The time complexity of BFS in a graph is O(V + E), where V is the number of vertices and E is the number of edges.",
  },
  {
    question:
      "What is a key difference between BFS and DFS in graph traversal?",
    options: [
      "BFS uses a stack, while DFS uses a queue",
      "BFS explores a graph level by level, while DFS explores as deep as possible",
      "BFS uses recursion, while DFS uses iteration",
      "DFS guarantees shortest path, while BFS does not",
    ],
    correctAnswer:
      "BFS explores a graph level by level, while DFS explores as deep as possible",
    explanation:
      "BFS uses a queue to explore the graph level by level, while DFS uses recursion or a stack to explore as deep as possible.",
  },
  {
    question: "Which data structure is primarily used in Dijkstra’s algorithm?",
    options: ["Array", "Queue", "Hash Map", "Priority Queue"],
    correctAnswer: "Priority Queue",
    explanation:
      "Dijkstra's algorithm uses a priority queue (or min-heap) to always extract the vertex with the smallest tentative distance.",
  },
  {
    question:
      "In which of the following scenarios would you prefer using an adjacency list representation over an adjacency matrix?",
    options: [
      "When the graph is dense",
      "When the graph has a large number of vertices and a small number of edges",
      "When the graph is highly connected",
      "When the graph has no edges",
    ],
    correctAnswer:
      "When the graph has a large number of vertices and a small number of edges",
    explanation:
      "Adjacency lists are more space-efficient for sparse graphs, where there are fewer edges compared to the number of vertices.",
  },
  {
    question:
      "What is the primary purpose of topological sorting in directed graphs?",
    options: [
      "To find the shortest path",
      "To detect cycles",
      "To order vertices in a linear fashion such that for every directed edge u → v, u comes before v",
      "To remove duplicate edges",
    ],
    correctAnswer:
      "To order vertices in a linear fashion such that for every directed edge u → v, u comes before v",
    explanation:
      "Topological sorting is used in directed acyclic graphs (DAGs) to arrange vertices linearly, where for every directed edge u → v, vertex u appears before vertex v.",
  },
  {
    question:
      "Which algorithm can be used to detect cycles in a directed graph?",
    options: [
      "Kruskal’s Algorithm",
      "Dijkstra’s Algorithm",
      "Bellman-Ford Algorithm",
      "DFS",
    ],
    correctAnswer: "DFS",
    explanation:
      "DFS (Depth First Search) can be used to detect cycles in a directed graph by keeping track of visited nodes and recursion stack.",
  },
  {
    question: "What does a spanning tree of a graph contain?",
    options: [
      "All vertices with all edges",
      "All vertices with minimum number of edges",
      "All vertices with no cycles",
      "All edges of the graph",
    ],
    correctAnswer: "All vertices with no cycles",
    explanation:
      "A spanning tree contains all vertices of a graph with the minimum number of edges, ensuring no cycles.",
  },
  {
    question: "What type of graph is required for running Kruskal’s algorithm?",
    options: [
      "Directed graph",
      "Weighted graph",
      "Unweighted graph",
      "Complete graph",
    ],
    correctAnswer: "Weighted graph",
    explanation:
      "Kruskal's algorithm is used to find the minimum spanning tree in a weighted graph.",
  },
  {
    question:
      "Which traversal method is used to generate a pre-order traversal of a tree from a given graph?",
    options: ["DFS", "BFS", "Dijkstra’s Algorithm", "Topological Sort"],
    correctAnswer: "DFS",
    explanation:
      "Pre-order traversal of a tree can be implemented using a DFS traversal technique.",
  },
  {
    question:
      "What is the time complexity of Prim’s algorithm when using a Fibonacci heap?",
    options: ["O(V + E log V)", "O(E + V log V)", "O(V^2)", "O(V log V)"],
    correctAnswer: "O(E + V log V)",
    explanation:
      "Prim’s algorithm has a time complexity of O(E + V log V) when implemented with a Fibonacci heap.",
  },
  {
    question:
      "Which of the following algorithms is NOT used to find a minimum spanning tree in a graph?",
    options: [
      "Kruskal’s Algorithm",
      "Prim’s Algorithm",
      "Dijkstra’s Algorithm",
      "Boruvka’s Algorithm",
    ],
    correctAnswer: "Dijkstra’s Algorithm",
    explanation:
      "Dijkstra's algorithm is used for finding the shortest path, not for finding the minimum spanning tree.",
  },
  {
    question: "What is the primary goal of Dijkstra's algorithm?",
    options: [
      "Find the minimum spanning tree",
      "Find the shortest path from a source to all other vertices",
      "Detect cycles in the graph",
      "Find the maximum flow in a graph",
    ],
    correctAnswer: "Find the shortest path from a source to all other vertices",
    explanation:
      "Dijkstra's algorithm is used to find the shortest path from a source vertex to all other vertices in a graph.",
  },
  {
    question:
      "Which data structure is commonly used to implement BFS in a graph?",
    options: ["Stack", "Queue", "Priority Queue", "Hash Map"],
    correctAnswer: "Queue",
    explanation:
      "BFS (Breadth-First Search) uses a queue to explore nodes level by level.",
  },
  {
    question:
      "In a weighted graph, which algorithm is used to find the minimum spanning tree?",
    options: [
      "Kruskal’s Algorithm",
      "Dijkstra’s Algorithm",
      "Bellman-Ford Algorithm",
      "Floyd-Warshall Algorithm",
    ],
    correctAnswer: "Kruskal’s Algorithm",
    explanation:
      "Kruskal's algorithm is a greedy algorithm used to find the minimum spanning tree in a weighted graph.",
  },
  {
    question:
      "What type of graph is required for performing topological sorting?",
    options: [
      "Directed Acyclic Graph (DAG)",
      "Undirected Graph",
      "Complete Graph",
      "Cycle-free Graph",
    ],
    correctAnswer: "Directed Acyclic Graph (DAG)",
    explanation:
      "Topological sorting is only possible in Directed Acyclic Graphs (DAGs), as it involves ordering vertices based on directed edges.",
  },
  {
    question:
      "Which traversal strategy is best for checking if a graph is bipartite?",
    options: ["DFS", "BFS", "Kruskal's Algorithm", "Dijkstra's Algorithm"],
    correctAnswer: "BFS",
    explanation:
      "BFS is commonly used to check whether a graph is bipartite, as it can help in coloring the graph and verifying the bipartite property.",
  },
  {
    question:
      "What is the time complexity of BFS in a graph with V vertices and E edges?",
    options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V * E)"],
    correctAnswer: "O(V + E)",
    explanation:
      "BFS visits each vertex and edge once, so the time complexity is O(V + E), where V is the number of vertices and E is the number of edges.",
  },
  {
    question:
      "Which algorithm can be used to find the shortest path in a graph with negative weight edges?",
    options: [
      "Kruskal’s Algorithm",
      "Bellman-Ford Algorithm",
      "Prim’s Algorithm",
      "Dijkstra’s Algorithm",
    ],
    correctAnswer: "Bellman-Ford Algorithm",
    explanation:
      "Bellman-Ford algorithm can handle graphs with negative weight edges and can also detect negative weight cycles.",
  },
  {
    question:
      "Which of the following is a key difference between Prim's algorithm and Kruskal's algorithm?",
    options: [
      "Prim's algorithm starts from an arbitrary vertex, while Kruskal's algorithm starts from any edge",
      "Kruskal's algorithm is better for dense graphs, while Prim's algorithm is better for sparse graphs",
      "Prim's algorithm builds a minimum spanning tree by adding edges one by one, while Kruskal's algorithm adds vertices",
      "Prim's algorithm uses a queue, while Kruskal's algorithm uses a stack",
    ],
    correctAnswer:
      "Prim's algorithm starts from an arbitrary vertex, while Kruskal's algorithm starts from any edge",
    explanation:
      "Prim's algorithm grows the minimum spanning tree from a single vertex, while Kruskal's algorithm adds edges one by one from a sorted edge list.",
  },
  {
    question:
      "In a directed graph, which of the following is true about a strongly connected component?",
    options: [
      "There is a path from every vertex to every other vertex",
      "There is a path from every vertex to itself",
      "Every vertex has an outgoing edge",
      "There are no cycles",
    ],
    correctAnswer: "There is a path from every vertex to every other vertex",
    explanation:
      "In a strongly connected component of a directed graph, there is a path from every vertex to every other vertex.",
  },
  {
    question:
      "Which algorithm is used to find the shortest paths from a single source to all vertices in a graph with non-negative weights?",
    options: [
      "Kruskal’s Algorithm",
      "Prim’s Algorithm",
      "Dijkstra’s Algorithm",
      "Bellman-Ford Algorithm",
    ],
    correctAnswer: "Dijkstra’s Algorithm",
    explanation:
      "Dijkstra’s algorithm is used to find the shortest paths from a single source to all other vertices in graphs with non-negative edge weights.",
  },
  {
    question:
      "Which of the following graph traversal techniques guarantees visiting all vertices in the shortest path order in an unweighted graph?",
    options: ["DFS", "BFS", "Kruskal’s Algorithm", "Dijkstra’s Algorithm"],
    correctAnswer: "BFS",
    explanation:
      "BFS guarantees visiting all vertices in the shortest path order in an unweighted graph by exploring level by level.",
  },
];
