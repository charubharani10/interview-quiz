export const test6 = [
  {
    question: "How do you create a new Set with initial values in JavaScript?",
    options: [
      "new Set(iterable)",
      "Set.create(iterable)",
      "Set.new(iterable)",
      "Set(iterable)",
    ],
    correctAnswer: "new Set(iterable)",
    explanation:
      "To create a new Set with initial values, you use the constructor with an iterable, such as an array, passed as an argument.",
  },
  {
    question: "What is the output of console.log(1 + '1' - 1) in JavaScript?",
    options: ["10", "1", "'10'", "NaN"],
    correctAnswer: "10",
    explanation:
      "In JavaScript, the + operator performs string concatenation if one of the operands is a string. Here, 1 + '1' results in '11'. Subtracting 1 from '11' coerces '11' to a number, resulting in 10.",
  },
  {
    question: "How do you define an arrow function in JavaScript?",
    options: [
      "const func = () => { }",
      "function func() { }",
      "const func = function() { }",
      "const func = function() => { }",
    ],
    correctAnswer: "const func = () => { }",
    explanation:
      "Arrow functions are defined using the syntax const func = () => { }, where => denotes the arrow function syntax introduced in ES6.",
  },
  {
    question: "What does Object.values() return in JavaScript?",
    options: [
      "An array of the object's own enumerable property values",
      "An array of the object's own enumerable property names",
      "An array of all property values of the object",
      "An array of all methods of the object",
    ],
    correctAnswer: "An array of the object's own enumerable property values",
    explanation:
      "Object.values() returns an array containing the values of an object's enumerable properties.",
  },
  {
    question: "How do you check if a value is an integer in JavaScript?",
    options: [
      "Number.isInteger(value)",
      "Number.isInt(value)",
      "isInteger(value)",
      "value.isInteger()",
    ],
    correctAnswer: "Number.isInteger(value)",
    explanation:
      "The Number.isInteger() method determines whether the passed value is an integer.",
  },
  {
    question: "What is the output of console.log([2] == [2]) in JavaScript?",
    options: ["false", "true", "undefined", "NaN"],
    correctAnswer: "false",
    explanation:
      "Arrays in JavaScript are reference types. Comparing two different arrays with == checks if they refer to the same object, which they do not in this case.",
  },
  {
    question: "How do you add a property to an object in JavaScript?",
    options: [
      "object.property = value",
      "object.addProperty('property', value)",
      "Object.add(object, 'property', value)",
      "object.setProperty('property', value)",
    ],
    correctAnswer: "object.property = value",
    explanation:
      "You can add a property to an object by using dot notation: object.property = value.",
  },
  {
    question: "What does Array.prototype.flatMap() do in JavaScript?",
    options: [
      "Maps each element using a mapping function and flattens the result into a new array",
      "Maps each element using a mapping function",
      "Flattens the array into a single array",
      "Filters the array based on a condition",
    ],
    correctAnswer:
      "Maps each element using a mapping function and flattens the result into a new array",
    explanation:
      "Array.prototype.flatMap() first maps each element using a mapping function, then flattens the result into a new array.",
  },
  {
    question: "How do you check if an object is frozen in JavaScript?",
    options: [
      "Object.isFrozen(object)",
      "Object.checkFrozen(object)",
      "Object.isSealed(object)",
      "object.isFrozen()",
    ],
    correctAnswer: "Object.isFrozen(object)",
    explanation:
      "Object.isFrozen() checks if an object is frozen, meaning it cannot be modified.",
  },
  {
    question: "What does Object.defineProperty() do in JavaScript?",
    options: [
      "Defines a new property on an object or modifies an existing property",
      "Defines a new object",
      "Creates a property descriptor",
      "Adds a method to an object",
    ],
    correctAnswer:
      "Defines a new property on an object or modifies an existing property",
    explanation:
      "Object.defineProperty() is used to define a new property on an object or modify an existing property with specific descriptors.",
  },
  {
    question:
      "How do you create a new WeakMap with initial values in JavaScript?",
    options: [
      "new WeakMap(iterable)",
      "WeakMap.create(iterable)",
      "WeakMap.new(iterable)",
      "WeakMap(iterable)",
    ],
    correctAnswer: "new WeakMap(iterable)",
    explanation:
      "You create a new WeakMap with initial values by passing an iterable to the constructor: new WeakMap(iterable).",
  },
  {
    question:
      "What is the output of console.log(0.1 + 0.2 == 0.3) in JavaScript?",
    options: ["false", "true", "undefined", "NaN"],
    correctAnswer: "false",
    explanation:
      "Due to floating-point precision issues, 0.1 + 0.2 does not exactly equal 0.3, so the comparison returns false.",
  },
  {
    question:
      "How do you create a new Symbol with a description in JavaScript?",
    options: [
      "Symbol('description')",
      "new Symbol('description')",
      "Symbol.create('description')",
      "Symbol.new('description')",
    ],
    correctAnswer: "Symbol('description')",
    explanation:
      "Symbols are created using the Symbol() function with an optional description to help identify the symbol.",
  },
  {
    question: "What does Array.prototype.splice() do in JavaScript?",
    options: [
      "Adds or removes items from an array",
      "Sorts the elements of an array",
      "Finds the index of an element in an array",
      "Creates a new array with selected elements",
    ],
    correctAnswer: "Adds or removes items from an array",
    explanation:
      "Array.prototype.splice() can add or remove elements from an array at a specific index.",
  },
  {
    question:
      "How do you create a new instance of a WeakSet with initial values in JavaScript?",
    options: [
      "new WeakSet(iterable)",
      "WeakSet.create(iterable)",
      "WeakSet.new(iterable)",
      "WeakSet(iterable)",
    ],
    correctAnswer: "new WeakSet(iterable)",
    explanation:
      "To create a new WeakSet with initial values, you use the constructor with an iterable passed as an argument.",
  },
  {
    question:
      "What is the output of console.log([1] == [1] && [2] == [2]) in JavaScript?",
    options: ["false", "true", "undefined", "NaN"],
    correctAnswer: "false",
    explanation:
      "Since each array literal creates a new array object, comparing two different arrays using == will always return false, even if the arrays contain the same elements.",
  },
  {
    question:
      "How do you check if an object has a specific property in JavaScript?",
    options: [
      "object.hasOwnProperty(property)",
      "object.includes(property)",
      "object.contains(property)",
      "object.checkProperty(property)",
    ],
    correctAnswer: "object.hasOwnProperty(property)",
    explanation:
      "The hasOwnProperty() method checks if the object has the specified property as its own property.",
  },
  {
    question: "What does Array.prototype.copyWithin() do in JavaScript?",
    options: [
      "Copies a sequence of array elements within the array",
      "Creates a copy of the array",
      "Copies elements to a new array",
      "Finds the index of an element in the array",
    ],
    correctAnswer: "Copies a sequence of array elements within the array",
    explanation:
      "Array.prototype.copyWithin() copies a part of the array to another location in the same array.",
  },
  {
    question:
      "How do you retrieve the property descriptor of an object in JavaScript?",
    options: [
      "Object.getOwnPropertyDescriptor(object, property)",
      "Object.getDescriptor(object, property)",
      "Object.getProperty(object, property)",
      "Object.get(object, property)",
    ],
    correctAnswer: "Object.getOwnPropertyDescriptor(object, property)",
    explanation:
      "Object.getOwnPropertyDescriptor() returns a property descriptor for a specific property of an object.",
  },
  {
    question: "What does String.prototype.includes() do in JavaScript?",
    options: [
      "Checks if a string contains a specified substring",
      "Checks if a string starts with a specified substring",
      "Checks if a string ends with a specified substring",
      "Finds the index of a specified substring",
    ],
    correctAnswer: "Checks if a string contains a specified substring",
    explanation:
      "String.prototype.includes() determines if a string contains a certain substring and returns true or false.",
  },
];
