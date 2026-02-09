export const test2 = [
  {
    question: "How do you create a private attribute in a Python class?",
    options: [
      "Prefix the attribute name with an underscore",
      "Prefix the attribute name with double underscores",
      "Prefix the attribute name with a dollar sign",
      "Prefix the attribute name with a hash",
    ],
    correctAnswer: "Prefix the attribute name with double underscores",
    explanation:
      "In Python, private attributes are indicated by double underscores (`__`). This triggers name mangling to avoid accidental access from outside the class.",
  },
  {
    question:
      "How can you check if a string starts with a specific prefix in Python?",
    options: [
      "Using `startswith()` method",
      "Using `contains()` method",
      "Using `index()` method",
      "Using `find()` method",
    ],
    correctAnswer: "Using `startswith()` method",
    explanation:
      "`startswith()` method checks if a string starts with a specified prefix and returns True if it does.",
  },
  {
    question:
      "Which of the following is not a valid way to format strings in Python?",
    options: [
      "Using f-strings",
      "Using `format()` method",
      "Using `%` operator",
      "Using `format()` function",
    ],
    correctAnswer: "Using `format()` function",
    explanation:
      "There is no `format()` function in Python. Instead, string formatting is done using f-strings, the `format()` method, or the `%` operator.",
  },
  {
    question: "What is the purpose of the `__repr__` method in Python?",
    options: [
      "To provide a string representation of the object for debugging",
      "To define how the object should be printed",
      "To initialize the object",
      "To create a formatted string",
    ],
    correctAnswer:
      "To provide a string representation of the object for debugging",
    explanation:
      "`__repr__` is used to provide a developer-friendly string representation of an object, often for debugging purposes.",
  },
  {
    question: "How do you define a class method in Python?",
    options: [
      "Using `@classmethod` decorator",
      "Using `@staticmethod` decorator",
      "Using `@method` decorator",
      "Using `@property` decorator",
    ],
    correctAnswer: "Using `@classmethod` decorator",
    explanation:
      "`@classmethod` decorator is used to define a method that can be called on the class itself, not just an instance of the class.",
  },
  {
    question: "What is the output of `print(3 == 3.0)`?",
    options: ["True", "False", "Error", "None"],
    correctAnswer: "True",
    explanation:
      "In Python, `3` and `3.0` are considered equal because Python automatically converts the integer to a float for comparison.",
  },
  {
    question: "How do you sort a dictionary by its values in Python?",
    options: [
      "Using `sorted()` with `key` argument",
      "Using `sort()` method",
      "Using `order()` method",
      "Using `dict.sort()`",
    ],
    correctAnswer: "Using `sorted()` with `key` argument",
    explanation:
      "`sorted()` can be used to sort a dictionary by its values when provided with the `key` argument, which defines the sorting criteria.",
  },
  {
    question: "What is the purpose of the `@property` decorator in Python?",
    options: [
      "To define a getter method",
      "To define a setter method",
      "To define a class method",
      "To define a static method",
    ],
    correctAnswer: "To define a getter method",
    explanation:
      "The `@property` decorator is used to define a getter method, allowing a method to be accessed like an attribute.",
  },
  {
    question: "How do you use a `defaultdict` from the `collections` module?",
    options: [
      "Initialize with a default factory function",
      "Initialize with an empty dictionary",
      "Initialize with a fixed value",
      "Initialize with a list",
    ],
    correctAnswer: "Initialize with a default factory function",
    explanation:
      "`defaultdict` is initialized with a default factory function, which supplies default values for missing keys.",
  },
  {
    question: "What is the output of `print('abc'[:2])`?",
    options: ["ab", "abc", "bc", "a"],
    correctAnswer: "ab",
    explanation:
      "The slicing operation `[:2]` extracts the first two characters from the string 'abc', resulting in 'ab'.",
  },
  {
    question:
      "How do you add a new key-value pair to an existing dictionary in Python?",
    options: [
      "Using dictionary[key] = value",
      "Using dictionary.add(key, value)",
      "Using dictionary.insert(key, value)",
      "Using dictionary.append(key, value)",
    ],
    correctAnswer: "Using dictionary[key] = value",
    explanation:
      "In Python, you can add a new key-value pair by assigning a value to a new key using `dictionary[key] = value`.",
  },
  {
    question: "How can you remove duplicates from a list in Python?",
    options: [
      "Using `set()`",
      "Using `unique()`",
      "Using `distinct()`",
      "Using `remove_duplicates()`",
    ],
    correctAnswer: "Using `set()`",
    explanation:
      "Using `set()` automatically removes duplicates from a list since sets only allow unique elements.",
  },
  {
    question: "How do you create a list comprehension in Python?",
    options: [
      "Using `[expression for item in iterable]`",
      "Using `list(expression for item in iterable)`",
      "Using `for item in iterable: [expression]`",
      "Using `list(map(expression, iterable))`",
    ],
    correctAnswer: "Using `[expression for item in iterable]`",
    explanation:
      "List comprehensions in Python use the syntax `[expression for item in iterable]` to create a new list by applying an expression to each item.",
  },
  {
    question:
      "How can you convert a list of tuples into a dictionary in Python?",
    options: [
      "Using `dict()`",
      "Using `tuple()`",
      "Using `list()`",
      "Using `convert()`",
    ],
    correctAnswer: "Using `dict()`",
    explanation:
      "`dict()` can convert a list of tuples into a dictionary where the first element of each tuple becomes the key and the second becomes the value.",
  },
  {
    question: "How do you check the type of an object in Python?",
    options: [
      "Using `type()`",
      "Using `isinstance()`",
      "Using `checktype()`",
      "Using `objtype()`",
    ],
    correctAnswer: "Using `type()`",
    explanation:
      "The `type()` function is used to check the type of an object in Python.",
  },
  {
    question:
      "What does the `finally` block do in a try-except-finally statement?",
    options: [
      "Executes code regardless of whether an exception occurs",
      "Executes code only if an exception occurs",
      "Executes code before the try block",
      "Executes code after the except block",
    ],
    correctAnswer: "Executes code regardless of whether an exception occurs",
    explanation:
      "The `finally` block ensures that code is executed regardless of whether an exception occurs in the try-except block.",
  },
  {
    question: "How do you create a tuple with one element in Python?",
    options: [
      "Using `(element,)`",
      "Using `[element]`",
      "Using `{element}`",
      "Using `tuple(element)`",
    ],
    correctAnswer: "Using `(element,)`",
    explanation:
      "To create a tuple with one element, a comma must be included after the element, e.g., `(element,)`.",
  },
  {
    question: "How can you remove an item from a set in Python?",
    options: [
      "Using `remove()` or `discard()` methods",
      "Using `pop()` method",
      "Using `delete()` method",
      "Using `clear()` method",
    ],
    correctAnswer: "Using `remove()` or `discard()` methods",
    explanation:
      "The `remove()` method raises an error if the item does not exist, while `discard()` does not raise an error.",
  },
  {
    question: "What is the output of `print(list('123'))`?",
    options: ["['1', '2', '3']", "['123']", "['1', '2', 3]", "['1', 2, '3']"],
    correctAnswer: "['1', '2', '3']",
    explanation:
      "The `list()` function converts a string into a list of characters, so `list('123')` results in `['1', '2', '3']`.",
  },
  {
    question:
      "How do you find the maximum value in a list of numbers in Python?",
    options: [
      "Using `max()`",
      "Using `maximum()`",
      "Using `highest()`",
      "Using `get_max()`",
    ],
    correctAnswer: "Using `max()`",
    explanation:
      "The `max()` function is used to find the highest value in a list or iterable.",
  },
];
