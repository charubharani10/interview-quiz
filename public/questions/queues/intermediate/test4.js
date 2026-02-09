export const test4 = [
  {
    question:
      "What is the best time complexity for searching an element in a queue?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In a standard queue, searching for an element requires traversing through the entire queue, which results in a time complexity of O(n).",
  },

  {
    question:
      "How does a double-ended queue (deque) differ from a regular queue?",
    options: [
      "It only allows elements to be added to the front",
      "It allows insertion and removal of elements from both ends",
      "It only allows elements to be added to the rear",
      "It allows access to any element in constant time",
    ],
    correctAnswer: "It allows insertion and removal of elements from both ends",
    explanation:
      "A deque (double-ended queue) allows elements to be inserted and removed from both the front and rear ends, unlike a regular queue.",
  },

  {
    question: "Which of the following is a key feature of a circular queue?",
    options: [
      "It allows unlimited size",
      "It prevents memory wastage by using the same array space",
      "It is always implemented using a linked list",
      "It allows non-linear element access",
    ],
    correctAnswer: "It prevents memory wastage by using the same array space",
    explanation:
      "A circular queue wraps around the end of an array to reuse freed space, preventing memory wastage.",
  },

  {
    question:
      "Which of the following operations in a queue can be performed in O(1) time?",
    options: ["Enqueue", "Dequeue", "Peek", "All of the above"],
    correctAnswer: "All of the above",
    explanation:
      "In a well-implemented queue (whether using an array or a linked list), all three operations—'Enqueue', 'Dequeue', and 'Peek'—can be performed in constant time O(1).",
  },

  {
    question:
      "In which situation would a priority queue be preferable over a regular queue?",
    options: [
      "When processing elements in the order they are received",
      "When processing elements based on their priority rather than their arrival time",
      "When you need a fast search operation",
      "When you want to minimize memory usage",
    ],
    correctAnswer:
      "When processing elements based on their priority rather than their arrival time",
    explanation:
      "A priority queue is ideal for scenarios where elements need to be processed based on priority, such as task scheduling, rather than in the order of arrival.",
  },

  {
    question: "What does the 'front' pointer in a queue indicate?",
    options: [
      "The position of the last element",
      "The next element to be dequeued",
      "The next available space for enqueue",
      "The element with the highest priority",
    ],
    correctAnswer: "The next element to be dequeued",
    explanation:
      "The 'front' pointer in a queue points to the next element that will be dequeued. It is always the first element in the queue.",
  },

  {
    question: "What happens if you try to dequeue from an empty queue?",
    options: [
      "The operation succeeds with no error",
      "It causes a memory leak",
      "An exception is thrown",
      "The queue grows dynamically",
    ],
    correctAnswer: "An exception is thrown",
    explanation:
      "Attempting to dequeue from an empty queue results in an error or exception, as there are no elements to remove.",
  },

  {
    question:
      "Which of the following can be a limitation of using an array-based queue?",
    options: [
      "Requires dynamic resizing",
      "Fixed memory allocation size",
      "Slower than a linked list implementation",
      "All of the above",
    ],
    correctAnswer: "Fixed memory allocation size",
    explanation:
      "An array-based queue has a fixed size, and it cannot dynamically grow or shrink, which can be a limitation if the number of elements varies significantly.",
  },

  {
    question: "What type of queue can be implemented using two stacks?",
    options: ["Priority Queue", "Circular Queue", "Deque", "Queue"],
    correctAnswer: "Queue",
    explanation:
      "A queue can be implemented using two stacks by reversing the order of operations in one stack while using the other as temporary storage.",
  },

  {
    question:
      "What is the key advantage of using a priority queue over a normal queue?",
    options: [
      "Faster access time for the element at the front",
      "Efficient sorting of elements",
      "Elements with lower priority are processed first",
      "No need to process elements at all",
    ],
    correctAnswer: "Efficient sorting of elements",
    explanation:
      "A priority queue efficiently sorts elements based on their priority, making it suitable for applications where processing order depends on priority.",
  },
  {
    question: "How can you implement a queue using two stacks?",
    options: [
      "Push elements onto both stacks",
      "Push elements onto one stack and reverse the order when dequeuing",
      "Push elements onto both stacks and dequeue from the second stack",
      "Both stacks operate independently",
    ],
    correctAnswer:
      "Push elements onto one stack and reverse the order when dequeuing",
    explanation:
      "To implement a queue using two stacks, you push elements onto one stack, and when dequeuing, you reverse the order by transferring elements to the second stack.",
  },

  {
    question:
      "What is the maximum time complexity of an operation in a priority queue implemented with a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(log n)",
    explanation:
      "The time complexity of operations like 'Enqueue' and 'Dequeue' in a heap-based priority queue is O(log n), as elements need to be reordered to maintain the heap structure.",
  },

  {
    question:
      "Which of the following operations is not supported in a regular queue?",
    options: ["Peek", "Enqueue", "Dequeue", "Random Access"],
    correctAnswer: "Random Access",
    explanation:
      "A regular queue does not support random access; elements are processed strictly in FIFO order.",
  },

  {
    question: "What is the function of the 'rear' pointer in a queue?",
    options: [
      "Points to the next element to be dequeued",
      "Points to the element that will be removed",
      "Points to the next available space for enqueuing an element",
      "None of the above",
    ],
    correctAnswer:
      "Points to the next available space for enqueuing an element",
    explanation:
      "The 'rear' pointer in a queue points to the position where the next element will be enqueued.",
  },

  {
    question:
      "Which of the following is the main difference between a priority queue and a normal queue?",
    options: [
      "A priority queue processes elements based on their priority rather than the order of arrival",
      "A priority queue uses more memory",
      "A normal queue processes elements based on their priority",
      "A priority queue only allows enqueueing",
    ],
    correctAnswer:
      "A priority queue processes elements based on their priority rather than the order of arrival",
    explanation:
      "A priority queue allows elements to be processed based on their priority level, whereas a regular queue processes elements in FIFO order.",
  },

  {
    question:
      "What is the time complexity of accessing the last element of a queue implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In a linked list-based queue, accessing the last element requires traversing through the entire list, which takes O(n) time.",
  },

  {
    question:
      "Which of the following is a common application of queues in real-world systems?",
    options: [
      "Breadth-First Search (BFS)",
      "Undo functionality",
      "Sorting algorithms",
      "Memory management",
    ],
    correctAnswer: "Breadth-First Search (BFS)",
    explanation:
      "Queues are often used in algorithms like Breadth-First Search (BFS), where nodes are processed in layers and in FIFO order.",
  },

  {
    question: "How can a queue be implemented in a system with limited memory?",
    options: [
      "By using a linked list",
      "By using a dynamic array",
      "By using a circular array",
      "By using a heap",
    ],
    correctAnswer: "By using a circular array",
    explanation:
      "A circular array helps avoid memory wastage by reusing space that has been freed at the front of the queue.",
  },

  {
    question:
      "What type of queue can be used to simulate a 'first come, first served' job scheduling system?",
    options: ["Circular Queue", "Priority Queue", "Simple Queue", "Deque"],
    correctAnswer: "Simple Queue",
    explanation:
      "A simple queue (FIFO) is ideal for simulating 'first come, first served' job scheduling, where tasks are processed in the order they arrive.",
  },

  {
    question:
      "What is the main reason for using a priority queue in a CPU scheduling algorithm?",
    options: [
      "To give higher priority to tasks with smaller CPU burst times",
      "To prioritize shorter tasks",
      "To allow a round-robin scheduling",
      "To manage the queue size dynamically",
    ],
    correctAnswer:
      "To give higher priority to tasks with smaller CPU burst times",
    explanation:
      "Priority queues are used in CPU scheduling to give higher priority to tasks with smaller CPU burst times, improving system efficiency.",
  },
];
