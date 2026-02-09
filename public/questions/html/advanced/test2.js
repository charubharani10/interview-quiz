export const test2 = [
  {
    question:
      "What HTML5 element is used to include a web application manifest file?",
    options: [
      '<link rel="manifest" href="manifest.json">',
      '<manifest href="manifest.json">',
      '<application manifest="manifest.json">',
      '<script src="manifest.json">',
    ],
    correctAnswer: '<link rel="manifest" href="manifest.json">',
    explanation:
      "The <link> element with 'rel=manifest' is used to include a web application manifest file that defines the app's appearance and behavior.",
  },
  {
    question:
      "Which HTML5 API provides the ability to use hardware-accelerated animations and graphics?",
    options: ["Canvas API", "WebGL API", "SVG API", "WebRTC API"],
    correctAnswer: "WebGL API",
    explanation:
      "The WebGL API provides the ability to create 2D and 3D graphics using hardware acceleration.",
  },
  {
    question:
      "What attribute should be used to specify the height of a canvas element in HTML5?",
    options: ["height", "size", "dimension", "width"],
    correctAnswer: "height",
    explanation:
      "The 'height' attribute sets the height of the canvas element.",
  },
  {
    question: "How do you create a custom data attribute in HTML5?",
    options: ["data-*", "custom-*", "attr-*", "data-custom-*"],
    correctAnswer: "data-*",
    explanation:
      "Custom data attributes are created using the 'data-' prefix, followed by the attribute name (e.g., 'data-custom').",
  },
  {
    question:
      "Which HTML5 element is used to define a form control that lets the user select one or more options from a list?",
    options: ["<select>", "<option>", "<list>", "<dropdown>"],
    correctAnswer: "<select>",
    explanation:
      "The <select> element is used to create a dropdown list from which users can choose one or more options.",
  },
  {
    question:
      "What HTML5 attribute is used to specify the minimum value for an input field?",
    options: ["min", "lower", "value", "limit"],
    correctAnswer: "min",
    explanation:
      "The 'min' attribute specifies the minimum value that is allowed for an input field.",
  },
  {
    question:
      "Which HTML5 element is used to define a list of options in a drop-down list?",
    options: ["<option>", "<choice>", "<item>", "<select>"],
    correctAnswer: "<option>",
    explanation:
      "The <option> element defines individual options within a <select> drop-down list.",
  },
  {
    question: "How do you embed an SVG file in an HTML document?",
    options: [
      '<img src="image.svg">',
      '<svg src="image.svg"></svg>',
      '<object data="image.svg"></object>',
      '<embed src="image.svg">',
    ],
    correctAnswer: '<object data="image.svg"></object>',
    explanation:
      "The <object> element is used to embed an SVG file in an HTML document, allowing for better integration and control.",
  },
  {
    question:
      "What is the purpose of the autocomplete attribute in HTML5 forms?",
    options: [
      "To enable or disable the browser's autocomplete feature",
      "To automatically fill in form fields with user data",
      "To specify how form data should be submitted",
      "To specify the format of the form data",
    ],
    correctAnswer: "To enable or disable the browser's autocomplete feature",
    explanation:
      "The 'autocomplete' attribute controls whether the browser should automatically suggest values based on previous inputs.",
  },
  {
    question: "Which HTML5 element is used to define a document header?",
    options: ["<header>", "<head>", "<intro>", "<title>"],
    correctAnswer: "<header>",
    explanation:
      "The <header> element represents introductory content or a set of navigational links, typically containing the document's title or logo.",
  },
  {
    question: "How do you include a JavaScript file in an HTML document?",
    options: [
      '<script src="file.js"></script>',
      '<js src="file.js"></js>',
      '<script file="file.js"></script>',
      '<include src="file.js">',
    ],
    correctAnswer: '<script src="file.js"></script>',
    explanation:
      "The <script> element with the 'src' attribute is used to include an external JavaScript file in an HTML document.",
  },
  {
    question:
      "What HTML5 attribute specifies whether an input field should be auto-filled?",
    options: ["autocomplete", "auto-fill", "fill", "pre-fill"],
    correctAnswer: "autocomplete",
    explanation:
      "The 'autocomplete' attribute controls whether an input field should have its value automatically filled in by the browser.",
  },
  {
    question:
      "Which HTML5 element is used to define a footer for a document or section?",
    options: ["<footer>", "<foot>", "<end>", "<bottom>"],
    correctAnswer: "<footer>",
    explanation:
      "The <footer> element represents the footer for a section or the entire document, typically containing metadata or contact information.",
  },
  {
    question:
      "How do you specify the maximum number of characters allowed in an input field in HTML5?",
    options: ["maxlength", "size", "limit", "range"],
    correctAnswer: "maxlength",
    explanation:
      "The 'maxlength' attribute specifies the maximum number of characters allowed in an input field.",
  },
  {
    question: "Which HTML5 element is used to define a clickable button?",
    options: ["<button>", '<input type="button">', "<click>", "<action>"],
    correctAnswer: "<button>",
    explanation:
      "The <button> element is used to create a clickable button, which can be styled and programmed for various interactions.",
  },
  {
    question: "How do you specify the width of an image in HTML5?",
    options: ["width", "size", "height", "dimension"],
    correctAnswer: "width",
    explanation:
      "The 'width' attribute specifies the width of an image in pixels.",
  },
  {
    question:
      "Which HTML5 attribute specifies the text to be shown when an image cannot be loaded?",
    options: ["alt", "title", "desc", "fallback"],
    correctAnswer: "alt",
    explanation:
      "The 'alt' attribute provides alternative text for an image if it cannot be displayed.",
  },
  {
    question: "What is the purpose of the rel attribute in the <a> tag?",
    options: [
      "To specify the relationship between the current document and the linked resource",
      "To define the link's target",
      "To specify the link's text color",
      "To specify the link's download behavior",
    ],
    correctAnswer:
      "To specify the relationship between the current document and the linked resource",
    explanation:
      "The 'rel' attribute defines the relationship between the current document and the linked resource, such as 'noopener' or 'nofollow'.",
  },
  {
    question:
      "Which HTML5 element is used to define a section that includes a heading and content?",
    options: ["<section>", "<article>", "<div>", "<container>"],
    correctAnswer: "<section>",
    explanation:
      "The <section> element represents a generic section of a document, typically including a heading and content.",
  },
  {
    question:
      "How do you create a form that uses the GET method to submit data in HTML5?",
    options: [
      '<form action="url" method="get">',
      '<form action="url" method="post">',
      '<form action="url" type="get">',
      '<form url="url" method="get">',
    ],
    correctAnswer: '<form action="url" method="get">',
    explanation:
      "The 'method' attribute set to 'get' specifies that the form data should be sent using the GET method.",
  },
];
