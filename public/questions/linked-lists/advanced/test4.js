export const test4 = [
  {
    question:
      "Which data structure is often used to implement a queue using a circular linked list?",
    options: ["Binary Search Tree", "Stack", "Deque", "Priority Queue"],
    correctAnswer: "Deque",
    explanation:
      "A deque (double-ended queue) can be efficiently implemented using a circular linked list. In this case, elements can be added or removed from both ends in constant time.",
  },
  {
    question:
      "What is the worst-case time complexity of searching for an element in an unsorted singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In an unsorted singly linked list, you have to traverse each node to find the target element, making the worst-case time complexity O(n).",
  },
  {
    question:
      "In which situation is using a linked list more advantageous than using an array?",
    options: [
      "When you need fast access to elements at any index.",
      "When the number of elements is fixed and known in advance.",
      "When you need to frequently add and remove elements dynamically.",
      "When you need to access elements in constant time.",
    ],
    correctAnswer:
      "When you need to frequently add and remove elements dynamically.",
    explanation:
      "Linked lists are more advantageous when elements need to be added or removed frequently, as insertion and deletion in linked lists can be done in O(1) time, while arrays may require resizing or shifting elements.",
  },
  {
    question:
      "What is the primary disadvantage of using a doubly linked list over a singly linked list?",
    options: [
      "Higher memory usage due to extra pointers.",
      "Slower insertion and deletion operations.",
      "Harder to implement in most programming languages.",
      "Limited ability to traverse in one direction.",
    ],
    correctAnswer: "Higher memory usage due to extra pointers.",
    explanation:
      "A doubly linked list uses two pointers per node (one for the previous node and one for the next node), which increases memory usage compared to a singly linked list that only uses one pointer per node.",
  },
  {
    question:
      "What is the time complexity of inserting an element at the beginning of a doubly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Inserting an element at the beginning of a doubly linked list is an O(1) operation because it involves updating a few pointers, regardless of the size of the list.",
  },
  {
    question:
      "What is the best strategy to find the intersection of two linked lists (assuming no cycles)?",
    options: [
      "Use a hash table to store the elements of one list and check each element of the second list against it.",
      "Reverse the linked lists and compare element by element.",
      "Sort the two lists and find common elements.",
      "Use a brute-force nested loop to check each node of the first list with all nodes in the second list.",
    ],
    correctAnswer:
      "Use a hash table to store the elements of one list and check each element of the second list against it.",
    explanation:
      "The most efficient way to find the intersection of two linked lists is to use a hash table to store the nodes of one list and then check if any node in the second list is in the hash table, resulting in O(n) time complexity.",
  },
  {
    question: "In a circular linked list, how do you detect a cycle?",
    options: [
      "Check if a node points to itself.",
      "Keep track of visited nodes using a hash set.",
      "The head pointer will eventually point to null.",
      "The last node will point to the next node in the sequence.",
    ],
    correctAnswer: "Keep track of visited nodes using a hash set.",
    explanation:
      "In a circular linked list, you can detect a cycle by using a hash set to store the nodes you've encountered. If you visit a node more than once, a cycle is present.",
  },
  {
    question:
      "What is the primary advantage of a circular linked list over a regular singly linked list?",
    options: [
      "It reduces memory usage.",
      "It allows for efficient traversal in both directions.",
      "It simplifies insertion and deletion at both ends.",
      "It allows you to visit each node more than once without restarting.",
    ],
    correctAnswer:
      "It allows you to visit each node more than once without restarting.",
    explanation:
      "In a circular linked list, the last node points back to the first node, allowing you to traverse the list infinitely without needing to restart at the head.",
  },
  {
    question:
      "What is the difference between a singly linked list and a doubly linked list in terms of reverse traversal?",
    options: [
      "Singly linked lists can be traversed backward.",
      "Doubly linked lists allow reverse traversal by using the 'previous' pointer.",
      "There is no difference; both can be traversed backward.",
      "Singly linked lists are faster for reverse traversal.",
    ],
    correctAnswer:
      "Doubly linked lists allow reverse traversal by using the 'previous' pointer.",
    explanation:
      "Doubly linked lists maintain pointers to both the previous and next nodes, allowing traversal in both directions. Singly linked lists only maintain a pointer to the next node, so reverse traversal is not possible without modification.",
  },
  {
    question:
      "How would you remove the middle node from a linked list in one pass?",
    options: [
      "Find the middle node and delete it by updating the previous node's pointer.",
      "Reverse the linked list and remove the first node.",
      "Create a second linked list and copy all elements except the middle one.",
      "Find the middle node and remove the previous node.",
    ],
    correctAnswer:
      "Find the middle node and delete it by updating the previous node's pointer.",
    explanation:
      "To remove the middle node in one pass, you can use two pointers: one moving one node at a time, and the other moving two nodes at a time. When the fast pointer reaches the end, the slow pointer will be at the middle node, which can be deleted by updating the previous node's pointer.",
  },
  {
    question:
      "In a doubly linked list, what happens if both the previous and next pointers of a node are null?",
    options: [
      "The node is deleted.",
      "The node is the only node in the list.",
      "The node becomes the head of the list.",
      "The node becomes the tail of the list.",
    ],
    correctAnswer: "The node is the only node in the list.",
    explanation:
      "If both the previous and next pointers of a node are null, it means that the node is the only node in the doubly linked list, acting as both the head and tail.",
  },
  {
    question: "What is the time complexity of reversing a singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Reversing a singly linked list involves traversing the list once, which takes O(n) time complexity, where n is the number of nodes in the list.",
  },
  {
    question:
      "What is the effect of a deep copy of a linked list with a random pointer?",
    options: [
      "It only copies the next pointers.",
      "It copies both the next and random pointers, creating a new list.",
      "It copies the list structure but not the data.",
      "It creates an identical linked list with shared pointers.",
    ],
    correctAnswer:
      "It copies both the next and random pointers, creating a new list.",
    explanation:
      "A deep copy of a linked list with random pointers duplicates both the next and random pointers, ensuring that each node in the copied list is a new instance with the same structure as the original list.",
  },
  {
    question:
      "What is the time complexity of deleting the last node in a singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "To delete the last node in a singly linked list, you need to traverse the entire list to find the node before the last one, which makes the time complexity O(n).",
  },
  {
    question:
      "Which of the following operations is not possible in a singly linked list?",
    options: [
      "Accessing the previous node.",
      "Inserting at the head of the list.",
      "Traversing the list.",
      "Deleting a node given a pointer to it.",
    ],
    correctAnswer: "Accessing the previous node.",
    explanation:
      "In a singly linked list, nodes only contain a pointer to the next node, so you cannot directly access the previous node. To access the previous node, you must traverse the list from the head.",
  },
  {
    question:
      "What is the primary advantage of a doubly linked list over a singly linked list in terms of traversal?",
    options: [
      "Doubly linked lists use less memory.",
      "Doubly linked lists allow traversal in both directions.",
      "Doubly linked lists are faster for insertion.",
      "Doubly linked lists require less processing power.",
    ],
    correctAnswer: "Doubly linked lists allow traversal in both directions.",
    explanation:
      "The primary advantage of a doubly linked list is that it supports bidirectional traversal (both forward and backward), as each node contains two pointers: one to the next node and one to the previous node.",
  },
  {
    question:
      "How do you detect a cycle in a linked list using Floyd’s Cycle-Finding Algorithm?",
    options: [
      "Use a hash table to store visited nodes.",
      "Check if a node points back to itself.",
      "Use two pointers, one moving twice as fast as the other.",
      "Reverse the linked list and check for any loops.",
    ],
    correctAnswer: "Use two pointers, one moving twice as fast as the other.",
    explanation:
      "Floyd’s Cycle-Finding Algorithm (also known as the Tortoise and Hare algorithm) uses two pointers: one moves one step at a time, while the other moves two steps. If there is a cycle, the faster pointer will eventually catch up with the slower one.",
  },
  {
    question: "What is the primary use case for a circular linked list?",
    options: [
      "Queue implementation.",
      "Doubly linked list operations.",
      "Efficient traversal of a large dataset.",
      "Implementing a FIFO buffer.",
    ],
    correctAnswer: "Implementing a FIFO buffer.",
    explanation:
      "Circular linked lists are commonly used in implementing FIFO (First-In, First-Out) buffers, where the buffer's end wraps around to the beginning to maintain a continuous cycle.",
  },
  {
    question: "How would you implement a stack using a singly linked list?",
    options: [
      "Insert elements at the beginning and remove them from the beginning.",
      "Insert elements at the beginning and remove them from the end.",
      "Insert and remove elements from the middle.",
      "Insert elements at the end and remove them from the beginning.",
    ],
    correctAnswer:
      "Insert elements at the beginning and remove them from the beginning.",
    explanation:
      "A stack can be implemented using a singly linked list by inserting elements at the head (beginning) and removing elements from the head, which adheres to the LIFO (Last-In, First-Out) principle.",
  },
  {
    question:
      "In a doubly linked list, how would you delete a node when given only a pointer to the node to be deleted?",
    options: [
      "Set the previous node's next pointer to the next node.",
      "Set the next node's previous pointer to the previous node.",
      "Update the node’s next and previous pointers.",
      "Both the previous node and the next node need to be updated.",
    ],
    correctAnswer:
      "Both the previous node and the next node need to be updated.",
    explanation:
      "To delete a node in a doubly linked list when given a pointer to it, both the previous node’s next pointer and the next node’s previous pointer need to be updated to bypass the node.",
  },
  {
    question:
      "What is the effect of using a hash table to store the nodes of a linked list?",
    options: [
      "It reduces the time complexity of searching for an element.",
      "It speeds up insertion and deletion operations.",
      "It increases the space complexity of the list.",
      "It allows the list to be traversed faster.",
    ],
    correctAnswer:
      "It reduces the time complexity of searching for an element.",
    explanation:
      "Using a hash table can reduce the time complexity of searching for an element in a linked list from O(n) to O(1), allowing for faster access by storing the nodes in a key-value structure.",
  },
  {
    question:
      "How can you detect if a linked list contains a cycle in constant space?",
    options: [
      "Use two pointers, one moving at different speeds.",
      "Store visited nodes in an array.",
      "Reverse the linked list and check for cycles.",
      "Sort the linked list and check for duplicates.",
    ],
    correctAnswer: "Use two pointers, one moving at different speeds.",
    explanation:
      "To detect a cycle in constant space, you can use Floyd’s Cycle-Finding Algorithm, where one pointer moves one step at a time and the other moves two steps. If a cycle exists, the two pointers will eventually meet.",
  },
];
