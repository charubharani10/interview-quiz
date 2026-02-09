export const test1 = [
  {
    question: "What will be the output of console.log([] + {}) in JavaScript?",
    options: [
      "[object Object]",
      "[object Array][object Object]",
      "{}",
      "undefined",
    ],
    correctAnswer: "[object Object]",
    explanation:
      "In JavaScript, '[]' converts to an empty string when concatenated, and '{}' converts to '[object Object]'. Therefore, '[] + {}' results in '[object Object]'.",
  },
  {
    question:
      "Which method is used to add one or more elements to the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: "push()",
    explanation:
      "'push()' adds one or more elements to the end of an array and returns the new length of the array.",
  },
  {
    question:
      "How do you check if an object has a certain property in JavaScript?",
    options: [
      "object.hasOwnProperty('property')",
      "'property' in object",
      "object['property'] !== undefined",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "All listed methods can be used to check if an object has a certain property. 'hasOwnProperty()' checks for own properties, 'in' checks for both own and inherited properties, and 'object['property'] !== undefined' checks for the property value.",
  },
  {
    question: "What will typeof NaN return in JavaScript?",
    options: ["number", "NaN", "undefined", "object"],
    correctAnswer: "number",
    explanation:
      "'typeof NaN' returns 'number', as NaN is a special numeric value in JavaScript.",
  },
  {
    question: "What is the output of console.log(1 + '1') in JavaScript?",
    options: ["'11'", "2", "11", "NaN"],
    correctAnswer: "'11'",
    explanation:
      "Adding a number to a string results in string concatenation, so '1' + '1' results in the string '11'.",
  },
  {
    question: "How do you convert a string to an integer in JavaScript?",
    options: ["parseInt()", "parseFloat()", "Number()", "All of the above"],
    correctAnswer: "parseInt()",
    explanation:
      "'parseInt()' converts a string to an integer. 'parseFloat()' converts to a floating-point number, and 'Number()' can convert strings to either integer or float based on the content.",
  },
  {
    question: "What is the purpose of the bind() method in JavaScript?",
    options: [
      "To bind a function to a specific object context",
      "To merge two objects",
      "To create a new array",
      "To define a method in an object",
    ],
    correctAnswer: "To bind a function to a specific object context",
    explanation:
      "'bind()' creates a new function that, when called, has its 'this' keyword set to the provided value.",
  },
  {
    question: "What will console.log('5' - 3) return in JavaScript?",
    options: ["2", "'2'", "NaN", "undefined"],
    correctAnswer: "2",
    explanation:
      "When subtracting, JavaScript converts the string '5' to a number, resulting in 5 - 3, which equals 2.",
  },
  {
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    options: ["pop()", "shift()", "splice()", "remove()"],
    correctAnswer: "pop()",
    explanation:
      "'pop()' removes the last element from an array and returns that element.",
  },
  {
    question: "What does JSON.stringify() do in JavaScript?",
    options: [
      "Converts a JavaScript object into a JSON string",
      "Parses a JSON string into a JavaScript object",
      "Validates a JSON string",
      "Transforms a JSON string into XML",
    ],
    correctAnswer: "Converts a JavaScript object into a JSON string",
    explanation:
      "'JSON.stringify()' converts a JavaScript object or value to a JSON string.",
  },
  {
    question: "How do you create a new Set object in JavaScript?",
    options: ["new Set()", "Set.create()", "Set.new()", "new SetObject()"],
    correctAnswer: "new Set()",
    explanation:
      "'new Set()' creates a new Set object, which stores unique values.",
  },
  {
    question: "What is the result of false + 1 in JavaScript?",
    options: ["1", "false1", "0", "NaN"],
    correctAnswer: "1",
    explanation:
      "In JavaScript, false is coerced to 0 in numeric operations. Therefore, false + 1 results in 1.",
  },
  {
    question: "What does the Array.prototype.reduce() method do?",
    options: [
      "Executes a reducer function on each element of the array, resulting in a single output value",
      "Adds elements to the end of an array",
      "Filters elements based on a condition",
      "Finds the maximum value in an array",
    ],
    correctAnswer:
      "Executes a reducer function on each element of the array, resulting in a single output value",
    explanation:
      "'reduce()' executes a reducer function on each element of the array and returns a single value.",
  },
  {
    question: "How do you check if a value is an array in JavaScript?",
    options: [
      "Array.isArray(value)",
      "value instanceof Array",
      "typeof value === 'array'",
      "Both a) and b)",
    ],
    correctAnswer: "Both a) and b)",
    explanation:
      "'Array.isArray()' and 'value instanceof Array' are correct methods to check if a value is an array. 'typeof value === 'array'' is incorrect.",
  },
  {
    question: "What does Object.keys(obj) return in JavaScript?",
    options: [
      "An array of the object's own enumerable property names",
      "An array of the object's values",
      "An array of the object's prototype names",
      "An array of all properties including non-enumerable ones",
    ],
    correctAnswer: "An array of the object's own enumerable property names",
    explanation:
      "'Object.keys(obj)' returns an array of a given object's own enumerable property names.",
  },
  {
    question: "How do you create a new Promise in JavaScript?",
    options: [
      "new Promise((resolve, reject) => { })",
      "Promise.create((resolve, reject) => { })",
      "Promise.new((resolve, reject) => { })",
      "new Deferred((resolve, reject) => { })",
    ],
    correctAnswer: "new Promise((resolve, reject) => { })",
    explanation:
      "'new Promise()' creates a new Promise object with a function that takes 'resolve' and 'reject' arguments.",
  },
  {
    question: "What does the map() method do in JavaScript?",
    options: [
      "Creates a new array with the results of calling a provided function on every element in the calling array",
      "Filters elements based on a condition",
      "Adds elements to the end of an array",
      "Reduces the array to a single value",
    ],
    correctAnswer:
      "Creates a new array with the results of calling a provided function on every element in the calling array",
    explanation:
      "'map()' creates a new array with the results of applying a provided function to each element of the original array.",
  },
  {
    question:
      "What will be the output of console.log([1] == [1]) in JavaScript?",
    options: ["false", "true", "undefined", "NaN"],
    correctAnswer: "false",
    explanation:
      "Arrays are reference types, and comparing two different arrays with '==' checks if they refer to the same object, not if their contents are equal.",
  },
  {
    question:
      "Which method is used to find the index of the first occurrence of a specified value in an array?",
    options: ["indexOf()", "findIndex()", "search()", "find()"],
    correctAnswer: "indexOf()",
    explanation:
      "'indexOf()' returns the index of the first occurrence of a specified value in an array.",
  },
  {
    question: "How do you create a shallow copy of an object in JavaScript?",
    options: [
      "Object.assign({}, obj)",
      "Object.create(obj)",
      "obj.slice()",
      "obj.copy()",
    ],
    correctAnswer: "Object.assign({}, obj)",
    explanation:
      "'Object.assign({}, obj)' creates a shallow copy of an object by copying its properties to a new object.",
  },
];
