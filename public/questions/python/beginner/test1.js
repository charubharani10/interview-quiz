export const test1 = [
  {
    question: "What is the correct file extension for Python files?",
    options: [".py", ".python", ".pt", ".p"],
    correctAnswer: ".py",
    explanation: "Python files use the .py extension.",
  },
  {
    question: "Which of the following is a valid Python variable name?",
    options: [
      "variable_name",
      "variable-name",
      "variable.name",
      "variable name",
    ],
    correctAnswer: "variable_name",
    explanation:
      "In Python, variable names cannot contain hyphens, periods, or spaces. They can include underscores.",
  },
  {
    question: "How do you start a comment in Python?",
    options: ["#", "//", "/*", "<!--"],
    correctAnswer: "#",
    explanation: "In Python, comments are started with the '#' symbol.",
  },
  {
    question: "Which data type is used to represent a whole number in Python?",
    options: ["int", "float", "str", "list"],
    correctAnswer: "int",
    explanation: "The 'int' data type is used for whole numbers in Python.",
  },
  {
    question: "What is the output of `print(2 ** 3)` in Python?",
    options: ["8", "6", "5", "9"],
    correctAnswer: "8",
    explanation:
      "The '**' operator is used for exponentiation. So, 2 ** 3 equals 8.",
  },
  {
    question: "Which of the following is used to define a function in Python?",
    options: ["def", "function", "func", "define"],
    correctAnswer: "def",
    explanation: "In Python, functions are defined using the 'def' keyword.",
  },
  {
    question: "How do you create a list in Python?",
    options: ["list()", "[]", "{}", "()"],
    correctAnswer: "[]",
    explanation: "Lists in Python are created using square brackets [].",
  },
  {
    question: "What is the result of `len('hello')` in Python?",
    options: ["5", "4", "6", "7"],
    correctAnswer: "5",
    explanation:
      "The 'len()' function returns the number of characters in a string. 'hello' has 5 characters.",
  },
  {
    question:
      "Which of the following statements is used to import a module in Python?",
    options: ["import", "include", "require", "using"],
    correctAnswer: "import",
    explanation: "Modules in Python are imported using the 'import' statement.",
  },
  {
    question: "How do you add an item to a list in Python?",
    options: [
      "list.append(item)",
      "list.add(item)",
      "list.insert(item)",
      "list.push(item)",
    ],
    correctAnswer: "list.append(item)",
    explanation:
      "To add an item to the end of a list, use the 'append()' method.",
  },
  {
    question: "What is the output of `print(type(3.14))` in Python?",
    options: [
      "<class 'float'>",
      "<class 'int'>",
      "<class 'str'>",
      "<class 'list'>",
    ],
    correctAnswer: "<class 'float'>",
    explanation:
      "The 'type()' function returns the type of an object. 3.14 is a float.",
  },
  {
    question: "How do you write an if statement in Python?",
    options: [
      "if condition:",
      "if condition then:",
      "if (condition):",
      "if condition do:",
    ],
    correctAnswer: "if condition:",
    explanation: "In Python, an if statement is written as 'if condition:'.",
  },
  {
    question: "Which keyword is used to handle exceptions in Python?",
    options: ["try", "catch", "handle", "exception"],
    correctAnswer: "try",
    explanation:
      "The 'try' keyword is used to start a block of code that will be tested for exceptions.",
  },
  {
    question: "What is the output of `print('hello'.upper())` in Python?",
    options: ["HELLO", "hello", "Hello", "HELLO!"],
    correctAnswer: "HELLO",
    explanation: "'upper()' converts all characters in a string to uppercase.",
  },
  {
    question: "How do you define a class in Python?",
    options: [
      "class ClassName:",
      "define ClassName:",
      "function ClassName:",
      "class ClassName",
    ],
    correctAnswer: "class ClassName:",
    explanation:
      "Classes in Python are defined using the 'class' keyword followed by the class name and a colon.",
  },
  {
    question:
      "What method is used to remove whitespace from the beginning and end of a string in Python?",
    options: ["strip()", "trim()", "remove()", "clear()"],
    correctAnswer: "strip()",
    explanation:
      "The 'strip()' method removes whitespace from both ends of a string.",
  },
  {
    question:
      "How do you access the value associated with a key in a dictionary in Python?",
    options: [
      "dict[key]",
      "dict.get(key)",
      "dict.fetch(key)",
      "dict[key].value",
    ],
    correctAnswer: "dict.get(key)",
    explanation:
      "The 'get()' method is used to access the value for a given key in a dictionary.",
  },
  {
    question: "Which of the following is used to create a tuple in Python?",
    options: ["()", "[]", "{}", "tuple()"],
    correctAnswer: "()",
    explanation: "Tuples in Python are created using parentheses ().",
  },
  {
    question: "What is the purpose of the `self` keyword in a Python class?",
    options: [
      "To refer to the instance of the class",
      "To refer to the class itself",
      "To define a class method",
      "To create a class variable",
    ],
    correctAnswer: "To refer to the instance of the class",
    explanation:
      "`self` refers to the instance of the class and is used to access variables and methods associated with the instance.",
  },
  {
    question: "Which operator is used for integer division in Python?",
    options: ["//", "%", "/", "^"],
    correctAnswer: "//",
    explanation:
      "The '//' operator performs integer (floor) division, discarding the decimal part.",
  },
];
