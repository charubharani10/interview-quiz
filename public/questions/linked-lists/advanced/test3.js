export const test3 = [
  {
    question:
      "How does a Fibonacci heap improve the efficiency of linked list operations compared to a standard doubly linked list?",
    options: [
      "By using multiple pointers per node to reduce lookup times.",
      "By allowing merging of lists in O(1) time complexity.",
      "By eliminating the need for pointer manipulation in insertion and deletion.",
      "By keeping an index of all elements in the heap.",
    ],
    correctAnswer: "By allowing merging of lists in O(1) time complexity.",
    explanation:
      "A Fibonacci heap allows lists to be merged in constant time, which reduces the time complexity for certain linked list operations, such as heap operations.",
  },
  {
    question:
      "What is the time complexity of inserting a new node into a sorted doubly linked list in the middle of the list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Inserting a new node into a sorted doubly linked list requires traversal to find the correct position, resulting in a time complexity of O(n).",
  },
  {
    question:
      "How does a skip list reduce the average time complexity of searching for an element?",
    options: [
      "By reducing the size of each node.",
      "By maintaining multiple pointers across different levels of the list.",
      "By storing extra data in each node.",
      "By merging nodes during insertion.",
    ],
    correctAnswer:
      "By maintaining multiple pointers across different levels of the list.",
    explanation:
      "Skip lists use multiple levels of linked lists to create shortcuts, reducing the number of comparisons needed during a search operation, which helps improve search time complexity.",
  },
  {
    question:
      "What is the disadvantage of using a doubly linked list over a singly linked list when considering memory usage?",
    options: [
      "Doubly linked lists require more memory due to the additional pointer.",
      "Singly linked lists have more flexibility in traversal.",
      "Doubly linked lists cannot be traversed efficiently in reverse.",
      "Memory usage for both types is identical.",
    ],
    correctAnswer:
      "Doubly linked lists require more memory due to the additional pointer.",
    explanation:
      "Each node in a doubly linked list contains two pointers: one to the next node and one to the previous node, which doubles the memory usage compared to a singly linked list.",
  },
  {
    question:
      "In a circular singly linked list, how can you detect an infinite loop caused by a pointer misconfiguration?",
    options: [
      "By using an extra pointer to track the last node.",
      "By checking if a node points to its own address.",
      "By counting the number of nodes as you traverse.",
      "By using Floyd's cycle-finding algorithm (Tortoise and Hare).",
    ],
    correctAnswer:
      "By using Floyd's cycle-finding algorithm (Tortoise and Hare).",
    explanation:
      "Floyd's cycle-finding algorithm (Tortoise and Hare) helps detect cycles in a linked list by using two pointers that move at different speeds to detect if they meet at the same node.",
  },
  {
    question:
      "What is the worst-case time complexity of searching for an element in an unsorted singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In an unsorted singly linked list, the worst-case time complexity of searching for an element is O(n), as each node must be checked one by one.",
  },
  {
    question:
      "In a linked list implementation of a deque (double-ended queue), what operation can be performed in O(1) time?",
    options: [
      "Adding an element to the middle of the deque.",
      "Removing an element from the front of the deque.",
      "Searching for an element in the deque.",
      "Reversing the deque.",
    ],
    correctAnswer: "Removing an element from the front of the deque.",
    explanation:
      "In a deque implemented with a doubly linked list, removal of elements from the front or back can be done in O(1) time by adjusting the head or tail pointers.",
  },
  {
    question:
      "Which of the following statements is true about a doubly circular linked list?",
    options: [
      "The head and tail nodes are connected to each other.",
      "Each node has a reference only to the previous node.",
      "Nodes are connected in a non-circular fashion.",
      "Only the tail node points back to the head.",
    ],
    correctAnswer: "The head and tail nodes are connected to each other.",
    explanation:
      "In a doubly circular linked list, the last node's next pointer points to the head, and the head node's previous pointer points to the tail, forming a circular structure.",
  },
  {
    question:
      "What is the major disadvantage of using a linked list to implement a hash table in terms of collision handling?",
    options: [
      "It requires more memory due to additional pointers.",
      "It increases the time complexity of insertion and deletion.",
      "It results in longer search times as collisions increase.",
      "It does not support dynamic resizing.",
    ],
    correctAnswer: "It results in longer search times as collisions increase.",
    explanation:
      "Using a linked list to handle hash collisions (chaining) can lead to longer search times as more elements are stored in the list, increasing the time complexity of operations.",
  },
  {
    question:
      "What is the time complexity of deleting the last node in a singly linked list, assuming the head is known?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In a singly linked list, deleting the last node requires traversing the entire list to find the second-to-last node, resulting in a time complexity of O(n).",
  },
  {
    question:
      "Which type of linked list is most suitable for implementing a circular buffer where elements are inserted and removed at both ends?",
    options: [
      "Singly Linked List",
      "Doubly Linked List",
      "Circular Singly Linked List",
      "Circular Doubly Linked List",
    ],
    correctAnswer: "Circular Doubly Linked List",
    explanation:
      "A circular doubly linked list is the most suitable for implementing a circular buffer because it allows efficient insertion and removal of elements from both ends with O(1) time complexity.",
  },
  {
    question:
      "What is the time complexity of finding the middle element in a singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In a singly linked list, finding the middle element requires traversing the list to count the number of nodes, which results in a time complexity of O(n).",
  },
  {
    question:
      "In a multi-level doubly linked list, what is the primary benefit of the additional levels of pointers?",
    options: [
      "It reduces the memory usage.",
      "It allows faster traversal of data.",
      "It helps in reversing the list efficiently.",
      "It avoids the need for pointer manipulation.",
    ],
    correctAnswer: "It allows faster traversal of data.",
    explanation:
      "The additional levels of pointers in a multi-level doubly linked list allow for faster traversal by providing shortcut references between nodes, improving access time in certain operations.",
  },
  {
    question:
      "What is the key difference between a singly linked list and a doubly linked list in terms of deletion?",
    options: [
      "A doubly linked list allows deletion from both ends efficiently.",
      "In a singly linked list, deletion is faster due to fewer pointers.",
      "Deletion in a doubly linked list requires more memory.",
      "In a singly linked list, you need to traverse the list to find the node before the one to be deleted.",
    ],
    correctAnswer:
      "In a singly linked list, you need to traverse the list to find the node before the one to be deleted.",
    explanation:
      "In a singly linked list, deletion requires traversing the list to find the previous node, while in a doubly linked list, deletion can be done more efficiently as each node has pointers to both its previous and next nodes.",
  },
  {
    question:
      "In an advanced linked list implementation, what is the major advantage of using an AVL tree over a simple linked list for balancing?",
    options: [
      "An AVL tree allows faster insertion and deletion operations.",
      "An AVL tree guarantees O(1) time complexity for searching.",
      "An AVL tree minimizes memory usage by reducing node sizes.",
      "An AVL tree is easier to implement than a linked list.",
    ],
    correctAnswer:
      "An AVL tree allows faster insertion and deletion operations.",
    explanation:
      "An AVL tree, being a self-balancing binary search tree, provides faster insertion and deletion operations due to its logarithmic time complexity, while a linked list can have linear complexity for these operations.",
  },
  {
    question:
      "Which of the following operations requires O(1) time in a doubly linked list but not in a singly linked list?",
    options: [
      "Inserting an element at the beginning of the list.",
      "Deleting an element from the middle of the list.",
      "Finding the last element of the list.",
      "Inserting an element at the end of the list.",
    ],
    correctAnswer: "Deleting an element from the middle of the list.",
    explanation:
      "In a doubly linked list, you can access both the previous and next nodes from any given node, which makes deleting a node from the middle of the list an O(1) operation. In a singly linked list, you need to traverse the list to find the previous node, making it O(n).",
  },
  {
    question:
      "What is the best use case for a circular doubly linked list in computer systems?",
    options: [
      "Implementing dynamic arrays.",
      "Handling tasks in round-robin scheduling.",
      "Storing elements with fixed size.",
      "Efficient search of elements.",
    ],
    correctAnswer: "Handling tasks in round-robin scheduling.",
    explanation:
      "A circular doubly linked list is often used in round-robin scheduling algorithms because it allows efficient traversal from one node to the next in a circular manner, making it ideal for repetitive task handling.",
  },
  {
    question: "What is the space complexity of a linked list with n nodes?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Each node in a linked list typically stores at least one pointer/reference in addition to the data, so the total space complexity is O(n) where n is the number of nodes.",
  },
  {
    question:
      "In a doubly circular linked list, if the tail node is deleted, what happens to the next and previous pointers?",
    options: [
      "Both pointers are set to null.",
      "The tail’s previous node’s next pointer is updated to the head.",
      "The head’s previous node is deleted.",
      "The next node becomes the new tail.",
    ],
    correctAnswer:
      "The tail’s previous node’s next pointer is updated to the head.",
    explanation:
      "In a doubly circular linked list, when the tail node is deleted, the next pointer of the tail’s previous node is updated to point to the head, maintaining the circular structure.",
  },
  {
    question:
      "How does a hash table with chaining (using linked lists) handle collisions, and what are the consequences for search time complexity?",
    options: [
      "It keeps separate hash tables for each key.",
      "It adds elements to a binary search tree.",
      "It stores colliding elements in a linked list, which may result in O(n) search time in the worst case.",
      "It replaces the linked list with an array for faster search.",
    ],
    correctAnswer:
      "It stores colliding elements in a linked list, which may result in O(n) search time in the worst case.",
    explanation:
      "In a hash table with chaining, colliding elements are stored in a linked list. If many elements hash to the same index, the search time can degrade to O(n) in the worst case.",
  },
  {
    question:
      "What is the difference between a singly linked list and a doubly linked list in terms of traversal?",
    options: [
      "Singly linked lists can only be traversed forward, whereas doubly linked lists can be traversed both forward and backward.",
      "Doubly linked lists have better memory usage.",
      "Singly linked lists allow for faster deletions.",
      "Both can be traversed only forward.",
    ],
    correctAnswer:
      "Singly linked lists can only be traversed forward, whereas doubly linked lists can be traversed both forward and backward.",
    explanation:
      "A singly linked list can only be traversed from the head to the tail, whereas a doubly linked list allows traversal in both directions because each node has references to both its previous and next nodes.",
  },
  {
    question:
      "What is the time complexity of removing the last element from a singly linked list, assuming no tail pointer is maintained?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In a singly linked list without a tail pointer, removing the last element requires traversing the entire list to find the second-to-last node, resulting in a time complexity of O(n).",
  },
];
