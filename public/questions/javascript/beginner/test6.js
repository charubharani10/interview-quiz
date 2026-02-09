export const test6 = [
  {
    question: "What is the output of typeof NaN in JavaScript?",
    options: ["number", "NaN", "undefined", "object"],
    correctAnswer: "number",
    explanation:
      "The 'typeof' operator returns 'number' for 'NaN', as 'NaN' is a special numeric value.",
  },
  {
    question: "How do you check if a variable is an array in JavaScript?",
    options: [
      "Array.isArray()",
      "typeof variable === 'array'",
      "variable instanceof Array",
      "variable.constructor === Array",
    ],
    correctAnswer: "Array.isArray()",
    explanation:
      "'Array.isArray()' is the standard way to check if a variable is an array.",
  },
  {
    question: 'What is the result of "5" - 3 in JavaScript?',
    options: ["2", '"53"', "NaN", '"5"'],
    correctAnswer: "2",
    explanation:
      "In JavaScript, the '-' operator converts the string '5' to a number, so '5 - 3' evaluates to 2.",
  },
  {
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    options: ["pop()", "shift()", "slice()", "delete()"],
    correctAnswer: "pop()",
    explanation:
      "'pop()' removes the last element from an array and returns that element.",
  },
  {
    question: "How do you create an empty object in JavaScript?",
    options: [
      "let obj = {};",
      "let obj = new Object();",
      "let obj = Object.create(null);",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "All the given options are valid ways to create an empty object in JavaScript.",
  },
  {
    question:
      "Which method is used to add an element to the beginning of an array in JavaScript?",
    options: ["unshift()", "push()", "pop()", "shift()"],
    correctAnswer: "unshift()",
    explanation:
      "'unshift()' adds one or more elements to the beginning of an array and returns the new length of the array.",
  },
  {
    question: "What does Object.keys(obj) return in JavaScript?",
    options: [
      "An array of the object's own enumerable property names",
      "An array of the object's own enumerable values",
      "An array of the object's own non-enumerable property names",
      "An array of the object's prototype properties",
    ],
    correctAnswer: "An array of the object's own enumerable property names",
    explanation:
      "'Object.keys(obj)' returns an array of the object's own enumerable property names.",
  },
  {
    question:
      "How do you create a new instance of an Error object in JavaScript?",
    options: [
      "new Error()",
      "new Exception()",
      "new Problem()",
      "Error.create()",
    ],
    correctAnswer: "new Error()",
    explanation: "'new Error()' creates a new Error object in JavaScript.",
  },
  {
    question: "What is the result of '10' / 2 in JavaScript?",
    options: ["5", "'5'", "NaN", "10"],
    correctAnswer: "5",
    explanation:
      "The '/' operator performs division. JavaScript converts the string '10' to a number and performs the division, resulting in 5.",
  },
  {
    question:
      "Which method is used to remove the first element from an array in JavaScript?",
    options: ["shift()", "pop()", "slice()", "unshift()"],
    correctAnswer: "shift()",
    explanation:
      "'shift()' removes the first element from an array and returns that element.",
  },
  {
    question: "How do you find out if a property exists in an object?",
    options: [
      "property in object",
      "object.hasOwnProperty(property)",
      "object[property] !== undefined",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "You can check if a property exists in an object using 'property in object', 'object.hasOwnProperty(property)', or checking if 'object[property]' is not undefined.",
  },
  {
    question: "What is the result of false + 1 in JavaScript?",
    options: ["1", "false1", "0", "NaN"],
    correctAnswer: "1",
    explanation:
      "In JavaScript, 'false' is converted to 0 in numeric contexts. So, 'false + 1' results in 1.",
  },
  {
    question:
      "Which method is used to execute a function after a specified delay in JavaScript?",
    options: ["setTimeout()", "setInterval()", "executeLater()", "delay()"],
    correctAnswer: "setTimeout()",
    explanation:
      "'setTimeout()' is used to execute a function after a specified number of milliseconds.",
  },
  {
    question: "What does Object.values(obj) return in JavaScript?",
    options: [
      "An array of the object's own enumerable property values",
      "An array of the object's own enumerable property names",
      "An array of the object's prototype property values",
      "An array of the object's own non-enumerable property values",
    ],
    correctAnswer: "An array of the object's own enumerable property values",
    explanation:
      "'Object.values(obj)' returns an array of the object's own enumerable property values.",
  },
  {
    question: "How do you create a new Set object in JavaScript?",
    options: ["new Set()", "Set.create()", "Set.new()", "new SetObject()"],
    correctAnswer: "new Set()",
    explanation: "To create a new Set object in JavaScript, use 'new Set()'.",
  },
  {
    question:
      "Which method is used to find the last index of an element in an array?",
    options: ["lastIndexOf()", "indexOf()", "findIndex()", "search()"],
    correctAnswer: "lastIndexOf()",
    explanation:
      "'lastIndexOf()' returns the last index at which a given element can be found in the array.",
  },
  {
    question: 'What is the result of "2" * "3" in JavaScript?',
    options: ["6", '"6"', "NaN", "23"],
    correctAnswer: "6",
    explanation:
      "In JavaScript, the '*' operator converts both strings to numbers before performing the multiplication, so '2 * 3' results in 6.",
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
    explanation: "To create a new WeakMap object, use 'new WeakMap()'.",
  },
  {
    question:
      "What does the typeof operator return for a function in JavaScript?",
    options: ["function", "object", "undefined", "function"],
    correctAnswer: "object",
    explanation:
      "The 'typeof' operator returns 'object' for functions in JavaScript.",
  },
  {
    question:
      "How do you check if a string contains a substring in JavaScript?",
    options: [
      "str.includes()",
      "str.indexOf()",
      "str.contains()",
      "str.hasSubstring()",
    ],
    correctAnswer: "str.includes()",
    explanation:
      "'str.includes()' checks if a string contains a specified substring and returns true or false.",
  },
];
