export const test4 = [
  {
    question: "What is the purpose of the 'bubble down' operation in a heap?",
    options: [
      "To restore the heap property after insertion",
      "To restore the heap property after deletion",
      "To find the smallest element",
      "To sort the heap",
    ],
    correctAnswer: "To restore the heap property after deletion",
    explanation:
      "'Bubble down' (or 'heapify') is used after removing the root element to restore the heap property by comparing the element with its children and moving it down.",
  },
  {
    question: "In a min heap, which node contains the smallest element?",
    options: [
      "Any leaf node",
      "The root node",
      "The last inserted node",
      "Any non-leaf node",
    ],
    correctAnswer: "The root node",
    explanation: "In a min heap, the smallest element is always at the root.",
  },
  {
    question: "Which of the following is a property of a binary heap?",
    options: [
      "Complete binary tree",
      "Balanced binary tree",
      "Full binary tree",
      "Binary search tree",
    ],
    correctAnswer: "Complete binary tree",
    explanation:
      "A binary heap is a complete binary tree, meaning all levels except the last are completely filled, and the nodes in the last level are as far left as possible.",
  },
  {
    question: "What happens when an element is inserted into a heap?",
    options: [
      "The heap is re-arranged by bubbling up",
      "The heap is re-arranged by bubbling down",
      "The heap is re-arranged by reversing",
      "The heap is sorted",
    ],
    correctAnswer: "The heap is re-arranged by bubbling up",
    explanation:
      "When inserting an element into a heap, it is placed at the end of the tree and then 'bubbled up' to maintain the heap property.",
  },
  {
    question:
      "How do you find the parent of a node in a heap represented as an array?",
    options: ["Index / 2", "Index * 2", "Index - 1", "Index + 1"],
    correctAnswer: "Index / 2",
    explanation:
      "In an array representation of a heap, the parent of the node at index 'i' is located at index 'i/2'.",
  },
  {
    question:
      "What is the time complexity of the 'bubble up' operation in a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "The 'bubble up' operation takes O(log n) time, as it involves comparing the inserted element with its parent and moving it up the tree until the heap property is restored.",
  },
  {
    question:
      "Which of the following is a disadvantage of a heap when compared to an unsorted array?",
    options: [
      "Slower access to arbitrary elements",
      "More complex implementation",
      "Slower insertion",
      "Higher space complexity",
    ],
    correctAnswer: "Slower access to arbitrary elements",
    explanation:
      "Heaps do not allow fast access to arbitrary elements, unlike arrays where elements can be accessed in constant time. Heap operations only allow access to the root element.",
  },
  {
    question: "What is the time complexity of heapifying an entire array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "O(n)",
    explanation:
      "Heapifying an entire array can be done in O(n) time, as it involves applying the 'bubble down' operation on all non-leaf nodes.",
  },
  {
    question:
      "What is the time complexity of extracting the minimum element from a min heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Extracting the minimum element from a min heap involves removing the root element and then restoring the heap property, which takes O(log n) time.",
  },
  {
    question:
      "How do heaps compare to balanced binary search trees (BSTs) in terms of searching for arbitrary elements?",
    options: [
      "Heaps are faster",
      "Balanced BSTs are faster",
      "Both have the same performance",
      "Heaps and BSTs are not comparable",
    ],
    correctAnswer: "Balanced BSTs are faster",
    explanation:
      "Balanced BSTs provide O(log n) time complexity for searching arbitrary elements, while heaps do not provide efficient searching for arbitrary elements.",
  },
  {
    question:
      "What is the primary difference between a max heap and a min heap?",
    options: [
      "Max heap has the largest element at the root, min heap has the smallest",
      "Max heap is a balanced binary tree, min heap is not",
      "Max heap is used for sorting, min heap is used for searching",
      "There is no difference",
    ],
    correctAnswer:
      "Max heap has the largest element at the root, min heap has the smallest",
    explanation:
      "In a max heap, the root node holds the largest element, while in a min heap, the root node holds the smallest element.",
  },
  {
    question:
      "Which operation is used to maintain the heap property after insertion?",
    options: ["Bubble up", "Bubble down", "Heapify", "Rotate"],
    correctAnswer: "Bubble up",
    explanation:
      "After insertion, the 'bubble up' operation is used to restore the heap property by comparing the newly inserted element with its parent and moving it up the heap if necessary.",
  },
  {
    question: "Which of the following is true about a complete binary tree?",
    options: [
      "All levels are completely filled except possibly the last level",
      "Only the root is filled",
      "All nodes have two children",
      "It is a full binary tree",
    ],
    correctAnswer:
      "All levels are completely filled except possibly the last level",
    explanation:
      "A complete binary tree is a binary tree where all levels are completely filled except for the last level, which is filled from left to right.",
  },
  {
    question:
      "In which of the following scenarios would a heap be preferred over a sorted array?",
    options: [
      "Searching for an element",
      "Extracting the minimum element",
      "Inserting a new element",
      "Performing a binary search",
    ],
    correctAnswer: "Extracting the minimum element",
    explanation:
      "A heap is preferred when we need to frequently extract the minimum element, as it provides efficient O(log n) time for this operation, unlike a sorted array.",
  },
  {
    question:
      "Which of the following is the time complexity of deleting the root node in a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Deleting the root node involves removing the root and restoring the heap property, which takes O(log n) time.",
  },
  {
    question: "What is the space complexity of storing a heap in an array?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "A heap is typically stored in an array, where the space complexity is O(n) because each element of the heap takes constant space.",
  },
  {
    question:
      "Which of the following is the correct index for the left child of the node at index 'i' in an array-based heap?",
    options: ["2i + 1", "2i", "i + 1", "i - 1"],
    correctAnswer: "2i + 1",
    explanation:
      "In an array-based heap, the left child of the node at index 'i' is at index '2i + 1'.",
  },
  {
    question: "In a max heap, which node has the maximum value?",
    options: [
      "The root node",
      "Any leaf node",
      "The last inserted node",
      "Any non-leaf node",
    ],
    correctAnswer: "The root node",
    explanation: "In a max heap, the root node holds the largest value.",
  },
  {
    question:
      "What is the primary purpose of a heap in the context of priority queues?",
    options: [
      "To sort elements",
      "To find the minimum or maximum element efficiently",
      "To store elements in an unordered way",
      "To perform binary search",
    ],
    correctAnswer: "To find the minimum or maximum element efficiently",
    explanation:
      "Heaps are used in priority queues to efficiently find the minimum (in a min heap) or maximum (in a max heap) element.",
  },
  {
    question: "Which heap operation is used to merge two heaps into one?",
    options: ["Heapify", "Merge", "Insert", "Extract"],
    correctAnswer: "Heapify",
    explanation:
      "To merge two heaps into one, we can use the 'heapify' operation, but typically, heap merging is more complex and involves rebuilding the heap from the combined elements.",
  },
];
