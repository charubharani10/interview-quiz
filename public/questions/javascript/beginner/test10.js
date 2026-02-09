export const test10 = [
  {
    question: "How do you create a new array with elements that pass a test?",
    options: ["filter()", "map()", "find()", "reduce()"],
    correctAnswer: "filter()",
    explanation:
      "'filter()' creates a new array with all elements that pass the test implemented by the provided function.",
  },
  {
    question: "What is the output of typeof 'object' in JavaScript?",
    options: ["string", "object", "undefined", "null"],
    correctAnswer: "string",
    explanation:
      "The 'typeof' operator returns the type of a value. 'typeof 'object'' returns 'string' because 'object' is a string literal.",
  },
  {
    question:
      "How do you create a new object from an existing object in JavaScript?",
    options: [
      "Object.create(existingObject)",
      "Object.assign({}, existingObject)",
      "existingObject.copy()",
      "Both and b)",
    ],
    correctAnswer: "Both a) and b)",
    explanation:
      "'Object.create(existingObject)' creates a new object with the specified prototype object and properties. 'Object.assign({}, existingObject)' creates a new object by copying the properties of an existing object into a new object.",
  },
  {
    question:
      "Which method is used to remove duplicates from an array in JavaScript?",
    options: ["Set", "filter()", "reduce()", "sort()"],
    correctAnswer: "Set",
    explanation:
      "Using a Set to create a new Set from an array removes duplicates because Sets do not allow duplicate values.",
  },
  {
    question: "What does Object.getOwnPropertyNames(obj) return in JavaScript?",
    options: [
      "An array of all property names of an object, including non-enumerable ones",
      "An array of enumerable property names of an object",
      "An array of property values of an object",
      "An array of property descriptors of an object",
    ],
    correctAnswer:
      "An array of all property names of an object, including non-enumerable ones",
    explanation:
      "'Object.getOwnPropertyNames(obj)' returns an array of all property names (including non-enumerable ones) of the specified object.",
  },
  {
    question:
      "How do you create a new instance of a Promise object with a resolve function?",
    options: [
      "new Promise((resolve, reject) => { })",
      "Promise.create((resolve, reject) => { })",
      "Promise.new((resolve, reject) => { })",
      "new Deferred((resolve, reject) => { })",
    ],
    correctAnswer: "new Promise((resolve, reject) => { })",
    explanation:
      "The 'Promise' constructor creates a new Promise object with the provided resolve and reject functions.",
  },
  {
    question: "What is the result of '' + 1 in JavaScript?",
    options: ["'1'", "1", "NaN", "undefined"],
    correctAnswer: "'1'",
    explanation:
      "Concatenating an empty string with a number converts the number to a string, resulting in '1'.",
  },
  {
    question: "How do you get the prototype of an object in JavaScript?",
    options: [
      "Object.getPrototypeOf(obj)",
      "obj.getPrototype()",
      "obj.__proto__",
      "Object.prototypeOf(obj)",
    ],
    correctAnswer: "Object.getPrototypeOf(obj)",
    explanation:
      "'Object.getPrototypeOf(obj)' returns the prototype of the specified object.",
  },
  {
    question:
      "Which method is used to find the index of the first occurrence of a specified value in an array?",
    options: ["indexOf()", "findIndex()", "search()", "find()"],
    correctAnswer: "indexOf()",
    explanation:
      "'indexOf()' returns the first index at which a given element can be found in the array, or -1 if it is not present.",
  },
  {
    question: "What is the output of Infinity - Infinity in JavaScript?",
    options: ["NaN", "Infinity", "-Infinity", "0"],
    correctAnswer: "NaN",
    explanation:
      "Subtracting Infinity from Infinity results in NaN because the result is indeterminate.",
  },
  {
    question: "How do you create a new instance of a WeakMap object?",
    options: [
      "new WeakMap()",
      "WeakMap.create()",
      "WeakMap.new()",
      "new WeakMapObject()",
    ],
    correctAnswer: "new WeakMap()",
    explanation:
      "'new WeakMap()' creates a new WeakMap object that holds weakly referenced key-value pairs.",
  },
  {
    question: "What is the output of 'true' - 1 in JavaScript?",
    options: ["NaN", "1", "-1", "'true1'"],
    correctAnswer: "NaN",
    explanation:
      "Subtracting a number from a string that cannot be converted to a number results in NaN.",
  },
  {
    question: "How do you get the last element of an array in JavaScript?",
    options: [
      "array[array.length - 1]",
      "array.last()",
      "array.pop()",
      "array.slice(-1)",
    ],
    correctAnswer: "array[array.length - 1]",
    explanation:
      "Accessing the element at index 'array.length - 1' gets the last element of the array.",
  },
  {
    question: "What is the result of Number('10') + 1 in JavaScript?",
    options: ["11", "'101'", "10", "NaN"],
    correctAnswer: "11",
    explanation:
      "The 'Number()' function converts the string '10' to the number 10. Adding 1 results in 11.",
  },
  {
    question: "How do you check if a value is a number in JavaScript?",
    options: [
      "Number.isFinite()",
      "typeof value === 'number'",
      "isNaN(value)",
      "Both and b)",
    ],
    correctAnswer: "Both and b)",
    explanation:
      "You can use 'Number.isFinite()' to check if a value is a finite number or 'typeof value === 'number'' to check if it is of type number.",
  },
  {
    question: "What is the output of 0.1 + 0.2 == 0.3 in JavaScript?",
    options: ["false", "true", "0.3", "NaN"],
    correctAnswer: "false",
    explanation:
      "Due to floating-point precision issues, 0.1 + 0.2 does not exactly equal 0.3. The result of the comparison is false.",
  },
  {
    question:
      "Which method is used to execute a function once after a specified delay in JavaScript?",
    options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    correctAnswer: "setTimeout()",
    explanation:
      "'setTimeout()' schedules a function to be executed once after a specified delay.",
  },
  {
    question: "What is the output of [] === ![] in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, '[]' is coerced to 'false', and '![]' is also 'false'. Thus, the comparison '[] === ![]' evaluates to true.",
  },
  {
    question: "How do you define a function in JavaScript?",
    options: [
      "function myFunction() { }",
      "function: myFunction() { }",
      "def myFunction() { }",
      "function myFunction { }",
    ],
    correctAnswer: "function myFunction() { }",
    explanation:
      "'function myFunction() { }' is the correct syntax for defining a function in JavaScript.",
  },
  {
    question: "What is the output of typeof [] === 'object' in JavaScript?",
    options: ["true", "false", "undefined", "object"],
    correctAnswer: "true",
    explanation:
      "The 'typeof []' expression returns 'object', and the comparison 'typeof [] === 'object'' evaluates to true.",
  },
];
