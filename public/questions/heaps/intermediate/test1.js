export const test1 = [
  {
    question:
      "What is the time complexity of inserting an element into a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Insertion into a heap requires O(log n) time due to the need to restore the heap property by 'bubbling up'.",
  },
  {
    question:
      "What is the time complexity of removing the maximum element from a max heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Removing the maximum element involves replacing it with the last element and 'bubbling down' to restore the heap property, which takes O(log n) time.",
  },
  {
    question:
      "In which situation would a heap be preferable over a binary search tree?",
    options: [
      "When you need fast access to the maximum or minimum element",
      "When you need sorted order of elements",
      "When you need to maintain a balanced tree structure",
      "When you need to search for an element quickly",
    ],
    correctAnswer:
      "When you need fast access to the maximum or minimum element",
    explanation:
      "Heaps allow O(1) access to the maximum (in max heap) or minimum (in min heap), while binary search trees are slower for this.",
  },
  {
    question:
      "Which of the following heap operations has a time complexity of O(n)?",
    options: [
      "Insertion",
      "Extracting the maximum element",
      "Heapify (building a heap from an array)",
      "Searching for an element",
    ],
    correctAnswer: "Heapify (building a heap from an array)",
    explanation:
      "Heapify, or building a heap from an unsorted array, can be done in O(n) time.",
  },
  {
    question:
      "Which heap property ensures that the maximum (or minimum) element is at the root?",
    options: [
      "Complete binary tree",
      "Min heap property",
      "Max heap property",
      "Balanced tree property",
    ],
    correctAnswer: "Max heap property",
    explanation:
      "In a max heap, the max heap property ensures that every parent node is larger than its children, so the largest element is at the root.",
  },
  {
    question: "What happens when you replace the root in a heap?",
    options: [
      "Heap is balanced",
      "Heap is reconstructed by bubble-up",
      "Heap is reconstructed by bubble-down",
      "Heap becomes unsorted",
    ],
    correctAnswer: "Heap is reconstructed by bubble-down",
    explanation:
      "When the root is replaced, the new root element is 'bubbled down' to restore the heap property.",
  },
  {
    question:
      "In which of the following operations can a heap be implemented efficiently?",
    options: [
      "Finding the kth largest element",
      "Sorting an array",
      "Searching for an element",
      "Balanced tree operations",
    ],
    correctAnswer: "Finding the kth largest element",
    explanation:
      "A heap can efficiently find the kth largest element by maintaining a max heap and extracting the maximum k times.",
  },
  {
    question:
      "In a min heap, what is the maximum number of levels that an element can be at?",
    options: ["log(n)", "n", "n log(n)", "log(log n)"],
    correctAnswer: "log(n)",
    explanation:
      "The height of a heap is logarithmic, so an element can be at most log(n) levels deep.",
  },
  {
    question: "How do you maintain a complete binary tree property in a heap?",
    options: [
      "By ensuring all nodes have exactly two children",
      "By placing elements in a sorted order",
      "By filling all levels from left to right",
      "By allowing some nodes to have one child",
    ],
    correctAnswer: "By filling all levels from left to right",
    explanation:
      "A heap is a complete binary tree, meaning all levels are filled from left to right without gaps.",
  },
  {
    question:
      "What is the advantage of a binary heap over an unordered list for priority queue operations?",
    options: [
      "Faster insertion and extraction",
      "Easier to implement",
      "Memory efficiency",
      "Supports more operations",
    ],
    correctAnswer: "Faster insertion and extraction",
    explanation:
      "In a binary heap, insertion and extraction operations take O(log n) time, whereas in an unordered list these operations would take O(n) time.",
  },

  {
    question: "What does 'heapify' mean in the context of a heap?",
    options: [
      "Converting an unsorted array into a valid heap",
      "Sorting a heap into ascending order",
      "Removing the minimum element",
      "Inserting elements into a heap",
    ],
    correctAnswer: "Converting an unsorted array into a valid heap",
    explanation:
      "Heapify refers to converting an unsorted array into a valid heap, which ensures that the heap property is maintained.",
  },
  {
    question: "Which of the following is true about a min heap?",
    options: [
      "The root is the largest element",
      "The parent node is smaller than its children",
      "The heap is not necessarily complete",
      "The heap can have duplicates",
    ],
    correctAnswer: "The parent node is smaller than its children",
    explanation:
      "In a min heap, the parent node is smaller than its children, which ensures that the minimum element is at the root.",
  },
  {
    question:
      "Which of the following operations can be performed in O(1) time on a heap?",
    options: [
      "Extracting the minimum element",
      "Inserting an element",
      "Finding the minimum element",
      "Heapifying",
    ],
    correctAnswer: "Finding the minimum element",
    explanation:
      "In a heap, finding the minimum element in a min heap (or maximum in a max heap) takes O(1) time as it is always at the root.",
  },
  {
    question:
      "When inserting an element into a heap, what is the worst case time complexity?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Inserting an element into a heap requires O(log n) time due to the need to restore the heap property.",
  },
  {
    question:
      "What is the primary difference between a heap and a binary search tree?",
    options: [
      "A heap maintains a complete tree structure, while a binary search tree maintains a sorted order",
      "A heap stores elements in a sorted order, while a binary search tree does not",
      "A heap is always balanced, while a binary search tree is not",
      "A binary search tree is implemented as a heap",
    ],
    correctAnswer:
      "A heap maintains a complete tree structure, while a binary search tree maintains a sorted order",
    explanation:
      "A heap is a complete binary tree where the parent node is larger or smaller than the children, whereas a binary search tree maintains sorted order based on node values.",
  },
  {
    question: "What is the space complexity of a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "A heap requires space proportional to the number of elements in the heap, which is O(n).",
  },
  {
    question: "In a max heap, which element is always found at the root?",
    options: [
      "The smallest element",
      "The largest element",
      "The median element",
      "The element with the most children",
    ],
    correctAnswer: "The largest element",
    explanation:
      "In a max heap, the largest element is always at the root, as it is the property of the heap.",
  },
  {
    question: "Which operation in a heap has the time complexity of O(n)?",
    options: [
      "Insertion",
      "Finding the minimum element",
      "Heapify (building a heap)",
      "Extracting the maximum element",
    ],
    correctAnswer: "Heapify (building a heap)",
    explanation:
      "Heapify, or building a heap from an unsorted array, takes O(n) time.",
  },
  {
    question:
      "What is the worst-case time complexity for extracting an element from a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Extracting an element from a heap requires O(log n) time because the heap property must be restored.",
  },
  {
    question:
      "In a binary heap, how are the left and right children of a node at index 'i' stored?",
    options: [
      "At indices 2i and 2i+1",
      "At indices 2i-1 and 2i+1",
      "At indices i and i+1",
      "At indices i and 2i",
    ],
    correctAnswer: "At indices 2i and 2i+1",
    explanation:
      "In a binary heap, the left child of a node at index 'i' is at index 2i, and the right child is at index 2i+1.",
  },
];
