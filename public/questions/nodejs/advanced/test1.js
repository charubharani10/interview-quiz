export const test1 = [
  {
    question: "What is the purpose of the `cluster` module in Node.js?",
    options: [
      "To enable the use of multiple CPU cores",
      "To handle large data streams",
      "To manage server-side rendering",
      "To simplify database connections",
    ],
    correctAnswer: "To enable the use of multiple CPU cores",
    explanation:
      "The `cluster` module in Node.js allows you to create child processes that share server ports, enabling the use of multiple CPU cores.",
  },
  {
    question: "How do you enable debugging in Node.js?",
    options: [
      "Using the `--inspect` flag",
      "Using the `--debug` flag",
      "Using the `--trace` flag",
      "Using the `--verbose` flag",
    ],
    correctAnswer: "Using the `--inspect` flag",
    explanation: "The `--inspect` flag is used to enable debugging in Node.js.",
  },
  {
    question: "Which method is used to create a new `EventEmitter` instance?",
    options: [
      "new EventEmitter()",
      "EventEmitter.create()",
      "EventEmitter.new()",
      "new events.EventEmitter()",
    ],
    correctAnswer: "new events.EventEmitter()",
    explanation:
      "To create a new `EventEmitter` instance, use `new events.EventEmitter()`.",
  },
  {
    question:
      "What is the difference between `process.nextTick()` and `setImmediate()`?",
    options: [
      "`process.nextTick()` runs before I/O tasks, `setImmediate()` runs after I/O tasks",
      "`process.nextTick()` runs after I/O tasks, `setImmediate()` runs before I/O tasks",
      "They are the same and can be used interchangeably",
      "`process.nextTick()` is for synchronous tasks, `setImmediate()` is for asynchronous tasks",
    ],
    correctAnswer:
      "`process.nextTick()` runs before I/O tasks, `setImmediate()` runs after I/O tasks",
    explanation:
      "`process.nextTick()` schedules a callback to be executed in the same phase of the event loop before any I/O tasks, whereas `setImmediate()` schedules a callback to be executed after I/O tasks.",
  },
  {
    question: "How do you use `async_hooks` to track asynchronous resources?",
    options: [
      "By using `async_hooks.createHook()`",
      "By creating an `AsyncLocalStorage` instance",
      "By calling `async_hooks.track()`",
      "By setting `async_hooks.debug()`",
    ],
    correctAnswer: "By using `async_hooks.createHook()`",
    explanation:
      "The `async_hooks.createHook()` method is used to create hooks that track asynchronous resources.",
  },
  {
    question: "What is the purpose of the `v8` module in Node.js?",
    options: [
      "To interact with the V8 JavaScript engine",
      "To provide a virtual machine for code execution",
      "To handle HTTP requests",
      "To manage file system operations",
    ],
    correctAnswer: "To interact with the V8 JavaScript engine",
    explanation:
      "The `v8` module provides access to V8-specific features and can be used to interact with the V8 JavaScript engine.",
  },
  {
    question:
      "How can you implement a custom REPL (Read-Eval-Print Loop) in Node.js?",
    options: [
      "By using the `repl` module",
      "By creating a new `CustomREPL` class",
      "By using the `eval` function",
      "By overriding the `console` object",
    ],
    correctAnswer: "By using the `repl` module",
    explanation:
      "You can implement a custom REPL using the `repl` module in Node.js.",
  },
  {
    question:
      "Which module is used to manage and parse command-line arguments in Node.js?",
    options: ["yargs", "argparse", "commander", "argv"],
    correctAnswer: "yargs",
    explanation:
      "The `yargs` module is commonly used for managing and parsing command-line arguments in Node.js applications.",
  },
  {
    question: "How do you handle high memory usage in a Node.js application?",
    options: [
      "By using the `heapdump` module",
      "By increasing the memory limit with `--max-old-space-size`",
      "By optimizing code to reduce memory leaks",
      "By using `process.memoryUsage()`",
    ],
    correctAnswer: "By using the `heapdump` module",
    explanation:
      "The `heapdump` module can be used to take heap snapshots for analyzing high memory usage.",
  },
  {
    question:
      "What is the purpose of the `stream.pipeline()` method introduced in Node.js 10?",
    options: [
      "To simplify error handling and stream piping",
      "To create a new writable stream",
      "To manage multiple asynchronous operations",
      "To optimize file system performance",
    ],
    correctAnswer: "To simplify error handling and stream piping",
    explanation:
      "The `stream.pipeline()` method simplifies the process of managing and handling streams and their errors.",
  },
  {
    question: "Which Node.js module provides utilities for working with URLs?",
    options: ["url", "http", "net", "querystring"],
    correctAnswer: "url",
    explanation:
      "The `url` module provides utilities for working with URLs, including parsing and formatting.",
  },
  {
    question: "How do you create a new child process in Node.js?",
    options: [
      "Using `child_process.spawn()`",
      "Using `child_process.create()`",
      "Using `child_process.run()`",
      "Using `child_process.fork()`",
    ],
    correctAnswer: "Using `child_process.spawn()`",
    explanation:
      "The `child_process.spawn()` method is used to create a new child process in Node.js.",
  },
  {
    question: "What does the `util.promisify()` function do in Node.js?",
    options: [
      "Converts callback-based functions to return promises",
      "Formats strings for output",
      "Converts promises to callback-based functions",
      "Manages asynchronous operations",
    ],
    correctAnswer: "Converts callback-based functions to return promises",
    explanation:
      "The `util.promisify()` function converts functions that use callback-based asynchronous patterns into functions that return promises.",
  },
  {
    question:
      "How can you implement a custom middleware in a Node.js application?",
    options: [
      "By defining a function with `(req, res, next)` parameters",
      "By extending the `middleware` class",
      "By using the `middleware.create()` method",
      "By configuring the `app.use()` method",
    ],
    correctAnswer: "By defining a function with `(req, res, next)` parameters",
    explanation:
      "Custom middleware in Node.js applications can be implemented by defining a function with `(req, res, next)` parameters.",
  },
  {
    question: "What is the role of the `buffer` module in Node.js?",
    options: [
      "To handle binary data",
      "To manage HTTP headers",
      "To optimize performance",
      "To parse JSON data",
    ],
    correctAnswer: "To handle binary data",
    explanation:
      "The `buffer` module is used to handle and manipulate binary data in Node.js.",
  },
  {
    question:
      "Which method is used to retrieve the `current working directory` in Node.js?",
    options: [
      "process.cwd()",
      "path.getcwd()",
      "os.cwd()",
      "fs.currentDirectory()",
    ],
    correctAnswer: "process.cwd()",
    explanation:
      "The `process.cwd()` method retrieves the current working directory of the Node.js process.",
  },
  {
    question: "What is the purpose of the `async_hooks` module?",
    options: [
      "To track asynchronous resources and operations",
      "To manage HTTP sessions",
      "To handle file system events",
      "To create network connections",
    ],
    correctAnswer: "To track asynchronous resources and operations",
    explanation:
      "The `async_hooks` module is used to track and monitor asynchronous resources and operations in Node.js.",
  },
  {
    question: "How do you handle uncaught exceptions in a Node.js application?",
    options: [
      "By using `process.on('uncaughtException')`",
      "By using `try-catch` blocks",
      "By using the `domain` module",
      "By using `process.on('error')`",
    ],
    correctAnswer: "By using `process.on('uncaughtException')`",
    explanation:
      "To handle uncaught exceptions in Node.js, you can use `process.on('uncaughtException')`.",
  },
  {
    question:
      "Which module is used to provide high-level APIs for networking in Node.js?",
    options: ["net", "http", "https", "dgram"],
    correctAnswer: "net",
    explanation:
      "The `net` module provides high-level APIs for networking, including TCP and IPC.",
  },
  {
    question: "What is the purpose of the `worker_threads` module in Node.js?",
    options: [
      "To create and manage threads for parallel processing",
      "To handle network requests",
      "To manage file system operations",
      "To handle asynchronous I/O operations",
    ],
    correctAnswer: "To create and manage threads for parallel processing",
    explanation:
      "The `worker_threads` module enables the creation and management of threads for parallel processing in Node.js.",
  },
];
