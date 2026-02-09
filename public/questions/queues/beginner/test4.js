export const test4 = [
  {
    question:
      "In a queue, which operation adds an element to the end of the queue?",
    options: ["Enqueue", "Dequeue", "Peek", "Push"],
    correctAnswer: "Enqueue",
    explanation:
      "The enqueue operation is used to add an element to the end of the queue.",
  },
  {
    question:
      "Which of the following is a common real-world example of a queue?",
    options: [
      "A stack of plates",
      "A grocery store checkout line",
      "An online auction",
      "A webpage loading elements",
    ],
    correctAnswer: "A grocery store checkout line",
    explanation:
      "A queue operates in the First-In-First-Out (FIFO) order, like people waiting in line at a grocery store checkout.",
  },
  {
    question: "How is a queue typically represented in memory?",
    options: [
      "Using a stack",
      "Using an array or linked list",
      "Using a hash map",
      "Using a set",
    ],
    correctAnswer: "Using an array or linked list",
    explanation:
      "Queues are typically implemented using arrays or linked lists, where elements are added to the rear and removed from the front.",
  },
  {
    question:
      "Which of the following operations would typically be used to check if a queue is empty?",
    options: ["IsEmpty", "Peek", "Dequeue", "Enqueue"],
    correctAnswer: "IsEmpty",
    explanation:
      "The IsEmpty operation is used to check if a queue is empty, i.e., if there are no elements in it.",
  },
  {
    question:
      "If you try to dequeue an element from an empty queue, what will happen?",
    options: [
      "It will throw an underflow exception",
      "It will return null",
      "It will return an error message",
      "It will add a new element to the queue",
    ],
    correctAnswer: "It will throw an underflow exception",
    explanation:
      "When you try to dequeue from an empty queue, it will throw an underflow exception since there are no elements to remove.",
  },
  {
    question:
      "In a circular queue, what happens when the 'rear' pointer reaches the end of the array?",
    options: [
      "It stops adding elements",
      "It wraps around to the beginning of the array",
      "It increases the size of the array",
      "It resets the 'front' pointer",
    ],
    correctAnswer: "It wraps around to the beginning of the array",
    explanation:
      "In a circular queue, when the 'rear' pointer reaches the end of the array, it wraps around and starts using the free space at the beginning of the array.",
  },
  {
    question:
      "Which of the following is a type of queue where elements are removed based on priority?",
    options: ["Simple Queue", "Priority Queue", "Circular Queue", "Deque"],
    correctAnswer: "Priority Queue",
    explanation:
      "A priority queue removes elements based on their priority, with higher-priority elements dequeued before lower-priority ones.",
  },
  {
    question:
      "Which operation allows you to view the element at the front of a queue without removing it?",
    options: ["Peek", "Enqueue", "Dequeue", "Add"],
    correctAnswer: "Peek",
    explanation:
      "The peek operation allows you to view the front element of the queue without removing it.",
  },
  {
    question:
      "In a double-ended queue (Deque), which operations are allowed at both ends?",
    options: [
      "Enqueue and Dequeue",
      "Enqueue and Add",
      "Enqueue and Pop",
      "Add and Remove",
    ],
    correctAnswer: "Enqueue and Dequeue",
    explanation:
      "In a Deque, you can insert and remove elements from both the front and rear ends, allowing flexibility in how elements are added or removed.",
  },
  {
    question:
      "When using a queue to simulate a printer spooler, what would the printer do with the print jobs?",
    options: [
      "Process jobs in reverse order",
      "Process jobs based on priority",
      "Process jobs in the order they arrive",
      "Process jobs randomly",
    ],
    correctAnswer: "Process jobs in the order they arrive",
    explanation:
      "A printer spooler processes print jobs in the order they arrive, following the FIFO principle typical of queues.",
  },
  {
    question: "Which of the following is a valid operation in a queue?",
    options: ["Push", "Pop", "Enqueue", "Insert"],
    correctAnswer: "Enqueue",
    explanation:
      "Enqueue is the operation that adds an element to the rear of the queue, while 'Push' and 'Pop' are operations used with stacks.",
  },
  {
    question: "In a queue, what does the 'front' pointer represent?",
    options: [
      "The position of the first element",
      "The position of the last element",
      "The position of the middle element",
      "The next position for insertion",
    ],
    correctAnswer: "The position of the first element",
    explanation:
      "The 'front' pointer refers to the position of the first element in the queue, which is removed when dequeuing.",
  },
  {
    question:
      "What is the main advantage of using a circular queue over a linear queue?",
    options: [
      "It allows random access to elements",
      "It uses memory more efficiently by reusing space",
      "It allows faster dequeue operations",
      "It supports priority-based processing",
    ],
    correctAnswer: "It uses memory more efficiently by reusing space",
    explanation:
      "In a circular queue, when the 'rear' pointer reaches the end, it wraps around and reuses the free space at the start, avoiding wasted memory.",
  },
  {
    question:
      "Which data structure would you use to implement a queue in a situation where elements need to be processed in FIFO order?",
    options: ["Stack", "Linked list", "Array", "Both linked list and array"],
    correctAnswer: "Both linked list and array",
    explanation:
      "Both arrays and linked lists can be used to implement queues, with each offering different benefits depending on the context.",
  },
  {
    question:
      "What will happen if an element is enqueued to a queue that has reached its maximum size?",
    options: [
      "It will throw an overflow exception",
      "It will remove the last element to accommodate the new one",
      "It will automatically expand its size",
      "It will ignore the new element",
    ],
    correctAnswer: "It will throw an overflow exception",
    explanation:
      "If a queue reaches its maximum size and a new element is enqueued, it will throw an overflow exception as no more elements can be added.",
  },
  {
    question:
      "In a queue implemented using an array, how can we check whether the queue is empty?",
    options: [
      "Check if the front pointer is equal to the rear pointer",
      "Check if the rear pointer is -1",
      "Check if the front pointer is -1",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "In a queue implemented using an array, you can check if the queue is empty by verifying if the front and rear pointers are equal or if they are both -1.",
  },
  {
    question:
      "Which of the following is the time complexity for the 'Enqueue' operation in a queue implemented using an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a queue implemented using an array, the 'Enqueue' operation occurs in constant time O(1).",
  },
  {
    question:
      "What is the time complexity for dequeuing an element from a queue implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Dequeuing from a queue implemented using a linked list occurs in constant time O(1), as it only requires updating the front pointer.",
  },
  {
    question: "In a queue, what does the 'rear' pointer represent?",
    options: [
      "The position of the last element",
      "The position of the first element",
      "The middle of the queue",
      "The next position for deletion",
    ],
    correctAnswer: "The position of the last element",
    explanation:
      "The 'rear' pointer refers to the position of the last element in the queue, where new elements are added during the enqueue operation.",
  },
  {
    question:
      "Which of the following is a typical use case for a queue in computer science?",
    options: [
      "Reverse ordering",
      "Handling requests in web servers",
      "Recursive function calls",
      "Sorting elements",
    ],
    correctAnswer: "Handling requests in web servers",
    explanation:
      "Queues are typically used in scenarios like handling requests in web servers, where the order of processing matters and follows FIFO.",
  },
];
