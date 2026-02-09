export const test1 = [
  {
    question: "What is the purpose of the `cluster` module in Node.js?",
    options: [
      "To manage child processes",
      "To create network clusters",
      "To handle file operations",
      "To manage asynchronous operations",
    ],
    correctAnswer: "To manage child processes",
    explanation:
      "The 'cluster' module allows you to create multiple Node.js processes that share the same server port, helping to improve performance and reliability.",
  },
  {
    question:
      "Which method of the `http` module is used to create an HTTP server?",
    options: [
      "http.createServer()",
      "http.initServer()",
      "http.startServer()",
      "http.newServer()",
    ],
    correctAnswer: "http.createServer()",
    explanation:
      "The 'http.createServer()' method is used to create a new HTTP server in Node.js.",
  },
  {
    question: "How do you handle uncaught exceptions in Node.js?",
    options: [
      "Using the `process.on('uncaughtException', callback)` method",
      "Using `try-catch` blocks",
      "Using the `domain` module",
      "Using the `error` event on streams",
    ],
    correctAnswer:
      "Using the `process.on('uncaughtException', callback)` method",
    explanation:
      "To handle uncaught exceptions, you use `process.on('uncaughtException', callback)` to catch errors that were not handled elsewhere.",
  },
  {
    question: "What is the purpose of the `dotenv` module in Node.js?",
    options: [
      "To manage environment variables",
      "To create database connections",
      "To handle HTTP requests",
      "To log application errors",
    ],
    correctAnswer: "To manage environment variables",
    explanation:
      "The `dotenv` module is used to load environment variables from a `.env` file into `process.env`.",
  },
  {
    question:
      "Which function is used to write to a file asynchronously in Node.js?",
    options: [
      "fs.writeFile()",
      "fs.appendFile()",
      "fs.createWriteStream()",
      "fs.open()",
    ],
    correctAnswer: "fs.writeFile()",
    explanation:
      "The `fs.writeFile()` function is used to write data to a file asynchronously.",
  },
  {
    question:
      "Which of the following modules is used to handle streams in Node.js?",
    options: ["stream", "data", "buffer", "event"],
    correctAnswer: "stream",
    explanation: "The 'stream' module provides APIs to handle streaming data.",
  },
  {
    question: "How do you install a Node.js package globally?",
    options: [
      "npm install -g package-name",
      "npm install package-name -g",
      "npm global install package-name",
      "npm add package-name --global",
    ],
    correctAnswer: "npm install -g package-name",
    explanation:
      "The 'npm install -g' command is used to install a package globally on your system.",
  },
  {
    question: "What is the default port number for the HTTP server in Node.js?",
    options: ["80", "8080", "3000", "5000"],
    correctAnswer: "3000",
    explanation:
      "Port 3000 is commonly used as the default port for Node.js HTTP servers.",
  },
  {
    question:
      "Which method is used to parse JSON data from an HTTP request body?",
    options: [
      "bodyParser.json()",
      "jsonParser.parse()",
      "request.body.json()",
      "parse.json()",
    ],
    correctAnswer: "bodyParser.json()",
    explanation:
      "The 'bodyParser.json()' middleware is used to parse JSON formatted request bodies.",
  },
  {
    question:
      "Which of the following is a core module in Node.js for file system operations?",
    options: ["fs", "http", "path", "util"],
    correctAnswer: "fs",
    explanation:
      "The 'fs' module provides file system-related functionality, including reading and writing files.",
  },
  {
    question: "How do you import a module in Node.js?",
    options: [
      "const module = require('module');",
      "import module from 'module';",
      "const module = import('module');",
      "require.import('module');",
    ],
    correctAnswer: "const module = require('module');",
    explanation:
      "The 'require' function is used to include and import modules into a Node.js application.",
  },
  {
    question:
      "What is the role of the `package.json` file in a Node.js project?",
    options: [
      "To manage project dependencies and metadata",
      "To configure the Node.js runtime environment",
      "To define the project's database schema",
      "To store server configuration details",
    ],
    correctAnswer: "To manage project dependencies and metadata",
    explanation:
      "The `package.json` file contains metadata about the project, including dependencies, scripts, and configuration.",
  },
  {
    question:
      "Which function in Node.js is used to asynchronously read a file?",
    options: ["fs.readFile()", "fs.open()", "fs.read()", "fs.readFileSync()"],
    correctAnswer: "fs.readFile()",
    explanation:
      "The 'fs.readFile()' function is used to read the contents of a file asynchronously.",
  },
  {
    question: "What is the purpose of the `EventEmitter` class in Node.js?",
    options: [
      "To handle asynchronous events",
      "To manage HTTP requests",
      "To interact with the file system",
      "To parse JSON data",
    ],
    correctAnswer: "To handle asynchronous events",
    explanation:
      "The `EventEmitter` class is used to handle and manage asynchronous events in Node.js.",
  },
  {
    question: "Which method is used to close a writable stream in Node.js?",
    options: [
      "stream.end()",
      "stream.close()",
      "stream.finish()",
      "stream.stop()",
    ],
    correctAnswer: "stream.end()",
    explanation:
      "The 'stream.end()' method is used to close a writable stream and signal that no more data will be written.",
  },
  {
    question: "How do you handle errors in asynchronous functions in Node.js?",
    options: [
      "Using callbacks with error handling",
      "Using `try-catch` blocks directly",
      "Using synchronous functions only",
      "Using `Promise` rejection handlers",
    ],
    correctAnswer: "Using callbacks with error handling",
    explanation:
      "In asynchronous functions, errors can be handled using callbacks with error handling, `Promise` rejection handlers, or other methods depending on the async pattern used.",
  },
  {
    question: "Which Node.js module is used to create and manage HTTP servers?",
    options: ["http", "net", "url", "https"],
    correctAnswer: "http",
    explanation:
      "The 'http' module is used to create and manage HTTP servers in Node.js.",
  },
  {
    question:
      "What is the default behavior of `fs.readFile()` if no encoding is specified?",
    options: [
      "Buffer object is returned",
      "String is returned",
      "Empty string is returned",
      "Error is thrown",
    ],
    correctAnswer: "Buffer object is returned",
    explanation:
      "If no encoding is specified, `fs.readFile()` returns the file data as a Buffer object.",
  },
  {
    question: "How do you define a route handler in Express.js?",
    options: [
      "app.get('/path', handler)",
      "app.route('/path', handler)",
      "app.handle('/path', handler)",
      "app.add('/path', handler)",
    ],
    correctAnswer: "app.get('/path', handler)",
    explanation:
      "In Express.js, `app.get('/path', handler)` is used to define a route handler for GET requests to the specified path.",
  },
  {
    question:
      "Which method is used to read the contents of a directory in Node.js?",
    options: ["fs.readdir()", "fs.list()", "fs.readDirectory()", "fs.dir()"],
    correctAnswer: "fs.readdir()",
    explanation:
      "The 'fs.readdir()' method is used to read the contents of a directory.",
  },
];
