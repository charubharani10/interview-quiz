export const test1 = [
  {
    question: "What is Node.js primarily used for?",
    options: [
      "Client-side scripting",
      "Server-side scripting",
      "Creating desktop applications",
      "Designing databases",
    ],
    correctAnswer: "Server-side scripting",
    explanation:
      "Node.js is designed for server-side scripting, allowing developers to build scalable network applications.",
  },
  {
    question: "Which language is Node.js built on?",
    options: ["Python", "Java", "JavaScript", "Ruby"],
    correctAnswer: "JavaScript",
    explanation:
      "Node.js is built on JavaScript, enabling server-side scripting with the same language used for client-side development.",
  },
  {
    question:
      "Which of the following is a Node.js module for handling HTTP requests?",
    options: ["fs", "http", "url", "path"],
    correctAnswer: "http",
    explanation:
      "The 'http' module in Node.js is used to create and handle HTTP requests and responses.",
  },
  {
    question: "What is the default file extension for Node.js modules?",
    options: [".js", ".node", ".json", ".html"],
    correctAnswer: ".js",
    explanation:
      "Node.js modules typically use the '.js' file extension for JavaScript files.",
  },
  {
    question: "Which command is used to initialize a new Node.js project?",
    options: ["npm start", "npm init", "node install", "npm build"],
    correctAnswer: "npm init",
    explanation:
      "The 'npm init' command creates a new Node.js project by generating a 'package.json' file.",
  },
  {
    question: "What is the default package manager for Node.js?",
    options: ["npm", "yarn", "pip", "gradle"],
    correctAnswer: "npm",
    explanation:
      "npm (Node Package Manager) is the default package manager for managing dependencies in Node.js projects.",
  },
  {
    question: "Which method is used to read a file in Node.js?",
    options: ["readFileSync", "fs.readFileSync", "fileRead", "fileOpen"],
    correctAnswer: "fs.readFileSync",
    explanation:
      "The 'fs.readFileSync()' method reads the contents of a file synchronously in Node.js.",
  },
  {
    question: "Which of the following is a built-in Node.js module?",
    options: ["express", "http", "mongoose", "lodash"],
    correctAnswer: "http",
    explanation:
      "The 'http' module is a built-in Node.js module used for creating HTTP servers and handling requests.",
  },
  {
    question: "How do you install a Node.js module locally?",
    options: [
      "npm install -g <module_name>",
      "npm install <module_name>",
      "node install <module_name>",
      "npm build <module_name>",
    ],
    correctAnswer: "npm install <module_name>",
    explanation:
      "The 'npm install <module_name>' command installs a Node.js module locally in the project's 'node_modules' directory.",
  },
  {
    question: "Which of the following commands starts a Node.js REPL session?",
    options: ["node start", "node", "npm start", "npm init"],
    correctAnswer: "node",
    explanation:
      "The 'node' command starts a Node.js REPL (Read-Eval-Print Loop) session for interactive execution of JavaScript code.",
  },
  {
    question: "What does the `path` module in Node.js provide?",
    options: [
      "A way to handle file and directory paths",
      "A way to create HTTP servers",
      "A way to perform cryptographic operations",
      "A way to interact with the file system",
    ],
    correctAnswer: "A way to handle file and directory paths",
    explanation:
      "The 'path' module provides utilities for working with file and directory paths in Node.js.",
  },
  {
    question: "Which of the following is true about Node.js?",
    options: [
      "It is single-threaded",
      "It is a browser-side scripting language",
      "It requires a Java runtime environment",
      "It is only used for front-end development",
    ],
    correctAnswer: "It is single-threaded",
    explanation:
      "Node.js operates on a single-threaded, event-driven architecture, making it efficient for handling concurrent operations.",
  },
  {
    question: "How do you create a new directory using Node.js?",
    options: [
      "fs.mkdirSync()",
      "fs.createDirectory()",
      "fs.newDir()",
      "fs.createDir()",
    ],
    correctAnswer: "fs.mkdirSync()",
    explanation:
      "The 'fs.mkdirSync()' method is used to create a new directory synchronously in Node.js.",
  },
  {
    question: "Which method is used to append data to a file in Node.js?",
    options: [
      "fs.appendFileSync()",
      "fs.addFile()",
      "fs.pushData()",
      "fs.writeToFile()",
    ],
    correctAnswer: "fs.appendFileSync()",
    explanation:
      "The 'fs.appendFileSync()' method appends data to a file synchronously, creating the file if it doesn't exist.",
  },
  {
    question:
      "Which command is used to check the installed version of Node.js?",
    options: ["node --version", "node --v", "npm version", "node version"],
    correctAnswer: "node --version",
    explanation:
      "The 'node --version' command displays the installed version of Node.js.",
  },
  {
    question:
      "Which object in Node.js is used to interact with the file system?",
    options: ["fs", "http", "path", "stream"],
    correctAnswer: "fs",
    explanation:
      "The 'fs' (File System) module is used for interacting with the file system, including reading and writing files.",
  },
  {
    question: "How do you export a function from a module in Node.js?",
    options: [
      "module.exports = functionName",
      "export functionName",
      "exports.functionName = functionName",
      "require(functionName)",
    ],
    correctAnswer: "module.exports = functionName",
    explanation:
      "In Node.js, 'module.exports = functionName' is used to export a function from a module so it can be imported elsewhere.",
  },
  {
    question:
      "Which method is used to read the contents of a file asynchronously in Node.js?",
    options: [
      "fs.readFile()",
      "fs.read()",
      "fs.readFileSync()",
      "fs.readSync()",
    ],
    correctAnswer: "fs.readFile()",
    explanation:
      "The 'fs.readFile()' method reads the contents of a file asynchronously, allowing other operations to continue while the file is being read.",
  },
  {
    question: "In Node.js, what does the `EventEmitter` do?",
    options: [
      "Handles events asynchronously",
      "Creates child processes",
      "Reads and writes files",
      "Establishes HTTP connections",
    ],
    correctAnswer: "Handles events asynchronously",
    explanation:
      "The `EventEmitter` class in Node.js handles events and allows asynchronous event-driven programming.",
  },
  {
    question:
      "Which command is used to initialize a new Node.js project with a `package.json` file?",
    options: ["npm init", "npm start", "npm install", "npm create"],
    correctAnswer: "npm init",
    explanation:
      "The 'npm init' command initializes a new Node.js project and creates a 'package.json' file to manage project dependencies.",
  },
];
