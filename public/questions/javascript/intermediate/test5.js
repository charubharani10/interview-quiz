export const test5 = [
  {
    question: "How do you check if a value is null in JavaScript?",
    options: [
      "value === null",
      "value == null",
      "value.isNull()",
      "Both a) and b)",
    ],
    correctAnswer: "Both a) and b)",
    explanation:
      "Both 'value === null' and 'value == null' check for null, though '==' also checks for undefined.",
  },
  {
    question:
      "Which method is used to add elements to the beginning of an array in JavaScript?",
    options: ["unshift()", "push()", "splice()", "shift()"],
    correctAnswer: "unshift()",
    explanation:
      "'unshift()' adds one or more elements to the beginning of an array and returns the new length of the array.",
  },
  {
    question: "How do you remove a property from an object in JavaScript?",
    options: [
      "delete obj.property",
      "remove obj.property",
      "obj.remove(property)",
      "obj.delete(property)",
    ],
    correctAnswer: "delete obj.property",
    explanation:
      "'delete obj.property' removes a property from an object. 'delete' is the correct operator for this purpose.",
  },
  {
    question: "What does Object.assign() do in JavaScript?",
    options: [
      "Copies values of all enumerable own properties from one or more source objects to a target object",
      "Creates a new object",
      "Defines new properties on an object",
      "Merges two arrays",
    ],
    correctAnswer:
      "Copies values of all enumerable own properties from one or more source objects to a target object",
    explanation:
      "'Object.assign()' copies properties from source objects to a target object, merging their properties.",
  },
  {
    question: "What is the output of console.log('string' * 2) in JavaScript?",
    options: ["NaN", "undefined", "2", "'stringstring'"],
    correctAnswer: "NaN",
    explanation:
      "The '*' operator does not perform string concatenation. Since 'string' cannot be multiplied, it results in 'NaN'.",
  },
  {
    question:
      "How do you check if a string contains a specific substring in JavaScript?",
    options: ["includes()", "contains()", "indexOf()", "substring()"],
    correctAnswer: "includes()",
    explanation:
      "'includes()' checks if a string contains a specific substring and returns true or false.",
  },
  {
    question: "What will console.log([] + []) return in JavaScript?",
    options: ["''", "[]", "undefined", "NaN"],
    correctAnswer: "''",
    explanation:
      "When using '+' with two arrays, JavaScript converts them to strings and concatenates them, resulting in an empty string.",
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
      "'new WeakSet()' creates a new WeakSet object that holds weakly held objects.",
  },
  {
    question: "What is the result of console.log('true' - 1) in JavaScript?",
    options: ["NaN", "1", "'true'", "undefined"],
    correctAnswer: "NaN",
    explanation:
      "The '-' operator does not perform string concatenation. Since 'true' is a string that cannot be subtracted, it results in 'NaN'.",
  },
  {
    question:
      "Which method is used to extract a portion of a string in JavaScript?",
    options: ["slice()", "splice()", "substring()", "Both a) and c)"],
    correctAnswer: "Both a) and c)",
    explanation:
      "'slice()' and 'substring()' can be used to extract a portion of a string.",
  },
  {
    question: "How do you check if a value is undefined in JavaScript?",
    options: [
      "value === undefined",
      "typeof value === 'undefined'",
      "value.isUndefined()",
      "Both a) and b)",
    ],
    correctAnswer: "Both a) and b)",
    explanation:
      "Both 'value === undefined' and 'typeof value === 'undefined'' can be used to check if a value is undefined.",
  },
  {
    question: "What does Object.keys() return in JavaScript?",
    options: [
      "An array of a given object's own enumerable property names",
      "An array of all properties including non-enumerable properties",
      "An array of all methods of an object",
      "An array of all keys in the prototype chain",
    ],
    correctAnswer: "An array of a given object's own enumerable property names",
    explanation:
      "'Object.keys()' returns an array of the object's own enumerable property names.",
  },
  {
    question: "What is the output of console.log('5' - 2) in JavaScript?",
    options: ["3", "'3'", "NaN", "undefined"],
    correctAnswer: "3",
    explanation:
      "The '-' operator coerces '5' to a number, so '5' - 2 results in 3.",
  },
  {
    question: "How do you create a new Set object in JavaScript?",
    options: ["new Set()", "Set.create()", "Set.new()", "new SetObject()"],
    correctAnswer: "new Set()",
    explanation:
      "'new Set()' creates a new Set object which holds unique values.",
  },
  {
    question: "What is the purpose of Object.create() in JavaScript?",
    options: [
      "Creates a new object with the specified prototype object and properties",
      "Creates a new property on an existing object",
      "Defines a new method on an object",
      "Merges two objects",
    ],
    correctAnswer:
      "Creates a new object with the specified prototype object and properties",
    explanation:
      "'Object.create()' creates a new object with the specified prototype object and optional properties.",
  },
  {
    question: "What does Array.prototype.map() do in JavaScript?",
    options: [
      "Creates a new array populated with the results of calling a provided function on every element in the calling array",
      "Filters out elements from an array",
      "Finds the index of a specific element in an array",
      "Reduces the array to a single value",
    ],
    correctAnswer:
      "Creates a new array populated with the results of calling a provided function on every element in the calling array",
    explanation:
      "'Array.prototype.map()' creates a new array with the results of calling a provided function on every element in the array.",
  },
  {
    question: "How do you get the last element of an array in JavaScript?",
    options: [
      "array[array.length - 1]",
      "array.last()",
      "array.getLast()",
      "array[array.length]",
    ],
    correctAnswer: "array[array.length - 1]",
    explanation:
      "To get the last element of an array, use 'array[array.length - 1]'. 'array[array.length]' is out of bounds.",
  },
  {
    question: "What does String.prototype.charAt() do in JavaScript?",
    options: [
      "Returns the character at a specified index in a string",
      "Returns the ASCII code of a character in a string",
      "Returns a substring from a string",
      "Returns the index of a character in a string",
    ],
    correctAnswer: "Returns the character at a specified index in a string",
    explanation:
      "'String.prototype.charAt()' returns the character at the specified index in a string.",
  },
  {
    question: "What is the output of console.log(true + false) in JavaScript?",
    options: ["1", "true", "false", "undefined"],
    correctAnswer: "1",
    explanation:
      "The boolean values 'true' and 'false' are coerced to numbers, where 'true' is 1 and 'false' is 0. Thus, 'true + false' results in 1.",
  },
  {
    question: "How do you remove the last element from an array in JavaScript?",
    options: ["pop()", "shift()", "splice()", "delete()"],
    correctAnswer: "pop()",
    explanation:
      "'pop()' removes the last element from an array and returns it.",
  },
];
