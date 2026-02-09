export const test2 = [
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
    question: "What is a bipartite graph?",
    options: [
      "A graph where all edges connect vertices of the same set",
      "A graph where the vertices are divided into two disjoint sets and edges only connect vertices from different sets",
      "A graph with only directed edges",
      "A graph that contains a cycle",
    ],
    correctAnswer:
      "A graph where the vertices are divided into two disjoint sets and edges only connect vertices from different sets",
    explanation:
      "A bipartite graph is a graph whose vertices can be divided into two disjoint sets such that no two graph vertices within the same set are adjacent.",
  },
  {
    question: "Which of the following is an example of a cyclic graph?",
    options: [
      "A graph with no edges",
      "A graph where each vertex is connected to exactly one other vertex",
      "A graph that contains a closed loop or cycle",
      "A graph where all edges are directed",
    ],
    correctAnswer: "A graph that contains a closed loop or cycle",
    explanation:
      "A cyclic graph is one that contains at least one cycle, meaning a path that starts and ends at the same vertex.",
  },
  {
    question:
      "Which algorithm is used for finding the shortest path from a single source to all other vertices in a weighted graph?",
    options: [
      "Dijkstra's Algorithm",
      "Prim's Algorithm",
      "Kruskal's Algorithm",
      "Bellman-Ford Algorithm",
    ],
    correctAnswer: "Dijkstra's Algorithm",
    explanation:
      "Dijkstra's algorithm is used to find the shortest paths from a single source to all other vertices in a graph with non-negative edge weights.",
  },
  {
    question: "What does the term 'cycle' refer to in graph theory?",
    options: [
      "A graph with no vertices",
      "A path that visits each vertex only once",
      "A path that starts and ends at the same vertex without repeating any edge",
      "A sequence of vertices connected by edges",
    ],
    correctAnswer:
      "A path that starts and ends at the same vertex without repeating any edge",
    explanation:
      "In graph theory, a cycle is a path that begins and ends at the same vertex and does not repeat any edges.",
  },
  {
    question: "In an undirected graph, what is a bridge?",
    options: [
      "An edge that increases the degree of a vertex",
      "An edge that connects two disconnected components of the graph",
      "An edge that, when removed, increases the number of connected components",
      "A node that connects to more than two edges",
    ],
    correctAnswer:
      "An edge that, when removed, increases the number of connected components",
    explanation:
      "A bridge is an edge that, when removed, causes the graph to become disconnected, meaning the number of connected components increases.",
  },
  {
    question: "In a graph, what is an in-degree of a vertex?",
    options: [
      "The number of edges connected to a vertex",
      "The number of incoming edges to a vertex",
      "The number of outgoing edges from a vertex",
      "The total number of vertices connected to a vertex",
    ],
    correctAnswer: "The number of incoming edges to a vertex",
    explanation:
      "In-degree of a vertex refers to the number of edges directed towards that vertex in a directed graph.",
  },
  {
    question:
      "Which of the following algorithms is used to detect cycles in an undirected graph?",
    options: [
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
      "Floyd-Warshall Algorithm",
      "Union-Find Algorithm",
    ],
    correctAnswer: "Union-Find Algorithm",
    explanation:
      "The Union-Find algorithm is used to detect cycles in an undirected graph by checking if two vertices belong to the same connected component.",
  },
  {
    question:
      "What is the difference between a directed and an undirected graph?",
    options: [
      "A directed graph has only one vertex",
      "An undirected graph has edges with direction",
      "In a directed graph, edges have direction, while in an undirected graph, edges do not have direction",
      "A directed graph can only be used for tree structures",
    ],
    correctAnswer:
      "In a directed graph, edges have direction, while in an undirected graph, edges do not have direction",
    explanation:
      "In a directed graph, edges have a direction, meaning they go from one vertex to another, whereas in an undirected graph, edges do not have any direction.",
  },
  {
    question:
      "What is the time complexity of Breadth-First Search (BFS) on a graph with V vertices and E edges?",
    options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V)"],
    correctAnswer: "O(V + E)",
    explanation:
      "The time complexity of BFS is O(V + E), where V is the number of vertices and E is the number of edges in the graph.",
  },
  {
    question:
      "Which traversal algorithm can be used to check whether a graph is bipartite?",
    options: [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
    ],
    correctAnswer: "Breadth-First Search (BFS)",
    explanation:
      "BFS can be used to check whether a graph is bipartite by attempting to color the graph using two colors. If no two adjacent vertices have the same color, the graph is bipartite.",
  },
  {
    question: "What is the main property of a complete graph?",
    options: [
      "All vertices are connected by a single edge",
      "Every vertex is connected to every other vertex",
      "The graph contains no cycles",
      "All vertices have the same in-degree and out-degree",
    ],
    correctAnswer: "Every vertex is connected to every other vertex",
    explanation:
      "A complete graph is a graph in which every pair of distinct vertices is connected by a unique edge.",
  },
];
