export const test3 = [
  {
    question:
      "Which algorithm can be used to find the Minimum Spanning Tree (MST) of a graph?",
    options: [
      "Dijkstra’s Algorithm",
      "Prim’s Algorithm",
      "Bellman-Ford Algorithm",
      "Floyd-Warshall Algorithm",
    ],
    correctAnswer: "Prim’s Algorithm",
    explanation:
      "Prim’s Algorithm is used to find the Minimum Spanning Tree (MST) of a graph by greedily adding the minimum weight edge to the MST.",
  },
  {
    question: "What is a key characteristic of a graph that makes it a forest?",
    options: [
      "It contains cycles",
      "It is acyclic and disconnected",
      "It is connected and acyclic",
      "It is directed and contains no edges",
    ],
    correctAnswer: "It is acyclic and disconnected",
    explanation:
      "A forest is a collection of disjoint trees. It is acyclic and can be disconnected, meaning it doesn't have to be connected.",
  },
  {
    question:
      "Which of the following is NOT a property of a directed acyclic graph (DAG)?",
    options: [
      "It has no cycles",
      "It has a topological ordering",
      "It has a well-defined start and end point",
      "It allows circular dependencies",
    ],
    correctAnswer: "It allows circular dependencies",
    explanation:
      "A directed acyclic graph (DAG) has no cycles and does not allow circular dependencies.",
  },
  {
    question:
      "In which type of graph traversal can we detect cycles in a directed graph?",
    options: ["DFS", "BFS", "Kruskal’s Algorithm", "Prim’s Algorithm"],
    correctAnswer: "DFS",
    explanation:
      "DFS (Depth First Search) can be used to detect cycles in a directed graph by marking nodes during traversal and checking for back edges.",
  },
  {
    question:
      "What is the difference between a connected graph and a strongly connected graph?",
    options: [
      "A connected graph has a path between any two vertices, while a strongly connected graph has paths in both directions between any two vertices",
      "A strongly connected graph is always directed, while a connected graph can be undirected",
      "A connected graph has cycles, while a strongly connected graph is acyclic",
      "There is no difference; the terms are interchangeable",
    ],
    correctAnswer:
      "A connected graph has a path between any two vertices, while a strongly connected graph has paths in both directions between any two vertices",
    explanation:
      "In a connected graph, there is a path between any two vertices, while in a strongly connected graph, there are paths in both directions between any two vertices in a directed graph.",
  },
  {
    question:
      "Which traversal algorithm is suitable for finding all reachable nodes from a source node in a graph?",
    options: ["DFS", "BFS", "Topological Sort", "Prim’s Algorithm"],
    correctAnswer: "DFS",
    explanation:
      "DFS is useful for finding all reachable nodes from a source node, as it explores as far as possible along each branch before backtracking.",
  },
  {
    question:
      "What is the time complexity of performing a BFS traversal on a graph with V vertices and E edges?",
    options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V log V + E)"],
    correctAnswer: "O(V + E)",
    explanation:
      "BFS traversal visits each vertex once and examines each edge once, leading to a time complexity of O(V + E), where V is the number of vertices and E is the number of edges.",
  },
  {
    question:
      "In a graph, what is the result of performing a topological sort?",
    options: [
      "A list of nodes in cyclic order",
      "A list of nodes sorted based on the number of edges",
      "A linear ordering of vertices such that for every directed edge, the source vertex comes before the destination vertex",
      "A list of nodes sorted based on their degree",
    ],
    correctAnswer:
      "A linear ordering of vertices such that for every directed edge, the source vertex comes before the destination vertex",
    explanation:
      "Topological sort provides a linear ordering of vertices such that for every directed edge u → v, vertex u appears before vertex v.",
  },
  {
    question:
      "In which type of graph representation does an edge exist between two vertices only if both vertices are adjacent?",
    options: [
      "Adjacency Matrix",
      "Adjacency List",
      "Edge List",
      "Incidence Matrix",
    ],
    correctAnswer: "Adjacency Matrix",
    explanation:
      "An adjacency matrix is a 2D matrix where the cell at row i and column j is 1 if there is an edge between vertex i and vertex j, otherwise 0.",
  },
  {
    question:
      "Which algorithm is best suited for finding the shortest path between two nodes in a weighted graph?",
    options: [
      "Prim’s Algorithm",
      "Kruskal’s Algorithm",
      "Dijkstra’s Algorithm",
      "Bellman-Ford Algorithm",
    ],
    correctAnswer: "Dijkstra’s Algorithm",
    explanation:
      "Dijkstra’s Algorithm is designed for finding the shortest path in a weighted graph with non-negative edge weights.",
  },
  {
    question:
      "Which type of graph is represented by vertices with no repeated edges and no cycles?",
    options: ["Directed graph", "Undirected graph", "Tree", "Cyclic graph"],
    correctAnswer: "Tree",
    explanation:
      "A tree is an acyclic, connected, and undirected graph with no repeated edges and no cycles.",
  },
  {
    question:
      "What is the time complexity of Dijkstra’s algorithm when using a priority queue implemented with a binary heap?",
    options: ["O(V^2)", "O(E log V)", "O(V log V + E log V)", "O(V log V)"],
    correctAnswer: "O(E log V)",
    explanation:
      "Dijkstra's algorithm with a binary heap has a time complexity of O(E log V), where E is the number of edges and V is the number of vertices.",
  },
  {
    question:
      "Which of the following algorithms can be used to detect negative weight cycles in a graph?",
    options: [
      "Dijkstra’s Algorithm",
      "Bellman-Ford Algorithm",
      "Prim’s Algorithm",
      "Kruskal’s Algorithm",
    ],
    correctAnswer: "Bellman-Ford Algorithm",
    explanation:
      "Bellman-Ford Algorithm can detect negative weight cycles in a graph by iterating through all edges and checking for negative-weight cycles.",
  },
  {
    question:
      "In a graph, if every vertex has exactly two neighbors, what kind of graph is it?",
    options: ["Tree", "Cycle", "Complete Graph", "Disconnected Graph"],
    correctAnswer: "Cycle",
    explanation:
      "In a graph where every vertex has exactly two neighbors, the graph forms a cycle.",
  },
  {
    question:
      "What is the primary disadvantage of using an adjacency matrix for sparse graphs?",
    options: [
      "It uses too much space",
      "It is difficult to find neighbors",
      "It cannot handle directed edges",
      "It is slower than an adjacency list",
    ],
    correctAnswer: "It uses too much space",
    explanation:
      "An adjacency matrix consumes O(V^2) space, which is inefficient for sparse graphs where the number of edges is much smaller than V^2.",
  },
  {
    question:
      "Which graph traversal technique is best suited for finding the shortest path in an unweighted graph?",
    options: ["DFS", "BFS", "Dijkstra’s Algorithm", "Prim’s Algorithm"],
    correctAnswer: "BFS",
    explanation:
      "BFS (Breadth First Search) is the best method for finding the shortest path in an unweighted graph because it explores all neighbors level by level.",
  },
  {
    question:
      "In an undirected graph, what is the total number of edges if there are V vertices and the graph is complete?",
    options: ["V(V - 1)", "V(V - 1)/2", "V^2", "V^2 - V"],
    correctAnswer: "V(V - 1)/2",
    explanation:
      "In a complete undirected graph, every vertex is connected to every other vertex, leading to V(V - 1)/2 edges.",
  },
  {
    question:
      "In a directed graph, what is a strongly connected component (SCC)?",
    options: [
      "A set of vertices with no outgoing edges",
      "A set of vertices with no incoming edges",
      "A set of vertices such that every vertex is reachable from every other vertex",
      "A set of vertices with cyclic edges",
    ],
    correctAnswer:
      "A set of vertices such that every vertex is reachable from every other vertex",
    explanation:
      "In a strongly connected component (SCC) of a directed graph, every vertex can reach every other vertex through a path.",
  },
  {
    question:
      "What is the purpose of the 'visited' array in DFS and BFS algorithms?",
    options: [
      "To store the shortest path distances",
      "To mark the nodes that have been visited during traversal",
      "To keep track of the node’s parent",
      "To prevent revisiting edges",
    ],
    correctAnswer: "To mark the nodes that have been visited during traversal",
    explanation:
      "The 'visited' array is used to ensure that nodes are not revisited during graph traversal, preventing infinite loops and redundant checks.",
  },
  {
    question:
      "Which algorithm is generally used for finding the minimum spanning tree (MST) of a graph with non-negative weights?",
    options: [
      "Kruskal’s Algorithm",
      "Dijkstra’s Algorithm",
      "Bellman-Ford Algorithm",
      "Topological Sort",
    ],
    correctAnswer: "Kruskal’s Algorithm",
    explanation:
      "Kruskal’s Algorithm is used to find the Minimum Spanning Tree (MST) of a graph by sorting the edges and adding the smallest edge while avoiding cycles.",
  },
  {
    question: "How many edges are in a complete bipartite graph K(m, n)?",
    options: ["m + n", "m * n", "m + n + 1", "m * n + 1"],
    correctAnswer: "m * n",
    explanation:
      "In a complete bipartite graph K(m, n), every vertex in the first set of m vertices is connected to every vertex in the second set of n vertices, resulting in m * n edges.",
  },
  {
    question:
      "Which of the following is a property of a directed acyclic graph (DAG)?",
    options: [
      "It contains cycles",
      "It has a topological ordering",
      "It has no edges",
      "It is a cyclic graph",
    ],
    correctAnswer: "It has a topological ordering",
    explanation:
      "A directed acyclic graph (DAG) has a topological ordering where the vertices are arranged such that for every directed edge u → v, vertex u comes before vertex v.",
  },
];
