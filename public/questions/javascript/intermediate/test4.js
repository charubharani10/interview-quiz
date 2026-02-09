export const test4 = [
  {
    question:
      "Which method is used to replace a specific part of a string in JavaScript?",
    options: ["replace()", "substring()", "slice()", "splice()"],
    correctAnswer: "replace()",
    explanation:
      "'replace()' is used to replace a specific part of a string with another string.",
  },
  {
    question: "How do you check if a function is defined in JavaScript?",
    options: [
      "typeof functionName === 'function'",
      "functionName instanceof Function",
      "functionName.isDefined()",
      "functionName.exists()",
    ],
    correctAnswer: "typeof functionName === 'function'",
    explanation:
      "The 'typeof' operator checks if 'functionName' is of type 'function', confirming if it is defined.",
  },
  {
    question:
      "What will be the output of console.log(!!'string') in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "The '!!' operator converts a value to a boolean. Since non-empty strings are truthy, '!!' of any non-empty string is true.",
  },
  {
    question: "How do you create a new Set object in JavaScript?",
    options: ["new Set()", "Set.create()", "Set.new()", "new SetObject()"],
    correctAnswer: "new Set()",
    explanation:
      "'new Set()' creates a new Set object, which stores unique values.",
  },
  {
    question: "What does Object.getOwnPropertyNames() do in JavaScript?",
    options: [
      "Returns an array of all properties (including non-enumerable) found directly in a given object",
      "Returns an array of enumerable properties only",
      "Returns all prototype properties",
      "Returns the name of the constructor function",
    ],
    correctAnswer:
      "Returns an array of all properties (including non-enumerable) found directly in a given object",
    explanation:
      "'Object.getOwnPropertyNames()' returns an array of all properties, including non-enumerable properties, of an object.",
  },
  {
    question: "What is the result of console.log('a' + 1) in JavaScript?",
    options: ["'a1'", "1", "'a'", "NaN"],
    correctAnswer: "'a1'",
    explanation:
      "The '+' operator with a string and a number performs string concatenation, so 'a' + 1 results in 'a1'.",
  },
  {
    question:
      "How do you remove the first element from an array in JavaScript?",
    options: ["shift()", "pop()", "splice()", "delete()"],
    correctAnswer: "shift()",
    explanation:
      "'shift()' removes the first element from an array and shifts the remaining elements to a lower index.",
  },
  {
    question: "What is the output of console.log(1 + true) in JavaScript?",
    options: ["2", "'1true'", "1", "undefined"],
    correctAnswer: "2",
    explanation:
      "The boolean 'true' is coerced to 1, so '1 + true' evaluates to 2.",
  },
  {
    question: "How do you check if a value is an integer in JavaScript?",
    options: [
      "Number.isInteger(value)",
      "parseInt(value) === value",
      "typeof value === 'number' && value % 1 === 0",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "All the listed methods can be used to check if a value is an integer in JavaScript.",
  },
  {
    question: "What will console.log([1, 2] + [3, 4]) return in JavaScript?",
    options: ["'1,23,4'", "'1,2,3,4'", "[1, 2, 3, 4]", "NaN"],
    correctAnswer: "'1,23,4'",
    explanation:
      "When using '+' with arrays, JavaScript concatenates the arrays into a single string, resulting in '1,23,4'.",
  },
  {
    question:
      "What is the purpose of the catch block in a try-catch statement in JavaScript?",
    options: [
      "To handle exceptions thrown by the try block",
      "To create a new exception",
      "To rethrow an exception",
      "To execute code regardless of the outcome",
    ],
    correctAnswer: "To handle exceptions thrown by the try block",
    explanation:
      "The 'catch' block handles exceptions thrown by the 'try' block, allowing for error handling.",
  },
  {
    question: "How do you create an empty Map object in JavaScript?",
    options: ["new Map()", "Map.create()", "Map.new()", "new MapObject()"],
    correctAnswer: "new Map()",
    explanation:
      "'new Map()' creates a new empty Map object that holds key-value pairs.",
  },
  {
    question: "What is the output of console.log('10' / 2) in JavaScript?",
    options: ["5", "'5'", "NaN", "undefined"],
    correctAnswer: "5",
    explanation:
      "The '/' operator converts the string '10' to a number, so '10' / 2 results in 5.",
  },
  {
    question:
      "How do you iterate over the properties of an object in JavaScript?",
    options: ["for...in", "Object.keys()", "Object.values()", "Both a) and b)"],
    correctAnswer: "Both a) and b)",
    explanation:
      "'for...in' iterates over all enumerable properties, while 'Object.keys()' returns an array of property names.",
  },
  {
    question: "What is the output of console.log(2 + '2') in JavaScript?",
    options: ["'22'", "4", "NaN", "undefined"],
    correctAnswer: "'22'",
    explanation:
      "The '+' operator with a string and a number performs string concatenation, so 2 + '2' results in '22'.",
  },
  {
    question:
      "How do you define a function that returns a promise in JavaScript?",
    options: [
      "function myFunction() { return new Promise((resolve, reject) => { }) }",
      "function myFunction() { return Promise.resolve() }",
      "function myFunction() { return new Deferred() }",
      "function myFunction() { return new Promise() }",
    ],
    correctAnswer:
      "function myFunction() { return new Promise((resolve, reject) => { }) }",
    explanation:
      "To return a promise, you create a new Promise object using the 'new Promise()' constructor with 'resolve' and 'reject' functions.",
  },
  {
    question: "What is the result of console.log([1] === [1]) in JavaScript?",
    options: ["false", "true", "undefined", "NaN"],
    correctAnswer: "false",
    explanation:
      "Arrays are reference types, so comparing two separate array objects with '===' returns false even if they contain the same elements.",
  },
  {
    question:
      "Which method is used to execute a function after a specified delay in JavaScript?",
    options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    correctAnswer: "setTimeout()",
    explanation: "'setTimeout()' executes a function after a specified delay.",
  },
  {
    question: "What does Object.defineProperty() do in JavaScript?",
    options: [
      "Defines a new property on an object or modifies an existing property",
      "Creates a new object",
      "Deletes a property from an object",
      "Defines a new method on an object",
    ],
    correctAnswer:
      "Defines a new property on an object or modifies an existing property",
    explanation:
      "'Object.defineProperty()' adds or modifies a property on an object with specified attributes.",
  },
  {
    question: "What will console.log([2] - [1]) return in JavaScript?",
    options: ["NaN", "1", "[1]", "undefined"],
    correctAnswer: "NaN",
    explanation:
      "The '-' operator does not perform concatenation. Instead, it tries to convert the arrays to numbers, which results in 'NaN'.",
  },
];
