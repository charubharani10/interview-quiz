export const test7 = [
  {
    question: "What is the output of console.log([1] == [1]) in JavaScript?",
    options: ["false", "true", "undefined", "NaN"],
    correctAnswer: "false",
    explanation:
      "In JavaScript, arrays are reference types. When comparing two arrays, it checks if they refer to the same object. Since [1] and [1] are different instances, they are not equal.",
  },
  {
    question: "How do you define a method in a JavaScript object literal?",
    options: [
      "methodName() { }",
      "methodName: function() { }",
      "methodName: () => { }",
      "function methodName() { }",
    ],
    correctAnswer: "methodName() { }",
    explanation:
      "In an object literal, methods are defined using the shorthand syntax methodName() { } rather than methodName: function() { }.",
  },
  {
    question: "What does Array.prototype.reduceRight() do in JavaScript?",
    options: [
      "Applies a function against an accumulator and each element from right to left",
      "Applies a function against an accumulator and each element from left to right",
      "Filters the array elements from right to left",
      "Finds the maximum value in the array",
    ],
    correctAnswer:
      "Applies a function against an accumulator and each element from right to left",
    explanation:
      "Array.prototype.reduceRight() processes the elements of the array from right to left, applying a function to accumulate a result.",
  },
  {
    question: "How do you create a new WeakMap in JavaScript?",
    options: [
      "new WeakMap()",
      "WeakMap.create()",
      "WeakMap.new()",
      "WeakMap()",
    ],
    correctAnswer: "new WeakMap()",
    explanation: "To create a new WeakMap, use the constructor new WeakMap().",
  },
  {
    question:
      "What does the Object.getPrototypeOf() method return in JavaScript?",
    options: [
      "The prototype of the specified object",
      "The constructor of the specified object",
      "The prototype chain of the specified object",
      "The property names of the specified object",
    ],
    correctAnswer: "The prototype of the specified object",
    explanation:
      "Object.getPrototypeOf() returns the prototype of the specified object.",
  },
  {
    question: "How do you define a private field in a JavaScript class?",
    options: [
      "By prefixing the field name with #",
      "By prefixing the field name with _",
      "By defining the field in the constructor",
      "By using a closure",
    ],
    correctAnswer: "By prefixing the field name with #",
    explanation:
      "Private fields in JavaScript classes are defined by prefixing the field name with #.",
  },
  {
    question: "What is the output of console.log('1' - 1) in JavaScript?",
    options: ["0", "'0'", "NaN", "undefined"],
    correctAnswer: "0",
    explanation:
      "In JavaScript, the - operator converts operands to numbers. '1' - 1 coerces '1' to a number, resulting in 0.",
  },
  {
    question: "How do you prevent modification of an object in JavaScript?",
    options: [
      "Object.preventExtensions(object)",
      "Object.freeze(object)",
      "Object.seal(object)",
      "Object.lock(object)",
    ],
    correctAnswer: "Object.freeze(object)",
    explanation:
      "Object.freeze() prevents modifications to an object by making it immutable.",
  },
  {
    question:
      "What does the Function.prototype.bind() method do in JavaScript?",
    options: [
      "Creates a new function that, when called, has its this keyword set to a specified value",
      "Binds a function to a specific object",
      "Creates a copy of a function with a specified context",
      "Binds a function to a new prototype",
    ],
    correctAnswer:
      "Creates a new function that, when called, has its this keyword set to a specified value",
    explanation:
      "Function.prototype.bind() creates a new function with its this keyword set to the specified value.",
  },
  {
    question:
      "How do you check if an object is an instance of a specific class in JavaScript?",
    options: [
      "object instanceof ClassName",
      "ClassName.isInstance(object)",
      "object.isInstanceOf(ClassName)",
      "ClassName.checkInstance(object)",
    ],
    correctAnswer: "object instanceof ClassName",
    explanation:
      "The instanceof operator checks if an object is an instance of a specific class.",
  },
  {
    question: "What does the Array.prototype.sort() method do in JavaScript?",
    options: [
      "Sorts the elements of an array in place and returns the array",
      "Creates a new array with sorted elements",
      "Finds the maximum element in the array",
      "Filters the array elements",
    ],
    correctAnswer:
      "Sorts the elements of an array in place and returns the array",
    explanation:
      "Array.prototype.sort() sorts the elements of the array in place and returns the sorted array.",
  },
  {
    question:
      "How do you retrieve the property descriptor of an object property in JavaScript?",
    options: [
      "Object.getOwnPropertyDescriptor(object, property)",
      "Object.getDescriptor(object, property)",
      "Object.getProperty(object, property)",
      "Object.get(object, property)",
    ],
    correctAnswer: "Object.getOwnPropertyDescriptor(object, property)",
    explanation:
      "Object.getOwnPropertyDescriptor() retrieves the descriptor for a specific property of an object.",
  },
  {
    question: "What does Array.prototype.some() do in JavaScript?",
    options: [
      "Tests whether at least one element in the array passes the provided function",
      "Tests whether all elements in the array pass the provided function",
      "Creates a new array with elements that pass the test",
      "Finds the index of the first element that passes the test",
    ],
    correctAnswer:
      "Tests whether at least one element in the array passes the provided function",
    explanation:
      "Array.prototype.some() checks if at least one element in the array passes the provided test function.",
  },
  {
    question:
      "How do you define a getter for a property in a JavaScript class?",
    options: [
      "get propertyName() { }",
      "propertyName: function() { }",
      "get(propertyName) { }",
      "function get propertyName() { }",
    ],
    correctAnswer: "get propertyName() { }",
    explanation:
      "In JavaScript classes, getters are defined using the get syntax followed by the property name and a function body.",
  },
  {
    question: "What is the output of console.log([] == ![]) in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, ![] evaluates to false. The comparison [] == false is true because [] coerces to false when compared with false.",
  },
  {
    question:
      "How do you define a method that can be used as a constructor in JavaScript?",
    options: [
      "By defining a function and using it with new",
      "By using the constructor method in a class",
      "By using the Function constructor",
      "By defining a function and assigning it to a variable",
    ],
    correctAnswer: "By defining a function and using it with new",
    explanation:
      "A function used as a constructor is defined normally and called with the new keyword to create instances.",
  },
  {
    question:
      "What does the String.prototype.repeat() method do in JavaScript?",
    options: [
      "Returns a new string with a specified number of copies of the original string",
      "Repeats a string a specified number of times",
      "Repeats a substring a specified number of times",
      "Creates a new string with repeated characters",
    ],
    correctAnswer:
      "Returns a new string with a specified number of copies of the original string",
    explanation:
      "String.prototype.repeat() creates a new string by repeating the original string a specified number of times.",
  },
  {
    question: "How do you create a generator function in JavaScript?",
    options: [
      "function* generatorFunction() { yield value; }",
      "function generatorFunction() { yield value; }",
      "function* generatorFunction() { return value; }",
      "function generatorFunction() { return value; }",
    ],
    correctAnswer: "function* generatorFunction() { yield value; }",
    explanation:
      "In JavaScript, a generator function is defined using the `function*` syntax and yields values with the `yield` keyword. This allows the function to pause and resume execution, providing a sequence of values.",
  },
  {
    question: "What is the output of console.log(1 + '1') in JavaScript?",
    options: ["'11'", "2", "NaN", "undefined"],
    correctAnswer: "'11'",
    explanation:
      "In JavaScript, when you use the `+` operator with a number and a string, the number is converted to a string and concatenated. Therefore, `1 + '1'` results in the string `'11'`.",
  },
  {
    question: "How do you create a new Map object in JavaScript?",
    options: ["new Map()", "Map.create()", "Map.new()", "Map()"],
    correctAnswer: "new Map()",
    explanation:
      "To create a new `Map` object in JavaScript, you use the `new Map()` constructor. This initializes an empty `Map` or can be passed an iterable of key-value pairs.",
  },
];
