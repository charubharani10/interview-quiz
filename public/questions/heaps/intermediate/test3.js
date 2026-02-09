export const test3 = [
  {
    question:
      "What is the time complexity of inserting an element into a max heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Inserting an element into a max heap takes O(log n) time because the new element may need to 'bubble-up' to restore the heap property.",
  },
  {
    question:
      "Which of the following operations can be done in O(1) time in a heap?",
    options: [
      "Extract the minimum element",
      "Find the minimum element",
      "Insert a new element",
      "Delete an arbitrary element",
    ],
    correctAnswer: "Find the minimum element",
    explanation:
      "In a min heap, the minimum element is always at the root, so finding the minimum element takes constant O(1) time.",
  },
  {
    question: "Which of the following is a valid representation of a heap?",
    options: ["Array", "Linked list", "Stack", "Graph"],
    correctAnswer: "Array",
    explanation:
      "A heap is typically represented using an array where the indices are used to relate parent and child nodes.",
  },
  {
    question: "In which data structure is the heap property most important?",
    options: ["HashMap", "Binary Search Tree", "Heap", "Graph"],
    correctAnswer: "Heap",
    explanation:
      "The heap property defines the relationship between parent and child nodes in a heap, ensuring either the largest (max heap) or smallest (min heap) value is at the root.",
  },
  {
    question:
      "Which of the following is NOT an operation that can be done on a heap?",
    options: [
      "Extract the root element",
      "Insert an element",
      "Sort the heap",
      "Find the largest element in the heap",
    ],
    correctAnswer: "Sort the heap",
    explanation:
      "A heap is not a sorted data structure; it only maintains the heap property. To sort elements, heap sort must be performed.",
  },
  {
    question:
      "How is the left child of a node at index i calculated in a heap?",
    options: ["2i + 1", "2i", "i + 1", "2i + 2"],
    correctAnswer: "2i + 1",
    explanation:
      "In a binary heap, the left child of a node at index 'i' is located at index 2i + 1.",
  },
  {
    question:
      "What happens to the heap when an element is removed from the root?",
    options: [
      "The last element replaces the root",
      "The root is removed and the heap is left incomplete",
      "The heap becomes unbalanced",
      "The heap is sorted",
    ],
    correctAnswer: "The last element replaces the root",
    explanation:
      "When the root element is removed, the last element in the heap replaces the root, and the heap is restructured to maintain the heap property.",
  },
  {
    question: "Which of the following is a common use case for a heap?",
    options: [
      "Binary search",
      "Finding the median of an array",
      "Priority queues",
      "Hashing",
    ],
    correctAnswer: "Priority queues",
    explanation:
      "Heaps are commonly used to implement priority queues due to their efficient access to the minimum or maximum element.",
  },
  {
    question: "What is the space complexity of a heap stored in an array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of a heap stored in an array is O(n), as it requires space proportional to the number of elements in the heap.",
  },
  {
    question:
      "What is the time complexity of heapifying an element at index i in a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Heapifying an element at index 'i' requires O(log n) time as it may need to 'bubble down' to restore the heap property.",
  },
  {
    question: "How does heap sort work?",
    options: [
      "It repeatedly extracts the root from the heap and places it at the end of the array",
      "It sorts the array using a quick sort algorithm",
      "It uses insertion sort to sort elements",
      "It recursively sorts the subtrees of the heap",
    ],
    correctAnswer:
      "It repeatedly extracts the root from the heap and places it at the end of the array",
    explanation:
      "Heap sort works by building a heap from the unsorted array, repeatedly extracting the root (the largest element) and placing it in the sorted array.",
  },
  {
    question: "What is the time complexity of heap sort?",
    options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
    correctAnswer: "O(n log n)",
    explanation:
      "Heap sort has a time complexity of O(n log n) because it requires O(n) time to build the heap and O(log n) time for each of the n extractions.",
  },
  {
    question:
      "In a binary heap, what is the relationship between a parent node and its children?",
    options: [
      "The parent is smaller than its children in a max heap",
      "The parent is larger than its children in a max heap",
      "The parent and children are unrelated",
      "The parent is equal to its children in a max heap",
    ],
    correctAnswer: "The parent is larger than its children in a max heap",
    explanation:
      "In a max heap, the parent node is always larger than its children, ensuring that the maximum element is at the root.",
  },
  {
    question:
      "Which of the following statements is true about heap data structures?",
    options: [
      "A heap can be either a binary tree or a binary search tree",
      "A heap is always a complete binary tree",
      "A heap is a partially ordered binary tree",
      "A heap can store duplicate elements",
    ],
    correctAnswer: "A heap is always a complete binary tree",
    explanation:
      "A heap must always be a complete binary tree, meaning all levels except the last are fully filled, and the last level is filled from left to right.",
  },
  {
    question: "What happens to the heap after each extraction operation?",
    options: [
      "The heap becomes a complete binary tree",
      "The heap becomes unbalanced",
      "The last element is swapped with the root",
      "The heap is deleted",
    ],
    correctAnswer: "The last element is swapped with the root",
    explanation:
      "When extracting the root from a heap, the last element is moved to the root, and the heap is restructured to maintain the heap property.",
  },
  {
    question:
      "What is the time complexity of heapifying an element at index i in a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Heapifying an element involves restoring the heap property, which takes O(log n) time as it may involve 'bubbling down' the element.",
  },
  {
    question: "Which of the following is a valid implementation of a heap?",
    options: ["Array", "Linked list", "Binary search tree", "HashMap"],
    correctAnswer: "Array",
    explanation:
      "A heap is typically represented using an array, where the indices of the array are used to calculate the positions of the parent and child nodes.",
  },
  {
    question:
      "Which of the following operations in a heap has a time complexity of O(log n)?",
    options: [
      "Insert a new element",
      "Find the minimum element",
      "Delete the heap",
      "Search for an element",
    ],
    correctAnswer: "Insert a new element",
    explanation:
      "Inserting a new element into a heap takes O(log n) time, as the element may need to 'bubble up' to restore the heap property.",
  },
  {
    question: "What is the space complexity of a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of a heap is O(n), as it requires space proportional to the number of elements stored in the heap.",
  },
  {
    question:
      "Which of the following data structures can be implemented using a heap?",
    options: ["Stack", "Queue", "Priority Queue", "Hash Table"],
    correctAnswer: "Priority Queue",
    explanation:
      "A heap is often used to implement a priority queue, as it allows efficient insertion and extraction of elements based on priority.",
  },
];
