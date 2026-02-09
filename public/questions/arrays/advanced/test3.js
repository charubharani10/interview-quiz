export const test3 = [
  {
    question: "What does the `arr.concat()` method do?",
    options: [
      "Merges two arrays into one",
      "Returns a copy of the array with elements removed",
      "Sorts an array in place",
      "Creates a shallow copy of the array",
    ],
    correctAnswer: "Merges two arrays into one",
    explanation:
      "`concat()` merges multiple arrays or values into a single array, returning a new array without modifying the original.",
  },
  {
    question:
      "What will be the result of `arr.indexOf('value', 2)` if `arr = ['a', 'b', 'c', 'a', 'b']`?",
    options: ["1", "3", "4", "-1"],
    correctAnswer: "3",
    explanation:
      "`indexOf('value', 2)` starts searching from index `2`, and the first occurrence of `'a'` after index `2` is at index `3`.",
  },
  {
    question: "Which method is used to remove the last element from an array?",
    options: ["arr.remove()", "arr.pop()", "arr.shift()", "arr.delete()"],
    correctAnswer: "arr.pop()",
    explanation:
      "`pop()` removes the last element from an array and returns it. The array is mutated.",
  },
  {
    question:
      "How can you create a new array with elements repeated a certain number of times?",
    options: ["arr.repeat()", "arr.copy()", "Array.fill()", "Array.repeat()"],
    correctAnswer: "Array.fill()",
    explanation:
      "`Array.fill()` can fill an array with a single value for a specified length, but it does not repeat individual elements.",
  },
  {
    question:
      "What is the result of `arr.join(', ')` if `arr = ['apple', 'banana', 'cherry']`?",
    options: [
      "apple banana cherry",
      "apple, banana, cherry",
      "apple,banana,cherry",
      "['apple', 'banana', 'cherry']",
    ],
    correctAnswer: "apple, banana, cherry",
    explanation:
      "`join()` combines the array elements into a single string, separated by the specified delimiter (`, ` in this case).",
  },
  {
    question: "What is the difference between `splice()` and `slice()`?",
    options: [
      "`splice()` removes or replaces elements, `slice()` extracts a portion of the array.",
      "Both methods return a shallow copy of the array.",
      "`slice()` changes the original array, `splice()` does not.",
      "There is no difference.",
    ],
    correctAnswer:
      "`splice()` removes or replaces elements, `slice()` extracts a portion of the array.",
    explanation:
      "`splice()` alters the original array by adding or removing elements, while `slice()` creates a shallow copy of a portion of the array without modifying the original.",
  },
  {
    question: "What is the output of `arr.reverse()` if `arr = [1, 2, 3]`?",
    options: ["[3, 2, 1]", "[1, 2, 3]", "[2, 1, 3]", "[1, 3, 2]"],
    correctAnswer: "[3, 2, 1]",
    explanation:
      "`reverse()` reverses the order of the array elements in place and returns the reversed array.",
  },
  {
    question:
      "What will `arr.map((el) => el * 2)` return if `arr = [1, 2, 3]`?",
    options: ["[2, 4, 6]", "[1, 4, 9]", "[2, 3, 4]", "[1, 2, 3]"],
    correctAnswer: "[2, 4, 6]",
    explanation:
      "`map()` creates a new array with the results of applying the function (`el * 2`) to each element of the original array.",
  },
  {
    question:
      "What is the complexity of the `Array.prototype.sort()` method in the average case?",
    options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
    correctAnswer: "O(n log n)",
    explanation:
      "`sort()` typically uses algorithms like QuickSort or MergeSort, which have an average complexity of `O(n log n)`.",
  },
  {
    question: "How can you merge multiple arrays into a single array in ES6?",
    options: [
      "arr.concat(arr1, arr2)",
      "arr.merge(arr1, arr2)",
      "arr.concat()",
      "arr.append(arr1, arr2)",
    ],
    correctAnswer: "arr.concat(arr1, arr2)",
    explanation:
      "`concat()` merges multiple arrays (or values) into one array, returning a new array without changing the original.",
  },
  {
    question: "What is the behavior of `arr.shift()`?",
    options: [
      "Removes the last element",
      "Removes the first element",
      "Adds an element at the beginning",
      "Adds an element at the end",
    ],
    correctAnswer: "Removes the first element",
    explanation:
      "`shift()` removes the first element from an array and returns that element, shifting all other elements to a lower index.",
  },
  {
    question:
      "What will be the result of `arr.slice(-2)` if `arr = [1, 2, 3, 4, 5]`?",
    options: ["[1, 2]", "[4, 5]", "[3, 4, 5]", "[2, 3, 4, 5]"],
    correctAnswer: "[4, 5]",
    explanation:
      "`slice(-2)` extracts the last two elements of the array without modifying the original array.",
  },
  {
    question:
      "What is the output of `arr.find(el => el > 10)` if `arr = [5, 10, 15, 20]`?",
    options: ["10", "15", "20", "undefined"],
    correctAnswer: "15",
    explanation:
      "`find()` returns the first element that satisfies the provided testing function. In this case, the first element greater than `10` is `15`.",
  },
  {
    question:
      "Which of the following will cause an error when accessing an index in an array?",
    options: ["arr[0]", "arr[1]", "arr['name']", "arr[-1]"],
    correctAnswer: "arr['name']",
    explanation:
      "Arrays are indexed by integers, so attempting to access a string property like `'name'` will return `undefined` and not throw an error. However, the use of negative indexing may not work as expected in all environments.",
  },
  {
    question: "What does the `arr.reduce()` method do?",
    options: [
      "Creates a new array by applying a function on each element",
      "Reduces an array to a single value",
      "Sorts an array in place",
      "Creates a shallow copy of the array",
    ],
    correctAnswer: "Reduces an array to a single value",
    explanation:
      "`reduce()` applies a function to each element of the array, accumulating the result into a single value, which is returned.",
  },
  {
    question: "What is the behavior of the `arr.forEach()` method?",
    options: [
      "Modifies the original array and returns it",
      "Iterates through each element and returns a new array",
      "Applies a function to each element without returning a value",
      "Creates a shallow copy of the array",
    ],
    correctAnswer:
      "Applies a function to each element without returning a value",
    explanation:
      "`forEach()` executes a provided function once for each element in the array but does not return any value.",
  },
  {
    question: "How can you check if an array contains a certain element?",
    options: [
      "arr.contains('value')",
      "arr.exists('value')",
      "arr.includes('value')",
      "arr.indexOf('value') > -1",
    ],
    correctAnswer: "arr.includes('value')",
    explanation:
      "`includes()` checks if the array contains the specified element and returns `true` or `false`.",
  },
  {
    question:
      "What is the time complexity of accessing an element by index in an array?",
    options: ["O(1)", "O(n)", "O(n log n)", "O(log n)"],
    correctAnswer: "O(1)",
    explanation:
      "Accessing an element by index in an array is a constant-time operation, which is why its complexity is `O(1)`. The index is directly mapped to a memory address.",
  },
  {
    question:
      "How can you prevent an array from being modified (making it immutable)?",
    options: [
      "Object.freeze(arr)",
      "arr.freeze()",
      "arr.lock()",
      "Object.seal(arr)",
    ],
    correctAnswer: "Object.freeze(arr)",
    explanation:
      "`Object.freeze()` prevents the array from being modified (e.g., adding, removing, or changing elements) but does not make the array itself immutable.",
  },
  {
    question: "What will `arr.sort()` return if `arr = [10, 2, 5, 1]`?",
    options: [
      "[1, 2, 5, 10]",
      "[10, 2, 5, 1]",
      "[2, 10, 5, 1]",
      "[5, 10, 2, 1]",
    ],
    correctAnswer: "[1, 10, 2, 5]",
    explanation:
      "`sort()` uses string comparison by default, which leads to sorting numbers as strings. Therefore, the result will be `[1, 10, 2, 5]`, not `[1, 2, 5, 10]`.",
  },
  {
    question:
      "What does the following code output: `arr = [1, 2, 3, 4]; arr.splice(2, 0, 5, 6)`?",
    options: [
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 5, 6, 3, 4]",
      "[1, 2, 5, 6, 3, 4, 5]",
      "[1, 2, 6, 5, 3, 4]",
    ],
    correctAnswer: "[1, 2, 5, 6, 3, 4]",
    explanation:
      "`splice()` inserts elements (`5` and `6`) at index `2` without removing any existing elements, thus modifying the original array to `[1, 2, 5, 6, 3, 4]`.",
  },
];
