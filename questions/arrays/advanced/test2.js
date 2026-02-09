export const test2 = [
  {
    question: "What does the `Array.from()` method do?",
    options: [
      "Creates a shallow copy of an array",
      "Creates a new array from an array-like or iterable object",
      "Reverses the order of elements in an array",
      "Removes duplicates from an array",
    ],
    correctAnswer: "Creates a new array from an array-like or iterable object",
    explanation:
      "`Array.from()` creates a new array instance from an array-like or iterable object, such as a `NodeList`.",
  },
  {
    question:
      "How can you find the index of the last occurrence of an element in an array?",
    options: [
      "arr.lastIndexOf()",
      "arr.indexOf()",
      "arr.findIndex()",
      "arr.lastOccurrence()",
    ],
    correctAnswer: "arr.lastIndexOf()",
    explanation:
      "`lastIndexOf()` returns the last index at which a specified element is found in the array, or `-1` if it's not found.",
  },
  {
    question:
      "Which of the following statements will flatten a nested array to a depth of 2?",
    options: ["arr.flat(1)", "arr.flat(2)", "arr.flatten(2)", "arr.flatten()"],
    correctAnswer: "arr.flat(2)",
    explanation:
      "`flat(2)` will flatten an array up to a depth of 2, merging subarrays within that depth.",
  },
  {
    question:
      "What is the output of `arr.splice(2, 1, 'a', 'b')` if `arr = [1, 2, 3, 4]`?",
    options: ["[1, 2, 'a', 'b', 4]", "[3, 'a', 'b']", "[3]", "[1, 2, 3, 4]"],
    correctAnswer: "[1, 2, 'a', 'b', 4]",
    explanation:
      "`splice()` removes elements starting from index `2` (removing `3`), then inserts `'a'` and `'b'` at that position.",
  },
  {
    question:
      "How can you concatenate two arrays in a functional way without modifying the original arrays?",
    options: [
      "arr.concat(arr2)",
      "[...arr, ...arr2]",
      "arr.join(arr2)",
      "arr.merge(arr2)",
    ],
    correctAnswer: "[...arr, ...arr2]",
    explanation:
      "Using the spread operator (`...`) creates a new array by combining the two arrays without modifying the originals.",
  },
  {
    question: "What is the time complexity of `arr.find()` method?",
    options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
    correctAnswer: "O(n)",
    explanation:
      "`find()` method iterates through the array, checking each element until it finds a match, resulting in linear time complexity.",
  },
  {
    question:
      "What will be the output of `arr.map((el, index) => index * el)` if `arr = [1, 2, 3]`?",
    options: ["[0, 2, 6]", "[1, 4, 9]", "[0, 1, 2]", "[2, 4, 6]"],
    correctAnswer: "[0, 2, 6]",
    explanation:
      "`map()` applies the function to each element, multiplying the element by its index. For `[1, 2, 3]`, the result is `[0, 2, 6]`.",
  },
  {
    question:
      "What is the result of `arr.sort((a, b) => a - b)` for `arr = [3, 1, 2]`?",
    options: ["[1, 2, 3]", "[3, 1, 2]", "[2, 1, 3]", "[1, 3, 2]"],
    correctAnswer: "[1, 2, 3]",
    explanation:
      "The comparison function `(a, b) => a - b` sorts the array numerically in ascending order.",
  },
  {
    question:
      "Which method is used to test whether at least one element in an array passes a condition?",
    options: ["arr.every()", "arr.some()", "arr.test()", "arr.find()"],
    correctAnswer: "arr.some()",
    explanation:
      "`some()` tests whether at least one element in the array passes the provided test function.",
  },
  {
    question: "Which method can be used to create a shallow copy of an array?",
    options: ["arr.slice()", "arr.copy()", "arr.clone()", "arr.shallow()"],
    correctAnswer: "arr.slice()",
    explanation:
      "`slice()` creates a shallow copy of the original array, leaving the original array unchanged.",
  },
  {
    question: "How can you flatten an array recursively to any depth?",
    options: [
      "arr.flat()",
      "arr.flatten()",
      "arr.flat(Infinity)",
      "arr.deepFlatten()",
    ],
    correctAnswer: "arr.flat(Infinity)",
    explanation:
      "`flat(Infinity)` recursively flattens an array, regardless of how deeply nested the array is.",
  },
  {
    question:
      "What is the output of `arr.reduce((acc, el) => acc + el, 0)` if `arr = [1, 2, 3, 4]`?",
    options: ["10", "24", "4", "1"],
    correctAnswer: "10",
    explanation:
      "`reduce()` iterates through the array, accumulating the sum of all elements starting from the initial value `0`.",
  },
  {
    question: "How can you remove all falsy values from an array?",
    options: [
      "arr.filter(Boolean)",
      "arr.removeFalsy()",
      "arr.filter(x => !!x)",
      "arr.clean()",
    ],
    correctAnswer: "arr.filter(Boolean)",
    explanation:
      '`filter(Boolean)` removes all falsy values from the array. Falsy values include `0`, `false`, `null`, `undefined`, `NaN`, and `""`.',
  },
  {
    question: "What is the purpose of `arr.findIndex()`?",
    options: [
      "Finds the first element that satisfies the condition",
      "Finds the index of the first element that satisfies the condition",
      "Finds the last index that satisfies the condition",
      "Finds the last occurrence of an element",
    ],
    correctAnswer:
      "Finds the index of the first element that satisfies the condition",
    explanation:
      "`findIndex()` returns the index of the first element in the array that satisfies the provided testing function.",
  },
  {
    question:
      "What is the result of `arr.filter(el => el.length > 3)` if `arr = ['cat', 'lion', 'dog', 'elephant']`?",
    options: [
      "['lion', 'elephant']",
      "['cat', 'lion', 'dog']",
      "['elephant']",
      "['cat', 'dog']",
    ],
    correctAnswer: "['lion', 'elephant']",
    explanation:
      "`filter()` returns a new array with only elements whose `length` property is greater than 3.",
  },
  {
    question:
      "How do you check if all elements in an array satisfy a condition?",
    options: ["arr.every()", "arr.some()", "arr.all()", "arr.check()"],
    correctAnswer: "arr.every()",
    explanation:
      "`every()` checks if all elements in the array satisfy the given condition, returning `true` if all pass.",
  },
  {
    question:
      "Which method would you use to execute a function on each element of an array without modifying the array?",
    options: ["arr.map()", "arr.forEach()", "arr.each()", "arr.loop()"],
    correctAnswer: "arr.forEach()",
    explanation:
      "`forEach()` executes the provided function once for each element in the array without returning a new array.",
  },
  {
    question:
      "What is the result of `arr.slice(1, 3)` if `arr = [10, 20, 30, 40]`?",
    options: ["[20, 30]", "[10, 20]", "[30, 40]", "[20, 40]"],
    correctAnswer: "[20, 30]",
    explanation:
      "`slice(1, 3)` extracts a portion of the array starting from index `1` (inclusive) to index `3` (exclusive).",
  },
  {
    question:
      "Which method is used to add elements to the beginning of an array?",
    options: ["arr.push()", "arr.unshift()", "arr.insert()", "arr.append()"],
    correctAnswer: "arr.unshift()",
    explanation:
      "`unshift()` adds one or more elements to the beginning of an array and returns the new length of the array.",
  },
  {
    question:
      "What is the result of `arr.flatMap(x => [x, x * 2])` if `arr = [1, 2, 3]`?",
    options: [
      "[1, 2, 2, 4, 3, 6]",
      "[1, 4, 9]",
      "[1, 1, 2, 2, 3, 3]",
      "[2, 4, 6]",
    ],
    correctAnswer: "[1, 2, 2, 4, 3, 6]",
    explanation:
      "`flatMap()` first maps each element to a new array, then flattens the result by one level.",
  },
  {
    question:
      "What is the complexity of the `Array.prototype.sort()` method in the worst case?",
    options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
    correctAnswer: "O(n log n)",
    explanation:
      "`sort()` uses a sorting algorithm with a time complexity of `O(n log n)` in the average and worst cases.",
  },
  {
    question:
      "Which method is used to check if an array includes a specific element?",
    options: ["arr.has()", "arr.includes()", "arr.contains()", "arr.exists()"],
    correctAnswer: "arr.includes()",
    explanation:
      "`includes()` checks if the array contains a specific element and returns `true` or `false`.",
  },
];
