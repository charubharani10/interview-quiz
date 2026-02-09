export const test4 = [
  {
    question: "What does the `reverse()` method do in JavaScript?",
    options: [
      "Reverses the order of elements in an array",
      "Reverses the order of characters in a string",
      "Returns a reversed copy of the array without modifying the original",
      "Sorts the array in descending order",
    ],
    correctAnswer: "Reverses the order of elements in an array",
    explanation:
      "The `reverse()` method in JavaScript reverses the order of the elements in an array in place.",
  },
  {
    question:
      "What is the default value of an uninitialized element in a JavaScript array?",
    options: ["undefined", "null", "0", "NaN"],
    correctAnswer: "undefined",
    explanation:
      "In JavaScript, if an element in an array is not explicitly initialized, its value will be `undefined`.",
  },
  {
    question:
      "Which of the following is used to add an element to the end of an array in Python?",
    options: ["append()", "push()", "insert()", "extend()"],
    correctAnswer: "append()",
    explanation:
      "The `append()` method is used in Python to add an element to the end of a list.",
  },
  {
    question:
      "How do you find the sum of all elements in an array in JavaScript?",
    options: [
      "array.sum()",
      "array.reduce((a, b) => a + b, 0)",
      "array.total()",
      "array.accumulate()",
    ],
    correctAnswer: "array.reduce((a, b) => a + b, 0)",
    explanation:
      "In JavaScript, the `reduce()` method can be used to sum up all the elements in an array.",
  },
  {
    question:
      "What is the time complexity of accessing an element by index in an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Accessing an element by index in an array is a constant-time operation with a time complexity of O(1).",
  },
  {
    question:
      "What is the result of this JavaScript code: `let arr = [1, 2, 3]; arr.length = 2; console.log(arr);`?",
    options: ["[1, 2]", "[1, 2, 3]", "[2, 3]", "undefined"],
    correctAnswer: "[1, 2]",
    explanation:
      "In JavaScript, setting the `length` property of an array reduces its size, truncating the extra elements.",
  },
  {
    question: "In C, how do you declare a 2-dimensional array?",
    options: [
      "int arr[5][5];",
      "int arr[5];[5];",
      "int arr[5, 5];",
      "int arr[5].5;",
    ],
    correctAnswer: "int arr[5][5];",
    explanation:
      "In C, a 2-dimensional array is declared by specifying both dimensions using square brackets, e.g., `int arr[5][5];`.",
  },
  {
    question:
      "In JavaScript, how would you create a new array with the elements from an existing array?",
    options: ["Array.copy(arr)", "arr.clone()", "arr.slice()", "Array(arr)"],
    correctAnswer: "arr.slice()",
    explanation:
      "The `slice()` method creates a shallow copy of a portion of an array in JavaScript.",
  },
  {
    question:
      "Which of the following methods is used to remove the first element of an array in JavaScript?",
    options: ["shift()", "pop()", "remove()", "delete()"],
    correctAnswer: "shift()",
    explanation:
      "In JavaScript, the `shift()` method removes the first element of an array and shifts all other elements down.",
  },
  {
    question: "What does the `concat()` method do in JavaScript?",
    options: [
      "Joins two or more arrays",
      "Removes duplicate elements",
      "Sorts the array",
      "Splits the array into smaller arrays",
    ],
    correctAnswer: "Joins two or more arrays",
    explanation:
      "The `concat()` method is used in JavaScript to join two or more arrays into a new array.",
  },
  {
    question: "What does the `slice()` method do in JavaScript?",
    options: [
      "Extracts a portion of an array and returns it as a new array",
      "Removes elements from the array",
      "Reverses the array",
      "Finds the index of an element",
    ],
    correctAnswer:
      "Extracts a portion of an array and returns it as a new array",
    explanation:
      "The `slice()` method in JavaScript extracts a portion of an array and returns it as a new array without modifying the original array.",
  },
  {
    question:
      "Which of the following is used to remove the first element of an array in Python?",
    options: ["remove()", "pop()", "shift()", "del"],
    correctAnswer: "pop()",
    explanation:
      "The `pop()` method removes the last element of a list in Python by default, but with an index parameter, it can remove any element, including the first one.",
  },
  {
    question:
      "In which of the following languages are arrays fixed in size once initialized?",
    options: ["JavaScript", "Python", "C", "Java"],
    correctAnswer: "C",
    explanation:
      "In C, arrays have a fixed size that is determined at the time of initialization, unlike JavaScript or Python where arrays are dynamically resizable.",
  },
  {
    question:
      "Which method would you use in JavaScript to check if an array includes a certain element?",
    options: ["includes()", "has()", "contains()", "find()"],
    correctAnswer: "includes()",
    explanation:
      "In JavaScript, the `includes()` method checks whether an array contains a certain element, returning `true` or `false`.",
  },
  {
    question:
      "How do you create an array with 5 elements in Python, all initialized to 0?",
    options: ["list([0] * 5)", "list(5).fill(0)", "Array(5, 0)", "list(5, 0)"],
    correctAnswer: "list([0] * 5)",
    explanation:
      "In Python, `list([0] * 5)` creates a list with 5 elements, all initialized to `0`.",
  },
  {
    question:
      "In JavaScript, which method can be used to add an element at the beginning of an array?",
    options: ["unshift()", "push()", "shift()", "prepend()"],
    correctAnswer: "unshift()",
    explanation:
      "In JavaScript, the `unshift()` method adds one or more elements to the beginning of an array.",
  },
  {
    question:
      "What is the result of the following JavaScript expression: `[1, 2, 3].join('-')`?",
    options: ["1-2-3", "1,2,3", "[1,2,3]", "['1', '2', '3']"],
    correctAnswer: "1-2-3",
    explanation:
      "The `join()` method in JavaScript joins all elements of an array into a single string, separated by the specified delimiter, in this case, `'-'`.",
  },
  {
    question:
      "Which method can be used to find the index of the first occurrence of an element in an array in JavaScript?",
    options: ["findIndex()", "indexOf()", "search()", "locate()"],
    correctAnswer: "indexOf()",
    explanation:
      "The `indexOf()` method returns the index of the first occurrence of a specified element in an array.",
  },
  {
    question:
      "In C++, what is the size of an array declared as `int arr[10];`?",
    options: ["10", "11", "4", "Depends on the system"],
    correctAnswer: "10",
    explanation:
      "In C++, when declaring an array as `int arr[10];`, the size of the array is 10, which means it can hold 10 integers.",
  },
  {
    question: "How can you combine two arrays in Python?",
    options: [
      "array1.append(array2)",
      "array1.concat(array2)",
      "array1.extend(array2)",
      "array1.add(array2)",
    ],
    correctAnswer: "array1.extend(array2)",
    explanation:
      "In Python, `extend()` is used to combine two lists by appending elements of the second list to the first list.",
  },
];
