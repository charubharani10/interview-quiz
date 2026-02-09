export const test2 = [
  {
    question: "What will console.log('10' - 5) return in JavaScript?",
    options: ["5", "'15'", "NaN", "undefined"],
    correctAnswer: "5",
    explanation:
      "The subtraction operation converts '10' to a number, resulting in 10 - 5, which equals 5.",
  },
  {
    question: "How do you create a new Date object in JavaScript?",
    options: ["new Date()", "Date.create()", "new DateObject()", "Date.new()"],
    correctAnswer: "new Date()",
    explanation:
      "'new Date()' creates a new Date object representing the current date and time or a specified date and time.",
  },
  {
    question: "What is the output of console.log([] == false) in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, an empty array '[]' is coerced to an empty string which is coerced to 0, and 'false' is also coerced to 0, making the comparison true.",
  },
  {
    question:
      "Which method is used to convert an array to a string in JavaScript?",
    options: ["toString()", "join()", "stringify()", "Both a) and b)"],
    correctAnswer: "Both a) and b)",
    explanation:
      "Both 'toString()' and 'join()' can be used to convert an array to a string. 'toString()' uses commas as separators, while 'join()' allows specifying a different separator.",
  },
  {
    question: "What does the filter() method do in JavaScript?",
    options: [
      "Creates a new array with all elements that pass the test implemented by the provided function",
      "Finds the first element that passes the test",
      "Reduces the array to a single value",
      "Maps each element to a new value",
    ],
    correctAnswer:
      "Creates a new array with all elements that pass the test implemented by the provided function",
    explanation:
      "'filter()' creates a new array with all elements that pass the condition specified in the provided function.",
  },
  {
    question: "How do you get the type of a variable in JavaScript?",
    options: [
      "typeof variable",
      "variable.type()",
      "variable.getType()",
      "Type(variable)",
    ],
    correctAnswer: "typeof variable",
    explanation:
      "'typeof variable' is used to get the type of a variable in JavaScript.",
  },
  {
    question: "What is the output of console.log('2' + 2) in JavaScript?",
    options: ["'22'", "4", "NaN", "undefined"],
    correctAnswer: "'22'",
    explanation:
      "In JavaScript, the '+' operator with a string and a number performs string concatenation, so '2' + 2 results in the string '22'.",
  },
  {
    question:
      "Which method is used to check if an array contains a specific element in JavaScript?",
    options: ["includes()", "contains()", "has()", "indexOf()"],
    correctAnswer: "includes()",
    explanation:
      "'includes()' checks if an array contains a specific element and returns a boolean value.",
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
      "All listed methods can be used to create an empty object in JavaScript.",
  },
  {
    question: "What will console.log(1 == '1') return in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, '==' performs type coercion, so '1' (string) is coerced to 1 (number), making the comparison true.",
  },
  {
    question:
      "Which method is used to execute a function repeatedly after a specified interval in JavaScript?",
    options: ["setInterval()", "setTimeout()", "repeat()", "delay()"],
    correctAnswer: "setInterval()",
    explanation:
      "'setInterval()' executes a function repeatedly at specified intervals in milliseconds.",
  },
  {
    question: "What is the output of console.log('5' - '2') in JavaScript?",
    options: ["3", "'3'", "NaN", "undefined"],
    correctAnswer: "3",
    explanation:
      "The '-' operator converts the strings '5' and '2' to numbers and performs subtraction, resulting in 3.",
  },
  {
    question: "What does the find() method do in JavaScript?",
    options: [
      "Returns the first element that satisfies the provided testing function",
      "Returns the index of the first element that satisfies the provided testing function",
      "Finds the last element that satisfies the provided testing function",
      "Filters out elements that do not satisfy the provided testing function",
    ],
    correctAnswer:
      "Returns the first element that satisfies the provided testing function",
    explanation:
      "'find()' returns the first element in an array that satisfies the provided testing function.",
  },
  {
    question:
      "How do you check if a variable is an instance of a specific class or constructor in JavaScript?",
    options: [
      "variable instanceof Constructor",
      "variable.isInstanceOf(Constructor)",
      "Constructor.isInstance(variable)",
      "variable.is(Constructor)",
    ],
    correctAnswer: "variable instanceof Constructor",
    explanation:
      "'instanceof' checks if a variable is an instance of a specific class or constructor.",
  },
  {
    question: "What is the result of console.log('0' == false) in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "'0' (string) is coerced to 0 (number), and false is also coerced to 0, making the comparison true.",
  },
  {
    question: "How do you access the prototype of an object in JavaScript?",
    options: [
      "Object.getPrototypeOf(obj)",
      "obj.__proto__",
      "obj.prototype",
      "Both a) and b)",
    ],
    correctAnswer: "Both a) and b)",
    explanation:
      "Both 'Object.getPrototypeOf(obj)' and 'obj.__proto__' can be used to access the prototype of an object.",
  },
  {
    question: "What will console.log(typeof (1 + '1')) return in JavaScript?",
    options: ["string", "number", "undefined", "NaN"],
    correctAnswer: "string",
    explanation:
      "The '+' operator with a number and a string performs string concatenation, so '1' + '1' results in '11', which is of type 'string'.",
  },
  {
    question: "How do you create a deep copy of an object in JavaScript?",
    options: [
      "JSON.parse(JSON.stringify(obj))",
      "Object.assign({}, obj)",
      "Object.create(obj)",
      "obj.copy()",
    ],
    correctAnswer: "JSON.parse(JSON.stringify(obj))",
    explanation:
      "'JSON.parse(JSON.stringify(obj))' creates a deep copy of an object by serializing and then deserializing it.",
  },
  {
    question:
      "Which method is used to execute a function at regular intervals in JavaScript?",
    options: ["setInterval()", "setTimeout()", "repeat()", "delay()"],
    correctAnswer: "setInterval()",
    explanation:
      "'setInterval()' is used to execute a function repeatedly at specified intervals in milliseconds.",
  },
  {
    question:
      "What will be the output of console.log([1] + [2]) in JavaScript?",
    options: ["'1,2'", "'[1][2]'", "3", "'1'"],
    correctAnswer: "'1,2'",
    explanation:
      "When concatenating two arrays, JavaScript converts them to strings and concatenates them, resulting in '1,2'.",
  },
];
