export const test3 = [
  {
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    options: ["pop()", "shift()", "slice()", "delete()"],
    correctAnswer: "pop()",
    explanation:
      "The `pop()` method removes the last element from an array and returns that element.",
  },
  {
    question: "How can you check if an array is empty in JavaScript?",
    options: [
      "arr.length === 0",
      "arr.isEmpty()",
      "arr.size() === 0",
      "arr.empty()",
    ],
    correctAnswer: "arr.length === 0",
    explanation:
      "To check if an array is empty in JavaScript, we compare its `length` property to `0`.",
  },
  {
    question: "In Python, how do you merge two lists `list1` and `list2`?",
    options: [
      "list1 + list2",
      "merge(list1, list2)",
      "list1.extend(list2)",
      "Both A and C",
    ],
    correctAnswer: "Both A and C",
    explanation:
      "In Python, both the `+` operator and `extend()` method can be used to merge two lists.",
  },
  {
    question:
      "In C++, what is the syntax to access the second element of an array `arr`?",
    options: ["arr[1]", "arr(2)", "arr[2]", "arr.get(1)"],
    correctAnswer: "arr[1]",
    explanation:
      "Arrays are zero-indexed in C++, so the second element is accessed using index `1`.",
  },
  {
    question:
      "In JavaScript, which method is used to add an element at the end of an array?",
    options: ["push()", "insert()", "append()", "unshift()"],
    correctAnswer: "push()",
    explanation:
      "The `push()` method adds one or more elements to the end of an array.",
  },
  {
    question: "How can you extract the first element of an array in Python?",
    options: ["arr.pop(0)", "arr.shift()", "arr.slice(0, 1)", "arr[0]"],
    correctAnswer: "arr[0]",
    explanation:
      "In Python, arrays (lists) can be accessed by indexing, so `arr[0]` extracts the first element.",
  },
  {
    question:
      "Which method in JavaScript returns a shallow copy of a portion of an array?",
    options: ["copy()", "slice()", "splice()", "clone()"],
    correctAnswer: "slice()",
    explanation:
      "The `slice()` method creates a shallow copy of a portion of an array and returns it.",
  },
  {
    question:
      "What is the result of `arr.filter()` in JavaScript if `arr = [1, 2, 3, 4, 5]` and the function passed is `x => x > 2`?",
    options: ["[1, 2, 3]", "[3, 4, 5]", "[2, 3, 4, 5]", "[4, 5]"],
    correctAnswer: "[3, 4, 5]",
    explanation:
      "The `filter()` method returns an array with elements that satisfy the provided function. In this case, elements greater than `2` are `[3, 4, 5]`.",
  },
  {
    question:
      "What will be the result of `arr.slice(2, -1)` if `arr = [1, 2, 3, 4, 5]`?",
    options: ["[3, 4]", "[2, 3, 4]", "[3, 4, 5]", "[4, 5]"],
    correctAnswer: "[3, 4]",
    explanation:
      "The `slice()` method extracts elements from index `2` to the second-to-last element. Hence, it returns `[3, 4]`.",
  },
  {
    question:
      "Which of the following methods will not change the original array?",
    options: ["push()", "pop()", "reverse()", "slice()"],
    correctAnswer: "slice()",
    explanation:
      "The `slice()` method returns a shallow copy of the array and does not mutate the original array.",
  },
  {
    question: "In C++, how do you declare a multi-dimensional array?",
    options: [
      "int arr[10][10];",
      "array[10][10] arr;",
      "array<int, 10> arr[10];",
      "int[10, 10] arr;",
    ],
    correctAnswer: "int arr[10][10];",
    explanation:
      "In C++, a multi-dimensional array is declared by specifying the dimensions in square brackets, such as `int arr[10][10];`.",
  },
  {
    question:
      "Which of the following methods in JavaScript can be used to find the index of an element in an array?",
    options: ["findIndex()", "indexOf()", "getIndex()", "Both A and B"],
    correctAnswer: "Both A and B",
    explanation:
      "Both `findIndex()` and `indexOf()` methods can be used to find the index of an element in an array. `findIndex()` is more flexible as it allows using a custom callback function.",
  },
  {
    question: "How can you clone an array in JavaScript?",
    options: ["arr.clone()", "arr.copy()", "arr.slice()", "arr.duplicate()"],
    correctAnswer: "arr.slice()",
    explanation:
      "The `slice()` method creates a shallow copy of an array. It can be used to clone an array.",
  },
  {
    question:
      "In Python, which method is used to insert an element at a specific position in a list?",
    options: ["insert()", "add()", "push()", "insertAt()"],
    correctAnswer: "insert()",
    explanation:
      "The `insert()` method in Python is used to insert an element at a specific index in a list.",
  },
  {
    question:
      "In C++, what does `arr[3]` refer to in an array `int arr[5] = {1, 2, 3, 4, 5};`?",
    options: ["4", "5", "3", "Index out of bounds"],
    correctAnswer: "4",
    explanation:
      "Arrays are zero-indexed in C++, so `arr[3]` refers to the fourth element, which is `4`.",
  },
  {
    question:
      "In JavaScript, which method can be used to split an array into chunks of a specified size?",
    options: ["chunk()", "split()", "slice()", "Array.prototype.chunk()"],
    correctAnswer: "None of the above",
    explanation:
      "JavaScript does not have a built-in method to split arrays into chunks. You can implement your own logic or use a library like Lodash (`_.chunk()`).",
  },
  {
    question:
      "Which method can be used to check if an array contains a specific element in JavaScript?",
    options: ["has()", "includes()", "contains()", "find()"],
    correctAnswer: "includes()",
    explanation:
      "The `includes()` method in JavaScript checks if an array contains a specific element.",
  },
  {
    question: "In Python, how do you find the maximum value in a list?",
    options: ["max(list)", "list.max()", "max(list[])", "findmax(list)"],
    correctAnswer: "max(list)",
    explanation:
      "The `max()` function is used to find the maximum value in a list in Python.",
  },
  {
    question:
      "In JavaScript, which method is used to remove elements from an array and optionally replace them with new elements?",
    options: ["splice()", "slice()", "filter()", "pop()"],
    correctAnswer: "splice()",
    explanation:
      "The `splice()` method in JavaScript can be used to remove elements from an array and optionally add new elements in their place.",
  },
  {
    question: "How can you find the length of an array in Python?",
    options: ["len()", "length()", "size()", "count()"],
    correctAnswer: "len()",
    explanation:
      "The `len()` function in Python is used to find the number of elements in an array (or list).",
  },
  {
    question: "What is the result of `arr.unshift(0)` if `arr = [1, 2, 3]`?",
    options: ["[0, 1, 2, 3]", "[1, 2, 3, 0]", "[0]", "[1, 0, 2, 3]"],
    correctAnswer: "[0, 1, 2, 3]",
    explanation:
      "The `unshift()` method adds one or more elements to the beginning of an array. In this case, `0` is added to the beginning of the array.",
  },
];
