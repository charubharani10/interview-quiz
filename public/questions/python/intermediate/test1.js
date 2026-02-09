export const test1 = [
  {
    question: "What is the output of `print('a' in 'apple')`?",
    options: ["True", "False", "Error", "None"],
    correctAnswer: "True",
    explanation:
      "The `in` keyword checks if a substring exists within a string. In this case, 'a' is indeed in 'apple', so it returns True.",
  },
  {
    question:
      "How can you handle multiple exceptions in a single try-except block?",
    options: [
      "Using multiple except clauses",
      "Using a single except clause with multiple exceptions separated by commas",
      "Using a try-except-finally block",
      "Using the try-except-else block",
    ],
    correctAnswer:
      "Using a single except clause with multiple exceptions separated by commas",
    explanation:
      "Python allows you to handle multiple exceptions in a single `except` clause by separating them with commas, allowing for more concise error handling.",
  },
  {
    question: "What does the `enumerate()` function do in Python?",
    options: [
      "Adds a counter to an iterable",
      "Creates a list of enumerated values",
      "Generates a range of numbers",
      "Creates an iterable of tuples",
    ],
    correctAnswer: "Adds a counter to an iterable",
    explanation:
      "`enumerate()` adds a counter to each element in an iterable and returns it as an enumerate object, often used for loops when both index and value are needed.",
  },
  {
    question:
      "How do you create a class in Python that inherits from another class?",
    options: [
      "class Child(Parent):",
      "class Child extends Parent:",
      "class Child inherits Parent:",
      "class Child : Parent",
    ],
    correctAnswer: "class Child(Parent):",
    explanation:
      "In Python, inheritance is specified by placing the parent class in parentheses after the child class name.",
  },
  {
    question:
      "Which method is used to read the entire content of a file in Python?",
    options: ["read()", "readlines()", "readfile()", "fetch()"],
    correctAnswer: "read()",
    explanation:
      "`read()` reads the entire content of the file as a string, while `readlines()` returns a list of lines.",
  },
  {
    question: "What is the purpose of the `__init__` method in Python classes?",
    options: [
      "To initialize the object's state",
      "To create a new class",
      "To define class methods",
      "To initialize the class attributes",
    ],
    correctAnswer: "To initialize the object's state",
    explanation:
      "`__init__` is a special method in Python classes that is automatically called when an object is created. It is typically used to initialize the object's attributes.",
  },
  {
    question: "How do you create a generator function in Python?",
    options: [
      "Using the `yield` keyword",
      "Using the `return` keyword",
      "Using the `generate` keyword",
      "Using the `create` keyword",
    ],
    correctAnswer: "Using the `yield` keyword",
    explanation:
      "A generator function is defined using the `yield` keyword, which allows it to return values one at a time and maintain its state between calls.",
  },
  {
    question: "What is the difference between `deepcopy` and `copy` in Python?",
    options: [
      "`deepcopy` creates a new object with copies of nested objects; `copy` creates a shallow copy",
      "`deepcopy` creates a shallow copy; `copy` creates a deep copy",
      "There is no difference",
      "`deepcopy` is faster than `copy`",
    ],
    correctAnswer:
      "`deepcopy` creates a new object with copies of nested objects; `copy` creates a shallow copy",
    explanation:
      "`deepcopy` creates a new object and recursively copies all objects, while `copy` only creates a shallow copy, meaning it copies references to nested objects.",
  },
  {
    question:
      "Which of the following methods is used to iterate over dictionary items in Python?",
    options: ["items()", "values()", "keys()", "iter()"],
    correctAnswer: "items()",
    explanation:
      "`items()` returns a view object that displays a list of a dictionary's key-value tuple pairs, which is useful when you need to iterate over both keys and values.",
  },
  {
    question:
      "How do you handle multiple contexts in a single `with` statement?",
    options: [
      "Using commas to separate contexts",
      "Using multiple `with` statements",
      "Using a list of contexts",
      "Using a tuple of contexts",
    ],
    correctAnswer: "Using commas to separate contexts",
    explanation:
      "You can manage multiple resources in a single `with` statement by separating them with commas. This simplifies code and ensures proper resource management.",
  },
  {
    question: "What is the output of `print(list(range(3)))`?",
    options: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "[1, 2]"],
    correctAnswer: "[0, 1, 2]",
    explanation:
      "`range(3)` generates numbers from 0 up to but not including 3. The `list()` function converts this range object into a list.",
  },
  {
    question:
      "How do you make a class method callable from an instance and the class in Python?",
    options: [
      "Using `@classmethod` decorator",
      "Using `@staticmethod` decorator",
      "Using `@staticmethod` decorator",
      "Using `@method` decorator",
    ],
    correctAnswer: "Using `@classmethod` decorator",
    explanation:
      "`@classmethod` allows a method to be called both from the class and its instances. The first parameter of such a method is `cls`, which refers to the class itself.",
  },
  {
    question:
      "How can you perform a case-insensitive comparison of two strings in Python?",
    options: [
      "Using `str.lower()` or `str.upper()`",
      "Using `str.casefold()`",
      "Using `str.capitalize()`",
      "Using `str.title()`",
    ],
    correctAnswer: "Using `str.casefold()`",
    explanation:
      "`str.casefold()` is designed for more aggressive case normalization than `lower()` and is ideal for case-insensitive comparisons.",
  },
  {
    question:
      "Which of the following is used to create a virtual environment in Python?",
    options: ["venv", "env", "virtualenv", "pyenv"],
    correctAnswer: "venv",
    explanation:
      "`venv` is a module included in Python's standard library that is used to create isolated Python environments. It is commonly used to avoid conflicts between dependencies.",
  },
  {
    question: "How do you access environment variables in Python?",
    options: [
      "Using `os.environ`",
      "Using `os.getenv`",
      "Using `os.getenv`",
      "Using `sys.env`",
    ],
    correctAnswer: "Using `os.environ`",
    explanation:
      "`os.environ` is a dictionary in Python that contains environment variables. It allows access to them by key.",
  },
  {
    question: "What is the output of `print({1, 2, 3} - {2, 3, 4})`?",
    options: ["{1}", "{2, 3, 4}", "{}", "{1, 2, 3, 4}"],
    correctAnswer: "{1}",
    explanation:
      "The `-` operator on sets returns the difference between two sets. `{1, 2, 3} - {2, 3, 4}` results in `{1}` because `1` is only present in the first set.",
  },
  {
    question: "How do you merge two lists into a single list in Python?",
    options: [
      "Using `+` operator",
      "Using `append()` method",
      "Using `extend()` method",
      "Using `concat()` method",
    ],
    correctAnswer: "Using `+` operator",
    explanation:
      "The `+` operator concatenates two lists in Python, resulting in a new list that contains elements of both lists.",
  },
  {
    question:
      "Which method is used to convert a string into a list of words in Python?",
    options: ["split()", "join()", "slice()", "tokenize()"],
    correctAnswer: "split()",
    explanation:
      "`split()` method splits a string into a list where each element is a word, using spaces or a specified delimiter.",
  },
  {
    question: "How can you access the first element of a list in Python?",
    options: ["list[0]", "list[1]", "list.first()", "list.head()"],
    correctAnswer: "list[0]",
    explanation:
      "In Python, list indexing starts from 0. Accessing `list[0]` retrieves the first element of the list.",
  },
  {
    question: "What does the `super()` function do in Python?",
    options: [
      "Calls a method from the parent class",
      "Creates a super class",
      "Initializes a class",
      "Creates a new object",
    ],
    correctAnswer: "Calls a method from the parent class",
    explanation:
      "`super()` is used to call a method from a parent class, allowing the child class to inherit methods and properties.",
  },
];
