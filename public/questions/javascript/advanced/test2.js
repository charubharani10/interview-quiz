export const test2 = [
  {
    question: "What does Array.prototype.reduce() do in JavaScript?",
    options: [
      "Executes a reducer function on each element of the array, resulting in a single output value",
      "Filters out elements based on a condition",
      "Creates a new array by applying a function to each element",
      "Reverses the array in place",
    ],
    correctAnswer:
      "Executes a reducer function on each element of the array, resulting in a single output value",
    explanation:
      "Array.prototype.reduce() applies a reducer function to each element of the array, accumulating a single result value.",
  },
  {
    question:
      "How do you handle multiple asynchronous operations in JavaScript?",
    options: [
      "Using Promise.all()",
      "Using async/await",
      "Using Promise.race()",
      "Both and b)",
    ],
    correctAnswer: "Both and b)",
    explanation:
      "Multiple asynchronous operations can be handled using `Promise.all()` to wait for all promises, or `async/await` to handle asynchronous code more cleanly.",
  },
  {
    question: "What is the output of console.log(+'1') in JavaScript?",
    options: ["1", "'1'", "NaN", "undefined"],
    correctAnswer: "1",
    explanation:
      "The `+` operator converts the string '1' to a number, so the output is 1.",
  },
  {
    question: "How do you define a new class in JavaScript?",
    options: [
      "class MyClass { constructor() { } }",
      "function MyClass() { }",
      "var MyClass = function() { }",
      "new class MyClass() { }",
    ],
    correctAnswer: "class MyClass { constructor() { } }",
    explanation:
      "In JavaScript, a new class is defined using the `class` keyword followed by the class name and a constructor method.",
  },
  {
    question: "What is the output of console.log('5' - 3) in JavaScript?",
    options: ["2", "'2'", "NaN", "undefined"],
    correctAnswer: "2",
    explanation:
      "The `-` operator converts the string '5' to a number before performing the subtraction, resulting in 2.",
  },
  {
    question: "How do you create a WeakSet in JavaScript?",
    options: [
      "new WeakSet()",
      "WeakSet.create()",
      "WeakSet.new()",
      "WeakSet()",
    ],
    correctAnswer: "new WeakSet()",
    explanation: "A WeakSet is created using the `new WeakSet()` constructor.",
  },
  {
    question: "What does Object.defineProperty() do in JavaScript?",
    options: [
      "Defines a new property or modifies an existing property on an object",
      "Deletes a property from an object",
      "Creates a new object with specified properties",
      "Checks if a property exists on an object",
    ],
    correctAnswer:
      "Defines a new property or modifies an existing property on an object",
    explanation:
      "Object.defineProperty() is used to define or modify a property on an object.",
  },
  {
    question:
      "How do you implement inheritance in JavaScript using ES6 classes?",
    options: [
      "class SubClass extends SuperClass { }",
      "class SubClass implements SuperClass { }",
      "class SubClass inherits SuperClass { }",
      "class SubClass: SuperClass { }",
    ],
    correctAnswer: "class SubClass extends SuperClass { }",
    explanation:
      "Inheritance in JavaScript using ES6 classes is achieved with the `extends` keyword.",
  },
  {
    question:
      "What is the output of console.log(0.1 + 0.2 == 0.3) in JavaScript?",
    options: ["false", "true", "undefined", "NaN"],
    correctAnswer: "false",
    explanation:
      "Due to floating-point precision issues, `0.1 + 0.2` does not exactly equal `0.3` in JavaScript.",
  },
  {
    question: "How do you create an instance of a Map in JavaScript?",
    options: ["new Map()", "Map.create()", "Map.new()", "Map()"],
    correctAnswer: "new Map()",
    explanation: "A Map is instantiated using the `new Map()` constructor.",
  },
  {
    question: "What does Object.entries() return in JavaScript?",
    options: [
      "An array of a given object's own enumerable string-keyed property [key, value] pairs",
      "An array of property names of an object",
      "An array of values of an object",
      "An array of methods of an object",
    ],
    correctAnswer:
      "An array of a given object's own enumerable string-keyed property [key, value] pairs",
    explanation:
      "Object.entries() returns an array of `[key, value]` pairs for an object's own enumerable properties.",
  },
  {
    question:
      "What is the output of console.log('Hello'.length) in JavaScript?",
    options: ["5", "'5'", "undefined", "NaN"],
    correctAnswer: "5",
    explanation:
      "The `.length` property of a string returns the number of characters in the string, which is 5 for 'Hello'.",
  },
  {
    question: "How do you make a JavaScript function return a promise?",
    options: [
      "By using the async keyword",
      "By using the Promise.resolve() method",
      "By using new Promise()",
      "Both and c)",
    ],
    correctAnswer: "Both and c)",
    explanation:
      "A JavaScript function can return a promise using the `async` keyword or by returning a new Promise object.",
  },
  {
    question: "What does Array.prototype.find() do in JavaScript?",
    options: [
      "Returns the first element that satisfies the provided testing function",
      "Finds the index of the first element that satisfies the provided testing function",
      "Creates a new array with all elements that pass the test",
      "Sorts the array elements",
    ],
    correctAnswer:
      "Returns the first element that satisfies the provided testing function",
    explanation:
      "Array.prototype.find() returns the first element in the array that satisfies the provided testing function.",
  },
  {
    question: "How do you access a function's arguments in JavaScript?",
    options: [
      "Using the arguments object",
      "Using Function.arguments()",
      "Using Function.getArguments()",
      "Using Function.parameters()",
    ],
    correctAnswer: "Using the arguments object",
    explanation:
      "The `arguments` object provides access to all arguments passed to a function.",
  },
  {
    question:
      "What does the catch block in a try...catch statement do in JavaScript?",
    options: [
      "Catches errors thrown in the try block",
      "Executes code regardless of whether an error occurs",
      "Defines a new function",
      "Creates a new variable",
    ],
    correctAnswer: "Catches errors thrown in the try block",
    explanation:
      "The `catch` block is used to handle any errors thrown in the `try` block.",
  },
  {
    question:
      "What is the purpose of the Object.create() method in JavaScript?",
    options: [
      "Creates a new object with the specified prototype object and properties",
      "Clones an existing object",
      "Deletes an object",
      "Defines a new class",
    ],
    correctAnswer:
      "Creates a new object with the specified prototype object and properties",
    explanation:
      "Object.create() creates a new object with the specified prototype and optional properties.",
  },
  {
    question: "How do you use a JavaScript class for encapsulation?",
    options: [
      "By defining private methods and properties",
      "By creating new objects",
      "By extending classes",
      "By using inheritance",
    ],
    correctAnswer: "By defining private methods and properties",
    explanation:
      "Encapsulation in JavaScript classes is achieved by defining private methods and properties to protect the internal state of an object.",
  },
  {
    question: "What is the output of console.log('a' > 'b') in JavaScript?",
    options: ["false", "true", "undefined", "NaN"],
    correctAnswer: "false",
    explanation:
      "In JavaScript, character comparison is based on Unicode values, and 'a' has a lower Unicode value than 'b', so 'a' > 'b' is false.",
  },
  {
    question: "How do you create a custom event in JavaScript?",
    options: [
      "Using the Event constructor",
      "Using document.createEvent()",
      "Using Event.create()",
      "Using CustomEvent()",
    ],
    correctAnswer: "Using the Event constructor",
    explanation:
      "Custom events can be created using the `Event` constructor or the `CustomEvent` constructor for more specialized events.",
  },
];
