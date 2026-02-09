export const test7 = [
  {
    question: "What is the output of !![] in JavaScript?",
    options: ["true", "false", "[]", "undefined"],
    correctAnswer: "true",
    explanation:
      "The '!!' operator converts any value to a boolean. Since '[]' (an array) is truthy, '!![]' results in 'true'.",
  },
  {
    question: "How do you convert a number to a string in JavaScript?",
    options: ["toString()", "String()", "Stringify()", "Both a) and b)"],
    correctAnswer: "Both a) and b)",
    explanation:
      "You can convert a number to a string using 'toString()' or 'String()'.",
  },
  {
    question: "What does Object.entries(obj) return in JavaScript?",
    options: [
      "An array of the object's own enumerable property [key, value] pairs",
      "An array of the object's own enumerable property values",
      "An array of the object's own enumerable property names",
      "An array of the object's prototype property [key, value] pairs",
    ],
    correctAnswer:
      "An array of the object's own enumerable property [key, value] pairs",
    explanation:
      "'Object.entries(obj)' returns an array of the object's own enumerable property [key, value] pairs.",
  },
  {
    question:
      "Which method is used to find whether at least one element in an array passes a test?",
    options: ["some()", "every()", "find()", "filter()"],
    correctAnswer: "some()",
    explanation:
      "'some()' tests whether at least one element in the array passes the provided function. It returns true if the function returns true for any element.",
  },
  {
    question:
      "How do you create a new instance of a Date object in JavaScript?",
    options: ["new Date()", "Date.create()", "Date.new()", "new DateObject()"],
    correctAnswer: "new Date()",
    explanation:
      "'new Date()' creates a new instance of a Date object, representing the current date and time.",
  },
  {
    question: "What is the result of 1 == '1' in JavaScript?",
    options: ["true", "false", "1", "undefined"],
    correctAnswer: "true",
    explanation:
      "The '==' operator performs type coercion, so '1' (a string) is converted to 1 (a number), and '1 == 1' is true.",
  },
  {
    question:
      "How do you define an immediately invoked function expression (IIFE) in JavaScript?",
    options: [
      "(function() { })();",
      "function() { }();",
      "function() { }",
      "(function() { })",
    ],
    correctAnswer: "(function() { })();",
    explanation:
      "An IIFE is defined as a function expression enclosed in parentheses, followed by another set of parentheses to execute it immediately.",
  },
  {
    question: "What does the bind() method do in JavaScript?",
    options: [
      "Creates a new function that, when called, has its this keyword set to the provided value",
      "Binds a function to an object",
      "Creates a new object with the given prototype",
      "Binds a function to a variable",
    ],
    correctAnswer:
      "Creates a new function that, when called, has its this keyword set to the provided value",
    explanation:
      "'bind()' creates a new function that, when called, has its 'this' keyword set to the provided value and can also have some initial arguments.",
  },
  {
    question:
      "How do you iterate over the properties of an object in JavaScript?",
    options: [
      "for...in",
      "Object.keys()",
      "Object.values()",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "You can iterate over the properties of an object using 'for...in', 'Object.keys()', or 'Object.values()'.",
  },
  {
    question:
      "Which operator is used to test for strict equality in JavaScript?",
    options: ["===", "==", "!==", "="],
    correctAnswer: "===",
    explanation:
      "The '===' operator tests for strict equality, meaning both the value and type must be the same.",
  },
  {
    question: "What is the result of typeof [] in JavaScript?",
    options: ["object", "array", "list", "undefined"],
    correctAnswer: "object",
    explanation:
      "In JavaScript, arrays are considered objects, so 'typeof []' returns 'object'.",
  },
  {
    question:
      "How do you create a new array with the results of calling a provided function on every element in the calling array?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    correctAnswer: "map()",
    explanation:
      "'map()' creates a new array with the results of calling a provided function on every element in the calling array.",
  },
  {
    question: "What is the output of false == 'false' in JavaScript?",
    options: ["false", "true", "'false'", "undefined"],
    correctAnswer: "false",
    explanation:
      "The '==' operator performs type coercion, and 'false' (a boolean) is not equal to 'false' (a string).",
  },
  {
    question: "How do you remove an element from a set in JavaScript?",
    options: ["set.delete()", "set.remove()", "set.pop()", "set.clear()"],
    correctAnswer: "set.delete()",
    explanation: "'set.delete()' removes a specific element from a Set object.",
  },
  {
    question: "What does Array.prototype.flat() do in JavaScript?",
    options: [
      "Flattens nested arrays into a single-level array",
      "Sorts the array elements",
      "Removes duplicate elements from the array",
      "Transforms the array into a string",
    ],
    correctAnswer: "Flattens nested arrays into a single-level array",
    explanation:
      "'Array.prototype.flat()' flattens nested arrays into a single-level array.",
  },
  {
    question: "How do you add a property to an object in JavaScript?",
    options: [
      "obj.property = value",
      "Object.defineProperty(obj, 'property', { value })",
      "obj['property'] = value",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "You can add a property to an object using 'obj.property = value', 'Object.defineProperty()', or 'obj['property'] = value'.",
  },
  {
    question: "What is the output of typeof null in JavaScript?",
    options: ["object", "null", "undefined", "number"],
    correctAnswer: "object",
    explanation:
      "In JavaScript, 'typeof null' returns 'object' due to a historical bug in the language.",
  },
  {
    question:
      "Which method is used to remove all elements from an array in JavaScript?",
    options: ["splice()", "pop()", "shift()", "length = 0"],
    correctAnswer: "length = 0",
    explanation:
      "Setting the 'length' property of an array to 0 removes all elements from the array.",
  },
  {
    question:
      "How do you create a new instance of an Error object in JavaScript with a custom message?",
    options: [
      "new Error('message')",
      "new Error(message)",
      "Error.create('message')",
      "Error('message')",
    ],
    correctAnswer: "new Error('message')",
    explanation:
      "'new Error('message')' creates a new Error object with a custom message.",
  },
  {
    question: "What does Number.isNaN() check in JavaScript?",
    options: [
      "Whether the value is NaN",
      "Whether the value is a number",
      "Whether the value is undefined",
      "Whether the value is null",
    ],
    correctAnswer: "Whether the value is NaN",
    explanation:
      "'Number.isNaN()' checks whether a value is NaN and not of type number.",
  },
];
