export const test3 = [
  {
    question:
      "What is the effect of performing multiple Union operations on two elements already in the same set?",
    options: [
      "It creates a cycle in the structure.",
      "It has no effect.",
      "It merges the sets again.",
      "It reduces the set size.",
    ],
    correctAnswer: "It has no effect.",
    explanation:
      "If two elements are already in the same set, the Union operation will not change the structure.",
  },
  {
    question:
      "What is the main difference between Union by rank and Union by size?",
    options: [
      "Union by rank focuses on tree depth, while Union by size focuses on the number of elements.",
      "Union by rank merges smaller trees, while Union by size merges trees of equal height.",
      "Union by size merges trees based on total element count, while Union by rank merges trees based on depth.",
      "There is no difference between the two.",
    ],
    correctAnswer:
      "Union by rank focuses on tree depth, while Union by size focuses on the number of elements.",
    explanation:
      "Union by rank aims to keep tree height minimal by merging smaller depth trees, while Union by size merges trees based on the number of elements in each set.",
  },
  {
    question:
      "Which of the following best describes the amortized time complexity of a Union-Find operation with both path compression and Union by rank?",
    options: ["O(log n)", "O(α(n))", "O(n log n)", "O(n^2)"],
    correctAnswer: "O(α(n))",
    explanation:
      "The amortized time complexity of Union-Find operations with both path compression and Union by rank is O(α(n)), where α(n) is the inverse Ackermann function.",
  },
  {
    question:
      "What kind of data structure is typically used internally by a Disjoint Set?",
    options: [
      "Linked List",
      "Tree structure",
      "Binary Search Tree",
      "Hash Table",
    ],
    correctAnswer: "Tree structure",
    explanation:
      "Disjoint sets (Union-Find) are usually implemented using trees where each node points to its parent, and the root node is the representative of the set.",
  },
  {
    question:
      "In Union by rank, what happens when two sets of equal rank are unioned?",
    options: [
      "The rank of the new set is the maximum of the two ranks.",
      "The rank of the new set is increased by one.",
      "The rank of the new set is the average of the two ranks.",
      "The rank remains unchanged.",
    ],
    correctAnswer: "The rank of the new set is increased by one.",
    explanation:
      "When two sets of equal rank are unioned, the rank of the resulting set is incremented by one to reflect the increased tree depth.",
  },
  {
    question:
      "How does the Find operation in a Disjoint Set affect the structure of the set?",
    options: [
      "It compresses the path from the element to the root.",
      "It increases the tree depth.",
      "It swaps elements between different sets.",
      "It removes redundant connections.",
    ],
    correctAnswer: "It compresses the path from the element to the root.",
    explanation:
      "The Find operation compresses the path from the element to the root, making future operations faster by reducing the tree depth.",
  },
  {
    question:
      "In a Disjoint Set data structure, what ensures that sets remain balanced during the Union operation?",
    options: [
      "Path compression",
      "Union by rank",
      "Depth-first search",
      "Breadth-first search",
    ],
    correctAnswer: "Union by rank",
    explanation:
      "Union by rank helps to keep the sets balanced by merging the tree with lower rank under the tree with higher rank.",
  },
  {
    question:
      "Which of the following problems can be solved efficiently using the Union-Find data structure?",
    options: [
      "Shortest path in a graph",
      "Detecting cycles in an undirected graph",
      "Finding the minimum spanning tree in a directed graph",
      "Balancing a binary search tree",
    ],
    correctAnswer: "Detecting cycles in an undirected graph",
    explanation:
      "Union-Find is often used to detect cycles in an undirected graph, as it helps in managing connected components efficiently.",
  },
  {
    question:
      "What is the effect of using both path compression and Union by rank on the time complexity of Union-Find operations?",
    options: [
      "It increases the time complexity to O(n log n).",
      "It ensures near constant time operations.",
      "It makes the operations slower than O(n).",
      "It has no impact on the time complexity.",
    ],
    correctAnswer: "It ensures near constant time operations.",
    explanation:
      "Using both path compression and Union by rank ensures that Union-Find operations have near constant time complexity, specifically O(α(n)), where α(n) is the inverse Ackermann function.",
  },
  {
    question:
      "How does path compression improve the efficiency of Union-Find operations?",
    options: [
      "It decreases the number of sets.",
      "It reduces the depth of the trees representing sets.",
      "It increases the number of elements in each set.",
      "It ensures that all elements are in a single set.",
    ],
    correctAnswer: "It reduces the depth of the trees representing sets.",
    explanation:
      "Path compression reduces the depth of the trees in the Disjoint Set, leading to faster future Union and Find operations.",
  },
  {
    question:
      "Which of the following advanced data structures can efficiently handle dynamic connectivity problems?",
    options: [
      "Segment Tree",
      "Binary Search Tree",
      "Disjoint Set (Union-Find)",
      "Trie",
    ],
    correctAnswer: "Disjoint Set (Union-Find)",
    explanation:
      "Disjoint Set (Union-Find) is designed to manage dynamic connectivity problems efficiently, such as tracking the connected components of a graph.",
  },
  {
    question:
      "What is the primary use of a Segment Tree in algorithmic problems?",
    options: [
      "Finding the shortest path",
      "Efficient range queries and updates",
      "Cycle detection in a graph",
      "Sorting an array",
    ],
    correctAnswer: "Efficient range queries and updates",
    explanation:
      "A Segment Tree is mainly used for efficiently answering range queries and updating elements in logarithmic time.",
  },
  {
    question:
      "In the Fenwick Tree (Binary Indexed Tree), what operation is most commonly optimized?",
    options: [
      "Finding the minimum element",
      "Range sum queries and point updates",
      "Graph traversal",
      "Cycle detection",
    ],
    correctAnswer: "Range sum queries and point updates",
    explanation:
      "The Fenwick Tree is commonly used to efficiently compute range sum queries and perform point updates in logarithmic time.",
  },
  {
    question:
      "Which of the following operations is critical for the efficient working of the Disjoint Set (Union-Find) data structure?",
    options: [
      "In-order traversal",
      "Path compression",
      "Heapify operation",
      "Range update",
    ],
    correctAnswer: "Path compression",
    explanation:
      "Path compression is crucial in Union-Find as it helps flatten the structure of the set, speeding up future find operations.",
  },
  {
    question:
      "What type of tree structure does the Suffix Tree typically represent?",
    options: [
      "Trie-based tree structure",
      "Balanced binary tree",
      "AVL Tree",
      "Red-Black Tree",
    ],
    correctAnswer: "Trie-based tree structure",
    explanation:
      "A Suffix Tree is a compressed Trie-based structure used to store all suffixes of a given string, which helps in string matching problems.",
  },
  {
    question:
      "In a Segment Tree, what is the time complexity for both building the tree and querying a range?",
    options: [
      "O(n) for building and O(log n) for querying",
      "O(log n) for both building and querying",
      "O(n log n) for both building and querying",
      "O(n log n) for building and O(log n) for querying",
    ],
    correctAnswer: "O(n log n) for building and O(log n) for querying",
    explanation:
      "A Segment Tree is built in O(n log n) time, and each range query is handled in O(log n) time.",
  },
  {
    question: "How does the Fenwick Tree differ from a Segment Tree?",
    options: [
      "Fenwick Tree is used for range queries, Segment Tree is not.",
      "Fenwick Tree supports point updates, Segment Tree does not.",
      "Fenwick Tree is space-efficient, while Segment Tree requires more space.",
      "Segment Tree is faster for all types of operations.",
    ],
    correctAnswer:
      "Fenwick Tree is space-efficient, while Segment Tree requires more space.",
    explanation:
      "Fenwick Trees are more space-efficient than Segment Trees but may not support range updates as efficiently as Segment Trees.",
  },
  {
    question:
      "Which of the following advanced data structures is well-suited for solving problems involving dynamic range minimum queries?",
    options: ["Binary Search Tree", "Fenwick Tree", "Segment Tree", "Heap"],
    correctAnswer: "Segment Tree",
    explanation:
      "A Segment Tree is ideal for efficiently answering dynamic range minimum queries by allowing updates and queries in logarithmic time.",
  },
  {
    question:
      "In the Union-Find algorithm, what is the benefit of using both Union by rank and path compression together?",
    options: [
      "It reduces the space complexity of the data structure.",
      "It improves the time complexity to O(log n).",
      "It ensures that the Find and Union operations run in nearly constant time.",
      "It decreases the number of sets.",
    ],
    correctAnswer:
      "It ensures that the Find and Union operations run in nearly constant time.",
    explanation:
      "Using both Union by rank and path compression together ensures that Union and Find operations run in nearly constant time, O(α(n)), where α(n) is the inverse Ackermann function.",
  },
  {
    question:
      "Which advanced data structure is most suitable for solving Lowest Common Ancestor (LCA) queries efficiently in a tree?",
    options: [
      "Trie",
      "Disjoint Set (Union-Find)",
      "Segment Tree",
      "Fenwick Tree",
    ],
    correctAnswer: "Disjoint Set (Union-Find)",
    explanation:
      "The Disjoint Set (Union-Find) data structure, along with the Binary Lifting technique, is commonly used to efficiently solve the Lowest Common Ancestor (LCA) problem in trees.",
  },
];
