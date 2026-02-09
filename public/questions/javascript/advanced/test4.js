export const test4 = [
  {
    question: "How do you create a new promise in JavaScript?",
    options: [
      "new Promise((resolve, reject) => { })",
      "Promise.create((resolve, reject) => { })",
      "Promise.new((resolve, reject) => { })",
      "new Promise((resolve, reject) => { }, (resolve, reject) => { })",
    ],
    correctAnswer: "new Promise((resolve, reject) => { })",
    explanation:
      "A new Promise is created using the `new Promise()` constructor, which takes a function with `resolve` and `reject` parameters.",
  },
  {
    question: "What does the Symbol.iterator property do in JavaScript?",
    options: [
      "Defines the default iterator for an object",
      "Creates a new iterator",
      "Gets the iterator of an array",
      "Iterates over an object's properties",
    ],
    correctAnswer: "Defines the default iterator for an object",
    explanation:
      "The Symbol.iterator property is used to define the default iterator for an object. Objects that implement this property can be iterated using for...of loops.",
  },
  {
    question: "How do you perform deep cloning of an object in JavaScript?",
    options: [
      "Using JSON.parse(JSON.stringify(object))",
      "Using Object.assign({}, object)",
      "Using Object.create(object)",
      "Using Array.prototype.slice()",
    ],
    correctAnswer: "Using JSON.parse(JSON.stringify(object))",
    explanation:
      "Deep cloning an object can be done using JSON.parse(JSON.stringify(object)). This method serializes the object to a JSON string and then parses it back to a new object, creating a deep clone.",
  },
  {
    question: "What does the Reflect.apply() method do in JavaScript?",
    options: [
      "Applies a function with a given this value and arguments",
      "Reflects the properties of an object",
      "Applies a function to an array of values",
      "Reflects the value of a function",
    ],
    correctAnswer: "Applies a function with a given this value and arguments",
    explanation:
      "The Reflect.apply() method calls a target function with arguments and a specified this value. It is a more versatile method than Function.prototype.apply() and works with the Reflect API.",
  },
  {
    question:
      "How do you check if a function is a generator function in JavaScript?",
    options: [
      "Object.prototype.toString.call(fun) === '[object GeneratorFunction]'",
      "func instanceof GeneratorFunction",
      "typeof func === 'generator'",
      "func.constructor.name === 'GeneratorFunction'",
    ],
    correctAnswer:
      "Object.prototype.toString.call(fun) === '[object GeneratorFunction]'",
    explanation:
      "To check if a function is a generator function, you can use Object.prototype.toString.call(fun) and compare it to '[object GeneratorFunction]'. This method provides a reliable check for generator functions.",
  },
  {
    question: "What is the output of console.log(1 == '1') in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, the equality operator (==) performs type coercion. The string '1' is converted to the number 1 for comparison, so 1 == '1' evaluates to true.",
  },
  {
    question: "How do you create a new class with a method in JavaScript?",
    options: [
      "class MyClass { myMethod() { } }",
      "class MyClass extends BaseClass { myMethod() { } }",
      "function MyClass() { this.myMethod = function() { } }",
      "var MyClass = { myMethod() { } }",
    ],
    correctAnswer: "class MyClass { myMethod() { } }",
    explanation:
      "To create a new class with a method in JavaScript, you use the class syntax. For example: class MyClass { myMethod() { } } defines a class MyClass with a method myMethod.",
  },
  {
    question: "What is the purpose of Object.freeze() in JavaScript?",
    options: [
      "Prevents modification of an object",
      "Creates a new object with frozen properties",
      "Makes an object immutable but allows its prototype to be modified",
      "Clones an object with frozen properties",
    ],
    correctAnswer: "Prevents modification of an object",
    explanation:
      "Object.freeze() prevents modification of an object. Once an object is frozen, you cannot add, delete, or modify its properties.",
  },
  {
    question:
      "How do you create a class method that returns a Promise in JavaScript?",
    options: [
      "class MyClass { async myMethod() { return Promise.resolve(); } }",
      "class MyClass { myMethod() { return new Promise(); } }",
      "class MyClass { myMethod() { return Promise.resolve(); } }",
      "class MyClass { myMethod() { return Promise(); } }",
    ],
    correctAnswer:
      "class MyClass { async myMethod() { return Promise.resolve(); } }",
    explanation:
      "To create a class method that returns a Promise, you can define it as an async method. For example: class MyClass { async myMethod() { return Promise.resolve(); } }.",
  },
  {
    question:
      "What does the Object.getOwnPropertyDescriptor() method do in JavaScript?",
    options: [
      "Returns a property descriptor for a named property of an object",
      "Returns a list of property descriptors for all properties of an object",
      "Deletes a property descriptor",
      "Creates a new property descriptor",
    ],
    correctAnswer:
      "Returns a property descriptor for a named property of an object",
    explanation:
      "Object.getOwnPropertyDescriptor() returns a property descriptor for a named property of an object. This descriptor provides details such as value, writable, enumerable, and configurable.",
  },
  {
    question: "How do you check if an object is extensible in JavaScript?",
    options: [
      "Object.isExtensible(object)",
      "object.isExtensible()",
      "Object.extensible(object)",
      "object.isExtensible()",
    ],
    correctAnswer: "Object.isExtensible(object)",
    explanation:
      "You can check if an object is extensible (i.e., if new properties can be added) using Object.isExtensible(object).",
  },
  {
    question: "What does the Object.setPrototypeOf() method do in JavaScript?",
    options: [
      "Sets the prototype (i.e., the internal [[Prototype]] property) of a specified object",
      "Creates a new object with a specified prototype",
      "Gets the prototype of a specified object",
      "Deletes the prototype of a specified object",
    ],
    correctAnswer:
      "Sets the prototype (i.e., the internal [[Prototype]] property) of a specified object",
    explanation:
      "The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object. It allows you to change the prototype of an object at runtime.",
  },
  {
    question:
      "How do you create a new instance of an existing object in JavaScript?",
    options: [
      "Object.create(existingObject)",
      "Object.new(existingObject)",
      "new existingObject()",
      "existingObject.create()",
    ],
    correctAnswer: "Object.create(existingObject)",
    explanation:
      "To create a new instance of an existing object, use Object.create(existingObject). This method creates a new object with the specified prototype object and properties.",
  },
  {
    question:
      "What is the output of console.log([1, 2] === [1, 2]) in JavaScript?",
    options: ["false", "true", "undefined", "NaN"],
    correctAnswer: "false",
    explanation:
      "In JavaScript, arrays are objects, and comparing two different array instances using === checks for reference equality. Since [1, 2] and [1, 2] are different instances, the result is false.",
  },
  {
    question: "How do you implement a generator function in JavaScript?",
    options: [
      "function* myGenerator() { yield 1; yield 2; }",
      "function myGenerator() { yield 1; yield 2; }",
      "function myGenerator() { return [1, 2]; }",
      "function* myGenerator() { return [1, 2]; }",
    ],
    correctAnswer: "function* myGenerator() { yield 1; yield 2; }",
    explanation:
      "To implement a generator function in JavaScript, use the function* syntax. For example: function* myGenerator() { yield 1; yield 2; } defines a generator function that yields values 1 and 2.",
  },
  {
    question: "What is the output of console.log('2' + 2) in JavaScript?",
    options: ["'22'", "4", "'4'", "undefined"],
    correctAnswer: "'22'",
    explanation:
      "In JavaScript, the + operator performs string concatenation if one of the operands is a string. Therefore, '2' + 2 results in the string '22'.",
  },
  {
    question: "How do you check if an object has a property in JavaScript?",
    options: [
      "object.hasOwnProperty(property)",
      "object.includes(property)",
      "property in object",
      "object.contains(property)",
    ],
    correctAnswer: "object.hasOwnProperty(property)",
    explanation:
      "To check if an object has a property, you can use the hasOwnProperty() method. For example: object.hasOwnProperty(property) returns true if the object has the specified property.",
  },
  {
    question: "What does Array.prototype.filter() do in JavaScript?",
    options: [
      "Creates a new array with all elements that pass the test implemented by the provided function",
      "Creates a new array with elements that fail the test",
      "Finds the first element that passes the test",
      "Sorts the array elements",
    ],
    correctAnswer:
      "Creates a new array with all elements that pass the test implemented by the provided function",
    explanation:
      "Array.prototype.filter() creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.",
  },
  {
    question: "How do you add a property to an object in JavaScript?",
    options: [
      "object.property = value",
      "object.addProperty('property', value)",
      "object.set('property', value)",
      "object.define('property', value)",
    ],
    correctAnswer: "object.property = value",
    explanation:
      "To add a property to an object, use the assignment syntax: object.property = value. This adds or updates the property with the specified value.",
  },
  {
    question: "What is the output of console.log(+'1') in JavaScript?",
    options: ["1", "'1'", "NaN", "undefined"],
    correctAnswer: "1",
    explanation:
      "The unary plus operator (+) converts its operand to a number. Therefore, +'1' converts the string '1' to the number 1.",
  },
];
