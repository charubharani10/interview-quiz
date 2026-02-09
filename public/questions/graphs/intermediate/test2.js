export const test2 = [
  {
    question:
      "Which of the following algorithms is used to detect cycles in a directed graph?",
    options: ["DFS", "BFS", "Kruskal’s Algorithm", "Prim’s Algorithm"],
    correctAnswer: "DFS",
    explanation:
      "DFS can be used to detect cycles in a directed graph by checking for back edges.",
  },
  {
    question:
      "What is the primary disadvantage of using an adjacency matrix to represent sparse graphs?",
    options: [
      "It requires O(V) space",
      "It requires O(E) space",
      "It wastes space as most entries are 0",
      "It is harder to implement",
    ],
    correctAnswer: "It wastes space as most entries are 0",
    explanation:
      "In sparse graphs, many of the entries in the adjacency matrix are 0, which wastes space.",
  },
  {
    question:
      "What is a common use of topological sorting in directed acyclic graphs (DAGs)?",
    options: [
      "Finding the shortest path",
      "Detecting cycles",
      "Scheduling tasks",
      "Finding the minimum spanning tree",
    ],
    correctAnswer: "Scheduling tasks",
    explanation:
      "Topological sorting is commonly used in task scheduling, where tasks must be performed in a specific order.",
  },
  {
    question:
      "What is the time complexity of performing a BFS on a graph with V vertices and E edges?",
    options: ["O(V + E)", "O(V log V + E log V)", "O(E^2)", "O(V^2)"],
    correctAnswer: "O(V + E)",
    explanation:
      "The time complexity of BFS is O(V + E), where V is the number of vertices and E is the number of edges.",
  },
  {
    question: "Which of the following is a key property of a tree?",
    options: [
      "It contains cycles",
      "It is connected and acyclic",
      "It must be directed",
      "It is a complete graph",
    ],
    correctAnswer: "It is connected and acyclic",
    explanation:
      "A tree is a connected, acyclic graph with exactly V - 1 edges for V vertices.",
  },
  {
    question: "What is the purpose of a spanning tree in a graph?",
    options: [
      "To minimize the number of edges in a graph",
      "To connect all vertices with the minimum number of edges",
      "To find the shortest path between two vertices",
      "To create a cycle-free graph",
    ],
    correctAnswer: "To connect all vertices with the minimum number of edges",
    explanation:
      "A spanning tree connects all vertices of a graph using the minimum number of edges without forming any cycles.",
  },
  {
    question:
      "Which algorithm is most commonly used to find the minimum spanning tree of a graph?",
    options: [
      "Dijkstra’s Algorithm",
      "Kruskal’s Algorithm",
      "Bellman-Ford Algorithm",
      "Floyd-Warshall Algorithm",
    ],
    correctAnswer: "Kruskal’s Algorithm",
    explanation:
      "Kruskal’s Algorithm is commonly used to find the minimum spanning tree of a graph.",
  },
  {
    question:
      "In a directed graph, which of the following terms refers to an edge that connects a vertex to itself?",
    options: ["Self-loop", "Cycle", "Back edge", "Bridge"],
    correctAnswer: "Self-loop",
    explanation:
      "A self-loop is an edge that connects a vertex to itself in a directed graph.",
  },
  {
    question:
      "In an undirected graph, how many edges does a complete graph with V vertices have?",
    options: ["V-1", "V^2", "V(V-1)/2", "V(V+1)/2"],
    correctAnswer: "V(V-1)/2",
    explanation:
      "A complete graph with V vertices has V(V-1)/2 edges, as every vertex is connected to every other vertex.",
  },
  {
    question:
      "Which data structure is often used to implement a graph’s adjacency list?",
    options: ["Array", "Linked list", "Queue", "Stack"],
    correctAnswer: "Linked list",
    explanation:
      "An adjacency list is often implemented using a linked list, where each vertex stores a list of its neighbors.",
  },
  {
    question: "In a bipartite graph, how are the vertices classified?",
    options: [
      "Into two sets, with edges only between the sets",
      "Into three sets, with edges between all sets",
      "Into two sets, with edges only within the sets",
      "Into two sets, with no edges between the sets",
    ],
    correctAnswer: "Into two sets, with edges only between the sets",
    explanation:
      "In a bipartite graph, the vertices are divided into two disjoint sets, with edges only connecting vertices from one set to the other.",
  },
  {
    question:
      "What is the primary advantage of using adjacency lists over adjacency matrices in sparse graphs?",
    options: [
      "Lower space complexity",
      "Faster lookups",
      "Lower time complexity",
      "Easier to implement",
    ],
    correctAnswer: "Lower space complexity",
    explanation:
      "Adjacency lists are more space-efficient in sparse graphs because they only store existing edges, unlike adjacency matrices which store all possible edges.",
  },
  {
    question:
      "What is the time complexity of Dijkstra's algorithm when using a priority queue implemented with a binary heap?",
    options: ["O(V + E)", "O(V log V + E)", "O(V^2)", "O(E log E)"],
    correctAnswer: "O(V log V + E)",
    explanation:
      "Using a binary heap, Dijkstra’s algorithm has a time complexity of O(V log V + E), where V is the number of vertices and E is the number of edges.",
  },
  {
    question: "Which of the following is NOT a property of a tree?",
    options: [
      "It has exactly one path between any two nodes",
      "It is acyclic",
      "It contains cycles",
      "It is connected",
    ],
    correctAnswer: "It contains cycles",
    explanation:
      "A tree is an acyclic, connected graph with exactly one path between any two nodes. It does not contain cycles.",
  },
  {
    question: "What is a key characteristic of a graph that makes it directed?",
    options: [
      "Edges have a direction",
      "Edges are bidirectional",
      "Vertices have labels",
      "It is a weighted graph",
    ],
    correctAnswer: "Edges have a direction",
    explanation:
      "In a directed graph, edges have a specific direction, indicated by an arrow, from one vertex to another.",
  },
  {
    question:
      "Which traversal algorithm is best suited for finding the shortest path in an unweighted graph?",
    options: ["DFS", "BFS", "Kruskal’s Algorithm", "Dijkstra’s Algorithm"],
    correctAnswer: "BFS",
    explanation:
      "BFS is the best algorithm for finding the shortest path in an unweighted graph because it explores vertices level by level.",
  },
  {
    question: "In a graph with no cycles, what type of graph is it?",
    options: ["Directed graph", "Tree", "Cyclic graph", "Acyclic graph"],
    correctAnswer: "Acyclic graph",
    explanation:
      "A graph with no cycles is called an acyclic graph. If it is also connected, it is specifically a tree.",
  },
  {
    question:
      "Which algorithm is used to find the strongly connected components (SCCs) of a directed graph?",
    options: [
      "Kruskal’s Algorithm",
      "Prim’s Algorithm",
      "Tarjan’s Algorithm",
      "Floyd-Warshall Algorithm",
    ],
    correctAnswer: "Tarjan’s Algorithm",
    explanation:
      "Tarjan’s Algorithm is used to find strongly connected components in a directed graph using DFS and a stack.",
  },
  {
    question:
      "What is the key difference between a complete graph and a connected graph?",
    options: [
      "A complete graph has edges between all vertices, while a connected graph has at least one path between any two vertices",
      "A complete graph is acyclic, while a connected graph has cycles",
      "A complete graph is directed, while a connected graph is undirected",
      "A complete graph has exactly one edge, while a connected graph can have multiple edges",
    ],
    correctAnswer:
      "A complete graph has edges between all vertices, while a connected graph has at least one path between any two vertices",
    explanation:
      "In a complete graph, every pair of distinct vertices is connected by an edge, while in a connected graph, there is just at least one path between any two vertices.",
  },
  {
    question:
      "What is the time complexity of Floyd-Warshall algorithm for finding all pairs shortest paths in a graph?",
    options: ["O(V^3)", "O(V^2 log V)", "O(E log V)", "O(V^2 + E)"],
    correctAnswer: "O(V^3)",
    explanation:
      "Floyd-Warshall algorithm has a time complexity of O(V^3) for finding shortest paths between all pairs of vertices in a graph.",
  },
];
