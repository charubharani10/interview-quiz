export const test5 = [
  {
    question: "What does `arr.concat([1, 2, 3])` do in JavaScript?",
    options: [
      "Concatenates the arrays into one array",
      "Adds the elements to the beginning of the array",
      "Removes the elements from the array",
      "Creates a shallow copy of the array",
    ],
    correctAnswer: "Concatenates the arrays into one array",
    explanation:
      "The `concat()` method combines arrays or values into a single array.",
  },
  {
    question: "In JavaScript, how do you remove the last element of an array?",
    options: ["arr.pop()", "arr.shift()", "arr.splice()", "arr.remove()"],
    correctAnswer: "arr.pop()",
    explanation:
      "The `pop()` method removes the last element of an array and returns that element.",
  },
  {
    question:
      "Which of the following is true about `arr.slice(1, 3)` for the array `arr = [0, 1, 2, 3]`?",
    options: [
      "It returns the element at index 1 and 3",
      "It returns a new array with elements from index 1 to index 2",
      "It modifies the original array",
      "It returns all elements from index 1 to 3",
    ],
    correctAnswer:
      "It returns a new array with elements from index 1 to index 2",
    explanation:
      "The `slice()` method returns a new array containing elements from the start index to the end index (not inclusive).",
  },
  {
    question: "What will `arr.indexOf(5)` return if `arr = [1, 2, 3, 4, 5]`?",
    options: ["4", "5", "-1", "undefined"],
    correctAnswer: "4",
    explanation:
      "`indexOf()` returns the first index of the element in the array. Here, `5` is at index `4`.",
  },
  {
    question:
      "What is the time complexity of accessing an element by index in an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Accessing an element by index in an array has a constant time complexity `O(1)`, as the position is calculated directly.",
  },
  {
    question:
      "What will the following code output: `arr = [10, 20, 30]; arr.splice(1, 0, 15, 25);`?",
    options: [
      "[10, 15, 25, 20, 30]",
      "[15, 25, 20, 30]",
      "[10, 20, 30, 15, 25]",
      "[10, 15, 25, 20, 30]",
    ],
    correctAnswer: "[10, 15, 25, 20, 30]",
    explanation:
      "`splice()` inserts elements at index 1 without removing any elements. Hence, `15` and `25` are inserted between `10` and `20`.",
  },
  {
    question: "Which method returns the number of elements in an array?",
    options: ["arr.size", "arr.length", "arr.count", "arr.getSize()"],
    correctAnswer: "arr.length",
    explanation:
      "`length` is a property of an array that returns the number of elements in the array.",
  },
  {
    question: "In which case is it appropriate to use an array in JavaScript?",
    options: [
      "When elements need to be accessed by index",
      "When elements should be added in a key-value pair",
      "When elements are meant to be of different types",
      "When elements need to be dynamic in size",
    ],
    correctAnswer: "When elements need to be accessed by index",
    explanation:
      "Arrays are best used when you need to store ordered collections of elements, where each element can be accessed via an index.",
  },
  {
    question:
      "What is the output of `arr.includes(3)` if `arr = [1, 2, 3, 4]`?",
    options: ["true", "false", "undefined", "Error"],
    correctAnswer: "true",
    explanation:
      "`includes()` checks if an array contains a specific element and returns `true` if the element is found, else `false`.",
  },
  {
    question: "How do you flatten a multi-dimensional array in JavaScript?",
    options: ["arr.flatten()", "arr.reduce()", "arr.concat()", "arr.flat()"],
    correctAnswer: "arr.flat()",
    explanation:
      "`flat()` is used to flatten a multi-dimensional array into a single array.",
  },
  {
    question:
      "What is the result of `arr.reverse()` on the array `arr = [1, 2, 3]`?",
    options: ["[3, 2, 1]", "[1, 2, 3]", "[1, 3, 2]", "[3, 1, 2]"],
    correctAnswer: "[3, 2, 1]",
    explanation:
      "The `reverse()` method reverses the order of elements in the array.",
  },
  {
    question:
      "What does `arr.reduce((acc, curr) => acc + curr, 0)` do for the array `arr = [1, 2, 3, 4]`?",
    options: [
      "Finds the maximum element",
      "Adds up all the elements in the array",
      "Concatenates all elements into a string",
      "Counts the number of elements in the array",
    ],
    correctAnswer: "Adds up all the elements in the array",
    explanation:
      "`reduce()` accumulates all elements in the array to a single value by applying a function to each element, with `0` as the initial accumulator value.",
  },
  {
    question: "Which method can be used to create a shallow copy of an array?",
    options: ["arr.clone()", "arr.copy()", "arr.slice()", "arr.copyWithin()"],
    correctAnswer: "arr.slice()",
    explanation:
      "The `slice()` method creates a shallow copy of an array, without modifying the original array.",
  },
  {
    question:
      "How can you find the index of the first occurrence of an element in an array?",
    options: [
      "arr.findIndex()",
      "arr.indexOf()",
      "arr.locate()",
      "arr.position()",
    ],
    correctAnswer: "arr.indexOf()",
    explanation:
      "`indexOf()` returns the first index at which a given element is found in the array, or `-1` if it is not found.",
  },
  {
    question:
      "Which of the following methods is used to remove elements from the beginning of an array?",
    options: ["arr.shift()", "arr.pop()", "arr.remove()", "arr.splice()"],
    correctAnswer: "arr.shift()",
    explanation:
      "`shift()` removes the first element from an array and returns that element, shifting the other elements down by one.",
  },
  {
    question:
      "What is the output of `arr.join('-')` for `arr = ['a', 'b', 'c']`?",
    options: ["'a-b-c'", "'abc'", "'-abc-'", "'ab-c'"],
    correctAnswer: "'a-b-c'",
    explanation:
      "`join()` joins all elements of an array into a single string, with a specified separator (in this case, a hyphen).",
  },
  {
    question:
      "Which of the following methods adds new items to the end of an array?",
    options: ["arr.append()", "arr.unshift()", "arr.push()", "arr.add()"],
    correctAnswer: "arr.push()",
    explanation:
      "`push()` adds one or more elements to the end of an array and returns the new length of the array.",
  },
  {
    question: "What will `arr.sort()` do to the array `arr = [3, 1, 2]`?",
    options: [
      "[1, 2, 3]",
      "[3, 2, 1]",
      "It will sort elements in descending order",
      "It will throw an error",
    ],
    correctAnswer: "[1, 2, 3]",
    explanation:
      "`sort()` sorts the elements of an array in lexicographical (string) order, which for numbers results in ascending order.",
  },
  {
    question:
      "What is the result of calling `arr.fill(5, 1, 3)` on the array `arr = [1, 2, 3, 4]`?",
    options: ["[1, 5, 5, 4]", "[5, 5, 5, 4]", "[1, 5, 3, 4]", "[1, 2, 5, 5]"],
    correctAnswer: "[1, 5, 5, 4]",
    explanation:
      "`fill()` fills all elements in an array from the start index to the end index with a specified value. In this case, `5` fills index `1` and `2`.",
  },
  {
    question:
      "What is the result of `arr.every(num => num > 0)` if `arr = [1, 2, 3]`?",
    options: ["true", "false", "undefined", "Error"],
    correctAnswer: "true",
    explanation:
      "`every()` checks if all elements in the array satisfy the provided condition. Here, every element is greater than `0`, so the result is `true`.",
  },
  {
    question:
      "Which of the following methods is used to insert new elements at a specific index of an array?",
    options: ["arr.insert()", "arr.splice()", "arr.add()", "arr.unshift()"],
    correctAnswer: "arr.splice()",
    explanation:
      "`splice()` can be used to insert, remove, or replace elements at any position in the array.",
  },
  {
    question:
      "How would you combine two arrays, `arr1 = [1, 2]` and `arr2 = [3, 4]`, into a new array?",
    options: [
      "arr1 + arr2",
      "arr1.concat(arr2)",
      "arr1.append(arr2)",
      "arr1.merge(arr2)",
    ],
    correctAnswer: "arr1.concat(arr2)",
    explanation:
      "`concat()` combines two arrays into a new array, without modifying the original arrays.",
  },
];
