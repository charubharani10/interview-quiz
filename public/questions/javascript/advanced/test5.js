export const test5 = [
  {
    question:
      "What does the Function.prototype.call() method do in JavaScript?",
    options: [
      "Calls a function with a given this value and arguments",
      "Creates a new function",
      "Calls a function with a fixed this value",
      "Sets the this value of a function",
    ],
    correctAnswer: "Calls a function with a given this value and arguments",
    explanation:
      "Function.prototype.call() allows you to call a function with a specified this value and arguments. It provides a way to invoke functions with dynamic context.",
  },
  {
    question: "How do you define an asynchronous function in JavaScript?",
    options: [
      "Using the async keyword before the function definition",
      "Using the await keyword before the function definition",
      "Using the Promise constructor",
      "Using the function keyword",
    ],
    correctAnswer: "Using the async keyword before the function definition",
    explanation:
      "Asynchronous functions in JavaScript are defined using the async keyword before the function definition. This allows the function to use the await keyword inside it to wait for Promises.",
  },
  {
    question: "What is the purpose of the Proxy object in JavaScript?",
    options: [
      "Allows you to create a handler for object operations",
      "Provides a way to perform operations on arrays",
      "Creates a new prototype for an object",
      "Modifies the constructor of an object",
    ],
    correctAnswer: "Allows you to create a handler for object operations",
    explanation:
      "The Proxy object allows you to create a handler for object operations. This means you can intercept and redefine fundamental operations for objects such as property access and assignment.",
  },
  {
    question:
      "How do you add a method to an existing object prototype in JavaScript?",
    options: [
      "Object.prototype.methodName = function() { }",
      "Object.methodName = function() { }",
      "Object.prototype.createMethod('methodName', function() { })",
      "Object.addMethod('methodName', function() { })",
    ],
    correctAnswer: "Object.prototype.methodName = function() { }",
    explanation:
      "To add a method to the prototype of an existing object, you can use Object.prototype.methodName = function() { }. This will add the method to all instances of that object.",
  },
  {
    question: "What does Object.getOwnPropertyNames() return in JavaScript?",
    options: [
      "An array of all properties (both enumerable and non-enumerable) found directly in a given object",
      "An array of enumerable properties of an object",
      "An array of property names including inherited properties",
      "An array of method names of an object",
    ],
    correctAnswer:
      "An array of all properties (both enumerable and non-enumerable) found directly in a given object",
    explanation:
      "Object.getOwnPropertyNames() returns an array of all properties found directly in the object, including both enumerable and non-enumerable properties.",
  },
  {
    question:
      "How do you convert a string to an array of characters in JavaScript?",
    options: [
      "string.split('')",
      "Array.from(string)",
      "string.toArray()",
      "Both a) and b)",
    ],
    correctAnswer: "Both a) and b)",
    explanation:
      "You can convert a string to an array of characters using either string.split('') or Array.from(string). Both methods will give you an array of the string's characters.",
  },
  {
    question: "What does Array.prototype.find() do in JavaScript?",
    options: [
      "Returns the first element that satisfies the provided testing function",
      "Finds the index of the first element that satisfies the provided testing function",
      "Creates a new array with elements that pass the test",
      "Sorts the array elements",
    ],
    correctAnswer:
      "Returns the first element that satisfies the provided testing function",
    explanation:
      "Array.prototype.find() returns the first element in the array that satisfies the provided testing function. If no elements satisfy the condition, it returns undefined.",
  },
  {
    question: "How do you create a new Set in JavaScript?",
    options: ["new Set()", "Set.create()", "Set.new()", "new Set([])"],
    correctAnswer: "new Set()",
    explanation:
      "To create a new Set in JavaScript, you use the new Set() syntax. This creates an empty Set object.",
  },
  {
    question: "What is the output of console.log([] + []) in JavaScript?",
    options: ["''", "[]", "undefined", "NaN"],
    correctAnswer: "''",
    explanation:
      "In JavaScript, adding two arrays with the + operator results in the empty string ''. Arrays are converted to strings before concatenation, and empty arrays become empty strings.",
  },
  {
    question: "How do you create a shallow copy of an array in JavaScript?",
    options: [
      "array.slice()",
      "Array.copy(array)",
      "Array.from(array)",
      "array.clone()",
    ],
    correctAnswer: "array.slice()",
    explanation:
      "To create a shallow copy of an array, you can use array.slice(). This method returns a new array that is a shallow copy of the original array.",
  },
  {
    question: "What does Array.prototype.every() do in JavaScript?",
    options: [
      "Tests whether all elements in the array pass the provided function",
      "Finds the first element that passes the provided function",
      "Creates a new array with elements that pass the test",
      "Sorts the array",
    ],
    correctAnswer:
      "Tests whether all elements in the array pass the provided function",
    explanation:
      "Array.prototype.every() tests whether all elements in the array pass the test implemented by the provided function. It returns true if all elements pass, otherwise false.",
  },
  {
    question: "How do you define a static method in a JavaScript class?",
    options: [
      "static methodName() { }",
      "methodName() { static }",
      "function static methodName() { }",
      "static function methodName() { }",
    ],
    correctAnswer: "static methodName() { }",
    explanation:
      "In JavaScript classes, a static method is defined using the static keyword before the method name. For example: static methodName() { } defines a static method.",
  },
  {
    question:
      "What does the Object.getOwnPropertyDescriptors() method do in JavaScript?",
    options: [
      "Returns all own property descriptors of an object",
      "Returns a single property descriptor",
      "Returns all property names of an object",
      "Returns all methods of an object",
    ],
    correctAnswer: "Returns all own property descriptors of an object",
    explanation:
      "Object.getOwnPropertyDescriptors() returns all own property descriptors of an object. This includes information about each property such as value, writable, enumerable, and configurable.",
  },
  {
    question: "How do you check if a value is NaN in JavaScript?",
    options: [
      "Number.isNaN(value)",
      "isNaN(value)",
      "value === NaN",
      "Both a) and b)",
    ],
    correctAnswer: "Both a) and b)",
    explanation:
      "To check if a value is NaN in JavaScript, you can use Number.isNaN(value) or isNaN(value). Both methods determine whether the value is NaN, but Number.isNaN() is more reliable.",
  },
  {
    question: "What is the output of console.log({} == {}) in JavaScript?",
    options: ["false", "true", "undefined", "NaN"],
    correctAnswer: "false",
    explanation:
      "In JavaScript, comparing two different object instances using == checks for reference equality. Since {} and {} are different instances, the result is false.",
  },
  {
    question: "How do you create a new WeakSet in JavaScript?",
    options: [
      "new WeakSet()",
      "WeakSet.create()",
      "WeakSet.new()",
      "WeakSet()",
    ],
    correctAnswer: "new WeakSet()",
    explanation:
      "To create a new WeakSet in JavaScript, use the new WeakSet() syntax. This creates an empty WeakSet object that can hold weakly referenced objects.",
  },
  {
    question: "What is the purpose of the Object.keys() method in JavaScript?",
    options: [
      "Returns an array of a given object's own enumerable property names",
      "Returns an array of all property names of an object",
      "Returns an array of property values of an object",
      "Returns an array of methods of an object",
    ],
    correctAnswer:
      "Returns an array of a given object's own enumerable property names",
    explanation:
      "The Object.keys() method returns an array of a given object's own enumerable property names. It does not include inherited properties or non-enumerable properties.",
  },
  {
    question:
      "How do you create an array from an iterable object in JavaScript?",
    options: [
      "Array.from(iterable)",
      "Array.create(iterable)",
      "Array.of(iterable)",
      "Array.fromIterable(iterable)",
    ],
    correctAnswer: "Array.from(iterable)",
    explanation:
      "To create an array from an iterable object, use Array.from(iterable). This method takes an iterable object and returns a new array containing its elements.",
  },
  {
    question:
      "What does the String.prototype.includes() method do in JavaScript?",
    options: [
      "Determines whether a string contains a specified substring",
      "Determines whether a string starts with a specified substring",
      "Determines whether a string ends with a specified substring",
      "Replaces a specified substring in a string",
    ],
    correctAnswer: "Determines whether a string contains a specified substring",
    explanation:
      "String.prototype.includes() determines whether a string contains a specified substring. It returns true if the substring is found, otherwise false.",
  },
  {
    question: "How do you merge two objects in JavaScript?",
    options: [
      "Object.assign(target, source)",
      "Object.merge(target, source)",
      "target.merge(source)",
      "Object.combine(target, source)",
    ],
    correctAnswer: "Object.assign(target, source)",
    explanation:
      "To merge two objects in JavaScript, use Object.assign(target, source). This method copies the properties from the source object to the target object.",
  },
];
