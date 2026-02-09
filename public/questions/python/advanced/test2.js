export const test2 = [
  {
    question: "What is the output of `print('abc'.center(10, '*'))`?",
    options: ["****abc****", "*abc*****", "****abc**", "***abc****"],
    correctAnswer: "****abc****",
    explanation:
      "The `center` method pads the original string `'abc'` with the specified character `'*'` to center it in a string of length 10.",
  },
  {
    question: "How do you create a custom descriptor in Python?",
    options: [
      "By defining `__get__`, `__set__`, and `__delete__` methods",
      "By defining `__init__` and `__call__` methods",
      "By defining `__enter__` and `__exit__` methods",
      "By defining `__new__` and `__del__` methods",
    ],
    correctAnswer: "By defining `__get__`, `__set__`, and `__delete__` methods",
    explanation:
      "A custom descriptor in Python is created by defining the `__get__`, `__set__`, and `__delete__` methods to manage attribute access.",
  },
  {
    question: "What is the output of `print(sum([1, 2, 3], 10))`?",
    options: ["16", "6", "10", "13"],
    correctAnswer: "16",
    explanation:
      "The `sum` function adds the elements of the list `[1, 2, 3]` to the initial value `10`, resulting in `16`.",
  },
  {
    question:
      "How do you handle multiple context managers in a single `with` statement?",
    options: [
      "By separating contexts with commas",
      "By using nested `with` statements",
      "By using a list of context managers",
      "By using a tuple of context managers",
    ],
    correctAnswer: "By separating contexts with commas",
    explanation:
      "Multiple context managers can be managed in a single `with` statement by separating them with commas.",
  },
  {
    question: "What is the purpose of `__slots__` in Python?",
    options: [
      "To restrict the attributes that an instance can have",
      "To define the attributes of a class",
      "To initialize the attributes of a class",
      "To manage memory usage for attributes",
    ],
    correctAnswer: "To restrict the attributes that an instance can have",
    explanation:
      "The `__slots__` attribute is used to restrict the attributes that instances of a class can have, which helps in saving memory.",
  },
  {
    question: "What does the `collections.namedtuple` function do in Python?",
    options: [
      "Creates a new subclass of tuple with named fields",
      "Creates a new class with named methods",
      "Creates a new dictionary with named keys",
      "Creates a new list with named elements",
    ],
    correctAnswer: "Creates a new subclass of tuple with named fields",
    explanation:
      "`collections.namedtuple` creates a subclass of the built-in `tuple` with named fields, allowing for more readable and self-documenting code.",
  },
  {
    question: "How can you prevent method overriding in Python?",
    options: [
      "By using `@final` decorator",
      "By using `@staticmethod` decorator",
      "By using `@classmethod` decorator",
      "By using `@property` decorator",
    ],
    correctAnswer: "By using `@final` decorator",
    explanation:
      "The `@final` decorator prevents methods from being overridden in subclasses, ensuring the method's behavior remains unchanged.",
  },
  {
    question: "What is the output of `print(list(range(3, 10, 2)))`?",
    options: [
      "[3, 5, 7, 9]",
      "[3, 4, 5, 6, 7, 8, 9]",
      "[3, 5, 7]",
      "[3, 5, 7, 9, 11]",
    ],
    correctAnswer: "[3, 5, 7, 9]",
    explanation:
      "The `range` function generates numbers from `3` to `10` with a step of `2`, resulting in `[3, 5, 7, 9]`.",
  },
  {
    question: "How do you enable debugging in a Django application?",
    options: [
      "By setting `DEBUG = True` in `settings.py`",
      "By using `python manage.py debug` command",
      "By setting `DEBUG = False` in `settings.py`",
      "By using `django-debug-toolbar`",
    ],
    correctAnswer: "By setting `DEBUG = True` in `settings.py`",
    explanation:
      "To enable debugging in a Django application, set `DEBUG = True` in the `settings.py` file.",
  },
  {
    question: "How do you define a property in a Python class?",
    options: [
      "By using the `@property` decorator",
      "By using the `@method` decorator",
      "By using the `@staticmethod` decorator",
      "By using the `@classproperty` decorator",
    ],
    correctAnswer: "By using the `@property` decorator",
    explanation:
      "The `@property` decorator is used to define a method in a class that can be accessed like an attribute.",
  },
  {
    question: "What is the purpose of the `__reduce__` method in Python?",
    options: [
      "To control the pickling and unpickling of objects",
      "To define the initialization of an object",
      "To define the representation of an object",
      "To control the memory allocation for an object",
    ],
    correctAnswer: "To control the pickling and unpickling of objects",
    explanation:
      "`__reduce__` is used to control how objects are pickled and unpickled, which is essential for object serialization.",
  },
  {
    question: "What does the `isinstance()` function do?",
    options: [
      "Checks if an object is an instance of a class or a subclass",
      "Checks if an object is a subclass of a class",
      "Checks if a class is an instance of another class",
      "Checks if a function is an instance of a class",
    ],
    correctAnswer:
      "Checks if an object is an instance of a class or a subclass",
    explanation:
      "`isinstance()` is used to check if an object is an instance of a specified class or a subclass thereof.",
  },
  {
    question:
      "How can you use the `re` module to find all matches of a pattern in a string?",
    options: [
      "By using `re.findall()`",
      "By using `re.match()`",
      "By using `re.search()`",
      "By using `re.find()`",
    ],
    correctAnswer: "By using `re.findall()`",
    explanation:
      "`re.findall()` returns all non-overlapping matches of a pattern in a string as a list of strings.",
  },
  {
    question:
      "What is the output of `print([i**2 for i in range(5) if i % 2 == 0])`?",
    options: ["[0, 4, 16]", "[1, 9, 25]", "[0, 1, 4, 9, 16]", "[0, 4, 9, 16]"],
    correctAnswer: "[0, 4, 16]",
    explanation:
      "The list comprehension squares each even number from `range(5)`, resulting in `[0, 4, 16]`.",
  },
  {
    question: "How do you define a class method in Python?",
    options: [
      "By using the `@classmethod` decorator",
      "By using the `@staticmethod` decorator",
      "By using the `@property` decorator",
      "By using the `@staticmethod` decorator",
    ],
    correctAnswer: "By using the `@classmethod` decorator",
    explanation:
      "A class method is defined using the `@classmethod` decorator, and it takes the class itself as the first argument.",
  },
  {
    question: "What is the purpose of the `__contains__` method in Python?",
    options: [
      "To check if a value is contained in a collection",
      "To initialize the contents of a collection",
      "To remove a value from a collection",
      "To add a value to a collection",
    ],
    correctAnswer: "To check if a value is contained in a collection",
    explanation:
      "The `__contains__` method allows an object to respond to the `in` operator to check for membership in a collection.",
  },
  {
    question: "How do you create a weak reference to an object in Python?",
    options: [
      "By using `weakref` module",
      "By using `gc` module",
      "By using `ref` module",
      "By using `reference` module",
    ],
    correctAnswer: "By using `weakref` module",
    explanation:
      "The `weakref` module provides tools to create weak references to objects, which do not prevent those objects from being garbage collected.",
  },
  {
    question:
      "What is the output of `print({1: 'a', 2: 'b', 3: 'c'}.get(4, 'default'))`?",
    options: ["'default'", "'None'", "'4'", "'default4'"],
    correctAnswer: "'default'",
    explanation:
      "The `get()` method returns the value for the specified key if it exists, otherwise it returns the default value provided.",
  },
  {
    question: "How do you perform a shallow copy of a dictionary in Python?",
    options: [
      "By using the `copy()` method",
      "By using the `deepcopy()` method",
      "By using dictionary comprehension",
      "By using `dict.copy()` method",
    ],
    correctAnswer: "By using the `copy()` method",
    explanation:
      "A shallow copy of a dictionary can be created using the `copy()` method, which copies the dictionary but not its nested objects.",
  },
  {
    question: "What does `os.path.join()` do?",
    options: [
      "Combines multiple path components into one path",
      "Splits a path into components",
      "Checks if a path exists",
      "Gets the filename from a path",
    ],
    correctAnswer: "Combines multiple path components into one path",
    explanation:
      "`os.path.join()` joins one or more path components intelligently, creating a single path.",
  },
];
