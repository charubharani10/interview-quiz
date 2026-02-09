export const test1 = [
  {
    question:
      "In a circular doubly linked list, what is the key difference between deleting the head and deleting a random node?",
    options: [
      "The head requires updating only the previous pointer of the last node.",
      "The head requires updating both next and previous pointers of the adjacent nodes.",
      "The random node deletion requires more time complexity.",
      "The head node is not properly linked in circular structure.",
    ],
    correctAnswer:
      "The head requires updating both next and previous pointers of the adjacent nodes.",
    explanation:
      "When deleting the head node in a circular doubly linked list, both the previous and next nodes' pointers need to be updated to preserve the circular structure.",
  },
  {
    question:
      "What is the time complexity of inserting a new node at the end of a doubly linked list when no tail pointer is maintained?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Without a tail pointer, insertion at the end requires traversing the list from the head to the last node, resulting in O(n) time complexity.",
  },
  {
    question:
      "Which of the following is a key advantage of a doubly linked list over a singly linked list?",
    options: [
      "Efficient memory usage",
      "Bidirectional traversal and easier deletion of nodes from the tail",
      "Simpler insertion logic",
      "Reduced time complexity for insertion",
    ],
    correctAnswer:
      "Bidirectional traversal and easier deletion of nodes from the tail",
    explanation:
      "Doubly linked lists allow bidirectional traversal and enable efficient deletion from the tail, unlike singly linked lists where you must traverse to find the previous node.",
  },
  {
    question:
      "In which scenario would you use a circular doubly linked list over a singly circular linked list?",
    options: [
      "When you need constant time access to the previous node.",
      "When memory constraints are more important than traversal efficiency.",
      "When you want to perform reverse traversals.",
      "When working with databases.",
    ],
    correctAnswer: "When you need constant time access to the previous node.",
    explanation:
      "A circular doubly linked list provides direct access to both the previous and next nodes, making reverse traversals efficient.",
  },
  {
    question:
      "What is the most efficient method for merging two sorted linked lists?",
    options: [
      "Iterate over both lists and insert nodes into a new list in sorted order.",
      "Iterate over both lists and append nodes in an unsorted order.",
      "Directly concatenate the two lists.",
      "Reversing both lists and then merging them.",
    ],
    correctAnswer:
      "Iterate over both lists and insert nodes into a new list in sorted order.",
    explanation:
      "Merging two sorted linked lists requires iterating through both lists and inserting nodes into a new list while maintaining the sorted order.",
  },
  {
    question:
      "What is the space complexity of reversing a singly linked list iteratively?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Reversing a singly linked list iteratively can be done using only a constant amount of extra space for pointers, resulting in O(1) space complexity.",
  },
  {
    question:
      "What is the time complexity of searching for an element in a doubly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Searching for an element in a doubly linked list involves traversing the list node by node, which results in O(n) time complexity.",
  },
  {
    question:
      "What would happen if you accidentally set both the next and previous pointers of a doubly linked list node to null?",
    options: [
      "The node would be disconnected from the list.",
      "The node would cause a memory leak.",
      "The linked list would become circular.",
      "The node would point to itself.",
    ],
    correctAnswer: "The node would be disconnected from the list.",
    explanation:
      "If both the next and previous pointers are set to null, the node would be effectively disconnected from the list, breaking the linked structure.",
  },
  {
    question:
      "What is the key benefit of using a skip list instead of a linked list for ordered data?",
    options: [
      "Lower space complexity",
      "Better search time due to multiple levels of indices",
      "Simpler implementation",
      "More efficient memory usage",
    ],
    correctAnswer: "Better search time due to multiple levels of indices",
    explanation:
      "Skip lists use multiple levels of pointers, allowing for faster search operations (O(log n) time) compared to standard linked lists (O(n) time).",
  },
  {
    question:
      "In a singly linked list, what is the most efficient way to remove the middle node without traversing the list twice?",
    options: [
      "Find the node's predecessor and delete it directly.",
      "Keep a pointer to the node before and after the middle node, then unlink it.",
      "Traverse the list and reverse it, then remove the middle node.",
      "Create a new linked list and copy all nodes except the middle one.",
    ],
    correctAnswer: "Find the node's predecessor and delete it directly.",
    explanation:
      "To remove the middle node efficiently in a singly linked list, you can update the previous node’s pointer to skip over the middle node.",
  },
  {
    question:
      "In a self-adjusting linked list, what is the primary purpose of moving frequently accessed nodes to the front?",
    options: [
      "To optimize memory usage.",
      "To reduce the time complexity of accessing frequently used nodes.",
      "To simplify list traversal.",
      "To minimize pointer updates.",
    ],
    correctAnswer:
      "To reduce the time complexity of accessing frequently used nodes.",
    explanation:
      "In a self-adjusting linked list, moving frequently accessed nodes to the front reduces the time complexity of future accesses, improving performance for repeated lookups.",
  },
  {
    question:
      "What is the most significant disadvantage of using a doubly linked list over a singly linked list?",
    options: [
      "Increased space complexity due to an additional pointer.",
      "Difficulty in inserting nodes.",
      "Slower traversal performance.",
      "Memory management issues.",
    ],
    correctAnswer: "Increased space complexity due to an additional pointer.",
    explanation:
      "Doubly linked lists require extra memory to store the additional pointer for each node (previous and next), which increases space complexity compared to singly linked lists.",
  },
  {
    question:
      "In a circular linked list, how do you handle the situation when the head node is deleted?",
    options: [
      "Set the previous node's next pointer to null.",
      "Make the next node the new head and update the last node's next pointer.",
      "Move the head pointer to the next node.",
      "Remove the node and update the tail pointer.",
    ],
    correctAnswer:
      "Make the next node the new head and update the last node's next pointer.",
    explanation:
      "When the head node is deleted in a circular linked list, you need to make the next node the new head and update the last node's next pointer to maintain the circular structure.",
  },
  {
    question:
      "What is the key advantage of using a skip list over a standard linked list?",
    options: [
      "Lower space complexity.",
      "Constant-time access to the middle node.",
      "Faster search and insertion due to multiple levels.",
      "Easier to implement.",
    ],
    correctAnswer: "Faster search and insertion due to multiple levels.",
    explanation:
      "Skip lists provide multiple levels of pointers, allowing faster search, insertion, and deletion operations by skipping over nodes and reducing the number of comparisons.",
  },
  {
    question:
      "In a linked list, what is the time complexity of finding the nth node in a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "In a singly linked list, you need to traverse from the head to the nth node, which takes linear time, O(n).",
  },
  {
    question:
      "What is the primary purpose of a tail pointer in a doubly linked list?",
    options: [
      "To track the size of the list.",
      "To enable fast insertion at the tail.",
      "To improve search performance.",
      "To allow faster deletion from the head.",
    ],
    correctAnswer: "To enable fast insertion at the tail.",
    explanation:
      "The tail pointer in a doubly linked list allows direct access to the last node, making it efficient for inserting nodes at the tail without traversing the entire list.",
  },
  {
    question:
      "What is the time complexity of deleting the last node in a singly linked list without a tail pointer?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "Without a tail pointer, to delete the last node in a singly linked list, you need to traverse the entire list to find the second-to-last node, resulting in O(n) time complexity.",
  },
  {
    question:
      "What is the primary challenge in implementing a linked list with random access?",
    options: [
      "Nodes may be scattered in memory.",
      "The list is not easily extendable.",
      "Traversal complexity is linear.",
      "All of the above.",
    ],
    correctAnswer: "Nodes may be scattered in memory.",
    explanation:
      "Linked lists do not provide direct access to elements like arrays. Nodes are scattered in memory, so accessing random elements requires traversing from the head, leading to linear time complexity.",
  },
  {
    question:
      "What happens if a cycle is introduced into a singly linked list?",
    options: [
      "It breaks the list into two parts.",
      "The list becomes circular and leads to an infinite loop during traversal.",
      "It creates a self-adjusting list.",
      "The list becomes doubly linked.",
    ],
    correctAnswer:
      "The list becomes circular and leads to an infinite loop during traversal.",
    explanation:
      "Introducing a cycle in a singly linked list makes it circular, causing infinite loops during traversal unless handled properly.",
  },
  {
    question:
      "Which of the following operations on a doubly linked list takes O(1) time complexity?",
    options: [
      "Insertion at the tail.",
      "Deletion from the head.",
      "Traversal from head to tail.",
      "Search for an element.",
    ],
    correctAnswer: "Insertion at the tail.",
    explanation:
      "In a doubly linked list, insertion at the tail can be done in O(1) time if the tail pointer is maintained, as you can directly access the last node.",
  },
];
