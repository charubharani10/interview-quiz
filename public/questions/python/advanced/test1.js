export const test1 = [
  {
    question: "What is the output of `print({x: x**2 for x in (2, 3, 4)})`?",
    options: [
      "{2: 4, 3: 9, 4: 16}",
      "{4: 9, 9: 16, 16: 25}",
      "{2: 4, 3: 9, 4: 16, 9: 25}",
      "{2: 4, 3: 9, 4: 16, 16: 25}",
    ],
    correctAnswer: "{2: 4, 3: 9, 4: 16}",
    explanation:
      "The expression `{x: x**2 for x in (2, 3, 4)}` creates a dictionary comprehension where each element in the tuple `(2, 3, 4)` is used as a key, and the square of the key is used as the value.",
  },
  {
    question: "How do you create a metaclass in Python?",
    options: [
      "By inheriting from `type`",
      "By inheriting from `object`",
      "By using `class` keyword",
      "By using `type` keyword",
    ],
    correctAnswer: "By inheriting from `type`",
    explanation:
      "A metaclass in Python is created by inheriting from the built-in `type` class. It allows you to customize class creation.",
  },
  {
    question: "What does the `__new__` method do in Python?",
    options: [
      "It creates a new instance of a class",
      "It initializes the new instance",
      "It defines the behavior of the class",
      "It deletes the instance",
    ],
    correctAnswer: "It creates a new instance of a class",
    explanation:
      "`__new__` is responsible for creating a new instance of a class. It is called before `__init__`.",
  },
  {
    question: "How do you implement a context manager using a class?",
    options: [
      "By defining `__enter__` and `__exit__` methods",
      "By defining `__start__` and `__end__` methods",
      "By using the `with` statement",
      "By using `try` and `finally` blocks",
    ],
    correctAnswer: "By defining `__enter__` and `__exit__` methods",
    explanation:
      "To create a context manager using a class, you need to define the `__enter__` and `__exit__` methods. These methods manage the setup and teardown of resources.",
  },
  {
    question: "What is the output of `print((lambda x: x*2)(5))`?",
    options: ["10", "25", "50", "5"],
    correctAnswer: "10",
    explanation:
      "The expression `(lambda x: x*2)(5)` creates a lambda function that doubles its input and immediately calls it with the argument `5`, resulting in `10`.",
  },
  {
    question: "How can you create a custom exception in Python?",
    options: [
      "By inheriting from the `Exception` class",
      "By inheriting from the `BaseException` class",
      "By inheriting from the `Error` class",
      "By inheriting from the `RuntimeError` class",
    ],
    correctAnswer: "By inheriting from the `Exception` class",
    explanation:
      "To create a custom exception, you should inherit from the `Exception` class or one of its subclasses.",
  },
  {
    question: "What is the purpose of `__slots__` in a Python class?",
    options: [
      "To restrict the attributes of a class",
      "To define class methods",
      "To initialize class attributes",
      "To define default values for attributes",
    ],
    correctAnswer: "To restrict the attributes of a class",
    explanation:
      "`__slots__` is used to restrict the attributes that instances of a class can have, thereby saving memory by preventing the creation of a `__dict__` for each instance.",
  },
  {
    question: "How do you use `functools.lru_cache` in Python?",
    options: [
      "To cache function results",
      "To optimize function calls",
      "To store function arguments",
      "To manage function memory",
    ],
    correctAnswer: "To cache function results",
    explanation:
      "The `functools.lru_cache` decorator caches the results of function calls to improve performance for functions with expensive computations and repetitive calls.",
  },
  {
    question: "What is the output of `print(0b1010 + 0b0101)` in Python?",
    options: ["15", "11", "9", "10"],
    correctAnswer: "15",
    explanation:
      "The binary literals `0b1010` and `0b0101` are equivalent to the decimal numbers `10` and `5`, respectively. Their sum is `15`.",
  },
  {
    question: "How do you serialize an object to JSON in Python?",
    options: [
      "Using `json.dumps()`",
      "Using `json.dump()`",
      "Using `pickle.dumps()`",
      "Using `pickle.dump()`",
    ],
    correctAnswer: "Using `json.dumps()`",
    explanation:
      "`json.dumps()` is used to serialize (convert) a Python object into a JSON string. `json.dump()` writes it to a file.",
  },
  {
    question: "What is the purpose of the `__getattr__` method in Python?",
    options: [
      "To intercept access to an attribute",
      "To set attributes",
      "To delete attributes",
      "To create new attributes",
    ],
    correctAnswer: "To intercept access to an attribute",
    explanation:
      "`__getattr__` is called when accessing an attribute that doesn't exist on an object. It allows customization of attribute access behavior.",
  },
  {
    question: "How can you measure the execution time of a function in Python?",
    options: [
      "Using the `time` module",
      "Using the `datetime` module",
      "Using the `os` module",
      "Using the `sys` module",
    ],
    correctAnswer: "Using the `time` module",
    explanation:
      "The `time` module provides functions like `time.time()` to measure elapsed time, which is useful for timing code execution.",
  },
  {
    question: "What does the `asyncio` library do in Python?",
    options: [
      "Provides asynchronous I/O operations",
      "Provides synchronous I/O operations",
      "Manages threading",
      "Handles multiprocessing",
    ],
    correctAnswer: "Provides asynchronous I/O operations",
    explanation:
      "`asyncio` is a library for writing concurrent code using the `async`/`await` syntax. It provides infrastructure for asynchronous I/O operations.",
  },
  {
    question: "How do you create a virtual environment using `virtualenv`?",
    options: [
      "Using `virtualenv venv`",
      "Using `virtualenv create venv`",
      "Using `python -m venv venv`",
      "Using `venv -create venv`",
    ],
    correctAnswer: "Using `virtualenv venv`",
    explanation:
      "The command `virtualenv venv` creates a new virtual environment in the `venv` directory using the `virtualenv` tool.",
  },
  {
    question: "What is the purpose of the `__del__` method in Python?",
    options: [
      "To define behavior when an object is deleted",
      "To initialize the object",
      "To create the object",
      "To modify the object",
    ],
    correctAnswer: "To define behavior when an object is deleted",
    explanation:
      "`__del__` is a special method that is called when an object is about to be destroyed. It is used for cleanup activities.",
  },
  {
    question: "How can you implement a singleton pattern in Python?",
    options: [
      "By using a class with a private constructor",
      "By using a metaclass",
      "By using a decorator",
      "By using a global variable",
    ],
    correctAnswer: "By using a metaclass",
    explanation:
      "A singleton pattern ensures that a class has only one instance. This can be implemented by using a metaclass to control the instantiation of the class.",
  },
  {
    question: "What is the output of `print([1, 2, 3] * 2)`?",
    options: [
      "[1, 2, 3, 1, 2, 3]",
      "[1, 2, 3, 2, 4, 6]",
      "[2, 4, 6]",
      "[1, 1, 2, 2, 3, 3]",
    ],
    correctAnswer: "[1, 2, 3, 1, 2, 3]",
    explanation:
      "The expression `[1, 2, 3] * 2` creates a new list by repeating the original list `[1, 2, 3]` twice.",
  },
  {
    question: "How do you create a coroutine in Python?",
    options: [
      "Using `async def` syntax",
      "Using `def` syntax",
      "Using `yield` syntax",
      "Using `async` keyword only",
    ],
    correctAnswer: "Using `async def` syntax",
    explanation:
      "A coroutine is defined using the `async def` syntax, which allows you to use the `await` keyword inside the function.",
  },
  {
    question: "What is the purpose of the `__call__` method in Python?",
    options: [
      "To make an instance callable like a function",
      "To create a new instance",
      "To initialize the class",
      "To define a method",
    ],
    correctAnswer: "To make an instance callable like a function",
    explanation:
      "The `__call__` method allows an instance of a class to be called as if it were a function.",
  },
  {
    question: "How do you handle large data sets efficiently in Python?",
    options: [
      "Using generators and iterators",
      "Using lists and dictionaries",
      "Using multiple threads",
      "Using caching",
    ],
    correctAnswer: "Using generators and iterators",
    explanation:
      "Generators and iterators provide a way to handle large data sets without loading everything into memory at once, thus improving efficiency.",
  },
];
