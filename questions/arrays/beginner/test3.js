export const test3 = [
  {
    question:
      "What happens when you try to access an array index that is out of bounds in Java?",
    options: [
      "Throws an ArrayIndexOutOfBoundsException",
      "Returns null",
      "Returns -1",
      "Returns undefined",
    ],
    correctAnswer: "Throws an ArrayIndexOutOfBoundsException",
    explanation:
      "In Java, trying to access an index that is out of bounds results in an ArrayIndexOutOfBoundsException.",
  },
  {
    question: "How do you find the length of an array in C?",
    options: [
      "sizeof(arr) / sizeof(arr[0])",
      "arr.length",
      "arr.size()",
      "length(arr)",
    ],
    correctAnswer: "sizeof(arr) / sizeof(arr[0])",
    explanation:
      "In C, you can find the length of an array by dividing the size of the entire array by the size of a single element.",
  },
  {
    question: "In JavaScript, what does the `splice()` method do?",
    options: [
      "It removes or adds elements to an array",
      "It only removes elements from an array",
      "It only adds elements to an array",
      "It reverses the elements of an array",
    ],
    correctAnswer: "It removes or adds elements to an array",
    explanation:
      "In JavaScript, `splice()` is a versatile method that can add or remove elements from an array.",
  },
  {
    question: "Which method is used to sort an array in Python?",
    options: ["sort()", "order()", "arrange()", "list()"],
    correctAnswer: "sort()",
    explanation:
      "In Python, the `sort()` method sorts the elements of an array in place.",
  },
  {
    question:
      "What is the difference between `pop()` and `shift()` in JavaScript?",
    options: [
      "pop() removes the last element, shift() removes the first",
      "shift() removes the last element, pop() removes the first",
      "Both remove the last element",
      "Both remove the first element",
    ],
    correctAnswer: "pop() removes the last element, shift() removes the first",
    explanation:
      "In JavaScript, `pop()` removes the last element of an array, while `shift()` removes the first.",
  },
  {
    question:
      "What will be the output of this code in Python: `arr = [1, 2, 3]; arr.append(4); print(arr)`?",
    options: ["[1, 2, 3, 4]", "[1, 2, 3]", "[4]", "[1, 4, 2, 3]"],
    correctAnswer: "[1, 2, 3, 4]",
    explanation:
      "The `append()` method in Python adds the specified element to the end of the list, so the output will be [1, 2, 3, 4].",
  },
  {
    question: "What is the primary benefit of using arrays?",
    options: [
      "Efficient access to elements by index",
      "They can grow and shrink dynamically",
      "They store elements of different types",
      "They use more memory than other data structures",
    ],
    correctAnswer: "Efficient access to elements by index",
    explanation:
      "Arrays allow efficient random access to their elements using an index.",
  },
  {
    question: "How are elements stored in arrays?",
    options: [
      "In contiguous memory locations",
      "In scattered memory locations",
      "In reverse order",
      "In alphabetical order",
    ],
    correctAnswer: "In contiguous memory locations",
    explanation:
      "In most programming languages, arrays are stored in contiguous memory locations, making element access efficient.",
  },
  {
    question:
      "Which array method adds one or more elements to the beginning of an array in JavaScript?",
    options: ["unshift()", "push()", "pop()", "shift()"],
    correctAnswer: "unshift()",
    explanation:
      "The `unshift()` method adds one or more elements to the beginning of an array in JavaScript.",
  },
  {
    question: "Which of the following is true about arrays in Java?",
    options: [
      "Their size is fixed once declared",
      "They can store elements of different types",
      "They can grow dynamically",
      "They are implemented as a linked list",
    ],
    correctAnswer: "Their size is fixed once declared",
    explanation:
      "In Java, once an array is declared, its size cannot be changed.",
  },
  {
    question: "In JavaScript, what does the `map()` method do?",
    options: [
      "Creates a new array by calling a function on every element in the array",
      "Removes elements from the array",
      "Adds elements to the array",
      "Sorts the array",
    ],
    correctAnswer:
      "Creates a new array by calling a function on every element in the array",
    explanation:
      "The `map()` method in JavaScript creates a new array by applying a provided function to every element in the calling array.",
  },
  {
    question:
      "What is the time complexity of inserting an element at the end of an array in most programming languages?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Inserting an element at the end of an array typically has a time complexity of O(1) because it involves adding the element without shifting any existing elements.",
  },
  {
    question:
      "In Python, which method would you use to find the index of the first occurrence of an element in a list?",
    options: ["list.index()", "list.find()", "list.search()", "list.locate()"],
    correctAnswer: "list.index()",
    explanation:
      "The `index()` method in Python returns the index of the first occurrence of a specified element in a list.",
  },
  {
    question: "Which of the following is true about arrays in Python?",
    options: [
      "Arrays and lists are different types of data structures",
      "Arrays can store elements of different types",
      "Lists and arrays are interchangeable terms in Python",
      "Lists are a type of array in Python",
    ],
    correctAnswer: "Arrays and lists are different types of data structures",
    explanation:
      "In Python, lists and arrays are distinct data structures, although lists are more commonly used for storing elements.",
  },
  {
    question: "How do you remove the last element from an array in JavaScript?",
    options: [
      "array.pop()",
      "array.remove()",
      "array.shift()",
      "array.delete()",
    ],
    correctAnswer: "array.pop()",
    explanation:
      "In JavaScript, `pop()` is used to remove the last element of an array.",
  },
  {
    question: "What does the `filter()` method do in JavaScript?",
    options: [
      "Creates a new array with elements that pass a test",
      "Sorts the array in ascending order",
      "Removes null or undefined values from an array",
      "Modifies the original array",
    ],
    correctAnswer: "Creates a new array with elements that pass a test",
    explanation:
      "The `filter()` method in JavaScript creates a new array with all elements that pass the test implemented by the provided function.",
  },
  {
    question: "In C, how is memory allocated for an array?",
    options: [
      "Memory is allocated in contiguous blocks",
      "Memory is dynamically allocated",
      "Memory is randomly allocated",
      "Memory is allocated from the heap",
    ],
    correctAnswer: "Memory is allocated in contiguous blocks",
    explanation:
      "In C, arrays are stored in contiguous memory blocks, which allows for fast indexing.",
  },
  {
    question: "How do you access the third element of an array `arr` in Java?",
    options: ["arr[2]", "arr[3]", "arr.get(3)", "arr(2)"],
    correctAnswer: "arr[2]",
    explanation:
      "In Java, array indexing starts at 0, so the third element is accessed using `arr[2]`.",
  },
  {
    question:
      "What will `console.log([1, 2, 3] instanceof Array);` output in JavaScript?",
    options: ["true", "false", "undefined", "TypeError"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, the `instanceof` operator checks whether an object is an instance of a specific type, and `Array` is a valid type.",
  },
  {
    question:
      "In Python, which method can you use to combine two lists into one?",
    options: [
      "list1.extend(list2)",
      "list1.concat(list2)",
      "list1.join(list2)",
      "list1.merge(list2)",
    ],
    correctAnswer: "list1.extend(list2)",
    explanation:
      "In Python, the `extend()` method appends elements from the second list to the end of the first list.",
  },
];
