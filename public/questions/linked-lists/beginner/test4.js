export const test4 = [
  {
    question:
      "What is the primary advantage of using a doubly linked list over a singly linked list?",
    options: [
      "Easier to implement",
      "Allows traversal in both directions",
      "Uses less memory",
      "Faster insertion and deletion",
    ],
    correctAnswer: "Allows traversal in both directions",
    explanation:
      "A doubly linked list has pointers to both the next and previous nodes, allowing for traversal in both directions, unlike a singly linked list that only allows forward traversal.",
  },
  {
    question:
      "What is the time complexity of accessing an element in a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In a linked list, accessing an element requires traversing the list from the head to the desired node, which takes linear time O(n).",
  },
  {
    question:
      "Which type of linked list can be used to implement a deque (double-ended queue)?",
    options: [
      "Singly Linked List",
      "Doubly Linked List",
      "Circular Linked List",
      "None of the above",
    ],
    correctAnswer: "Doubly Linked List",
    explanation:
      "A doubly linked list is ideal for implementing a deque because it allows insertion and deletion from both ends efficiently.",
  },
  {
    question: "How do you find the middle node in a singly linked list?",
    options: [
      "Traverse the entire list twice",
      "Traverse the list once, using two pointers (slow and fast)",
      "Use a stack to store the nodes",
      "Reverse the linked list",
    ],
    correctAnswer: "Traverse the list once, using two pointers (slow and fast)",
    explanation:
      "You can find the middle node in a singly linked list by using two pointers, where one moves two steps at a time (fast) and the other moves one step at a time (slow). When the fast pointer reaches the end, the slow pointer will be at the middle.",
  },
  {
    question:
      "What is a major disadvantage of linked lists compared to arrays?",
    options: [
      "They require less memory",
      "They are not as flexible in terms of memory allocation",
      "They support faster random access",
      "They require more memory for pointers",
    ],
    correctAnswer: "They require more memory for pointers",
    explanation:
      "Each node in a linked list contains extra memory for storing a pointer (or pointers in the case of a doubly linked list), whereas arrays store data contiguously with no extra memory required for pointers.",
  },
  {
    question:
      "In which case would a singly linked list be more beneficial than a doubly linked list?",
    options: [
      "When memory usage is a concern",
      "When you need to traverse in both directions",
      "When random access is required",
      "When inserting and deleting nodes frequently from both ends",
    ],
    correctAnswer: "When memory usage is a concern",
    explanation:
      "A singly linked list uses less memory because it only requires one pointer per node, whereas a doubly linked list requires two pointers per node.",
  },
  {
    question: "How can you detect a loop in a linked list?",
    options: [
      "By counting the number of nodes",
      "By checking if the next pointer of a node points to an already visited node",
      "By reversing the list and checking for cycles",
      "By traversing the list twice",
    ],
    correctAnswer:
      "By checking if the next pointer of a node points to an already visited node",
    explanation:
      "You can detect a loop in a linked list by keeping track of visited nodes and checking if the next pointer of a node points to an already visited node.",
  },
  {
    question:
      "What is the time complexity of inserting an element at the beginning of a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Inserting an element at the beginning of a singly linked list is a constant time operation O(1), as it only requires updating the head pointer.",
  },
  {
    question:
      "What is the primary purpose of the tail pointer in a singly linked list?",
    options: [
      "To track the last node",
      "To traverse the list from the end",
      "To store the sum of the nodes",
      "To connect the nodes in a circular fashion",
    ],
    correctAnswer: "To track the last node",
    explanation:
      "The tail pointer points to the last node of the singly linked list, allowing for efficient insertion at the end of the list.",
  },
  {
    question:
      "What is the difference between a singly linked list and a circular linked list?",
    options: [
      "Singly linked lists have no pointers",
      "Circular linked lists have the last node pointing to the first node",
      "Singly linked lists are faster",
      "Circular linked lists are only useful for deletion",
    ],
    correctAnswer:
      "Circular linked lists have the last node pointing to the first node",
    explanation:
      "In a circular linked list, the last node points to the first node, forming a loop. In a singly linked list, the last node points to null, indicating the end of the list.",
  },
  {
    question:
      "What is the time complexity of deleting a node from the middle of a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "To delete a node from the middle of a singly linked list, you must first traverse the list to find the node, which takes linear time O(n).",
  },
  {
    question:
      "In which scenario would you prefer a circular linked list over a singly linked list?",
    options: [
      "When you need to quickly delete the last node",
      "When you want to traverse the list repeatedly without reaching the end",
      "When memory is limited",
      "When you need reverse traversal",
    ],
    correctAnswer:
      "When you want to traverse the list repeatedly without reaching the end",
    explanation:
      "A circular linked list is useful when you want to traverse the list repeatedly in a loop, as the last node points back to the first node.",
  },
  {
    question: "What is a dummy node in the context of a linked list?",
    options: [
      "A node that stores the length of the list",
      "A node that points to the head of the list",
      "A temporary node used for simplifying operations like insertion or deletion",
      "A node that stores a null value",
    ],
    correctAnswer:
      "A temporary node used for simplifying operations like insertion or deletion",
    explanation:
      "A dummy node is a placeholder node used to simplify operations like insertion or deletion, especially when working with the head of the list.",
  },
  {
    question:
      "What is the time complexity of appending a node to the end of a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "To append a node to the end of a singly linked list, you need to traverse the entire list to find the last node, which takes O(n) time.",
  },
  {
    question:
      "What is the difference between a doubly linked list and a singly linked list?",
    options: [
      "A doubly linked list has extra pointers allowing traversal in both directions",
      "A doubly linked list is slower",
      "A singly linked list has fewer nodes",
      "A doubly linked list can only be traversed from the tail to head",
    ],
    correctAnswer:
      "A doubly linked list has extra pointers allowing traversal in both directions",
    explanation:
      "In a doubly linked list, each node has two pointers (to the next and previous nodes), allowing traversal in both directions, whereas a singly linked list only allows forward traversal.",
  },
  {
    question:
      "Which of the following is true for the tail node in a singly linked list?",
    options: [
      "It points to the head",
      "It points to null",
      "It points to the middle node",
      "It points to the previous node",
    ],
    correctAnswer: "It points to null",
    explanation:
      "In a singly linked list, the tail node points to null, indicating the end of the list.",
  },
  {
    question:
      "In a doubly linked list, how do you traverse from a node to its previous node?",
    options: [
      "Follow the next pointer",
      "Follow the previous pointer",
      "Use an auxiliary data structure",
      "Follow both next and previous pointers simultaneously",
    ],
    correctAnswer: "Follow the previous pointer",
    explanation:
      "In a doubly linked list, each node has a `previous` pointer, which allows you to traverse backwards in the list.",
  },
  {
    question:
      "Which of the following is not an advantage of using a linked list?",
    options: [
      "Dynamic size",
      "Ease of insertion and deletion",
      "Random access",
      "Efficient memory usage",
    ],
    correctAnswer: "Random access",
    explanation:
      "Linked lists do not allow random access to elements, which is a limitation compared to arrays. You need to traverse the list to access elements.",
  },
  {
    question:
      "What happens when you try to insert a node in the middle of a circular linked list?",
    options: [
      "You need to break the circularity",
      "You need to find the tail and update pointers",
      "You need to update the pointers of the surrounding nodes",
      "Nothing special happens",
    ],
    correctAnswer: "You need to update the pointers of the surrounding nodes",
    explanation:
      "Inserting a node in the middle of a circular linked list requires updating the pointers of the surrounding nodes to maintain the circular structure.",
  },
  {
    question:
      "What is the time complexity of searching for a specific value in a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Searching for a specific value in a singly linked list takes linear time O(n), as you must traverse each node until you find the target value.",
  },
];
