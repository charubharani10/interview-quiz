export const test3 = [
  {
    question: "How can you create a server in Node.js?",
    options: [
      "Using `http.createServer()`",
      "Using `server.create()`",
      "Using `http.create()`",
      "Using `server.createServer()`",
    ],
    correctAnswer: "Using `http.createServer()`",
    explanation:
      "The 'http.createServer()' method is used to create an HTTP server in Node.js.",
  },
  {
    question:
      "Which method of the `http` module is used to send a response to the client?",
    options: [
      "response.send()",
      "response.write()",
      "response.end()",
      "response.sendResponse()",
    ],
    correctAnswer: "response.end()",
    explanation:
      "The 'response.end()' method is used to end the response process and send the response to the client.",
  },
  {
    question: "What is the purpose of the `buffer` module in Node.js?",
    options: [
      "To handle binary data",
      "To manage HTTP requests",
      "To handle file operations",
      "To create server instances",
    ],
    correctAnswer: "To handle binary data",
    explanation:
      "The 'buffer' module provides a way to handle binary data directly in Node.js applications.",
  },
  {
    question: "Which method is used to parse JSON data in Node.js?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.read()",
      "JSON.convert()",
    ],
    correctAnswer: "JSON.parse()",
    explanation:
      "The 'JSON.parse()' method is used to parse JSON data and convert it into a JavaScript object.",
  },
  {
    question: "What does `npm` stand for?",
    options: [
      "Node Package Manager",
      "Node Project Manager",
      "New Package Manager",
      "Node Package Module",
    ],
    correctAnswer: "Node Package Manager",
    explanation:
      "`npm` stands for Node Package Manager, which is used to manage and install packages in Node.js projects.",
  },
  {
    question: "What command is used to install a package globally with npm?",
    options: ["npm install -g", "npm add -g", "npm get -g", "npm fetch -g"],
    correctAnswer: "npm install -g",
    explanation:
      "The 'npm install -g' command installs a package globally, making it available across your system.",
  },
  {
    question: "Which method is used to read a file asynchronously in Node.js?",
    options: ["fs.readFile()", "fs.read()", "fs.openFile()", "fs.getFile()"],
    correctAnswer: "fs.readFile()",
    explanation:
      "The 'fs.readFile()' method is used to read the contents of a file asynchronously.",
  },
  {
    question: "How can you handle errors in asynchronous code in Node.js?",
    options: [
      "Using try-catch blocks",
      "Using callbacks",
      "Using the `catch` method of Promises",
      "Using all of the above",
    ],
    correctAnswer: "Using all of the above",
    explanation:
      "Errors in asynchronous code can be handled using try-catch blocks for synchronous code, callbacks for older asynchronous patterns, and the `catch` method of Promises for modern asynchronous patterns.",
  },
  {
    question: "Which module in Node.js allows you to work with streams?",
    options: ["stream", "buffer", "http", "fs"],
    correctAnswer: "stream",
    explanation:
      "The 'stream' module provides an API for working with streaming data in Node.js, such as reading or writing data in chunks.",
  },
  {
    question: "What is the purpose of the `require` function in Node.js?",
    options: [
      "To include modules in your application",
      "To create new modules",
      "To delete modules",
      "To update modules",
    ],
    correctAnswer: "To include modules in your application",
    explanation:
      "The 'require' function is used to include and import modules into your Node.js application.",
  },
];
