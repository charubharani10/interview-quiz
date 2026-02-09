export const test2 = [
  {
    question: "How do you concatenate two strings in Python?",
    options: [
      "string1 + string2",
      "string1.concat(string2)",
      "string1.append(string2)",
      "string1.extend(string2)",
    ],
    correctAnswer: "string1 + string2",
    explanation: "In Python, the '+' operator is used to concatenate strings.",
  },
  {
    question: "What does the `range()` function do in Python?",
    options: [
      "Generates a sequence of numbers",
      "Creates a list",
      "Generates random numbers",
      "Defines a range of values",
    ],
    correctAnswer: "Generates a sequence of numbers",
    explanation:
      "`range()` generates a sequence of numbers, commonly used in loops.",
  },
  {
    question: "How do you define a module in Python?",
    options: [
      "By creating a .py file",
      "By using the module keyword",
      "By using the import statement",
      "By defining a class",
    ],
    correctAnswer: "By creating a .py file",
    explanation: "A Python module is simply a .py file containing Python code.",
  },
  {
    question: "What method is used to find the length of a list in Python?",
    options: ["len()", "length()", "size()", "count()"],
    correctAnswer: "len()",
    explanation: "The 'len()' function returns the number of items in a list.",
  },
  {
    question: "How do you define a function that returns a value in Python?",
    options: [
      "def function_name(): return value",
      "function_name() = value",
      "def function_name(): value",
      "function_name() -> value",
    ],
    correctAnswer: "def function_name(): return value",
    explanation:
      "In Python, functions are defined using 'def', and 'return' is used to return values.",
  },
  {
    question: "How do you create a set in Python?",
    options: ["set()", "{}", "[]", "set.create()"],
    correctAnswer: "set()",
    explanation: "In Python, sets are created using the 'set()' function.",
  },
  {
    question: "What is the output of `print(3 * 'ha')` in Python?",
    options: ["hahaha", "h", "ha", "h * 3"],
    correctAnswer: "hahaha",
    explanation: "Multiplying a string by a number repeats it that many times.",
  },
  {
    question: "How do you check if a key exists in a dictionary in Python?",
    options: [
      "key in dict",
      "dict.has_key(key)",
      "dict.contains(key)",
      "key.exists()",
    ],
    correctAnswer: "key in dict",
    explanation:
      "The 'in' keyword is used to check for the existence of a key in a dictionary.",
  },
  {
    question: "Which method is used to add an item to a set in Python?",
    options: ["add()", "append()", "insert()", "push()"],
    correctAnswer: "add()",
    explanation: "Sets use the 'add()' method to add new items.",
  },
  {
    question: "How do you open a file in read mode in Python?",
    options: [
      "open('file.txt', 'r')",
      "open('file.txt', 'read')",
      "open('file.txt', 'w')",
      "open('file.txt', 'a')",
    ],
    correctAnswer: "open('file.txt', 'r')",
    explanation: "The 'r' mode opens a file in read-only mode.",
  },
  {
    question: "How do you handle exceptions in Python?",
    options: [
      "Using try-except blocks",
      "Using catch blocks",
      "Using error handling methods",
      "Using raise blocks",
    ],
    correctAnswer: "Using try-except blocks",
    explanation: "Python uses 'try-except' blocks to handle exceptions.",
  },
  {
    question: "What is the output of `print(2 + 3 * 4)` in Python?",
    options: ["14", "20", "22", "18"],
    correctAnswer: "14",
    explanation:
      "According to operator precedence, multiplication is performed before addition. So, 3 * 4 + 2 = 14.",
  },
  {
    question: "How do you create a virtual environment in Python?",
    options: [
      "python -m venv env_name",
      "create env env_name",
      "python env create",
      "virtualenv env_name",
    ],
    correctAnswer: "python -m venv env_name",
    explanation:
      "The 'venv' module is used to create virtual environments in Python.",
  },
  {
    question: "Which method is used to remove an item from a list in Python?",
    options: ["remove()", "delete()", "discard()", "pop()"],
    correctAnswer: "remove()",
    explanation:
      "The 'remove()' method removes the first occurrence of a specified value from a list.",
  },
  {
    question: "What does the `join()` method do in Python?",
    options: [
      "Concatenates a sequence of strings",
      "Joins two lists",
      "Merges dictionaries",
      "Combines multiple strings into one",
    ],
    correctAnswer: "Concatenates a sequence of strings",
    explanation:
      "The 'join()' method concatenates a sequence of strings into a single string.",
  },
  {
    question: "How do you define a default argument in a Python function?",
    options: [
      "def function(param=default_value)",
      "def function(param: default_value)",
      "def function(param = default_value)",
      "def function(param, default_value)",
    ],
    correctAnswer: "def function(param=default_value)",
    explanation:
      "In Python, default arguments are defined with 'param=default_value' inside the function definition.",
  },
  {
    question: "How do you remove duplicates from a list in Python?",
    options: [
      "Convert the list to a set",
      "Use the remove_duplicates() method",
      "Use a loop to remove duplicates",
      "Apply a filter function",
    ],
    correctAnswer: "Convert the list to a set",
    explanation:
      "Converting a list to a set automatically removes duplicate elements.",
  },
  {
    question: "What is the output of `print([1, 2, 3] + [4, 5, 6])` in Python?",
    options: [
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, [4, 5, 6]]",
      "[4, 5, 6, 1, 2, 3]",
      "[1, 2, 3] + [4, 5, 6]",
    ],
    correctAnswer: "[1, 2, 3, 4, 5, 6]",
    explanation: "The '+' operator concatenates two lists in Python.",
  },
  {
    question: "How do you create a generator in Python?",
    options: [
      "By using a function with yield",
      "By using a list comprehension",
      "By using a generator expression",
      "By using a lambda function",
    ],
    correctAnswer: "By using a function with yield",
    explanation:
      "Generators are created using functions that yield values one at a time.",
  },
  {
    question: "Which function is used to read a file line by line in Python?",
    options: ["readlines()", "read()", "linebyline()", "readline()"],
    correctAnswer: "readlines()",
    explanation: "`readlines()` reads the file and returns a list of lines.",
  },
];
