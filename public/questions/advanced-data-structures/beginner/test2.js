export const test2 = [
  {
    question: "What is the primary use of a Suffix Tree?",
    options: [
      "Sorting integers",
      "Storing substrings of a text",
      "Graph traversal",
      "Range queries",
    ],
    correctAnswer: "Storing substrings of a text",
    explanation:
      "A Suffix Tree is primarily used for storing and efficiently querying all possible substrings of a given text.",
  },
  {
    question:
      "What is the time complexity of constructing a Suffix Tree for a string of length n?",
    options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
    correctAnswer: "O(n)",
    explanation:
      "A Suffix Tree can be constructed in linear time, i.e., O(n), using Ukkonen's algorithm.",
  },
  {
    question:
      "Which of the following applications is NOT a typical use of Suffix Trees?",
    options: [
      "Substring search",
      "Pattern matching",
      "Palindrome detection",
      "Graph coloring",
    ],
    correctAnswer: "Graph coloring",
    explanation:
      "Suffix Trees are primarily used for problems involving string processing, not graph coloring.",
  },
  {
    question:
      "What is the space complexity of a Suffix Tree for a string of length n?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of a Suffix Tree is O(n) because it stores all suffixes of the string in a compact manner.",
  },
  {
    question: "What is a Suffix Array?",
    options: [
      "An array of integers",
      "An array of all suffixes of a string in lexicographical order",
      "A compressed form of a Suffix Tree",
      "An array of prefixes of a string",
    ],
    correctAnswer:
      "An array of all suffixes of a string in lexicographical order",
    explanation:
      "A Suffix Array stores all suffixes of a string in lexicographical order, allowing for efficient string searches.",
  },
  {
    question: "How is pattern matching performed using a Suffix Array?",
    options: [
      "By brute force comparison",
      "By binary search on the array",
      "By hashing the pattern",
      "By recursive traversal",
    ],
    correctAnswer: "By binary search on the array",
    explanation:
      "Pattern matching in a Suffix Array is performed by binary search to find the occurrence of a pattern.",
  },
  {
    question:
      "What is the time complexity of searching for a substring in a Suffix Tree?",
    options: ["O(n)", "O(log n)", "O(k)", "O(k + n)"],
    correctAnswer: "O(k)",
    explanation:
      "Searching for a substring of length k in a Suffix Tree takes O(k) time, where k is the length of the pattern.",
  },
  {
    question:
      "Which of the following operations can be performed more efficiently using a Suffix Array than a Suffix Tree?",
    options: [
      "Substring search",
      "Range queries",
      "Substring comparison",
      "Finding the longest common prefix",
    ],
    correctAnswer: "Finding the longest common prefix",
    explanation:
      "Finding the longest common prefix can be more efficiently done using a Suffix Array and the LCP (Longest Common Prefix) array.",
  },
  {
    question:
      "How does the LCP (Longest Common Prefix) array assist in using Suffix Arrays?",
    options: [
      "It stores the lengths of the common prefixes between consecutive suffixes.",
      "It stores the lengths of the longest suffixes.",
      "It stores the frequency of characters in the string.",
      "It stores the position of the first occurrence of each suffix.",
    ],
    correctAnswer:
      "It stores the lengths of the common prefixes between consecutive suffixes.",
    explanation:
      "The LCP array helps in finding common prefixes between consecutive suffixes in the Suffix Array.",
  },
  {
    question:
      "What is the relationship between Suffix Trees and Suffix Arrays?",
    options: [
      "They are completely different structures with no overlap",
      "Suffix Arrays are a space-efficient alternative to Suffix Trees",
      "Suffix Trees are derived from Suffix Arrays",
      "They are both used for graph traversal",
    ],
    correctAnswer:
      "Suffix Arrays are a space-efficient alternative to Suffix Trees",
    explanation:
      "Suffix Arrays provide a more space-efficient alternative to Suffix Trees while offering similar functionality.",
  },
  {
    question:
      "What is the primary use of a Disjoint Set (Union-Find) data structure?",
    options: [
      "Sorting elements",
      "Finding connected components in a graph",
      "Balancing binary trees",
      "Range queries",
    ],
    correctAnswer: "Finding connected components in a graph",
    explanation:
      "The Disjoint Set data structure is primarily used for efficiently managing and finding connected components in undirected graphs.",
  },
  {
    question:
      "What is the time complexity of the Find operation in a Union-Find data structure with path compression?",
    options: ["O(log n)", "O(n log n)", "O(α(n))", "O(n)"],
    correctAnswer: "O(α(n))",
    explanation:
      "With path compression, the Find operation runs in near constant time, O(α(n)), where α(n) is the inverse Ackermann function.",
  },
  {
    question:
      "What does the Union operation do in a Disjoint Set data structure?",
    options: [
      "It connects two sets into one.",
      "It removes an element from a set.",
      "It finds the representative of a set.",
      "It merges all sets into one.",
    ],
    correctAnswer: "It connects two sets into one.",
    explanation:
      "The Union operation merges two disjoint sets into a single set.",
  },
  {
    question:
      "What is the purpose of path compression in the Find operation of a Union-Find data structure?",
    options: [
      "To flatten the structure of the tree to improve future queries",
      "To find the representative element faster",
      "To delete unnecessary elements",
      "To increase the size of the set",
    ],
    correctAnswer:
      "To flatten the structure of the tree to improve future queries",
    explanation:
      "Path compression is used to flatten the structure of the tree during the Find operation, speeding up future queries.",
  },
  {
    question:
      "How does the Union by rank strategy improve the performance of the Union-Find data structure?",
    options: [
      "By always merging the larger tree under the smaller one",
      "By always merging the smaller tree under the larger one",
      "By balancing the binary search tree",
      "By removing redundant edges",
    ],
    correctAnswer: "By always merging the smaller tree under the larger one",
    explanation:
      "Union by rank ensures that the tree remains balanced by attaching the smaller tree under the root of the larger tree.",
  },
  {
    question:
      "What is the worst-case time complexity of performing a sequence of m Union and Find operations on n elements with Union by rank and path compression?",
    options: ["O(m log n)", "O(m + n log n)", "O(m α(n))", "O(n^2)"],
    correctAnswer: "O(m α(n))",
    explanation:
      "The time complexity of performing a sequence of Union and Find operations with path compression and Union by rank is O(m α(n)).",
  },
  {
    question:
      "Which of the following algorithms commonly uses the Union-Find data structure?",
    options: [
      "Dijkstra's algorithm",
      "Kruskal's Minimum Spanning Tree algorithm",
      "Bellman-Ford algorithm",
      "Floyd-Warshall algorithm",
    ],
    correctAnswer: "Kruskal's Minimum Spanning Tree algorithm",
    explanation:
      "Union-Find is frequently used in Kruskal's algorithm for finding the Minimum Spanning Tree (MST) of a graph.",
  },
  {
    question: "How are connected components represented in a Disjoint Set?",
    options: ["As arrays", "As trees", "As sets", "As linked lists"],
    correctAnswer: "As trees",
    explanation:
      "Connected components in a Disjoint Set are represented as trees, where each node points to its parent, and the root is the representative element.",
  },
  {
    question:
      "What is the role of the Find operation in a Union-Find data structure?",
    options: [
      "It merges two sets together.",
      "It finds the minimum element in the set.",
      "It determines the representative element of the set.",
      "It deletes an element from the set.",
    ],
    correctAnswer: "It determines the representative element of the set.",
    explanation:
      "The Find operation is used to determine the representative (root) of the set to which a given element belongs.",
  },
  {
    question:
      "What is the effect of performing multiple Union operations on two elements already in the same set?",
    options: [
      "It splits the set into two parts.",
      "It changes the rank of the set.",
      "It has no effect.",
      "It removes elements from the set.",
    ],
    correctAnswer: "It has no effect.",
    explanation:
      "Performing Union on two elements that are already in the same set has no effect, as they are already connected.",
  },
];
