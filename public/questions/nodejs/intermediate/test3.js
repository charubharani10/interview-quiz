export const test3 = [
  {
    question: "How do you handle middleware in Express.js?",
    options: [
      "Using `app.use()`",
      "Using `app.middleware()`",
      "Using `app.handle()`",
      "Using `app.include()`",
    ],
    correctAnswer: "Using `app.use()`",
    explanation:
      "In Express.js, middleware functions are added using the `app.use()` method.",
  },
  {
    question: "Which method is used to read a file synchronously in Node.js?",
    options: [
      "fs.readFileSync()",
      "fs.readSync()",
      "fs.read()",
      "fs.syncRead()",
    ],
    correctAnswer: "fs.readFileSync()",
    explanation:
      "The `fs.readFileSync()` method is used to read a file synchronously.",
  },
  {
    question: "What is the role of the `url` module in Node.js?",
    options: [
      "To parse and format URLs",
      "To handle HTTP requests",
      "To manage file paths",
      "To create network connections",
    ],
    correctAnswer: "To parse and format URLs",
    explanation:
      "The `url` module in Node.js is used to parse and format URLs.",
  },
  {
    question: "Which method in Node.js is used to handle file streams?",
    options: [
      "fs.createReadStream()",
      "fs.createStream()",
      "fs.openStream()",
      "fs.initStream()",
    ],
    correctAnswer: "fs.createReadStream()",
    explanation:
      "The `fs.createReadStream()` method is used to handle file streams for reading files.",
  },
  {
    question: "How do you access the request parameters in Express.js?",
    options: [
      "Using `req.params`",
      "Using `req.query`",
      "Using `req.body`",
      "Using `req.url`",
    ],
    correctAnswer: "Using `req.params`",
    explanation:
      "In Express.js, request parameters are accessed using the `req.params` object.",
  },
  {
    question: "What does the `npm` command `npm update` do?",
    options: [
      "Updates all packages to their latest versions",
      "Installs new packages",
      "Removes outdated packages",
      "Lists outdated packages",
    ],
    correctAnswer: "Updates all packages to their latest versions",
    explanation:
      "The `npm update` command updates all installed packages to their latest versions.",
  },
  {
    question: "Which method is used to handle POST requests in Express.js?",
    options: [
      "app.post('/path', handler)",
      "app.request('POST', '/path', handler)",
      "app.route('/path', handler)",
      "app.handle('POST', '/path', handler)",
    ],
    correctAnswer: "app.post('/path', handler)",
    explanation:
      "In Express.js, `app.post('/path', handler)` is used to handle POST requests.",
  },
  {
    question: "How do you access the response object in Express.js?",
    options: [
      "By defining a handler function with `res` parameter",
      "By using `req.response`",
      "By calling `response.get()`",
      "By using `response.access()`",
    ],
    correctAnswer: "By defining a handler function with `res` parameter",
    explanation:
      "In Express.js, the response object is accessed by defining a handler function with the `res` parameter.",
  },
  {
    question: "What is the function of the `domain` module in Node.js?",
    options: [
      "To handle multiple asynchronous operations",
      "To manage child processes",
      "To interact with the file system",
      "To create HTTP servers",
    ],
    correctAnswer: "To handle multiple asynchronous operations",
    explanation:
      "The `domain` module in Node.js is used to handle multiple asynchronous operations and manage errors.",
  },
  {
    question:
      "Which method is used to get the absolute path of a file in Node.js?",
    options: ["path.resolve()", "path.absolute()", "path.get()", "path.join()"],
    correctAnswer: "path.resolve()",
    explanation:
      "The `path.resolve()` method is used to get the absolute path of a file or directory.",
  },
];
