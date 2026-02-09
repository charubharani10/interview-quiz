export const test2 = [
  {
    question:
      "Which algorithm is best suited for finding the shortest path in a weighted graph with negative edge weights but no negative-weight cycles?",
    options: [
      "Dijkstra's Algorithm",
      "Floyd-Warshall Algorithm",
      "Bellman-Ford Algorithm",
      "Prim's Algorithm",
    ],
    correctAnswer: "Bellman-Ford Algorithm",
    explanation:
      "Bellman-Ford algorithm handles graphs with negative edge weights and can detect negative-weight cycles.",
  },
  {
    question:
      "In a directed graph, if there is an edge from vertex A to vertex B and vertex B to vertex A, what type of graph is this?",
    options: ["Cyclic", "Acyclic", "Undirected", "Bidirectional"],
    correctAnswer: "Bidirectional",
    explanation:
      "In a directed graph, if there is an edge from A to B and an edge from B to A, the graph is bidirectional.",
  },
  {
    question:
      "Which of the following is a characteristic property of a strongly connected component (SCC) in a directed graph?",
    options: [
      "There is a path between any two vertices in the component",
      "There is a cycle involving all vertices",
      "It is a subgraph that contains no cycles",
      "All vertices are connected to a central vertex",
    ],
    correctAnswer: "There is a path between any two vertices in the component",
    explanation:
      "A strongly connected component is a maximal subgraph in which there is a path from each vertex to every other vertex.",
  },
  {
    question:
      "Which algorithm is used to find the minimum spanning tree of a graph and works by selecting the edge with the smallest weight that doesn't form a cycle?",
    options: [
      "Kruskal's Algorithm",
      "Prim's Algorithm",
      "Dijkstra's Algorithm",
      "Floyd-Warshall Algorithm",
    ],
    correctAnswer: "Kruskal's Algorithm",
    explanation:
      "Kruskal's algorithm is used to find the minimum spanning tree by adding edges in increasing weight order and avoiding cycles.",
  },
  {
    question:
      "How does the time complexity of Dijkstra's algorithm change when using a binary heap as the priority queue?",
    options: ["O(V log E)", "O(E log V)", "O(V^2)", "O(E + V)"],
    correctAnswer: "O(E log V)",
    explanation:
      "When using a binary heap, Dijkstra's algorithm has a time complexity of O(E log V), where E is the number of edges and V is the number of vertices.",
  },
  {
    question:
      "What is the space complexity of an adjacency matrix used to represent a graph with V vertices and E edges?",
    options: ["O(V + E)", "O(V^2)", "O(E)", "O(V log V)"],
    correctAnswer: "O(V^2)",
    explanation:
      "The adjacency matrix uses space proportional to the square of the number of vertices, O(V^2), regardless of the number of edges.",
  },
  {
    question:
      "What is the time complexity of BFS when implemented on an adjacency list?",
    options: ["O(V^2)", "O(E + V)", "O(E log V)", "O(V log V)"],
    correctAnswer: "O(E + V)",
    explanation:
      "BFS has a time complexity of O(E + V), where E is the number of edges and V is the number of vertices.",
  },
  {
    question:
      "What is the primary advantage of using a depth-first search (DFS) over breadth-first search (BFS) in finding paths in a graph?",
    options: [
      "DFS uses less memory in sparse graphs",
      "DFS is more efficient in finding the shortest path",
      "DFS can be used to find connected components",
      "DFS is faster in finding the longest path",
    ],
    correctAnswer: "DFS uses less memory in sparse graphs",
    explanation:
      "DFS uses less memory compared to BFS, especially in sparse graphs, because it uses a stack instead of a queue.",
  },
  {
    question: "What is the key property of a tree in graph theory?",
    options: [
      "It contains exactly one cycle",
      "It contains exactly one path between any two vertices",
      "It contains no vertices",
      "It is always a directed graph",
    ],
    correctAnswer: "It contains exactly one path between any two vertices",
    explanation:
      "A tree is an acyclic, connected graph with exactly one path between any pair of vertices.",
  },
  {
    question:
      "Which of the following is a true statement about the degree of a vertex in an undirected graph?",
    options: [
      "The degree of a vertex is the number of vertices connected to it",
      "The degree of a vertex is always even",
      "The degree of a vertex is always odd",
      "The degree of a vertex is the total number of edges in the graph",
    ],
    correctAnswer:
      "The degree of a vertex is the number of vertices connected to it",
    explanation:
      "The degree of a vertex in an undirected graph is simply the number of edges incident to that vertex.",
  },
  {
    question:
      "What is the minimum number of edges required to connect all vertices in a graph with V vertices, assuming no cycles are allowed?",
    options: ["V-1", "V", "V+1", "V*V"],
    correctAnswer: "V-1",
    explanation:
      "To connect all vertices in a graph without forming cycles, the graph must be a tree, which requires V-1 edges.",
  },
  {
    question:
      "What is the main difference between BFS and DFS in terms of memory usage?",
    options: [
      "DFS requires more memory as it uses a queue",
      "BFS requires more memory as it uses a stack",
      "DFS uses a stack and requires less memory",
      "BFS uses a binary heap and has constant space complexity",
    ],
    correctAnswer: "DFS uses a stack and requires less memory",
    explanation:
      "DFS uses a stack and is more memory-efficient compared to BFS, which uses a queue and requires more memory.",
  },
  {
    question:
      "Which of the following algorithms can be used to find the shortest path in an unweighted graph?",
    options: [
      "Dijkstra's Algorithm",
      "Bellman-Ford Algorithm",
      "Breadth-First Search (BFS)",
      "Floyd-Warshall Algorithm",
    ],
    correctAnswer: "Breadth-First Search (BFS)",
    explanation:
      "BFS is ideal for finding the shortest path in an unweighted graph since it explores all vertices at the current distance before moving to the next distance.",
  },
  {
    question:
      "Which type of graph traversal is typically used for cycle detection in an undirected graph?",
    options: [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Kruskal's Algorithm",
      "Bellman-Ford Algorithm",
    ],
    correctAnswer: "Depth-First Search (DFS)",
    explanation:
      "DFS is often used for cycle detection because it can track the recursion stack to identify back edges in undirected graphs.",
  },
  {
    question:
      "What is the primary disadvantage of an adjacency matrix for sparse graphs?",
    options: [
      "Requires O(V^2) space even for sparse graphs",
      "Does not allow efficient edge lookups",
      "Requires O(E log V) time for traversal",
      "Is slower than an adjacency list for dense graphs",
    ],
    correctAnswer: "Requires O(V^2) space even for sparse graphs",
    explanation:
      "An adjacency matrix requires O(V^2) space regardless of the number of edges, making it inefficient for sparse graphs.",
  },
  {
    question: "In a directed graph, what is the in-degree of a vertex?",
    options: [
      "The number of edges directed into the vertex",
      "The number of edges directed out of the vertex",
      "The sum of all degrees of adjacent vertices",
      "The number of vertices connected to the vertex",
    ],
    correctAnswer: "The number of edges directed into the vertex",
    explanation:
      "The in-degree of a vertex is the count of edges directed towards it.",
  },
  {
    question:
      "Which graph algorithm is used for finding strongly connected components (SCCs) in a directed graph?",
    options: [
      "Dijkstra's Algorithm",
      "Bellman-Ford Algorithm",
      "Kosaraju's Algorithm",
      "Prim's Algorithm",
    ],
    correctAnswer: "Kosaraju's Algorithm",
    explanation:
      "Kosaraju's algorithm is a two-pass algorithm used to find strongly connected components (SCCs) in a directed graph.",
  },
  {
    question:
      "What is the time complexity of Prim's algorithm using a binary heap for the priority queue?",
    options: ["O(E log V)", "O(V^2)", "O(V log E)", "O(E + V)"],
    correctAnswer: "O(E log V)",
    explanation:
      "When using a binary heap, Prim's algorithm has a time complexity of O(E log V), where E is the number of edges and V is the number of vertices.",
  },
  {
    question:
      "Which of the following describes the properties of a complete graph?",
    options: [
      "Every vertex is connected to exactly two other vertices",
      "There is an edge between every pair of vertices",
      "Each vertex has a degree of zero",
      "Every vertex is connected to one other vertex",
    ],
    correctAnswer: "There is an edge between every pair of vertices",
    explanation:
      "A complete graph is a graph in which there is an edge between every pair of vertices.",
  },
  {
    question:
      "What is the difference between a tree and a forest in graph theory?",
    options: [
      "A forest is a graph with no cycles, while a tree contains cycles",
      "A forest is a collection of disconnected trees",
      "A tree is a collection of disconnected graphs",
      "A forest is a complete graph, while a tree is a cycle",
    ],
    correctAnswer: "A forest is a collection of disconnected trees",
    explanation:
      "A forest is a disjoint set of trees, whereas a tree is a connected acyclic graph.",
  },
  {
    question:
      "Which algorithm is used for finding the minimum spanning tree (MST) of a graph?",
    options: [
      "Kruskal's Algorithm",
      "Dijkstra's Algorithm",
      "Floyd-Warshall Algorithm",
      "Bellman-Ford Algorithm",
    ],
    correctAnswer: "Kruskal's Algorithm",
    explanation:
      "Kruskal's algorithm finds the minimum spanning tree by selecting edges in increasing weight order and avoiding cycles.",
  },
];
