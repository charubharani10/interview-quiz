export const test10 = [
  {
    question: "What does the media attribute specify in a <link> element?",
    options: [
      "The media type for which the linked resource is intended",
      "The source of the linked resource",
      "The style of the linked resource",
      "The display mode of the linked resource",
    ],
    correctAnswer: "The media type for which the linked resource is intended",
    explanation:
      "The 'media' attribute specifies the media type (e.g., 'screen', 'print') for which the linked stylesheet is applicable.",
  },
  {
    question: "How do you include a dynamic script in an HTML document?",
    options: [
      "Use JavaScript to dynamically create and insert the <script> tag",
      "Use the dynamic attribute in the <script> tag",
      "Use the src attribute to specify the dynamic script",
      "Use the async attribute in the <script> tag",
    ],
    correctAnswer:
      "Use JavaScript to dynamically create and insert the <script> tag",
    explanation:
      "JavaScript can be used to dynamically create and insert a <script> tag into the document, allowing for scripts to be loaded and executed based on certain conditions.",
  },
  {
    question:
      "Which HTML5 element defines a part of a document that contains a set of related content?",
    options: ["<section>", "<article>", "<div>", "<group>"],
    correctAnswer: "<section>",
    explanation:
      "The <section> element is used to define a thematic grouping of content, often with a heading, that is related to a specific topic or functionality.",
  },
  {
    question:
      "How do you specify a form input field that should not be editable by the user?",
    options: ["readonly", "disabled", "locked", "non-editable"],
    correctAnswer: "readonly",
    explanation:
      "The 'readonly' attribute specifies that a form input field is read-only, meaning it cannot be edited by the user but its value can still be submitted with the form.",
  },
  {
    question: "What does the action attribute of the <form> element specify?",
    options: [
      "The URL to which the form data will be submitted",
      "The method for submitting the form data",
      "The data format for the form submission",
      "The target for displaying the form results",
    ],
    correctAnswer: "The URL to which the form data will be submitted",
    explanation:
      "The 'action' attribute of the <form> element specifies the URL where the form data will be sent when the form is submitted.",
  },
  {
    question:
      "Which HTML5 element is used to define a group of related form controls?",
    options: ["<fieldset>", "<formgroup>", "<controlgroup>", "<formsection>"],
    correctAnswer: "<fieldset>",
    explanation:
      "The <fieldset> element groups related form controls and labels within a form, often used with the <legend> element to provide a caption.",
  },
  {
    question: "How do you include an external stylesheet in an HTML document?",
    options: [
      'Use the <link> element with rel="stylesheet"',
      'Use the <style> element with href="..."',
      'Use the <import> element with href="..."',
      "Use the @import rule in the <style> element",
    ],
    correctAnswer: 'Use the <link> element with rel="stylesheet"',
    explanation:
      "To include an external stylesheet, use the <link> element with the 'rel' attribute set to 'stylesheet' to link the CSS file to the HTML document.",
  },
  {
    question:
      "Which HTML5 element represents a self-contained block of content that could be reused elsewhere?",
    options: ["<section>", "<article>", "<div>", "<block>"],
    correctAnswer: "<article>",
    explanation:
      "The <article> element represents a self-contained piece of content that is intended to be independently distributable or reusable.",
  },
  {
    question: "How do you define a form input that accepts a file upload?",
    options: [
      '<input type="file">',
      '<input type="upload">',
      "<fileupload>",
      '<input type="document">',
    ],
    correctAnswer: '<input type="file">',
    explanation:
      "The <input> element with type='file' allows users to select and upload files from their local file system.",
  },
  {
    question:
      "What attribute is used to specify a link that should be displayed in a new tab or window?",
    options: [
      'target="_blank"',
      'newtab="true"',
      'window="_new"',
      'open="new"',
    ],
    correctAnswer: 'target="_blank"',
    explanation:
      "The 'target' attribute with the value '_blank' specifies that the linked document should open in a new tab or window.",
  },
  {
    question:
      "Which HTML5 element represents a section of a page that is used for navigation links?",
    options: ["<nav>", "<navigation>", "<links>", "<menu>"],
    correctAnswer: "<nav>",
    explanation:
      "The <nav> element defines a section of a document intended for navigation links, helping users find their way around the website.",
  },
  {
    question:
      "How do you define a block of content that is intended for user interactions, such as a form or a comment section?",
    options: ["<section>", "<div>", "<article>", "<interaction>"],
    correctAnswer: "<section>",
    explanation:
      "The <section> element is used to define thematic sections of content, including interactive blocks like forms or comment sections.",
  },
  {
    question: "What does the autocomplete attribute do in an HTML form input?",
    options: [
      "Enables or disables automatic completion of the field based on user input",
      "Automatically fills in the field with default values",
      "Provides suggestions for input completion",
      "Disables the field's automatic completion",
    ],
    correctAnswer:
      "Enables or disables automatic completion of the field based on user input",
    explanation:
      "The 'autocomplete' attribute controls whether the browser should automatically complete the field with previously entered values or not.",
  },
  {
    question:
      "Which HTML5 element represents a section of content that is meant to be a unit within a larger document?",
    options: ["<article>", "<section>", "<container>", "<module>"],
    correctAnswer: "<article>",
    explanation:
      "The <article> element represents a self-contained unit of content that can stand alone and be reused or distributed independently.",
  },
  {
    question:
      "How do you include an external script in an HTML document that should be executed as soon as it is available?",
    options: [
      "Use the async attribute in the <script> tag",
      "Use the defer attribute in the <script> tag",
      "Place the <script> tag at the bottom of the <body>",
      "Use JavaScript to dynamically add the script",
    ],
    correctAnswer: "Use the async attribute in the <script> tag",
    explanation:
      "The 'async' attribute in the <script> tag specifies that the script should be executed as soon as it is available, without blocking the HTML parsing.",
  },
  {
    question:
      "Which HTML5 element represents a block of content that provides a visual cue to users?",
    options: ["<mark>", "<highlight>", "<style>", "<em>"],
    correctAnswer: "<mark>",
    explanation:
      "The <mark> element highlights parts of the text to draw attention, typically rendering it with a yellow background.",
  },
  {
    question:
      "How do you define a form input that allows users to select multiple options from a list?",
    options: [
      "<select multiple>",
      '<input type="checkbox">',
      '<select multiple="true">',
      '<input type="multiple">',
    ],
    correctAnswer: "<select multiple>",
    explanation:
      "The <select> element with the 'multiple' attribute allows users to select more than one option from a dropdown list.",
  },
  {
    question: "What does the method attribute in the <form> element specify?",
    options: [
      "The HTTP method to use when submitting the form",
      "The URL to submit the form data to",
      "The data format of the form submission",
      "The target window or frame for the form submission",
    ],
    correctAnswer: "The HTTP method to use when submitting the form",
    explanation:
      "The 'method' attribute in the <form> element specifies the HTTP method (GET or POST) that the browser should use to submit the form data.",
  },
  {
    question:
      "Which HTML5 element is used to define a footer section in a document or a section?",
    options: ["<footer>", "<bottom>", "<end>", "<footersection>"],
    correctAnswer: "<footer>",
    explanation:
      "The <footer> element represents a footer section that typically contains metadata, copyright information, or contact details.",
  },
  {
    question:
      "How do you define a block of content that should be emphasized, but less strongly than <strong>?",
    options: ["<em>", "<highlight>", "<mark>", "<strong>"],
    correctAnswer: "<em>",
    explanation:
      "The <em> element is used to emphasize text, typically rendering it in italics. It emphasizes content less strongly compared to the <strong> element.",
  },
];
