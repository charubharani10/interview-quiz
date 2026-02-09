export const test1 = [
  {
    question: "What is a linked list?",
    options: [
      "A collection of elements with a linear order",
      "A collection of nodes where each node contains a value and a pointer to the next node",
      "An array with pointers",
      "A tree-like data structure",
    ],
    correctAnswer:
      "A collection of nodes where each node contains a value and a pointer to the next node",
    explanation:
      "A linked list is a data structure where each element (node) contains a value and a reference (pointer) to the next element in the sequence.",
  },
  {
    question: "Which of the following is true about a singly linked list?",
    options: [
      "Each node points to the previous node",
      "Each node points to the next node",
      "Nodes are stored in contiguous memory locations",
      "It has two pointers for each node",
    ],
    correctAnswer: "Each node points to the next node",
    explanation:
      "In a singly linked list, each node contains a pointer that points to the next node in the sequence.",
  },
  {
    question: "What is the first node in a linked list called?",
    options: ["Tail", "Head", "Root", "Middle"],
    correctAnswer: "Head",
    explanation:
      "The first node in a linked list is called the 'Head'. It is the entry point into the linked list.",
  },
  {
    question:
      "Which operation is performed in O(1) time in a singly linked list?",
    options: [
      "Adding a node to the end",
      "Removing the first node",
      "Searching for a node",
      "Traversing the list",
    ],
    correctAnswer: "Removing the first node",
    explanation:
      "Removing the first node in a singly linked list can be done in constant time O(1) as it simply involves moving the head pointer.",
  },
  {
    question: "In which case is a linked list preferred over an array?",
    options: [
      "When random access is needed",
      "When elements need to be inserted or removed frequently",
      "When memory usage is low",
      "When data is stored contiguously in memory",
    ],
    correctAnswer: "When elements need to be inserted or removed frequently",
    explanation:
      "Linked lists are preferred when elements need to be frequently inserted or removed as insertion and deletion can be done in O(1) time.",
  },
  {
    question: "What is the main disadvantage of a linked list over an array?",
    options: [
      "Random access is slower",
      "It consumes more memory",
      "It requires fewer resources",
      "It is faster for searching",
    ],
    correctAnswer: "Random access is slower",
    explanation:
      "In linked lists, accessing an element requires traversing the list from the head to the desired node, making random access slower compared to arrays.",
  },
  {
    question: "What does a node in a linked list contain?",
    options: [
      "Only a value",
      "A value and a pointer to the next node",
      "A value and a pointer to the previous node",
      "A pointer to the middle node",
    ],
    correctAnswer: "A value and a pointer to the next node",
    explanation:
      "Each node in a linked list contains data (value) and a pointer to the next node in the list.",
  },
  {
    question:
      "Which type of linked list has a pointer to both the next and the previous node?",
    options: [
      "Singly Linked List",
      "Circular Linked List",
      "Doubly Linked List",
      "Stack Linked List",
    ],
    correctAnswer: "Doubly Linked List",
    explanation:
      "In a doubly linked list, each node has two pointers: one pointing to the next node and the other pointing to the previous node.",
  },
  {
    question: "What is the last node in a singly linked list called?",
    options: ["Head", "Tail", "Middle", "Next"],
    correctAnswer: "Tail",
    explanation:
      "The last node in a singly linked list is called the 'Tail'. It points to null, indicating the end of the list.",
  },
  {
    question: "What is a circular linked list?",
    options: [
      "A list with only one node",
      "A list where the last node points to the first node",
      "A list that can store elements in circular order",
      "A list where all nodes point to the middle node",
    ],
    correctAnswer: "A list where the last node points to the first node",
    explanation:
      "A circular linked list is a linked list where the last node's next pointer points to the first node, forming a loop.",
  },
  {
    question:
      "What is the time complexity of inserting a node at the beginning of a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Inserting a node at the beginning of a linked list involves changing the head pointer, which takes constant time O(1).",
  },
  {
    question:
      "Which of the following is NOT a valid operation for linked lists?",
    options: [
      "Insert at the beginning",
      "Delete from the end",
      "Random access",
      "Traverse the list",
    ],
    correctAnswer: "Random access",
    explanation:
      "Linked lists do not support random access as in arrays. Accessing a specific element requires traversal.",
  },
  {
    question: "What is the main advantage of a circular linked list?",
    options: [
      "Faster insertions",
      "No need to handle the tail pointer",
      "Constant time for accessing elements",
      "Efficient for circular traversal",
    ],
    correctAnswer: "Efficient for circular traversal",
    explanation:
      "Circular linked lists are efficient for scenarios requiring circular traversal as the last node points back to the first node.",
  },
  {
    question:
      "Which pointer is set to null in the last node of a singly linked list?",
    options: [
      "Previous pointer",
      "Next pointer",
      "Head pointer",
      "Tail pointer",
    ],
    correctAnswer: "Next pointer",
    explanation:
      "The `next` pointer of the last node in a singly linked list points to null, indicating the end of the list.",
  },
  {
    question: "Which operation is performed in O(n) time in a linked list?",
    options: [
      "Inserting a node at the beginning",
      "Deleting a node from the middle",
      "Inserting a node at the end",
      "Deleting a node from the beginning",
    ],
    correctAnswer: "Deleting a node from the middle",
    explanation:
      "To delete a node from the middle of a linked list, traversal is needed, which takes O(n) time.",
  },
  {
    question:
      "What happens when the 'next' pointer of a node in a linked list is set to null?",
    options: [
      "The node becomes the last node",
      "The node is deleted",
      "The node becomes the head",
      "The list becomes circular",
    ],
    correctAnswer: "The node becomes the last node",
    explanation:
      "Setting the `next` pointer of a node to null makes it the last node in a singly linked list, as it indicates the end.",
  },
  {
    question: "What does the term 'head' refer to in a linked list?",
    options: [
      "The first node in the list",
      "The last node in the list",
      "A node pointing to itself",
      "A node with no value",
    ],
    correctAnswer: "The first node in the list",
    explanation:
      "The `head` refers to the first node of a linked list, which is the starting point for traversing the list.",
  },
  {
    question: "In a doubly linked list, each node has how many pointers?",
    options: ["One pointer", "Two pointers", "Three pointers", "Four pointers"],
    correctAnswer: "Two pointers",
    explanation:
      "In a doubly linked list, each node has two pointers: one pointing to the next node and one pointing to the previous node.",
  },
  {
    question:
      "In a circular doubly linked list, which node points to the 'head'?",
    options: [
      "The last node",
      "The first node",
      "The middle node",
      "The previous node",
    ],
    correctAnswer: "The last node",
    explanation:
      "In a circular doubly linked list, the `next` pointer of the last node points to the `head` node, forming a loop.",
  },
  {
    question:
      "What is the time complexity of accessing an element in a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Accessing an element in a linked list requires traversing the list from the head, making the time complexity O(n).",
  },
];
