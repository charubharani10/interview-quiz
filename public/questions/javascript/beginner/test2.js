export const test2 = [
  {
    question: "What will null == undefined evaluate to?",
    options: ["true", "false", "null", "undefined"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, null and undefined are loosely equal to each other (==), but not strictly equal (===).",
  },
  {
    question: "Which operator checks for both value and type equality?",
    options: ["===", "==", "!=", "!=="],
    correctAnswer: "===",
    explanation: "The '===' operator checks for both value and type equality.",
  },
  {
    question: "How do you convert a string to a number in JavaScript?",
    options: ["Number()", "parseInt()", "parseFloat()", "All of the above"],
    correctAnswer: "All of the above",
    explanation:
      "All of these methods can be used to convert a string to a number. 'Number()' converts the string to a number, 'parseInt()' converts it to an integer, and 'parseFloat()' converts it to a floating-point number.",
  },
  {
    question: "What does the Array.prototype.forEach() method do?",
    options: [
      "Executes a function once for each array element",
      "Creates a new array with the results of a function",
      "Filters the array based on a condition",
      "Reduces the array to a single value",
    ],
    correctAnswer: "Executes a function once for each array element",
    explanation:
      "The 'forEach()' method executes a provided function once for each array element.",
  },
  {
    question:
      "How do you check if a value is NaN (Not-a-Number) in JavaScript?",
    options: [
      "Number.isNaN()",
      "isNaN()",
      "typeof value === 'NaN'",
      "value === NaN",
    ],
    correctAnswer: "Number.isNaN() and isNaN()",
    explanation:
      "Both 'Number.isNaN()' and 'isNaN()' can be used to check if a value is NaN. 'Number.isNaN()' is more accurate.",
  },
  {
    question: "Which method is used to convert a number to a string?",
    options: ["toString()", "String()", "parseInt()", "Stringify()"],
    correctAnswer: "toString() and String()",
    explanation:
      "'toString()' and 'String()' can both be used to convert a number to a string.",
  },
  {
    question: "What does document.getElementById('id') return?",
    options: [
      "The element with the specified ID",
      "The ID attribute value of the element",
      "The class of the element",
      "The inner HTML of the element",
    ],
    correctAnswer: "The element with the specified ID",
    explanation:
      "The 'getElementById()' method returns the element with the specified ID.",
  },
  {
    question:
      "How do you attach an event listener to a DOM element in JavaScript?",
    options: [
      "element.addEventListener(event, function)",
      "element.onEvent = function",
      "element.attachEvent(event, function)",
      "element.listen(event, function)",
    ],
    correctAnswer: "element.addEventListener(event, function)",
    explanation:
      "The 'addEventListener()' method is used to attach an event handler to a specified element.",
  },
  {
    question:
      "Which method is used to stop the propagation of an event in JavaScript?",
    options: [
      "event.stopPropagation()",
      "event.preventDefault()",
      "event.cancel()",
      "event.stop()",
    ],
    correctAnswer: "event.stopPropagation()",
    explanation:
      "'event.stopPropagation()' is used to stop the event from propagating up or down the DOM tree.",
  },
  {
    question: "What is the result of 5 + '5' in JavaScript?",
    options: ['"55"', "10", "NaN", "5"],
    correctAnswer: '"55"',
    explanation:
      "In JavaScript, adding a number and a string results in string concatenation. So, 5 + '5' results in '55'.",
  },
  {
    question:
      "How do you create a new object that inherits from another object in JavaScript?",
    options: [
      "Object.create()",
      "new Object()",
      "Object.inherit()",
      "Object.extend()",
    ],
    correctAnswer: "Object.create()",
    explanation:
      "The 'Object.create()' method creates a new object with the specified prototype object and properties.",
  },
  {
    question: "What does JSON.parse() do in JavaScript?",
    options: [
      "Converts a JSON string into a JavaScript object",
      "Converts a JavaScript object into a JSON string",
      "Formats a JSON string",
      "Validates a JSON string",
    ],
    correctAnswer: "Converts a JSON string into a JavaScript object",
    explanation:
      "'JSON.parse()' converts a JSON string into a JavaScript object.",
  },
  {
    question: "How do you define a method in an object literal in JavaScript?",
    options: [
      "methodName() { }",
      "methodName: function() { }",
      "function methodName() { }",
      "methodName: () => { }",
    ],
    correctAnswer: "methodName() { } and methodName: function() { }",
    explanation:
      "You can define methods in an object literal using 'methodName() { }' or 'methodName: function() { }'.",
  },
  {
    question: "What is the output of [1, 2, 3] + [4, 5, 6] in JavaScript?",
    options: ['"1,2,34,5,6"', "[1,2,3,4,5,6]", "[1,2,3] + [4,5,6]", "NaN"],
    correctAnswer: '"1,2,34,5,6"',
    explanation:
      "When arrays are concatenated with the '+' operator, they are converted to strings and concatenated.",
  },
  {
    question: "How do you create a new JavaScript Date object?",
    options: ["new Date()", "Date.create()", "Date.new()", "new DateObject()"],
    correctAnswer: "new Date()",
    explanation:
      "'new Date()' is used to create a new Date object representing the current date and time.",
  },
  {
    question:
      "Which method is used to remove an element from an array by index in JavaScript?",
    options: ["splice()", "slice()", "pop()", "shift()"],
    correctAnswer: "splice()",
    explanation:
      "The 'splice()' method is used to remove elements from an array by index.",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    options: [
      "== checks for value equality, === checks for value and type equality",
      "== checks for type equality, === checks for value equality",
      "== is used for assignment, === is used for comparison",
      "There is no difference",
    ],
    correctAnswer:
      "== checks for value equality, === checks for value and type equality",
    explanation:
      "'==' checks for value equality with type coercion, while '===' checks for both value and type equality without type coercion.",
  },
  {
    question: "How do you create an empty array in JavaScript?",
    options: [
      "let arr = [];",
      "let arr = new Array();",
      "let arr = {};",
      "let arr = array();",
    ],
    correctAnswer: "let arr = []; and let arr = new Array();",
    explanation:
      "You can create an empty array using 'let arr = []' or 'let arr = new Array()'.",
  },
  {
    question: "What is the typeof operator used for in JavaScript?",
    options: [
      "To determine the type of a variable",
      "To check if a variable is null",
      "To cast a variable to a different type",
      "To create a new variable",
    ],
    correctAnswer: "To determine the type of a variable",
    explanation:
      "The 'typeof' operator is used to determine the type of a variable.",
  },
  {
    question: "How do you check if a value is undefined in JavaScript?",
    options: [
      "typeof value === 'undefined'",
      "value === undefined",
      "value.isUndefined()",
      "value === null",
    ],
    correctAnswer: "typeof value === 'undefined' and value === undefined",
    explanation:
      "You can check if a value is undefined using 'typeof value === 'undefined'' or 'value === undefined'.",
  },
];
