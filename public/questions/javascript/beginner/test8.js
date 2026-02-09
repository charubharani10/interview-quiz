export const test8 = [
  {
    question: "What is the result of 2 + '2' in JavaScript?",
    options: ["'22'", "4", "NaN", "22"],
    correctAnswer: "'22'",
    explanation:
      "The '+' operator performs string concatenation when one of the operands is a string, so '2' + '2' results in '22'.",
  },
  {
    question: "How do you create a new promise in JavaScript?",
    options: [
      "new Promise()",
      "Promise.create()",
      "Promise.new()",
      "new Deferred()",
    ],
    correctAnswer: "new Promise()",
    explanation: "'new Promise()' creates a new Promise object in JavaScript.",
  },
  {
    question:
      "Which method is used to execute a function at regular intervals in JavaScript?",
    options: ["setInterval()", "setTimeout()", "repeat()", "loop()"],
    correctAnswer: "setInterval()",
    explanation:
      "'setInterval()' executes a function repeatedly at specified intervals.",
  },
  {
    question: "How do you concatenate two strings in JavaScript?",
    options: [
      "str1 + str2",
      "str1.concat(str2)",
      "str1.append(str2)",
      "Both a) and b)",
    ],
    correctAnswer: "Both a) and b)",
    explanation:
      "You can concatenate two strings using 'str1 + str2' or 'str1.concat(str2)'.",
  },
  {
    question: "What is the result of '0' == 0 in JavaScript?",
    options: ["true", "false", "0", "'0'"],
    correctAnswer: "true",
    explanation:
      "'==' performs type coercion, so '0' (a string) is converted to 0 (a number), making the comparison '0 == 0' true.",
  },
  {
    question:
      "How do you create a new RegExp object in JavaScript with dynamic pattern?",
    options: [
      "new RegExp(pattern)",
      "RegExp(pattern)",
      "new RegularExpression(pattern)",
      "RegExp.create(pattern)",
    ],
    correctAnswer: "new RegExp(pattern)",
    explanation:
      "'new RegExp(pattern)' creates a new RegExp object with the given dynamic pattern.",
  },
  {
    question:
      "Which method is used to transform an array into a string in JavaScript?",
    options: ["toString()", "join()", "concat()", "stringify()"],
    correctAnswer: "join()",
    explanation:
      "'join()' is used to transform an array into a string by concatenating all elements with a specified separator.",
  },
  {
    question: "What does Object.freeze(obj) do in JavaScript?",
    options: [
      "Prevents modifications to the object",
      "Makes the object immutable",
      "Stops properties from being added or removed",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "'Object.freeze(obj)' makes an object immutable by preventing modifications, additions, or deletions of properties.",
  },
  {
    question: "How do you get the length of an array in JavaScript?",
    options: ["array.length", "array.size", "array.count()", "array.size()"],
    correctAnswer: "array.length",
    explanation:
      "The 'length' property returns the number of elements in an array.",
  },
  {
    question: "What is the output of 1 + '1' in JavaScript?",
    options: ["'11'", "2", "11", "NaN"],
    correctAnswer: "'11'",
    explanation:
      "The '+' operator performs string concatenation if one of the operands is a string, so 1 + '1' results in '11'.",
  },
  {
    question:
      "Which method is used to remove a specific property from an object in JavaScript?",
    options: ["delete", "removeProperty()", "pop()", "clear()"],
    correctAnswer: "delete",
    explanation:
      "'delete' is used to remove a specific property from an object.",
  },
  {
    question: "How do you create a new Set object from an array in JavaScript?",
    options: [
      "new Set(array)",
      "Set.from(array)",
      "Set.create(array)",
      "new SetObject(array)",
    ],
    correctAnswer: "new Set(array)",
    explanation:
      "'new Set(array)' creates a new Set object from an array, removing duplicate values.",
  },
  {
    question: "What is the result of typeof [] === 'object' in JavaScript?",
    options: ["true", "false", "undefined", "object"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, arrays are considered objects, so 'typeof []' returns 'object', and 'typeof [] === 'object'' is true.",
  },
  {
    question: "How do you execute a function only once in JavaScript?",
    options: [
      "Use once property",
      "Use setTimeout()",
      "Use addEventListener({ once: true })",
      "Use bind()",
    ],
    correctAnswer: "Use addEventListener({ once: true })",
    explanation:
      "Using 'addEventListener({ once: true })' ensures that the event listener is invoked at most once after being added.",
  },
  {
    question: "What is the output of true + true in JavaScript?",
    options: ["2", "truetrue", "false", "undefined"],
    correctAnswer: "2",
    explanation:
      "In JavaScript, adding two boolean values results in their numeric representation, where true is 1, so true + true equals 2.",
  },
  {
    question: "How do you check if a function is a constructor in JavaScript?",
    options: [
      "function.prototype.constructor === function",
      "function instanceof Function",
      "function.constructor === Function",
      "typeof function === 'function'",
    ],
    correctAnswer: "function instanceof Function",
    explanation:
      "You can check if a function is a constructor by using 'function instanceof Function'.",
  },
  {
    question: "What is the output of null == undefined in JavaScript?",
    options: ["true", "false", "null", "undefined"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, 'null' and 'undefined' are considered equal with '==' but not with '==='.",
  },
  {
    question: "How do you create a shallow copy of an object in JavaScript?",
    options: [
      "Object.assign({}, obj)",
      "spread operator {...obj}",
      "Object.create(obj)",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "You can create a shallow copy of an object using 'Object.assign({}, obj)', the spread operator '{...obj}', or 'Object.create(obj)'.",
  },
  {
    question: "What is the result of '5' * 2 in JavaScript?",
    options: ["10", "'10'", "NaN", "5"],
    correctAnswer: "10",
    explanation:
      "The '*' operator performs numeric multiplication, so '5' (a string) is converted to the number 5, and '5 * 2' results in 10.",
  },
  {
    question:
      "Which method is used to transform an array into an object in JavaScript?",
    options: [
      "Object.fromEntries()",
      "Array.toObject()",
      "Array.toMap()",
      "Object.toArray()",
    ],
    correctAnswer: "Object.fromEntries()",
    explanation:
      "'Object.fromEntries()' transforms an array of key-value pairs into an object.",
  },
];
