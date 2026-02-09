export const test4 = [
  {
    question:
      "How do you define a default parameter in a function in JavaScript?",
    options: [
      "function myFunction(param = defaultValue) { }",
      "function myFunction(param, defaultValue) { }",
      "function myFunction(param) { if (param === undefineparam = defaultValue; }",
      "function myFunction(param: defaultValue) { }",
    ],
    correctAnswer: "function myFunction(param = defaultValue) { }",
    explanation:
      "You define a default parameter by using the syntax 'param = defaultValue' in the function declaration.",
  },
  {
    question:
      "Which method is used to convert a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "Object.fromJSON()",
    ],
    correctAnswer: "JSON.parse()",
    explanation:
      "'JSON.parse()' is used to convert a JSON string into a JavaScript object.",
  },
  {
    question: "How do you clone an object in JavaScript?",
    options: [
      "Object.assign({}, obj)",
      "Object.clone(obj)",
      "JSON.parse(JSON.stringify(obj))",
      "obj.clone()",
    ],
    correctAnswer: "Object.assign({}, obj) and JSON.parse(JSON.stringify(obj))",
    explanation:
      "You can clone an object using 'Object.assign({}, obj)' or 'JSON.parse(JSON.stringify(obj))'. The first method performs a shallow copy, while the second method performs a deep copy.",
  },
  {
    question:
      "Which method is used to find the first element that satisfies a condition in an array?",
    options: ["find()", "filter()", "some()", "every()"],
    correctAnswer: "find()",
    explanation:
      "'find()' returns the first element in the array that satisfies the provided testing function.",
  },
  {
    question: "What does Number('123') return in JavaScript?",
    options: ["123", "'123'", "NaN", "undefined"],
    correctAnswer: "123",
    explanation:
      "The 'Number()' function converts the string '123' to the number 123.",
  },
  {
    question: "What does the Math.random() function return?",
    options: [
      "A random number between 0 (inclusive) and 1 (exclusive)",
      "A random integer between 0 and 1",
      "A random boolean value",
      "A random string",
    ],
    correctAnswer: "A random number between 0 (inclusive) and 1 (exclusive)",
    explanation:
      "The 'Math.random()' function generates a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive).",
  },
  {
    question: "How do you add a new method to a JavaScript prototype?",
    options: [
      "Object.prototype.newMethod = function() { }",
      "Array.prototype.newMethod = function() { }",
      "Function.prototype.newMethod = function() { }",
      "Prototype.newMethod = function() { }",
    ],
    correctAnswer: "Array.prototype.newMethod = function() { }",
    explanation:
      "You add a method to a prototype (e.g., Array) by assigning a function to 'Array.prototype.newMethod'.",
  },
  {
    question: "What does Array.from() do in JavaScript?",
    options: [
      "Creates a new array from an array-like or iterable object",
      "Converts an array into a string",
      "Converts an array into an object",
      "Filters an array based on a condition",
    ],
    correctAnswer: "Creates a new array from an array-like or iterable object",
    explanation:
      "The 'Array.from()' method creates a new array instance from an array-like or iterable object.",
  },
  {
    question:
      "Which method is used to find all elements that pass a test in an array?",
    options: ["filter()", "map()", "reduce()", "forEach()"],
    correctAnswer: "filter()",
    explanation:
      "The 'filter()' method creates a new array with all elements that pass the test implemented by the provided function.",
  },
  {
    question: "What does JSON.stringify({}) return?",
    options: ['"{}"', "{}", '"[object Object]"', "null"],
    correctAnswer: '"{}"',
    explanation:
      "'JSON.stringify({})' converts the empty object to a JSON string representation, which is \"{}\".",
  },
  {
    question: "What will 1 / 0 return in JavaScript?",
    options: ["Infinity", "0", "NaN", "undefined"],
    correctAnswer: "Infinity",
    explanation: "Dividing 1 by 0 in JavaScript results in 'Infinity'.",
  },
  {
    question: "How do you find the length of a string in JavaScript?",
    options: ["str.length", "str.size", "str.count()", "str.elements()"],
    correctAnswer: "str.length",
    explanation:
      "The 'length' property returns the number of characters in a string.",
  },
  {
    question:
      "Which method is used to convert a string to lowercase in JavaScript?",
    options: ["toLowerCase()", "toLower()", "lowercase()", "toSmall()"],
    correctAnswer: "toLowerCase()",
    explanation:
      "The 'toLowerCase()' method converts all characters in a string to lowercase.",
  },
  {
    question: "What will null === undefined return?",
    options: ["false", "true", "null", "undefined"],
    correctAnswer: "false",
    explanation:
      "In JavaScript, 'null' and 'undefined' are not strictly equal, so 'null === undefined' returns false.",
  },
  {
    question: "What is the output of 1 + '1' in JavaScript?",
    options: ['"11"', "2", "11", "NaN"],
    correctAnswer: '"11"',
    explanation:
      "In JavaScript, adding a number to a string results in string concatenation, so '1 + '1'' results in \"11\".",
  },
  {
    question: "How do you handle asynchronous operations in JavaScript?",
    options: [
      "Using Promises",
      "Using async/await",
      "Using callbacks",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "Asynchronous operations in JavaScript can be handled using Promises, async/await, or callbacks.",
  },
  {
    question: "What is the arguments object in JavaScript?",
    options: [
      "An array-like object that contains all arguments passed to a function",
      "An object that stores function definitions",
      "An object that holds global variables",
      "An object that defines the arguments of a function",
    ],
    correctAnswer:
      "An array-like object that contains all arguments passed to a function",
    explanation:
      "The 'arguments' object is an array-like object that holds all the arguments passed to a function.",
  },
  {
    question: "What will true + 1 return in JavaScript?",
    options: ["2", "true1", "1", "NaN"],
    correctAnswer: "2",
    explanation:
      "In JavaScript, 'true' is coerced to 1 in numeric operations, so 'true + 1' evaluates to 2.",
  },
  {
    question:
      "Which method is used to join all elements of an array into a string?",
    options: ["join()", "concat()", "merge()", "combine()"],
    correctAnswer: "join()",
    explanation:
      "The 'join()' method combines all elements of an array into a single string.",
  },
  {
    question:
      "How do you create a new instance of an object using a constructor function in JavaScript?",
    options: [
      "new ConstructorFunction()",
      "ConstructorFunction.create()",
      "ConstructorFunction.new()",
      "new Object()",
    ],
    correctAnswer: "new ConstructorFunction()",
    explanation:
      "To create a new instance of an object using a constructor function, you use 'new ConstructorFunction()'.",
  },
];
