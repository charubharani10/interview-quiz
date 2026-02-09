export const test1 = [
  {
    question:
      "In JavaScript, what does `arr.slice(1, 4)` return if `arr = [0, 1, 2, 3, 4, 5]`?",
    options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[0, 1, 2, 3]", "[1, 2, 3, 4, 5]"],
    correctAnswer: "[1, 2, 3]",
    explanation:
      "The `slice()` method extracts a section of an array without modifying the original array. It returns elements starting from index `1` up to, but not including, index `4`.",
  },
  {
    question:
      "In Python, how can you reverse a list without modifying the original list?",
    options: [
      "list.reverse()",
      "reversed(list)",
      "list[::-1]",
      "reverse(list)",
    ],
    correctAnswer: "reversed(list)",
    explanation:
      "The `reversed()` function returns a reverse iterator, without modifying the original list.",
  },
  {
    question:
      "Which method in JavaScript is used to merge multiple arrays into one?",
    options: ["concat()", "join()", "merge()", "combine()"],
    correctAnswer: "concat()",
    explanation:
      "The `concat()` method merges two or more arrays into a single array without modifying the original arrays.",
  },
  {
    question:
      "How do you find the index of the last occurrence of an element in an array in JavaScript?",
    options: ["indexOf()", "findIndex()", "lastIndexOf()", "search()"],
    correctAnswer: "lastIndexOf()",
    explanation:
      "The `lastIndexOf()` method returns the last index at which a given element appears in the array.",
  },
  {
    question: "In C++, how can you initialize an array of 5 integers?",
    options: [
      "int arr[5] = {1, 2, 3, 4, 5};",
      "int arr(5) = {1, 2, 3, 4, 5};",
      "int[] arr = {1, 2, 3, 4, 5};",
      "array<int> arr = {1, 2, 3, 4, 5};",
    ],
    correctAnswer: "int arr[5] = {1, 2, 3, 4, 5};",
    explanation:
      "In C++, arrays are initialized with the size and values inside curly braces like `int arr[5] = {1, 2, 3, 4, 5};`.",
  },
  {
    question:
      "In JavaScript, what is the result of `[].concat([1], [2], [3])`?",
    options: ["[1, 2, 3]", "[1, 2, 3, 3]", "[2, 3]", "[1, [2], [3]]"],
    correctAnswer: "[1, 2, 3]",
    explanation:
      "The `concat()` method merges all arrays into a single array, producing `[1, 2, 3]`.",
  },
  {
    question:
      "What is the output of `console.log([1, 2, 3, 4, 5].slice(2, 2))` in JavaScript?",
    options: ["[]", "[2]", "[3, 4]", "[3]"],
    correctAnswer: "[]",
    explanation:
      "The `slice()` method returns an empty array if the start and end indices are the same.",
  },
  {
    question:
      "How can you access the second-to-last element of an array `arr` in JavaScript?",
    options: [
      "arr[arr.length - 2]",
      "arr[-2]",
      "arr[1]",
      "arr[arr.length - 1]",
    ],
    correctAnswer: "arr[arr.length - 2]",
    explanation:
      "To access the second-to-last element, use the index `arr.length - 2`.",
  },
  {
    question:
      "Which of the following is the correct way to copy a subset of an array in Python?",
    options: [
      "arr.copy(2, 5)",
      "arr[2:5]",
      "copy(arr[2, 5])",
      "arr.slice(2, 5)",
    ],
    correctAnswer: "arr[2:5]",
    explanation:
      "In Python, slicing `arr[2:5]` returns a new list containing the elements from index 2 up to but not including index 5.",
  },
  {
    question:
      "In JavaScript, how would you remove an element from a specific index in an array?",
    options: ["remove(index)", "splice(index, 1)", "pop()", "shift()"],
    correctAnswer: "splice(index, 1)",
    explanation:
      "The `splice()` method can be used to remove elements from a specific index by providing the index and the number of elements to remove.",
  },
  {
    question:
      "In JavaScript, what is the result of `Array.isArray([1, 2, 3])`?",
    options: ["true", "false", "undefined", "null"],
    correctAnswer: "true",
    explanation:
      "The `Array.isArray()` method checks if a given value is an array. In this case, `[1, 2, 3]` is indeed an array, so it returns `true`.",
  },
  {
    question:
      "Which method would you use in Python to join all elements of a list into a string with spaces between them?",
    options: ["join()", "concatenate()", "merge()", "combine()"],
    correctAnswer: "join()",
    explanation:
      "In Python, the `join()` method is used to join all elements of a list into a single string, using a specified separator.",
  },
  {
    question:
      "In JavaScript, how can you find the first index of an element that satisfies a test in an array?",
    options: ["find()", "filter()", "findIndex()", "indexOf()"],
    correctAnswer: "findIndex()",
    explanation:
      "The `findIndex()` method returns the first index of the element that satisfies the provided testing function.",
  },
  {
    question:
      "In C++, what will be the value of `arr[4]` if `arr = {10, 20, 30, 40, 50}`?",
    options: ["10", "20", "50", "40"],
    correctAnswer: "50",
    explanation:
      "Arrays in C++ are zero-indexed. Therefore, `arr[4]` refers to the fifth element in the array, which is `50`.",
  },
  {
    question:
      "In JavaScript, which method can be used to remove the last element from an array?",
    options: ["pop()", "shift()", "slice()", "remove()"],
    correctAnswer: "pop()",
    explanation:
      "The `pop()` method removes the last element from an array and returns that element.",
  },
  {
    question:
      "How can you convert an array to a string in Python, separating the elements by commas?",
    options: ["str(arr)", "arr.join()", "arr.join(',')", "arr.toString()"],
    correctAnswer: "arr.join(',')",
    explanation:
      "In Python, `join()` can be used to convert an array to a string, and the `,` inside the parentheses specifies the separator between elements.",
  },
  {
    question:
      "Which of the following statements is used to get the last element of an array in JavaScript?",
    options: ["arr[-1]", "arr[arr.length - 1]", "arr[0]", "arr.last()"],
    correctAnswer: "arr[arr.length - 1]",
    explanation:
      "In JavaScript, `arr[arr.length - 1]` accesses the last element of an array.",
  },
  {
    question:
      "Which method in JavaScript can be used to iterate over all elements of an array and apply a function to each element?",
    options: ["map()", "filter()", "forEach()", "reduce()"],
    correctAnswer: "forEach()",
    explanation:
      "The `forEach()` method executes a provided function once for each array element.",
  },
  {
    question:
      "In C++, what does the expression `arr[2]` represent if `arr = {10, 20, 30, 40, 50}`?",
    options: [
      "The first element of the array",
      "The second element of the array",
      "The third element of the array",
      "The fourth element of the array",
    ],
    correctAnswer: "The third element of the array",
    explanation:
      "In C++, arrays are zero-indexed, so `arr[2]` refers to the third element of the array, which is `30`.",
  },
  {
    question:
      "In JavaScript, how would you extract all values from an array except the first one?",
    options: ["arr.slice(1)", "arr.shift()", "arr.splice(1)", "arr.pop()"],
    correctAnswer: "arr.slice(1)",
    explanation:
      "The `slice()` method can be used to extract elements from an array starting from index `1`, effectively removing the first element.",
  },
];
