export const test4 = [
  {
    question:
      "What is the time complexity of deleting the root element in a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Deleting the root element involves moving the last element to the root and then heapifying the tree, which takes O(log n) time.",
  },
  {
    question: "What is the key difference between a min heap and a max heap?",
    options: [
      "Min heap has smaller elements at the root, while max heap has larger elements at the root.",
      "Min heap can store negative values, while max heap cannot.",
      "Min heap is used to implement priority queues, while max heap is used in sorting.",
      "Min heap is faster for insertion than max heap.",
    ],
    correctAnswer:
      "Min heap has smaller elements at the root, while max heap has larger elements at the root.",
    explanation:
      "In a min heap, the root contains the smallest element, while in a max heap, the root contains the largest element.",
  },
  {
    question: "Which of the following is NOT a valid use case for a heap?",
    options: [
      "Priority Queue",
      "Sorting",
      "Graph Traversal",
      "Memory Management",
    ],
    correctAnswer: "Graph Traversal",
    explanation:
      "Heaps are not typically used for graph traversal. They are commonly used for priority queues and sorting operations.",
  },
  {
    question: "What is the result of the heapify operation?",
    options: [
      "It sorts the heap in ascending order",
      "It rearranges the heap to restore the heap property",
      "It deletes the root element",
      "It removes duplicates from the heap",
    ],
    correctAnswer: "It rearranges the heap to restore the heap property",
    explanation:
      "The heapify operation restores the heap property by ensuring that each parent node satisfies the heap condition with its children.",
  },
  {
    question:
      "How is the right child of a node at index i calculated in a heap?",
    options: ["2i + 2", "2i + 1", "i + 1", "2i"],
    correctAnswer: "2i + 2",
    explanation:
      "In a binary heap, the right child of a node at index 'i' is located at index 2i + 2.",
  },
  {
    question: "What happens during the 'bubbling down' process in heapify?",
    options: [
      "The element is moved up the tree until the heap property is satisfied.",
      "The element is moved down the tree to restore the heap property.",
      "The element is deleted from the heap.",
      "The heap is sorted.",
    ],
    correctAnswer:
      "The element is moved down the tree to restore the heap property.",
    explanation:
      "During 'bubbling down', an element is compared with its children and swapped if necessary to restore the heap property.",
  },
  {
    question: "In which type of heap is the root element always the largest?",
    options: ["Min Heap", "Max Heap", "Binary Search Tree", "AVL Tree"],
    correctAnswer: "Max Heap",
    explanation:
      "In a max heap, the root element is always the largest, and the heap property ensures that each parent is larger than its children.",
  },
  {
    question:
      "What is the main advantage of using a heap for a priority queue?",
    options: [
      "It allows constant time access to the minimum or maximum element.",
      "It is easier to implement compared to other data structures.",
      "It can handle large amounts of data efficiently.",
      "It requires less space than other data structures.",
    ],
    correctAnswer:
      "It allows constant time access to the minimum or maximum element.",
    explanation:
      "Heaps allow efficient access to the minimum or maximum element, which is essential for implementing priority queues.",
  },
  {
    question:
      "What is the main disadvantage of using heaps over other data structures like arrays?",
    options: [
      "They are slower to insert elements.",
      "They have a higher space complexity.",
      "They are harder to implement.",
      "They do not support fast random access to elements.",
    ],
    correctAnswer: "They do not support fast random access to elements.",
    explanation:
      "Heaps are implemented as binary trees, and they do not provide fast random access to elements like arrays do.",
  },
  {
    question:
      "What is the time complexity of building a heap from an unsorted array?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
    correctAnswer: "O(n)",
    explanation:
      "Building a heap from an unsorted array can be done in O(n) time, as each element only needs to be heapified once.",
  },
  {
    question:
      "In a max heap, if the element at index 0 is the root, what happens when a new element is added?",
    options: [
      "The new element is inserted at the end, and the heap property is restored by bubbling up.",
      "The new element is inserted at the root, and the heap property is restored by bubbling down.",
      "The new element is inserted randomly in the heap.",
      "The heap becomes unbalanced.",
    ],
    correctAnswer:
      "The new element is inserted at the end, and the heap property is restored by bubbling up.",
    explanation:
      "When a new element is added to a max heap, it is inserted at the end of the heap, and the heap property is restored by bubbling up the new element.",
  },
  {
    question:
      "Which of the following is true about the time complexity of the 'extract-min' operation in a min heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Extracting the minimum element from a min heap involves removing the root and heapifying the remaining tree, which takes O(log n) time.",
  },
  {
    question: "Which of the following is true about heap sort?",
    options: [
      "It has a time complexity of O(n^2).",
      "It is an unstable sorting algorithm.",
      "It requires extra space for sorting.",
      "It is a comparison-based sorting algorithm.",
    ],
    correctAnswer: "It is a comparison-based sorting algorithm.",
    explanation:
      "Heap sort is a comparison-based sorting algorithm that relies on the heap property to sort elements.",
  },
  {
    question:
      "What is the key benefit of a binary heap over an unsorted array when implementing a priority queue?",
    options: [
      "Faster insertions",
      "Faster element deletions",
      "Faster random access",
      "Lower memory usage",
    ],
    correctAnswer: "Faster element deletions",
    explanation:
      "A binary heap provides faster element deletions (O(log n)) compared to an unsorted array, where deletion takes O(n) time.",
  },
  {
    question:
      "How is the parent node of an element at index i calculated in a heap?",
    options: ["i/2", "(i - 1)/2", "2i - 1", "2i + 1"],
    correctAnswer: "(i - 1)/2",
    explanation:
      "In a binary heap, the parent of a node at index 'i' is located at index (i - 1)/2.",
  },
  {
    question: "What is the best time complexity of heap sort?",
    options: ["O(1)", "O(n)", "O(n log n)", "O(log n)"],
    correctAnswer: "O(n log n)",
    explanation:
      "Heap sort has a time complexity of O(n log n) in the best, average, and worst-case scenarios.",
  },
  {
    question:
      "Which of the following operations in a heap requires O(log n) time?",
    options: [
      "Find the minimum element",
      "Extract the minimum element",
      "Insert an element",
      "Delete an arbitrary element",
    ],
    correctAnswer: "Extract the minimum element",
    explanation:
      "Extracting the minimum element from a heap requires O(log n) time due to heapify operations.",
  },
  {
    question: "Which of the following describes the heap property?",
    options: [
      "Each node must be greater than its children in a max heap.",
      "Each node must be smaller than its children in a min heap.",
      "In both max and min heaps, each node must be equal to its children.",
      "The heap property ensures that the root is the median of all elements.",
    ],
    correctAnswer: "Each node must be greater than its children in a max heap.",
    explanation:
      "The heap property dictates that in a max heap, each parent node must be larger than its children, and in a min heap, the parent node must be smaller.",
  },
  {
    question: "Which of the following is a disadvantage of heap sort?",
    options: [
      "It is not a comparison-based algorithm.",
      "It requires additional memory.",
      "It is not a stable sorting algorithm.",
      "It is slower than quicksort.",
    ],
    correctAnswer: "It is not a stable sorting algorithm.",
    explanation:
      "Heap sort is not a stable sorting algorithm, meaning it does not preserve the relative order of equal elements.",
  },
  {
    question:
      "What is the best use case for a heap in a real-world application?",
    options: [
      "Implementing a file system",
      "Scheduling tasks in an operating system",
      "Handling web requests",
      "Optimizing database queries",
    ],
    correctAnswer: "Scheduling tasks in an operating system",
    explanation:
      "Heaps are often used in scheduling algorithms to manage tasks with different priorities in an operating system.",
  },
  {
    question:
      "Which of the following is true about the space complexity of heaps?",
    options: [
      "Heaps require extra space for storing data.",
      "Heaps are stored in a compact form in an array.",
      "Heaps require O(n^2) space for large data sets.",
      "Heaps require O(n log n) space.",
    ],
    correctAnswer: "Heaps are stored in a compact form in an array.",
    explanation:
      "Heaps are implemented in arrays, which allow them to be stored in a compact form without requiring extra space for pointers.",
  },
];
