export const test5 = [
  {
    question:
      "What will `arr[3]` return if `arr = [1, 2, 3, 4, 5]` in JavaScript?",
    options: ["3", "4", "5", "undefined"],
    correctAnswer: "4",
    explanation:
      "In JavaScript, arrays are zero-indexed. So, `arr[3]` returns the fourth element of the array, which is `4`.",
  },
  {
    question: "In Python, how do you create an empty array?",
    options: ["[]", "Array()", "new Array()", "empty()"],
    correctAnswer: "[]",
    explanation:
      "In Python, an empty list (which can be used as an array) is created by using `[]`.",
  },
  {
    question:
      "How would you remove the last element from an array in JavaScript?",
    options: ["pop()", "remove()", "shift()", "delete()"],
    correctAnswer: "pop()",
    explanation:
      "The `pop()` method removes the last element from an array and returns that element in JavaScript.",
  },
  {
    question: "What does the `fill()` method do in JavaScript?",
    options: [
      "Fills an array with the given value from a specific index",
      "Sorts the array",
      "Deletes all elements in an array",
      "Removes duplicates from an array",
    ],
    correctAnswer: "Fills an array with the given value from a specific index",
    explanation:
      "The `fill()` method in JavaScript fills all the elements in an array with a specified value, starting from a given index.",
  },
  {
    question:
      "How would you create a new array in JavaScript with 5 elements, all initialized to 0?",
    options: [
      "Array(5).fill(0)",
      "Array(0).fill(5)",
      "new Array(0, 5)",
      "Array(5).init(0)",
    ],
    correctAnswer: "Array(5).fill(0)",
    explanation:
      "In JavaScript, you can create an array with 5 elements, all initialized to `0`, by using `Array(5).fill(0)`.",
  },
  {
    question:
      "What will `arr.length` return for the array `let arr = [10, 20, 30];`?",
    options: ["3", "10", "20", "undefined"],
    correctAnswer: "3",
    explanation:
      "The `length` property returns the number of elements in an array, which in this case is `3`.",
  },
  {
    question:
      "In C, what function can be used to find the number of elements in an array?",
    options: ["size()", "length()", "sizeof()", "count()"],
    correctAnswer: "sizeof()",
    explanation:
      "In C, the `sizeof()` function can be used to calculate the size of an array in bytes. To find the number of elements, divide the total size of the array by the size of a single element.",
  },
  {
    question:
      "Which of the following methods can be used to merge two arrays in JavaScript?",
    options: ["concat()", "merge()", "join()", "add()"],
    correctAnswer: "concat()",
    explanation:
      "In JavaScript, the `concat()` method is used to merge two or more arrays into a single array.",
  },
  {
    question: "In Python, what is the index of the first element of a list?",
    options: ["1", "0", "None", "-1"],
    correctAnswer: "0",
    explanation:
      "In Python, lists are zero-indexed, meaning the index of the first element is `0`.",
  },
  {
    question:
      "In JavaScript, what will be the output of `['a', 'b', 'c'].toString()`?",
    options: ["['a', 'b', 'c']", "'a,b,c'", "a b c", "['a', 'b', 'c'].join()"],
    correctAnswer: "'a,b,c'",
    explanation:
      "The `toString()` method in JavaScript converts the array to a string, with elements separated by commas.",
  },
  {
    question:
      "What is the result of the expression `[1, 2, 3].length` in JavaScript?",
    options: ["3", "2", "undefined", "1"],
    correctAnswer: "3",
    explanation:
      "The `length` property of an array returns the number of elements in the array, which in this case is `3`.",
  },
  {
    question:
      "Which of the following methods can be used to find the largest element in an array in JavaScript?",
    options: ["max()", "largest()", "Math.max()", "getMax()"],
    correctAnswer: "Math.max()",
    explanation:
      "The `Math.max()` function can be used to find the largest number in an array when combined with the `apply()` method.",
  },
  {
    question:
      "In Python, what method is used to add an element to the end of a list?",
    options: ["append()", "push()", "add()", "insert()"],
    correctAnswer: "append()",
    explanation:
      "In Python, the `append()` method is used to add an element to the end of a list.",
  },
  {
    question: "What does the `shift()` method do in JavaScript?",
    options: [
      "Removes the first element of an array",
      "Adds a new element at the end of an array",
      "Reverses the array",
      "Sorts the array",
    ],
    correctAnswer: "Removes the first element of an array",
    explanation:
      "The `shift()` method in JavaScript removes the first element from an array and shifts the remaining elements to a lower index.",
  },
  {
    question:
      "In C++, which of the following is used to declare an array of 10 integers?",
    options: [
      "int arr[10];",
      "int arr(10);",
      "array<int, 10> arr;",
      "array[10] int arr;",
    ],
    correctAnswer: "int arr[10];",
    explanation:
      "In C++, an array of 10 integers is declared using the syntax `int arr[10];`.",
  },
  {
    question:
      "How can you find the index of the first occurrence of an element in an array in Python?",
    options: ["index()", "find()", "locate()", "position()"],
    correctAnswer: "index()",
    explanation:
      "In Python, the `index()` method returns the index of the first occurrence of the specified value in the list.",
  },
  {
    question: "What does the `splice()` method do in JavaScript?",
    options: [
      "Adds and/or removes elements from an array",
      "Finds an element in an array",
      "Reverses an array",
      "Sorts an array",
    ],
    correctAnswer: "Adds and/or removes elements from an array",
    explanation:
      "The `splice()` method in JavaScript can be used to add and/or remove elements from an array at a specific index.",
  },
  {
    question:
      "How would you add multiple elements to the end of an array in JavaScript?",
    options: ["push()", "concat()", "unshift()", "splice()"],
    correctAnswer: "push()",
    explanation:
      "The `push()` method in JavaScript adds one or more elements to the end of an array.",
  },
  {
    question: "In Java, how do you declare an array of 5 integers?",
    options: [
      "int arr[5];",
      "int arr = new int[5];",
      "int[] arr = new int[5];",
      "int arr[] = {1, 2, 3, 4, 5};",
    ],
    correctAnswer: "int[] arr = new int[5];",
    explanation:
      "In Java, arrays are declared using the syntax `int[] arr = new int[5];` where `5` is the number of elements.",
  },
  {
    question:
      "Which of the following methods can be used to remove all elements from an array in JavaScript?",
    options: ["clear()", "flush()", "empty()", "length = 0"],
    correctAnswer: "length = 0",
    explanation:
      "In JavaScript, setting an array's `length` property to `0` effectively removes all elements from the array.",
  },
];
