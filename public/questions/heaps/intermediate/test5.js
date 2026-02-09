export const test5 = [
  {
    question:
      "What is the time complexity of inserting an element into a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Inserting an element involves adding it to the heap and then 'bubbling up' to restore the heap property, which takes O(log n) time.",
  },
  {
    question:
      "How do you maintain the heap property after deleting the root element from a heap?",
    options: [
      "By swapping the root with the smallest child",
      "By moving the last element to the root and then heapifying",
      "By directly removing the last element",
      "By reducing the heap size by one",
    ],
    correctAnswer: "By moving the last element to the root and then heapifying",
    explanation:
      "To maintain the heap property after deleting the root, the last element is moved to the root, and heapify is performed to restore the property.",
  },
  {
    question:
      "What is the maximum number of children a node can have in a binary heap?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    explanation:
      "A binary heap is a binary tree, meaning each node can have at most two children.",
  },
  {
    question: "Which of the following is a drawback of using a binary heap?",
    options: [
      "It does not provide fast access to arbitrary elements.",
      "It requires additional space for pointers.",
      "It is faster than other data structures for searching.",
      "It can only be used for integer values.",
    ],
    correctAnswer: "It does not provide fast access to arbitrary elements.",
    explanation:
      "Heaps do not support fast random access to arbitrary elements, unlike arrays, which allow O(1) access.",
  },
  {
    question:
      "In a min heap, what would happen if you try to insert an element smaller than the root?",
    options: [
      "The new element becomes the root, and the heap property is restored.",
      "The new element is discarded.",
      "The heap becomes unbalanced.",
      "The root element is replaced by the new element.",
    ],
    correctAnswer:
      "The new element becomes the root, and the heap property is restored.",
    explanation:
      "In a min heap, the new element would become the root and the heap property would be restored by 'bubbling up' the element.",
  },
  {
    question:
      "Which of the following operations is performed in O(n) time complexity in a heap?",
    options: [
      "Insert an element",
      "Delete the root",
      "Heapify an unsorted array",
      "Extract the minimum element",
    ],
    correctAnswer: "Heapify an unsorted array",
    explanation:
      "Heapifying an unsorted array (building the heap) takes O(n) time, while other operations like insertion and deletion take O(log n) time.",
  },
  {
    question:
      "What is the purpose of the 'bubbling up' process in heap insertion?",
    options: [
      "It ensures that the newly inserted element becomes the root.",
      "It restores the heap property by comparing the newly inserted element with its parent and swapping if necessary.",
      "It sorts the heap.",
      "It reduces the size of the heap.",
    ],
    correctAnswer:
      "It restores the heap property by comparing the newly inserted element with its parent and swapping if necessary.",
    explanation:
      "Bubbling up ensures that the newly inserted element is placed in the correct position to maintain the heap property.",
  },
  {
    question:
      "Which of the following is true for the time complexity of heap construction?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Building a heap from an unsorted array can be done in O(n) time using the heapify process.",
  },
  {
    question: "Which data structure is often implemented using a heap?",
    options: ["Stack", "Queue", "Priority Queue", "Hash Table"],
    correctAnswer: "Priority Queue",
    explanation:
      "Heaps are commonly used to implement priority queues, where elements are dequeued based on priority.",
  },
  {
    question:
      "In which case would a binary heap be less efficient compared to other data structures like a balanced binary search tree?",
    options: [
      "When searching for the minimum element",
      "When searching for an arbitrary element",
      "When inserting elements",
      "When deleting elements",
    ],
    correctAnswer: "When searching for an arbitrary element",
    explanation:
      "A heap is inefficient for searching arbitrary elements because it does not support fast random access, unlike a balanced binary search tree.",
  },
  {
    question:
      "Which of the following can be used to implement a max heap efficiently?",
    options: [
      "A linked list",
      "An array",
      "A balanced binary tree",
      "A hash table",
    ],
    correctAnswer: "An array",
    explanation:
      "Heaps are efficiently implemented using arrays, where the indices of parent and child nodes can be calculated easily.",
  },
  {
    question:
      "What is the time complexity of the 'extract-max' operation in a max heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "The 'extract-max' operation in a max heap involves removing the root and restoring the heap property, which takes O(log n) time.",
  },
  {
    question:
      "Which of the following is the most efficient way to maintain the heap property after removing an element from a heap?",
    options: [
      "Bubble down the root element.",
      "Bubble up the last element.",
      "Sort the heap.",
      "Delete the entire heap and rebuild it.",
    ],
    correctAnswer: "Bubble down the root element.",
    explanation:
      "After removing an element, the heap property is restored by bubbling down the root element, ensuring the heap remains valid.",
  },
  {
    question:
      "In a max heap, which of the following is true about the time complexity of inserting a new element?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Inserting a new element into a max heap requires O(log n) time due to the 'bubbling up' process.",
  },
  {
    question:
      "Which of the following operations can be done in constant time in a heap?",
    options: [
      "Inserting an element",
      "Finding the maximum or minimum element",
      "Extracting the maximum or minimum element",
      "Heapifying an array",
    ],
    correctAnswer: "Finding the maximum or minimum element",
    explanation:
      "In a heap, the maximum or minimum element (depending on whether it's a max or min heap) is always at the root, which can be accessed in constant time.",
  },
  {
    question: "Which of the following is true about a binary heap?",
    options: [
      "It is a complete binary tree.",
      "It is a balanced binary tree.",
      "It is a full binary tree.",
      "It is an incomplete binary tree.",
    ],
    correctAnswer: "It is a complete binary tree.",
    explanation:
      "A binary heap is a complete binary tree, meaning all levels of the tree are fully filled except possibly for the last level, which is filled from left to right.",
  },
  {
    question:
      "How is the space complexity of a heap implemented using an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "A heap implemented using an array has a space complexity of O(n), where n is the number of elements in the heap.",
  },
  {
    question:
      "What is the key advantage of using a heap to implement a priority queue?",
    options: [
      "It provides faster element deletion.",
      "It allows for fast element access.",
      "It supports fast random access to any element.",
      "It is easier to implement than other data structures.",
    ],
    correctAnswer: "It provides faster element deletion.",
    explanation:
      "Heaps are ideal for priority queues because they allow for efficient removal of the maximum or minimum element, which is crucial for implementing priority queues.",
  },
  {
    question:
      "What type of heap is best suited for finding the median in a data stream?",
    options: [
      "Min Heap",
      "Max Heap",
      "Two Heaps (Min Heap and Max Heap)",
      "Balanced Binary Tree",
    ],
    correctAnswer: "Two Heaps (Min Heap and Max Heap)",
    explanation:
      "A combination of a min heap and max heap is often used to efficiently find the median in a data stream by keeping track of the lower and upper halves of the data.",
  },
  {
    question:
      "What is the time complexity of building a heap from an unsorted array?",
    options: ["O(log n)", "O(n log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Building a heap from an unsorted array using the heapify process takes O(n) time, which is faster than inserting elements one by one.",
  },
  {
    question: "Which of the following is not a property of a heap?",
    options: [
      "It is a complete binary tree.",
      "It is a balanced binary tree.",
      "It maintains the heap property.",
      "It can be implemented using an array.",
    ],
    correctAnswer: "It is a balanced binary tree.",
    explanation:
      "A heap is a complete binary tree but not necessarily a balanced binary tree. A balanced binary tree has the same height for all leaves, while a heap only ensures completeness.",
  },
];
