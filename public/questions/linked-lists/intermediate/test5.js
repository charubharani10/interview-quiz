export const test5 = [
  {
    question:
      "Which of the following statements about a circular linked list is false?",
    options: [
      "It can be implemented using a singly or doubly linked list.",
      "The next pointer of the last node points to the first node.",
      "The list has no end; it loops infinitely.",
      "It is not possible to detect an infinite loop in the list.",
    ],
    correctAnswer: "It is not possible to detect an infinite loop in the list.",
    explanation:
      "Circular linked lists are not infinite by themselves; detecting an infinite loop can be done by keeping track of visited nodes or using a slow/fast pointer approach.",
  },
  {
    question:
      "What is the time complexity of searching for an element in a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Searching in a singly linked list involves traversing through the list until the desired element is found, resulting in O(n) time complexity in the worst case.",
  },
  {
    question:
      "Which operation is faster when performed on a doubly linked list compared to a singly linked list?",
    options: [
      "Searching for an element",
      "Deleting a node from the middle",
      "Inserting at the beginning",
      "Traversing the list",
    ],
    correctAnswer: "Deleting a node from the middle",
    explanation:
      "In a doubly linked list, deleting a node from the middle is faster than in a singly linked list because it has direct access to both previous and next nodes, unlike a singly linked list which requires traversal.",
  },
  {
    question:
      "What happens when you try to access a node at index 10 in a list with 10 nodes?",
    options: [
      "The node at index 10 is returned.",
      "An error occurs.",
      "The node at index 9 is returned.",
      "The list is automatically resized.",
    ],
    correctAnswer: "An error occurs.",
    explanation:
      "In a linked list, accessing an index beyond the valid range will typically result in an error because there is no node at that index.",
  },
  {
    question:
      "What is the advantage of using a doubly linked list over a singly linked list for deleting a node?",
    options: [
      "Doubly linked lists take less memory.",
      "Doubly linked lists allow deletion without traversal.",
      "Singly linked lists support faster deletion.",
      "Doubly linked lists provide better memory management.",
    ],
    correctAnswer: "Doubly linked lists allow deletion without traversal.",
    explanation:
      "In a doubly linked list, you can delete a node without needing to traverse the list because each node has access to its previous node, making deletion O(1).",
  },
  {
    question:
      "Which of the following scenarios is best suited for using a circular linked list?",
    options: [
      "When you need to represent a queue.",
      "When you need bidirectional traversal.",
      "When you need a fixed number of nodes.",
      "When nodes need to be accessed in a looped fashion.",
    ],
    correctAnswer: "When nodes need to be accessed in a looped fashion.",
    explanation:
      "Circular linked lists are best suited when you need to loop back to the first node from the last node, such as in round-robin scheduling or when representing cyclic structures.",
  },
  {
    question:
      "In a doubly linked list, which pointer does not exist in a singly linked list?",
    options: [
      "Previous pointer",
      "Next pointer",
      "Head pointer",
      "Tail pointer",
    ],
    correctAnswer: "Previous pointer",
    explanation:
      "In a doubly linked list, each node has both a previous and next pointer, but in a singly linked list, nodes only have a next pointer.",
  },
  {
    question:
      "Which of the following is a characteristic of a circular doubly linked list?",
    options: [
      "Both the last node's next pointer and the first node's previous pointer point to null.",
      "The last node's next pointer points to the first node, and the first node's previous pointer points to the last node.",
      "Traversal is possible in only one direction.",
      "It does not allow insertion at the beginning.",
    ],
    correctAnswer:
      "The last node's next pointer points to the first node, and the first node's previous pointer points to the last node.",
    explanation:
      "A circular doubly linked list connects the last node to the first node, allowing circular traversal in both directions.",
  },
  {
    question:
      "Which of the following is true about inserting a new node in a circular singly linked list?",
    options: [
      "The new node's next pointer points to null.",
      "The new node becomes the head node.",
      "The last node’s next pointer needs to be updated.",
      "You need to traverse to the second-to-last node to insert.",
    ],
    correctAnswer: "The last node’s next pointer needs to be updated.",
    explanation:
      "In a circular singly linked list, when a new node is inserted, the last node’s next pointer must be updated to point to the new node to maintain the circular structure.",
  },
  {
    question:
      "What is the time complexity of deleting the head node in a doubly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Deleting the head node in a doubly linked list is an O(1) operation because you only need to update the head pointer and the previous pointer of the new head node.",
  },
  {
    question: "How can you determine if a singly linked list is circular?",
    options: [
      "Check if the head node has a null next pointer.",
      "Check if there are any repeating elements in the list.",
      "Traverse the list and check if any node points back to the head node.",
      "Check if the tail node points to null.",
    ],
    correctAnswer:
      "Traverse the list and check if any node points back to the head node.",
    explanation:
      "To detect if a singly linked list is circular, you need to traverse the list and check if any node points back to the head node, forming a loop.",
  },
  {
    question:
      "What is the primary advantage of using a doubly linked list over a singly linked list?",
    options: [
      "Better memory efficiency",
      "Simpler traversal",
      "Bidirectional traversal",
      "Faster insertion at the beginning",
    ],
    correctAnswer: "Bidirectional traversal",
    explanation:
      "In a doubly linked list, each node contains pointers to both the previous and next nodes, allowing bidirectional traversal, which is not possible in a singly linked list.",
  },
  {
    question:
      "What is the result of deleting a node in the middle of a singly linked list?",
    options: [
      "The node is removed, and the previous node is linked to the next node.",
      "The node is moved to the beginning of the list.",
      "The node is removed, and the next node is linked to the previous node.",
      "The node is left unchanged.",
    ],
    correctAnswer:
      "The node is removed, and the previous node is linked to the next node.",
    explanation:
      "To delete a node in a singly linked list, you must update the previous node's next pointer to point to the node after the one being deleted.",
  },
  {
    question:
      "What is the time complexity of inserting a new node at the beginning of a doubly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Inserting at the beginning of a doubly linked list is an O(1) operation because the new node is directly linked to the head without requiring traversal.",
  },
  {
    question:
      "Which operation is faster in a doubly linked list than a singly linked list?",
    options: [
      "Inserting at the beginning",
      "Inserting at the middle",
      "Deleting a node from the end",
      "Traversing the list",
    ],
    correctAnswer: "Deleting a node from the end",
    explanation:
      "In a doubly linked list, deleting a node from the end is faster because it can directly access the previous node, unlike in a singly linked list where traversal is required.",
  },
  {
    question:
      "In a circular doubly linked list, how does the last node’s next pointer behave?",
    options: [
      "Points to null",
      "Points to the first node",
      "Points to the previous node",
      "Points to the last node itself",
    ],
    correctAnswer: "Points to the first node",
    explanation:
      "In a circular doubly linked list, the last node’s next pointer points to the first node, creating a loop for continuous traversal.",
  },
  {
    question:
      "What is the time complexity of searching for an element in a circular linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Searching in a circular linked list involves traversing the list until the element is found, which results in O(n) time complexity in the worst case.",
  },
  {
    question: "How can you detect a cycle in a circular linked list?",
    options: [
      "By checking if the last node points to null",
      "By traversing the list and checking if a node is visited more than once",
      "By looking for a duplicate node",
      "By checking if the head points to itself",
    ],
    correctAnswer:
      "By traversing the list and checking if a node is visited more than once",
    explanation:
      "To detect a cycle in a circular linked list, you need to traverse and track nodes, marking them as visited, and if any node is revisited, a cycle is present.",
  },
  {
    question:
      "What is the main drawback of using a circular singly linked list compared to a doubly linked list?",
    options: [
      "Higher memory consumption",
      "More complex insertion and deletion operations",
      "Inability to traverse backwards",
      "No head or tail pointer",
    ],
    correctAnswer: "Inability to traverse backwards",
    explanation:
      "In a circular singly linked list, you can only traverse in one direction. Doubly linked lists allow bidirectional traversal, making them more versatile.",
  },
  {
    question:
      "What is the time complexity of deleting a node from the middle of a circular doubly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "In a circular doubly linked list, deleting a node from the middle is an O(1) operation because you can directly access both the previous and next nodes of the node to be deleted.",
  },
  {
    question:
      "Which of the following is a disadvantage of using a circular linked list?",
    options: [
      "Higher memory usage",
      "Complex pointer manipulation during deletion",
      "Difficult to traverse",
      "Inability to implement in any real-world scenario",
    ],
    correctAnswer: "Complex pointer manipulation during deletion",
    explanation:
      "Circular linked lists can have complex pointer manipulations during deletion, especially when dealing with head and tail nodes, which can increase the likelihood of errors.",
  },
];
