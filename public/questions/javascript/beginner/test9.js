export const test9 = [
  {
    question: "How do you handle errors in JavaScript?",
    options: ["try...catch", "throw", "catch", "Both and b)"],
    correctAnswer: "Both and b)",
    explanation:
      "Errors can be handled using 'try...catch' for catching errors, and 'throw' to throw custom errors.",
  },
  {
    question: "What is the output of !!'' in JavaScript?",
    options: ["false", "true", "undefined", "null"],
    correctAnswer: "false",
    explanation:
      "The double negation '!!' converts the value to its boolean representation. An empty string '' is falsy, so '!!'' results in false.",
  },
  {
    question:
      "Which method is used to execute a function repeatedly at specific intervals in JavaScript?",
    options: ["setInterval()", "setTimeout()", "repeat()", "execute()"],
    correctAnswer: "setInterval()",
    explanation:
      "'setInterval()' executes a function repeatedly at specified intervals in milliseconds.",
  },
  {
    question: "How do you get the value of a URL parameter in JavaScript?",
    options: [
      "new URLSearchParams(window.location.search).get('param')",
      "window.location.getParameter('param')",
      "window.location.search('param')",
      "URL.getParameter('param')",
    ],
    correctAnswer: "new URLSearchParams(window.location.search).get('param')",
    explanation:
      "The 'URLSearchParams' interface allows you to work with the query string of a URL, and '.get('param')' retrieves the value of the specified parameter.",
  },
  {
    question: "What is the result of Number('10') + 1 in JavaScript?",
    options: ["11", "'101'", "10", "NaN"],
    correctAnswer: "11",
    explanation:
      "The 'Number()' function converts the string '10' to the number 10. Adding 1 results in 11.",
  },
  {
    question: "How do you add an event listener to an element in JavaScript?",
    options: [
      "element.addEventListener('event', function)",
      "element.on('event', function)",
      "element.attachEvent('event', function)",
      "element.listen('event', function)",
    ],
    correctAnswer: "element.addEventListener('event', function)",
    explanation:
      "'addEventListener()' is the standard method to attach event handlers to elements in JavaScript.",
  },
  {
    question: "What is the output of [] == ![] in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, '[]' is converted to a boolean, resulting in 'false', and '![]' is also 'false'. The comparison '[] == ![]' is 'true' because both sides are 'false'.",
  },
  {
    question:
      "How do you create a new function that is bound to a specific context?",
    options: [
      "function.bind(context)",
      "context.bind(function)",
      "function.call(context)",
      "function.apply(context)",
    ],
    correctAnswer: "function.bind(context)",
    explanation:
      "'function.bind(context)' creates a new function that is permanently bound to the specified context.",
  },
  {
    question:
      "Which method is used to create a new array by concatenating multiple arrays in JavaScript?",
    options: ["concat()", "push()", "join()", "merge()"],
    correctAnswer: "concat()",
    explanation:
      "'concat()' is used to merge multiple arrays into a single array.",
  },
  {
    question: "What is the output of 0.1 + 0.2 == 0.3 in JavaScript?",
    options: ["false", "true", "0.3", "NaN"],
    correctAnswer: "false",
    explanation:
      "Due to floating-point precision issues, 0.1 + 0.2 does not exactly equal 0.3. The result of the comparison is false.",
  },
  {
    question: "How do you create a new Map object in JavaScript?",
    options: ["new Map()", "Map.create()", "Map.new()", "new MapObject()"],
    correctAnswer: "new Map()",
    explanation:
      "'new Map()' creates a new Map object, which holds key-value pairs.",
  },
  {
    question:
      "Which method is used to find the first element that matches a condition in an array?",
    options: ["find()", "filter()", "some()", "every()"],
    correctAnswer: "find()",
    explanation:
      "'find()' returns the first element in an array that satisfies the provided testing function.",
  },
  {
    question:
      "What does the Object.getPrototypeOf(obj) method do in JavaScript?",
    options: [
      "Returns the prototype of the specified object",
      "Returns the constructor of the object",
      "Sets the prototype of the specified object",
      "Returns the object's own properties",
    ],
    correctAnswer: "Returns the prototype of the specified object",
    explanation:
      "'Object.getPrototypeOf(obj)' returns the prototype (i.e., the internal [[Prototype]] property) of the specified object.",
  },
  {
    question: "What is the output of 1 + '1' in JavaScript?",
    options: ["'11'", "2", "11", "NaN"],
    correctAnswer: "'11'",
    explanation:
      "When adding a number and a string, JavaScript converts the number to a string and concatenates them, resulting in '11'.",
  },
  {
    question:
      "Which method is used to transform a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.object()",
      "JSON.decode()",
    ],
    correctAnswer: "JSON.parse()",
    explanation:
      "'JSON.parse()' parses a JSON string and converts it into a JavaScript object.",
  },
  {
    question:
      "How do you add a new property to an existing object in JavaScript?",
    options: [
      "object.newProperty = value",
      "Object.defineProperty(object, 'newProperty', { value })",
      "Object.assign(object, { newProperty: value })",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "You can add a new property to an object using 'object.newProperty = value', 'Object.defineProperty()', or 'Object.assign()'.",
  },
  {
    question: "What is the result of 0 == '0' in JavaScript?",
    options: ["true", "false", "0", "'0'"],
    correctAnswer: "true",
    explanation:
      "'==' performs type coercion, so '0' (a string) is converted to 0 (a number), making the comparison '0 == 0' true.",
  },
  {
    question: "How do you create a new WeakSet object in JavaScript?",
    options: [
      "new WeakSet()",
      "WeakSet.create()",
      "WeakSet.new()",
      "new WeakSetObject()",
    ],
    correctAnswer: "new WeakSet()",
    explanation:
      "'new WeakSet()' creates a new WeakSet object, which allows storing weakly held objects.",
  },
  {
    question:
      "Which method is used to test whether a string starts with a specified substring in JavaScript?",
    options: ["startsWith()", "includes()", "beginsWith()", "indexOf()"],
    correctAnswer: "startsWith()",
    explanation:
      "'startsWith()' tests whether a string starts with the specified substring.",
  },
  {
    question: "What is the output of false + 1 in JavaScript?",
    options: ["1", "false1", "0", "NaN"],
    correctAnswer: "1",
    explanation:
      "In JavaScript, 'false' is converted to 0 when used in a numeric context, so 'false + 1' equals 1.",
  },
];
