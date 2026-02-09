export const test4 = [
  {
    question: "What is a connected graph?",
    options: [
      "A graph where every vertex is connected to every other vertex",
      "A graph where there is a path between every pair of vertices",
      "A graph where all edges are directed",
      "A graph with no vertices",
    ],
    correctAnswer:
      "A graph where there is a path between every pair of vertices",
    explanation:
      "A connected graph is one in which there is a path between every pair of vertices.",
  },
  {
    question:
      "Which algorithm is commonly used to find the shortest path between two vertices in a graph?",
    options: [
      "Prim's Algorithm",
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
      "Depth First Search (DFS)",
    ],
    correctAnswer: "Dijkstra's Algorithm",
    explanation:
      "Dijkstra's Algorithm is used to find the shortest path between two vertices in a graph with non-negative edge weights.",
  },
  {
    question:
      "What is the difference between a directed and an undirected graph?",
    options: [
      "In a directed graph, edges have direction, while in an undirected graph, edges have no direction",
      "In an undirected graph, all edges are loops",
      "Directed graphs can only be bipartite",
      "There is no difference between directed and undirected graphs",
    ],
    correctAnswer:
      "In a directed graph, edges have direction, while in an undirected graph, edges have no direction",
    explanation:
      "In a directed graph, each edge has a direction (from one vertex to another), while in an undirected graph, the edges have no direction.",
  },
  {
    question: "Which type of graph contains no cycles?",
    options: ["Tree", "Cycle graph", "Complete graph", "Directed graph"],
    correctAnswer: "Tree",
    explanation: "A tree is a special type of graph that contains no cycles.",
  },
  {
    question:
      "How can you determine the number of edges in a complete graph with 'n' vertices?",
    options: ["n(n-1)/2", "n^2", "n(n+1)/2", "n^2 - 1"],
    correctAnswer: "n(n-1)/2",
    explanation:
      "The number of edges in a complete graph with 'n' vertices is given by the formula n(n-1)/2.",
  },
  {
    question: "What is the degree of a vertex in an undirected graph?",
    options: [
      "The number of outgoing edges",
      "The number of vertices connected to it",
      "The number of edges connected to it",
      "The total number of vertices in the graph",
    ],
    correctAnswer: "The number of edges connected to it",
    explanation:
      "The degree of a vertex in an undirected graph is the number of edges incident to that vertex.",
  },
  {
    question: "Which type of graph is also known as a 'cycle graph'?",
    options: [
      "A graph with only one vertex",
      "A graph where every vertex is connected to all other vertices",
      "A graph that contains exactly one cycle",
      "A graph with no edges",
    ],
    correctAnswer: "A graph that contains exactly one cycle",
    explanation: "A cycle graph is a graph that contains exactly one cycle.",
  },
  {
    question:
      "What is the time complexity of finding all vertices reachable from a given vertex using BFS?",
    options: ["O(V + E)", "O(V^2)", "O(V)", "O(E)"],
    correctAnswer: "O(V + E)",
    explanation:
      "The time complexity of BFS is O(V + E), where V is the number of vertices and E is the number of edges.",
  },
  {
    question: "In a graph, what does the term 'clique' refer to?",
    options: [
      "A subgraph where all vertices are connected to each other",
      "A subgraph that has no edges",
      "A graph with exactly one vertex",
      "A graph with only directed edges",
    ],
    correctAnswer: "A subgraph where all vertices are connected to each other",
    explanation:
      "A clique in a graph is a subgraph where every vertex is connected to every other vertex in the subgraph.",
  },
  {
    question: "What is the main characteristic of a bipartite graph?",
    options: [
      "It has no edges",
      "It can be colored with two colors such that no two adjacent vertices have the same color",
      "It is a complete graph",
      "It contains cycles",
    ],
    correctAnswer:
      "It can be colored with two colors such that no two adjacent vertices have the same color",
    explanation:
      "A bipartite graph can be colored with two colors such that no two adjacent vertices have the same color.",
  },
  {
    question:
      "What is the time complexity of a depth-first search (DFS) in a graph with V vertices and E edges?",
    options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V)"],
    correctAnswer: "O(V + E)",
    explanation:
      "The time complexity of DFS is O(V + E), where V is the number of vertices and E is the number of edges.",
  },
  {
    question: "Which of the following is an example of a tree graph?",
    options: [
      "A graph with no cycles",
      "A graph with multiple cycles",
      "A graph where all edges are directed",
      "A graph with more than one connected component",
    ],
    correctAnswer: "A graph with no cycles",
    explanation:
      "A tree is an acyclic connected graph, meaning it contains no cycles.",
  },
  {
    question: "What does an adjacency list contain?",
    options: [
      "A matrix representing the edges between vertices",
      "A linked list for each vertex representing its neighbors",
      "A set of edges in the graph",
      "A 2D array containing vertex labels",
    ],
    correctAnswer: "A linked list for each vertex representing its neighbors",
    explanation:
      "An adjacency list contains a linked list for each vertex, with each list storing the neighbors of that vertex.",
  },
  {
    question: "What is the degree of a vertex in a directed graph?",
    options: [
      "The number of incoming edges",
      "The number of outgoing edges",
      "The total number of edges connected to it",
      "The sum of incoming and outgoing edges",
    ],
    correctAnswer: "The sum of incoming and outgoing edges",
    explanation:
      "In a directed graph, the degree of a vertex is the sum of its incoming and outgoing edges.",
  },
  {
    question: "What is a root in a tree?",
    options: [
      "A node with no parents",
      "A node with exactly one child",
      "A node connected to all other nodes",
      "A node that is part of a cycle",
    ],
    correctAnswer: "A node with no parents",
    explanation: "In a tree, the root is the topmost node with no parents.",
  },
  {
    question:
      "Which algorithm is used to find the minimum spanning tree of a connected graph?",
    options: [
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
      "Floyd-Warshall Algorithm",
      "Depth-First Search (DFS)",
    ],
    correctAnswer: "Kruskal's Algorithm",
    explanation:
      "Kruskal's Algorithm is used to find the minimum spanning tree of a connected graph.",
  },
  {
    question:
      "What is the time complexity of Dijkstra's algorithm for finding the shortest path using a priority queue?",
    options: ["O(V^2)", "O(E + V log V)", "O(V log V)", "O(E log V)"],
    correctAnswer: "O(E + V log V)",
    explanation:
      "The time complexity of Dijkstra's algorithm with a priority queue is O(E + V log V), where E is the number of edges and V is the number of vertices.",
  },
  {
    question:
      "Which of the following graphs can be represented using an adjacency matrix?",
    options: [
      "Only undirected graphs",
      "Both directed and undirected graphs",
      "Only directed graphs",
      "Only trees",
    ],
    correctAnswer: "Both directed and undirected graphs",
    explanation:
      "An adjacency matrix can represent both directed and undirected graphs.",
  },
  {
    question: "What is the characteristic of a complete graph?",
    options: [
      "All vertices are connected by a single edge",
      "All vertices are connected to every other vertex",
      "It contains exactly one cycle",
      "It has no edges",
    ],
    correctAnswer: "All vertices are connected to every other vertex",
    explanation:
      "In a complete graph, every vertex is connected to every other vertex.",
  },
  {
    question: "What is a cycle in a graph?",
    options: [
      "A path that starts and ends at the same vertex without repeating any edges",
      "A subgraph that contains no vertices",
      "A graph with no edges",
      "A path that connects all vertices",
    ],
    correctAnswer:
      "A path that starts and ends at the same vertex without repeating any edges",
    explanation:
      "A cycle is a path in a graph that starts and ends at the same vertex, with no repeated edges.",
  },
];
