export const test8 = [
  {
    question: "What does Array.prototype.concat() do in JavaScript?",
    options: [
      "Merges two or more arrays and returns a new array",
      "Creates a new array with elements of the original array",
      "Finds the first element that matches a given value",
      "Filters elements based on a condition",
    ],
    correctAnswer: "Merges two or more arrays and returns a new array",
    explanation:
      "The `concat()` method is used to merge two or more arrays into a new array. It does not modify the original arrays but returns a new array with the combined elements.",
  },
  {
    question:
      "How do you create a new WeakSet in JavaScript with initial values?",
    options: [
      "new WeakSet(iterable)",
      "WeakSet.create(iterable)",
      "WeakSet.new(iterable)",
      "WeakSet(iterable)",
    ],
    correctAnswer: "new WeakSet(iterable)",
    explanation:
      "A `WeakSet` can be created with initial values by passing an iterable to the `new WeakSet()` constructor. This initializes the `WeakSet` with the objects provided in the iterable.",
  },
  {
    question: "What is the purpose of Object.setPrototypeOf() in JavaScript?",
    options: [
      "Sets the prototype of an object",
      "Creates a new prototype for an object",
      "Gets the prototype of an object",
      "Deletes the prototype of an object",
    ],
    correctAnswer: "Sets the prototype of an object",
    explanation:
      "The `Object.setPrototypeOf()` method sets the prototype (i.e., the internal `[[Prototype]]` property) of a specified object to another object or `null`.",
  },
  {
    question:
      "How do you define a method in a JavaScript class that does not belong to the prototype?",
    options: [
      "Using static keyword",
      "Using prototype keyword",
      "Using class keyword",
      "Using function keyword",
    ],
    correctAnswer: "Using static keyword",
    explanation:
      "To define a method that does not belong to the class prototype but rather to the class itself, you use the `static` keyword. Static methods are called on the class itself, not on instances of the class.",
  },
  {
    question: "What is the output of console.log(!!null) in JavaScript?",
    options: ["false", "true", "undefined", "NaN"],
    correctAnswer: "false",
    explanation:
      "The `!!` operator is used to convert a value to a boolean. Since `null` is falsy, `!!null` evaluates to `false`.",
  },
  {
    question:
      "How do you create a new instance of an object using a constructor function in JavaScript?",
    options: [
      "new ConstructorFunction()",
      "ConstructorFunction.create()",
      "ConstructorFunction.new()",
      "ConstructorFunction()",
    ],
    correctAnswer: "new ConstructorFunction()",
    explanation:
      "To create a new instance of an object using a constructor function, you use the `new` keyword followed by the constructor function name, like `new ConstructorFunction()`.",
  },
  {
    question: "What does Object.keys() return in JavaScript?",
    options: [
      "An array of the object's own enumerable property names",
      "An array of all property names of the object",
      "An array of all property values of the object",
      "An array of method names of the object",
    ],
    correctAnswer: "An array of the object's own enumerable property names",
    explanation:
      "The `Object.keys()` method returns an array of a given object's own enumerable property names (keys).",
  },
  {
    question:
      "How do you create an array with a specified length in JavaScript?",
    options: [
      "new Array(length)",
      "Array.of(length)",
      "Array.create(length)",
      "Array(length)",
    ],
    correctAnswer: "new Array(length)",
    explanation:
      "To create an array with a specified length in JavaScript, you use the `new Array(length)` syntax, where `length` is the desired length of the array.",
  },
  {
    question: "What is the output of console.log('2' - 1) in JavaScript?",
    options: ["1", "'1'", "NaN", "undefined"],
    correctAnswer: "1",
    explanation:
      "In JavaScript, the `-` operator converts the string `'2'` to a number and performs the subtraction. Therefore, `'2' - 1` results in `1`.",
  },
  {
    question:
      "How do you retrieve all the values of a Map object in JavaScript?",
    options: [
      "map.values()",
      "map.getValues()",
      "map.allValues()",
      "map.entries()",
    ],
    correctAnswer: "map.values()",
    explanation:
      "To retrieve all values from a `Map` object, you use the `values()` method. This returns an iterator of the values in the map.",
  },
  {
    question: "What does the String.prototype.trim() method do in JavaScript?",
    options: [
      "Removes whitespace from both ends of a string",
      "Removes whitespace from the beginning of a string",
      "Removes whitespace from the end of a string",
      "Trims the length of a string",
    ],
    correctAnswer: "Removes whitespace from both ends of a string",
    explanation:
      "The `String.prototype.trim()` method removes whitespace from both ends of a string and returns the new trimmed string.",
  },
  {
    question:
      "How do you define a method that can be called on a JavaScript class instance?",
    options: [
      "By defining it directly within the class body",
      "By defining it inside the constructor",
      "By defining it as a static method",
      "By defining it as a prototype method",
    ],
    correctAnswer: "By defining it directly within the class body",
    explanation:
      "In JavaScript classes, methods defined directly within the class body are available on instances of the class. These methods are not static and belong to the class prototype.",
  },
  {
    question: "What is the output of console.log('5' + 1) in JavaScript?",
    options: ["'51'", "6", "NaN", "undefined"],
    correctAnswer: "'51'",
    explanation:
      "In JavaScript, when you use the `+` operator with a string and a number, the number is converted to a string and concatenated. Thus, `'5' + 1` results in the string `'51'`.",
  },
  {
    question:
      "How do you check if a value is an instance of an array in JavaScript?",
    options: [
      "Array.isArray(value)",
      "value instanceof Array",
      "Array.isArrayOf(value)",
      "value.isArray()",
    ],
    correctAnswer: "Array.isArray(value)",
    explanation:
      "To check if a value is an array in JavaScript, you use `Array.isArray(value)`, which returns `true` if the value is an array and `false` otherwise.",
  },
  {
    question: "What does Array.prototype.flat() do in JavaScript?",
    options: [
      "Flattens nested arrays into a single array",
      "Creates a new array with elements from the original array",
      "Finds the maximum element in the array",
      "Filters the array elements",
    ],
    correctAnswer: "Flattens nested arrays into a single array",
    explanation:
      "The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
  },
  {
    question: "How do you create a new Symbol in JavaScript?",
    options: ["Symbol()", "new Symbol()", "Symbol.create()", "Symbol.new()"],
    correctAnswer: "Symbol()",
    explanation:
      "A new `Symbol` is created using the `Symbol()` function. Symbols are unique and immutable primitive values.",
  },
  {
    question: "What is the output of console.log('' == 0) in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, the `==` operator performs type coercion. The empty string `''` is coerced to the number `0`, so `'' == 0` evaluates to `true`.",
  },
  {
    question:
      "How do you define a class method that can be shared among all instances in JavaScript?",
    options: [
      "By using the static keyword",
      "By defining it inside the constructor",
      "By defining it directly within the class body",
      "By defining it on the class prototype",
    ],
    correctAnswer: "By using the static keyword",
    explanation:
      "Static methods are defined using the `static` keyword and are shared among all instances of the class, but are not available on instances themselves.",
  },
  {
    question: "What is the output of console.log(typeof NaN) in JavaScript?",
    options: ["'number'", "'NaN'", "'undefined'", "'object'"],
    correctAnswer: "'number'",
    explanation:
      "In JavaScript, `NaN` is of type `'number'`. It represents a value that is not a number, but its type is still considered a number.",
  },
  {
    question:
      "How do you define a property that can only be read (not written) in a JavaScript class?",
    options: [
      "By using Object.defineProperty() with the 'get' descriptor",
      "By using the 'readonly' keyword",
      "By defining it as a static property",
      "By defining it with a 'const' keyword",
    ],
    correctAnswer: "By using Object.defineProperty() with the 'get' descriptor",
    explanation:
      "To create a read-only property in a class, you can use `Object.defineProperty()` with the `get` descriptor. This allows you to define a getter without a setter, making the property read-only.",
  },
];
