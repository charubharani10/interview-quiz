export const test1 = [
  {
    question:
      "What is the time complexity of searching for an element in a singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In a singly linked list, searching for an element requires traversing the list node by node, which takes linear time O(n).",
  },
  {
    question: "Which type of linked list allows traversal in both directions?",
    options: [
      "Singly linked list",
      "Doubly linked list",
      "Circular linked list",
      "Circular doubly linked list",
    ],
    correctAnswer: "Doubly linked list",
    explanation:
      "A doubly linked list contains two pointers for each node: one pointing to the next node and another pointing to the previous node, allowing traversal in both directions.",
  },
  {
    question:
      "What is a key advantage of using a doubly linked list over a singly linked list?",
    options: [
      "Uses less memory",
      "Easier to implement",
      "Allows for efficient backward traversal",
      "Is faster to search",
    ],
    correctAnswer: "Allows for efficient backward traversal",
    explanation:
      "The key advantage of a doubly linked list is that it allows traversal in both directions, which can be more efficient in certain applications, such as reversing traversal.",
  },
  {
    question:
      "What is the primary difference between a singly linked list and a circular linked list?",
    options: [
      "Circular linked lists allow backward traversal",
      "A circular linked list's last node points to the head node",
      "Circular linked lists are more memory efficient",
      "Singly linked lists have no pointers",
    ],
    correctAnswer: "A circular linked list's last node points to the head node",
    explanation:
      "In a circular linked list, the `next` pointer of the last node points back to the head node, forming a circular structure.",
  },
  {
    question:
      "Which of the following is true for inserting a node in a sorted singly linked list?",
    options: [
      "Insert the node at the end of the list",
      "Insert the node at the beginning of the list",
      "Traverse the list and insert the node in the correct sorted position",
      "Insert the node at a random position",
    ],
    correctAnswer:
      "Traverse the list and insert the node in the correct sorted position",
    explanation:
      "In a sorted singly linked list, you need to traverse the list to find the correct position to insert the new node while maintaining the sorted order.",
  },
  {
    question:
      "What is the space complexity of reversing a singly linked list using an iterative approach?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Reversing a singly linked list iteratively requires only a few pointer manipulations and uses constant space O(1), aside from the input list.",
  },
  {
    question: "How can you detect a loop in a singly linked list?",
    options: [
      "By checking if a node's next pointer points to null",
      "By using a hash set to track visited nodes",
      "By reversing the linked list",
      "By counting the number of nodes",
    ],
    correctAnswer: "By using a hash set to track visited nodes",
    explanation:
      "To detect a loop in a singly linked list, you can use a hash set to track visited nodes. If you visit a node that has already been visited, a loop exists.",
  },
  {
    question: "In a doubly linked list, which of the following is true?",
    options: [
      "Each node has one pointer to the previous node",
      "Each node has two pointers: one to the previous and one to the next node",
      "Each node has a pointer to the head node",
      "Each node has a pointer to the tail node",
    ],
    correctAnswer:
      "Each node has two pointers: one to the previous and one to the next node",
    explanation:
      "In a doubly linked list, each node has two pointers: `prev` pointing to the previous node and `next` pointing to the next node.",
  },
  {
    question:
      "How do you merge two sorted linked lists into one sorted linked list?",
    options: [
      "Iterate through both lists, comparing elements and adding the smaller element to the result list",
      "Concatenate the lists and then sort them",
      "Iterate through both lists and remove duplicate elements",
      "Iterate through the lists and reverse them",
    ],
    correctAnswer:
      "Iterate through both lists, comparing elements and adding the smaller element to the result list",
    explanation:
      "To merge two sorted linked lists, you iterate through both lists, comparing elements and appending the smaller element to the result list while maintaining the sorted order.",
  },
  {
    question:
      "What is the time complexity of inserting a node at the beginning of a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Inserting a node at the beginning of a singly linked list is a constant-time operation O(1) as it involves updating the `head` pointer to point to the new node.",
  },
  {
    question:
      "What is the time complexity of deleting a node from a singly linked list when given a reference to the node?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "If you are given a reference to the node in a singly linked list, you can delete it in constant time O(1) by copying the data from the next node and deleting the next node.",
  },
  {
    question:
      "What is the time complexity of accessing an element by index in a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "To access an element by index in a singly linked list, you must traverse the list node by node until you reach the desired index, which takes linear time O(n).",
  },
  {
    question: "What is the result of reversing a circular linked list?",
    options: [
      "It creates a doubly linked list",
      "It creates a singly linked list",
      "It still remains a circular linked list",
      "It loses its circular structure",
    ],
    correctAnswer: "It still remains a circular linked list",
    explanation:
      "Reversing a circular linked list will still result in a circular linked list; the only change is the direction of the `next` pointers.",
  },
  {
    question: "How would you check if a linked list has a cycle?",
    options: [
      "By counting the number of nodes",
      "By checking if the last node points to null",
      "By using two pointers, one moving slow and one moving fast",
      "By reversing the list and checking if it matches the original list",
    ],
    correctAnswer: "By using two pointers, one moving slow and one moving fast",
    explanation:
      "You can detect a cycle in a linked list using Floyd's Tortoise and Hare algorithm, where one pointer moves one step at a time, and the other moves two steps at a time. If there is a cycle, the two pointers will eventually meet.",
  },
  {
    question: "How would you delete the last node in a doubly linked list?",
    options: [
      "Set the previous node's next pointer to null",
      "Set the next node's previous pointer to null",
      "Set the head pointer to null",
      "Remove the first node in the list",
    ],
    correctAnswer: "Set the previous node's next pointer to null",
    explanation:
      "To delete the last node in a doubly linked list, update the `next` pointer of the second-to-last node to point to null, effectively removing the last node from the list.",
  },
  {
    question:
      "What is the time complexity of searching for an element in a doubly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Searching for an element in a doubly linked list still requires linear traversal of the list O(n), as there is no direct access to elements by index.",
  },
  {
    question: "What happens when you delete a node in a circular linked list?",
    options: [
      "It breaks the list into two parts",
      "The node is removed, but the list remains circular",
      "It creates a new circular linked list",
      "It causes the list to become doubly linked",
    ],
    correctAnswer: "The node is removed, but the list remains circular",
    explanation:
      "In a circular linked list, when a node is deleted, the list remains circular; the `next` pointer of the node before the deleted node must point to the node after it.",
  },
  {
    question:
      "Which of the following operations in a linked list is performed in O(1) time complexity?",
    options: [
      "Finding the length of the list",
      "Inserting a node at the beginning of the list",
      "Inserting a node at a random position",
      "Searching for an element",
    ],
    correctAnswer: "Inserting a node at the beginning of the list",
    explanation:
      "Inserting a node at the beginning of a linked list is an O(1) operation as it only involves updating the `head` pointer to the new node.",
  },
  {
    question:
      "In a doubly linked list, which of the following pointers must be updated when inserting a new node?",
    options: [
      "Only the next pointer",
      "Only the previous pointer",
      "Both the next and previous pointers",
      "Only the head pointer",
    ],
    correctAnswer: "Both the next and previous pointers",
    explanation:
      "When inserting a node in a doubly linked list, both the `next` pointer of the previous node and the `previous` pointer of the next node must be updated to properly link the new node.",
  },
  {
    question:
      "Which data structure is used for implementing a circular linked list?",
    options: ["Stack", "Queue", "Deque", "Linked List"],
    correctAnswer: "Linked List",
    explanation:
      "A circular linked list is a type of linked list where the last node's `next` pointer points back to the first node, forming a circular structure.",
  },
  {
    question:
      "In which scenario would a circular linked list be more beneficial than a singly linked list?",
    options: [
      "When elements need to be accessed randomly",
      "When a cyclic structure is needed, such as for round-robin scheduling",
      "When memory usage is a primary concern",
      "When the list needs to support backtracking",
    ],
    correctAnswer:
      "When a cyclic structure is needed, such as for round-robin scheduling",
    explanation:
      "Circular linked lists are useful when you need a cyclic structure, such as for round-robin scheduling, where you want to repeatedly cycle through elements in the list.",
  },
];
