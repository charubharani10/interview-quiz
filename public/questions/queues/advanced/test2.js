export const test2 = [
  {
    question:
      "What is the worst-case time complexity of the enqueue operation in a priority queue implemented using an unsorted linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "In an unsorted linked list, enqueue operation takes O(1) time as the new element can be inserted at the end of the list without reordering, but finding the element with the highest priority during dequeue takes O(n).",
  },

  {
    question:
      "In a priority queue implemented with a binary heap, what is the time complexity of decreasing the key of an element?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "When the key of an element is decreased in a binary heap, the heap property may be violated, and it must be restored by moving the element up the tree, which takes O(log n) time.",
  },

  {
    question:
      "What is the primary disadvantage of using a doubly linked list to implement a queue compared to an array-based queue implementation?",
    options: [
      "It has slower enqueue and dequeue operations",
      "It requires additional space for pointers",
      "It is less flexible for dynamic resizing",
      "It uses constant time for insertion but linear time for deletion",
    ],
    correctAnswer: "It requires additional space for pointers",
    explanation:
      "A doubly linked list-based queue requires extra memory for pointers (for both next and previous node references), which can increase memory usage compared to an array-based queue.",
  },

  {
    question:
      "In an application of a circular queue in a buffer, what is the purpose of the 'front' pointer?",
    options: [
      "It represents the position where new data can be added",
      "It points to the next available space for insertion",
      "It indicates the location of the oldest data",
      "It keeps track of the current position in the buffer",
    ],
    correctAnswer: "It indicates the location of the oldest data",
    explanation:
      "In a circular queue used as a buffer, the 'front' pointer indicates the location of the oldest data, allowing efficient removal of elements as new data arrives.",
  },

  {
    question:
      "How does the time complexity of dequeue operation differ between a priority queue implemented using a binary heap and an unsorted linked list?",
    options: [
      "It is O(1) in both implementations",
      "It is O(log n) in the binary heap and O(n) in the unsorted linked list",
      "It is O(n) in both implementations",
      "It is O(log n) in the unsorted linked list and O(n) in the binary heap",
    ],
    correctAnswer:
      "It is O(log n) in the binary heap and O(n) in the unsorted linked list",
    explanation:
      "In a binary heap-based priority queue, removing the element with the highest priority (root) takes O(log n) time, while in an unsorted linked list, the minimum element must be found first, requiring O(n) time.",
  },

  {
    question:
      "In a circular queue implemented with a fixed-size array, how is a queue considered full?",
    options: [
      "When the front equals rear",
      "When the rear index is the maximum array index",
      "When rear is one position behind front",
      "When both the front and rear pointers point to the same index",
    ],
    correctAnswer: "When rear is one position behind front",
    explanation:
      "In a circular queue, the queue is considered full when the 'rear' pointer is one position behind the 'front' pointer, indicating no space for new elements.",
  },

  {
    question:
      "What is the impact of using a dynamic array to implement a queue in terms of time complexity for enqueue and dequeue operations?",
    options: [
      "Both operations are O(1) on average but may degrade to O(n) during resizing",
      "Both operations are O(n)",
      "Enqueue is O(1), but dequeue is O(n)",
      "Both operations are O(log n)",
    ],
    correctAnswer:
      "Both operations are O(1) on average but may degrade to O(n) during resizing",
    explanation:
      "Dynamic arrays provide constant-time complexity for both enqueue and dequeue operations in most cases, but resizing the array (when it becomes full) can lead to O(n) time complexity.",
  },

  {
    question:
      "How does a two-stack queue maintain its FIFO nature during the dequeue operation?",
    options: [
      "By transferring elements between the stacks when necessary",
      "By keeping elements sorted in each stack",
      "By moving elements from the rear to the front of the queue",
      "By allowing only one stack to be used at any time",
    ],
    correctAnswer: "By transferring elements between the stacks when necessary",
    explanation:
      "In a two-stack queue implementation, when elements are dequeued, if the output stack is empty, elements from the input stack are moved to the output stack to maintain FIFO behavior.",
  },

  {
    question:
      "What is the time complexity of the 'peek' operation in a priority queue implemented using a binary heap?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(log n) for insertion, O(1) for peeking",
    ],
    correctAnswer: "O(1)",
    explanation:
      "The 'peek' operation in a binary heap-based priority queue, which returns the highest priority element, can be done in constant time O(1) since the element is always at the root.",
  },

  {
    question:
      "In a circular queue with an array of size 'n', if the front pointer is at index 'i' and the rear pointer is at index 'j', how can you determine if the queue is empty?",
    options: [
      "When front is equal to rear",
      "When rear points to the last index",
      "When front is greater than rear",
      "When rear points to the first index",
    ],
    correctAnswer: "When front is equal to rear",
    explanation:
      "In a circular queue, the queue is considered empty when the 'front' and 'rear' pointers are equal, as no elements are present in the queue.",
  },

  {
    question:
      "In a priority queue implemented with a binary heap, what happens when two elements with the same priority are inserted?",
    options: [
      "The element inserted last is always placed at the root",
      "The binary heap becomes unbalanced",
      "The element inserted first is placed at the root",
      "Elements with the same priority are inserted in arbitrary order",
    ],
    correctAnswer:
      "Elements with the same priority are inserted in arbitrary order",
    explanation:
      "A binary heap does not maintain order between elements with the same priority, so their insertion order is arbitrary, and the heap property is preserved.",
  },
  {
    question:
      "How does a circular queue handle overflow conditions in the event of a full queue with no space left for further insertion?",
    options: [
      "It triggers an overflow error",
      "It deletes the oldest element",
      "It wraps the 'rear' pointer around to the front",
      "It refuses to accept more elements",
    ],
    correctAnswer: "It triggers an overflow error",
    explanation:
      "In a circular queue, when the queue is full and there is no space left for more elements, an overflow error is triggered to prevent further insertions.",
  },

  {
    question:
      "Which of the following operations has the same time complexity in both a priority queue implemented with an unsorted linked list and a binary heap?",
    options: ["Enqueue", "Peek", "Dequeue", "Find minimum"],
    correctAnswer: "Enqueue",
    explanation:
      "Both a priority queue implemented with an unsorted linked list and a binary heap can enqueue elements in O(1) time, but the time complexity for dequeue and finding the minimum element differs.",
  },

  {
    question:
      "In a two-stack queue implementation, how do you ensure that the output stack is non-empty when performing a dequeue operation?",
    options: [
      "By pushing all elements from the input stack to the output stack every time a dequeue occurs",
      "By keeping one stack always empty for future use",
      "By swapping the contents of both stacks periodically",
      "By pushing elements back to the output stack when it becomes empty",
    ],
    correctAnswer:
      "By pushing all elements from the input stack to the output stack every time a dequeue occurs",
    explanation:
      "In a two-stack queue implementation, if the output stack is empty, elements from the input stack are moved to the output stack to maintain FIFO behavior during a dequeue.",
  },

  {
    question:
      "When using a priority queue, how is the insertion of an element typically handled in a binary heap?",
    options: [
      "By placing the element in the correct position in the heap using a heapify-up operation",
      "By inserting the element at the bottom of the heap",
      "By sorting the heap after every insertion",
      "By always adding elements at the root and balancing the heap",
    ],
    correctAnswer:
      "By placing the element in the correct position in the heap using a heapify-up operation",
    explanation:
      "In a binary heap, new elements are inserted at the bottom, and a 'heapify-up' operation is used to restore the heap property by moving the element up the tree.",
  },
];
