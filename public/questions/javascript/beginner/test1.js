export const test1 = [
  {
    question: "What will be the output of: console.log(typeof([]));",
    options: [
      "array",
      "object",
      "undefined",
      "null"
    ],
    correctAnswer: "object",
    explanation: "In JavaScript, arrays are actually objects. The typeof operator returns 'object' for arrays because arrays are specialized objects with numeric keys and a length property."
  },
  {
    question: "Which of the following is the correct way to declare a variable that cannot be reassigned?",
    options: [
      "var x = 5;",
      "let x = 5;",
      "const x = 5;",
      "static x = 5;"
    ],
    correctAnswer: "const x = 5;",
    explanation: "The 'const' keyword is used to declare variables that cannot be reassigned. Once a value is assigned to a const variable, it cannot be changed. However, for objects and arrays, the properties or elements can still be modified."
  },
  {
    question: "What is the result of: '5' + 2",
    options: [
      "7",
      "52",
      "NaN",
      "Error"
    ],
    correctAnswer: "52",
    explanation: "When the + operator is used with a string and a number, JavaScript performs string concatenation instead of addition. The number 2 is converted to a string and concatenated with '5'."
  },
  {
    question: "Which method is used to remove the last element from an array?",
    options: [
      "shift()",
      "unshift()",
      "pop()",
      "push()"
    ],
    correctAnswer: "pop()",
    explanation: "The pop() method removes the last element from an array and returns that element. This method changes the length of the array. If you want to remove the first element, use shift() instead."
  },
  {
    question: "What is the correct way to check if a variable 'x' is undefined?",
    options: [
      "if (x === undefined)",
      "if (x == null)",
      "if (typeof x === 'undefined')",
      "if (!x)"
    ],
    correctAnswer: "if (typeof x === 'undefined')",
    explanation: "Using typeof is the safest way to check if a variable is undefined because it works even if the variable hasn't been declared. Other methods might throw a ReferenceError if the variable doesn't exist."
  },
  {
    question: "What is the output of: Boolean('false')",
    options: [
      "false",
      "true",
      "undefined",
      "NaN"
    ],
    correctAnswer: "true",
    explanation: "When converting a string to a boolean using the Boolean() function, any non-empty string (including the string 'false') will return true. Only an empty string '' would return false."
  },
  {
    question: "Which of these is NOT a valid way to declare a function in JavaScript?",
    options: [
      "function myFunc() {}",
      "const myFunc = function() {}",
      "const myFunc = () => {}",
      "function = myFunc() {}"
    ],
    correctAnswer: "function = myFunc() {}",
    explanation: "There are three main ways to declare functions in JavaScript: function declarations, function expressions, and arrow functions. The syntax 'function = myFunc() {}' is invalid and will cause a syntax error."
  },
  {
    question: "What is the result of: [1, 2, 3].map(x => x * 2)",
    options: [
      "[1, 2, 3]",
      "[2, 4, 6]",
      "undefined",
      "Error"
    ],
    correctAnswer: "[2, 4, 6]",
    explanation: "The map() method creates a new array with the results of calling a function for every array element. In this case, each element is multiplied by 2, resulting in a new array [2, 4, 6]."
  },
  {
    question: "What does the '===' operator do?",
    options: [
      "Assigns a value",
      "Compares values only",
      "Compares values and types",
      "Checks if a value exists"
    ],
    correctAnswer: "Compares values and types",
    explanation: "The strict equality operator (===) checks both value and type equality without type coercion. Unlike the loose equality operator (==), it doesn't perform type conversion before comparison."
  },
  {
    question: "How do you properly comment multiple lines in JavaScript?",
    options: [
      "// This is a comment //",
      "/* This is a comment */",
      "<!-- This is a comment -->",
      "# This is a comment #"
    ],
    correctAnswer: "/* This is a comment */",
    explanation: "In JavaScript, multi-line comments are written between /* and */. Single-line comments use //, HTML-style comments (<!--) don't work in JavaScript, and # is not a valid comment symbol in JavaScript."
  }
];
