export const test5 = [
  {
    question:
      "In a circular doubly linked list, how would you delete the last node?",
    options: [
      "Find the last node and make its previous node the new tail.",
      "Remove the node from the head of the list.",
      "Find the second to last node and set its next pointer to null.",
      "Update the head pointer to point to the next node.",
    ],
    correctAnswer:
      "Find the last node and make its previous node the new tail.",
    explanation:
      "In a circular doubly linked list, to delete the last node, you need to set the previous node's next pointer to point to the head, and then make the new last node the tail.",
  },
  {
    question:
      "Which of the following is a characteristic of a self-adjusting linked list?",
    options: [
      "The least recently accessed node is removed first.",
      "The most recently accessed node is moved to the front.",
      "Nodes are stored in random order.",
      "It uses a circular doubly linked list.",
    ],
    correctAnswer: "The most recently accessed node is moved to the front.",
    explanation:
      "In a self-adjusting linked list, the most recently accessed node is moved to the front of the list to reduce access time for frequently used nodes.",
  },
  {
    question:
      "What is the space complexity of reversing a singly linked list iteratively?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Reversing a singly linked list iteratively uses constant space (O(1)) because no extra data structures are required aside from pointers.",
  },
  {
    question:
      "Which of the following scenarios is best suited for using a skip list?",
    options: [
      "When you need to traverse the list from head to tail.",
      "When you need to maintain a sorted order with fast access.",
      "When you want to store duplicates in the list.",
      "When you require constant time insertions and deletions.",
    ],
    correctAnswer: "When you need to maintain a sorted order with fast access.",
    explanation:
      "Skip lists are designed to maintain sorted order while allowing faster search times, reducing the time complexity of search operations from O(n) to O(log n).",
  },
  {
    question:
      "What is the best approach to detect a cycle in a doubly linked list?",
    options: [
      "Use two pointers moving at different speeds.",
      "Check if the next node is equal to the current node.",
      "Store nodes in a hash table and check for duplicates.",
      "Reverse the list and check for cycles.",
    ],
    correctAnswer: "Use two pointers moving at different speeds.",
    explanation:
      "Floyd’s Cycle-Finding Algorithm can be used for detecting cycles in doubly linked lists as well, where two pointers move at different speeds and eventually meet if a cycle exists.",
  },
  {
    question:
      "What is the time complexity of inserting a node in the middle of a singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "To insert a node in the middle of a singly linked list, you need to traverse the list to find the appropriate insertion point, which takes O(n) time.",
  },
  {
    question:
      "How can you remove a node from a doubly linked list without having access to the head or tail?",
    options: [
      "Update the previous and next node’s pointers to skip the node.",
      "Use a recursive function to remove the node.",
      "Delete the node and rebuild the list.",
      "Set the node’s next pointer to null.",
    ],
    correctAnswer:
      "Update the previous and next node’s pointers to skip the node.",
    explanation:
      "In a doubly linked list, you can remove a node by updating the previous node’s next pointer and the next node’s previous pointer to bypass the node.",
  },
  {
    question:
      "Which data structure is often used in conjunction with a linked list to implement a deque (double-ended queue)?",
    options: ["Stack", "Queue", "Circular Array", "HashMap"],
    correctAnswer: "Circular Array",
    explanation:
      "A deque (double-ended queue) can be efficiently implemented using a circular array or a doubly linked list, allowing for O(1) insertions and deletions at both ends.",
  },
  {
    question:
      "In a linked list implementation of a stack, what operation occurs when an element is pushed onto the stack?",
    options: [
      "The element is inserted at the front of the list.",
      "The element is inserted at the end of the list.",
      "The element is inserted at the middle of the list.",
      "The element is inserted at a random position.",
    ],
    correctAnswer: "The element is inserted at the front of the list.",
    explanation:
      "In a stack implemented with a linked list, elements are inserted (pushed) at the front of the list, which follows the Last-In, First-Out (LIFO) principle.",
  },
  {
    question: "How would you implement a sorted linked list efficiently?",
    options: [
      "By inserting elements at the head.",
      "By keeping the list sorted and inserting in the correct position.",
      "By inserting elements randomly and sorting the list later.",
      "By reversing the list after each insertion.",
    ],
    correctAnswer:
      "By keeping the list sorted and inserting in the correct position.",
    explanation:
      "A sorted linked list can be maintained by inserting elements in the correct position, ensuring that the list is always sorted without requiring a separate sorting operation.",
  },
  {
    question:
      "What is the time complexity of searching for an element in an unsorted linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In an unsorted linked list, you need to traverse the entire list to find a particular element, resulting in a time complexity of O(n).",
  },
  {
    question:
      "In a linked list implementation of a priority queue, how do you maintain the order of elements?",
    options: [
      "Insert elements at the head of the list.",
      "Sort the list after each insertion.",
      "Insert elements in sorted order to maintain priority.",
      "Use a doubly linked list and sort it dynamically.",
    ],
    correctAnswer: "Insert elements in sorted order to maintain priority.",
    explanation:
      "In a priority queue implemented using a linked list, elements are inserted in sorted order based on priority, ensuring that the highest priority element is always at the head.",
  },
  {
    question: "What is the space complexity of reversing a doubly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Reversing a doubly linked list can be done in constant space (O(1)) by swapping the next and previous pointers of each node without using additional data structures.",
  },
  {
    question:
      "What is the primary advantage of using a circular linked list over a singly linked list?",
    options: [
      "It allows constant time access to any node.",
      "It eliminates the need for a tail pointer.",
      "It allows traversal from any node to any other node in a circular fashion.",
      "It uses less memory compared to a singly linked list.",
    ],
    correctAnswer:
      "It allows traversal from any node to any other node in a circular fashion.",
    explanation:
      "A circular linked list allows efficient traversal from any node to any other node because it doesn't have a 'null' value at the end, creating a continuous loop.",
  },
  {
    question:
      "Which of the following operations can be performed in constant time in a doubly linked list?",
    options: [
      "Searching for an element",
      "Inserting at the head",
      "Removing the last element",
      "Finding the middle element",
    ],
    correctAnswer: "Inserting at the head",
    explanation:
      "In a doubly linked list, inserting an element at the head is an O(1) operation because it only involves updating the head pointer and adjusting the next and previous pointers.",
  },
  {
    question:
      "In a circular doubly linked list, how do you efficiently remove the head node?",
    options: [
      "Update the previous node’s next pointer and the head pointer.",
      "Delete the head node and rebuild the list.",
      "Remove the last node and make it the new head.",
      "Remove the first node and shift the pointers.",
    ],
    correctAnswer:
      "Update the previous node’s next pointer and the head pointer.",
    explanation:
      "In a circular doubly linked list, to remove the head node, you update the previous node’s next pointer to point to the second node, and update the head pointer to point to the new head.",
  },
  {
    question:
      "Which type of linked list is most suitable for implementing an undo operation in software?",
    options: [
      "Singly linked list",
      "Doubly linked list",
      "Circular linked list",
      "Skip list",
    ],
    correctAnswer: "Doubly linked list",
    explanation:
      "A doubly linked list is ideal for undo operations because it allows traversal in both directions, making it easy to navigate back to a previous state.",
  },
  {
    question:
      "What is the time complexity of inserting a node at a random position in a singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Inserting a node at a random position in a singly linked list requires traversing the list to find the insertion point, resulting in a time complexity of O(n).",
  },
  {
    question:
      "How can you remove the middle node from a singly linked list in one pass?",
    options: [
      "Traverse the list and remove the second node.",
      "Use two pointers, one moving twice as fast as the other.",
      "Count the number of nodes and remove the node in the middle.",
      "Traverse the list and remove the last node.",
    ],
    correctAnswer: "Use two pointers, one moving twice as fast as the other.",
    explanation:
      "Using two pointers, where one moves at twice the speed of the other, allows you to find the middle node and remove it efficiently in a single pass through the list.",
  },
  {
    question:
      "Which of the following is an advantage of a skip list over a linked list?",
    options: [
      "Skip lists have less memory overhead.",
      "Skip lists allow faster searching.",
      "Skip lists support constant time search.",
      "Skip lists don’t need any additional pointers.",
    ],
    correctAnswer: "Skip lists allow faster searching.",
    explanation:
      "Skip lists use multiple levels of linked lists to enable faster searching, reducing the time complexity from O(n) to O(log n), while maintaining similar insertion and deletion complexity.",
  },
  {
    question:
      "What happens if you try to access a node beyond the tail in a circular linked list?",
    options: [
      "You get a segmentation fault.",
      "You reach the head node again.",
      "You encounter an infinite loop.",
      "The list is corrupted.",
    ],
    correctAnswer: "You reach the head node again.",
    explanation:
      "In a circular linked list, when you try to access a node beyond the tail, you automatically loop back to the head, as the list is circular and does not have a null terminator.",
  },
  {
    question:
      "Which is the most efficient way to check if two linked lists intersect?",
    options: [
      "Traverse both lists and check for matching node values.",
      "Use a hash set to store the nodes from one list and check against the other.",
      "Sort the lists and compare them.",
      "Rearrange the nodes and check for intersections.",
    ],
    correctAnswer:
      "Use a hash set to store the nodes from one list and check against the other.",
    explanation:
      "Using a hash set allows efficient O(n) time complexity to check if two linked lists intersect by storing all nodes of one list and checking if any node from the second list is already in the hash set.",
  },
];
