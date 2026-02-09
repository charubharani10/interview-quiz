export const test2 = [
  {
    question:
      "How do you use `npm` to execute scripts defined in `package.json`?",
    options: [
      "Using `npm run script-name`",
      "Using `npm exec script-name`",
      "Using `npm start script-name`",
      "Using `npm script script-name`",
    ],
    correctAnswer: "Using `npm run script-name`",
    explanation:
      "To execute scripts defined in `package.json`, use `npm run script-name`.",
  },
  {
    question:
      "Which Node.js method allows you to set the maximum memory limit for the process?",
    options: [
      "--max-old-space-size",
      "--memory-limit",
      "--max-memory",
      "--memory-size",
    ],
    correctAnswer: "--max-old-space-size",
    explanation:
      "The `--max-old-space-size` flag is used to specify the maximum heap size of the V8 JavaScript engine in Node.js, allowing you to control the memory limit of your Node.js process.",
  },
  {
    question:
      "How can you handle different types of HTTP methods in Express.js?",
    options: [
      "Using `app.get()`, `app.post()`, `app.put()`, `app.delete()`",
      "Using `app.method()`",
      "Using `app.route()`",
      "Using `app.handle()`",
    ],
    correctAnswer:
      "Using `app.get()`, `app.post()`, `app.put()`, `app.delete()`",
    explanation:
      "In Express.js, methods like `app.get()`, `app.post()`, `app.put()`, and `app.delete()` are used to handle different types of HTTP requests corresponding to GET, POST, PUT, and DELETE methods.",
  },
  {
    question: "What does the `process.hrtime()` function return?",
    options: [
      "A high-resolution real time",
      "The current system time",
      "The uptime of the process",
      "The time since the last operation",
    ],
    correctAnswer: "A high-resolution real time",
    explanation:
      "`process.hrtime()` returns a high-resolution time in a `[seconds, nanoseconds]` tuple, providing precise measurement of elapsed time.",
  },
  {
    question:
      "Which module provides APIs for creating a TCP server in Node.js?",
    options: ["net", "tcp", "http", "dgram"],
    correctAnswer: "net",
    explanation:
      "The `net` module in Node.js provides an API for creating and working with TCP or IPC servers and clients.",
  },
  {
    question: "How do you set up a reverse proxy using Node.js?",
    options: [
      "Using the `http-proxy` module",
      "Using the `proxy` module",
      "Using the `http` module",
      "Using the `url` module",
    ],
    correctAnswer: "Using the `http-proxy` module",
    explanation:
      "The `http-proxy` module is commonly used in Node.js to set up reverse proxies, forwarding requests to different backend servers.",
  },
  {
    question: "What is the use of the `os` module in Node.js?",
    options: [
      "To provide operating system-related utility methods",
      "To manage network operations",
      "To handle file system events",
      "To provide high-level APIs for HTTP",
    ],
    correctAnswer: "To provide operating system-related utility methods",
    explanation:
      "The `os` module in Node.js provides methods and properties for interacting with the operating system, such as fetching system information and managing system resources.",
  },
  {
    question: "How do you use `child_process.fork()` in Node.js?",
    options: [
      "To create a new child process with its own V8 instance",
      "To create a new HTTP server",
      "To manage file system operations",
      "To handle asynchronous operations",
    ],
    correctAnswer: "To create a new child process with its own V8 instance",
    explanation:
      "`child_process.fork()` is used to create a new Node.js process with its own V8 instance, allowing for parallel processing.",
  },
  {
    question:
      "Which method is used to create a new readable stream in Node.js?",
    options: [
      "stream.Readable()",
      "stream.createReadStream()",
      "fs.createReadStream()",
      "stream.newStream()",
    ],
    correctAnswer: "stream.Readable()",
    explanation:
      "The `stream.Readable()` constructor creates a new readable stream instance in Node.js, which can be used to implement custom readable streams.",
  },
  {
    question: "What does the `process.memoryUsage()` function return?",
    options: [
      "An object describing the memory usage of the process",
      "The total memory available to the process",
      "The memory usage of the operating system",
      "The memory usage of the system's heap",
    ],
    correctAnswer: "An object describing the memory usage of the process",
    explanation:
      "`process.memoryUsage()` returns an object with information about the memory usage of the Node.js process, including heap and external memory usage.",
  },
  {
    question: "How do you access environment variables in Node.js?",
    options: [
      "Using `process.env`",
      "Using `os.env`",
      "Using `config.get()`",
      "Using `dotenv.config()`",
    ],
    correctAnswer: "Using `process.env`",
    explanation:
      "Environment variables in Node.js are accessed via the `process.env` object, which provides access to system environment variables.",
  },
  {
    question: "Which method is used to generate random bytes in Node.js?",
    options: [
      "crypto.randomBytes()",
      "crypto.generateBytes()",
      "crypto.randomData()",
      "crypto.createRandom()",
    ],
    correctAnswer: "crypto.randomBytes()",
    explanation:
      "`crypto.randomBytes()` is used to generate cryptographically strong pseudo-random data in Node.js.",
  },
  {
    question: "What is the purpose of the `assert` module in Node.js?",
    options: [
      "To perform assertion testing",
      "To manage network requests",
      "To handle file operations",
      "To provide encryption utilities",
    ],
    correctAnswer: "To perform assertion testing",
    explanation:
      "The `assert` module provides a set of assertion functions used for testing in Node.js, allowing developers to write test cases and verify code behavior.",
  },
  {
    question: "How do you handle asynchronous errors in `async` functions?",
    options: [
      "Using `try-catch` blocks",
      "Using `async_hooks`",
      "Using `process.on('error')`",
      "Using `Promise.catch()`",
    ],
    correctAnswer: "Using `try-catch` blocks",
    explanation:
      "Errors in `async` functions are handled using `try-catch` blocks, allowing you to catch and manage exceptions that occur during asynchronous operations.",
  },
  {
    question: "Which method is used to bind an HTTP server to a specific port?",
    options: [
      "server.listen()",
      "server.bind()",
      "server.open()",
      "server.start()",
    ],
    correctAnswer: "server.listen()",
    explanation:
      "The `server.listen()` method binds an HTTP server to a specific port and starts listening for incoming connections.",
  },
  {
    question: "How do you use the `http` module to create an HTTPS server?",
    options: [
      "By using `https.createServer()`",
      "By using `http.createServer()`",
      "By using `http.createSecureServer()`",
      "By using `https.startServer()`",
    ],
    correctAnswer: "By using `https.createServer()`",
    explanation:
      "The `https.createServer()` method is used to create an HTTPS server in Node.js, providing secure HTTP connections.",
  },
  {
    question: "What is the purpose of the `domain` module in Node.js?",
    options: [
      "To manage error handling for asynchronous operations",
      "To handle file system operations",
      "To manage network connections",
      "To provide a high-level HTTP API",
    ],
    correctAnswer: "To manage error handling for asynchronous operations",
    explanation:
      "The `domain` module is used to handle errors in asynchronous operations, allowing you to manage and group related I/O operations.",
  },
  {
    question:
      "Which method in the `stream` module is used to create a writable stream?",
    options: [
      "stream.Writable()",
      "stream.createWritable()",
      "fs.createWriteStream()",
      "stream.newWritable()",
    ],
    correctAnswer: "stream.Writable()",
    explanation:
      "The `stream.Writable()` constructor creates a new writable stream instance in Node.js, which can be used to implement custom writable streams.",
  },
  {
    question: "How do you handle unhandled promise rejections in Node.js?",
    options: [
      "Using `process.on('unhandledRejection')`",
      "Using `process.on('error')`",
      "Using `Promise.catch()`",
      "Using `try-catch` blocks",
    ],
    correctAnswer: "Using `process.on('unhandledRejection')`",
    explanation:
      "To handle unhandled promise rejections in Node.js, use `process.on('unhandledRejection')` to capture and manage promise rejections that are not explicitly handled.",
  },
  {
    question: "What does the `path.dirname()` method do in Node.js?",
    options: [
      "Returns the directory name of a path",
      "Returns the base name of a path",
      "Returns the file extension of a path",
      "Returns the absolute path of a file",
    ],
    correctAnswer: "Returns the directory name of a path",
    explanation:
      "The `path.dirname()` method returns the directory name of a given file path, effectively stripping off the file name and returning the path to the directory.",
  },
];
