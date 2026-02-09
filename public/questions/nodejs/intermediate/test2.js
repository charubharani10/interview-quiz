export const test2 = [
  {
    question: "What does the `npm` command `npm init` do?",
    options: [
      "Creates a new `package.json` file",
      "Installs a new package",
      "Initializes a new project",
      "Updates the npm version",
    ],
    correctAnswer: "Creates a new `package.json` file",
    explanation:
      "The `npm init` command creates a new `package.json` file for the project, which manages dependencies and metadata.",
  },
  {
    question: "What is the function of the `process.env` object in Node.js?",
    options: [
      "To access environment variables",
      "To manage HTTP requests",
      "To interact with the file system",
      "To create and manage child processes",
    ],
    correctAnswer: "To access environment variables",
    explanation:
      "The `process.env` object is used to access environment variables in a Node.js application.",
  },
  {
    question: "How do you handle HTTP GET requests in Express.js?",
    options: [
      "app.get('/path', handler)",
      "app.request('GET', '/path', handler)",
      "app.route('/path', handler)",
      "app.handle('GET', '/path', handler)",
    ],
    correctAnswer: "app.get('/path', handler)",
    explanation:
      "In Express.js, `app.get('/path', handler)` is used to define a route handler for HTTP GET requests to the specified path.",
  },
  {
    question: "Which method is used to append data to a file in Node.js?",
    options: [
      "fs.appendFile()",
      "fs.writeFile()",
      "fs.createWriteStream()",
      "fs.open()",
    ],
    correctAnswer: "fs.appendFile()",
    explanation:
      "The `fs.appendFile()` method is used to append data to a file.",
  },
  {
    question: "How do you create a new directory in Node.js?",
    options: [
      "fs.mkdir()",
      "fs.createDirectory()",
      "fs.newDir()",
      "fs.addDir()",
    ],
    correctAnswer: "fs.mkdir()",
    explanation: "The `fs.mkdir()` method is used to create a new directory.",
  },
  {
    question: "What is the role of the `os` module in Node.js?",
    options: [
      "Provides operating system-related utility methods",
      "Handles HTTP requests",
      "Interacts with the file system",
      "Manages child processes",
    ],
    correctAnswer: "Provides operating system-related utility methods",
    explanation:
      "The `os` module provides methods and properties to interact with the operating system.",
  },
  {
    question:
      "Which method is used to handle incoming data on a writable stream?",
    options: [
      "stream.write()",
      "stream.push()",
      "stream.append()",
      "stream.send()",
    ],
    correctAnswer: "stream.write()",
    explanation:
      "The `stream.write()` method is used to write data to a writable stream.",
  },
  {
    question:
      "How can you retrieve the request body in an Express.js route handler?",
    options: ["req.body", "req.data", "req.payload", "req.content"],
    correctAnswer: "req.body",
    explanation:
      "In Express.js, the `req.body` property is used to retrieve the request body.",
  },
  {
    question: "What is the purpose of `npm` scripts in `package.json`?",
    options: [
      "To define custom command-line scripts",
      "To manage project dependencies",
      "To specify the Node.js version",
      "To configure the test environment",
    ],
    correctAnswer: "To define custom command-line scripts",
    explanation:
      "`npm` scripts in `package.json` are used to define custom command-line scripts for various tasks.",
  },
  {
    question:
      "Which method is used to set headers in an HTTP response using the `http` module?",
    options: [
      "response.setHeader()",
      "response.addHeader()",
      "response.header()",
      "response.configureHeader()",
    ],
    correctAnswer: "response.setHeader()",
    explanation:
      "The `response.setHeader()` method is used to set headers in an HTTP response.",
  },
  {
    question:
      "How do you handle asynchronous operations using promises in Node.js?",
    options: [
      "Using `then()` and `catch()` methods",
      "Using `async` and `await` keywords",
      "Using `process.nextTick()`",
      "Using callbacks",
    ],
    correctAnswer: "Using `then()` and `catch()` methods",
    explanation:
      "Promises in Node.js are handled using `then()` and `catch()` methods to manage the result or error of asynchronous operations.",
  },
  {
    question: "Which method is used to end an HTTP response in Node.js?",
    options: [
      "response.end()",
      "response.close()",
      "response.complete()",
      "response.finish()",
    ],
    correctAnswer: "response.end()",
    explanation:
      "The `response.end()` method is used to end an HTTP response and send it to the client.",
  },
  {
    question: "What does the `Buffer` class in Node.js represent?",
    options: [
      "A raw binary data storage",
      "A text string",
      "A data stream",
      "A file system object",
    ],
    correctAnswer: "A raw binary data storage",
    explanation:
      "The `Buffer` class represents a raw binary data storage in Node.js, used for handling binary data.",
  },
  {
    question:
      "Which method is used to create a new instance of an Express.js application?",
    options: ["express()", "app.create()", "new express()", "express.app()"],
    correctAnswer: "express()",
    explanation:
      "The `express()` function is used to create a new instance of an Express.js application.",
  },
  {
    question: "What is the function of the `crypto` module in Node.js?",
    options: [
      "To provide cryptographic functionality",
      "To manage network connections",
      "To handle file encryption",
      "To generate random data",
    ],
    correctAnswer: "To provide cryptographic functionality",
    explanation:
      "The `crypto` module provides cryptographic functionality such as hashing, encryption, and decryption.",
  },
  {
    question: "How do you create a new HTTP server in Node.js?",
    options: [
      "http.createServer()",
      "http.newServer()",
      "http.server()",
      "http.initialize()",
    ],
    correctAnswer: "http.createServer()",
    explanation:
      "The `http.createServer()` method is used to create a new HTTP server in Node.js.",
  },
  {
    question:
      "Which method in the `path` module is used to join paths together?",
    options: ["path.join()", "path.combine()", "path.merge()", "path.concat()"],
    correctAnswer: "path.join()",
    explanation:
      "The `path.join()` method is used to join multiple path segments into a single path.",
  },
  {
    question: "How do you parse query strings in Express.js?",
    options: [
      "Using `req.query`",
      "Using `req.params`",
      "Using `req.body`",
      "Using `req.url`",
    ],
    correctAnswer: "Using `req.query`",
    explanation:
      "In Express.js, query strings are parsed and accessed using the `req.query` object.",
  },
  {
    question: "Which method is used to remove a file in Node.js?",
    options: ["fs.unlink()", "fs.remove()", "fs.delete()", "fs.erase()"],
    correctAnswer: "fs.unlink()",
    explanation:
      "The `fs.unlink()` method is used to remove (delete) a file from the file system.",
  },
  {
    question: "What does the `npm` command `npm install` do?",
    options: [
      "Installs dependencies listed in `package.json`",
      "Updates all packages",
      "Uninstalls a package",
      "Lists all installed packages",
    ],
    correctAnswer: "Installs dependencies listed in `package.json`",
    explanation:
      "The `npm install` command installs all the dependencies listed in the `package.json` file.",
  },
];
