export const test1 = [
  {
    question:
      "In a priority queue implemented using a heap, how do you maintain the heap property when removing an element?",
    options: [
      "By moving the element to the top",
      "By reordering the heap after removing the top element",
      "By replacing the top element with the next element",
      "By rearranging the array to maintain balance",
    ],
    correctAnswer: "By reordering the heap after removing the top element",
    explanation:
      "After removing the top element, the heap property must be restored by reordering the heap, which involves moving the last element to the top and then sifting it down.",
  },

  {
    question:
      "Which of the following is the time complexity of finding the 'k'th smallest element in a priority queue?",
    options: ["O(k log n)", "O(n log k)", "O(log k)", "O(n)"],
    correctAnswer: "O(k log n)",
    explanation:
      "To find the 'k'th smallest element in a priority queue, you would dequeue 'k' elements, each of which takes O(log n) time, resulting in an overall complexity of O(k log n).",
  },

  {
    question:
      "In a circular queue implemented using an array, how can you distinguish between a full and an empty queue?",
    options: [
      "By checking if front equals rear",
      "By checking if rear points to the last element",
      "By using an additional boolean flag",
      "By checking if front is greater than rear",
    ],
    correctAnswer: "By checking if front equals rear",
    explanation:
      "In a circular queue, if the front and rear pointers are equal, it indicates that the queue is either empty or full. The distinction is made by using an additional flag or by checking if the queue is full before an enqueue operation.",
  },

  {
    question:
      "When implementing a queue using two stacks, which of the following is the time complexity of the enqueue operation?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In the two-stack queue implementation, enqueue operation is performed in constant time O(1), as elements are pushed to the input stack directly.",
  },

  {
    question:
      "In a circular priority queue, how is the 'rear' pointer managed when the queue is full?",
    options: [
      "It wraps around to the front of the array",
      "It moves to the end of the queue",
      "It is set to NULL",
      "It moves to the middle of the queue",
    ],
    correctAnswer: "It wraps around to the front of the array",
    explanation:
      "In a circular priority queue, when the queue is full, the 'rear' pointer wraps around to the front of the array, allowing reuse of space.",
  },

  {
    question:
      "What is the time complexity of inserting an element in a priority queue implemented with a binary heap?",
    options: [
      "O(log n)",
      "O(n)",
      "O(log n) for insertion, O(1) for deletion",
      "O(n log n)",
    ],
    correctAnswer: "O(log n)",
    explanation:
      "In a binary heap-based priority queue, inserting an element requires maintaining the heap property, which takes O(log n) time.",
  },

  {
    question:
      "How does a deque (double-ended queue) differ from a regular queue?",
    options: [
      "It allows insertion and deletion at both ends",
      "It allows random access to elements",
      "It stores elements in a sorted order",
      "It allows priority-based element access",
    ],
    correctAnswer: "It allows insertion and deletion at both ends",
    explanation:
      "A deque allows both enqueue and dequeue operations at both ends (front and rear), unlike a regular queue which only allows operations at one end.",
  },

  {
    question:
      "When implementing a queue using two stacks, what is the time complexity of dequeue operation in the worst case?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In a two-stack queue implementation, the dequeue operation in the worst case takes O(n) time, as elements may need to be popped from the first stack and pushed to the second stack.",
  },

  {
    question:
      "What is the major disadvantage of using a linked list to implement a queue compared to an array-based implementation?",
    options: [
      "It requires more memory per element due to the need for pointers",
      "It has slower enqueue and dequeue operations",
      "It doesn't support dynamic resizing",
      "It has a higher time complexity for dequeue operations",
    ],
    correctAnswer:
      "It requires more memory per element due to the need for pointers",
    explanation:
      "A linked list-based queue requires additional memory to store pointers (for next node references), whereas an array-based queue stores elements contiguously, requiring less memory.",
  },

  {
    question:
      "In a circular queue, what happens if the 'rear' pointer is about to move past the last element in the array?",
    options: [
      "It moves to the first position in the array",
      "It wraps around to the middle of the array",
      "It generates an overflow error",
      "It stalls until space is freed",
    ],
    correctAnswer: "It moves to the first position in the array",
    explanation:
      "In a circular queue, the 'rear' pointer wraps around to the beginning of the array when it reaches the end, allowing continuous use of the array.",
  },

  {
    question:
      "In a queue-based simulation, which of the following operations would be most appropriate to model a printer's task scheduling?",
    options: ["Stack", "Queue", "Linked List", "Hash Table"],
    correctAnswer: "Queue",
    explanation:
      "A queue is ideal for task scheduling as it follows the FIFO principle, which models real-world printing tasks where the first job to be received is the first to be processed.",
  },
  {
    question:
      "What is the complexity of resizing a dynamic queue (implemented as an array) when it reaches full capacity?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Resizing an array-based dynamic queue requires creating a new array and copying all elements, which takes O(n) time.",
  },

  {
    question:
      "In a priority queue using a binary heap, how is the element with the highest priority accessed?",
    options: [
      "It is accessed via the root of the heap",
      "It is accessed from the bottom of the heap",
      "It is accessed via random traversal",
      "It is accessed by popping from the heap",
    ],
    correctAnswer: "It is accessed via the root of the heap",
    explanation:
      "In a binary heap-based priority queue, the highest priority element is always stored at the root, allowing O(1) access.",
  },

  {
    question:
      "When implementing a circular queue with an array, how is the 'front' pointer adjusted after an element is dequeued?",
    options: [
      "It is moved to the next index in the array",
      "It is decremented by 1",
      "It remains at the same position",
      "It wraps around to the beginning of the array",
    ],
    correctAnswer: "It is moved to the next index in the array",
    explanation:
      "After dequeuing an element, the 'front' pointer is moved to the next index to point to the next element in the queue.",
  },

  {
    question:
      "In an array-based circular queue, what is the time complexity of the enqueue operation when the queue is full?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a circular queue, the 'rear' pointer wraps around to the beginning of the array if the queue is full, and the enqueue operation remains O(1).",
  },

  {
    question:
      "What is the key difference between a priority queue and a regular queue?",
    options: [
      "A priority queue processes elements based on priority, while a regular queue follows FIFO",
      "A priority queue only allows dequeue operations",
      "A priority queue requires the elements to be sorted",
      "A priority queue does not allow insertion at the rear",
    ],
    correctAnswer:
      "A priority queue processes elements based on priority, while a regular queue follows FIFO",
    explanation:
      "A priority queue processes elements based on their priority rather than their arrival order, whereas a regular queue follows FIFO.",
  },

  {
    question:
      "How does a deque allow for greater flexibility than a regular queue?",
    options: [
      "It allows insertion and deletion at both ends",
      "It stores elements in a sorted manner",
      "It allows random access to elements",
      "It supports faster search operations",
    ],
    correctAnswer: "It allows insertion and deletion at both ends",
    explanation:
      "A deque supports both enqueue and dequeue operations at both ends (front and rear), while a regular queue only supports these operations at one end.",
  },

  {
    question:
      "In a circular queue, what happens when both the front and rear pointers are equal?",
    options: [
      "The queue is full",
      "The queue is empty",
      "There is an overflow",
      "The queue is half full",
    ],
    correctAnswer: "The queue is full",
    explanation:
      "In a circular queue, when the front and rear pointers are equal, the queue is full because there is no room for more elements.",
  },

  {
    question:
      "How can you implement a queue using two stacks without using a third auxiliary stack?",
    options: [
      "By using a temporary array",
      "By moving elements between the stacks on each operation",
      "By sorting elements during the enqueue operation",
      "By using recursion",
    ],
    correctAnswer: "By moving elements between the stacks on each operation",
    explanation:
      "In the two-stack queue implementation, elements are moved from the input stack to the output stack whenever a dequeue operation is needed.",
  },

  {
    question:
      "In a circular queue with an array, how is the queue considered full?",
    options: [
      "When rear points to the last index",
      "When rear is one position behind front",
      "When rear is equal to front",
      "When front points to the first index",
    ],
    correctAnswer: "When rear is one position behind front",
    explanation:
      "In a circular queue, the queue is considered full when the rear pointer is one position behind the front pointer, as there is no space for more elements.",
  },

  {
    question:
      "What is the time complexity of deleting the minimum element in a priority queue implemented using a binary heap?",
    options: ["O(log n)", "O(1)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a binary heap, deleting the minimum element requires maintaining the heap property, which takes O(log n) time.",
  },
];
