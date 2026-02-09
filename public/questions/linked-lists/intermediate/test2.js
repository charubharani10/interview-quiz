export const test2 = [
  {
    question:
      "What is the time complexity of inserting a node at the end of a singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "To insert a node at the end of a singly linked list, you need to traverse the entire list to find the last node, which takes linear time O(n).",
  },
  {
    question:
      "What is the advantage of using a circular doubly linked list over a circular singly linked list?",
    options: [
      "It uses less memory",
      "It allows easier traversal in both directions",
      "It is faster for insertion at the end",
      "It does not require extra pointers",
    ],
    correctAnswer: "It allows easier traversal in both directions",
    explanation:
      "A circular doubly linked list has pointers to both the next and previous nodes, allowing traversal in both directions, unlike a circular singly linked list.",
  },
  {
    question:
      "What is the primary challenge of reversing a singly linked list?",
    options: [
      "It takes O(n^2) time",
      "It requires additional space",
      "The pointers need to be reversed carefully to avoid breaking the list",
      "It cannot be done in place",
    ],
    correctAnswer:
      "The pointers need to be reversed carefully to avoid breaking the list",
    explanation:
      "Reversing a singly linked list requires careful pointer manipulation to ensure that each node's next pointer is correctly updated without losing reference to the remaining list.",
  },
  {
    question:
      "In which case is a singly linked list preferable over a doubly linked list?",
    options: [
      "When memory usage needs to be minimized",
      "When bidirectional traversal is needed",
      "When searching by index is frequent",
      "When frequent insertions and deletions are required",
    ],
    correctAnswer: "When memory usage needs to be minimized",
    explanation:
      "A singly linked list is preferable when memory usage needs to be minimized since it requires only one pointer per node compared to two in a doubly linked list.",
  },
  {
    question:
      "What is the time complexity of deleting the head node from a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Deleting the head node from a singly linked list is a constant-time operation O(1) as it only requires updating the `head` pointer.",
  },
  {
    question:
      "Which of the following is the main advantage of using a circular linked list in a round-robin scheduling algorithm?",
    options: [
      "Efficient random access",
      "Efficient last node insertion",
      "The ability to continuously cycle through processes without restarting",
      "The ability to detect cycles in the list",
    ],
    correctAnswer:
      "The ability to continuously cycle through processes without restarting",
    explanation:
      "In round-robin scheduling, a circular linked list allows continuous cycling through processes without needing to reset the position, making it ideal for this scenario.",
  },
  {
    question: "Which of the following is a limitation of a singly linked list?",
    options: [
      "It supports bidirectional traversal",
      "It requires more memory than a doubly linked list",
      "It can only traverse in one direction",
      "It doesn't support dynamic resizing",
    ],
    correctAnswer: "It can only traverse in one direction",
    explanation:
      "A singly linked list can only be traversed in one direction, from the head to the tail, limiting its flexibility compared to a doubly linked list.",
  },
  {
    question: "How would you find the middle element of a singly linked list?",
    options: [
      "Traverse the entire list and count the number of nodes",
      "Use two pointers, one moving one step and the other moving two steps",
      "Traverse the list until the last element",
      "Keep track of the maximum and minimum elements",
    ],
    correctAnswer:
      "Use two pointers, one moving one step and the other moving two steps",
    explanation:
      "To find the middle element of a singly linked list efficiently, use two pointers: one moving one step at a time, and the other moving two steps. When the fast pointer reaches the end, the slow pointer will be at the middle.",
  },
  {
    question:
      "What is the primary reason why a linked list might be preferred over an array in certain scenarios?",
    options: [
      "Linked lists allow faster search operations",
      "Linked lists have a fixed size",
      "Linked lists allow dynamic memory allocation and flexible size",
      "Linked lists require less memory than arrays",
    ],
    correctAnswer:
      "Linked lists allow dynamic memory allocation and flexible size",
    explanation:
      "A linked list allows dynamic memory allocation, meaning its size can grow or shrink as needed, while arrays have a fixed size.",
  },
  {
    question:
      "What is the time complexity of inserting an element at the end of a circular doubly linked list when the head pointer is available?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "If you have access to the head pointer in a circular doubly linked list, inserting an element at the end is a constant-time operation O(1), as you can easily update the `next` pointer of the last node.",
  },
  {
    question:
      "Which algorithm can be used to detect cycles in a singly linked list?",
    options: [
      "Breadth-First Search",
      "Floyd's Tortoise and Hare algorithm",
      "Dijkstra's algorithm",
      "Binary Search",
    ],
    correctAnswer: "Floyd's Tortoise and Hare algorithm",
    explanation:
      "Floyd's Tortoise and Hare algorithm uses two pointers to detect cycles in a singly linked list by moving one pointer two steps at a time and the other one step at a time.",
  },
  {
    question:
      "In a doubly linked list, which pointer would be null for the first node?",
    options: ["prev", "next", "both prev and next", "head"],
    correctAnswer: "prev",
    explanation:
      "For the first node in a doubly linked list, the `prev` pointer will be null, as there is no previous node.",
  },
  {
    question:
      "What would happen if you attempt to insert a node at a position greater than the length of a linked list?",
    options: [
      "The node will be inserted at the end of the list",
      "An error will occur",
      "The list will automatically expand",
      "The list will become circular",
    ],
    correctAnswer: "An error will occur",
    explanation:
      "Inserting a node at a position greater than the length of the linked list is an invalid operation and will result in an error.",
  },
  {
    question:
      "How would you remove all occurrences of a specific element in a singly linked list?",
    options: [
      "Traverse the list and remove nodes with matching data",
      "Use a reverse traversal",
      "Update the head pointer",
      "Use a stack",
    ],
    correctAnswer: "Traverse the list and remove nodes with matching data",
    explanation:
      "To remove all occurrences of an element in a singly linked list, traverse the list and remove any nodes whose data matches the target value.",
  },
  {
    question:
      "What is the time complexity of finding the length of a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Finding the length of a singly linked list requires traversing through all the nodes, which takes linear time O(n).",
  },
  {
    question:
      "In a circular doubly linked list, what happens when the last node's next pointer points to the head?",
    options: [
      "It forms a circular structure",
      "The list becomes doubly linked",
      "It allows backward traversal",
      "It introduces a cycle in the list",
    ],
    correctAnswer: "It forms a circular structure",
    explanation:
      "In a circular doubly linked list, the `next` pointer of the last node points to the head, forming a circular structure where the list loops back on itself.",
  },
  {
    question:
      "What is the time complexity of inserting a node at the middle of a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Inserting a node at the middle of a singly linked list requires traversing to the middle of the list, which takes linear time O(n).",
  },
  {
    question:
      "In a doubly linked list, what happens when you insert a node between two existing nodes?",
    options: [
      "Only the next pointer is updated",
      "Only the previous pointer is updated",
      "Both the next and previous pointers are updated",
      "Both the head and tail pointers must be updated",
    ],
    correctAnswer: "Both the next and previous pointers are updated",
    explanation:
      "In a doubly linked list, when inserting a node between two existing nodes, both the `next` pointer of the previous node and the `previous` pointer of the next node must be updated to properly link the new node.",
  },
  {
    question:
      "What is the key difference between a stack implemented using a linked list and a queue implemented using a linked list?",
    options: [
      "Stacks follow FIFO, queues follow LIFO",
      "Stacks follow LIFO, queues follow FIFO",
      "Stacks require extra space, queues do not",
      "Queues are slower than stacks",
    ],
    correctAnswer: "Stacks follow LIFO, queues follow FIFO",
    explanation:
      "A stack follows LIFO (Last In First Out) ordering, where elements are inserted and removed from the same end, while a queue follows FIFO (First In First Out), where elements are inserted at the back and removed from the front.",
  },
  {
    question:
      "What happens if you try to delete the tail node of a singly linked list?",
    options: [
      "It breaks the list",
      "You must update the next pointer of the second-to-last node",
      "It causes a memory leak",
      "The head node will be deleted",
    ],
    correctAnswer:
      "You must update the next pointer of the second-to-last node",
    explanation:
      "When deleting the tail node of a singly linked list, you must update the `next` pointer of the second-to-last node to `null` to properly break the list.",
  },
];
