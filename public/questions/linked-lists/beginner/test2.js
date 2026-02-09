export const test2 = [
  {
    question: "How do you add a node to the end of a singly linked list?",
    options: [
      "By setting the next pointer of the last node to the new node",
      "By creating a new head node",
      "By changing the value of the first node",
      "By deleting the last node and inserting a new node",
    ],
    correctAnswer:
      "By setting the next pointer of the last node to the new node",
    explanation:
      "To add a node to the end of a singly linked list, you must traverse the list to the last node and set its next pointer to the new node.",
  },
  {
    question: "What does a null value in the next pointer of a node indicate?",
    options: [
      "The node has no value",
      "The node is a root node",
      "The node is the last node in the list",
      "The node is a middle node",
    ],
    correctAnswer: "The node is the last node in the list",
    explanation:
      "A null value in the `next` pointer of a node indicates that it is the last node in the list.",
  },
  {
    question: "Which of the following is true for doubly linked lists?",
    options: [
      "Each node has a pointer to the next node only",
      "Each node has two pointers, one to the next and one to the previous node",
      "Each node has no pointers",
      "It does not support backward traversal",
    ],
    correctAnswer:
      "Each node has two pointers, one to the next and one to the previous node",
    explanation:
      "In a doubly linked list, each node contains two pointers: one pointing to the next node and one pointing to the previous node.",
  },
  {
    question:
      "Which pointer does the last node in a singly linked list point to?",
    options: ["Head", "Tail", "Null", "Next"],
    correctAnswer: "Null",
    explanation:
      "In a singly linked list, the `next` pointer of the last node points to null, indicating the end of the list.",
  },
  {
    question:
      "What is the main advantage of using a linked list over an array?",
    options: [
      "Random access is faster",
      "Memory is allocated dynamically",
      "It can be traversed in O(1) time",
      "It uses contiguous memory",
    ],
    correctAnswer: "Memory is allocated dynamically",
    explanation:
      "Unlike arrays, linked lists allocate memory dynamically, meaning the size of the list can grow and shrink as needed without allocating contiguous memory.",
  },
  {
    question: "How do you delete a node from the middle of a linked list?",
    options: [
      "By changing the next pointer of the previous node",
      "By setting the next pointer to null",
      "By deleting the node and shifting others",
      "By creating a new head node",
    ],
    correctAnswer: "By changing the next pointer of the previous node",
    explanation:
      "To delete a node from the middle of a linked list, you update the `next` pointer of the node before it to point to the node after it.",
  },
  {
    question: "Which type of linked list allows traversal in both directions?",
    options: [
      "Singly Linked List",
      "Circular Linked List",
      "Doubly Linked List",
      "Stack Linked List",
    ],
    correctAnswer: "Doubly Linked List",
    explanation:
      "A doubly linked list allows traversal in both directions because each node contains two pointers: one pointing to the next node and another pointing to the previous node.",
  },
  {
    question: "How do you find the length of a singly linked list?",
    options: [
      "By accessing the head and traversing the list until the next pointer is null",
      "By using a recursive function",
      "By accessing the last node directly",
      "By using a while loop and counting nodes",
    ],
    correctAnswer:
      "By accessing the head and traversing the list until the next pointer is null",
    explanation:
      "The length of a singly linked list can be found by starting at the head and traversing through the list, counting each node until the `next` pointer is null.",
  },
  {
    question:
      "What is the primary difference between a singly linked list and a doubly linked list?",
    options: [
      "A singly linked list can only traverse backward",
      "A doubly linked list contains a pointer to the previous node",
      "A singly linked list has two pointers per node",
      "A doubly linked list is faster for insertion",
    ],
    correctAnswer:
      "A doubly linked list contains a pointer to the previous node",
    explanation:
      "In a doubly linked list, each node contains two pointers: one to the next node and one to the previous node, unlike a singly linked list where each node only points to the next node.",
  },
  {
    question:
      "What happens if you try to access an index in a linked list that does not exist?",
    options: [
      "An exception is thrown",
      "The program will crash",
      "The node will return null",
      "A new node will be created",
    ],
    correctAnswer: "An exception is thrown",
    explanation:
      "If you try to access an index that doesn't exist in the linked list, an exception will be thrown as you have exceeded the bounds of the list.",
  },
  {
    question:
      "What is the time complexity of inserting a node at the beginning of a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Inserting a node at the beginning of a linked list involves updating the head pointer, which takes constant time O(1).",
  },
  {
    question: "What is the purpose of the 'next' pointer in a linked list?",
    options: [
      "To point to the previous node",
      "To store the value of the node",
      "To point to the next node in the sequence",
      "To point to the middle node",
    ],
    correctAnswer: "To point to the next node in the sequence",
    explanation:
      "The `next` pointer in a linked list node points to the next node in the sequence, helping in traversal.",
  },
  {
    question: "What does the 'head' node in a linked list represent?",
    options: [
      "The middle node",
      "The first node in the list",
      "The last node in the list",
      "A null pointer",
    ],
    correctAnswer: "The first node in the list",
    explanation:
      "The `head` node represents the first node in the list, which is the starting point for traversing the linked list.",
  },
  {
    question:
      "What is the primary drawback of a linked list compared to an array?",
    options: [
      "It uses more memory",
      "It allows random access",
      "It is faster in traversal",
      "It is more efficient for search",
    ],
    correctAnswer: "It uses more memory",
    explanation:
      "Linked lists use extra memory for the pointers in each node, while arrays store elements in contiguous memory locations.",
  },
  {
    question:
      "What would be the result if a linked list's 'next' pointer is not set correctly?",
    options: [
      "The list will be reversed",
      "The list will be circular",
      "The list will break and become disconnected",
      "The list will be empty",
    ],
    correctAnswer: "The list will break and become disconnected",
    explanation:
      "If the `next` pointer of any node is not set correctly, it can break the list and cause disconnection between nodes.",
  },
  {
    question:
      "How is a circular linked list different from a singly linked list?",
    options: [
      "A circular linked list has no pointers",
      "In a circular linked list, the last node points to the first node",
      "A circular linked list is faster",
      "A circular linked list uses dynamic memory",
    ],
    correctAnswer:
      "In a circular linked list, the last node points to the first node",
    explanation:
      "A circular linked list is a type of linked list where the last node points to the first node, forming a loop.",
  },
  {
    question:
      "What is the time complexity for searching a node in a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "To search for a node in a singly linked list, you need to traverse the list from the head until you find the node, which takes linear time O(n).",
  },
  {
    question:
      "Which operation is NOT efficiently supported by a singly linked list?",
    options: [
      "Inserting a node at the beginning",
      "Inserting a node at the end",
      "Deleting a node from the middle",
      "Random access to a specific element",
    ],
    correctAnswer: "Random access to a specific element",
    explanation:
      "Singly linked lists do not support random access as elements must be traversed sequentially from the head node.",
  },
  {
    question:
      "Which of the following is true for a circular doubly linked list?",
    options: [
      "The first node points to null",
      "The last node points to null",
      "Both head and tail are connected to form a circle",
      "Traversal can only be done in one direction",
    ],
    correctAnswer: "Both head and tail are connected to form a circle",
    explanation:
      "In a circular doubly linked list, both the head and tail nodes point to each other, forming a closed loop, allowing traversal in both directions.",
  },
  {
    question:
      "What happens if a circular linked list is traversed without a stop condition?",
    options: [
      "It will create an infinite loop",
      "It will crash the system",
      "It will end at the head node",
      "It will reverse the order of nodes",
    ],
    correctAnswer: "It will create an infinite loop",
    explanation:
      "If a circular linked list is traversed without a stop condition, it will keep looping through the same nodes infinitely.",
  },
];
