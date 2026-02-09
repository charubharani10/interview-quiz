export const test8 = [
  {
    question:
      "How do you define a block of content that should be highlighted or emphasized?",
    options: ["<strong>", "<highlight>", "<emphasis>", "<mark>"],
    correctAnswer: "<strong>",
    explanation:
      "The <strong> element is used to give importance and emphasis to a block of text, typically displayed in bold.",
  },
  {
    question: "What does the role attribute do in HTML?",
    options: [
      "Defines the role or purpose of an element for accessibility purposes",
      "Sets the element's display style",
      "Specifies the element's data type",
      "Provides a default value for the element",
    ],
    correctAnswer:
      "Defines the role or purpose of an element for accessibility purposes",
    explanation:
      "The 'role' attribute provides information about the role of an element to assistive technologies, helping with accessibility.",
  },
  {
    question:
      "Which HTML element defines a header within a section or article?",
    options: ["<header>", "<hgroup>", "<section-header>", "<headline>"],
    correctAnswer: "<header>",
    explanation:
      "The <header> element represents a container for introductory content or navigational aids within a section or article.",
  },
  {
    question: "How do you include a subtitle in a video element?",
    options: [
      "Use the <track> element",
      "Use the <subtitle> element",
      "Use the <caption> element",
      "Use the subtitles attribute",
    ],
    correctAnswer: "Use the <track> element",
    explanation:
      "The <track> element is used to specify text tracks for video elements, such as subtitles or captions.",
  },
  {
    question: "Which HTML5 element represents a template for reusable content?",
    options: ["<template>", "<reuse>", "<content>", "<fragment>"],
    correctAnswer: "<template>",
    explanation:
      "The <template> element is used to define a reusable piece of content that is not rendered when the page loads.",
  },
  {
    question: "What does the cite attribute do in HTML?",
    options: [
      "Provides a reference to the source of content",
      "Sets the source of an image",
      "Defines the style of the element",
      "Specifies the color of the text",
    ],
    correctAnswer: "Provides a reference to the source of content",
    explanation:
      "The 'cite' attribute provides a reference to the source of a citation, often used in elements like <blockquote> and <q>.",
  },
  {
    question:
      "How do you specify that an HTML form field is to be automatically focused when the page loads?",
    options: [
      "Use the autofocus attribute",
      "Use the focus attribute",
      "Use JavaScript to set focus",
      "Use the default-focus attribute",
    ],
    correctAnswer: "Use the autofocus attribute",
    explanation:
      "The 'autofocus' attribute can be added to an input field to automatically focus it when the page loads.",
  },
  {
    question:
      "Which HTML5 element is used to define a content block that serves as a form container?",
    options: ["<form>", "<container>", "<fieldset>", "<section>"],
    correctAnswer: "<form>",
    explanation:
      "The <form> element defines a container for form controls and allows users to submit data to a server.",
  },
  {
    question:
      "What attribute of the <input> element specifies the maximum value allowed for a numeric field?",
    options: ["max", "limit", "value", "number"],
    correctAnswer: "max",
    explanation:
      "The 'max' attribute specifies the maximum value allowed for an input field of type 'number' or 'range'.",
  },
  {
    question: "Which HTML5 element is used to define a caption for a table?",
    options: ["<caption>", "<title>", "<header>", "<label>"],
    correctAnswer: "<caption>",
    explanation:
      "The <caption> element is used to provide a title or explanation for a table.",
  },
  {
    question:
      "How do you include a script that is executed only after the HTML document is fully loaded?",
    options: [
      "Use the defer attribute in the <script> tag",
      "Place the <script> tag at the bottom of the <body>",
      "Use the async attribute in the <script> tag",
      "Use JavaScript's DOMContentLoaded event",
    ],
    correctAnswer: "Use the defer attribute in the <script> tag",
    explanation:
      "The 'defer' attribute ensures that the script is executed after the HTML document has been fully parsed.",
  },
  {
    question:
      "Which HTML5 element defines an interactive area within an SVG graphic?",
    options: ["<a>", "<area>", "<link>", "<embed>"],
    correctAnswer: "<a>",
    explanation:
      "The <a> element within SVG graphics defines interactive links, allowing for clickable areas in SVG content.",
  },
  {
    question:
      "How do you specify that an HTML document should be rendered using the latest standards?",
    options: [
      "Include <!DOCTYPE html> at the beginning of the document",
      'Use <meta http-equiv="X-UA-Compatible" content="IE=edge">',
      'Use <meta charset="UTF-8">',
      "Add standards-compliant attribute to the <html> tag",
    ],
    correctAnswer: "Include <!DOCTYPE html> at the beginning of the document",
    explanation:
      "Including <!DOCTYPE html> at the beginning of an HTML document ensures that the browser renders the document in standards mode.",
  },
  {
    question: "What attribute is used to specify the language of the document?",
    options: ["lang", "locale", "language", "code"],
    correctAnswer: "lang",
    explanation:
      "The 'lang' attribute is used in the <html> tag to specify the language of the document, helping with accessibility and search engine optimization.",
  },
  {
    question:
      "How do you define a form input that allows users to select from a list of options?",
    options: ["<select>", "<dropdown>", "<menu>", "<list>"],
    correctAnswer: "<select>",
    explanation:
      "The <select> element is used to create a drop-down list of options for users to choose from.",
  },
  {
    question:
      "Which HTML5 element defines a specific area within a document for related content?",
    options: ["<section>", "<article>", "<div>", "<content>"],
    correctAnswer: "<section>",
    explanation:
      "The <section> element is used to define a thematic grouping of content, such as a chapter or a section within a document.",
  },
  {
    question: "How do you define a form input that only accepts text?",
    options: [
      '<input type="text">',
      '<input type="textarea">',
      '<input type="email">',
      '<input type="password">',
    ],
    correctAnswer: '<input type="text">',
    explanation:
      "The <input type='text'> element creates a text input field where users can enter plain text.",
  },
  {
    question:
      "Which HTML5 element defines a section of a document that is intended for navigation links?",
    options: ["<nav>", "<menu>", "<links>", "<navigate>"],
    correctAnswer: "<nav>",
    explanation:
      "The <nav> element is used to define a section of the document that contains navigation links.",
  },
  {
    question:
      "How do you include a script file in an HTML document that should be executed after the page is fully loaded?",
    options: [
      "Use the defer attribute in the <script> tag",
      "Use the async attribute in the <script> tag",
      "Include the script at the beginning of the document",
      "Use the load event to execute the script",
    ],
    correctAnswer: "Use the defer attribute in the <script> tag",
    explanation:
      "The 'defer' attribute ensures that the script will be executed after the HTML document has been fully parsed.",
  },
  {
    question:
      "Which HTML element is used to define a table cell that spans multiple rows?",
    options: [
      '<td rowspan="...">',
      '<cell rowspan="...">',
      '<td colspan="...">',
      "<rowspan>",
    ],
    correctAnswer: '<td rowspan="...">',
    explanation:
      "The 'rowspan' attribute in the <td> element allows a table cell to span multiple rows.",
  },
];
