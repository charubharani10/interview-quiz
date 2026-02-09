export const test2 = [
  {
    question:
      "In JavaScript, what does `arr.length` return if `arr = [1, 2, 3, 4, 5]`?",
    options: ["5", "4", "6", "undefined"],
    correctAnswer: "5",
    explanation:
      "The `length` property of an array returns the number of elements in the array. In this case, `arr` has 5 elements.",
  },
  {
    question: "How can you remove the first element of an array in JavaScript?",
    options: ["pop()", "shift()", "slice(0, 1)", "delete()"],
    correctAnswer: "shift()",
    explanation:
      "The `shift()` method removes the first element from an array and shifts the remaining elements to lower indexes.",
  },
  {
    question:
      "Which Python method is used to add an element at the end of a list?",
    options: ["append()", "add()", "insert()", "extend()"],
    correctAnswer: "append()",
    explanation:
      "The `append()` method in Python adds an element to the end of a list.",
  },
  {
    question:
      "In C++, what will be the output of `arr[2]` if `arr = {5, 10, 15, 20, 25}`?",
    options: ["5", "15", "10", "20"],
    correctAnswer: "15",
    explanation:
      "Arrays are zero-indexed in C++. `arr[2]` refers to the third element in the array, which is `15`.",
  },
  {
    question: "What is the return value of `arr.reverse()` in JavaScript?",
    options: [
      "A reversed copy of the array",
      "A new array",
      "The original array, reversed in place",
      "An empty array",
    ],
    correctAnswer: "The original array, reversed in place",
    explanation:
      "The `reverse()` method reverses the elements of the array in place and returns the same array.",
  },
  {
    question:
      "Which of the following is the correct way to merge two arrays in JavaScript?",
    options: [
      "arr.merge(arr2)",
      "arr.concat(arr2)",
      "arr.join(arr2)",
      "arr.append(arr2)",
    ],
    correctAnswer: "arr.concat(arr2)",
    explanation:
      "The `concat()` method merges two or more arrays into a single array.",
  },
  {
    question: "What will the expression `[2, 4, 6, 8].slice(1, 3)` return?",
    options: ["[4, 6]", "[2, 4, 6]", "[6, 8]", "[4, 8]"],
    correctAnswer: "[4, 6]",
    explanation:
      "The `slice()` method extracts elements from index `1` up to, but not including, index `3`, returning `[4, 6]`.",
  },
  {
    question:
      "How can you check if an element exists in an array in JavaScript?",
    options: [
      "arr.has(element)",
      "arr.contains(element)",
      "arr.includes(element)",
      "arr.find(element)",
    ],
    correctAnswer: "arr.includes(element)",
    explanation:
      "The `includes()` method checks if an array contains a specified element and returns `true` or `false`.",
  },
  {
    question:
      "What will be the output of `arr.slice(-2)` if `arr = [1, 2, 3, 4, 5]`?",
    options: ["[4, 5]", "[1, 2]", "[3, 4, 5]", "[5]"],
    correctAnswer: "[4, 5]",
    explanation:
      "The `slice()` method accepts negative indices to count from the end of the array. `-2` refers to the second-to-last element and includes the last one.",
  },
  {
    question:
      "What is the output of `arr.join('-')` if `arr = ['apple', 'banana', 'cherry']`?",
    options: [
      "'apple banana cherry'",
      "'apple-banana-cherry'",
      "'apple,banana,cherry'",
      "'apple-cherry-banana'",
    ],
    correctAnswer: "'apple-banana-cherry'",
    explanation:
      "The `join()` method joins all elements of the array into a single string, with the specified separator between the elements.",
  },
  {
    question:
      "Which method in JavaScript can be used to remove all elements from an array?",
    options: ["clear()", "reset()", "empty()", "splice(0, arr.length)"],
    correctAnswer: "splice(0, arr.length)",
    explanation:
      "The `splice()` method can be used to remove all elements by specifying the starting index as `0` and the number of elements as the array's length.",
  },
  {
    question: "In Python, how would you convert a list to a set?",
    options: [
      "set(list)",
      "list.set()",
      "list.convert()",
      "convert(list, set)",
    ],
    correctAnswer: "set(list)",
    explanation:
      "In Python, the `set()` constructor can be used to convert a list to a set, which removes duplicates.",
  },
  {
    question: "In C++, what does `arr[0]` return if `arr = {10, 20, 30}`?",
    options: ["10", "20", "30", "undefined"],
    correctAnswer: "10",
    explanation:
      "In C++, arrays are zero-indexed, so `arr[0]` refers to the first element of the array, which is `10`.",
  },
  {
    question: "In JavaScript, what does `arr.map(x => x * 2)` do?",
    options: [
      "Multiplies each element by 2 and returns a new array",
      "Doubles the array",
      "Mutates the original array",
      "Returns the last element doubled",
    ],
    correctAnswer: "Multiplies each element by 2 and returns a new array",
    explanation:
      "The `map()` method creates a new array with the results of calling the provided function on every element of the original array.",
  },
  {
    question:
      "What is the default value of elements in an array declared in JavaScript as `let arr = new Array(5)`?",
    options: ["undefined", "null", "0", "empty"],
    correctAnswer: "undefined",
    explanation:
      "When an array is created using `new Array()` with a specified length, its elements are initialized as `undefined`.",
  },
  {
    question:
      "How do you add an element to the beginning of an array in JavaScript?",
    options: ["push()", "insert()", "prepend()", "unshift()"],
    correctAnswer: "unshift()",
    explanation:
      "The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.",
  },
  {
    question: "In Python, how do you reverse a list in place?",
    options: ["reverse()", "reversed()", "sort()", "flip()"],
    correctAnswer: "reverse()",
    explanation:
      "The `reverse()` method in Python reverses the elements of the list in place.",
  },
  {
    question: "In C++, how do you declare an array of 10 integers?",
    options: [
      "int arr[10];",
      "array<int, 10> arr;",
      "array arr[10];",
      "int[10] arr;",
    ],
    correctAnswer: "int arr[10];",
    explanation:
      "In C++, arrays are declared using the syntax `type array_name[size]`. Here, `int arr[10]` declares an array of 10 integers.",
  },
  {
    question: "In JavaScript, what does the `concat()` method do?",
    options: [
      "Concatenates two arrays",
      "Finds a specific element in the array",
      "Removes elements from an array",
      "Sorts the array",
    ],
    correctAnswer: "Concatenates two arrays",
    explanation:
      "The `concat()` method is used to merge two or more arrays into a single array.",
  },
  {
    question: "What is the result of `[1, 2, 3].slice(1, 2)` in JavaScript?",
    options: ["[2]", "[1, 2]", "[2, 3]", "[1]"],
    correctAnswer: "[2]",
    explanation:
      "The `slice()` method extracts elements from index `1` to index `2`, but does not include the element at index `2`. Thus, it returns `[2]`.",
  },
];
