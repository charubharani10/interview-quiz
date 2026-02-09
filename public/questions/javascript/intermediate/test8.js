export const test8 = [
  {
    question: "How do you convert a number to a string in JavaScript?",
    options: ["toString()", "String()", "concat()", "Both a) and b)"],
    correctAnswer: "Both a) and b)",
    explanation:
      "Numbers can be converted to strings using the toString() method or the String() constructor.",
  },
  {
    question: "What is the output of console.log(1 + '1' - 1) in JavaScript?",
    options: ["10", "1", "'10'", "undefined"],
    correctAnswer: "10",
    explanation:
      "In this expression, '1' is a string, so 1 + '1' results in '11'. Subtracting 1 from '11' converts '11' to a number and performs the arithmetic, resulting in 10.",
  },
  {
    question: "How do you get the type of a variable in JavaScript?",
    options: ["typeof", "instanceof", "getType()", "isType()"],
    correctAnswer: "typeof",
    explanation:
      "The 'typeof' operator is used to get the type of a variable in JavaScript, such as 'number', 'string', 'object', etc.",
  },
  {
    question: "What is the purpose of Object.assign() in JavaScript?",
    options: [
      "Copies values of all enumerable own properties from one or more source objects to a target object",
      "Creates a new object with the specified prototype",
      "Adds new properties to an existing object",
      "Removes properties from an object",
    ],
    correctAnswer:
      "Copies values of all enumerable own properties from one or more source objects to a target object",
    explanation:
      "Object.assign() is used to copy values from one or more source objects to a target object, merging their properties.",
  },
  {
    question: "How do you define an arrow function in JavaScript?",
    options: [
      "const myFunc = () => { }",
      "function myFunc() { }",
      "const myFunc = function() { }",
      "const myFunc = function*() { }",
    ],
    correctAnswer: "const myFunc = () => { }",
    explanation:
      "Arrow functions are defined using the '=>' syntax and provide a more concise way to write function expressions. They also have different behavior for 'this'.",
  },
  {
    question: "What is the output of console.log({} + []) in JavaScript?",
    options: ["'[object Object]'", "{}", "undefined", "[]"],
    correctAnswer: "'[object Object]'",
    explanation:
      "In JavaScript, adding an object and an array results in the string '[object Object]', because the object is converted to a string representation.",
  },
  {
    question: "How do you get a function's argument count in JavaScript?",
    options: [
      "arguments.length",
      "function.length",
      "count()",
      "arguments.count",
    ],
    correctAnswer: "arguments.length",
    explanation:
      "The 'arguments.length' property returns the number of arguments passed to a function. For ES6 functions, you use 'function.length' to get the number of parameters.",
  },
  {
    question: "What is the output of console.log(2 + 3 * '2') in JavaScript?",
    options: ["10", "12", "'52'", "undefined"],
    correctAnswer: "'52'",
    explanation:
      "In this expression, '3 * '2'' evaluates to 6, and adding 2 to it results in 8. However, since '2' is a string, the result is concatenated as '52'.",
  },
  {
    question: "How do you define a method within a JavaScript object?",
    options: [
      "method() { }",
      "method: function() { }",
      "method: () => { }",
      "method: new Function()",
    ],
    correctAnswer: "method: function() { }",
    explanation:
      "Methods within objects can be defined using the function shorthand 'method() { }' or the function expression 'method: function() { }'.",
  },
  {
    question:
      "What is the output of console.log([1, 2, 3] - [1, 2, 3]) in JavaScript?",
    options: ["NaN", "0", "undefined", "[]"],
    correctAnswer: "NaN",
    explanation:
      "In JavaScript, trying to perform arithmetic operations on arrays results in NaN, as arrays are converted to strings and subtraction is not defined for them.",
  },
  {
    question: "How do you define a class method in JavaScript?",
    options: [
      "class MyClass { static method() { } }",
      "class MyClass { method() { } }",
      "class MyClass { function method() { } }",
      "class MyClass { method: function() { } }",
    ],
    correctAnswer: "class MyClass { method() { } }",
    explanation:
      "Class methods in JavaScript are defined using the syntax 'method() { }' inside a class. Static methods use 'static method() { }'.",
  },
  {
    question: "What is the output of console.log(Number('')) in JavaScript?",
    options: ["0", "NaN", "undefined", "''"],
    correctAnswer: "0",
    explanation:
      "The Number() function converts an empty string to 0 in JavaScript.",
  },
  {
    question: "What does Array.prototype.flat() do in JavaScript?",
    options: [
      "Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth",
      "Flattens a multi-dimensional array into a one-dimensional array",
      "Finds the first element that satisfies the provided testing function",
      "Sorts the array in ascending order",
    ],
    correctAnswer:
      "Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth",
    explanation:
      "Array.prototype.flat() creates a new array with all sub-array elements concatenated into it, recursively flattening the array to a specified depth.",
  },
  {
    question: "What does the await keyword do in JavaScript?",
    options: [
      "Pauses the execution of an async function and waits for the Promise to resolve or reject",
      "Waits for the completion of a synchronous function",
      "Suspends the entire program execution",
      "Waits for a specified amount of time",
    ],
    correctAnswer:
      "Pauses the execution of an async function and waits for the Promise to resolve or reject",
    explanation:
      "The 'await' keyword is used inside async functions to pause execution until a Promise is resolved or rejected.",
  },
  {
    question: "How do you use Object.defineProperty() in JavaScript?",
    options: [
      "Defines a new property or modifies an existing property on an object",
      "Creates a new object with the specified properties",
      "Deletes a property from an object",
      "Enumerates all properties of an object",
    ],
    correctAnswer:
      "Defines a new property or modifies an existing property on an object",
    explanation:
      "Object.defineProperty() is used to define a new property or modify an existing property on an object with specified attributes.",
  },
  {
    question: "What is the output of console.log('1' - 1) in JavaScript?",
    options: ["0", "'0'", "NaN", "undefined"],
    correctAnswer: "0",
    explanation:
      "When performing arithmetic operations with a string and a number, JavaScript converts the string to a number. Thus, '1' - 1 results in 0.",
  },
  {
    question: "How do you create a WeakSet in JavaScript?",
    options: [
      "new WeakSet()",
      "WeakSet.create()",
      "WeakSet.new()",
      "new Set()",
    ],
    correctAnswer: "new WeakSet()",
    explanation:
      "WeakSet is created using the 'new WeakSet()' constructor. It holds weak references to objects, meaning the objects can be garbage collected if there are no other references.",
  },
  {
    question: "What is the result of console.log('5' - 2) in JavaScript?",
    options: ["3", "'3'", "NaN", "undefined"],
    correctAnswer: "3",
    explanation:
      "When subtracting a number from a string, JavaScript converts the string to a number before performing the arithmetic. Thus, '5' - 2 results in 3.",
  },
  {
    question: "How do you define a default parameter in a JavaScript function?",
    options: [
      "function myFunc(param = defaultValue) { }",
      "function myFunc(param: defaultValue) { }",
      "function myFunc(param, defaultValue) { }",
      "function myFunc(param: defaultValue = param) { }",
    ],
    correctAnswer: "function myFunc(param = defaultValue) { }",
    explanation:
      "Default parameters in JavaScript functions are defined by assigning a default value to a parameter, as in 'function myFunc(param = defaultValue) { }'.",
  },
  {
    question: "What does Array.prototype.includes() do in JavaScript?",
    options: [
      "Determines whether an array contains a certain value among its entries",
      "Finds the index of a value in an array",
      "Returns a new array with elements that satisfy the provided testing function",
      "Checks if all elements in an array are unique",
    ],
    correctAnswer:
      "Determines whether an array contains a certain value among its entries",
    explanation:
      "Array.prototype.includes() checks if a certain value exists in an array and returns true or false.",
  },
];
