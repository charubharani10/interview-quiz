export const test1 = [
  {
    question:
      "Which of the following is the time complexity of the Suffix Array construction using the Skew algorithm?",
    options: ["O(N log N)", "O(N)", "O(N^2)", "O(N log^2 N)"],
    correctAnswer: "O(N)",
    explanation:
      "Skew algorithm, which is an optimal algorithm for constructing Suffix Arrays, operates in linear time O(N).",
  },
  {
    question:
      "In a Segment Tree with Lazy Propagation, how are updates applied to a range of nodes?",
    options: [
      "Directly to every node in the range",
      "Only to the leaf nodes in the range",
      "Via deferred propagation during queries",
      "Through a priority queue",
    ],
    correctAnswer: "Via deferred propagation during queries",
    explanation:
      "In Lazy Propagation, updates are deferred until a query reaches the nodes, thereby making range updates more efficient.",
  },
  {
    question:
      "Which advanced data structure is specifically designed to handle dynamic connectivity queries?",
    options: [
      "Disjoint Set with path compression",
      "Segment Tree",
      "Fenwick Tree",
      "Trie",
    ],
    correctAnswer: "Disjoint Set with path compression",
    explanation:
      "Disjoint Set with path compression is optimized for dynamic connectivity problems, such as determining if two elements belong to the same set.",
  },
  {
    question: "What is the space complexity of a Suffix Tree?",
    options: ["O(N)", "O(N log N)", "O(N^2)", "O(2N)"],
    correctAnswer: "O(N)",
    explanation:
      "A Suffix Tree requires linear space, O(N), where N is the length of the string, to store all suffixes in a compressed tree structure.",
  },
  {
    question:
      "What is the major drawback of a simple Disjoint Set implementation without path compression?",
    options: [
      "Poor query time",
      "High space complexity",
      "Slow union operations",
      "Slow find operations",
    ],
    correctAnswer: "Slow find operations",
    explanation:
      "Without path compression, the 'find' operation in Disjoint Set can take linear time in the worst case, making the algorithm inefficient.",
  },
  {
    question:
      "Which of the following is not a typical use case of Segment Trees?",
    options: [
      "Range sum queries",
      "Range minimum queries",
      "Range maximum queries",
      "Binary search",
    ],
    correctAnswer: "Binary search",
    explanation:
      "Segment Trees are not used for binary search; they are typically used for efficient range queries, such as sum, minimum, or maximum.",
  },
  {
    question:
      "What is the best-known algorithm for efficiently constructing a Suffix Tree in linear time?",
    options: [
      "Ukkonen's algorithm",
      "KMP algorithm",
      "Boyer-Moore algorithm",
      "Knuth-Morris-Pratt algorithm",
    ],
    correctAnswer: "Ukkonen's algorithm",
    explanation:
      "Ukkonen's algorithm constructs Suffix Trees in linear time O(N), which is optimal for string pattern matching applications.",
  },
  {
    question:
      "How does a Suffix Array differ from a Suffix Tree in terms of complexity for substring searches?",
    options: [
      "Suffix Array is faster for substring search",
      "Suffix Tree is faster for substring search",
      "Both are equally fast",
      "Suffix Array is slower for all operations",
    ],
    correctAnswer: "Suffix Tree is faster for substring search",
    explanation:
      "Suffix Trees support faster substring searches due to direct access to all suffixes, whereas Suffix Arrays require binary search to access suffixes.",
  },
  {
    question: "In a Fenwick Tree, how do you update the value at index 'i'?",
    options: [
      "By setting the value of i directly",
      "By adding the delta to the next power of two",
      "By summing all previous values",
      "By iterating through all elements",
    ],
    correctAnswer: "By adding the delta to the next power of two",
    explanation:
      "In Fenwick Tree, to update the value at index 'i', you add the delta to indices that are responsible for index 'i', which follows powers of two.",
  },
  {
    question:
      "What is the time complexity of a single find and union operation in a Disjoint Set with path compression and union by rank?",
    options: ["O(1)", "O(log N)", "O(log* N)", "O(N)"],
    correctAnswer: "O(log* N)",
    explanation:
      "Path compression and union by rank ensure that the time complexity of find and union operations is near constant time, specifically O(log* N), where log* N grows extremely slowly.",
  },
  {
    question:
      "Which of the following algorithms is used to build a Suffix Array efficiently in O(N log N)?",
    options: [
      "Skew algorithm",
      "Radix sort",
      "Manber & Myers algorithm",
      "Counting sort",
    ],
    correctAnswer: "Manber & Myers algorithm",
    explanation:
      "Manber & Myers algorithm is an efficient algorithm that constructs Suffix Arrays in O(N log N) time.",
  },
  {
    question:
      "In the context of Segment Trees, what is the purpose of lazy propagation?",
    options: [
      "To store sum values efficiently",
      "To update nodes without affecting the structure",
      "To speed up updates on range queries",
      "To reduce memory consumption",
    ],
    correctAnswer: "To speed up updates on range queries",
    explanation:
      "Lazy propagation helps speed up range updates in Segment Trees by deferring updates until necessary, ensuring efficient processing.",
  },
  {
    question: "In a Disjoint Set, which operation combines two sets into one?",
    options: ["Find", "Union", "Split", "Merge"],
    correctAnswer: "Union",
    explanation:
      "The Union operation combines two disjoint sets into one set, and it is optimized with path compression to keep the structure flat.",
  },
  {
    question: "What is the worst-case space complexity of a Suffix Tree?",
    options: ["O(N)", "O(N log N)", "O(2N)", "O(N^2)"],
    correctAnswer: "O(2N)",
    explanation:
      "Suffix Trees can take up to 2N space, where N is the length of the string, due to the need to store suffix pointers and other auxiliary data.",
  },
  {
    question:
      "What is the time complexity of the find operation in a Disjoint Set with both path compression and union by rank?",
    options: ["O(N)", "O(log N)", "O(log* N)", "O(1)"],
    correctAnswer: "O(log* N)",
    explanation:
      "With path compression and union by rank, the 'find' operation in a Disjoint Set has near-constant time complexity, denoted as O(log* N).",
  },
  {
    question:
      "Which data structure is optimized for range queries and point updates with logarithmic time complexity?",
    options: ["Heap", "Trie", "Segment Tree", "Stack"],
    correctAnswer: "Segment Tree",
    explanation:
      "Segment Trees are optimized for range queries and point updates, providing O(log N) time complexity for both operations.",
  },
  {
    question: "In the context of a Suffix Array, what does 'ranking' refer to?",
    options: [
      "Sorting the suffixes lexicographically",
      "Assigning ranks to suffixes based on lexicographical order",
      "Assigning numeric ranks to characters",
      "Ranking the longest suffix first",
    ],
    correctAnswer: "Assigning ranks to suffixes based on lexicographical order",
    explanation:
      "Ranking in a Suffix Array refers to assigning a numerical value to each suffix based on its lexicographical position.",
  },
  {
    question:
      "Which advanced data structure is used to handle dynamic range minimum queries?",
    options: ["Segment Tree", "Fenwick Tree", "Trie", "Binary Search Tree"],
    correctAnswer: "Segment Tree",
    explanation:
      "Segment Trees are used for dynamic range minimum queries, offering efficient O(log N) query and update times.",
  },
  {
    question:
      "How does the Skew algorithm compare to other suffix array construction algorithms in terms of time complexity?",
    options: [
      "It is faster than O(N log N)",
      "It is slower than O(N)",
      "It takes quadratic time",
      "It has the same complexity as radix sort",
    ],
    correctAnswer: "It is faster than O(N log N)",
    explanation:
      "The Skew algorithm builds Suffix Arrays in linear time O(N), which is faster than the O(N log N) complexity of other algorithms.",
  },
  {
    question: "In a Fenwick Tree, what does each node store?",
    options: [
      "The prefix sum of elements up to that node",
      "The element at the node's index",
      "The maximum value in a range",
      "The cumulative sum of all values",
    ],
    correctAnswer: "The prefix sum of elements up to that node",
    explanation:
      "In a Fenwick Tree, each node stores the prefix sum of elements up to that index, allowing efficient range sum queries.",
  },
];
