export const test4 = [
  {
    question: "What is the result of `arr.concat([1, 2])` when `arr = [3, 4]`?",
    options: ["[1, 2]", "[3, 4, 1, 2]", "[3, 4]", "[1, 2, 3, 4]"],
    correctAnswer: "[3, 4, 1, 2]",
    explanation:
      "`concat()` merges two arrays and returns a new array without modifying the original ones.",
  },
  {
    question: "What will `arr.flat(2)` return if `arr = [1, [2, [3, 4]]]`?",
    options: [
      "[1, 2, [3, 4]]",
      "[1, 2, 3, 4]",
      "[1, [2, 3, 4]]",
      "[1, 2, 3, 4, 5]",
    ],
    correctAnswer: "[1, 2, 3, 4]",
    explanation:
      "`flat()` flattens arrays up to the given depth, and here it flattens two levels, returning `[1, 2, 3, 4]`.`",
  },
  {
    question:
      "Which of the following methods will create a shallow copy of an array?",
    options: ["arr.clone()", "arr.copy()", "arr.slice()", "Object.assign()"],
    correctAnswer: "arr.slice()",
    explanation:
      "`slice()` creates a shallow copy of the array from start to end index without modifying the original array.",
  },
  {
    question: "How can you check if an array is sparse (contains holes)?",
    options: [
      "arr.isSparse()",
      "arr.length < arr.filter(Boolean).length",
      "arr.some(el => el === undefined)",
      "arr.hasHoles()",
    ],
    correctAnswer: "arr.some(el => el === undefined)",
    explanation:
      "If an element in the array is `undefined`, it indicates that the array might have gaps or holes.",
  },
  {
    question:
      "What is the output of `arr.map(el => el * 2)` when `arr = [1, 2, 3, 4]`?",
    options: ["[2, 4, 6, 8]", "[1, 4, 6, 8]", "[2, 4, 6, 12]", "[1, 2, 3, 4]"],
    correctAnswer: "[2, 4, 6, 8]",
    explanation:
      "`map()` applies a function to each element of the array and returns a new array with the transformed values.",
  },
  {
    question: "What is the time complexity of the `arr.filter()` method?",
    options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
    correctAnswer: "O(n)",
    explanation:
      "`filter()` iterates over each element of the array, so its time complexity is linear, i.e., `O(n)`.",
  },
  {
    question: "What does `arr.reduceRight()` do?",
    options: [
      "Applies a function from the last element to the first",
      "Creates a new array from the right side",
      "Removes elements from the end of the array",
      "Reduces the array to a single value starting from the right",
    ],
    correctAnswer: "Applies a function from the last element to the first",
    explanation:
      "`reduceRight()` processes elements in reverse order (starting from the right), and reduces the array to a single value.",
  },
  {
    question:
      "Which of the following methods can be used to remove the first element of an array?",
    options: ["arr.shift()", "arr.pop()", "arr.slice(1)", "arr.splice(0, 1)"],
    correctAnswer: "arr.shift()",
    explanation:
      "`shift()` removes the first element of the array and returns it, while modifying the original array.",
  },
  {
    question:
      "What is the result of `arr.splice(1, 0, 100)` when `arr = [1, 2, 3]`?",
    options: [
      "[1, 100, 2, 3]",
      "[100, 1, 2, 3]",
      "[1, 2, 3, 100]",
      "[1, 2, 100, 3]",
    ],
    correctAnswer: "[1, 100, 2, 3]",
    explanation:
      "`splice()` inserts `100` at index `1` without removing any elements, modifying the original array to `[1, 100, 2, 3]`.",
  },
  {
    question: "How do you reverse the order of elements in an array?",
    options: ["arr.reverse()", "arr.sort()", "arr.flip()", "arr.shift()"],
    correctAnswer: "arr.reverse()",
    explanation:
      "`reverse()` reverses the order of elements in the original array.",
  },
  {
    question:
      "What will `arr.indexOf(5, 2)` return when `arr = [1, 2, 5, 3, 5]`?",
    options: ["2", "4", "-1", "3"],
    correctAnswer: "4",
    explanation:
      "The method `indexOf()` searches for the value `5` starting from index `2`, and it finds `5` at index `4`.",
  },
  {
    question:
      "How would you find the number of elements in an array that are greater than `5` using `arr.filter()`?",
    options: [
      "arr.filter(el => el > 5).length",
      "arr.length > 5",
      "arr.filter(el => el > 5).count()",
      "arr.filter(el > 5)",
    ],
    correctAnswer: "arr.filter(el => el > 5).length",
    explanation:
      "The `filter()` method creates a new array with elements greater than `5`, and `length` gives the count of those elements.",
  },
  {
    question:
      "What will `arr.findIndex(el => el > 5)` return for `arr = [1, 2, 3, 6, 4, 5]`?",
    options: ["3", "4", "-1", "2"],
    correctAnswer: "3",
    explanation:
      "`findIndex()` returns the index of the first element that satisfies the condition. Here, `6` is the first element greater than `5`, at index `3`.",
  },
  {
    question:
      "What is the output of `arr.join(', ')` when `arr = ['a', 'b', 'c']`?",
    options: ["['a', 'b', 'c']", "'a, b, c'", "'a b c'", "['a b c']"],
    correctAnswer: "'a, b, c'",
    explanation:
      "`join()` joins all elements of the array into a string with the provided separator `', '`.",
  },
  {
    question: "What will `arr.slice(-2)` return if `arr = [1, 2, 3, 4, 5]`?",
    options: ["[4, 5]", "[1, 2]", "[3, 4, 5]", "[2, 3]"],
    correctAnswer: "[4, 5]",
    explanation:
      "The `slice()` method extracts elements starting from index `-2`, meaning the last two elements of the array.",
  },
  {
    question: "Which method will remove duplicate elements from an array?",
    options: [
      "arr.distinct()",
      "arr.filter()",
      "arr.concat()",
      "Array.from(new Set(arr))",
    ],
    correctAnswer: "Array.from(new Set(arr))",
    explanation:
      "By converting the array to a `Set` (which stores only unique values), and then converting it back to an array, we can remove duplicates.",
  },
  {
    question:
      "What is the output of `arr.map((x, i) => x * i)` when `arr = [10, 20, 30, 40]`?",
    options: [
      "[10, 40, 90, 160]",
      "[0, 20, 60, 120]",
      "[10, 40, 60, 120]",
      "[0, 20, 60, 160]",
    ],
    correctAnswer: "[0, 20, 60, 120]",
    explanation:
      "The `map()` method applies the function to each element. In this case, `x * i` multiplies each element by its index.",
  },
  {
    question:
      "What does `arr.some(el => typeof el === 'number')` return for `arr = [1, 'hello', true]`?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "`some()` checks if any element satisfies the condition. Here, the first element `1` is a number, so it returns `true`.",
  },
  {
    question:
      "What is the time complexity of the `arr.sort()` method in JavaScript?",
    options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
    correctAnswer: "O(n log n)",
    explanation:
      "The `sort()` method has a time complexity of `O(n log n)` in most implementations, such as Timsort or Quicksort.",
  },
  {
    question: "How can you check if a value is an array in JavaScript?",
    options: ["Array.isArray()", "typeof []", "instanceof Array", "isArray()"],
    correctAnswer: "Array.isArray()",
    explanation:
      "`Array.isArray()` checks if the given value is an array and returns a boolean value (`true` or `false`).",
  },
];
