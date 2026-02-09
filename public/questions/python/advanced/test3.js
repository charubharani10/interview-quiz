export const test3 = [
  {
    question: "What is the purpose of the `__repr__` method in Python?",
    options: [
      "To define a string representation of an object for debugging",
      "To define a string representation of an object for end users",
      "To initialize the object",
      "To create a new instance of the object",
    ],
    correctAnswer:
      "To define a string representation of an object for debugging",
    explanation:
      "The `__repr__` method provides a string representation of an object that is useful for debugging and development.",
  },
  {
    question: "How do you use the `unittest` module to run tests in Python?",
    options: [
      "By using `unittest.main()`",
      "By using `unittest.run()`",
      "By using `unittest.execute()`",
      "By using `unittest.test()`",
    ],
    correctAnswer: "By using `unittest.main()`",
    explanation:
      "`unittest.main()` is used to run the test cases when a script is executed directly.",
  },
  {
    question: "What is the output of `print('hello'.find('b'))`?",
    options: ["1", "2", "-1", "None"],
    correctAnswer: "1",
    explanation:
      "The `find()` method returns the lowest index of the substring if found in the string; otherwise, it returns `-1`. Since 'b' is not in 'hello', it returns `-1`.",
  },
  {
    question: "How can you access the current file path in a Python script?",
    options: [
      "By using `__file__`",
      "By using `os.path.abspath()`",
      "By using `os.path.dirname()`",
      "By using `os.getcwd()`",
    ],
    correctAnswer: "By using `__file__`",
    explanation:
      "`__file__` is a special variable that holds the path of the current script file.",
  },
  {
    question: "What is the purpose of `__setattr__` method in Python?",
    options: [
      "To control the setting of attributes",
      "To create new attributes",
      "To delete attributes",
      "To define the initialization of attributes",
    ],
    correctAnswer: "To control the setting of attributes",
    explanation:
      "The `__setattr__` method allows customization of attribute assignment, enabling control over how attributes are set.",
  },
  {
    question: "What is the purpose of the `__delattr__` method in Python?",
    options: [
      "To control the deletion of attributes",
      "To create attributes",
      "To set attributes",
      "To initialize attributes",
    ],
    correctAnswer: "To control the deletion of attributes",
    explanation:
      "The `__delattr__` method enables customization of attribute deletion, allowing control over how attributes are removed.",
  },
  {
    question: "How do you create a custom iterator in Python?",
    options: [
      "By defining `__iter__` and `__next__` methods",
      "By defining `__iter__` method only",
      "By defining `__next__` method only",
      "By using a generator function",
    ],
    correctAnswer: "By defining `__iter__` and `__next__` methods",
    explanation:
      "A custom iterator is created by defining both `__iter__()` and `__next__()` methods in a class.",
  },
  {
    question: "What is the output of `print('hello'.capitalize())`?",
    options: ["'Hello'", "'HELLO'", "'hello'", "'hEllo'"],
    correctAnswer: "'Hello'",
    explanation:
      "The `capitalize()` method returns a copy of the string with the first character capitalized and the rest in lowercase.",
  },
  {
    question: "How do you perform a binary search in a sorted list in Python?",
    options: [
      "By using the `bisect` module",
      "By using the `search` module",
      "By using the `find` module",
      "By using the `index` module",
    ],
    correctAnswer: "By using the `bisect` module",
    explanation:
      "The `bisect` module provides functions to work with sorted lists and perform binary search operations.",
  },
  {
    question: "What is the purpose of `contextlib` module in Python?",
    options: [
      "To provide utilities for working with context managers",
      "To work with file input and output",
      "To work with threading",
      "To work with networking",
    ],
    correctAnswer: "To provide utilities for working with context managers",
    explanation:
      "The `contextlib` module offers utilities for creating and working with context managers, which are used in `with` statements.",
  },
];
