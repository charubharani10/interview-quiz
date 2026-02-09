export const test4 = [
  {
    question:
      "In JavaScript, what is the result of `arr.concat([4, 5])` if `arr = [1, 2, 3]`?",
    options: ["[1, 2, 3, 4, 5]", "[4, 5]", "[1, 2, 3]", "[1, 2, 3, [4, 5]]"],
    correctAnswer: "[1, 2, 3, 4, 5]",
    explanation:
      "The `concat()` method combines arrays or values, and returns a new array with the elements of the original array followed by the new values.",
  },
  {
    question:
      "What is the output of `arr.slice(1, 3)` if `arr = [1, 2, 3, 4, 5]`?",
    options: ["[1, 2]", "[2, 3]", "[1, 2, 3]", "[3, 4, 5]"],
    correctAnswer: "[2, 3]",
    explanation:
      "`slice(1, 3)` extracts the elements starting from index `1` up to, but not including, index `3`. Hence, the result is `[2, 3]`.",
  },
  {
    question:
      "Which method can be used to reverse the order of elements in an array?",
    options: ["reverse()", "invert()", "flip()", "revert()"],
    correctAnswer: "reverse()",
    explanation:
      "The `reverse()` method reverses the order of elements in an array in place.",
  },
  {
    question:
      "What is the difference between `splice()` and `slice()` methods in JavaScript?",
    options: [
      "`splice()` removes elements and can add new ones, while `slice()` only returns a shallow copy of a portion of the array.",
      "`slice()` modifies the array, while `splice()` does not.",
      "`splice()` is used to reverse an array, while `slice()` is used to sort an array.",
      "There is no difference between the two.",
    ],
    correctAnswer:
      "`splice()` removes elements and can add new ones, while `slice()` only returns a shallow copy of a portion of the array.",
    explanation:
      "`splice()` modifies the array by removing and/or adding elements, while `slice()` returns a new array with a portion of the original array, without modifying the original array.",
  },
  {
    question: "In Python, how can you remove an element from a list by value?",
    options: [
      "list.remove(value)",
      "list.pop(value)",
      "list.delete(value)",
      "list.erase(value)",
    ],
    correctAnswer: "list.remove(value)",
    explanation:
      "The `remove()` method removes the first occurrence of the specified value from the list.",
  },
  {
    question:
      "Which method can be used to remove the first element of an array in JavaScript?",
    options: ["pop()", "shift()", "slice()", "remove()"],
    correctAnswer: "shift()",
    explanation:
      "The `shift()` method removes the first element of an array and shifts all other elements one position to the left.",
  },
  {
    question:
      "How do you find the index of the first occurrence of an element in a JavaScript array?",
    options: [
      "arr.indexOf()",
      "arr.findIndex()",
      "arr.search()",
      "arr.getIndex()",
    ],
    correctAnswer: "arr.indexOf()",
    explanation:
      "The `indexOf()` method returns the index of the first occurrence of an element in an array, or `-1` if the element is not found.",
  },
  {
    question:
      "Which of the following methods can be used to sort an array in JavaScript?",
    options: ["sort()", "arr.sort()", "arr.order()", "arr.orderBy()"],
    correctAnswer: "arr.sort()",
    explanation:
      "The `sort()` method sorts the elements of an array in place. It can sort numbers or strings depending on the callback provided.",
  },
  {
    question:
      "What is the correct syntax to access the last element of an array `arr` in JavaScript?",
    options: [
      "arr[arr.length - 1]",
      "arr[arr.length]",
      "arr.last()",
      "arr.get(arr.length - 1)",
    ],
    correctAnswer: "arr[arr.length - 1]",
    explanation:
      "To access the last element of an array, use the `arr.length - 1` index, as arrays are zero-indexed.",
  },
  {
    question:
      "In Java, how do you declare an array of integers with 5 elements?",
    options: [
      "int[] arr = {1, 2, 3, 4, 5};",
      "int arr[5] = {1, 2, 3, 4, 5};",
      "int arr = new int[5] {1, 2, 3, 4, 5};",
      "array<int> arr = {1, 2, 3, 4, 5};",
    ],
    correctAnswer: "int arr[5] = {1, 2, 3, 4, 5};",
    explanation:
      "In Java, arrays are declared by specifying the type followed by the size in square brackets. Here, `int arr[5]` declares an array with 5 integers.",
  },
  {
    question:
      "What will be the result of the following code: `arr = [1, 2, 3]; arr.splice(1, 1, 4, 5);`?",
    options: ["[1, 4, 5, 3]", "[1, 2, 3, 4, 5]", "[4, 5, 3]", "[1, 4, 5]"],
    correctAnswer: "[1, 4, 5, 3]",
    explanation:
      "`splice()` removes one element at index 1, then inserts `4` and `5` at that index. The remaining elements (`3`) are shifted.",
  },
  {
    question:
      "Which method in JavaScript is used to transform an array of strings into a single string?",
    options: ["join()", "concat()", "combine()", "merge()"],
    correctAnswer: "join()",
    explanation:
      "The `join()` method in JavaScript joins all elements of an array into a single string. It accepts a separator argument.",
  },
  {
    question:
      "What is the result of `arr.filter(x => x > 2)` for `arr = [1, 2, 3, 4]`?",
    options: ["[3, 4]", "[1, 2, 3]", "[2, 3]", "[1, 4]"],
    correctAnswer: "[3, 4]",
    explanation:
      "The `filter()` method returns an array containing all elements that satisfy the condition in the callback. Here, it returns elements greater than `2`.",
  },
  {
    question:
      "In Python, which method is used to add multiple elements to the end of a list?",
    options: ["extend()", "append()", "insert()", "add()"],
    correctAnswer: "extend()",
    explanation:
      "The `extend()` method adds elements from another list (or iterable) to the end of the list.",
  },
  {
    question:
      "Which method would you use in JavaScript to create a new array with the results of applying a function to each element of the original array?",
    options: ["map()", "forEach()", "filter()", "reduce()"],
    correctAnswer: "map()",
    explanation:
      "The `map()` method creates a new array with the results of applying a function to every element in the original array.",
  },
  {
    question: "In C++, what is the difference between arrays and vectors?",
    options: [
      "Arrays are fixed-size, while vectors are dynamic.",
      "Vectors are faster than arrays.",
      "Arrays can hold more elements than vectors.",
      "There is no difference.",
    ],
    correctAnswer: "Arrays are fixed-size, while vectors are dynamic.",
    explanation:
      "In C++, arrays have a fixed size, while vectors can dynamically resize as elements are added or removed.",
  },
  {
    question:
      "What is the return value of `arr.find(x => x > 3)` for `arr = [1, 2, 3, 4, 5]`?",
    options: ["4", "5", "undefined", "3"],
    correctAnswer: "4",
    explanation:
      "The `find()` method returns the first element that satisfies the condition. Here, it returns `4`, as it is the first element greater than `3`.",
  },
  {
    question:
      "What will be the output of `arr.sort()` if `arr = [20, 5, 100, 1]`?",
    options: [
      "[1, 5, 20, 100]",
      "[100, 20, 5, 1]",
      "[1, 100, 20, 5]",
      "[5, 1, 20, 100]",
    ],
    correctAnswer: "[1, 100, 20, 5]",
    explanation:
      "By default, the `sort()` method sorts elements as strings. So `100` comes before `20` and `5` because it has a smaller ASCII value.",
  },
  {
    question:
      "In Python, how do you concatenate two lists, `list1` and `list2`?",
    options: [
      "list1.concat(list2)",
      "list1.append(list2)",
      "list1 + list2",
      "list1.extend(list2)",
    ],
    correctAnswer: "list1 + list2",
    explanation:
      "In Python, lists can be concatenated using the `+` operator, which combines two lists into a single one.",
  },
  {
    question: "In JavaScript, what does the `reduce()` method do?",
    options: [
      "Reduces the size of the array",
      "Iterates over an array and applies a function to each element",
      "Merges an array into a single value",
      "Adds elements to the end of an array",
    ],
    correctAnswer: "Merges an array into a single value",
    explanation:
      "`reduce()` executes a reducer function (that you provide) on each element of the array, resulting in a single output value.",
  },
  {
    question: "What will `arr.length` return for an empty array `arr = []`?",
    options: ["0", "null", "undefined", "An error"],
    correctAnswer: "0",
    explanation:
      "An empty array has a length of `0`, as it contains no elements.",
  },
];
