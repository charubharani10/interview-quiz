export const test3 = [
  {
    question:
      "What is the time complexity of the 'dequeue' operation in a priority queue implemented using a binary heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "The 'dequeue' operation in a binary heap requires removing the root element and rebalancing the heap, which takes O(log n) time.",
  },

  {
    question:
      "In a circular queue, what is the time complexity of the enqueue operation if the front and rear pointers are at adjacent positions?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "In a circular queue, the enqueue operation is typically O(1) because the element is added at the rear pointer and the queue wraps around when necessary.",
  },

  {
    question:
      "In a queue implemented using two stacks, what is the worst-case time complexity of the 'dequeue' operation?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In a two-stack queue, the 'dequeue' operation may require moving all elements from one stack to the other, leading to a worst-case time complexity of O(n).",
  },

  {
    question:
      "What is the primary difference between a priority queue and a regular queue?",
    options: [
      "A priority queue processes elements in FIFO order, while a regular queue processes elements based on priority.",
      "A priority queue processes elements based on their priority level, whereas a regular queue processes elements in FIFO order.",
      "A priority queue has a fixed size, while a regular queue can grow dynamically.",
      "A priority queue allows for random access to elements, while a regular queue does not.",
    ],
    correctAnswer:
      "A priority queue processes elements based on their priority level, whereas a regular queue processes elements in FIFO order.",
    explanation:
      "A regular queue follows the FIFO (First In First Out) principle, whereas a priority queue processes elements according to their assigned priority.",
  },

  {
    question:
      "In a circular queue implemented with an array, when will the queue become full?",
    options: [
      "When rear equals the array length",
      "When rear equals front",
      "When front is greater than rear",
      "When rear is one position before front",
    ],
    correctAnswer: "When rear is one position before front",
    explanation:
      "In a circular queue, the queue is considered full when the 'rear' pointer is one position behind the 'front' pointer, indicating there is no available space.",
  },

  {
    question:
      "In a priority queue implemented using a binary heap, what is the time complexity for inserting a new element?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a binary heap, inserting an element requires placing it at the bottom and performing a heapify-up operation, which takes O(log n) time.",
  },

  {
    question:
      "Which data structure is most efficient for implementing a queue that needs to support both enqueue and dequeue operations in O(1) time?",
    options: ["Linked list", "Dynamic array", "Binary heap", "Stack"],
    correctAnswer: "Linked list",
    explanation:
      "A linked list allows both enqueue and dequeue operations to be performed in O(1) time by maintaining pointers to the front and rear of the queue.",
  },

  {
    question:
      "In a two-stack queue, how do you implement the 'dequeue' operation efficiently?",
    options: [
      "By always popping from the input stack",
      "By moving elements from the input stack to the output stack only when the output stack is empty",
      "By transferring all elements from the output stack to the input stack",
      "By sorting the elements in both stacks before dequeue",
    ],
    correctAnswer:
      "By moving elements from the input stack to the output stack only when the output stack is empty",
    explanation:
      "In a two-stack queue, elements are moved from the input stack to the output stack only when the output stack is empty to maintain FIFO order.",
  },

  {
    question:
      "What happens if you try to dequeue from an empty priority queue implemented using a binary heap?",
    options: [
      "It returns the minimum value",
      "It throws an 'underflow' error",
      "It returns null",
      "It simply ignores the request",
    ],
    correctAnswer: "It throws an 'underflow' error",
    explanation:
      "When trying to dequeue from an empty priority queue implemented with a binary heap, an 'underflow' error occurs as there are no elements to dequeue.",
  },

  {
    question:
      "What is the time complexity of the 'peek' operation in a priority queue implemented using an unsorted linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "In an unsorted linked list, the 'peek' operation requires scanning through the list to find the element with the highest priority, which takes O(n) time.",
  },
  {
    question:
      "What is the key disadvantage of using an array-based implementation for a queue?",
    options: [
      "Fixed size",
      "Slower access time",
      "Limited FIFO order",
      "Higher space complexity",
    ],
    correctAnswer: "Fixed size",
    explanation:
      "An array-based queue has a fixed size, meaning that if the queue becomes full, no more elements can be added without resizing the array.",
  },

  {
    question:
      "What is the time complexity of removing an element from the front of a queue implemented using a circular linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a circular linked list implementation of a queue, removing an element from the front requires only updating pointers, resulting in O(1) time complexity.",
  },

  {
    question:
      "Which of the following operations would take the longest time in a priority queue implemented with a binary heap?",
    options: [
      "Inserting a new element",
      "Removing the highest-priority element",
      "Finding the minimum element",
      "Peeking at the top element",
    ],
    correctAnswer: "Removing the highest-priority element",
    explanation:
      "Removing the highest-priority element from a binary heap involves removing the root and rebalancing the heap, which takes O(log n) time.",
  },

  {
    question:
      "In a queue implemented using two stacks, what happens when the output stack becomes empty during a dequeue operation?",
    options: [
      "Elements are dequeued directly from the input stack",
      "All elements are moved from the input stack to the output stack",
      "The operation is ignored",
      "An error is thrown",
    ],
    correctAnswer:
      "All elements are moved from the input stack to the output stack",
    explanation:
      "In a two-stack queue, when the output stack becomes empty, elements are transferred from the input stack to the output stack to maintain the FIFO order.",
  },

  {
    question:
      "What is the time complexity of the enqueue operation in a queue implemented using a doubly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a doubly linked list, adding an element to the rear of the queue is an O(1) operation, as it involves updating a few pointers.",
  },

  {
    question: "When would a circular queue be preferred over a linear queue?",
    options: [
      "When the queue needs to grow dynamically",
      "When the number of elements is fixed",
      "When the queue needs to wrap around for efficient use of space",
      "When operations need to be performed with O(log n) complexity",
    ],
    correctAnswer:
      "When the queue needs to wrap around for efficient use of space",
    explanation:
      "Circular queues are more space-efficient because they allow the front and rear to wrap around, making better use of available space in a fixed-size array.",
  },

  {
    question:
      "What is the space complexity of a queue implemented using a dynamic array that can grow as needed?",
    options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of a dynamic array-based queue is O(n), where n is the number of elements in the queue, as the array needs to store the elements.",
  },

  {
    question: "In a circular queue, how is the 'full' condition checked?",
    options: [
      "When rear == front",
      "When rear - front == size",
      "When front == rear",
      "When rear - front == size - 1",
    ],
    correctAnswer: "When rear - front == size - 1",
    explanation:
      "In a circular queue, the 'full' condition is checked when the difference between the rear and front pointers equals the size of the queue minus 1.",
  },

  {
    question:
      "In a priority queue implemented using a sorted linked list, what is the time complexity of inserting an element?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "In a sorted linked list implementation of a priority queue, elements need to be inserted in the correct position, which requires traversing the list, resulting in O(n) time complexity.",
  },

  {
    question:
      "How does the 'peek' operation work in a priority queue implemented using a sorted array?",
    options: [
      "It returns the first element in the array",
      "It returns the last element in the array",
      "It returns the element with the highest priority",
      "It finds the element with the lowest priority",
    ],
    correctAnswer: "It returns the element with the highest priority",
    explanation:
      "In a sorted array-based priority queue, the element with the highest priority is located at the first position, which is accessed in constant time.",
  },

  {
    question:
      "In a queue implemented using two stacks, when is the time complexity of the 'dequeue' operation O(n)?",
    options: [
      "When the input stack is empty",
      "When the output stack has more than one element",
      "When both stacks are full",
      "When the input stack contains elements",
    ],
    correctAnswer: "When the input stack is empty",
    explanation:
      "In a two-stack queue, the 'dequeue' operation takes O(n) time only when the input stack is empty, requiring the transfer of all elements from the input to the output stack.",
  },
];
