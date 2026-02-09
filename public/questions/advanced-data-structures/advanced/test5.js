export const test5 = [
  {
    question:
      "What is the time complexity for a range sum query in a Segment Tree?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
    correctAnswer: "O(log N)",
    explanation:
      "A range sum query in a Segment Tree takes O(log N) time because the tree is balanced and only a few segments are queried.",
  },
  {
    question:
      "Which of the following is a disadvantage of using a Disjoint Set data structure?",
    options: [
      "Does not support union operation efficiently",
      "Requires extra space for path compression",
      "Requires frequent updates",
      "Cannot handle dynamic data",
    ],
    correctAnswer: "Requires extra space for path compression",
    explanation:
      "While path compression improves the efficiency of find operations, it may require extra space to maintain the parent links efficiently.",
  },
  {
    question:
      "In a Segment Tree, what is stored in each node when performing a range minimum query?",
    options: [
      "The maximum value in the segment",
      "The sum of the segment values",
      "The minimum value in the segment",
      "The median of the segment values",
    ],
    correctAnswer: "The minimum value in the segment",
    explanation:
      "For a range minimum query, each node stores the minimum value for the segment it represents.",
  },
  {
    question: "In the context of a Suffix Tree, what does each edge represent?",
    options: [
      "A single character",
      "A substring of the input string",
      "A prefix of the string",
      "A suffix of the input string",
    ],
    correctAnswer: "A substring of the input string",
    explanation:
      "In a Suffix Tree, each edge represents a substring of the input string, and the tree is built to efficiently store all suffixes.",
  },
  {
    question:
      "What is the primary advantage of using Union by Rank in a Disjoint Set?",
    options: [
      "It reduces memory usage",
      "It minimizes the height of the trees for faster find operations",
      "It allows faster path compression",
      "It enables faster union operations",
    ],
    correctAnswer:
      "It minimizes the height of the trees for faster find operations",
    explanation:
      "Union by Rank helps to minimize the height of trees, which ensures that find operations remain efficient.",
  },
  {
    question:
      "Which of the following data structures can be used to efficiently calculate the longest common prefix (LCP) of two suffixes in a string?",
    options: ["Fenwick Tree", "Disjoint Set", "Suffix Tree", "Segment Tree"],
    correctAnswer: "Suffix Tree",
    explanation:
      "Suffix Trees are ideal for efficiently finding the longest common prefix (LCP) of two suffixes, as they store all the suffixes of a string.",
  },
  {
    question:
      "Which of the following is an example of a dynamic set data structure?",
    options: ["Suffix Array", "Disjoint Set", "Fenwick Tree", "Segment Tree"],
    correctAnswer: "Disjoint Set",
    explanation:
      "Disjoint Set is a dynamic set data structure that supports union and find operations, which allows merging sets and finding their representatives.",
  },
  {
    question:
      "What is the time complexity of finding the maximum element in a range using a Segment Tree?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
    correctAnswer: "O(log N)",
    explanation:
      "Finding the maximum element in a range using a Segment Tree takes O(log N) time, where N is the size of the array.",
  },
  {
    question:
      "What is the key feature of a Fenwick Tree that makes it suitable for cumulative frequency tables?",
    options: [
      "Binary representation of indices",
      "Ability to store prefix sums",
      "Binary search on indices",
      "Segment-based storage",
    ],
    correctAnswer: "Ability to store prefix sums",
    explanation:
      "Fenwick Trees are designed to efficiently store and query prefix sums, making them suitable for cumulative frequency tables.",
  },
  {
    question:
      "Which data structure would be most suitable for answering range maximum queries?",
    options: ["Trie", "Segment Tree", "Disjoint Set", "Hash Table"],
    correctAnswer: "Segment Tree",
    explanation:
      "Segment Trees are efficient for answering range maximum queries in logarithmic time, making them suitable for this use case.",
  },
  {
    question:
      "What is the time complexity of building a Suffix Tree for a string of length N?",
    options: ["O(N log N)", "O(N)", "O(N^2)", "O(N^3)"],
    correctAnswer: "O(N)",
    explanation:
      "Suffix Trees can be built in O(N) time using efficient algorithms such as Ukkonen's algorithm.",
  },
  {
    question:
      "Which of the following algorithms can be used to construct a Suffix Tree in linear time?",
    options: [
      "Radix Sort",
      "Skew Algorithm",
      "Ukkonen's Algorithm",
      "KMP Algorithm",
    ],
    correctAnswer: "Ukkonen's Algorithm",
    explanation:
      "Ukkonen's Algorithm is a linear-time algorithm for constructing Suffix Trees, which is efficient for large strings.",
  },
  {
    question:
      "In a Fenwick Tree, which operation is performed using the BIT (Binary Indexed Tree) data structure?",
    options: [
      "Range queries",
      "Prefix sum queries",
      "Sorting",
      "Binary search",
    ],
    correctAnswer: "Prefix sum queries",
    explanation:
      "Fenwick Trees are mainly used for efficient prefix sum queries and updates in logarithmic time.",
  },
  {
    question:
      "In the Disjoint Set (Union-Find) data structure, which operation merges two sets?",
    options: ["Find", "Union", "Insert", "Split"],
    correctAnswer: "Union",
    explanation:
      "The Union operation merges two sets in the Disjoint Set data structure, and it can be optimized with techniques such as union by rank.",
  },
  {
    question:
      "What is the space complexity of a Suffix Tree for a string of length N?",
    options: ["O(N)", "O(N log N)", "O(N^2)", "O(log N)"],
    correctAnswer: "O(N)",
    explanation:
      "Suffix Trees require O(N) space, where N is the length of the string, due to the structure needed to store all suffixes.",
  },
  {
    question:
      "Which of the following strategies helps optimize the Disjoint Set data structure for faster find operations?",
    options: [
      "Path compression",
      "Union by rank",
      "Both path compression and union by rank",
      "Depth-first search",
    ],
    correctAnswer: "Both path compression and union by rank",
    explanation:
      "Using both path compression and union by rank optimizes the find and union operations in the Disjoint Set data structure.",
  },
  {
    question:
      "In a Segment Tree, what is the time complexity of updating a single element?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
    correctAnswer: "O(log N)",
    explanation:
      "Updating a single element in a Segment Tree requires O(log N) time due to the need to propagate changes through the tree.",
  },
  {
    question:
      "Which of the following data structures is most suitable for efficient range minimum and range maximum queries?",
    options: ["Segment Tree", "Trie", "Heap", "Hash Table"],
    correctAnswer: "Segment Tree",
    explanation:
      "Segment Trees are efficient for both range minimum and range maximum queries, with O(log N) query time.",
  },
  {
    question:
      "Which operation is commonly optimized in the Disjoint Set data structure using path compression?",
    options: ["Find", "Union", "Insert", "Split"],
    correctAnswer: "Find",
    explanation:
      "Path compression optimizes the 'find' operation by flattening the tree structure, reducing the time complexity of future find operations.",
  },
  {
    question:
      "What is the main advantage of using a Suffix Array over a Suffix Tree?",
    options: [
      "Faster construction",
      "Lower space complexity",
      "More efficient for finding LCP",
      "Handles larger input sizes",
    ],
    correctAnswer: "Lower space complexity",
    explanation:
      "Suffix Arrays use less space compared to Suffix Trees, making them more suitable for memory-limited environments.",
  },
];
