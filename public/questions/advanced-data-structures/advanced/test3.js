export const test3 = [
  {
    question:
      "What is the primary advantage of using a Fenwick Tree over a Segment Tree for cumulative frequency table updates?",
    options: [
      "Less memory usage",
      "Faster construction",
      "Simpler code implementation",
      "Faster query operations",
    ],
    correctAnswer: "Simpler code implementation",
    explanation:
      "Fenwick Tree is simpler to implement than a Segment Tree, especially for cumulative frequency table updates, making it ideal for simpler applications.",
  },
  {
    question:
      "What is the time complexity of constructing a Suffix Tree for a string of length N using Ukkonen's algorithm?",
    options: ["O(N)", "O(N log N)", "O(N^2)", "O(N^3)"],
    correctAnswer: "O(N)",
    explanation:
      "Ukkonen's algorithm allows the Suffix Tree construction in linear time O(N), where N is the length of the string.",
  },
  {
    question:
      "Which of the following operations is NOT optimized by using union by rank in the Disjoint Set data structure?",
    options: ["Find", "Union", "Path compression", "Insert"],
    correctAnswer: "Insert",
    explanation:
      "Union by rank optimizes the 'find' and 'union' operations, but it does not affect the 'insert' operation.",
  },
  {
    question:
      "In a Suffix Tree, what is the space complexity of storing a string of length N with the Suffix Tree that includes suffix links?",
    options: ["O(N)", "O(N log N)", "O(N^2)", "O(N^2 log N)"],
    correctAnswer: "O(N)",
    explanation:
      "The space complexity of a Suffix Tree is O(N), where N is the length of the string, even with suffix links included.",
  },
  {
    question:
      "How is the range minimum query (RMQ) implemented efficiently using Segment Trees?",
    options: [
      "By using bottom-up dynamic programming",
      "By storing the minimum values of segments in tree nodes",
      "By applying prefix sum logic",
      "By maintaining the median of the segment values",
    ],
    correctAnswer: "By storing the minimum values of segments in tree nodes",
    explanation:
      "Range Minimum Queries are efficiently implemented in Segment Trees by storing the minimum value for each segment at its corresponding node.",
  },
  {
    question:
      "For which scenario is a Suffix Tree particularly useful in string processing?",
    options: [
      "Finding the longest palindromic substring",
      "Efficient substring search",
      "Counting the number of unique substrings",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Suffix Trees are useful for various string processing tasks, including substring search, finding longest palindromic substrings, and counting unique substrings.",
  },
  {
    question:
      "What is the key difference between a Segment Tree and a Fenwick Tree (Binary Indexed Tree)?",
    options: [
      "Fenwick Tree supports range queries, while Segment Tree supports point queries",
      "Segment Tree supports range queries and point updates, while Fenwick Tree supports only point updates and prefix sum queries",
      "Segment Tree requires more memory",
      "Fenwick Tree is more efficient for sorting",
    ],
    correctAnswer:
      "Segment Tree supports range queries and point updates, while Fenwick Tree supports only point updates and prefix sum queries",
    explanation:
      "The Segment Tree supports both range queries and point updates, whereas Fenwick Tree is optimized for prefix sum queries and point updates.",
  },
  {
    question: "In a Suffix Tree, how is a suffix link used?",
    options: [
      "To store the next suffix in the sequence",
      "To point to the longest proper suffix that is also a substring",
      "To optimize the search for repeating patterns",
      "To simplify the merging of suffixes",
    ],
    correctAnswer:
      "To point to the longest proper suffix that is also a substring",
    explanation:
      "Suffix links in a Suffix Tree point to the longest proper suffix that is also a substring, enabling faster construction and querying.",
  },
  {
    question:
      "What is the time complexity of the ‘find’ operation in Disjoint Set with path compression and union by rank?",
    options: ["O(log N)", "O(N)", "O(α(N))", "O(N^2)"],
    correctAnswer: "O(α(N))",
    explanation:
      "With path compression and union by rank, the time complexity of the ‘find’ operation in a Disjoint Set is nearly constant, O(α(N)), where α is the inverse Ackermann function.",
  },
  {
    question: "Which algorithm is used to build a Suffix Tree in linear time?",
    options: [
      "Ukkonen’s algorithm",
      "Suffix array construction",
      "KMP algorithm",
      "Boyer-Moore algorithm",
    ],
    correctAnswer: "Ukkonen’s algorithm",
    explanation:
      "Ukkonen’s algorithm constructs a Suffix Tree in linear time, O(N), where N is the length of the input string.",
  },
  {
    question: "How can you optimize the space complexity of a Segment Tree?",
    options: [
      "By reducing the number of leaf nodes",
      "By using lazy propagation",
      "By using a sparse segment tree",
      "By compressing the tree structure",
    ],
    correctAnswer: "By using a sparse segment tree",
    explanation:
      "A sparse segment tree stores only non-zero values, reducing space complexity when compared to a regular segment tree that stores values for every node.",
  },
  {
    question:
      "What is the main advantage of using a Fenwick Tree over a Segment Tree?",
    options: [
      "Fenwick Tree uses less memory",
      "Fenwick Tree has faster updates and queries for point updates and prefix sums",
      "Fenwick Tree supports range queries",
      "Fenwick Tree has O(1) query complexity",
    ],
    correctAnswer:
      "Fenwick Tree has faster updates and queries for point updates and prefix sums",
    explanation:
      "Fenwick Tree (BIT) is simpler to implement and has faster updates and queries for prefix sums compared to Segment Trees, but it does not support range queries as efficiently.",
  },
  {
    question:
      "Which operation can be performed more efficiently in a Disjoint Set data structure with union by rank and path compression?",
    options: ["Path finding", "Sorting", "Prefix sum", "Range minimum queries"],
    correctAnswer: "Path finding",
    explanation:
      "With path compression and union by rank, the Disjoint Set structure optimizes path finding, reducing the time complexity to nearly constant for repeated find operations.",
  },
  {
    question: "How can a Suffix Array be used in string pattern matching?",
    options: [
      "By using the LCP array to improve search time",
      "By sorting the suffixes and binary searching the pattern",
      "By using KMP algorithm",
      "Both A and B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Suffix Arrays can be used for string pattern matching by sorting the suffixes of a string and using binary search. The LCP array helps speed up the search by avoiding redundant comparisons.",
  },
  {
    question:
      "In a Segment Tree, which of the following is a key advantage of lazy propagation?",
    options: [
      "It allows faster build time",
      "It helps reduce the time complexity of range updates",
      "It enables faster construction of the tree",
      "It provides faster range queries",
    ],
    correctAnswer: "It helps reduce the time complexity of range updates",
    explanation:
      "Lazy propagation helps reduce the time complexity of range updates by postponing the updates to the nodes of the tree until necessary, thereby making range updates more efficient.",
  },
  {
    question:
      "Which of the following is NOT a valid application of a Fenwick Tree (Binary Indexed Tree)?",
    options: [
      "Querying prefix sums",
      "Updating the frequency of elements",
      "Finding range sums",
      "Storing sparse data",
    ],
    correctAnswer: "Storing sparse data",
    explanation:
      "Fenwick Tree is not suitable for storing sparse data. It is optimized for prefix sum queries and point updates, not for storing sparse data efficiently.",
  },
  {
    question: "Which of the following is a key application of a Suffix Tree?",
    options: [
      "Palindrome checking",
      "Pattern matching",
      "Dynamic string updates",
      "Substring search in unstructured data",
    ],
    correctAnswer: "Pattern matching",
    explanation:
      "Suffix Trees are widely used for string pattern matching, as they allow fast search for substrings and related tasks like finding repeats or longest common substrings.",
  },
  {
    question:
      "In a Disjoint Set, what happens when two sets are merged using union by rank?",
    options: [
      "The tree with higher depth becomes the parent",
      "The set with fewer elements becomes the parent",
      "The two sets merge into a single tree, with the smaller tree becoming the child",
      "The two sets merge based on their size",
    ],
    correctAnswer:
      "The two sets merge into a single tree, with the smaller tree becoming the child",
    explanation:
      "Union by rank ensures that the tree remains shallow by making the smaller tree the child of the larger tree during the merge, thus keeping the tree balanced.",
  },
];
