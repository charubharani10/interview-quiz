export const test3 = [
  {
    questions: [
      {
        question: "What does Array.prototype.concat() do in JavaScript?",
        options: [
          "Merges two or more arrays and returns a new array",
          "Sorts the elements of an array",
          "Flattens an array",
          "Creates a new array with elements from a subset of the original array",
        ],
        correctAnswer: "Merges two or more arrays and returns a new array",
        explanation:
          "The concat() method combines two or more arrays and returns a new array. The original arrays are not modified.",
      },
      {
        question: "What is the purpose of the with statement in JavaScript?",
        options: [
          "To extend the scope chain to include a specified object",
          "To define new variables",
          "To iterate over properties of an object",
          "To handle exceptions",
        ],
        correctAnswer:
          "To extend the scope chain to include a specified object",
        explanation:
          "The with statement extends the scope chain to include the specified object, allowing you to access its properties without needing to qualify them with the object name.",
      },
      {
        question: "How do you make a method in a JavaScript class private?",
        options: [
          "By prefixing the method name with #",
          "By using the private keyword",
          "By using Object.defineProperty()",
          "By using a closure",
        ],
        correctAnswer: "By prefixing the method name with #",
        explanation:
          "In JavaScript, private methods in a class are defined by prefixing the method name with #. This syntax ensures that the method is only accessible within the class.",
      },
      {
        question: "What does Object.keys() return in JavaScript?",
        options: [
          "An array of a given object's own enumerable property names",
          "An array of values of an object",
          "An array of all inherited properties",
          "An array of method names",
        ],
        correctAnswer:
          "An array of a given object's own enumerable property names",
        explanation:
          "The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order as a normal loop.",
      },
      {
        question:
          "How do you make a function in JavaScript execute after a delay?",
        options: [
          "Using setTimeout()",
          "Using setInterval()",
          "Using requestAnimationFrame()",
          "Using Promise.delay()",
        ],
        correctAnswer: "Using setTimeout()",
        explanation:
          "The setTimeout() function schedules a function to be executed after a specified delay in milliseconds.",
      },
      {
        question:
          "What is the output of console.log(0.1 + 0.2 === 0.3) in JavaScript?",
        options: ["false", "true", "undefined", "NaN"],
        correctAnswer: "false",
        explanation:
          "Due to floating-point precision issues, 0.1 + 0.2 does not exactly equal 0.3. Therefore, the comparison 0.1 + 0.2 === 0.3 returns false.",
      },
      {
        question:
          "How do you check if a variable is of type function in JavaScript?",
        options: [
          "typeof variable === 'function'",
          "variable instanceof Function",
          "variable.isFunction()",
          "variable.constructor === Function",
        ],
        correctAnswer: "typeof variable === 'function'",
        explanation:
          "You can check if a variable is a function by using the typeof operator and comparing it to the string 'function'.",
      },
      {
        question: "What is the output of console.log([] + {}) in JavaScript?",
        options: ["'[object Object]'", "undefined", "'{}'", "NaN"],
        correctAnswer: "'[object Object]'",
        explanation:
          "When you add an array to an object, JavaScript first converts both to strings. The empty array converts to an empty string, and the empty object converts to '[object Object]'. Thus, the result is '[object Object]'.",
      },
      {
        question:
          "How do you create a new instance of a built-in JavaScript object?",
        options: [
          "new Object()",
          "Object.create()",
          "Object.new()",
          "Object()",
        ],
        correctAnswer: "new Object()",
        explanation:
          "To create a new instance of a built-in JavaScript object, you use the new keyword followed by the object constructor, such as new Object().",
      },
      {
        question: "What does Array.prototype.every() do in JavaScript?",
        options: [
          "Tests whether all elements in the array pass the test implemented by the provided function",
          "Tests whether at least one element in the array passes the test",
          "Creates a new array with all elements that pass the test",
          "Finds the first element that passes the test",
        ],
        correctAnswer:
          "Tests whether all elements in the array pass the test implemented by the provided function",
        explanation:
          "The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns true if all elements pass the test, otherwise false.",
      },
      {
        question: "How do you remove a property from an object in JavaScript?",
        options: [
          "Using the delete operator",
          "Using Object.removeProperty()",
          "Using Object.delete()",
          "Using Object.unset()",
        ],
        correctAnswer: "Using the delete operator",
        explanation:
          "The delete operator removes a property from an object. It will return true if the property was successfully removed, or false otherwise.",
      },
      {
        question: "What is the purpose of the this keyword in JavaScript?",
        options: [
          "Refers to the object from which the function was called",
          "Defines a new variable",
          "Creates a new object",
          "Returns the value of the current function",
        ],
        correctAnswer:
          "Refers to the object from which the function was called",
        explanation:
          "In JavaScript, the this keyword refers to the object from which the function was called. Its value depends on how the function is called.",
      },
      {
        question: "How do you handle exceptions in JavaScript?",
        options: [
          "Using try...catch statements",
          "Using if...else statements",
          "Using Promise.catch()",
          "Using throw",
        ],
        correctAnswer: "Using try...catch statements",
        explanation:
          "Exceptions in JavaScript are handled using try...catch statements. The try block contains code that might throw an error, and the catch block handles any errors that are thrown.",
      },
      {
        question: "What does Array.prototype.sort() do in JavaScript?",
        options: [
          "Sorts the elements of an array in place and returns the array",
          "Creates a new array sorted in ascending order",
          "Finds the smallest element in the array",
          "Filters the array elements",
        ],
        correctAnswer:
          "Sorts the elements of an array in place and returns the array",
        explanation:
          "The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending according to string Unicode code points.",
      },
      {
        question:
          "How do you check if an object is an instance of a class in JavaScript?",
        options: [
          "object instanceof Class",
          "Class.isPrototypeOf(object)",
          "object.isInstanceOf(Class)",
          "object.constructor === Class",
        ],
        correctAnswer: "object instanceof Class",
        explanation:
          "You can check if an object is an instance of a class using the instanceof operator. It tests if the prototype property of a constructor appears in the prototype chain of an object.",
      },
      {
        question: "What is the purpose of the for...of loop in JavaScript?",
        options: [
          "Iterates over iterable objects like arrays, strings, and maps",
          "Iterates over object properties",
          "Iterates over function arguments",
          "Iterates over numbers",
        ],
        correctAnswer:
          "Iterates over iterable objects like arrays, strings, and maps",
        explanation:
          "The for...of loop iterates over iterable objects such as arrays, strings, and maps, allowing you to access each element in turn.",
      },
      {
        question: "How do you define a setter in a JavaScript class?",
        options: [
          "set propertyName(value) { }",
          "function set propertyName(value) { }",
          "propertyName: function(value) { }",
          "set: propertyName(value) { }",
        ],
        correctAnswer: "set propertyName(value) { }",
        explanation:
          "A setter in a JavaScript class is defined using the set keyword followed by the property name and a method to set its value. This allows you to define custom behavior when assigning values to properties.",
      },
      {
        question: "What does Object.getPrototypeOf() return in JavaScript?",
        options: [
          "The prototype of the specified object",
          "The constructor of the specified object",
          "The prototype chain of the specified object",
          "The property names of the specified object",
        ],
        correctAnswer: "The prototype of the specified object",
        explanation:
          "The Object.getPrototypeOf() method returns the prototype (i.e., the internal [[Prototype]] property) of the specified object.",
      },
      {
        question: "How do you define a getter in a JavaScript class?",
        options: [
          "get propertyName() { }",
          "function get propertyName() { }",
          "propertyName: function() { }",
          "get: propertyName() { }",
        ],
        correctAnswer: "get propertyName() { }",
        explanation:
          "A getter in a JavaScript class is defined using the get keyword followed by the property name and a method to get its value. This allows you to define custom behavior when accessing properties.",
      },
    ],
  },
  {
    question: "What is the output of console.log('2' - 1) in JavaScript?",
    options: ["1", "'1'", "NaN", "undefined"],
    correctAnswer: "1",
    explanation:
      "In JavaScript, the '-' operator converts the string '2' to a number before performing the subtraction, resulting in 1.",
  },
  {
    question: "How do you create an iterator in JavaScript?",
    options: [
      "By defining an object with a next method that returns { value, done }",
      "By using Array.prototype.forEach()",
      "By using a for loop",
      "By using Array.prototype.map()",
    ],
    correctAnswer:
      "By defining an object with a next method that returns { value, done }",
    explanation:
      "An iterator in JavaScript is created by defining an object with a `next` method that returns an object with `value` and `done` properties.",
  },
  {
    question: "What does Object.values() return in JavaScript?",
    options: [
      "An array of a given object's own enumerable property values",
      "An array of property names of an object",
      "An array of all inherited properties",
      "An array of method names",
    ],
    correctAnswer:
      "An array of a given object's own enumerable property values",
    explanation:
      "Object.values() returns an array containing the values of all enumerable properties of the object.",
  },
  {
    question: "How do you define a class in JavaScript?",
    options: [
      "class MyClass { constructor() { } }",
      "class MyClass extends BaseClass { constructor() { } }",
      "function MyClass() { }",
      "var MyClass = class { constructor() { } }",
    ],
    correctAnswer: "class MyClass { constructor() { } }",
    explanation:
      "In JavaScript, you define a class using the `class` keyword followed by the class name and a constructor method.",
  },
  {
    question: "What is the output of console.log([] == false) in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, `[]` is coerced to a string which is an empty string, and `false` is also coerced to an empty string, making them equal.",
  },
  {
    question:
      "How do you create a new object with a specific prototype in JavaScript?",
    options: [
      "Object.create(prototype)",
      "new Object(prototype)",
      "Object.new(prototype)",
      "Object.setPrototypeOf(object, prototype)",
    ],
    correctAnswer: "Object.create(prototype)",
    explanation:
      "Object.create() creates a new object with the specified prototype object.",
  },
  {
    question: "What is the output of console.log(1 == '1') in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, `==` performs type coercion, converting the string '1' to a number before comparing, which results in true.",
  },
  {
    question: "How do you handle asynchronous code in JavaScript?",
    options: [
      "Using Promises and async/await",
      "Using callbacks",
      "Using setTimeout()",
      "Both and b)",
    ],
    correctAnswer: "Both and b)",
    explanation:
      "Asynchronous code in JavaScript can be handled using Promises and async/await, or callbacks.",
  },
  {
    question: "What is the purpose of the Reflect object in JavaScript?",
    options: [
      "Provides methods for intercepting and manipulating object operations",
      "Provides methods for iterating over objects",
      "Provides methods for handling promises",
      "Provides methods for creating objects",
    ],
    correctAnswer:
      "Provides methods for intercepting and manipulating object operations",
    explanation:
      "The Reflect object provides methods for intercepting and manipulating object operations, such as property access and modification.",
  },
  {
    question: "What does Array.prototype.map() do in JavaScript?",
    options: [
      "Creates a new array with the results of calling a provided function on every element in the calling array",
      "Creates a new array with elements from the original array",
      "Flattens the array",
      "Reverses the array",
    ],
    correctAnswer:
      "Creates a new array with the results of calling a provided function on every element in the calling array",
    explanation:
      "Array.prototype.map() creates a new array with the results of calling a provided function on every element of the original array.",
  },
  {
    question: "How do you add an event listener to an element in JavaScript?",
    options: [
      "element.addEventListener(event, handler)",
      "element.on(event, handler)",
      "element.attachEvent(event, handler)",
      "element.addEvent(event, handler)",
    ],
    correctAnswer: "element.addEventListener(event, handler)",
    explanation:
      "To add an event listener to an element, you use the `addEventListener` method.",
  },
  {
    question: "What is the output of console.log(typeof NaN) in JavaScript?",
    options: ["number", "NaN", "undefined", "object"],
    correctAnswer: "number",
    explanation:
      "In JavaScript, NaN is considered of type number, despite representing a non-numeric value.",
  },
  {
    question: "How do you check if a variable is an array in JavaScript?",
    options: [
      "Array.isArray(variable)",
      "variable instanceof Array",
      "typeof variable === 'array'",
      "variable.constructor === Array",
    ],
    correctAnswer: "Array.isArray(variable)",
    explanation:
      "To check if a variable is an array, you use the `Array.isArray()` method.",
  },
  {
    question: "What does Object.entries() return in JavaScript?",
    options: [
      "An array of a given object's own enumerable string-keyed property [key, value] pairs",
      "An array of property names of an object",
      "An array of values of an object",
      "An array of methods of an object",
    ],
    correctAnswer:
      "An array of a given object's own enumerable string-keyed property [key, value] pairs",
    explanation:
      "Object.entries() returns an array of [key, value] pairs for the object's own enumerable properties.",
  },
  {
    question: "How do you create a WeakMap in JavaScript?",
    options: [
      "new WeakMap()",
      "WeakMap.create()",
      "WeakMap.new()",
      "WeakMap()",
    ],
    correctAnswer: "new WeakMap()",
    explanation: "A WeakMap is created using the `new WeakMap()` constructor.",
  },
  {
    question: "What is the output of console.log('5' + 1) in JavaScript?",
    options: ["'51'", "6", "'6'", "undefined"],
    correctAnswer: "'51'",
    explanation:
      "In JavaScript, the '+' operator performs string concatenation when one of the operands is a string, resulting in '51'.",
  },
  {
    question: "How do you define a default parameter in a JavaScript function?",
    options: [
      "function myFunction(param = defaultValue) { }",
      "function myFunction(param : defaultValue) { }",
      "function myFunction(param) { param = param || defaultValue; }",
      "function myFunction(param) { param.default = defaultValue; }",
    ],
    correctAnswer: "function myFunction(param = defaultValue) { }",
    explanation:
      "Default parameters are defined by assigning a default value to the parameter in the function signature.",
  },
  {
    question: "What does Array.prototype.reduce() do in JavaScript?",
    options: [
      "Executes a reducer function on each element of the array, resulting in a single output value",
      "Creates a new array with all elements that pass the test",
      "Finds the first element that passes the test",
      "Sorts the array elements",
    ],
    correctAnswer:
      "Executes a reducer function on each element of the array, resulting in a single output value",
    explanation:
      "Array.prototype.reduce() executes a reducer function on each element of the array, accumulating a single result.",
  },
  {
    question:
      "What is the purpose of the constructor method in a JavaScript class?",
    options: [
      "Initializes a new object instance",
      "Defines a new method",
      "Creates a new class",
      "Deletes an existing class",
    ],
    correctAnswer: "Initializes a new object instance",
    explanation:
      "The constructor method is used to initialize a new object instance when a class is instantiated.",
  },
];
