export const test2 = [
  {
    question: "Which of the following is a key feature of a priority queue?",
    options: [
      "Elements are removed in the order they are added",
      "Elements with higher priority are removed first",
      "It operates on Last In, First Out (LIFO)",
      "It stores elements in random order",
    ],
    correctAnswer: "Elements with higher priority are removed first",
    explanation:
      "In a priority queue, elements are removed based on their priority, not in the order they were added.",
  },
  {
    question:
      "In a queue, which of the following operations is used to check if the queue is empty?",
    options: ["Peek", "IsEmpty", "Dequeue", "Enqueue"],
    correctAnswer: "IsEmpty",
    explanation:
      "The IsEmpty operation is used to check whether the queue is empty or not.",
  },
  {
    question: "What happens when a queue is full?",
    options: [
      "The first element is deleted",
      "New elements are added in the middle",
      "New elements cannot be added",
      "The queue automatically resizes",
    ],
    correctAnswer: "New elements cannot be added",
    explanation:
      "When a queue is full, no new elements can be added unless the queue has dynamic resizing.",
  },
  {
    question:
      "Which of the following types of queue supports insertion and deletion at both ends?",
    options: [
      "Simple Queue",
      "Circular Queue",
      "Double-ended Queue (Deque)",
      "Priority Queue",
    ],
    correctAnswer: "Double-ended Queue (Deque)",
    explanation:
      "A double-ended queue (Deque) allows insertion and deletion from both the front and the rear.",
  },
  {
    question: "What is the purpose of the 'peek' operation in a queue?",
    options: [
      "To view the first element without removing it",
      "To remove the first element",
      "To add an element to the queue",
      "To check if the queue is full",
    ],
    correctAnswer: "To view the first element without removing it",
    explanation:
      "The peek operation allows you to view the front element of the queue without removing it.",
  },
  {
    question: "Which of the following is true about a circular queue?",
    options: [
      "It allows unlimited expansion",
      "It uses a dynamic array",
      "It can reuse the space of dequeued elements",
      "It supports only dequeue operations",
    ],
    correctAnswer: "It can reuse the space of dequeued elements",
    explanation:
      "A circular queue allows the reuse of space that is freed when elements are dequeued, preventing wasted space.",
  },
  {
    question:
      "In a circular queue, how do we handle the wraparound of the rear pointer?",
    options: [
      "Use a static array",
      "Use a dynamic array",
      "Check if the rear pointer is at the beginning of the array",
      "Implement a queue using linked list",
    ],
    correctAnswer: "Check if the rear pointer is at the beginning of the array",
    explanation:
      "In a circular queue, we handle the wraparound by resetting the rear pointer to the beginning of the array when it reaches the end.",
  },
  {
    question: "What is the time complexity of the 'peek' operation in a queue?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "The 'peek' operation in a queue has constant time complexity O(1) since it only involves viewing the front element.",
  },
  {
    question: "What is the primary difference between a queue and a stack?",
    options: [
      "Queues follow LIFO, while stacks follow FIFO",
      "Stacks follow FIFO, while queues follow LIFO",
      "Both follow FIFO",
      "Stacks follow LIFO, while queues follow FIFO",
    ],
    correctAnswer: "Stacks follow LIFO, while queues follow FIFO",
    explanation:
      "Stacks follow Last In, First Out (LIFO) while queues follow First In, First Out (FIFO).",
  },
  {
    question:
      "Which type of queue is ideal for managing tasks with different priorities?",
    options: [
      "Simple Queue",
      "Circular Queue",
      "Priority Queue",
      "Double-ended Queue",
    ],
    correctAnswer: "Priority Queue",
    explanation:
      "A priority queue is ideal for managing tasks with different priorities, where higher priority tasks are dequeued first.",
  },
  {
    question:
      "In which situation would a circular queue be more advantageous than a regular queue?",
    options: [
      "When elements are frequently removed from the middle",
      "When elements are frequently added at the front",
      "When there is a need for space optimization",
      "When elements need to be accessed randomly",
    ],
    correctAnswer: "When there is a need for space optimization",
    explanation:
      "A circular queue optimizes space by reusing empty slots in the array, which prevents wasted space.",
  },
  {
    question: "What happens to the rear pointer when a circular queue is full?",
    options: [
      "It points to the first element",
      "It points to the last element",
      "It becomes null",
      "It triggers an overflow error",
    ],
    correctAnswer: "It triggers an overflow error",
    explanation:
      "When a circular queue is full, adding new elements triggers an overflow error as there is no space left for additional elements.",
  },
  {
    question: "How does a circular queue maintain efficient use of memory?",
    options: [
      "By resizing dynamically",
      "By wrapping around when the rear pointer reaches the end",
      "By freeing up unused space immediately",
      "By limiting the number of elements added",
    ],
    correctAnswer: "By wrapping around when the rear pointer reaches the end",
    explanation:
      "In a circular queue, when the rear pointer reaches the end of the array, it wraps around to the beginning, reusing any freed space.",
  },
  {
    question: "Which of the following is true about a deque?",
    options: [
      "Elements are added to the rear and removed from the front only",
      "Elements can be inserted and removed from both ends",
      "It follows Last In, First Out (LIFO)",
      "It can only be implemented with arrays",
    ],
    correctAnswer: "Elements can be inserted and removed from both ends",
    explanation:
      "A deque allows elements to be inserted and removed from both the front and rear, offering flexibility over a regular queue.",
  },
  {
    question: "What operation would you perform to check if a queue is full?",
    options: ["Peek", "IsFull", "Dequeue", "Enqueue"],
    correctAnswer: "IsFull",
    explanation:
      "The IsFull operation checks whether the queue has reached its maximum capacity.",
  },
  {
    question:
      "What is the primary advantage of using a priority queue over a simple queue?",
    options: [
      "It offers constant-time removal of elements",
      "It prioritizes certain tasks over others based on priority",
      "It allows random access to elements",
      "It uses less memory",
    ],
    correctAnswer: "It prioritizes certain tasks over others based on priority",
    explanation:
      "A priority queue allows elements with higher priority to be dequeued before others, making it useful in scheduling and task management.",
  },
  {
    question: "Which of the following is not a characteristic of a queue?",
    options: [
      "First In, First Out (FIFO)",
      "Last In, First Out (LIFO)",
      "Enqueue and Dequeue operations",
      "Maintains insertion order",
    ],
    correctAnswer: "Last In, First Out (LIFO)",
    explanation:
      "A queue operates on the FIFO principle, not LIFO, which is the characteristic of a stack.",
  },
  {
    question:
      "Which type of queue implementation allows for more dynamic memory usage?",
    options: [
      "Array-based queue",
      "Linked list-based queue",
      "Priority queue",
      "Circular queue",
    ],
    correctAnswer: "Linked list-based queue",
    explanation:
      "A linked list-based queue allows dynamic memory usage, as memory is allocated as needed for each new node.",
  },
  {
    question: "What does the term 'enqueue' refer to?",
    options: [
      "Removing an element from the queue",
      "Viewing the front element of the queue",
      "Adding an element to the queue",
      "Checking if the queue is full",
    ],
    correctAnswer: "Adding an element to the queue",
    explanation:
      "The enqueue operation adds an element to the rear of the queue.",
  },
  {
    question:
      "What is the time complexity of both enqueue and dequeue operations in a queue implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a linked list-based queue, both enqueue and dequeue operations are performed in constant time, O(1).",
  },
];
