export const test2 = [
  {
    question: "How do you declare a two-dimensional array in C?",
    options: [
      "int arr[5][5];",
      "int arr[5,5];",
      "int arr[];",
      "array arr[5][5];",
    ],
    correctAnswer: "int arr[5][5];",
    explanation:
      "In C, a two-dimensional array is declared with two sets of square brackets, such as int arr[5][5].",
  },
  {
    question:
      "What is the default value of an uninitialized array of integers in Java?",
    options: ["0", "null", "1", "undefined"],
    correctAnswer: "0",
    explanation:
      "In Java, the default value of an uninitialized array of integers is 0.",
  },
  {
    question:
      "Which array method is used to add an element to the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: "push()",
    explanation:
      "In JavaScript, the push() method adds one or more elements to the end of an array.",
  },
  {
    question: "Which of the following best describes dynamic arrays?",
    options: [
      "Arrays that resize automatically when more elements are added",
      "Arrays with a fixed size",
      "Arrays that store only strings",
      "Arrays stored in ROM",
    ],
    correctAnswer:
      "Arrays that resize automatically when more elements are added",
    explanation:
      "Dynamic arrays automatically resize themselves to accommodate more elements as needed.",
  },
  {
    question:
      "How do you remove the first element from an array in JavaScript?",
    options: ["arr.shift()", "arr.pop()", "arr.remove(0)", "arr.delete(0)"],
    correctAnswer: "arr.shift()",
    explanation:
      "In JavaScript, the shift() method removes the first element from an array and returns that element.",
  },
  {
    question:
      "Which of the following is true about arrays in most programming languages?",
    options: [
      "They are stored in contiguous memory locations",
      "They can store elements of different data types",
      "Their size can be changed dynamically",
      "They do not allow random access",
    ],
    correctAnswer: "They are stored in contiguous memory locations",
    explanation:
      "Arrays are stored in contiguous memory locations, allowing efficient indexing.",
  },
  {
    question:
      "What is the time complexity of inserting an element at the end of an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Inserting an element at the end of an array takes constant time, O(1), assuming there is enough space in the array.",
  },
  {
    question: "What is an example of a dynamic array in Java?",
    options: ["ArrayList", "Array", "LinkedList", "HashMap"],
    correctAnswer: "ArrayList",
    explanation:
      "In Java, ArrayList is a dynamic array that can resize itself when more elements are added.",
  },
  {
    question:
      "Which of the following methods removes the last element from an array in JavaScript?",
    options: ["pop()", "push()", "shift()", "delete()"],
    correctAnswer: "pop()",
    explanation:
      "In JavaScript, the pop() method removes the last element from an array and returns it.",
  },
  {
    question: "What is a major limitation of arrays?",
    options: [
      "Fixed size",
      "Slow indexing",
      "Cannot store integers",
      "Can only be used with strings",
    ],
    correctAnswer: "Fixed size",
    explanation:
      "The primary limitation of arrays is that they have a fixed size, meaning the number of elements must be known in advance.",
  },
  {
    question:
      "What does the `length` property of an array return in JavaScript?",
    options: [
      "The number of elements in the array",
      "The index of the last element",
      "The size of the memory occupied by the array",
      "The maximum capacity of the array",
    ],
    correctAnswer: "The number of elements in the array",
    explanation:
      "In JavaScript, the `length` property returns the number of elements in the array, starting from index 0.",
  },
  {
    question: "How do you concatenate two arrays in JavaScript?",
    options: [
      "array1.concat(array2)",
      "array1.append(array2)",
      "array1.merge(array2)",
      "array1.add(array2)",
    ],
    correctAnswer: "array1.concat(array2)",
    explanation:
      "In JavaScript, you use the `concat()` method to combine two arrays.",
  },
  {
    question: "Which of the following best describes a sparse array?",
    options: [
      "An array where most of the elements are undefined",
      "An array with duplicate values",
      "An array with negative indices",
      "An array that can store both numbers and strings",
    ],
    correctAnswer: "An array where most of the elements are undefined",
    explanation:
      "A sparse array is an array in which most elements have no value or are undefined.",
  },
  {
    question:
      "In Python, which of the following will reverse the elements in an array?",
    options: [
      "array.reverse()",
      "array[::-1]",
      "array.reverse[::-1]",
      "array.invert()",
    ],
    correctAnswer: "array[::-1]",
    explanation:
      "In Python, you can reverse an array using slicing: `array[::-1]`.",
  },
  {
    question: "How can you create a copy of an array in Python?",
    options: [
      "array.copy()",
      "array[:] or array.copy()",
      "array.duplicate()",
      "array.append(array)",
    ],
    correctAnswer: "array[:] or array.copy()",
    explanation:
      "In Python, you can copy an array using slicing `array[:]` or with the `copy()` method.",
  },
  {
    question:
      "What is the index of the last element of an array with 5 elements?",
    options: ["4", "5", "6", "Depends on the language"],
    correctAnswer: "4",
    explanation:
      "Array indices start from 0, so in an array of 5 elements, the last element is at index 4.",
  },
  {
    question: "In which language is an array declared with 'Dim arr(5)'?",
    options: ["VBScript", "JavaScript", "Python", "Java"],
    correctAnswer: "VBScript",
    explanation:
      "In VBScript (and similar languages like Visual Basic), arrays are declared using `Dim arr(5)`.",
  },
  {
    question: "How do you initialize an array with specific values in Java?",
    options: [
      "int[] arr = {1, 2, 3};",
      "int[] arr = new int[3]{1, 2, 3};",
      "int arr = {1, 2, 3};",
      "new int arr = {1, 2, 3};",
    ],
    correctAnswer: "int[] arr = {1, 2, 3};",
    explanation:
      "In Java, you can initialize an array with specific values using curly brackets, like `int[] arr = {1, 2, 3};`.",
  },
  {
    question: "How do you remove a specific element from an array in Python?",
    options: [
      "array.remove(element)",
      "array.delete(element)",
      "array.pop()",
      "array.push()",
    ],
    correctAnswer: "array.remove(element)",
    explanation:
      "In Python, you can remove a specific element from an array using the `remove()` method.",
  },
  {
    question:
      "What is the time complexity of accessing an element by index in an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(1)",
    explanation:
      "Accessing an element by index in an array has a time complexity of O(1), meaning constant time.",
  },
];
