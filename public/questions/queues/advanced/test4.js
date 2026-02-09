export const test4 = [
  {
    question:
      "What is the time complexity of the 'dequeue' operation in a queue implemented using a doubly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a doubly linked list, removing an element from the front of the queue is an O(1) operation, as it only requires updating pointers.",
  },

  {
    question:
      "In a circular queue, which pointer moves when an element is dequeued?",
    options: [
      "Front pointer",
      "Rear pointer",
      "Both front and rear pointers",
      "None of the pointers move",
    ],
    correctAnswer: "Front pointer",
    explanation:
      "When an element is dequeued in a circular queue, only the front pointer moves forward to point to the next element in the queue.",
  },

  {
    question:
      "Which of the following is NOT a valid operation for a priority queue?",
    options: [
      "Insert an element with a specific priority",
      "Peek at the highest priority element",
      "Remove the lowest priority element",
      "Random access to elements",
    ],
    correctAnswer: "Random access to elements",
    explanation:
      "Priority queues do not support random access to elements, as they prioritize ordering based on priority rather than index.",
  },

  {
    question:
      "What is the key difference between a priority queue and a normal queue?",
    options: [
      "A priority queue uses a First-In-First-Out (FIFO) policy",
      "In a priority queue, the element with the highest priority is dequeued first",
      "A priority queue does not allow duplicates",
      "Elements in a priority queue are stored in a sorted order",
    ],
    correctAnswer:
      "In a priority queue, the element with the highest priority is dequeued first",
    explanation:
      "Unlike a regular queue, a priority queue dequeues the element with the highest priority first, regardless of when it was added.",
  },

  {
    question:
      "How does the 'enqueue' operation in a queue implemented using a dynamic array differ from that of a circular array?",
    options: [
      "In dynamic arrays, the size is fixed, but circular arrays are dynamic",
      "In dynamic arrays, the array needs to be resized when full, whereas in circular arrays, no resizing is needed",
      "In dynamic arrays, elements are inserted in a fixed order, while circular arrays allow random insertion",
      "In circular arrays, the enqueue operation is slower than in dynamic arrays",
    ],
    correctAnswer:
      "In dynamic arrays, the array needs to be resized when full, whereas in circular arrays, no resizing is needed",
    explanation:
      "A dynamic array-based queue needs to resize when full, whereas in a circular array-based queue, the rear wraps around to make better use of space, avoiding the need for resizing.",
  },

  {
    question:
      "What is the time complexity of the 'enqueue' operation in a priority queue implemented using an unsorted linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In an unsorted linked list, inserting an element into a priority queue takes O(1) time, as the element can be added at the end of the list without worrying about its priority.",
  },

  {
    question:
      "In a queue implemented using two stacks, what happens when the output stack has more than one element during a dequeue operation?",
    options: [
      "The operation proceeds as normal",
      "The operation is ignored",
      "All elements are transferred from the input stack to the output stack",
      "A new stack is created for the output",
    ],
    correctAnswer: "The operation proceeds as normal",
    explanation:
      "If the output stack has more than one element, the dequeue operation proceeds as normal, removing and returning the element at the top of the output stack.",
  },

  {
    question:
      "What is the time complexity of inserting an element into a priority queue implemented using a binary heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a binary heap-based priority queue, inserting an element requires 'bubbling up' to maintain heap properties, resulting in O(log n) time complexity.",
  },

  {
    question:
      "What is the main advantage of using a circular queue over a linear queue?",
    options: [
      "Faster access time",
      "Efficient use of space in fixed-size arrays",
      "Simpler implementation",
      "Greater flexibility with different data types",
    ],
    correctAnswer: "Efficient use of space in fixed-size arrays",
    explanation:
      "A circular queue allows the front and rear pointers to wrap around, making better use of the available space in a fixed-size array.",
  },

  {
    question:
      "In a priority queue implemented using a sorted linked list, how is the insertion of a new element handled?",
    options: [
      "Insert the element in the correct sorted position",
      "Append the element to the end of the list",
      "Insert the element at the front of the list",
      "The element is inserted randomly",
    ],
    correctAnswer: "Insert the element in the correct sorted position",
    explanation:
      "In a sorted linked list implementation of a priority queue, elements must be inserted in their correct sorted position based on priority.",
  },

  {
    question:
      "Which data structure is most appropriate for implementing a queue with a priority?",
    options: ["Array", "Linked list", "Binary heap", "Hash map"],
    correctAnswer: "Binary heap",
    explanation:
      "A binary heap is an efficient data structure for implementing a priority queue because it allows both insertion and removal of the highest-priority element in O(log n) time.",
  },
  {
    question:
      "In a circular queue, what happens if you try to enqueue an element when the queue is full?",
    options: [
      "The element is enqueued, and the queue size increases",
      "The element is discarded",
      "The front pointer is moved",
      "The rear pointer is reset to the beginning",
    ],
    correctAnswer: "The element is discarded",
    explanation:
      "In a circular queue, if the queue is full, the new element cannot be added, and it is discarded to prevent overflow.",
  },

  {
    question:
      "Which of the following is the worst-case time complexity for dequeue operation in a priority queue implemented using a sorted array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(n)",
    explanation:
      "In a sorted array implementation of a priority queue, dequeue operation requires O(n) time to remove the first element, and shifting all other elements left.",
  },

  {
    question:
      "What is the major disadvantage of using an array-based queue when the size is unknown or highly variable?",
    options: [
      "Slower enqueue operations",
      "Dynamic resizing overhead",
      "Limited access to elements",
      "Requires an extra pointer for enqueue and dequeue",
    ],
    correctAnswer: "Dynamic resizing overhead",
    explanation:
      "With an array-based queue, if the size is unknown, resizing the array (when it becomes full) incurs a high performance cost due to copying elements.",
  },

  {
    question:
      "Which algorithmic approach is often used to handle a full queue in circular queue implementations?",
    options: [
      "Throw an exception",
      "Resize the queue dynamically",
      "Apply backtracking",
      "Use a priority queue",
    ],
    correctAnswer: "Resize the queue dynamically",
    explanation:
      "Circular queues can dynamically resize when full to handle more data, ensuring that space is efficiently utilized.",
  },

  {
    question:
      "When implementing a queue using two stacks, which operation requires moving all elements from one stack to another?",
    options: ["Enqueue", "Dequeue", "Peek", "Clear"],
    correctAnswer: "Dequeue",
    explanation:
      "In a queue implemented using two stacks, the 'dequeue' operation requires moving elements from the first stack to the second stack if the second stack is empty.",
  },

  {
    question:
      "Which of the following is a key advantage of using a linked list to implement a queue over an array-based implementation?",
    options: [
      "Constant time complexity for enqueue and dequeue operations",
      "Dynamic memory allocation",
      "Fixed-size storage",
      "Less memory usage",
    ],
    correctAnswer: "Dynamic memory allocation",
    explanation:
      "A linked list implementation allows dynamic memory allocation, so the size of the queue can grow and shrink as needed, unlike array-based queues, which are fixed in size.",
  },

  {
    question:
      "In a priority queue, if two elements have the same priority, which of the following is used to determine the order of dequeuing?",
    options: [
      "Their insertion order",
      "Their size",
      "Their value",
      "Their position in memory",
    ],
    correctAnswer: "Their insertion order",
    explanation:
      "In a priority queue with equal priorities, the insertion order determines which element is dequeued first. This is known as a stable priority queue.",
  },

  {
    question:
      "Which data structure allows constant time for both enqueue and dequeue operations, provided that the size of the queue is fixed?",
    options: ["Array", "Linked List", "Circular Queue", "Binary Heap"],
    correctAnswer: "Circular Queue",
    explanation:
      "A circular queue allows constant time O(1) operations for both enqueue and dequeue, as it uses a fixed-size array and effectively utilizes available space.",
  },

  {
    question:
      "In a priority queue implemented using a binary heap, what is the time complexity of extracting the highest priority element?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "Extracting the highest priority element from a binary heap is an O(log n) operation, as the heap needs to reorganize itself after removal.",
  },

  {
    question:
      "What is the main advantage of using a deque (double-ended queue) over a standard queue implementation?",
    options: [
      "Allows fast insertion and removal at both ends",
      "Requires less memory",
      "Supports random access",
      "Simpler to implement",
    ],
    correctAnswer: "Allows fast insertion and removal at both ends",
    explanation:
      "A deque allows insertion and removal from both ends of the queue in constant time, making it more flexible than a standard queue that operates on one end only.",
  },
];
