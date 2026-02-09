export const test1 = [
  {
    question:
      "What is the purpose of the Object.freeze() method in JavaScript?",
    options: [
      "Prevents modifications to an object",
      "Creates a new object with the same properties",
      "Clones an object deeply",
      "Converts an object into a string",
    ],
    correctAnswer: "Prevents modifications to an object",
    explanation:
      "The Object.freeze() method prevents modifications to an object. Once an object is frozen, you cannot add, delete, or modify its properties.",
  },
  {
    question: "What does the Symbol data type represent in JavaScript?",
    options: [
      "A unique and immutable identifier",
      "A primitive data type for numbers",
      "A special type of string",
      "A method for creating objects",
    ],
    correctAnswer: "A unique and immutable identifier",
    explanation:
      "The Symbol data type in JavaScript represents a unique and immutable identifier. Symbols are often used to add unique property keys to objects.",
  },
  {
    question: "What does the async keyword indicate in a JavaScript function?",
    options: [
      "The function always returns a Promise",
      "The function executes synchronously",
      "The function contains a generator",
      "The function uses an iterator",
    ],
    correctAnswer: "The function always returns a Promise",
    explanation:
      "The async keyword indicates that a function always returns a Promise. If the function returns a value, the value is wrapped in a resolved Promise.",
  },
  {
    question: "How do you implement method chaining in JavaScript?",
    options: [
      "By returning this from methods",
      "By using Promise.all()",
      "By defining methods on a prototype",
      "By using the bind() method",
    ],
    correctAnswer: "By returning this from methods",
    explanation:
      "Method chaining is implemented by returning `this` from methods, allowing multiple methods to be called on the same object sequentially.",
  },
  {
    question: "What is the output of console.log(1..toString()) in JavaScript?",
    options: ["'1'", "'1.'", "1", "undefined"],
    correctAnswer: "'1'",
    explanation:
      "In JavaScript, `1..toString()` converts the number 1 to a string. The extra dot (`1..`) is a way to access the `toString()` method directly.",
  },
  {
    question:
      "How do you prevent an object from being extensible in JavaScript?",
    options: [
      "Using Object.preventExtensions()",
      "Using Object.freeze()",
      "Using Object.seal()",
      "Using Object.defineProperty()",
    ],
    correctAnswer: "Using Object.preventExtensions()",
    explanation:
      "Object.preventExtensions() prevents new properties from being added to an object, although existing properties can still be modified or deleted.",
  },
  {
    question: "What does the Reflect object do in JavaScript?",
    options: [
      "Provides methods for intercepting and manipulating object operations",
      "Clones objects deeply",
      "Creates new object properties",
      "Deletes properties from an object",
    ],
    correctAnswer:
      "Provides methods for intercepting and manipulating object operations",
    explanation:
      "The Reflect object provides methods for intercepting and manipulating object operations, similar to the Proxy object.",
  },
  {
    question: "What is a Proxy in JavaScript?",
    options: [
      "An object that wraps another object and intercepts operations on it",
      "A special type of array",
      "A method for creating immutable objects",
      "A built-in function for copying objects",
    ],
    correctAnswer:
      "An object that wraps another object and intercepts operations on it",
    explanation:
      "A Proxy is an object that wraps another object and allows you to intercept and customize operations such as property access and assignment.",
  },
  {
    question: "How do you define a generator function in JavaScript?",
    options: [
      "Using function*",
      "Using async function",
      "Using function()",
      "Using function",
    ],
    correctAnswer: "Using function*",
    explanation:
      "A generator function is defined using the `function*` syntax and can pause and resume execution using the `yield` keyword.",
  },
  {
    question: "What is the purpose of the yield keyword in JavaScript?",
    options: [
      "To pause and resume execution of a generator function",
      "To create a new array",
      "To define a method",
      "To return a value from a function",
    ],
    correctAnswer: "To pause and resume execution of a generator function",
    explanation:
      "The `yield` keyword is used in generator functions to pause and resume their execution, allowing the function to produce a sequence of values.",
  },
  {
    question: "How can you use Promise.all() in JavaScript?",
    options: [
      "To execute multiple promises in parallel and wait for all of them to complete",
      "To execute promises sequentially",
      "To create a new promise",
      "To resolve a promise",
    ],
    correctAnswer:
      "To execute multiple promises in parallel and wait for all of them to complete",
    explanation:
      "Promise.all() allows you to execute multiple promises in parallel and waits for all of them to complete, returning a single promise that resolves with an array of results.",
  },
  {
    question: "What is the output of console.log(1 + '1') in JavaScript?",
    options: ["'11'", "2", "11", "NaN"],
    correctAnswer: "'11'",
    explanation:
      "When adding a number to a string using the + operator, JavaScript converts the number to a string and performs concatenation. Thus, `1 + '1'` results in `'11'`.",
  },
  {
    question: "What does Object.assign() do in JavaScript?",
    options: [
      "Copies values of all enumerable properties from one or more source objects to a target object",
      "Creates a new object with specified properties",
      "Deletes properties from an object",
      "Converts an object to a string",
    ],
    correctAnswer:
      "Copies values of all enumerable properties from one or more source objects to a target object",
    explanation:
      "Object.assign() copies the values of all enumerable properties from one or more source objects to a target object, effectively merging the objects.",
  },
  {
    question: "How do you define a method in a JavaScript class?",
    options: [
      "methodName() { }",
      "function methodName() { }",
      "methodName: function() { }",
      "class.methodName() { }",
    ],
    correctAnswer: "methodName() { }",
    explanation:
      "In a JavaScript class, methods are defined using the syntax `methodName() { }`. This is the standard way to define methods within a class.",
  },
  {
    question: "What is the output of console.log(typeof NaN) in JavaScript?",
    options: ["number", "NaN", "undefined", "object"],
    correctAnswer: "number",
    explanation:
      "In JavaScript, `typeof NaN` returns 'number'. Although NaN stands for 'Not-a-Number', its type is still considered to be 'number'.",
  },
  {
    question: "What is the purpose of the WeakMap object in JavaScript?",
    options: [
      "Stores key-value pairs where keys are objects and values can be any type",
      "Creates a map with non-primitive keys",
      "Maps primitive values to objects",
      "Stores immutable values",
    ],
    correctAnswer:
      "Stores key-value pairs where keys are objects and values can be any type",
    explanation:
      "WeakMap is used to store key-value pairs where keys are objects and values can be any type. Unlike Map, WeakMap does not prevent garbage collection of keys.",
  },
  {
    question: "How do you create a new Set in JavaScript?",
    options: ["new Set()", "Set.create()", "Set.new()", "Set()"],
    correctAnswer: "new Set()",
    explanation:
      "To create a new Set in JavaScript, use the `new Set()` syntax. A Set is a collection of values where each value must be unique.",
  },
  {
    question: "What does Array.prototype.flat() do in JavaScript?",
    options: [
      "Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth",
      "Creates a new array by flattening a multi-dimensional array",
      "Finds the first element that satisfies the provided testing function",
      "Sorts the array in ascending order",
    ],
    correctAnswer:
      "Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth",
    explanation:
      "Array.prototype.flat() creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. It flattens nested arrays.",
  },
  {
    question:
      "What is the output of console.log([1, 2] == [1, 2]) in JavaScript?",
    options: ["false", "true", "undefined", "NaN"],
    correctAnswer: "false",
    explanation:
      "In JavaScript, comparing two arrays using `==` checks for reference equality, not deep equality. `[1, 2] == [1, 2]` returns `false` because they are two different objects in memory.",
  },
  {
    question: "How do you define a decorator in JavaScript?",
    options: [
      "By using the @ symbol followed by a function",
      "By using a special method within a class",
      "By using Object.defineProperty()",
      "By extending a class",
    ],
    correctAnswer: "By using the @ symbol followed by a function",
    explanation:
      "In JavaScript, decorators are a proposed feature that use the @ symbol followed by a function to modify class behavior.",
  },
];
