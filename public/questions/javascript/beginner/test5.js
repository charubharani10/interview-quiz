export const test5 = [
  {
    question: "What will 5 % 2 return in JavaScript?",
    options: ["1", "2", "0", "5"],
    correctAnswer: "1",
    explanation:
      "The '%' operator returns the remainder of the division, so '5 % 2' results in 1.",
  },
  {
    question:
      "How do you remove whitespace from the end of a string in JavaScript?",
    options: ["trimEnd()", "trimRight()", "stripEnd()", "removeEnd()"],
    correctAnswer: "trimRight()",
    explanation:
      "'trimRight()' (or 'trimEnd()' in some environments) removes whitespace from the end of a string.",
  },
  {
    question: "What is the result of [] == ![] in JavaScript?",
    options: ["true", "false", "[]", "NaN"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, '[]' is coerced to a boolean value which is 'false', and '![]' is coerced to 'false' as well. Since 'false == false' evaluates to true, the result is 'true'.",
  },
  {
    question: "Which operator is used to perform a bitwise AND in JavaScript?",
    options: ["&", "|", "^", "~"],
    correctAnswer: "&",
    explanation:
      "The '&' operator performs a bitwise AND operation between two numbers.",
  },
  {
    question: "How do you create a new Map object in JavaScript?",
    options: ["new Map()", "Map.create()", "Map.new()", "new MapObject()"],
    correctAnswer: "new Map()",
    explanation: "To create a new Map object in JavaScript, use 'new Map()'.",
  },
  {
    question: "What is the output of !!0 in JavaScript?",
    options: ["false", "true", "0", "undefined"],
    correctAnswer: "false",
    explanation:
      "The '!!' operator converts any value to a boolean. Since '0' is falsy, '!!0' results in 'false'.",
  },
  {
    question: "What is the this keyword used for in JavaScript?",
    options: [
      "Refers to the current object",
      "Refers to the global object",
      "Refers to the previous object",
      "Refers to a function",
    ],
    correctAnswer: "Refers to the current object",
    explanation:
      "The 'this' keyword refers to the object from which the method was called.",
  },
  {
    question:
      "Which method is used to add an element to the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: "push()",
    explanation:
      "'push()' adds one or more elements to the end of an array and returns the new length of the array.",
  },
  {
    question: "What does Array.isArray([]) return?",
    options: ["true", "false", "undefined", "null"],
    correctAnswer: "true",
    explanation:
      "'Array.isArray([])' checks if the value is an array and returns 'true' for an array.",
  },
  {
    question: "How do you find the index of an element in an array?",
    options: ["indexOf()", "findIndex()", "search()", "getIndex()"],
    correctAnswer: "indexOf()",
    explanation:
      "'indexOf()' returns the first index at which a given element can be found in the array.",
  },
  {
    question: "What is the result of 2 ** 3 in JavaScript?",
    options: ["8", "6", "9", "7"],
    correctAnswer: "8",
    explanation:
      "The '**' operator performs exponentiation. So, '2 ** 3' evaluates to 8.",
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
    explanation: "To create a new WeakSet object, use 'new WeakSet()'.",
  },
  {
    question: "What does parseInt('101', 2) return in JavaScript?",
    options: ["5", "101", "2", "NaN"],
    correctAnswer: "5",
    explanation:
      "'parseInt('101', 2)' parses the string '101' as a binary number and returns its decimal equivalent, which is 5.",
  },
  {
    question:
      "Which method is used to convert a string to uppercase in JavaScript?",
    options: ["toUpperCase()", "toUpper()", "uppercase()", "toCaps()"],
    correctAnswer: "toUpperCase()",
    explanation:
      "'toUpperCase()' converts all characters in a string to uppercase.",
  },
  {
    question:
      "How do you check if an object has a specific property in JavaScript?",
    options: [
      "obj.hasOwnProperty('property')",
      "'property' in obj",
      "obj.property !== undefined",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "You can check if an object has a specific property using 'obj.hasOwnProperty('property')', ''property' in obj', or checking if 'obj.property' is not undefined.",
  },
  {
    question: "What is the result of 0.1 + 0.2 === 0.3 in JavaScript?",
    options: ["false", "true", "0.3", "undefined"],
    correctAnswer: "false",
    explanation:
      "Due to floating-point precision issues in JavaScript, '0.1 + 0.2' does not exactly equal '0.3'.",
  },
  {
    question: "Which method is used to concatenate two arrays in JavaScript?",
    options: ["concat()", "merge()", "combine()", "append()"],
    correctAnswer: "concat()",
    explanation:
      "'concat()' is used to merge two or more arrays into a single array.",
  },
  {
    question:
      "How do you create a new regular expression object in JavaScript?",
    options: [
      "new RegExp()",
      "RegExp.create()",
      "RegExp.new()",
      "new RegularExpression()",
    ],
    correctAnswer: "new RegExp()",
    explanation:
      "To create a new regular expression object, use 'new RegExp()'.",
  },
  {
    question: "What does String.raw do in JavaScript?",
    options: [
      "It is a tag function for raw string literals",
      "It converts a string to its raw form",
      "It removes escape sequences from a string",
      "It creates a raw string object",
    ],
    correctAnswer: "It is a tag function for raw string literals",
    explanation:
      "The 'String.raw' tag function is used to create raw string literals with escape sequences preserved.",
  },
  {
    question: "How do you define a class in JavaScript?",
    options: [
      "class MyClass { }",
      "function MyClass() { }",
      "new MyClass() { }",
      "define class MyClass { }",
    ],
    correctAnswer: "class MyClass { }",
    explanation:
      "To define a class in JavaScript, use the 'class' keyword followed by the class name and its body.",
  },
];
