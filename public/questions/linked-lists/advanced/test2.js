export const test2 = [
  {
    question:
      "In a circular doubly linked list, what is the primary advantage of using two pointers (head and tail) instead of just one?",
    options: [
      "To simplify node deletion.",
      "To make traversal easier in both directions.",
      "To reduce space complexity.",
      "To avoid cycle detection issues.",
    ],
    correctAnswer: "To make traversal easier in both directions.",
    explanation:
      "Using both head and tail pointers in a circular doubly linked list allows easier traversal in both directions, improving the performance for both forward and backward traversals.",
  },
  {
    question: "How would you detect a cycle in a singly linked list?",
    options: [
      "By checking if the next pointer of a node points to null.",
      "By using two pointers (slow and fast) and checking if they meet.",
      "By storing visited nodes in a hash table.",
      "Both B and C.",
    ],
    correctAnswer: "Both B and C.",
    explanation:
      "To detect a cycle in a singly linked list, you can use either the slow and fast pointer technique (Floyd's Cycle Detection Algorithm) or store visited nodes in a hash table for lookup.",
  },
  {
    question:
      "What is the primary disadvantage of using a hash table to store elements in a linked list?",
    options: [
      "Higher memory usage due to pointer overhead.",
      "Increased lookup time for non-sequential access.",
      "Potential for hash collisions and slowdowns.",
      "Limited flexibility in handling dynamic sizes.",
    ],
    correctAnswer: "Potential for hash collisions and slowdowns.",
    explanation:
      "Hash tables are prone to hash collisions, which can slow down access if the table is not well-designed, leading to inefficient operations on the linked list.",
  },
  {
    question:
      "In which scenario would you prefer to use a doubly linked list over a singly linked list?",
    options: [
      "When you need to traverse the list in both directions.",
      "When space complexity is a major concern.",
      "When you need to access nodes randomly.",
      "When you need to delete nodes from both ends of the list.",
    ],
    correctAnswer: "When you need to traverse the list in both directions.",
    explanation:
      "A doubly linked list is more suited for scenarios where you need to traverse the list in both directions, as it provides both forward and backward pointers.",
  },
  {
    question: "What is the time complexity of reversing a singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Reversing a singly linked list requires traversing through the list and changing the direction of each pointer, which takes linear time, O(n).",
  },
  {
    question:
      "Which of the following is a key property of a sorted linked list?",
    options: [
      "It maintains the nodes in non-decreasing order.",
      "It allows for constant-time access to elements.",
      "It uses a hash table to store values.",
      "It can only be traversed from head to tail.",
    ],
    correctAnswer: "It maintains the nodes in non-decreasing order.",
    explanation:
      "A sorted linked list keeps the elements in non-decreasing order, making it useful for binary search or other ordered operations.",
  },
  {
    question:
      "In a skip list, how do the nodes on higher levels help improve search performance?",
    options: [
      "They store random values for faster searching.",
      "They skip over multiple nodes, reducing search time.",
      "They eliminate duplicate nodes.",
      "They sort the nodes by their value.",
    ],
    correctAnswer: "They skip over multiple nodes, reducing search time.",
    explanation:
      "Higher-level nodes in a skip list act as express lanes, skipping over multiple nodes and reducing the number of comparisons needed to find an element, improving search time.",
  },
  {
    question:
      "Which of the following operations on a doubly linked list has a time complexity of O(1)?",
    options: [
      "Inserting a new node at the head.",
      "Searching for an element.",
      "Deleting a specific node after traversal.",
      "Traversing the entire list.",
    ],
    correctAnswer: "Inserting a new node at the head.",
    explanation:
      "Inserting a new node at the head of a doubly linked list can be done in O(1) time, as it only requires updating the head pointer and the previous pointer of the old head node.",
  },
  {
    question:
      "What is the impact of using an array of linked lists to implement a hash table?",
    options: [
      "It improves memory efficiency.",
      "It reduces hash collisions.",
      "It allows for constant time access to elements.",
      "It increases space complexity due to the overhead of linked lists.",
    ],
    correctAnswer:
      "It increases space complexity due to the overhead of linked lists.",
    explanation:
      "Using an array of linked lists to implement a hash table incurs extra space overhead for storing linked list pointers, which increases space complexity compared to using arrays or other data structures.",
  },
  {
    question:
      "What is the time complexity of inserting a new node in the middle of a doubly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Inserting a new node at a known position in a doubly linked list can be done in O(1) time if you already have a reference to the node before which the new node will be inserted.",
  },
  {
    question:
      "In a balanced binary search tree implemented using a linked list, how does the linked list help with balancing?",
    options: [
      "By storing the elements in sorted order.",
      "By reducing memory usage due to pointer overhead.",
      "By maintaining a linked list of pointers to parent nodes.",
      "By eliminating the need for tree rotations.",
    ],
    correctAnswer: "By storing the elements in sorted order.",
    explanation:
      "A balanced binary search tree often stores elements in a linked list in sorted order to maintain balance. This structure helps with efficient insertion, deletion, and search operations.",
  },
  {
    question:
      "What is the primary advantage of using a self-adjusting linked list over a regular singly linked list?",
    options: [
      "It supports O(1) time for insertion at the head.",
      "It automatically moves frequently accessed nodes to the front.",
      "It eliminates the need for a tail pointer.",
      "It reduces space complexity by avoiding pointers.",
    ],
    correctAnswer:
      "It automatically moves frequently accessed nodes to the front.",
    explanation:
      "A self-adjusting linked list moves frequently accessed nodes closer to the front of the list, improving the time complexity for accessing those nodes.",
  },
  {
    question:
      "How does a doubly linked list facilitate efficient removal of a node given only a reference to that node?",
    options: [
      "The node contains a reference to the head and tail.",
      "The node contains both a previous and next pointer.",
      "The node stores its index in the list.",
      "The node uses a hash map to find the previous node.",
    ],
    correctAnswer: "The node contains both a previous and next pointer.",
    explanation:
      "A doubly linked list allows efficient removal of a node because each node has a reference to both its previous and next nodes, enabling direct access for removal without traversing the list.",
  },
  {
    question:
      "In a priority queue implemented using a linked list, how is the ordering of elements maintained?",
    options: [
      "Elements are added at the head based on priority.",
      "Elements are sorted after every insertion.",
      "Elements are inserted in the correct order by searching for the right position.",
      "The queue is unordered and sorted on retrieval.",
    ],
    correctAnswer:
      "Elements are inserted in the correct order by searching for the right position.",
    explanation:
      "In a priority queue implemented with a linked list, elements are inserted in the appropriate order based on priority. This insertion requires searching through the list to find the correct position.",
  },
  {
    question:
      "What is the main drawback of using a singly linked list for implementing a stack?",
    options: [
      "No support for dynamic memory allocation.",
      "Limited ability to traverse the stack in reverse order.",
      "Difficulty in resizing the stack dynamically.",
      "Increased space complexity due to pointers.",
    ],
    correctAnswer: "Limited ability to traverse the stack in reverse order.",
    explanation:
      "A singly linked list used for a stack does not allow efficient traversal in reverse order since there is no pointer to the previous element, which limits access to the stack's contents.",
  },
  {
    question:
      "What is the space complexity of storing a singly linked list of n nodes?",
    options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "The space complexity of a singly linked list with n nodes is O(n), as each node requires space to store the data and the pointer to the next node.",
  },
  {
    question:
      "In a skip list, how does the number of levels (or layers) affect the performance of search operations?",
    options: [
      "More levels reduce search complexity.",
      "More levels increase search complexity.",
      "The number of levels has no impact on search performance.",
      "Each level has a different performance cost.",
    ],
    correctAnswer: "More levels reduce search complexity.",
    explanation:
      "In a skip list, more levels allow for faster search operations by providing shortcuts to skip over multiple nodes, reducing the number of comparisons needed.",
  },
  {
    question:
      "What is the worst-case time complexity of finding the length of a singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Finding the length of a singly linked list requires traversing the entire list from head to tail, resulting in a time complexity of O(n).",
  },
  {
    question:
      "In a circular doubly linked list, how is the connection between the head and tail maintained?",
    options: [
      "The tail's next pointer points to the head.",
      "The head's next pointer points to the tail.",
      "Both the head and tail point to null.",
      "The tail contains a special end marker.",
    ],
    correctAnswer: "The tail's next pointer points to the head.",
    explanation:
      "In a circular doubly linked list, the tail's next pointer points to the head, making the list circular and allowing for continuous traversal.",
  },
  {
    question:
      "What is the difference between a singly linked list and a doubly linked list in terms of memory usage?",
    options: [
      "A singly linked list uses more memory because it stores two pointers per node.",
      "A doubly linked list uses more memory because it stores an additional pointer per node.",
      "A singly linked list uses more memory due to additional data.",
      "Memory usage is the same for both linked lists.",
    ],
    correctAnswer:
      "A doubly linked list uses more memory because it stores an additional pointer per node.",
    explanation:
      "A doubly linked list requires extra memory to store a pointer to the previous node in addition to the next pointer, making it use more memory compared to a singly linked list.",
  },
];
