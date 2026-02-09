export const test5 = [
  {
    question:
      "In which of the following data structures is a heap primarily used?",
    options: ["Stack", "Queue", "Priority Queue", "Binary Search Tree"],
    correctAnswer: "Priority Queue",
    explanation:
      "Heaps are primarily used in implementing priority queues, which provide efficient access to the minimum or maximum element.",
  },
  {
    question:
      "What is the time complexity of inserting an element into a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Inserting an element into a heap takes O(log n) time, as the element is added at the end and then 'bubbled up' to restore the heap property.",
  },
  {
    question:
      "In an array-based heap, which formula calculates the parent of the node at index 'i'?",
    options: ["i / 2", "(i - 1) / 2", "2i + 1", "2i + 2"],
    correctAnswer: "(i - 1) / 2",
    explanation:
      "In an array-based heap, the parent of the node at index 'i' is located at index '(i - 1) / 2'.",
  },
  {
    question:
      "Which type of heap would you use for efficiently retrieving the minimum element?",
    options: ["Min Heap", "Max Heap", "Binary Search Tree", "AVL Tree"],
    correctAnswer: "Min Heap",
    explanation:
      "A min heap ensures that the smallest element is at the root, making it ideal for retrieving the minimum element efficiently.",
  },
  {
    question:
      "What is the time complexity of finding the minimum element in a min heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "The minimum element in a min heap is always at the root, so it can be accessed in constant time O(1).",
  },
  {
    question: "Which heap property is maintained in a min heap?",
    options: [
      "Each parent node must be smaller than its children",
      "Each parent node must be larger than its children",
      "All children nodes must be equal to their parents",
      "The tree must be perfectly balanced",
    ],
    correctAnswer: "Each parent node must be smaller than its children",
    explanation:
      "In a min heap, each parent node must be smaller than or equal to its children, ensuring that the minimum element is at the root.",
  },
  {
    question: "How can you efficiently remove the root element from a heap?",
    options: [
      "Perform a swap with the last element and then 'bubble down'",
      "Delete the root element and reconstruct the heap",
      "Shift all elements to the left",
      "Perform a bubble-up operation",
    ],
    correctAnswer:
      "Perform a swap with the last element and then 'bubble down'",
    explanation:
      "To remove the root element in a heap, swap it with the last element, then restore the heap property by performing a 'bubble down'.",
  },
  {
    question: "What is the purpose of heapify operation?",
    options: [
      "Insert elements into the heap",
      "Restore the heap property after insertion or deletion",
      "Remove all elements from the heap",
      "Sort the elements in ascending order",
    ],
    correctAnswer: "Restore the heap property after insertion or deletion",
    explanation:
      "The heapify operation is used to restore the heap property after insertion or deletion of an element.",
  },
  {
    question: "What is the best use case for heaps?",
    options: [
      "Sorting a large set of elements",
      "Searching for an element in a dataset",
      "Handling dynamic data with minimum or maximum values",
      "Building balanced binary search trees",
    ],
    correctAnswer: "Handling dynamic data with minimum or maximum values",
    explanation:
      "Heaps are ideal for scenarios where dynamic data needs to be accessed efficiently, such as finding the minimum or maximum values.",
  },
  {
    question: "What is the time complexity of heap sort?",
    options: ["O(n log n)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n log n)",
    explanation:
      "Heap sort has a time complexity of O(n log n), as it involves building the heap and then repeatedly extracting the root element.",
  },
  {
    question: "What is the structure of a heap?",
    options: ["Binary tree", "Ternary tree", "Graph", "Linked list"],
    correctAnswer: "Binary tree",
    explanation:
      "A heap is typically represented as a binary tree where each node has at most two children.",
  },
  {
    question: "Which of the following is a property of a max heap?",
    options: [
      "The parent node is smaller than its children",
      "The parent node is larger than its children",
      "The tree must be balanced",
      "Each level of the tree must be filled",
    ],
    correctAnswer: "The parent node is larger than its children",
    explanation:
      "In a max heap, the value of the parent node is always greater than or equal to the values of its children.",
  },
  {
    question:
      "What is the time complexity of extracting the maximum element from a max heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Extracting the maximum element from a max heap requires O(log n) time as the heap property must be restored through 'bubbling down'.",
  },
  {
    question:
      "In a heap, what is the time complexity of getting the maximum (or minimum) element?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "In a heap, the maximum (or minimum) element is always at the root, which can be accessed in constant time O(1).",
  },
  {
    question: "What is the space complexity of a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "A heap requires space proportional to the number of elements it stores, which is O(n).",
  },
  {
    question: "Which operation in a heap has a time complexity of O(log n)?",
    options: [
      "Insertion",
      "Finding the minimum element",
      "Searching for an element",
      "Accessing the root",
    ],
    correctAnswer: "Insertion",
    explanation:
      "Inserting an element into a heap takes O(log n) time because the element may need to be 'bubbled up' to restore the heap property.",
  },
  {
    question: "How can you construct a heap from an unsorted array?",
    options: [
      "By recursively inserting elements one by one",
      "By sorting the array",
      "By using a heapify operation in O(n)",
      "By using a binary search tree",
    ],
    correctAnswer: "By using a heapify operation in O(n)",
    explanation:
      "You can construct a heap from an unsorted array in O(n) time using the heapify operation.",
  },
  {
    question: "What is the main difference between a max heap and a min heap?",
    options: [
      "Max heap stores elements in descending order, min heap stores in ascending order",
      "Max heap is implemented as a binary search tree, min heap is not",
      "Max heap allows duplicate elements, min heap does not",
      "There is no difference between max heap and min heap",
    ],
    correctAnswer:
      "Max heap stores elements in descending order, min heap stores in ascending order",
    explanation:
      "A max heap ensures that the parent is larger than its children, while a min heap ensures the parent is smaller.",
  },
  {
    question: "What happens when the last element of a heap is removed?",
    options: [
      "Heap is automatically sorted",
      "The heap is restructured to maintain the heap property",
      "The heap remains unchanged",
      "The heap becomes a balanced binary search tree",
    ],
    correctAnswer: "Heap is automatically sorted",
    explanation:
      "When the last element is removed, the heap will automatically maintain its property by performing a 'bubble-down' operation if necessary.",
  },
  {
    question:
      "In a binary heap, how are the children of a node at index 'i' stored?",
    options: [
      "At indices 2i and 2i + 1",
      "At indices 2i + 1 and 2i + 2",
      "At indices i - 1 and i + 1",
      "At indices 2i + 1 and 2i + 3",
    ],
    correctAnswer: "At indices 2i + 1 and 2i + 2",
    explanation:
      "In a binary heap, the left child is at index 2i + 1 and the right child is at index 2i + 2.",
  },
];
