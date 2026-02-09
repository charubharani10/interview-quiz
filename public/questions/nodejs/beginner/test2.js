export const test2 = [
  {
    question: "What does the `require` function do in Node.js?",
    options: [
      "Imports a module",
      "Creates a server",
      "Reads a file",
      "Executes a function",
    ],
    correctAnswer: "Imports a module",
    explanation:
      "The 'require' function imports modules in Node.js, making their functionality available to other files.",
  },
  {
    question: "Which method is used to create a server in Node.js?",
    options: [
      "http.createServer()",
      "server.create()",
      "http.server()",
      "http.create()",
    ],
    correctAnswer: "http.createServer()",
    explanation:
      "The 'http.createServer()' method is used to create a new HTTP server in Node.js.",
  },
  {
    question:
      "Which global object in Node.js holds the arguments passed to a script?",
    options: ["process.argv", "global.argv", "arguments", "script.argv"],
    correctAnswer: "process.argv",
    explanation:
      "The 'process.argv' array contains the command-line arguments passed to the Node.js script.",
  },
  {
    question: "What is the purpose of the `Buffer` class in Node.js?",
    options: [
      "To handle binary data",
      "To create a web server",
      "To interact with the file system",
      "To manage asynchronous tasks",
    ],
    correctAnswer: "To handle binary data",
    explanation:
      "The 'Buffer' class is used to handle binary data in Node.js, providing a way to work with raw data.",
  },
  {
    question:
      "How can you handle uncaught exceptions in a Node.js application?",
    options: [
      "Using `process.on('uncaughtException', callback)`",
      "Using `try-catch` blocks",
      "Using `setTimeout()`",
      "Using `setInterval()`",
    ],
    correctAnswer: "Using `process.on('uncaughtException', callback)`",
    explanation:
      "The 'process.on('uncaughtException', callback)' method allows you to handle exceptions that are not caught by other means.",
  },
  {
    question: "Which module in Node.js is used to work with file systems?",
    options: ["fs", "path", "http", "url"],
    correctAnswer: "fs",
    explanation:
      "The 'fs' (File System) module provides an API for interacting with the file system, including reading and writing files.",
  },
  {
    question: "What does `npm` stand for?",
    options: [
      "Node Package Manager",
      "Node Programming Module",
      "Network Package Manager",
      "Node Program Manager",
    ],
    correctAnswer: "Node Package Manager",
    explanation:
      "`npm` stands for Node Package Manager, which is used to manage dependencies in Node.js projects.",
  },
  {
    question:
      "Which method in Node.js can be used to read a file asynchronously?",
    options: [
      "fs.readFile()",
      "fs.readFileSync()",
      "fs.open()",
      "fs.openSync()",
    ],
    correctAnswer: "fs.readFile()",
    explanation:
      "The 'fs.readFile()' method reads a file asynchronously, allowing other operations to continue while the file is being read.",
  },
  {
    question: "What is the command to initialize a new Node.js project?",
    options: ["npm init", "node init", "npm start", "node start"],
    correctAnswer: "npm init",
    explanation:
      "The 'npm init' command initializes a new Node.js project and creates a 'package.json' file for managing project dependencies.",
  },
  {
    question: "Which of the following is a core module in Node.js?",
    options: ["http", "express", "mongoose", "nodemon"],
    correctAnswer: "http",
    explanation:
      "The 'http' module is a core module in Node.js used for creating HTTP servers and handling requests.",
  },
  {
    question: "Which of the following is used to handle events in Node.js?",
    options: [
      "EventEmitter",
      "EventDispatcher",
      "EventController",
      "EventManager",
    ],
    correctAnswer: "EventEmitter",
    explanation:
      "The 'EventEmitter' class in Node.js handles events and facilitates asynchronous event-driven programming.",
  },
  {
    question: "How do you install a package globally in Node.js?",
    options: [
      "npm install -g package-name",
      "npm install package-name",
      "npm global package-name",
      "npm install --global",
    ],
    correctAnswer: "npm install -g package-name",
    explanation:
      "The 'npm install -g package-name' command installs a package globally, making it available for use in any Node.js project.",
  },
  {
    question: "Which command is used to uninstall a package in Node.js?",
    options: [
      "npm uninstall package-name",
      "npm remove package-name",
      "npm delete package-name",
      "npm rm package-name",
    ],
    correctAnswer: "npm uninstall package-name",
    explanation:
      "The 'npm uninstall package-name' command removes a package from the project's 'node_modules' directory and updates 'package.json'.",
  },
  {
    question: "Which object in Node.js is used to work with the file system?",
    options: ["fs", "path", "os", "stream"],
    correctAnswer: "fs",
    explanation:
      "The 'fs' module is used for file system operations such as reading, writing, and creating files.",
  },
  {
    question: "What is the default scope of variables in Node.js modules?",
    options: ["Local to the module", "Global", "Public", "Private"],
    correctAnswer: "Local to the module",
    explanation:
      "Variables in Node.js modules are local to the module unless explicitly exported, helping to encapsulate functionality.",
  },
  {
    question: "Which function is used to read files asynchronously in Node.js?",
    options: ["fs.readFile", "fs.read", "fs.getFile", "fs.readAsync"],
    correctAnswer: "fs.readFile",
    explanation:
      "The 'fs.readFile' method reads the contents of a file asynchronously, allowing other tasks to proceed while the file is being read.",
  },
  {
    question: "What is the purpose of the `process` object in Node.js?",
    options: [
      "To provide information about the current Node.js process",
      "To handle HTTP requests",
      "To manage file system operations",
      "To create web servers",
    ],
    correctAnswer: "To provide information about the current Node.js process",
    explanation:
      "The 'process' object provides information and control over the Node.js process, including environment variables and command-line arguments.",
  },
  {
    question: "How do you require a module in Node.js?",
    options: [
      "const module = require('module-name');",
      "import module from 'module-name';",
      "const module = import('module-name');",
      "require('module-name');",
    ],
    correctAnswer: "const module = require('module-name');",
    explanation:
      "The 'require' function is used to import modules into your Node.js application, making their functionality available.",
  },
  {
    question: "What is the `exports` object used for in Node.js modules?",
    options: [
      "To expose functions and variables from a module",
      "To import functions and variables into a module",
      "To handle asynchronous operations",
      "To manage HTTP requests",
    ],
    correctAnswer: "To expose functions and variables from a module",
    explanation:
      "The `exports` object is used to expose functions and variables from a Node.js module so they can be used in other modules.",
  },
  {
    question: "Which of the following is NOT a built-in module in Node.js?",
    options: ["http", "fs", "express", "path"],
    correctAnswer: "express",
    explanation:
      "The 'express' module is not built-in; it's a third-party module used for building web applications and APIs in Node.js.",
  },
];
