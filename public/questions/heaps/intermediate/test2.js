export const test2 = [
  {
    question: "What is the purpose of the 'bubble-up' operation in a heap?",
    options: [
      "To maintain the complete tree property",
      "To restore the heap property after insertion",
      "To delete the root",
      "To remove the minimum element",
    ],
    correctAnswer: "To restore the heap property after insertion",
    explanation:
      "After inserting a new element into a heap, it may violate the heap property, and 'bubble-up' restores the heap property by moving the element upwards.",
  },
  {
    question: "Which of the following is true about a heap?",
    options: [
      "A heap is a binary tree",
      "A heap is a complete binary tree",
      "A heap is an unsorted binary tree",
      "A heap maintains a sorted order of elements",
    ],
    correctAnswer: "A heap is a complete binary tree",
    explanation:
      "A heap is a complete binary tree, meaning all levels of the tree are fully filled except for the last level, which is filled from left to right.",
  },
  {
    question:
      "Which of the following is the time complexity of building a heap from an unsorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "Building a heap from an unsorted array can be done in O(n) time using the 'heapify' operation.",
  },
  {
    question: "What is the result of 'extracting' the root from a max heap?",
    options: [
      "The maximum element remains at the root",
      "The heap property is violated",
      "The heap is empty",
      "The root is replaced with the last element in the heap",
    ],
    correctAnswer: "The root is replaced with the last element in the heap",
    explanation:
      "When extracting the root from a max heap, the root is replaced with the last element, and the heap property is restored by 'bubbling down'.",
  },
  {
    question:
      "Which of the following operations in a heap has the time complexity of O(log n)?",
    options: [
      "Insertion",
      "Finding the minimum element",
      "Heapify",
      "Searching for an element",
    ],
    correctAnswer: "Insertion",
    explanation:
      "Insertion in a heap requires O(log n) time because the inserted element may need to 'bubble up' to restore the heap property.",
  },
  {
    question: "How does a binary heap compare to a priority queue?",
    options: [
      "A binary heap is not a priority queue",
      "A priority queue can be implemented using a binary heap",
      "A priority queue is faster than a binary heap for insertion",
      "A binary heap is only used for sorting",
    ],
    correctAnswer: "A priority queue can be implemented using a binary heap",
    explanation:
      "A binary heap can be used to efficiently implement a priority queue, as it allows for fast insertion and extraction of the highest (or lowest) priority element.",
  },
  {
    question: "Which of the following is NOT a property of a heap?",
    options: [
      "It is a complete binary tree",
      "It is sorted in ascending order",
      "The parent node is always larger than its children in a max heap",
      "The parent node is always smaller than its children in a min heap",
    ],
    correctAnswer: "It is sorted in ascending order",
    explanation:
      "A heap does not maintain a sorted order of elements. It only ensures that the parent node is larger or smaller than its children.",
  },
  {
    question: "What is the space complexity of a binary heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of a binary heap is O(n), as it requires space proportional to the number of elements in the heap.",
  },
  {
    question:
      "In a max heap, what is the relationship between a parent node and its children?",
    options: [
      "The parent node is smaller than its children",
      "The parent node is equal to its children",
      "The parent node is larger than its children",
      "The parent node is randomly related to its children",
    ],
    correctAnswer: "The parent node is larger than its children",
    explanation:
      "In a max heap, the heap property ensures that each parent node is larger than its children.",
  },
  {
    question:
      "Which of the following is the correct way to find the left child of a node in a heap?",
    options: ["2i", "2i + 1", "i + 1", "i / 2"],
    correctAnswer: "2i + 1",
    explanation:
      "In a heap, the left child of a node at index 'i' is located at index 2i + 1.",
  },
  {
    question:
      "Which of the following is the worst-case time complexity of extracting the root from a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Extracting the root from a heap requires O(log n) time due to the need to restore the heap property by 'bubbling down'.",
  },
  {
    question: "How does heap sort work?",
    options: [
      "By repeatedly extracting the root of the heap",
      "By building the heap and sorting the elements at the root",
      "By recursively dividing the heap into subtrees",
      "By performing quick sort on the heap",
    ],
    correctAnswer: "By repeatedly extracting the root of the heap",
    explanation:
      "Heap sort works by repeatedly extracting the root element from the heap and placing it at the end of the array, effectively sorting the elements.",
  },
  {
    question:
      "What is the primary advantage of using a heap for priority queues?",
    options: [
      "It allows fast retrieval of the maximum element",
      "It can insert elements in O(1) time",
      "It allows fast searching for an element",
      "It automatically balances the tree",
    ],
    correctAnswer: "It allows fast retrieval of the maximum element",
    explanation:
      "Heaps allow fast access to the maximum (or minimum) element in a priority queue, making it efficient for operations like 'extract-max' and 'extract-min'.",
  },
  {
    question:
      "What is the time complexity of deleting an arbitrary element in a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "Deleting an arbitrary element in a heap requires finding the element (O(n) time), followed by replacing it with the last element and restoring the heap property (O(log n)).",
  },
  {
    question: "What happens when two nodes in a heap have the same value?",
    options: [
      "It violates the heap property",
      "The heap is not a complete binary tree",
      "It doesn't affect the heap property",
      "The root is always the smallest element",
    ],
    correctAnswer: "It doesn't affect the heap property",
    explanation:
      "Heaps allow duplicate values, and as long as the heap property is maintained, having two nodes with the same value does not affect the heap.",
  },
  {
    question: "How is a heap represented in memory?",
    options: [
      "As a linked list",
      "As an array",
      "As a tree of nodes",
      "As a stack",
    ],
    correctAnswer: "As an array",
    explanation:
      "A heap is typically represented as an array, where the children of an element at index 'i' are at indices 2i + 1 and 2i + 2.",
  },
  {
    question:
      "In a min heap, what is the relationship between a parent and its children?",
    options: [
      "The parent is larger than the children",
      "The parent is smaller than the children",
      "The parent is equal to the children",
      "There is no relationship",
    ],
    correctAnswer: "The parent is smaller than the children",
    explanation:
      "In a min heap, the parent node is always smaller than its children, ensuring that the smallest element is at the root.",
  },
  {
    question:
      "What is the primary purpose of the 'bubble-down' operation in a heap?",
    options: [
      "To insert a new element into the heap",
      "To restore the heap property after extraction",
      "To remove the root from the heap",
      "To find the minimum element",
    ],
    correctAnswer: "To restore the heap property after extraction",
    explanation:
      "After extracting the root, the 'bubble-down' operation restores the heap property by moving the new root element down the tree.",
  },
  {
    question: "Which of the following is a valid use case for a heap?",
    options: [
      "Database indexing",
      "Priority queue implementation",
      "Graph traversal",
      "String search algorithms",
    ],
    correctAnswer: "Priority queue implementation",
    explanation:
      "Heaps are commonly used to implement priority queues due to their efficient insertion and extraction of the highest (or lowest) priority element.",
  },
  {
    question:
      "What is the minimum number of comparisons required to build a heap from an unsorted array of n elements?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "Building a heap from an unsorted array can be done in O(n) comparisons using the 'heapify' process.",
  },
];
