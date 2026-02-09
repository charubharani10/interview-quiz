export const test3 = [
  {
    question:
      "What is the worst-case time complexity for deleting the root element in a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Deleting the root element from a heap involves moving the last element to the root and 'bubbling down' to restore the heap property, which takes O(log n) time.",
  },
  {
    question: "Which of the following operations is not supported by a heap?",
    options: [
      "Find the maximum element",
      "Insert a new element",
      "Delete an arbitrary element",
      "Peek at the top element",
    ],
    correctAnswer: "Delete an arbitrary element",
    explanation:
      "A heap does not support deleting arbitrary elements. It only allows inserting elements and deleting the root element.",
  },
  {
    question:
      "In a max heap, which of the following holds true for every node?",
    options: [
      "The value of the node is less than or equal to its parent",
      "The value of the node is greater than or equal to its parent",
      "The value of the node is less than or equal to its children",
      "The value of the node is greater than or equal to its children",
    ],
    correctAnswer:
      "The value of the node is greater than or equal to its children",
    explanation:
      "In a max heap, each parent node is greater than or equal to its children, ensuring the largest element is at the root.",
  },
  {
    question: "In which of the following cases would you use a min heap?",
    options: [
      "To find the largest element",
      "To implement a priority queue with the highest priority element first",
      "To find the smallest element efficiently",
      "To sort an array",
    ],
    correctAnswer: "To find the smallest element efficiently",
    explanation:
      "A min heap is used to find the smallest element efficiently. It keeps the smallest element at the root.",
  },
  {
    question: "Which of the following is a characteristic of a binary heap?",
    options: [
      "The tree is not complete",
      "It can be a balanced tree",
      "It is always a complete binary tree",
      "The tree is always sorted",
    ],
    correctAnswer: "It is always a complete binary tree",
    explanation:
      "A binary heap is always a complete binary tree, meaning every level is fully filled except possibly the last, which is filled from left to right.",
  },
  {
    question:
      "What is the time complexity of accessing the root element in a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "Accessing the root element in a heap is a constant time operation, as it is always located at index 0 in the array representation.",
  },
  {
    question: "What is the key difference between a max heap and a min heap?",
    options: [
      "Max heap has the largest element at the root, while min heap has the smallest element",
      "Max heap has the smallest element at the root, while min heap has the largest element",
      "Max heap is implemented using arrays, while min heap is implemented using linked lists",
      "Max heap has more children than min heap",
    ],
    correctAnswer:
      "Max heap has the largest element at the root, while min heap has the smallest element",
    explanation:
      "In a max heap, the largest element is at the root, whereas in a min heap, the smallest element is at the root.",
  },
  {
    question:
      "What is the primary reason for using a heap over an unsorted array for implementing a priority queue?",
    options: [
      "Heaps allow faster insertions",
      "Heaps allow faster access to the maximum or minimum element",
      "Heaps use less memory",
      "Heaps allow faster element deletion",
    ],
    correctAnswer:
      "Heaps allow faster access to the maximum or minimum element",
    explanation:
      "A heap allows efficient access to the maximum (in a max heap) or minimum (in a min heap) element, making it ideal for priority queues.",
  },
  {
    question:
      "Which operation is most efficient in a heap when compared to other data structures?",
    options: [
      "Finding the minimum element",
      "Finding the maximum element",
      "Insert operation",
      "Delete the root element",
    ],
    correctAnswer: "Delete the root element",
    explanation:
      "In a heap, deleting the root element is efficient, taking O(log n) time, which is better than searching for or deleting arbitrary elements in other data structures.",
  },
  {
    question: "What happens if the heap property is violated during insertion?",
    options: [
      "The tree is rebuilt",
      "The element is inserted as is",
      "The heap remains unchanged",
      "The property is restored using bubbling up",
    ],
    correctAnswer: "The property is restored using bubbling up",
    explanation:
      "If the heap property is violated during insertion, the property is restored by moving the inserted element upwards (bubbling up) until the heap property is satisfied.",
  },
  {
    question:
      "How does the time complexity of heap operations compare with that of sorting algorithms like merge sort and quick sort?",
    options: [
      "Heaps are faster for sorting",
      "Heap operations take O(n log n) for sorting, while merge and quick sort take O(n log n)",
      "Heap operations take linear time, while sorting algorithms take logarithmic time",
      "Heaps are not used for sorting",
    ],
    correctAnswer:
      "Heap operations take O(n log n) for sorting, while merge and quick sort take O(n log n)",
    explanation:
      "Heap sort is an O(n log n) sorting algorithm, which is comparable to other efficient sorting algorithms like merge sort and quick sort.",
  },
  {
    question: "What is the space complexity of a heap stored in an array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "A heap is typically stored in an array, which takes linear space O(n) to store n elements.",
  },
  {
    question:
      "What is the time complexity of inserting a new element in a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Inserting an element into a heap involves adding it to the end and 'bubbling up' to restore the heap property, which takes O(log n) time.",
  },
  {
    question: "Which of the following heap operations is the most efficient?",
    options: [
      "Find the minimum element",
      "Insert a new element",
      "Delete the root element",
      "Delete an arbitrary element",
    ],
    correctAnswer: "Delete the root element",
    explanation:
      "Deleting the root element in a heap is efficient because the heap can restore its property by moving the last element to the root and 'bubbling down' in O(log n) time.",
  },
  {
    question:
      "In a max heap, which of the following holds true for every node?",
    options: [
      "The value of the node is smaller than or equal to its parent",
      "The value of the node is greater than or equal to its parent",
      "The value of the node is smaller than or equal to its children",
      "The value of the node is greater than or equal to its children",
    ],
    correctAnswer:
      "The value of the node is greater than or equal to its children",
    explanation:
      "In a max heap, the parent node's value must be greater than or equal to the values of its children.",
  },
  {
    question:
      "Which data structure is most commonly used to implement a priority queue?",
    options: ["Stack", "Queue", "Array", "Heap"],
    correctAnswer: "Heap",
    explanation:
      "A heap is commonly used to implement a priority queue because it efficiently supports insertion and deletion of the highest-priority element.",
  },
  {
    question: "How can you convert a given array into a valid heap?",
    options: [
      "By sorting the array",
      "By using the 'heapify' process",
      "By reversing the array",
      "By inserting each element one by one",
    ],
    correctAnswer: "By using the 'heapify' process",
    explanation:
      "The 'heapify' process transforms an unsorted array into a valid heap in O(n) time.",
  },
  {
    question:
      "What is the time complexity of accessing the smallest element in a min heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "In a min heap, the smallest element is always at the root, so accessing it takes constant time O(1).",
  },
  {
    question:
      "Which of the following operations is not supported directly by a heap?",
    options: [
      "Insert",
      "Extract the root element",
      "Find an arbitrary element",
      "Peek at the root element",
    ],
    correctAnswer: "Find an arbitrary element",
    explanation:
      "A heap does not support finding an arbitrary element. It only allows accessing the root, inserting elements, and deleting the root.",
  },
  {
    question: "How is a heap usually represented in memory?",
    options: ["Linked list", "Array", "Binary tree", "Hash table"],
    correctAnswer: "Array",
    explanation:
      "A heap is typically implemented using an array where the parent-child relationships are defined by array indices.",
  },
  {
    question: "What is the main advantage of a heap over an unsorted array?",
    options: [
      "Better time complexity for searching",
      "Better time complexity for inserting elements",
      "Better time complexity for accessing the largest or smallest element",
      "Better space efficiency",
    ],
    correctAnswer:
      "Better time complexity for accessing the largest or smallest element",
    explanation:
      "A heap allows O(1) access to the largest (in max heap) or smallest (in min heap) element, while in an unsorted array, this would require O(n) time.",
  },
  {
    question:
      "What is the worst-case time complexity for removing the minimum element from a min heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Removing the minimum element from a min heap involves swapping the root with the last element and then 'bubbling down', which takes O(log n) time.",
  },
];
