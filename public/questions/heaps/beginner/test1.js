export const test1 = [
  {
    question: "What is a heap?",
    options: [
      "A balanced binary tree",
      "An unordered list of elements",
      "A binary tree that satisfies the heap property",
      "A linked list with random access",
    ],
    correctAnswer: "A binary tree that satisfies the heap property",
    explanation:
      "A heap is a specialized binary tree that maintains the heap property where each parent node is either greater or smaller than its children depending on whether it is a max heap or a min heap.",
  },
  {
    question: "In a max heap, the value of the parent node is:",
    options: [
      "Greater than or equal to the values of its children",
      "Less than or equal to the values of its children",
      "Equal to the values of its children",
      "Random in comparison to its children",
    ],
    correctAnswer: "Greater than or equal to the values of its children",
    explanation:
      "In a max heap, every parent node must have a value greater than or equal to its children, ensuring that the largest value is at the root.",
  },
  {
    question: "Which of the following is the correct property of a min heap?",
    options: [
      "The root is the maximum element",
      "Each parent node is greater than or equal to its children",
      "Each parent node is less than or equal to its children",
      "The elements are sorted in descending order",
    ],
    correctAnswer: "Each parent node is less than or equal to its children",
    explanation:
      "In a min heap, each parent node must have a value that is less than or equal to its children, ensuring that the smallest value is at the root.",
  },
  {
    question:
      "Which of the following is the time complexity of inserting an element into a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      'Inserting an element into a heap requires placing it at the bottom of the tree and then "bubbling up" the element, which takes O(log n) time.',
  },
  {
    question:
      "What is the time complexity of extracting the maximum element from a max heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      'Extracting the maximum element (the root) from a max heap requires replacing the root with the last element and then "bubbling down" the element to restore the heap property, which takes O(log n) time.',
  },
  {
    question: "How is a binary heap typically implemented in memory?",
    options: [
      "Using a linked list",
      "Using an array",
      "Using a tree data structure",
      "Using a hash table",
    ],
    correctAnswer: "Using an array",
    explanation:
      "A binary heap is commonly implemented using an array, where the children of an element at index `i` are located at indices `2i + 1` and `2i + 2`.",
  },
  {
    question:
      "In a binary heap, which operation is used to restore the heap property after removing the root element?",
    options: ["Bubble up", "Bubble down", "Swap elements", "Balance tree"],
    correctAnswer: "Bubble down",
    explanation:
      'After removing the root element from a heap, the last element is moved to the root, and the heap property is restored by "bubbling down" the element.',
  },
  {
    question:
      "Which of the following operations can be performed in O(1) time in a heap?",
    options: [
      "Extract the maximum/minimum element",
      "Insert an element",
      "Peek at the root element",
      "Rebuild the heap",
    ],
    correctAnswer: "Peek at the root element",
    explanation:
      "Peeking at the root element, i.e., accessing the maximum (in a max heap) or minimum (in a min heap), can be done in O(1) time because the root element is always at the top of the heap.",
  },
  {
    question:
      "What happens to the heap property if you add an element to a heap without reordering the tree?",
    options: [
      "The heap becomes invalid",
      "The heap remains unchanged",
      "The heap becomes a balanced tree",
      "The heap will automatically rebuild",
    ],
    correctAnswer: "The heap becomes invalid",
    explanation:
      "If the heap property is not restored after adding an element, the heap becomes invalid, and operations like extraction will no longer function correctly.",
  },
  {
    question: "Which of the following is NOT a use case of heaps?",
    options: [
      "Priority queues",
      "Sorting algorithms like HeapSort",
      "Finding the median of a set of numbers",
      "Linked list implementation",
    ],
    correctAnswer: "Linked list implementation",
    explanation:
      "Heaps are not typically used for linked list implementation. They are mainly used for priority queues, heap sort, and finding the median in a set of numbers.",
  },
  {
    question:
      "In a binary heap, what is the position of the left child of a node at index i?",
    options: ["i*2", "2i + 1", "2i + 2", "i + 2"],
    correctAnswer: "2i + 1",
    explanation:
      "In a binary heap implemented as an array, the left child of the element at index `i` is at index `2i + 1`.",
  },
  {
    question:
      "What is the main difference between a binary search tree (BST) and a heap?",
    options: [
      "Heaps are not binary trees",
      "Heaps are unordered, while BSTs maintain a sorted order",
      "Heaps maintain a sorted order, while BSTs are unordered",
      "Heaps allow quick search, while BSTs do not",
    ],
    correctAnswer: "Heaps are unordered, while BSTs maintain a sorted order",
    explanation:
      "In a BST, the left subtree contains elements smaller than the parent, and the right subtree contains elements larger. Heaps, on the other hand, do not have this ordering property.",
  },
  {
    question: "What is the time complexity of heap sort?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n log n)",
    explanation:
      "Heap sort involves building a heap and then repeatedly extracting the root element. Both the heap construction and the extraction process take O(log n) time, resulting in a total time complexity of O(n log n).",
  },
  {
    question: "How can you represent a heap with an array?",
    options: [
      "In a linear fashion with parent nodes to the right of children",
      "By maintaining a pointer to the parent and children nodes",
      "In a complete binary tree structure using array indices",
      "In a linked list structure",
    ],
    correctAnswer: "In a complete binary tree structure using array indices",
    explanation:
      "Heaps can be efficiently represented using an array. The element at index `i` has its left child at index `2i + 1` and its right child at index `2i + 2`.",
  },
  {
    question: "Which of the following statements about heaps is true?",
    options: [
      "Heaps are always complete binary trees",
      "Heaps can be implemented as singly linked lists",
      "A heap can be used to implement quick sort",
      "In a heap, children can have values greater than their parents",
    ],
    correctAnswer: "Heaps are always complete binary trees",
    explanation:
      "Heaps are complete binary trees, meaning all levels of the tree are filled except possibly the last, which is filled from left to right.",
  },
  {
    question:
      "What is the time complexity of deleting the minimum element from a min heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Deleting the minimum element from a min heap involves replacing the root with the last element and then bubbling down to restore the heap property, which takes O(log n) time.",
  },
  {
    question:
      "Which operation does a priority queue based on a heap allow in O(1) time?",
    options: [
      "Inserting an element",
      "Extracting the minimum/maximum element",
      "Peeking at the top element",
      "Removing an arbitrary element",
    ],
    correctAnswer: "Peeking at the top element",
    explanation:
      "Peeking at the top element in a priority queue implemented with a heap can be done in O(1) time since the root element is always the top element.",
  },
  {
    question:
      "What is the key advantage of using heaps over arrays for implementing priority queues?",
    options: [
      "Heaps allow searching in O(1) time",
      "Heaps allow fast access to the minimum/maximum element",
      "Heaps are smaller in size",
      "Heaps maintain elements in sorted order",
    ],
    correctAnswer: "Heaps allow fast access to the minimum/maximum element",
    explanation:
      "Heaps are efficient for priority queues because they allow fast access to the minimum or maximum element (depending on whether it is a min heap or max heap), which is typically the root.",
  },
  {
    question:
      "What happens if you try to remove an element from an empty heap?",
    options: [
      "It raises an exception",
      "The heap becomes a min heap",
      "It removes the last element",
      "The heap is not affected",
    ],
    correctAnswer: "It raises an exception",
    explanation:
      "Attempting to remove an element from an empty heap results in an error or exception since there are no elements to remove.",
  },
  {
    question:
      "In which of the following scenarios would you typically use a heap?",
    options: [
      "Searching for an element in a sorted array",
      "Implementing a priority queue",
      "Storing elements in a hash table",
      "Creating a dynamic array",
    ],
    correctAnswer: "Implementing a priority queue",
    explanation:
      "Heaps are ideal for implementing priority queues where elements are removed based on their priority, such as finding the minimum or maximum element.",
  },
];
