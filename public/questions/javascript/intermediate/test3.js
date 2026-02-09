export const test3 = [
  {
    question:
      "Which method is used to find a specific element in an array and execute a function on it?",
    options: ["find()", "filter()", "map()", "some()"],
    correctAnswer: "find()",
    explanation:
      "'find()' returns the first element in an array that satisfies the provided testing function and does not execute the function on every element like 'map()'.",
  },
  {
    question: "How do you merge two arrays in JavaScript?",
    options: [
      "array1.concat(array2)",
      "array1.append(array2)",
      "array1.join(array2)",
      "array1.add(array2)",
    ],
    correctAnswer: "array1.concat(array2)",
    explanation:
      "'array1.concat(array2)' merges two arrays into one by appending the elements of 'array2' to 'array1'.",
  },
  {
    question: "What is the purpose of the eval() function in JavaScript?",
    options: [
      "Evaluates a string as JavaScript code",
      "Validates a string",
      "Converts a string to a number",
      "Encodes a string",
    ],
    correctAnswer: "Evaluates a string as JavaScript code",
    explanation:
      "'eval()' executes a string of JavaScript code, which can be a security risk if not used carefully.",
  },
  {
    question: "How do you create a new object using a class in JavaScript?",
    options: [
      "new ClassName()",
      "ClassName.create()",
      "new ClassName.create()",
      "ClassName.new()",
    ],
    correctAnswer: "new ClassName()",
    explanation:
      "To create a new instance of a class in JavaScript, you use the 'new' keyword followed by the class name, like 'new ClassName()'.",
  },
  {
    question: "What is the result of console.log(true + 1) in JavaScript?",
    options: ["2", "'true1'", "1", "undefined"],
    correctAnswer: "2",
    explanation:
      "In JavaScript, 'true' is coerced to the number 1, so 'true + 1' results in 2.",
  },
  {
    question:
      "Which method is used to remove an element from an array by index in JavaScript?",
    options: ["splice()", "remove()", "pop()", "delete()"],
    correctAnswer: "splice()",
    explanation:
      "'splice()' can be used to remove elements from an array by index, as well as to add or replace elements.",
  },
  {
    question: "What is the purpose of the prototype property in JavaScript?",
    options: [
      "To allow objects to inherit methods and properties from another object",
      "To create a new instance of an object",
      "To copy properties from one object to another",
      "To define new properties on an object",
    ],
    correctAnswer:
      "To allow objects to inherit methods and properties from another object",
    explanation:
      "The 'prototype' property allows objects to inherit methods and properties from other objects, facilitating inheritance.",
  },
  {
    question: "How do you define a class in JavaScript?",
    options: [
      "class MyClass { }",
      "function MyClass() { }",
      "var MyClass = { }",
      "define MyClass { }",
    ],
    correctAnswer: "class MyClass { }",
    explanation:
      "Classes in JavaScript are defined using the 'class' keyword, followed by the class name and body.",
  },
  {
    question: "What does the some() method do in JavaScript?",
    options: [
      "Tests whether at least one element in the array passes the test implemented by the provided function",
      "Tests whether all elements in the array pass the test",
      "Maps each element to a new value",
      "Reduces the array to a single value",
    ],
    correctAnswer:
      "Tests whether at least one element in the array passes the test implemented by the provided function",
    explanation:
      "'some()' tests whether at least one element in the array passes the condition specified in the provided function.",
  },
  {
    question:
      "How do you convert a string to a floating-point number in JavaScript?",
    options: ["parseFloat()", "parseInt()", "Number()", "toFloat()"],
    correctAnswer: "parseFloat()",
    explanation:
      "'parseFloat()' converts a string to a floating-point number. 'parseInt()' converts to an integer.",
  },
  {
    question: "What will console.log(3 * '3') return in JavaScript?",
    options: ["9", "'33'", "undefined", "NaN"],
    correctAnswer: "9",
    explanation:
      "The '*' operator converts the string '3' to the number 3 and performs multiplication, resulting in 9.",
  },
  {
    question: "How do you create a new Map object in JavaScript?",
    options: ["new Map()", "Map.create()", "Map.new()", "new MapObject()"],
    correctAnswer: "new Map()",
    explanation:
      "'new Map()' creates a new Map object which holds key-value pairs.",
  },
  {
    question: "What does Object.freeze(obj) do in JavaScript?",
    options: [
      "Prevents modification of existing properties and prevents new properties from being added to the object",
      "Makes an object immutable by removing all properties",
      "Copies an object to another object",
      "Creates a new object with the same properties",
    ],
    correctAnswer:
      "Prevents modification of existing properties and prevents new properties from being added to the object",
    explanation:
      "'Object.freeze()' makes an object immutable by preventing modifications to its properties and preventing new properties from being added.",
  },
  {
    question:
      "Which method is used to check if a string starts with a specific sequence of characters?",
    options: ["startsWith()", "includes()", "indexOf()", "substring()"],
    correctAnswer: "startsWith()",
    explanation:
      "'startsWith()' checks if a string starts with a specified sequence of characters.",
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
      "JavaScript handles asynchronous operations using Promises, async/await, and callbacks.",
  },
  {
    question: "What is the result of console.log([2] == [2]) in JavaScript?",
    options: ["false", "true", "undefined", "NaN"],
    correctAnswer: "false",
    explanation:
      "Arrays are reference types, so comparing two separate array objects with '==' returns false even if they contain the same elements.",
  },
  {
    question: "What does Array.isArray() do in JavaScript?",
    options: [
      "Checks if a value is an array",
      "Creates a new array",
      "Converts an array to a string",
      "Finds the length of an array",
    ],
    correctAnswer: "Checks if a value is an array",
    explanation: "'Array.isArray()' checks if a value is an array.",
  },
  {
    question: "How do you create a new WeakMap object in JavaScript?",
    options: [
      "new WeakMap()",
      "WeakMap.create()",
      "WeakMap.new()",
      "new WeakMapObject()",
    ],
    correctAnswer: "new WeakMap()",
    explanation:
      "'new WeakMap()' creates a new WeakMap object that holds weakly held key-value pairs.",
  },
  {
    question: "What is the purpose of the Symbol type in JavaScript?",
    options: [
      "To create unique identifiers for object properties",
      "To define new types of data",
      "To convert values to symbols",
      "To handle asynchronous operations",
    ],
    correctAnswer: "To create unique identifiers for object properties",
    explanation:
      "The Symbol type is used to create unique identifiers for object properties, ensuring that property keys are unique.",
  },
  {
    question: "What is the result of console.log('5' + 5) in JavaScript?",
    options: ["'55'", "10", "NaN", "undefined"],
    correctAnswer: "'55'",
    explanation:
      "The '+' operator with a string and a number performs string concatenation, so '5' + 5 results in the string '55'.",
  },
];
