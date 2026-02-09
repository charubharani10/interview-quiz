export const test3 = [
  {
    question: "How do you perform HTTP requests with Node.js?",
    options: [
      "Using the `http` or `https` modules",
      "Using the `request` module",
      "Using the `fetch` API",
      "Using the `axios` module",
    ],
    correctAnswer: "Using the `http` or `https` modules",
    explanation:
      "To perform HTTP requests in Node.js, you can use the built-in `http` or `https` modules. Modules like `request` or `axios` provide higher-level abstractions but are not built into Node.js.",
  },
  {
    question: "What is the role of the `libuv` library in Node.js?",
    options: [
      "To handle asynchronous I/O operations",
      "To manage HTTP requests",
      "To handle file system operations",
      "To provide a JavaScript runtime",
    ],
    correctAnswer: "To handle asynchronous I/O operations",
    explanation:
      "`libuv` is a library that Node.js uses to handle asynchronous I/O operations such as file and network operations. It provides the underlying event loop and other asynchronous features.",
  },
  {
    question: "How do you use `process.nextTick()` to defer execution?",
    options: [
      "By scheduling a callback to be executed on the next tick of the event loop",
      "By deferring execution until the next I/O event",
      "By scheduling a callback to be executed in the next event loop cycle",
      "By deferring execution until the next promise resolution",
    ],
    correctAnswer:
      "By scheduling a callback to be executed on the next tick of the event loop",
    explanation:
      "`process.nextTick()` schedules a callback to be executed in the next iteration of the event loop, allowing you to defer execution of code until after the current operation completes.",
  },
  {
    question: "Which method is used to close a writable stream in Node.js?",
    options: [
      "stream.end()",
      "stream.close()",
      "fs.close()",
      "stream.terminate()",
    ],
    correctAnswer: "stream.end()",
    explanation:
      "The `stream.end()` method is used to close a writable stream in Node.js, signaling that no more data will be written and allowing the stream to finish processing.",
  },
  {
    question: "How do you use `async/await` with error handling in Node.js?",
    options: [
      "By wrapping `await` expressions in `try-catch` blocks",
      "By using `.catch()` with promises",
      "By using `process.on('error')`",
      "By handling errors with `async_hooks`",
    ],
    correctAnswer: "By wrapping `await` expressions in `try-catch` blocks",
    explanation:
      "When using `async/await`, errors can be handled by wrapping `await` expressions in `try-catch` blocks, which allows you to catch and manage exceptions thrown during asynchronous operations.",
  },
  {
    question: "How do you create a custom HTTP server with the `http` module?",
    options: [
      "By using `http.createServer(callback)`",
      "By using `http.createServerInstance()`",
      "By using `http.newServer(callback)`",
      "By using `http.createServerConnection()`",
    ],
    correctAnswer: "By using `http.createServer(callback)`",
    explanation:
      "To create a custom HTTP server with the `http` module, you use `http.createServer(callback)`, where the callback function handles incoming requests.",
  },
  {
    question: "What is the purpose of the `zlib` module in Node.js?",
    options: [
      "To provide compression and decompression functionality",
      "To handle HTTP requests",
      "To manage file system operations",
      "To provide encryption utilities",
    ],
    correctAnswer: "To provide compression and decompression functionality",
    explanation:
      "The `zlib` module provides functionality for compressing and decompressing data using various compression algorithms in Node.js.",
  },
  {
    question: "How do you create a readable stream from a file in Node.js?",
    options: [
      "By using `fs.createReadStream()`",
      "By using `fs.readStream()`",
      "By using `fs.openStream()`",
      "By using `fs.createStream()`",
    ],
    correctAnswer: "By using `fs.createReadStream()`",
    explanation:
      "`fs.createReadStream()` is used to create a readable stream from a file, allowing you to read data from a file in a streaming manner.",
  },
  {
    question: "What is the use of the `http2` module in Node.js?",
    options: [
      "To provide HTTP/2 support",
      "To handle HTTP/1.1 requests",
      "To manage HTTPS connections",
      "To provide a high-level HTTP API",
    ],
    correctAnswer: "To provide HTTP/2 support",
    explanation:
      "The `http2` module provides support for HTTP/2 in Node.js, allowing you to create HTTP/2 servers and clients for improved performance and multiplexing.",
  },
  {
    question:
      "How do you use `process.on('SIGINT')` to handle termination signals?",
    options: [
      "By defining a callback function to handle the signal",
      "By using `process.on('exit')`",
      "By using `process.kill()`",
      "By defining a signal handler function",
    ],
    correctAnswer: "By defining a callback function to handle the signal",
    explanation:
      "To handle termination signals like `SIGINT`, you use `process.on('SIGINT')` to define a callback function that will execute when the signal is received, allowing you to clean up resources or perform other actions.",
  },
];
