export const test6 = [
  {
    question:
      "What HTML attribute is used to specify the language of the content?",
    options: ["lang", "locale", "language", "code"],
    correctAnswer: "lang",
    explanation:
      "The 'lang' attribute specifies the language of the content in an HTML document.",
  },
  {
    question: "Which HTML element defines a container for external content?",
    options: ["<iframe>", "<embed>", "<object>", "<frame>"],
    correctAnswer: "<iframe>",
    explanation:
      "The <iframe> element is used to embed external content, such as another webpage, within the current document.",
  },
  {
    question: "What does the async attribute do in a <script> tag?",
    options: [
      "Loads the script asynchronously",
      "Executes the script before the page loads",
      "Defers the script execution until the page is fully loaded",
      "Runs the script in a separate thread",
    ],
    correctAnswer: "Loads the script asynchronously",
    explanation:
      "The 'async' attribute allows a script to be executed asynchronously as soon as it is available, without blocking the page load.",
  },
  {
    question: "How do you create a server-side image map?",
    options: [
      "Using the <map> and <area> elements",
      "Using the <img> and <map> elements",
      "Using the <image> and <area> elements",
      "Using the <img> and <link> elements",
    ],
    correctAnswer: "Using the <map> and <area> elements",
    explanation:
      "Server-side image maps use the <map> and <area> elements to define clickable areas on an image that link to different URLs.",
  },
  {
    question: "Which HTML5 attribute allows for custom data storage?",
    options: ["data-*", "custom-data", "store", "local-data"],
    correctAnswer: "data-*",
    explanation:
      "HTML5 introduced 'data-*' attributes to store custom data on HTML elements.",
  },
  {
    question: "What does the defer attribute do in a <script> tag?",
    options: [
      "Defers the script execution until the page is fully loaded",
      "Loads the script asynchronously",
      "Executes the script immediately",
      "Makes the script run in a background thread",
    ],
    correctAnswer: "Defers the script execution until the page is fully loaded",
    explanation:
      "The 'defer' attribute ensures that a script is executed after the document has been completely parsed.",
  },
  {
    question: "Which HTML element is used to include a video in a webpage?",
    options: ["<video>", "<movie>", "<media>", "<film>"],
    correctAnswer: "<video>",
    explanation:
      "The <video> element is used to embed video content in a webpage.",
  },
  {
    question: "How do you create an HTML form that sends data in JSON format?",
    options: [
      "Use JavaScript to serialize the form data to JSON before sending",
      'Use <form method="json">',
      'Use <form enctype="application/json">',
      'Use <input type="json">',
    ],
    correctAnswer:
      "Use JavaScript to serialize the form data to JSON before sending",
    explanation:
      "To send form data as JSON, you need to use JavaScript to convert the data into JSON format before submitting the form.",
  },
  {
    question:
      "What HTML element is used to define a reusable content template?",
    options: ["<template>", "<reuse>", "<content>", "<fragment>"],
    correctAnswer: "<template>",
    explanation:
      "The <template> element defines a block of HTML that can be cloned and reused elsewhere in the document.",
  },
  {
    question: "Which HTML attribute specifies the URL of a linked favicon?",
    options: [
      'rel="icon"',
      'href="favicon.ico"',
      'link="icon"',
      'icon="favicon.ico"',
    ],
    correctAnswer: 'rel="icon"',
    explanation:
      "The 'rel' attribute in the <link> element with the value 'icon' specifies the URL of the favicon for the document.",
  },
  {
    question: "What is the purpose of the <noscript> element in HTML?",
    options: [
      "Provides content to be displayed if JavaScript is not supported",
      "Hides content from JavaScript",
      "Specifies the default script to execute",
      "Encodes JavaScript code",
    ],
    correctAnswer:
      "Provides content to be displayed if JavaScript is not supported",
    explanation:
      "The <noscript> element provides alternative content to be displayed if JavaScript is disabled or not supported in the browser.",
  },
  {
    question:
      "Which HTML5 element is used to define a navigation link section?",
    options: ["<nav>", "<links>", "<menu>", "<navigation>"],
    correctAnswer: "<nav>",
    explanation:
      "The <nav> element defines a section of a webpage for navigation links.",
  },
  {
    question: "How do you embed a Google Map in a webpage?",
    options: [
      "Using the <iframe> element",
      "Using the <map> element",
      "Using the <embed> element",
      "Using the <object> element",
    ],
    correctAnswer: "Using the <iframe> element",
    explanation:
      "The <iframe> element is commonly used to embed Google Maps and other external content.",
  },
  {
    question:
      "What attribute is used to specify the URL of a linked JavaScript file?",
    options: ["src", "href", "link", "url"],
    correctAnswer: "src",
    explanation:
      "The 'src' attribute in the <script> element specifies the URL of an external JavaScript file.",
  },
  {
    question:
      "Which HTML5 element represents the main content of the document?",
    options: ["<main>", "<content>", "<body>", "<section>"],
    correctAnswer: "<main>",
    explanation:
      "The <main> element represents the dominant content of the <body> of the document.",
  },
  {
    question:
      "How do you specify that an element should be focusable but not visible?",
    options: [
      'tabindex="-1"',
      "hidden",
      'style="display:none"',
      'style="visibility:hidden"',
    ],
    correctAnswer: 'tabindex="-1"',
    explanation:
      "Setting 'tabindex' to '-1' makes an element focusable programmatically but not through keyboard navigation, while 'hidden', 'display:none', and 'visibility:hidden' affect visibility.",
  },
  {
    question: "What does the sandbox attribute do for an <iframe>?",
    options: [
      "Restricts the iframe's permissions and capabilities",
      "Enables cross-origin scripting",
      "Makes the iframe always visible",
      "Allows the iframe to load external resources",
    ],
    correctAnswer: "Restricts the iframe's permissions and capabilities",
    explanation:
      "The 'sandbox' attribute adds restrictions to the content in an <iframe>, such as disabling forms and scripts.",
  },
  {
    question:
      "Which HTML5 element defines a section of related content or functionality?",
    options: ["<aside>", "<section>", "<article>", "<block>"],
    correctAnswer: "<aside>",
    explanation:
      "The <aside> element represents content that is tangentially related to the content around it, often used for sidebars.",
  },
  {
    question:
      "What attribute is used to specify a fallback image in an <img> tag?",
    options: ["srcset", "fallback", "src", "alt"],
    correctAnswer: "srcset",
    explanation:
      "The 'srcset' attribute in the <img> element provides a set of images to be used based on the viewport size and resolution, offering fallback options.",
  },
  {
    question: "How do you include an external SVG file in an HTML document?",
    options: [
      '<img src="file.svg">',
      '<svg src="file.svg">',
      '<object data="file.svg">',
      '<embed src="file.svg">',
    ],
    correctAnswer: '<img src="file.svg">',
    explanation:
      "The <img> element with the 'src' attribute can be used to include an external SVG file in an HTML document.",
  },
];
