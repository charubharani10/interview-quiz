export const test2 = [
  {
    question:
      "What is the minimum number of elements required to form a complete binary tree of height 3?",
    options: ["7", "8", "15", "10"],
    correctAnswer: "7",
    explanation:
      "A complete binary tree of height 3 has 7 nodes (levels 0 to 3), which is the minimum number of elements to form the tree.",
  },
  {
    question: "Which of the following is a correct implementation of a heap?",
    options: ["Array", "Linked List", "Binary Tree", "Hash Map"],
    correctAnswer: "Array",
    explanation:
      "Heaps are most efficiently implemented using arrays because they allow easy calculation of parent and child indices.",
  },
  {
    question: "Which operation takes O(log n) time in a heap?",
    options: [
      "Insert an element",
      "Peek the root element",
      "Access the last element",
      "Delete an arbitrary element",
    ],
    correctAnswer: "Insert an element",
    explanation:
      "Inserting an element into a heap involves adding the element at the end and then 'bubbling up' to restore the heap property, which takes O(log n) time.",
  },
  {
    question: "How is a binary heap maintained?",
    options: [
      "By reordering elements on each insertion",
      "By ensuring the tree is balanced after each insertion",
      "By ensuring the tree is complete and maintaining the heap property",
      "By making sure elements are sorted at all times",
    ],
    correctAnswer:
      "By ensuring the tree is complete and maintaining the heap property",
    explanation:
      "A binary heap is a complete binary tree that maintains the heap property. The tree remains complete and elements are rearranged during insertion and extraction to restore the heap property.",
  },
  {
    question: "Which of the following statements about heaps is FALSE?",
    options: [
      "Heaps can be implemented using arrays",
      "The largest element is always at the root in a max heap",
      "Heaps are always balanced binary trees",
      "The root of a min heap contains the smallest element",
    ],
    correctAnswer: "Heaps are always balanced binary trees",
    explanation:
      "Heaps are complete binary trees but not necessarily balanced binary trees. A balanced tree has more restrictions on node height, which is not a requirement for heaps.",
  },
  {
    question:
      "When inserting an element into a heap, the time complexity for finding the correct position is O:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Inserting an element into a heap requires finding the correct position by bubbling up, which takes O(log n) time.",
  },
  {
    question:
      "In a binary heap, what is the index of the right child of the node at index i?",
    options: ["2i + 2", "2i + 1", "i + 2", "i + 1"],
    correctAnswer: "2i + 2",
    explanation:
      "In a binary heap implemented as an array, the right child of the node at index `i` is located at index `2i + 2`.",
  },
  {
    question: "What happens when you remove the root of a heap?",
    options: [
      "The last element is moved to the root, and the heap property is restored by bubbling down",
      "The heap becomes empty",
      "The root is replaced with the maximum element",
      "The heap is sorted",
    ],
    correctAnswer:
      "The last element is moved to the root, and the heap property is restored by bubbling down",
    explanation:
      "When the root is removed from a heap, the last element is moved to the root, and the heap property is restored by 'bubbling down' the element.",
  },
  {
    question: "Which type of heap is used to implement a priority queue?",
    options: ["Min Heap", "Max Heap", "Binary Search Tree", "Hash Table"],
    correctAnswer: "Min Heap",
    explanation:
      "A min heap is often used to implement a priority queue where the smallest element is given the highest priority, allowing quick access to the minimum element.",
  },
  {
    question: "What is the primary advantage of using a heap for sorting?",
    options: [
      "It allows sorting in linear time",
      "It allows sorting in O(n log n) time",
      "It allows sorting in O(log n) time",
      "It allows sorting without extra space",
    ],
    correctAnswer: "It allows sorting in O(n log n) time",
    explanation:
      "Heap sort has a time complexity of O(n log n) and works by repeatedly extracting the root element (the largest or smallest, depending on heap type) and placing it in the sorted order.",
  },
  {
    question: "Which heap operation is typically used in a priority queue?",
    options: ["Insertion", "Bubble down", "Heapify", "Extract min"],
    correctAnswer: "Extract min",
    explanation:
      "In a priority queue implemented with a min heap, the most frequent operation is extracting the minimum element, which represents the highest priority.",
  },
  {
    question:
      "In a max heap, if the value of the parent node is decreased, what happens to the heap?",
    options: [
      "The heap property is restored by bubbling up",
      "The heap property is restored by bubbling down",
      "The heap is invalid",
      "Nothing happens",
    ],
    correctAnswer: "The heap property is restored by bubbling down",
    explanation:
      "If the value of the parent node is decreased, it may violate the max heap property. The heap is restored by 'bubbling down' the node until the property is restored.",
  },
  {
    question:
      "How do you find the parent of an element in a binary heap implemented as an array?",
    options: ["i/2", "(i - 1)/2", "i*2", "2i + 1"],
    correctAnswer: "(i - 1)/2",
    explanation:
      "In an array representation of a binary heap, the parent of an element at index `i` is located at index `(i - 1) / 2`.",
  },
  {
    question:
      "What is the time complexity of heapifying an array of n elements?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Heapifying an array of n elements can be done in O(n) time by adjusting the tree in a bottom-up manner.",
  },
  {
    question:
      "What is the space complexity of a binary heap implemented using an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of a binary heap implemented using an array is O(n) because it requires space proportional to the number of elements in the heap.",
  },
  {
    question: "What is the root of a min heap?",
    options: [
      "The maximum element",
      "The smallest element",
      "The middle element",
      "The largest element",
    ],
    correctAnswer: "The smallest element",
    explanation:
      "In a min heap, the root is the smallest element, and all other elements are greater than or equal to it.",
  },
  {
    question:
      "What is the time complexity of the 'bubble down' operation in a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "The 'bubble down' operation, which is used to restore the heap property after removing the root, takes O(log n) time.",
  },
  {
    question: "When is a heap represented as a complete binary tree?",
    options: [
      "Always",
      "Only when the heap is balanced",
      "Only during heapify",
      "Only during insertion",
    ],
    correctAnswer: "Always",
    explanation:
      "Heaps are always represented as complete binary trees, meaning every level is fully filled except possibly the last, which is filled from left to right.",
  },
  {
    question:
      "What is the primary operation performed in a heap during sorting?",
    options: [
      "Insert",
      "Extract the maximum/minimum element",
      "Bubble up",
      "Rebuild the tree",
    ],
    correctAnswer: "Extract the maximum/minimum element",
    explanation:
      "Heap sort works by repeatedly extracting the root element (the maximum in a max heap, or minimum in a min heap) and placing it at the end of the sorted array.",
  },
  {
    question: "What does the 'bubble up' operation do in a heap?",
    options: [
      "Moves an element up the heap to maintain the heap property",
      "Moves an element down the heap",
      "Rebuilds the tree",
      "Adds a new element to the heap",
    ],
    correctAnswer: "Moves an element up the heap to maintain the heap property",
    explanation:
      "The 'bubble up' operation is used when inserting an element into the heap to restore the heap property by comparing the element with its parent and moving it up if necessary.",
  },
  {
    question: "Which of the following is an important application of a heap?",
    options: [
      "Merge sorted arrays",
      "Sort large datasets",
      "Priority scheduling in operating systems",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Heaps are useful for various applications, including merging sorted arrays, sorting large datasets, and priority scheduling in operating systems.",
  },
];
