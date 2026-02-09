export const test7 = [
  {
    question: "How do you convert a string to a number in JavaScript?",
    options: ["Number()", "parseInt()", "parseFloat()", "All of the above"],
    correctAnswer: "All of the above",
    explanation:
      "JavaScript provides multiple ways to convert a string to a number, including Number(), parseInt(), and parseFloat().",
  },
  {
    question: "What is the result of console.log([1] + [2]) in JavaScript?",
    options: ["'1,2'", "[1, 2]", "NaN", "'1 2'"],
    correctAnswer: "'1,2'",
    explanation:
      "When using the + operator with arrays in JavaScript, they are converted to strings and concatenated, resulting in '1,2'.",
  },
  {
    question: "How do you create a generator function in JavaScript?",
    options: [
      "function* myGenerator() { }",
      "function myGenerator() { yield; }",
      "function* myGenerator() { yield* []; }",
      "function myGenerator() { return; }",
    ],
    correctAnswer: "function* myGenerator() { }",
    explanation:
      "In JavaScript, a generator function is declared using the 'function*' syntax. It allows you to pause and resume function execution using the 'yield' keyword.",
  },
  {
    question: "What is the purpose of Object.getPrototypeOf() in JavaScript?",
    options: [
      "Returns the prototype of the specified object",
      "Sets the prototype of the specified object",
      "Creates a new prototype object",
      "Removes the prototype of an object",
    ],
    correctAnswer: "Returns the prototype of the specified object",
    explanation:
      "Object.getPrototypeOf() is used to retrieve the prototype (i.e., the internal [[Prototype]] property) of a specified object.",
  },
  {
    question: "What will console.log([] == false) return in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, when comparing an empty array '[]' to false using loose equality (==), the array is coerced to an empty string (''), which is then evaluated as false, resulting in 'true'.",
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
      "A WeakMap is created using the 'new WeakMap()' syntax. It holds weak references to objects, meaning that the objects can be garbage collected if there are no other references to them.",
  },
  {
    question: "What does Array.prototype.slice() do in JavaScript?",
    options: [
      "Returns a shallow copy of a portion of an array into a new array object",
      "Removes elements from an array",
      "Adds elements to an array",
      "Finds the index of an element in an array",
    ],
    correctAnswer:
      "Returns a shallow copy of a portion of an array into a new array object",
    explanation:
      "Array.prototype.slice() is used to create a shallow copy of a part of an array, defined by the start and end index.",
  },
  {
    question: "What is the output of console.log('5' + 1) in JavaScript?",
    options: ["'51'", "6", "'6'", "undefined"],
    correctAnswer: "'51'",
    explanation:
      "In JavaScript, the '+' operator is overloaded for both addition and string concatenation. When one of the operands is a string, the other operand is converted to a string and concatenated. So, '5' + 1 results in the string '51'.",
  },
  {
    question: "How do you define a constant variable in JavaScript?",
    options: ["const", "let", "var", "constant"],
    correctAnswer: "const",
    explanation:
      "In JavaScript, 'const' is used to define variables that cannot be reassigned. The variable’s value is constant after the initial assignment.",
  },
  {
    question: "What is the purpose of Object.seal() in JavaScript?",
    options: [
      "Prevents new properties from being added to an object, but allows existing properties to be modified",
      "Prevents modifications to an object",
      "Deletes an object",
      "Converts an object into a string",
    ],
    correctAnswer:
      "Prevents new properties from being added to an object, but allows existing properties to be modified",
    explanation:
      "Object.seal() prevents the addition of new properties to an object while allowing modification of existing properties.",
  },
  {
    question: "What will console.log(1 == '1') return in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, '==' performs type coercion, so '1' (a string) is converted to a number before comparison. Thus, 1 == '1' returns true.",
  },
  {
    question: "How do you remove a property from an object in JavaScript?",
    options: ["delete", "remove()", "pop()", "splice()"],
    correctAnswer: "delete",
    explanation:
      "The 'delete' operator in JavaScript is used to remove a property from an object.",
  },
  {
    question: "What does Array.prototype.every() do in JavaScript?",
    options: [
      "Tests whether all elements in the array pass the test implemented by the provided function",
      "Checks if at least one element in the array passes the test implemented by the provided function",
      "Returns a new array with all elements that pass the test",
      "Reduces the array to a single value",
    ],
    correctAnswer:
      "Tests whether all elements in the array pass the test implemented by the provided function",
    explanation:
      "Array.prototype.every() checks if all elements in an array pass a test (provided as a function). If all elements pass, it returns true; otherwise, false.",
  },
  {
    question: "What is the result of console.log(!!'non-empty') in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, the '!!' (double negation) converts a value to its boolean equivalent. Since non-empty strings are truthy, !!'non-empty' evaluates to true.",
  },
  {
    question: "How do you handle asynchronous operations in JavaScript?",
    options: [
      "Using Promises and async/await",
      "Using synchronous functions",
      "Using setTimeout and setInterval",
      "Using try/catch",
    ],
    correctAnswer: "Using Promises and async/await",
    explanation:
      "Asynchronous operations in JavaScript can be handled using Promises, and the async/await syntax simplifies the handling of Promises by providing a synchronous-looking code structure.",
  },
  {
    question:
      "What is the output of console.log('hello'.toUpperCase()) in JavaScript?",
    options: ["'HELLO'", "'hello'", "'Hello'", "undefined"],
    correctAnswer: "'HELLO'",
    explanation:
      "The toUpperCase() method converts all characters in a string to uppercase. Therefore, 'hello'.toUpperCase() outputs 'HELLO'.",
  },
  {
    question:
      "How do you define a function that accepts a variable number of arguments in JavaScript?",
    options: [
      "Using ...args (rest parameter)",
      "Using arguments object",
      "Using Array.prototype.slice()",
      "Both a) and b)",
    ],
    correctAnswer: "Both a) and b)",
    explanation:
      "A function can accept a variable number of arguments using the 'arguments' object or the more modern 'rest parameter' (...args).",
  },
  {
    question: "What does Object.entries() return in JavaScript?",
    options: [
      "An array of a given object's own enumerable string-keyed property [key, value] pairs",
      "An array of all properties including non-enumerable ones",
      "A list of keys of an object",
      "An array of values of an object",
    ],
    correctAnswer:
      "An array of a given object's own enumerable string-keyed property [key, value] pairs",
    explanation:
      "Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs, making it easy to iterate over object properties.",
  },
  {
    question: "How do you create a deep copy of an object in JavaScript?",
    options: [
      "Using JSON.parse(JSON.stringify(obj))",
      "Using Object.assign()",
      "Using Object.create()",
      "Using clone()",
    ],
    correctAnswer: "Using JSON.parse(JSON.stringify(obj))",
    explanation:
      "A deep copy can be made using JSON.parse(JSON.stringify(obj)), but this approach has limitations with functions and undefined values.",
  },
  {
    question: "What does Array.prototype.find() do in JavaScript?",
    options: [
      "Returns the first element that satisfies the provided testing function",
      "Finds the index of the first element that satisfies the provided testing function",
      "Returns a new array with elements that satisfy the provided testing function",
      "Searches for the first occurrence of an element in an array",
    ],
    correctAnswer:
      "Returns the first element that satisfies the provided testing function",
    explanation:
      "Array.prototype.find() returns the first element in an array that satisfies the provided testing function. It returns undefined if no element matches.",
  },
];
