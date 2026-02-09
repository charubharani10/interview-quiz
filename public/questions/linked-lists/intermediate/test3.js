export const test3 = [
  {
    question:
      "What is the primary advantage of using a linked list over an array?",
    options: [
      "Constant time access to elements",
      "Fixed size allocation",
      "Dynamic size allocation and easy insertions/deletions",
      "Better cache locality",
    ],
    correctAnswer: "Dynamic size allocation and easy insertions/deletions",
    explanation:
      "Linked lists allow dynamic memory allocation and enable easy insertions and deletions without resizing, unlike arrays which have fixed sizes.",
  },
  {
    question: "How do you detect a cycle in a doubly linked list?",
    options: [
      "Using a single pointer to traverse",
      "Checking if the `next` pointer is null",
      "Using two pointers, one moving fast and the other slow",
      "It is not possible to detect cycles in a doubly linked list",
    ],
    correctAnswer: "Using two pointers, one moving fast and the other slow",
    explanation:
      "The cycle detection algorithm in a doubly linked list is similar to that in a singly linked list: use two pointers, with one moving fast and the other slow. If they meet, a cycle is present.",
  },
  {
    question:
      "Which of the following is an example of a real-world use case for a circular linked list?",
    options: [
      "A queue of tasks in a round-robin scheduling system",
      "A stack of browser history",
      "A linear list of files in a directory",
      "A hierarchical list of folders",
    ],
    correctAnswer: "A queue of tasks in a round-robin scheduling system",
    explanation:
      "A circular linked list is ideal for scenarios like round-robin scheduling, where the list loops over itself repeatedly, as in scheduling tasks.",
  },
  {
    question: "What does it mean if a linked list is said to be 'sparse'?",
    options: [
      "The list has fewer nodes than the maximum possible size",
      "The list contains more data than a regular list",
      "The nodes are dynamically allocated",
      "The list is circular",
    ],
    correctAnswer: "The list has fewer nodes than the maximum possible size",
    explanation:
      "A sparse linked list refers to a list where there are fewer nodes compared to its maximum potential capacity.",
  },
  {
    question:
      "What is the time complexity of deleting a node from the middle of a doubly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Deleting a node from the middle of a doubly linked list is an O(1) operation because both the previous and next pointers can be updated directly.",
  },
  {
    question:
      "What data structure is used to implement a linked list in a functional programming language?",
    options: ["Array", "Tuple", "Immutable list", "Stack"],
    correctAnswer: "Immutable list",
    explanation:
      "In functional programming languages, linked lists are often implemented as immutable lists, where the list structure is modified by creating new versions rather than modifying the original.",
  },
  {
    question:
      "What is the time complexity of accessing an element at a random position in a singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "To access an element at a random position in a singly linked list, you need to traverse from the head to the desired position, which takes linear time O(n).",
  },
  {
    question: "How can you merge two sorted linked lists?",
    options: [
      "Using a recursive approach to compare elements",
      "Using a brute force method to combine and sort the elements",
      "Using a stack to store elements temporarily",
      "Using a doubly linked list for efficiency",
    ],
    correctAnswer: "Using a recursive approach to compare elements",
    explanation:
      "Merging two sorted linked lists can be done efficiently by using a recursive approach to compare elements and construct a new sorted list.",
  },
  {
    question: "What does the `head` pointer of a linked list represent?",
    options: [
      "The last element of the list",
      "The first element of the list",
      "The middle element of the list",
      "A reference to the tail node",
    ],
    correctAnswer: "The first element of the list",
    explanation:
      "The `head` pointer in a linked list refers to the first node of the list, from which traversal begins.",
  },
  {
    question:
      "What type of linked list allows you to move both forwards and backwards?",
    options: [
      "Singly linked list",
      "Circular linked list",
      "Doubly linked list",
      "Stack",
    ],
    correctAnswer: "Doubly linked list",
    explanation:
      "A doubly linked list allows movement in both directions (forwards and backwards) by having pointers to both the next and previous nodes.",
  },
  {
    question:
      "In a doubly linked list, which pointer is required to remove a node from the middle of the list?",
    options: [
      "Only the next pointer",
      "Only the previous pointer",
      "Both the next and previous pointers",
      "No pointer is required",
    ],
    correctAnswer: "Both the next and previous pointers",
    explanation:
      "To remove a node from the middle of a doubly linked list, both the `next` pointer of the previous node and the `previous` pointer of the next node must be updated.",
  },
  {
    question:
      "What happens to the pointers when inserting a node at the beginning of a singly linked list?",
    options: [
      "The new node's next pointer points to the previous head",
      "The new node's next pointer points to null",
      "The previous head pointer points to the new node",
      "The new node's next pointer points to the tail",
    ],
    correctAnswer: "The new node's next pointer points to the previous head",
    explanation:
      "When inserting a node at the beginning of a singly linked list, the new node's `next` pointer must point to the previous head, and the head pointer must be updated to the new node.",
  },
  {
    question:
      "Which operation on a doubly linked list requires O(n) time complexity?",
    options: [
      "Inserting a node at the beginning",
      "Deleting a node from the tail",
      "Inserting a node at the end",
      "Searching for an element",
    ],
    correctAnswer: "Searching for an element",
    explanation:
      "In a doubly linked list, searching for an element takes O(n) time because you may have to traverse through all nodes to find the desired element.",
  },
  {
    question:
      "Which type of linked list is used to model navigation in a browser's history?",
    options: [
      "Circular linked list",
      "Singly linked list",
      "Doubly linked list",
      "Stack",
    ],
    correctAnswer: "Doubly linked list",
    explanation:
      "A doubly linked list can be used to model browser history, allowing movement between previous and next pages (both forwards and backwards).",
  },
  {
    question:
      "What is the space complexity of a singly linked list with n nodes?",
    options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of a singly linked list with n nodes is O(n), as each node requires storage for a pointer/reference to the next node.",
  },
  {
    question:
      "What is the key difference between a singly linked list and a doubly linked list?",
    options: [
      "Singly linked lists only point to the next node, while doubly linked lists point to both next and previous nodes",
      "Singly linked lists are slower",
      "Doubly linked lists use less memory",
      "Singly linked lists are better for searching",
    ],
    correctAnswer:
      "Singly linked lists only point to the next node, while doubly linked lists point to both next and previous nodes",
    explanation:
      "In a singly linked list, each node only points to the next node, while in a doubly linked list, each node points to both the next and the previous node.",
  },
  {
    question: "What is a potential disadvantage of a doubly linked list?",
    options: [
      "Requires more memory for an additional pointer",
      "Slower insertion compared to singly linked lists",
      "Cannot be used for circular lists",
      "More complex to implement",
    ],
    correctAnswer: "Requires more memory for an additional pointer",
    explanation:
      "A doubly linked list requires more memory because each node has an additional pointer (previous and next), compared to a singly linked list where each node only has a next pointer.",
  },
  {
    question:
      "What is the purpose of the 'tail' pointer in a doubly linked list?",
    options: [
      "Points to the last element of the list",
      "Points to the head of the list",
      "Points to a circular node",
      "Used for merging two lists",
    ],
    correctAnswer: "Points to the last element of the list",
    explanation:
      "In a doubly linked list, the 'tail' pointer points to the last element in the list. It allows easy access to the end of the list.",
  },
  {
    question: "What is a circular linked list?",
    options: [
      "A list where the last node points to the first node",
      "A list where all nodes are connected by a single pointer",
      "A list that allows traversal both forwards and backwards",
      "A list that uses more memory than a regular linked list",
    ],
    correctAnswer: "A list where the last node points to the first node",
    explanation:
      "A circular linked list is a variation where the last node in the list points back to the first node, creating a cycle.",
  },
  {
    question:
      "What is the best case time complexity for inserting a node at the beginning of a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Inserting a node at the beginning of a singly linked list is an O(1) operation because it only requires updating the head pointer and setting the new node's next pointer.",
  },
];
