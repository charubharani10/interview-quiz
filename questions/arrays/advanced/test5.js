export const test5 = [
  {
    question:
      "What is the result of `arr.flat(2)` for `arr = [[1, 2], [3, 4], [5, 6]]`?",
    options: [
      "[1, 2, 3, 4, 5, 6]",
      "[[1, 2], [3, 4], [5, 6]]",
      "[[1, 2, 3, 4], [5, 6]]",
      "[1, 2, 3, 4, 5, 6, []]",
    ],
    correctAnswer: "[1, 2, 3, 4, 5, 6]",
    explanation:
      "The `flat()` method is used to flatten an array up to the specified depth. `flat(2)` flattens the array up to 2 levels deep.",
  },
  {
    question:
      "What will `arr.every(el => el > 5)` return for `arr = [6, 7, 8]`?",
    options: ["true", "false", "undefined", "null"],
    correctAnswer: "true",
    explanation:
      "`every()` checks if all elements satisfy the condition. Here, all elements are greater than `5`, so it returns `true`.",
  },
  {
    question:
      "What is the output of `arr.reduce((acc, val) => acc + val, 0)` for `arr = [1, 2, 3, 4, 5]`?",
    options: ["15", "12", "10", "9"],
    correctAnswer: "15",
    explanation:
      "The `reduce()` method iterates through the array and accumulates the result. Here, the sum of all values is `1 + 2 + 3 + 4 + 5 = 15`.",
  },
  {
    question:
      "Which of the following methods can reverse the contents of an array?",
    options: ["arr.reverse()", "arr.sort()", "arr.flip()", "arr.shift()"],
    correctAnswer: "arr.reverse()",
    explanation:
      "The `reverse()` method reverses the order of elements in an array, modifying the original array.",
  },
  {
    question:
      "What is the time complexity of the `arr.push()` method in JavaScript?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(1)",
    explanation:
      "The `push()` method adds elements to the end of an array in constant time, hence its time complexity is `O(1)`.",
  },
  {
    question: "How can you create a shallow copy of an array in JavaScript?",
    options: ["arr.slice()", "arr.copy()", "arr.clone()", "arr.copyWithin()"],
    correctAnswer: "arr.slice()",
    explanation:
      "`slice()` creates a shallow copy of a portion of an array, returning a new array without modifying the original.",
  },
  {
    question:
      "What will be the result of `arr[5] = 10; arr.length` if `arr = [1, 2, 3, 4, 5]`?",
    options: ["5", "6", "10", "undefined"],
    correctAnswer: "6",
    explanation:
      "When an element is assigned to an index greater than the current array length, the array will expand, and the `length` property will reflect the new length.",
  },
  {
    question: "How can you merge two arrays in JavaScript?",
    options: ["arr.concat()", "arr.append()", "arr.merge()", "arr.add()"],
    correctAnswer: "arr.concat()",
    explanation:
      "The `concat()` method merges two or more arrays and returns a new array without modifying the original arrays.",
  },
  {
    question:
      "What will the expression `arr[2] = 10; arr.splice(1, 1)` result in for `arr = [1, 2, 3, 4]`?",
    options: ["[1, 10, 4]", "[10, 2, 3, 4]", "[1, 10, 4]", "[1, 4]"],
    correctAnswer: "[1, 10, 4]",
    explanation:
      "The assignment `arr[2] = 10` modifies the third element. Then `splice(1, 1)` removes the second element (`2`), leaving `[1, 10, 4]`.",
  },
  {
    question:
      "Which method would you use to sort an array of numbers in descending order?",
    options: [
      "arr.sort((a, b) => a - b)",
      "arr.sort((a, b) => b - a)",
      "arr.reverse()",
      "arr.sort()",
    ],
    correctAnswer: "arr.sort((a, b) => b - a)",
    explanation:
      "To sort an array in descending order, the comparison function `b - a` is used.",
  },
  {
    question:
      "What will `arr.findIndex(x => x > 10)` return for `arr = [1, 5, 10, 15, 20]`?",
    options: ["3", "4", "-1", "2"],
    correctAnswer: "3",
    explanation:
      "The `findIndex()` method returns the index of the first element that satisfies the condition. Here, the first element greater than `10` is `15`, at index `3`.",
  },
  {
    question: "What is the purpose of `Array.from()` method?",
    options: [
      "Creates a new array from an iterable object",
      "Adds elements to an array",
      "Fills the array with elements",
      "Removes the last element from an array",
    ],
    correctAnswer: "Creates a new array from an iterable object",
    explanation:
      "The `Array.from()` method creates a new array instance from an array-like or iterable object.",
  },
  {
    question:
      "What is the output of the following code: `arr = [2, 4, 6]; arr.map(x => x * 2).reduce((a, b) => a + b)`?",
    options: ["24", "12", "16", "8"],
    correctAnswer: "24",
    explanation:
      "The `map()` method doubles each element (`[4, 8, 12]`), and then `reduce()` sums them up (`4 + 8 + 12 = 24`).",
  },
  {
    question: "What is the output of `arr.join('-')` for `arr = [1, 2, 3]`?",
    options: ["1-2-3", "[1, 2, 3]", "123", "1,2,3"],
    correctAnswer: "1-2-3",
    explanation:
      "The `join()` method joins all elements of an array into a single string, with the specified separator (`'-'` in this case).",
  },
  {
    question:
      "How would you remove the first element from an array and return it?",
    options: ["arr.pop()", "arr.shift()", "arr.slice(1)", "arr.delete()"],
    correctAnswer: "arr.shift()",
    explanation:
      "The `shift()` method removes and returns the first element of an array, modifying the original array.",
  },
  {
    question:
      "Which of the following methods is used to execute a function on each element in an array?",
    options: ["arr.each()", "arr.map()", "arr.apply()", "arr.reduce()"],
    correctAnswer: "arr.map()",
    explanation:
      "The `map()` method executes a function on each element of an array and returns a new array with the results.",
  },
  {
    question:
      "Which method would you use to add elements to the beginning of an array?",
    options: ["arr.push()", "arr.shift()", "arr.unshift()", "arr.prepend()"],
    correctAnswer: "arr.unshift()",
    explanation:
      "The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.",
  },
  {
    question:
      "What is the result of `arr.slice(1, -1)` for `arr = [10, 20, 30, 40]`?",
    options: ["[20, 30]", "[30, 40]", "[10, 20, 30]", "[20, 30, 40]"],
    correctAnswer: "[20, 30]",
    explanation:
      "The `slice()` method extracts a portion of the array, starting from index `1` (inclusive) to index `-1` (exclusive), which gives `[20, 30]`.",
  },
  {
    question:
      "What is the time complexity of the `Array.prototype.includes()` method?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "`includes()` checks if an element exists in the array, and in the worst case, it will iterate through all elements, resulting in linear time complexity `O(n)`.",
  },
  {
    question:
      "What will the following code return: `arr = [1, 2, 3]; arr.map(x => x * 2).filter(x => x > 3)`?",
    options: ["[2, 4, 6]", "[4, 6]", "[2, 4]", "[6]"],
    correctAnswer: "[4, 6]",
    explanation:
      "The `map()` method first doubles each element (`[2, 4, 6]`), and then `filter()` keeps only elements greater than `3`, which results in `[4, 6]`.",
  },
];
