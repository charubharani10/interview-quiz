export const test1 = [
  {
    question: "Which of the following is a type of graph traversal?",
    options: [
      "Bubble Sort",
      "Breadth-First Search",
      "Merge Sort",
      "Quick Sort",
    ],
    correctAnswer: "Breadth-First Search",
    explanation:
      "Breadth-First Search (BFS) is a traversal algorithm used in graph theory to explore all the vertices in a graph layer by layer.",
  },
  {
    question:
      "What is the primary difference between a directed and an undirected graph?",
    options: [
      "In a directed graph, edges have direction; in an undirected graph, edges do not",
      "In an undirected graph, nodes have direction",
      "Directed graphs contain loops; undirected graphs do not",
      "There is no difference between the two",
    ],
    correctAnswer:
      "In a directed graph, edges have direction; in an undirected graph, edges do not",
    explanation:
      "In directed graphs, edges have a specific direction from one vertex to another, whereas in undirected graphs, edges are bidirectional.",
  },
  {
    question: "What does a complete graph contain?",
    options: [
      "Every node has exactly one edge",
      "Every pair of nodes is connected by an edge",
      "Only isolated nodes are present",
      "Nodes are connected based on the degree of the nodes",
    ],
    correctAnswer: "Every pair of nodes is connected by an edge",
    explanation:
      "A complete graph is a type of graph in which every pair of distinct vertices is connected by a unique edge.",
  },
  {
    question: "Which of the following is true about a tree?",
    options: [
      "A tree is a type of graph with no cycles",
      "A tree always contains a cycle",
      "A tree is a directed graph",
      "A tree contains at least two nodes",
    ],
    correctAnswer: "A tree is a type of graph with no cycles",
    explanation:
      "A tree is a special type of graph that is connected and acyclic, meaning it has no cycles.",
  },
  {
    question: "In graph theory, what is a cycle?",
    options: [
      "A closed path in a graph where the start and end points are the same",
      "A graph with no edges",
      "A graph with all vertices connected",
      "A path from a node to itself",
    ],
    correctAnswer:
      "A closed path in a graph where the start and end points are the same",
    explanation:
      "A cycle is a path in a graph where the first and last vertices are the same, and no other vertex is repeated.",
  },
  {
    question:
      "What is the time complexity of BFS in a graph with V vertices and E edges?",
    options: ["O(V + E)", "O(V^2)", "O(E^2)", "O(V log V)"],
    correctAnswer: "O(V + E)",
    explanation:
      "The time complexity of BFS is proportional to the sum of the vertices and edges, i.e., O(V + E), as each vertex and edge is visited once.",
  },
  {
    question: "Which of the following is a feature of a bipartite graph?",
    options: [
      "It can be colored with only two colors",
      "It has at least one cycle",
      "All nodes are connected by directed edges",
      "It has no edges",
    ],
    correctAnswer: "It can be colored with only two colors",
    explanation:
      "A bipartite graph is one in which the set of vertices can be divided into two disjoint sets such that every edge connects a vertex from one set to a vertex from the other.",
  },
  {
    question: "What is the degree of a node in a graph?",
    options: [
      "The number of nodes connected to the node",
      "The number of edges connected to the node",
      "The weight of the edges connected to the node",
      "The number of edges in the entire graph",
    ],
    correctAnswer: "The number of edges connected to the node",
    explanation:
      "The degree of a node in a graph is defined as the number of edges that are incident to that node.",
  },
  {
    question:
      "In a graph, which of the following types of edges is used to represent relationships that have direction?",
    options: [
      "Undirected edges",
      "Directed edges",
      "Weighted edges",
      "Isolated edges",
    ],
    correctAnswer: "Directed edges",
    explanation:
      "Directed edges represent relationships that have direction, usually denoted with an arrow pointing from one vertex to another.",
  },
  {
    question: "What is the key difference between a graph and a tree?",
    options: [
      "A tree is always acyclic, while a graph may have cycles",
      "A graph is always connected, while a tree is not",
      "A tree can have multiple edges between nodes",
      "A graph is directed, while a tree is undirected",
    ],
    correctAnswer: "A tree is always acyclic, while a graph may have cycles",
    explanation:
      "A tree is a special type of graph that is connected and acyclic, meaning it has no cycles.",
  },
  {
    question: "Which of the following is a representation of a graph?",
    options: [
      "Adjacency list",
      "Adjacency matrix",
      "Edge list",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Graphs can be represented using an adjacency list, adjacency matrix, or edge list, depending on the requirements of the algorithm or application.",
  },

  {
    question:
      "What is the time complexity of finding the shortest path in a graph using Dijkstra's algorithm?",
    options: ["O(V^2)", "O(V + E log V)", "O(E log V)", "O(V log V)"],
    correctAnswer: "O(V + E log V)",
    explanation:
      "Dijkstra's algorithm has a time complexity of O(V + E log V) when implemented with a priority queue.",
  },
  {
    question: "What is the main characteristic of a connected graph?",
    options: [
      "Every node can reach every other node",
      "Some nodes are not connected",
      "It has a loop",
      "Every node is connected to at least one other node",
    ],
    correctAnswer: "Every node can reach every other node",
    explanation:
      "A connected graph is one in which there is a path between every pair of vertices.",
  },
  {
    question: "In a graph, what does the term 'weighted edges' mean?",
    options: [
      "Edges that are labeled with a weight or cost",
      "Edges that are undirected",
      "Edges that connect multiple vertices",
      "Edges that are bidirectional",
    ],
    correctAnswer: "Edges that are labeled with a weight or cost",
    explanation:
      "Weighted edges represent relationships where there is a cost or weight associated with moving from one vertex to another.",
  },
  {
    question:
      "Which of the following algorithms is used to find the Minimum Spanning Tree (MST) of a graph?",
    options: [
      "Dijkstra's Algorithm",
      "Prim's Algorithm",
      "Bellman-Ford Algorithm",
      "Depth-First Search",
    ],
    correctAnswer: "Prim's Algorithm",
    explanation:
      "Prim's algorithm is used to find the Minimum Spanning Tree (MST) of a weighted graph, where the total weight of the edges is minimized.",
  },
  {
    question: "What is the purpose of a topological sort in a directed graph?",
    options: [
      "To find the shortest path",
      "To remove cycles",
      "To order vertices in a way that for every directed edge from vertex A to vertex B, A comes before B",
      "To find the Minimum Spanning Tree",
    ],
    correctAnswer:
      "To order vertices in a way that for every directed edge from vertex A to vertex B, A comes before B",
    explanation:
      "Topological sorting is used to order vertices in a Directed Acyclic Graph (DAG) such that for each edge (A, B), A appears before B.",
  },
  {
    question:
      "What is the space complexity of an adjacency matrix for representing a graph with V vertices?",
    options: ["O(V)", "O(V^2)", "O(E)", "O(V + E)"],
    correctAnswer: "O(V^2)",
    explanation:
      "An adjacency matrix requires O(V^2) space since it represents every possible edge between pairs of vertices.",
  },
  {
    question: "What is an isolated vertex in a graph?",
    options: [
      "A vertex that has no incoming edges",
      "A vertex that has no outgoing edges",
      "A vertex that is connected to all other vertices",
      "A vertex that has no edges connected to it",
    ],
    correctAnswer: "A vertex that has no edges connected to it",
    explanation:
      "An isolated vertex is a vertex in a graph that has no edges connected to it.",
  },
  {
    question: "What is a directed acyclic graph (DAG)?",
    options: [
      "A graph with no edges",
      "A graph that contains cycles",
      "A graph where all edges are directed and there are no cycles",
      "A graph with both directed and undirected edges",
    ],
    correctAnswer:
      "A graph where all edges are directed and there are no cycles",
    explanation:
      "A Directed Acyclic Graph (DAG) is a graph where all edges have a direction, and it does not contain any cycles.",
  },
  {
    question:
      "In graph theory, which of the following is NOT a type of graph traversal?",
    options: [
      "Depth-First Search",
      "Breadth-First Search",
      "Bellman-Ford Algorithm",
      "Prim's Algorithm",
    ],
    correctAnswer: "Prim's Algorithm",
    explanation:
      "Prim's Algorithm is used to find the Minimum Spanning Tree (MST), not for traversing a graph.",
  },
  {
    question:
      "Which data structure is most commonly used to implement a graph?",
    options: ["Array", "Linked List", "Stack", "Hash Map"],
    correctAnswer: "Linked List",
    explanation:
      "Graphs are typically implemented using an adjacency list, which can be represented using a linked list for each vertex.",
  },
  {
    question: "What is the purpose of a 'minimum spanning tree'?",
    options: [
      "To connect all vertices with the minimum number of edges",
      "To minimize the sum of the weights of the edges while connecting all vertices",
      "To find the shortest path between two vertices",
      "To detect cycles in a graph",
    ],
    correctAnswer:
      "To minimize the sum of the weights of the edges while connecting all vertices",
    explanation:
      "A minimum spanning tree connects all vertices of a graph with the minimum sum of edge weights.",
  },
  {
    question:
      "Which of the following is a necessary condition for a graph to be bipartite?",
    options: [
      "It must contain an even cycle",
      "It must contain an odd cycle",
      "It must be connected",
      "It must contain a Hamiltonian cycle",
    ],
    correctAnswer: "It must contain an even cycle",
    explanation:
      "A graph is bipartite if and only if it does not contain any odd-length cycles.",
  },
  {
    question:
      "Which of the following is true about a graph's adjacency matrix?",
    options: [
      "It is symmetric for a directed graph",
      "It is always a square matrix",
      "It cannot be used to represent weighted graphs",
      "It is only used for undirected graphs",
    ],
    correctAnswer: "It is always a square matrix",
    explanation:
      "The adjacency matrix of a graph is always a square matrix, with the number of rows and columns equal to the number of vertices.",
  },
  {
    question: "What is a Hamiltonian path?",
    options: [
      "A path that visits every vertex exactly once",
      "A path that starts and ends at the same vertex",
      "A path that covers all edges of the graph",
      "A path with the minimum weight",
    ],
    correctAnswer: "A path that visits every vertex exactly once",
    explanation:
      "A Hamiltonian path visits each vertex exactly once without repeating any vertex.",
  },
  {
    question: "In a directed graph, what is the indegree of a vertex?",
    options: [
      "The number of edges entering the vertex",
      "The number of edges leaving the vertex",
      "The total number of edges in the graph",
      "The sum of the in and out degrees",
    ],
    correctAnswer: "The number of edges entering the vertex",
    explanation:
      "The indegree of a vertex is the number of edges coming into that vertex in a directed graph.",
  },
  {
    question:
      "Which algorithm is used to find the shortest path in a graph with negative edge weights?",
    options: [
      "Bellman-Ford Algorithm",
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
      "Prim's Algorithm",
    ],
    correctAnswer: "Bellman-Ford Algorithm",
    explanation:
      "The Bellman-Ford algorithm is used to find the shortest paths in graphs that may have negative edge weights.",
  },
  {
    question: "What is an 'Eulerian path'?",
    options: [
      "A path that visits every edge exactly once",
      "A path that visits every vertex exactly once",
      "A path that connects all vertices with minimum weight",
      "A path that forms a cycle",
    ],
    correctAnswer: "A path that visits every edge exactly once",
    explanation:
      "An Eulerian path visits every edge of a graph exactly once and may or may not form a cycle.",
  },
  {
    question: "What is the degree of a vertex in an undirected graph?",
    options: [
      "The number of edges leaving the vertex",
      "The number of edges entering the vertex",
      "The sum of incoming and outgoing edges",
      "The number of edges connected to the vertex",
    ],
    correctAnswer: "The number of edges connected to the vertex",
    explanation:
      "The degree of a vertex in an undirected graph is the number of edges connected to the vertex.",
  },
  {
    question: "What is a 'cut' in a graph?",
    options: [
      "A subgraph that contains all the vertices of a graph",
      "A set of edges whose removal disconnects the graph",
      "A set of vertices that forms a cycle",
      "A graph with no edges",
    ],
    correctAnswer: "A set of edges whose removal disconnects the graph",
    explanation:
      "A cut is a set of edges whose removal results in the disconnection of the graph.",
  },
  {
    question: "What is the purpose of the A* algorithm?",
    options: [
      "To find the shortest path in a graph",
      "To find the minimum spanning tree",
      "To detect cycles in a graph",
      "To find the longest path in a graph",
    ],
    correctAnswer: "To find the shortest path in a graph",
    explanation:
      "The A* algorithm is used to find the shortest path between nodes in a graph, especially in weighted graphs.",
  },
];
