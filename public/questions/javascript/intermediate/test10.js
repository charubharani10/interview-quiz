export const test10 = [
  {
    question: "What is the output of console.log('10' / 2) in JavaScript?",
    options: ["5", "'5'", "NaN", "undefined"],
    correctAnswer: "5",
    explanation:
      "In JavaScript, dividing a string that represents a number by another number converts the string to a number and performs the division. Thus, '10' / 2 results in 5.",
  },
  {
    question:
      "How do you define an immediately invoked function expression (IIFE) in JavaScript?",
    options: [
      "(function() { })()",
      "function() { }()",
      "function() { }",
      "() => { }()",
    ],
    correctAnswer: "(function() { })()",
    explanation:
      "An IIFE (Immediately Invoked Function Expression) is defined using the syntax '(function() { })()'. This pattern immediately executes the function after its creation.",
  },
  {
    question: "What does Array.prototype.join() do in JavaScript?",
    options: [
      "Joins all elements of an array into a string",
      "Returns a new array with elements that pass the test",
      "Finds the index of a value in an array",
      "Merges two or more arrays",
    ],
    correctAnswer: "Joins all elements of an array into a string",
    explanation:
      "Array.prototype.join() combines all elements of an array into a single string, with elements separated by a specified separator (or comma by default).",
  },
  {
    question: "What is the output of console.log(2 == '2') in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, '2' and 2 are considered equal using loose equality (==) because the loose equality operator performs type coercion.",
  },
  {
    question: "How do you create a new instance of a class in JavaScript?",
    options: [
      "new ClassName()",
      "ClassName.create()",
      "ClassName()",
      "new instance ClassName()",
    ],
    correctAnswer: "new ClassName()",
    explanation:
      "To create a new instance of a class in JavaScript, use the 'new ClassName()' syntax, where 'ClassName' is the name of the class.",
  },
  {
    question: "What is the output of console.log([2] == [2]) in JavaScript?",
    options: ["false", "true", "undefined", "NaN"],
    correctAnswer: "false",
    explanation:
      "In JavaScript, comparing two different array objects with == returns false because arrays are compared by reference, not by value.",
  },
  {
    question: "How do you convert a string to a number in JavaScript?",
    options: ["Number()", "parseInt()", "parseFloat()", "All of the above"],
    correctAnswer: "All of the above",
    explanation:
      "You can convert a string to a number using 'Number()', 'parseInt()', or 'parseFloat()'. All methods effectively convert strings to numeric values.",
  },
  {
    question: "What does Array.prototype.splice() do in JavaScript?",
    options: [
      "Changes the contents of an array by removing or replacing existing elements and/or adding new elements",
      "Adds elements to the end of an array",
      "Removes the first element from an array",
      "Creates a shallow copy of a portion of an array",
    ],
    correctAnswer:
      "Changes the contents of an array by removing or replacing existing elements and/or adding new elements",
    explanation:
      "Array.prototype.splice() modifies an array by removing, replacing, or adding elements in place. It directly alters the original array.",
  },
  {
    question: "What is the output of console.log('' + 1 + 1) in JavaScript?",
    options: ["'11'", "11", "'1'", "2"],
    correctAnswer: "'11'",
    explanation:
      "In JavaScript, concatenating a string with numbers converts the numbers to strings and concatenates them. Therefore, '' + 1 + 1 results in '11'.",
  },
  {
    question: "How do you define a static method in a JavaScript class?",
    options: [
      "class MyClass { static myMethod() { } }",
      "class MyClass { myMethod() { } }",
      "class MyClass { static function myMethod() { } }",
      "class MyClass { static myMethod = function() { } }",
    ],
    correctAnswer: "class MyClass { static myMethod() { } }",
    explanation:
      "A static method in a JavaScript class is defined using the 'static' keyword. For example: 'class MyClass { static myMethod() { } }'.",
  },
  {
    question: "What does Array.prototype.shift() do in JavaScript?",
    options: [
      "Removes the first element from an array and returns that element",
      "Adds a new element to the beginning of an array",
      "Removes the last element from an array",
      "Adds a new element to the end of an array",
    ],
    correctAnswer:
      "Removes the first element from an array and returns that element",
    explanation:
      "Array.prototype.shift() removes the first element from an array and returns that element, shifting all other elements down.",
  },
  {
    question: "What is the output of console.log('5' - 1) in JavaScript?",
    options: ["4", "'4'", "NaN", "undefined"],
    correctAnswer: "4",
    explanation:
      "In JavaScript, subtracting a number from a string that represents a number converts the string to a number and performs the subtraction. Thus, '5' - 1 results in 4.",
  },
  {
    question: "How do you create a new Map in JavaScript?",
    options: ["new Map()", "Map.create()", "Map.new()", "new MapObject()"],
    correctAnswer: "new Map()",
    explanation:
      "Maps in JavaScript are created using the 'new Map()' constructor. A Map holds key-value pairs and maintains the order of insertion.",
  },
  {
    question: "What does Array.prototype.reverse() do in JavaScript?",
    options: [
      "Reverses the elements of an array in place",
      "Creates a new array with elements in reverse order",
      "Finds the last element of an array",
      "Sorts the array in descending order",
    ],
    correctAnswer: "Reverses the elements of an array in place",
    explanation:
      "Array.prototype.reverse() reverses the order of elements in the array in place, modifying the original array.",
  },
  {
    question: "What is the output of console.log(true + 1) in JavaScript?",
    options: ["2", "'true1'", "1", "undefined"],
    correctAnswer: "2",
    explanation:
      "In JavaScript, adding a boolean true to a number results in 1 + 1, which equals 2, because true is coerced to 1 in numeric contexts.",
  },
  {
    question:
      "How do you check if an object is an instance of a class in JavaScript?",
    options: ["instanceof", "typeof", "instanceOf()", "isInstance()"],
    correctAnswer: "instanceof",
    explanation:
      "To check if an object is an instance of a class, use the 'instanceof' operator. For example: 'object instanceof ClassName'.",
  },
  {
    question: "What does Array.prototype.pop() do in JavaScript?",
    options: [
      "Removes the last element from an array and returns that element",
      "Adds a new element to the end of an array",
      "Removes the first element from an array",
      "Adds a new element to the beginning of an array",
    ],
    correctAnswer:
      "Removes the last element from an array and returns that element",
    explanation:
      "Array.prototype.pop() removes the last element from an array and returns that element, modifying the original array.",
  },
  {
    question: "What is the output of console.log('2' + 2) in JavaScript?",
    options: ["'22'", "4", "'4'", "undefined"],
    correctAnswer: "'22'",
    explanation:
      "When a string is added to a number, the number is converted to a string and concatenated. Thus, '2' + 2 results in '22'.",
  },
  {
    question: "How do you define a property in a JavaScript object?",
    options: [
      "object.property = value",
      "object.defineProperty('property', value)",
      "object.addProperty('property', value)",
      "Object.defineProperty(object, 'property', { value: value })",
    ],
    correctAnswer: "object.property = value",
    explanation:
      "You can define a property in a JavaScript object using the syntax 'object.property = value'. This assigns a value to the specified property.",
  },
  {
    question: "What is the output of console.log(1 + '1' + 1) in JavaScript?",
    options: ["'111'", "111", "'11'", "NaN"],
    correctAnswer: "'111'",
    explanation:
      "In JavaScript, when you use the + operator with a string and a number, the number is converted to a string, and the result is a concatenation. Therefore, 1 + '1' results in '11', and adding another 1 results in '111'.",
  },
];
