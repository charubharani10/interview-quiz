export const test1 = [
  {
    question: "What is the time complexity of `arr.reduce()` method?",
    options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
    correctAnswer: "O(n)",
    explanation:
      "The `reduce()` method iterates over each element of the array exactly once, resulting in a linear time complexity of O(n).",
  },
  {
    question:
      "What is the effect of using `arr.sort()` on an array of objects without a comparison function?",
    options: [
      "It sorts the objects in ascending order based on their properties",
      "It sorts the objects lexicographically based on the string representation of the objects",
      "It throws an error",
      "It returns the original array unchanged",
    ],
    correctAnswer:
      "It sorts the objects lexicographically based on the string representation of the objects",
    explanation:
      "By default, `sort()` converts the array elements to strings and sorts them lexicographically, not by object properties.",
  },
  {
    question: "What is the output of `Array(3).fill(0).map((_, idx) => idx)`?",
    options: ["[0, 0, 0]", "[0, 1, 2]", "[1, 2, 3]", "[0, 2, 4]"],
    correctAnswer: "[0, 1, 2]",
    explanation:
      "First, `fill(0)` creates an array `[0, 0, 0]`. Then, `map()` applies a function to each element. The function returns the index (`idx`), resulting in `[0, 1, 2]`.",
  },
  {
    question:
      "How would you find the intersection of two arrays, `arr1` and `arr2`, without using a third-party library?",
    options: [
      "arr1.filter(arr2)",
      "arr1.intersect(arr2)",
      "arr1.map(arr2)",
      "arr1.filter(el => arr2.includes(el))",
    ],
    correctAnswer: "arr1.filter(el => arr2.includes(el))",
    explanation:
      "The `filter()` method on `arr1` checks for each element if it exists in `arr2` using `includes()`. This gives the intersection of the two arrays.",
  },
  {
    question: "What will be the result of `[[1], [2], [3]].flat(1)`?",
    options: ["[1, 2, 3]", "[[1, 2, 3]]", "[1, [2, 3]]", "[1, 2, [3]]"],
    correctAnswer: "[1, 2, 3]",
    explanation:
      "The `flat()` method with an argument of `1` flattens the array one level, resulting in `[1, 2, 3]`.",
  },
  {
    question: "How can you check if an array contains only unique values?",
    options: [
      "arr.isUnique()",
      "arr.every(el => arr.indexOf(el) === arr.lastIndexOf(el))",
      "arr.allUnique()",
      "arr.reduce((acc, el) => acc && arr.indexOf(el) === acc, true)",
    ],
    correctAnswer: "arr.every(el => arr.indexOf(el) === arr.lastIndexOf(el))",
    explanation:
      "`every()` checks if for every element, its first and last occurrence index are the same, which would indicate all values are unique.",
  },
  {
    question:
      "What is the result of `arr.splice(2, 1, 'a', 'b')` if `arr = [1, 2, 3, 4]`?",
    options: [
      "[1, 2, 'a', 'b', 4]",
      "[1, 2, 3, 4]",
      "[1, 2, 'a', 'b']",
      "[1, 'a', 'b', 4]",
    ],
    correctAnswer: "[1, 2, 'a', 'b', 4]",
    explanation:
      "`splice()` removes one element starting at index `2` (which is `3`), and inserts `'a'` and `'b'`, resulting in `[1, 2, 'a', 'b', 4]`.",
  },
  {
    question: "Which of the following will deep clone an array of objects?",
    options: [
      "JSON.parse(JSON.stringify(arr))",
      "arr.slice()",
      "arr.map(obj => obj)",
      "arr.concat()",
    ],
    correctAnswer: "JSON.parse(JSON.stringify(arr))",
    explanation:
      "Using `JSON.parse(JSON.stringify())` creates a deep copy by converting the array to a JSON string and back to an object, preserving the deep structure.",
  },
  {
    question:
      "How can you concatenate two arrays with different lengths, where the second array is larger?",
    options: [
      "arr1.concat(arr2)",
      "arr1.push(...arr2)",
      "arr1.merge(arr2)",
      "arr1.append(arr2)",
    ],
    correctAnswer: "arr1.concat(arr2)",
    explanation:
      "`concat()` merges two arrays into one, regardless of their lengths. Both arrays will be combined into a single array.",
  },
  {
    question:
      "What does the `find()` method return for `arr.find(el => el > 5)` if `arr = [3, 5, 7, 9]`?",
    options: ["5", "7", "9", "undefined"],
    correctAnswer: "7",
    explanation:
      "`find()` returns the first element that satisfies the provided condition. The first element greater than 5 is `7`.",
  },
  {
    question:
      "What will be the result of `arr.some(el => el > 5)` for `arr = [3, 5, 7, 9]`?",
    options: ["true", "false", "undefined", "Error"],
    correctAnswer: "true",
    explanation:
      "`some()` checks if at least one element satisfies the condition. Since `7` and `9` are greater than `5`, it returns `true`.",
  },
  {
    question:
      "Which method can be used to remove all falsy values from an array?",
    options: [
      "arr.filter(Boolean)",
      "arr.removeFalsy()",
      "arr.filterFalsy()",
      "arr.trimFalsy()",
    ],
    correctAnswer: "arr.filter(Boolean)",
    explanation:
      "Using `filter(Boolean)` removes all falsy values (`false`, `null`, `0`, `NaN`, `undefined`, and `''`).",
  },
  {
    question:
      "What is the result of `arr.flatMap(x => [x, x * 2])` for `arr = [1, 2, 3]`?",
    options: ["[1, 2, 2, 4, 3, 6]", "[1, 2, 3, 6]", "[1, 4, 9]", "[2, 4, 6]"],
    correctAnswer: "[1, 2, 2, 4, 3, 6]",
    explanation:
      "`flatMap()` first maps each element to a new array, then flattens the result by one level.",
  },
  {
    question: "How can you find the maximum value in an array of numbers?",
    options: [
      "Math.max(arr)",
      "arr.max()",
      "arr.reduce((a, b) => a > b ? a : b)",
      "arr.findMax()",
    ],
    correctAnswer: "Math.max(...arr)",
    explanation:
      "The spread operator (`...`) allows `Math.max` to accept an array of numbers as arguments, finding the maximum value.",
  },
  {
    question:
      "What will be the result of `arr.reverse().sort()` for `arr = [1, 2, 3]`?",
    options: ["[3, 2, 1]", "[1, 2, 3]", "[1, 3, 2]", "Error"],
    correctAnswer: "[1, 2, 3]",
    explanation:
      "`reverse()` reverses the array, and `sort()` sorts it based on lexicographical order, which results in `[1, 2, 3]`.",
  },
  {
    question:
      "Which of the following methods can be used to deep clone an array of objects?",
    options: [
      "arr.slice()",
      "arr.map(obj => obj)",
      "JSON.parse(JSON.stringify(arr))",
      "arr.concat()",
    ],
    correctAnswer: "JSON.parse(JSON.stringify(arr))",
    explanation:
      "`JSON.parse(JSON.stringify(arr))` creates a deep clone of the array by serializing and deserializing the objects.",
  },
  {
    question:
      "How can you check if an array contains a specific value without using `includes()`?",
    options: [
      "arr.hasValue()",
      "arr.indexOf(val) !== -1",
      "arr.exists(val)",
      "arr.contains(val)",
    ],
    correctAnswer: "arr.indexOf(val) !== -1",
    explanation:
      "`indexOf()` returns the index of the value if found, and `-1` if not. By comparing to `-1`, you can check for existence.",
  },
  {
    question:
      "Which method can be used to remove the last element from an array?",
    options: ["arr.remove()", "arr.pop()", "arr.shift()", "arr.delete()"],
    correctAnswer: "arr.pop()",
    explanation:
      "`pop()` removes the last element from an array and returns that element.",
  },
  {
    question:
      "What is the output of `arr.reduce((acc, el) => acc + el, 0)` if `arr = [1, 2, 3, 4]`?",
    options: ["10", "6", "4", "1"],
    correctAnswer: "10",
    explanation:
      "`reduce()` accumulates the sum of all elements in the array, starting with an initial value of `0`.",
  },
  {
    question: "What is the time complexity of `arr.slice()` method?",
    options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
    correctAnswer: "O(n)",
    explanation:
      "`slice()` creates a shallow copy of a portion of an array, and the time complexity is linear with respect to the size of the sliced array.",
  },
  {
    question: "What does the `arr.reduceRight()` method do?",
    options: [
      "Applies a function to array elements starting from the last element",
      "Applies a function to array elements from the first to the last element",
      "Reverses the order of array elements",
      "Returns the last element of the array",
    ],
    correctAnswer:
      "Applies a function to array elements starting from the last element",
    explanation:
      "`reduceRight()` is similar to `reduce()`, but it processes the array elements in reverse order (from the last element to the first).",
  },
  {
    question:
      "How can you remove duplicates from an array without using a third-party library?",
    options: [
      "arr.filter((value, index, self) => self.indexOf(value) === index)",
      "arr.unique()",
      "arr.removeDuplicates()",
      "arr.distinct()",
    ],
    correctAnswer:
      "arr.filter((value, index, self) => self.indexOf(value) === index)",
    explanation:
      "The `filter()` method checks for each value if its first occurrence index matches its current index, ensuring uniqueness.",
  },
];
