export const test3 = [
  {
    question:
      "Which type of linked list allows efficient insertion or deletion of elements at both ends?",
    options: [
      "Singly Linked List",
      "Doubly Linked List",
      "Circular Linked List",
      "None of the above",
    ],
    correctAnswer: "Doubly Linked List",
    explanation:
      "In a doubly linked list, insertion or deletion at both ends is efficient because you can access both the head and tail directly.",
  },
  {
    question:
      "What is the time complexity of deleting a node from the beginning of a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Deleting a node from the beginning of a singly linked list takes constant time O(1) since you just need to update the head pointer.",
  },
  {
    question:
      "In a singly linked list, what is the next pointer of the last node set to?",
    options: [
      "It points to the first node",
      "It points to null",
      "It points to the middle node",
      "It points to the previous node",
    ],
    correctAnswer: "It points to null",
    explanation:
      "In a singly linked list, the `next` pointer of the last node points to null, indicating the end of the list.",
  },
  {
    question: "How can you reverse a singly linked list?",
    options: [
      "By updating the next pointer of the head node",
      "By traversing the list and adjusting the pointers of each node",
      "By swapping the head and tail",
      "By deleting all nodes and inserting them back in reverse order",
    ],
    correctAnswer:
      "By traversing the list and adjusting the pointers of each node",
    explanation:
      "To reverse a singly linked list, you need to traverse the list and adjust the `next` pointers of each node to point to the previous node.",
  },
  {
    question: "What is a common use case for a doubly linked list?",
    options: [
      "For implementing stacks",
      "For implementing queues",
      "For implementing a navigation system with back and forward buttons",
      "For implementing hash tables",
    ],
    correctAnswer:
      "For implementing a navigation system with back and forward buttons",
    explanation:
      "A doubly linked list is often used in applications that require traversing both forward and backward, such as a navigation system with back and forward buttons.",
  },
  {
    question: "What is a circular linked list?",
    options: [
      "A list where nodes are connected in a circle",
      "A list where each node points to the first node",
      "A list where the last node points to the first node, forming a loop",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "A circular linked list is a type of linked list where the last node points to the first node, creating a loop, and nodes are connected in a circular manner.",
  },
  {
    question: "Which pointer is used to traverse a circular linked list?",
    options: [
      "The head pointer",
      "The tail pointer",
      "Any node in the list",
      "The next pointer",
    ],
    correctAnswer: "The head pointer",
    explanation:
      "In a circular linked list, the traversal starts from the head pointer, and the list keeps looping until the head is reached again.",
  },
  {
    question: "How do you detect a cycle in a linked list?",
    options: [
      "By checking if the head points to null",
      "By counting the number of nodes",
      "By using Floyd's cycle-finding algorithm (Tortoise and Hare)",
      "By reversing the list and checking for loops",
    ],
    correctAnswer:
      "By using Floyd's cycle-finding algorithm (Tortoise and Hare)",
    explanation:
      "Floyd's cycle-finding algorithm (Tortoise and Hare) uses two pointers moving at different speeds to detect cycles in a linked list.",
  },
  {
    question:
      "What is the time complexity for inserting a node at the end of a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Inserting a node at the end of a singly linked list requires traversing the entire list to find the last node, which takes linear time O(n).",
  },
  {
    question:
      "Which of the following is a disadvantage of a singly linked list?",
    options: [
      "It allows random access to elements",
      "It can only be traversed forward",
      "It uses less memory than arrays",
      "It supports reverse traversal",
    ],
    correctAnswer: "It can only be traversed forward",
    explanation:
      "A singly linked list can only be traversed in a forward direction, as each node contains only a reference to the next node, not to the previous one.",
  },
  {
    question: "What is the space complexity of a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of a singly linked list is O(n), as each node requires memory for the data and the next pointer, and there are n nodes in the list.",
  },
  {
    question:
      "In a circular doubly linked list, what pointers does each node have?",
    options: [
      "Only a previous pointer",
      "Only a next pointer",
      "Next and previous pointers",
      "Previous and middle pointers",
    ],
    correctAnswer: "Next and previous pointers",
    explanation:
      "Each node in a circular doubly linked list has two pointers: one to the next node and one to the previous node, allowing traversal in both directions.",
  },
  {
    question:
      "What happens if you try to delete a node that doesn't exist in a linked list?",
    options: [
      "The operation will succeed silently",
      "An error is thrown",
      "The node will be deleted automatically",
      "Nothing happens",
    ],
    correctAnswer: "An error is thrown",
    explanation:
      "If you try to delete a node that doesn't exist in the list, an error is thrown because the node cannot be found.",
  },
  {
    question: "How is memory allocated for nodes in a linked list?",
    options: [
      "Contiguously in memory",
      "Dynamically at runtime",
      "It is allocated in a heap",
      "All of the above",
    ],
    correctAnswer: "Dynamically at runtime",
    explanation:
      "Memory for nodes in a linked list is allocated dynamically at runtime, allowing the list to grow and shrink as needed.",
  },
  {
    question: "What does the term 'head' refer to in a linked list?",
    options: [
      "The middle node",
      "The first node",
      "The last node",
      "The null pointer",
    ],
    correctAnswer: "The first node",
    explanation:
      "The `head` refers to the first node of the linked list, from which traversal begins.",
  },
  {
    question:
      "Which of the following operations is constant time for a doubly linked list?",
    options: [
      "Inserting a node at the beginning",
      "Inserting a node in the middle",
      "Inserting a node at the end",
      "Searching for a node",
    ],
    correctAnswer: "Inserting a node at the beginning",
    explanation:
      "In a doubly linked list, inserting a node at the beginning takes constant time O(1), as you can directly modify the head pointer.",
  },
  {
    question: "Which of the following is not a type of linked list?",
    options: [
      "Singly Linked List",
      "Doubly Linked List",
      "Circular Linked List",
      "Quadruple Linked List",
    ],
    correctAnswer: "Quadruple Linked List",
    explanation:
      "There is no such thing as a Quadruple Linked List. The common types of linked lists are singly linked, doubly linked, and circular linked lists.",
  },
  {
    question: "How do you check if a linked list is empty?",
    options: [
      "By checking if the head pointer is null",
      "By checking if the tail pointer is null",
      "By checking the length of the list",
      "By checking if all the nodes point to null",
    ],
    correctAnswer: "By checking if the head pointer is null",
    explanation:
      "If the head pointer of a linked list is null, it means the list is empty.",
  },
  {
    question: "What is the major advantage of a linked list over arrays?",
    options: [
      "Random access",
      "Dynamic size",
      "Faster searches",
      "Contiguous memory allocation",
    ],
    correctAnswer: "Dynamic size",
    explanation:
      "A major advantage of linked lists over arrays is that they can grow and shrink dynamically without needing contiguous memory allocation.",
  },
  {
    question: "How can you traverse a doubly linked list in reverse order?",
    options: [
      "Starting from the head and following the previous pointers",
      "Starting from the tail and following the previous pointers",
      "Starting from the head and following the next pointers",
      "Starting from the tail and following the next pointers",
    ],
    correctAnswer: "Starting from the tail and following the previous pointers",
    explanation:
      "In a doubly linked list, you can traverse the list in reverse by starting from the tail and following the previous pointers.",
  },
];
