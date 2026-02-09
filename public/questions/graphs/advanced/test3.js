export const test3 = [
  {
    question:
      "In the context of a directed graph, what is the main difference between a strongly connected component (SCC) and a weakly connected component?",
    options: [
      "SCCs are only reachable from the root vertex",
      "SCCs consist of vertices where every vertex is reachable from every other vertex, while weakly connected components only consider connectivity ignoring edge direction",
      "Weakly connected components are formed by ignoring edge weights",
      "SCCs contain cycles, while weakly connected components do not",
    ],
    correctAnswer:
      "SCCs consist of vertices where every vertex is reachable from every other vertex, while weakly connected components only consider connectivity ignoring edge direction",
    explanation:
      "A strongly connected component requires all vertices to be mutually reachable considering edge direction, while weakly connected components ignore edge direction.",
  },
  {
    question:
      "In a directed graph with negative weights, which algorithm can be used to detect negative weight cycles?",
    options: [
      "Dijkstra's Algorithm",
      "Floyd-Warshall Algorithm",
      "Bellman-Ford Algorithm",
      "Kruskal's Algorithm",
    ],
    correctAnswer: "Bellman-Ford Algorithm",
    explanation:
      "Bellman-Ford can handle graphs with negative edge weights and can detect negative weight cycles.",
  },
  {
    question:
      "What is the space complexity of storing a graph using an adjacency list representation?",
    options: ["O(V^2)", "O(E + V)", "O(V log V)", "O(E^2)"],
    correctAnswer: "O(E + V)",
    explanation:
      "The adjacency list stores each edge and vertex, thus requiring space proportional to the number of edges (E) plus the number of vertices (V).",
  },
  {
    question:
      "Which algorithm can be used to find the shortest paths in a graph with non-negative weights, but without negative edge weights?",
    options: [
      "Floyd-Warshall Algorithm",
      "Dijkstra's Algorithm",
      "Bellman-Ford Algorithm",
      "Kruskal's Algorithm",
    ],
    correctAnswer: "Dijkstra's Algorithm",
    explanation:
      "Dijkstra's algorithm efficiently finds the shortest paths from a single source to all other vertices, assuming non-negative edge weights.",
  },
  {
    question:
      "What is the primary advantage of using an adjacency list over an adjacency matrix in a sparse graph?",
    options: [
      "Adjacency list allows faster edge lookup",
      "Adjacency list uses less space for sparse graphs",
      "Adjacency list is better for dense graphs",
      "Adjacency list can handle directed edges better",
    ],
    correctAnswer: "Adjacency list uses less space for sparse graphs",
    explanation:
      "In sparse graphs, the adjacency list is more space-efficient because it only stores existing edges, while an adjacency matrix requires O(V^2) space.",
  },
  {
    question:
      "In an undirected graph, how can you find a cycle using depth-first search (DFS)?",
    options: [
      "By keeping track of the visited vertices and checking for back edges",
      "By marking all vertices as visited and looking for disconnected components",
      "By traversing the graph in a circular fashion",
      "By using a breadth-first search approach",
    ],
    correctAnswer:
      "By keeping track of the visited vertices and checking for back edges",
    explanation:
      "DFS can detect cycles in an undirected graph by checking for back edges (edges that point to an ancestor in the recursion stack).",
  },
  {
    question:
      "Which of the following is a necessary condition for a graph to be a tree?",
    options: [
      "It must be fully connected and acyclic",
      "It must contain exactly one cycle",
      "It must have multiple connected components",
      "It must contain a spanning tree",
    ],
    correctAnswer: "It must be fully connected and acyclic",
    explanation:
      "A tree is a connected, acyclic graph. It has exactly V-1 edges for V vertices.",
  },
  {
    question: "How do you determine if a graph is bipartite?",
    options: [
      "By checking if the graph is acyclic",
      "By performing BFS or DFS and ensuring that the graph can be colored with two colors",
      "By ensuring that the graph has an even number of edges",
      "By verifying that all vertices have an even degree",
    ],
    correctAnswer:
      "By performing BFS or DFS and ensuring that the graph can be colored with two colors",
    explanation:
      "A bipartite graph can be colored with two colors such that no two adjacent vertices have the same color. This can be checked using BFS or DFS.",
  },
  {
    question: "In a graph, what does a topological sort represent?",
    options: [
      "A sorted list of vertices based on the degree of each vertex",
      "An ordering of vertices such that for every directed edge u -> v, u appears before v in the ordering",
      "A cycle detection algorithm",
      "A way to find the minimum spanning tree",
    ],
    correctAnswer:
      "An ordering of vertices such that for every directed edge u -> v, u appears before v in the ordering",
    explanation:
      "Topological sorting is applicable only to directed acyclic graphs (DAGs) and provides a linear ordering of vertices that respects the direction of edges.",
  },
  {
    question:
      "What is the time complexity of BFS and DFS for a graph with V vertices and E edges?",
    options: ["O(E + V)", "O(V^2)", "O(E log V)", "O(V log E)"],
    correctAnswer: "O(E + V)",
    explanation:
      "Both BFS and DFS have a time complexity of O(E + V) as they visit all vertices and edges once.",
  },
  {
    question: "What is a key property of a spanning tree in a graph?",
    options: [
      "It contains the shortest path between every pair of vertices",
      "It contains exactly V edges for V vertices",
      "It includes all cycles in the graph",
      "It is a fully connected graph with the same number of edges as the original graph",
    ],
    correctAnswer: "It contains exactly V-1 edges for V vertices",
    explanation:
      "A spanning tree of a graph is a subgraph that connects all vertices without any cycles, and it contains exactly V-1 edges for V vertices.",
  },
  {
    question:
      "In a directed graph, how can you detect a negative weight cycle?",
    options: [
      "By running the Dijkstra's algorithm",
      "By running the Bellman-Ford algorithm and checking if any distance can still be updated after V-1 iterations",
      "By running a depth-first search",
      "By checking the adjacency matrix",
    ],
    correctAnswer:
      "By running the Bellman-Ford algorithm and checking if any distance can still be updated after V-1 iterations",
    explanation:
      "The Bellman-Ford algorithm can detect negative weight cycles by checking if any distance can still be updated after V-1 iterations.",
  },
  {
    question:
      "Which algorithm is commonly used to find the Minimum Spanning Tree (MST) of a graph?",
    options: [
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
      "Bellman-Ford Algorithm",
      "Prim's Algorithm",
    ],
    correctAnswer: "Kruskal's Algorithm",
    explanation:
      "Kruskal's algorithm is used to find the Minimum Spanning Tree (MST) by sorting edges by weight and adding them in increasing order, ensuring no cycles.",
  },
  {
    question:
      "Which of the following is NOT a characteristic of a bipartite graph?",
    options: [
      "It can be colored using two colors such that no two adjacent vertices have the same color",
      "It contains an odd cycle",
      "It can be represented by two disjoint sets of vertices",
      "It has no odd-length cycles",
    ],
    correctAnswer: "It contains an odd cycle",
    explanation:
      "A bipartite graph has no odd-length cycles, as it is bipartitioned into two disjoint sets of vertices.",
  },
  {
    question:
      "In a directed graph, what does it mean if an edge from vertex A to vertex B is a back edge in DFS traversal?",
    options: [
      "It connects vertices in the same tree",
      "It points to an ancestor in the DFS tree",
      "It points to a descendant in the DFS tree",
      "It is part of the minimum spanning tree",
    ],
    correctAnswer: "It points to an ancestor in the DFS tree",
    explanation:
      "A back edge points to an ancestor in the DFS tree, indicating a cycle in the graph.",
  },
  {
    question:
      "What is the time complexity of Prim's algorithm using a priority queue for a graph with V vertices and E edges?",
    options: ["O(E log V)", "O(V^2)", "O(E + V log V)", "O(V log E)"],
    correctAnswer: "O(E log V)",
    explanation:
      "Prim's algorithm using a priority queue has a time complexity of O(E log V) where V is the number of vertices and E is the number of edges.",
  },
  {
    question:
      "What is the main advantage of using an adjacency list representation over an adjacency matrix in a sparse graph?",
    options: [
      "Adjacency list is faster for checking edge existence",
      "Adjacency list uses less memory",
      "Adjacency list can store edge weights more efficiently",
      "Adjacency list supports bidirectional traversal",
    ],
    correctAnswer: "Adjacency list uses less memory",
    explanation:
      "In sparse graphs, an adjacency list is more space-efficient because it only stores the edges that actually exist, unlike an adjacency matrix.",
  },
  {
    question: "What is the primary use case of Dijkstra’s algorithm in graphs?",
    options: [
      "Finding the shortest path from a source vertex to all other vertices in a graph with non-negative edge weights",
      "Detecting negative weight cycles",
      "Finding the minimum spanning tree",
      "Finding strongly connected components",
    ],
    correctAnswer:
      "Finding the shortest path from a source vertex to all other vertices in a graph with non-negative edge weights",
    explanation:
      "Dijkstra’s algorithm is used to find the shortest path in graphs with non-negative edge weights.",
  },
  {
    question:
      "What is the difference between a depth-first search (DFS) and breadth-first search (BFS) in terms of their traversal strategy?",
    options: [
      "DFS uses a queue while BFS uses a stack",
      "DFS uses a stack while BFS uses a queue",
      "DFS explores all vertices in a level before moving to the next level, while BFS explores in a depth-first manner",
      "DFS and BFS are the same",
    ],
    correctAnswer: "DFS uses a stack while BFS uses a queue",
    explanation:
      "DFS uses a stack (either implicitly through recursion or explicitly with a data structure) while BFS uses a queue for level-wise traversal.",
  },
  {
    question:
      "In which of the following scenarios would a depth-first search (DFS) be preferable to a breadth-first search (BFS)?",
    options: [
      "When finding the shortest path in an unweighted graph",
      "When detecting cycles in a graph",
      "When you need to explore the entire graph level by level",
      "When the graph is a directed acyclic graph (DAG)",
    ],
    correctAnswer: "When detecting cycles in a graph",
    explanation:
      "DFS is typically more useful for cycle detection in directed graphs, as it tracks recursion depth and back edges efficiently.",
  },
  {
    question:
      "Which algorithm is best suited for finding the shortest paths from all vertices to all other vertices in a graph with both positive and negative edge weights?",
    options: [
      "Floyd-Warshall Algorithm",
      "Dijkstra’s Algorithm",
      "Bellman-Ford Algorithm",
      "Prim’s Algorithm",
    ],
    correctAnswer: "Floyd-Warshall Algorithm",
    explanation:
      "Floyd-Warshall algorithm is a dynamic programming algorithm that computes the shortest paths between all pairs of vertices, and works with negative edge weights.",
  },
  {
    question: "What is a key property of a minimum spanning tree (MST)?",
    options: [
      "It contains exactly V edges for V vertices",
      "It contains the shortest path between all pairs of vertices",
      "It contains exactly E edges for V vertices",
      "It connects all vertices without forming any cycle and minimizes the total edge weight",
    ],
    correctAnswer:
      "It connects all vertices without forming any cycle and minimizes the total edge weight",
    explanation:
      "A minimum spanning tree (MST) connects all vertices in a graph with the minimal total weight of edges and no cycles.",
  },
];
