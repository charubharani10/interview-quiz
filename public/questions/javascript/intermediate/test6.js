export const test6 = [
  {
    question: "What is the purpose of the bind method in JavaScript?",
    options: [
      "Creates a new function that, when called, has its this keyword set to the provided value",
      "Binds two arrays together",
      "Creates a new object with a specified prototype",
      "Binds a string to a function",
    ],
    correctAnswer:
      "Creates a new function that, when called, has its this keyword set to the provided value",
    explanation:
      "The 'bind' method creates a new function with its 'this' context set to the specified value.",
  },
  {
    question: "What does the reduce method do in JavaScript?",
    options: [
      "Executes a reducer function on each element of the array, resulting in a single output value",
      "Filters elements from an array",
      "Maps each element of an array to a new value",
      "Splits an array into multiple arrays",
    ],
    correctAnswer:
      "Executes a reducer function on each element of the array, resulting in a single output value",
    explanation:
      "The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It accumulates the results across the array.",
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A function that retains access to its lexical scope even when the function is executed outside its scope",
      "A way to close a file or network connection",
      "A method to hide object properties",
      "A function that calls itself",
    ],
    correctAnswer:
      "A function that retains access to its lexical scope even when the function is executed outside its scope",
    explanation:
      "A closure is a function that retains access to its lexical scope, even after the outer function has completed execution. This allows inner functions to use variables declared in the outer scope.",
  },
  {
    question:
      "How do you check if an object is an instance of a particular class in JavaScript?",
    options: ["instanceof", "typeof", "isInstanceOf", "isPrototypeOf"],
    correctAnswer: "instanceof",
    explanation:
      "The instanceof operator checks if an object is an instance of a specific class or constructor.",
  },
  {
    question: "What is the result of console.log([2] == [2]) in JavaScript?",
    options: ["false", "true", "undefined", "NaN"],
    correctAnswer: "false",
    explanation:
      "In JavaScript, two arrays are compared by reference, not by value. Therefore, [2] == [2] returns false because they are different objects in memory.",
  },
  {
    question: "What is the arguments object in JavaScript?",
    options: [
      "An array-like object that represents the arguments passed to a function",
      "An object used to handle function arguments",
      "A method to list all arguments passed to a function",
      "A built-in object used to store function parameters",
    ],
    correctAnswer:
      "An array-like object that represents the arguments passed to a function",
    explanation:
      "The arguments object is an array-like object accessible inside functions that contains the values of the arguments passed to that function.",
  },
  {
    question: "How can you define a class in JavaScript?",
    options: [
      "class MyClass { constructor() {} }",
      "function MyClass() { this.prop = ''; }",
      "const MyClass = function() { this.prop = ''; };",
      "var MyClass = new Class() { constructor() {} };",
    ],
    correctAnswer: "class MyClass { constructor() {} }",
    explanation:
      "ES6 introduced the class syntax in JavaScript, allowing you to define a class with a constructor method and other methods within it.",
  },
  {
    question: "What does Object.freeze() do in JavaScript?",
    options: [
      "Prevents modifications to an object",
      "Creates a new object with frozen properties",
      "Deletes an object",
      "Converts an object into a string",
    ],
    correctAnswer: "Prevents modifications to an object",
    explanation:
      "Object.freeze() makes an object immutable, preventing any changes to its properties or values.",
  },
  {
    question: "How do you create a new Promise in JavaScript?",
    options: [
      "new Promise((resolve, reject) => { })",
      "Promise.create()",
      "new Deferred()",
      "new AsyncPromise()",
    ],
    correctAnswer: "new Promise((resolve, reject) => { })",
    explanation:
      "A Promise in JavaScript is created using the Promise constructor with a function containing two parameters: resolve and reject, which are used to handle success and failure cases.",
  },
  {
    question:
      "What is the output of console.log([1, 2, 3].concat([4, 5])) in JavaScript?",
    options: ["[1, 2, 3, 4, 5]", "[1, 2, 3, [4, 5]]", "[1, 2, 3]", "NaN"],
    correctAnswer: "[1, 2, 3, 4, 5]",
    explanation:
      "The concat() method is used to merge two or more arrays. It returns a new array and does not modify the existing arrays.",
  },
  {
    question:
      "How do you get the number of elements in an array in JavaScript?",
    options: ["array.length", "array.size", "array.count", "array.length()"],
    correctAnswer: "array.length",
    explanation:
      "In JavaScript, the length property of an array is used to get the number of elements in that array.",
  },
  {
    question: "What does String.prototype.trim() do in JavaScript?",
    options: [
      "Removes whitespace from both ends of a string",
      "Removes whitespace from the beginning of a string",
      "Removes whitespace from the end of a string",
      "Trims the string to a specific length",
    ],
    correctAnswer: "Removes whitespace from both ends of a string",
    explanation:
      "The trim() method removes whitespace from both ends of a string, without modifying the original string.",
  },
  {
    question: "How do you create a shallow copy of an object in JavaScript?",
    options: [
      "Object.assign({}, obj)",
      "obj.copy()",
      "Object.clone(obj)",
      "new Object(obj)",
    ],
    correctAnswer: "Object.assign({}, obj)",
    explanation:
      "Object.assign() can be used to create a shallow copy of an object by copying its properties to a new object.",
  },
  {
    question: "What is the result of console.log('2' - 1) in JavaScript?",
    options: ["1", "'1'", "NaN", "undefined"],
    correctAnswer: "1",
    explanation:
      "JavaScript automatically converts the string '2' to a number when using the subtraction operator, resulting in 1.",
  },
  {
    question:
      "How do you check if a property exists in an object in JavaScript?",
    options: [
      "in operator",
      "hasOwnProperty()",
      "Object.hasProperty()",
      "Both a) and b)",
    ],
    correctAnswer: "Both a) and b)",
    explanation:
      "You can use both the 'in' operator and the hasOwnProperty() method to check if a property exists in an object.",
  },
  {
    question: "What is the output of console.log(typeof NaN) in JavaScript?",
    options: ["number", "NaN", "undefined", "object"],
    correctAnswer: "number",
    explanation:
      "In JavaScript, NaN (Not-a-Number) is considered a number type.",
  },
  {
    question:
      "How do you remove a specific element from an array in JavaScript?",
    options: ["splice()", "remove()", "filter()", "delete()"],
    correctAnswer: "splice()",
    explanation:
      "The splice() method can be used to remove specific elements from an array by specifying the index and number of elements to remove.",
  },
  {
    question: "What does the Object.keys() method return in JavaScript?",
    options: [
      "An array of a given object's own enumerable property names",
      "A list of all enumerable properties of an object",
      "An array of all properties including non-enumerable ones",
      "An array of values of an object",
    ],
    correctAnswer: "An array of a given object's own enumerable property names",
    explanation:
      "Object.keys() returns an array of the object's own enumerable properties (property names).",
  },
  {
    question: "How do you access the prototype of a function in JavaScript?",
    options: [
      "Function.prototype",
      "function.__proto__",
      "Object.getPrototypeOf(function)",
      "function.prototype",
    ],
    correctAnswer: "function.prototype",
    explanation:
      "The prototype property allows you to add methods and properties to all instances of an object type.",
  },
  {
    question: "What is the output of console.log(1 + '1') in JavaScript?",
    options: ["'11'", "2", "NaN", "undefined"],
    correctAnswer: "'11'",
    explanation:
      "JavaScript performs string concatenation when using the + operator with a number and a string, resulting in '11'.",
  },
];
