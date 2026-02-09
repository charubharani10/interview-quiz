export const test4 = [
  {
    question:
      "What is the time complexity of searching for an element in a singly linked list in the worst case?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In the worst case, you may need to traverse through all the nodes of a singly linked list to search for an element, making the time complexity O(n).",
  },
  {
    question:
      "Which of the following is NOT a valid operation on a singly linked list?",
    options: [
      "Inserting at the beginning",
      "Inserting at the end",
      "Inserting in the middle",
      "Inserting in random positions",
    ],
    correctAnswer: "Inserting in random positions",
    explanation:
      "In a singly linked list, inserting in random positions is inefficient because it requires traversal from the head to find the correct insertion point.",
  },
  {
    question:
      "In a circular singly linked list, how do you detect if a loop exists?",
    options: [
      "By checking if the last node points to null",
      "By checking if the next pointer of a node points to the head",
      "By traversing the list and counting the number of nodes",
      "By checking if the list length is even",
    ],
    correctAnswer:
      "By checking if the next pointer of a node points to the head",
    explanation:
      "In a circular singly linked list, a loop is detected when a node’s next pointer points back to the head, creating a circular reference.",
  },
  {
    question:
      "Which of the following is a primary advantage of using a doubly linked list over a singly linked list?",
    options: [
      "Requires less memory",
      "Allows traversal in both directions",
      "Requires fewer pointers",
      "More complex to implement",
    ],
    correctAnswer: "Allows traversal in both directions",
    explanation:
      "In a doubly linked list, each node contains both a next and previous pointer, allowing traversal in both directions (forward and backward), which is not possible with a singly linked list.",
  },
  {
    question:
      "What is the key difference between a circular linked list and a doubly linked list?",
    options: [
      "Circular lists can only be traversed forward",
      "Circular lists do not have a head",
      "Circular lists have no previous pointer",
      "Circular lists have a loop where the last node points to the first node",
    ],
    correctAnswer:
      "Circular lists have a loop where the last node points to the first node",
    explanation:
      "A circular linked list has no end; the last node’s next pointer points back to the first node, forming a loop, whereas a doubly linked list allows bidirectional traversal but is not necessarily circular.",
  },
  {
    question:
      "What is the time complexity for deleting a node from the beginning of a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Deleting a node from the beginning of a singly linked list is an O(1) operation because it only involves updating the head pointer to point to the next node.",
  },
  {
    question:
      "In a doubly linked list, what is required to insert a node at a specific position?",
    options: [
      "Access to the previous node",
      "Access to the next node",
      "Both the previous and next node",
      "Only the head pointer",
    ],
    correctAnswer: "Both the previous and next node",
    explanation:
      "To insert a node at a specific position in a doubly linked list, you need access to both the previous node (to set its next pointer) and the next node (to set its previous pointer).",
  },
  {
    question: "How does a linked list differ from an array?",
    options: [
      "A linked list uses contiguous memory locations",
      "An array allows random access to elements",
      "A linked list has a fixed size",
      "An array uses pointers to store elements",
    ],
    correctAnswer: "An array allows random access to elements",
    explanation:
      "An array allows random access to elements using an index, whereas in a linked list, you must traverse nodes sequentially to access elements.",
  },
  {
    question: "How do you detect a cycle in a linked list?",
    options: [
      "By checking if the head pointer is null",
      "By traversing and keeping track of visited nodes",
      "By checking if the next pointer of a node is null",
      "By checking the number of nodes in the list",
    ],
    correctAnswer: "By traversing and keeping track of visited nodes",
    explanation:
      "To detect a cycle in a linked list, you can traverse through the list and keep track of visited nodes using a set or two pointers (Floyd’s Tortoise and Hare algorithm).",
  },
  {
    question:
      "In a doubly linked list, what happens when you delete the tail node?",
    options: [
      "Only the next pointer of the previous node needs to be updated",
      "Only the previous pointer of the next node needs to be updated",
      "Both the next pointer of the previous node and the previous pointer of the next node need to be updated",
      "The head pointer needs to be updated",
    ],
    correctAnswer:
      "Only the next pointer of the previous node needs to be updated",
    explanation:
      "When deleting the tail node in a doubly linked list, you only need to update the next pointer of the previous node to null, as there is no node after the tail.",
  },
  {
    question: "Which of the following is a drawback of a singly linked list?",
    options: [
      "Higher space complexity",
      "Difficulty in inserting elements at the beginning",
      "No direct access to the previous node",
      "Requires more memory for extra pointers",
    ],
    correctAnswer: "No direct access to the previous node",
    explanation:
      "A singly linked list only allows traversal in one direction, so there is no direct access to the previous node, unlike a doubly linked list.",
  },
  {
    question: "Which operation in a singly linked list takes linear time?",
    options: [
      "Searching for an element",
      "Inserting at the beginning",
      "Inserting at the end",
      "Deleting from the beginning",
    ],
    correctAnswer: "Searching for an element",
    explanation:
      "Searching for an element in a singly linked list takes O(n) time because you may need to traverse through the entire list in the worst case.",
  },
  {
    question:
      "What is the advantage of using a doubly linked list over a singly linked list?",
    options: [
      "Less memory usage",
      "Faster search operations",
      "Allows traversal in both directions",
      "No need for extra pointers",
    ],
    correctAnswer: "Allows traversal in both directions",
    explanation:
      "A doubly linked list allows traversal in both forward and backward directions, which is not possible with a singly linked list.",
  },
  {
    question: "How can you reverse a singly linked list?",
    options: [
      "By swapping the next pointers of the nodes",
      "By iterating from the tail to the head",
      "By re-linking the next pointers and updating the head",
      "By removing the nodes and recreating the list",
    ],
    correctAnswer: "By re-linking the next pointers and updating the head",
    explanation:
      "To reverse a singly linked list, you re-link the next pointers of each node, and finally, update the head to the last node of the original list.",
  },
  {
    question:
      "What is the primary disadvantage of using a doubly linked list over a singly linked list?",
    options: [
      "Requires more memory",
      "Allows traversal in one direction only",
      "Increases the complexity of insertions",
      "Slower operations due to extra pointers",
    ],
    correctAnswer: "Requires more memory",
    explanation:
      "A doubly linked list requires extra memory because each node needs to store an additional pointer (to the previous node), unlike a singly linked list.",
  },
  {
    question:
      "What is the time complexity of inserting a node at the beginning of a doubly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Inserting a node at the beginning of a doubly linked list is an O(1) operation because it only involves updating the head pointer and the previous pointer of the existing head node.",
  },
  {
    question:
      "In a circular linked list, what is a characteristic of the last node?",
    options: [
      "It has no next pointer",
      "It points to the head",
      "It points to null",
      "It stores additional data",
    ],
    correctAnswer: "It points to the head",
    explanation:
      "In a circular linked list, the last node points back to the head, forming a closed loop, which is a key characteristic of this type of list.",
  },
  {
    question:
      "In which situation would you prefer a circular doubly linked list over a circular singly linked list?",
    options: [
      "When you want to traverse the list only forward",
      "When memory usage is a concern",
      "When you need to traverse both forward and backward",
      "When insertion at the beginning is not required",
    ],
    correctAnswer: "When you need to traverse both forward and backward",
    explanation:
      "A circular doubly linked list allows traversal in both directions, which is useful when you need to traverse the list both forward and backward. A circular singly linked list only allows forward traversal.",
  },
  {
    question:
      "What happens when you try to access the next node of the last node in a circular linked list?",
    options: [
      "The program crashes",
      "It loops back to the first node",
      "It throws an exception",
      "The last node is removed",
    ],
    correctAnswer: "It loops back to the first node",
    explanation:
      "In a circular linked list, the next pointer of the last node points to the first node, forming a loop.",
  },
  {
    question:
      "Which of the following operations can be performed in constant time (O(1)) in a doubly linked list?",
    options: [
      "Searching for a node",
      "Inserting at the end",
      "Deleting a node from the middle",
      "Inserting at the beginning",
    ],
    correctAnswer: "Inserting at the beginning",
    explanation:
      "Inserting a node at the beginning of a doubly linked list is an O(1) operation because it only requires updating the head pointer and the previous pointer of the existing head node.",
  },
  {
    question:
      "Which of the following is true about a circular doubly linked list?",
    options: [
      "Both the last node's next pointer and the head's previous pointer point to null",
      "The first node’s previous pointer points to the last node",
      "The head's next pointer points to null",
      "It allows bidirectional traversal but not circular traversal",
    ],
    correctAnswer: "The first node’s previous pointer points to the last node",
    explanation:
      "In a circular doubly linked list, the first node’s previous pointer points to the last node, and the last node’s next pointer points back to the first node, forming a circular structure.",
  },
];
