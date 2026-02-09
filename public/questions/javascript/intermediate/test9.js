export const test9 = [
  {
    question: "What is the output of console.log({} + []) in JavaScript?",
    options: ["'[object Object]'", "NaN", "undefined", "0"],
    correctAnswer: "'[object Object]'",
    explanation:
      "Adding an empty object '{}' and an empty array '[]' results in '[object Object]' because the object is converted to a string representation.",
  },
  {
    question: "What does Array.prototype.findIndex() do in JavaScript?",
    options: [
      "Returns the index of the first element in the array that satisfies the provided testing function",
      "Returns the first element in the array that satisfies the provided testing function",
      "Finds the index of the last element that satisfies the provided testing function",
      "Returns the index of the element in the array",
    ],
    correctAnswer:
      "Returns the index of the first element in the array that satisfies the provided testing function",
    explanation:
      "Array.prototype.findIndex() returns the index of the first element in the array that meets the condition specified by the provided function.",
  },
  {
    question: "How do you add a new property to an object in JavaScript?",
    options: [
      "object.newProp = value",
      "object.addProperty('newProp', value)",
      "Object.addProperty(object, 'newProp', value)",
      "object.set('newProp', value)",
    ],
    correctAnswer: "object.newProp = value",
    explanation:
      "You can add a new property to an object by using the syntax 'object.newProp = value'. This creates a new property 'newProp' with the specified value.",
  },
  {
    question: "What does Array.prototype.reduceRight() do in JavaScript?",
    options: [
      "Executes a reducer function on each element of the array, from right to left",
      "Executes a reducer function on each element of the array, from left to right",
      "Reduces the array to a single value from the rightmost element",
      "Flattens the array from the right",
    ],
    correctAnswer:
      "Executes a reducer function on each element of the array, from right to left",
    explanation:
      "Array.prototype.reduceRight() processes each element of the array from right to left, applying a reducer function to accumulate a single result.",
  },
  {
    question: "What is the result of console.log(typeof NaN) in JavaScript?",
    options: ["number", "NaN", "undefined", "object"],
    correctAnswer: "number",
    explanation:
      "The typeof NaN returns 'number' because NaN (Not-a-Number) is considered a number type in JavaScript.",
  },
  {
    question:
      "How do you remove whitespace from both ends of a string in JavaScript?",
    options: ["trim()", "strip()", "cut()", "remove()"],
    correctAnswer: "trim()",
    explanation:
      "The trim() method removes whitespace from both ends of a string.",
  },
  {
    question: "What does the delete operator do in JavaScript?",
    options: [
      "Deletes a property from an object",
      "Deletes an element from an array",
      "Deletes a variable from the scope",
      "Deletes a function",
    ],
    correctAnswer: "Deletes a property from an object",
    explanation:
      "The delete operator is used to remove a property from an object. It does not affect array elements or variables.",
  },
  {
    question:
      "What is the output of console.log([1, 2] + [3, 4]) in JavaScript?",
    options: ["'1,23,4'", "[1, 2, 3, 4]", "[1, 2]", "'1,2,3,4'"],
    correctAnswer: "'1,23,4'",
    explanation:
      "When adding arrays, JavaScript converts them to strings and concatenates them. Therefore, '[1, 2] + [3, 4]' results in '1,23,4'.",
  },
  {
    question: "How do you create an empty array in JavaScript?",
    options: ["[]", "new Array()", "Array()", "All of the above"],
    correctAnswer: "All of the above",
    explanation:
      "You can create an empty array using '[]', 'new Array()', or 'Array()'. All methods result in an empty array.",
  },
  {
    question: "What does Array.prototype.some() do in JavaScript?",
    options: [
      "Tests whether at least one element in the array passes the test implemented by the provided function",
      "Checks if all elements in the array pass the test implemented by the provided function",
      "Returns a new array with elements that pass the test",
      "Finds the index of the first element that satisfies the provided testing function",
    ],
    correctAnswer:
      "Tests whether at least one element in the array passes the test implemented by the provided function",
    explanation:
      "Array.prototype.some() tests if at least one element in the array passes the condition specified by the provided function, returning true or false.",
  },
  {
    question: "What is the output of console.log('5' * 2) in JavaScript?",
    options: ["10", "'10'", "NaN", "undefined"],
    correctAnswer: "10",
    explanation:
      "In JavaScript, multiplying a string that represents a number by another number converts the string to a number and performs the multiplication. Thus, '5' * 2 results in 10.",
  },
  {
    question: "How do you create a Set in JavaScript?",
    options: ["new Set()", "Set.create()", "Set.new()", "new SetObject()"],
    correctAnswer: "new Set()",
    explanation:
      "Sets in JavaScript are created using the 'new Set()' constructor, which creates a collection of unique values.",
  },
  {
    question: "What does Object.prototype.hasOwnProperty() do in JavaScript?",
    options: [
      "Checks if an object has a specific property as its own (not inherited)",
      "Checks if a property exists in the prototype chain of an object",
      "Returns all properties of an object",
      "Deletes a property from an object",
    ],
    correctAnswer:
      "Checks if an object has a specific property as its own (not inherited)",
    explanation:
      "Object.prototype.hasOwnProperty() checks whether an object has a specified property as its own property, not inherited from its prototype chain.",
  },
  {
    question: "What is the output of console.log(null + 1) in JavaScript?",
    options: ["1", "'null1'", "NaN", "undefined"],
    correctAnswer: "1",
    explanation:
      "In JavaScript, adding null to a number results in the number itself, as null is converted to 0 in this context. Therefore, null + 1 results in 1.",
  },
  {
    question: "How do you create a WeakMap in JavaScript?",
    options: [
      "new WeakMap()",
      "WeakMap.create()",
      "WeakMap.new()",
      "new Map()",
    ],
    correctAnswer: "new WeakMap()",
    explanation:
      "WeakMap is created using the 'new WeakMap()' constructor. It holds weak references to objects and allows the garbage collection of objects when no other references exist.",
  },
  {
    question: "What does Array.prototype.concat() do in JavaScript?",
    options: [
      "Merges two or more arrays and returns a new array",
      "Finds the index of a value in an array",
      "Removes an element from an array",
      "Creates a new array with elements that satisfy the provided testing function",
    ],
    correctAnswer: "Merges two or more arrays and returns a new array",
    explanation:
      "Array.prototype.concat() combines two or more arrays into a new array, without modifying the original arrays.",
  },
  {
    question: "What is the output of console.log(0 == false) in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, '0' is considered equal to 'false' when using loose equality (==), so 0 == false evaluates to true.",
  },
  {
    question: "How do you handle errors in JavaScript?",
    options: [
      "Using try...catch",
      "Using throw",
      "Using finally",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "In JavaScript, you can handle errors using try...catch to catch exceptions, throw to create exceptions, and finally to execute code regardless of whether an error occurred.",
  },
  {
    question: "What is the output of console.log('2' + 2) in JavaScript?",
    options: ["'22'", "4", "'4'", "undefined"],
    correctAnswer: "'22'",
    explanation:
      "When adding a string and a number, JavaScript converts the number to a string and concatenates it with the other string. Thus, '2' + 2 results in '22'.",
  },
  {
    question: "How do you check if a value is an array in JavaScript?",
    options: [
      "Array.isArray()",
      "typeof",
      "instanceof Array",
      "Both a) and c)",
    ],
    correctAnswer: "Both a) and c)",
    explanation:
      "You can check if a value is an array using either 'Array.isArray()' or 'value instanceof Array'. Both methods are valid for identifying arrays.",
  },
];
