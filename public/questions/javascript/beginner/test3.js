export const test3 = [
  {
    question: "What is the purpose of setTimeout() in JavaScript?",
    options: [
      "To execute a function after a specified delay",
      "To execute a function repeatedly",
      "To set a timeout period for an operation",
      "To pause the execution of code",
    ],
    correctAnswer: "To execute a function after a specified delay",
    explanation:
      "'setTimeout()' is used to execute a function after a specified number of milliseconds.",
  },
  {
    question:
      "Which method is used to convert a JavaScript object into a JSON string?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.toString()",
      "Object.toJSON()",
    ],
    correctAnswer: "JSON.stringify()",
    explanation:
      "'JSON.stringify()' is used to convert a JavaScript object into a JSON string.",
  },
  {
    question: "How do you create a new promise in JavaScript?",
    options: [
      "new Promise((resolve, reject) => { })",
      "Promise.create()",
      "new Promise((resolve) => { })",
      "Promise.new()",
    ],
    correctAnswer: "new Promise((resolve, reject) => { })",
    explanation:
      "To create a new promise, you use 'new Promise((resolve, reject) => { })' where 'resolve' and 'reject' are functions used to settle the promise.",
  },
  {
    question: "What is the catch block used for in JavaScript promises?",
    options: [
      "To handle errors in the promise",
      "To execute code after the promise resolves",
      "To create a new promise",
      "To reject a promise",
    ],
    correctAnswer: "To handle errors in the promise",
    explanation:
      "The 'catch' block is used to handle errors that occur in the promise chain.",
  },
  {
    question: "What is the purpose of the bind() method in JavaScript?",
    options: [
      "To create a new function with a specific this value",
      "To attach an event listener to an element",
      "To define a new method on an object",
      "To clone an object",
    ],
    correctAnswer: "To create a new function with a specific this value",
    explanation:
      "The 'bind()' method creates a new function that, when called, has its 'this' keyword set to the provided value.",
  },
  {
    question: "How do you define an arrow function in JavaScript?",
    options: [
      "const myFunc = () => { }",
      "const myFunc = function() { }",
      "const myFunc = function => { }",
      "const myFunc = () -> { }",
    ],
    correctAnswer: "const myFunc = () => { }",
    explanation: "Arrow functions are defined using the '() => {}' syntax.",
  },
  {
    question:
      "Which method is used to iterate over the properties of an object in JavaScript?",
    options: [
      "Object.keys()",
      "Object.values()",
      "Object.entries()",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "All of these methods can be used to iterate over the properties of an object. 'Object.keys()' returns an array of property names, 'Object.values()' returns an array of property values, and 'Object.entries()' returns an array of key-value pairs.",
  },
  {
    question: "How do you add a new property to an existing JavaScript object?",
    options: [
      "obj.newProperty = value",
      "obj.addProperty('newProperty', value)",
      "obj.setProperty('newProperty', value)",
      "obj.createProperty('newProperty', value)",
    ],
    correctAnswer: "obj.newProperty = value",
    explanation:
      "You can add a new property to an object using the syntax 'obj.newProperty = value'.",
  },
  {
    question: "What is the output of Boolean(0) in JavaScript?",
    options: ["false", "true", "0", "null"],
    correctAnswer: "false",
    explanation: "The Boolean function converts 0 to false.",
  },
  {
    question:
      "Which method is used to remove whitespace from the beginning and end of a string in JavaScript?",
    options: ["trim()", "strip()", "clean()", "removeSpaces()"],
    correctAnswer: "trim()",
    explanation:
      "The 'trim()' method removes whitespace from both ends of a string.",
  },
  {
    question: "What does Object.prototype.toString.call([]) return?",
    options: [
      "[object Array]",
      "[object Object]",
      "[object String]",
      "[object ArrayObject]",
    ],
    correctAnswer: "[object Array]",
    explanation:
      "The 'Object.prototype.toString.call([])' method returns '[object Array]' for an array.",
  },
  {
    question: "How do you check if a number is finite in JavaScript?",
    options: [
      "Number.isFinite()",
      "isFinite()",
      "typeof number === 'finite'",
      "number.isFinite()",
    ],
    correctAnswer: "Number.isFinite() and isFinite()",
    explanation:
      "Both 'Number.isFinite()' and 'isFinite()' can be used to check if a number is finite.",
  },
  {
    question: "Which method is used to sort an array in JavaScript?",
    options: ["sort()", "order()", "arrange()", "sequence()"],
    correctAnswer: "sort()",
    explanation:
      "The 'sort()' method is used to sort the elements of an array.",
  },
  {
    question: "How do you remove a property from an object in JavaScript?",
    options: [
      "delete obj.property",
      "remove obj.property",
      "obj.remove('property')",
      "obj.delete('property')",
    ],
    correctAnswer: "delete obj.property",
    explanation:
      "The 'delete' operator is used to remove a property from an object.",
  },
  {
    question: "What is the result of NaN === NaN in JavaScript?",
    options: ["false", "true", "NaN", "undefined"],
    correctAnswer: "false",
    explanation:
      "In JavaScript, NaN is not equal to NaN, so 'NaN === NaN' returns false.",
  },
  {
    question: "Which operator is used to perform a bitwise XOR in JavaScript?",
    options: ["^", "&", "|", "~"],
    correctAnswer: "^",
    explanation: "The '^' operator is used to perform a bitwise XOR operation.",
  },
  {
    question:
      "How do you find the number of elements in an array in JavaScript?",
    options: [
      "array.length",
      "array.size",
      "array.count()",
      "array.elements()",
    ],
    correctAnswer: "array.length",
    explanation:
      "The 'length' property is used to find the number of elements in an array.",
  },
  {
    question:
      "Which function is used to execute a function after a specified interval in JavaScript?",
    options: ["setInterval()", "setTimeout()", "executeAfter()", "delay()"],
    correctAnswer: "setInterval()",
    explanation:
      "'setInterval()' is used to repeatedly execute a function after a specified interval.",
  },
  {
    question: "How do you create a new JavaScript Set object?",
    options: ["new Set()", "Set.create()", "Set.new()", "new SetObject()"],
    correctAnswer: "new Set()",
    explanation: "'new Set()' is used to create a new Set object.",
  },
  {
    question: "What is the result of typeof [] in JavaScript?",
    options: ["object", "array", "list", "undefined"],
    correctAnswer: "object",
    explanation:
      "In JavaScript, arrays are technically objects, so 'typeof []' returns 'object'.",
  },
];
