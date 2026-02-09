export const test3 = [
  {
    question: "What HTML5 element is used to define a progress bar?",
    options: ["<progress>", "<meter>", "<gauge>", "<status>"],
    correctAnswer: "<progress>",
    explanation:
      "The <progress> element is used to display a progress bar indicating the completion of a task.",
  },
  {
    question:
      "Which HTML5 attribute is used to specify a placeholder text for an input field?",
    options: ["placeholder", "hint", "value", "default"],
    correctAnswer: "placeholder",
    explanation:
      "The 'placeholder' attribute provides a hint to the user of what type of information is expected in the input field.",
  },
  {
    question: "How do you define a form that supports multiple file uploads?",
    options: [
      '<input type="file" multiple>',
      '<input type="files" multiple>',
      "<file multiple>",
      '<input type="upload" multiple>',
    ],
    correctAnswer: '<input type="file" multiple>',
    explanation:
      "The 'multiple' attribute allows the user to select and upload more than one file using the <input> element.",
  },
  {
    question:
      "Which HTML5 element is used to define a section of navigation links?",
    options: ["<nav>", "<menu>", "<links>", "<navigation>"],
    correctAnswer: "<nav>",
    explanation:
      "The <nav> element represents a section of a document that contains navigation links.",
  },
  {
    question: "What is the purpose of the required attribute in HTML5 forms?",
    options: [
      "To specify that a field must be filled out before submitting",
      "To specify a default value for a field",
      "To limit the number of characters in a field",
      "To provide a hint for the user",
    ],
    correctAnswer:
      "To specify that a field must be filled out before submitting",
    explanation:
      "The 'required' attribute ensures that the form cannot be submitted without the user filling out the specified field.",
  },
  {
    question:
      "Which HTML5 element is used to include a section that provides metadata or links to external resources?",
    options: ["<head>", "<footer>", "<metadata>", "<section>"],
    correctAnswer: "<head>",
    explanation:
      "The <head> element contains metadata and links to external resources like stylesheets and scripts.",
  },
  {
    question:
      "How do you specify that an input field should only accept numeric values in HTML5?",
    options: [
      'type="number"',
      'type="text"',
      'type="numeric"',
      'type="integer"',
    ],
    correctAnswer: 'type="number"',
    explanation:
      "The 'type' attribute set to 'number' specifies that the input field should accept numeric values only.",
  },
  {
    question:
      "Which HTML5 element is used to define a reusable content template?",
    options: ["<template>", "<repeat>", "<content>", "<block>"],
    correctAnswer: "<template>",
    explanation:
      "The <template> element holds client-side content that you don’t want to be rendered when the page loads, but can be instantiated later using JavaScript.",
  },
  {
    question:
      "What HTML5 element is used to define a section of related information?",
    options: ["<aside>", "<div>", "<section>", "<article>"],
    correctAnswer: "<section>",
    explanation:
      "The <section> element defines a thematic grouping of content, typically with a heading.",
  },
  {
    question: "How do you create a responsive design for images in HTML5?",
    options: [
      "By using the srcset attribute in the <img> tag",
      "By using the responsive class in CSS",
      "By setting the width and height attributes in the <img> tag",
      "By using media queries in CSS",
    ],
    correctAnswer: "By using the srcset attribute in the <img> tag",
    explanation:
      "The 'srcset' attribute allows you to specify different images for different screen resolutions or viewport sizes.",
  },
  {
    question:
      "Which HTML5 attribute specifies the minimum number of characters allowed in an input field?",
    options: ["minlength", "min", "length", "limit"],
    correctAnswer: "minlength",
    explanation:
      "The 'minlength' attribute specifies the minimum number of characters required for an input field.",
  },
  {
    question:
      "What HTML5 element is used to define a form control that lets the user select from a set of predefined values?",
    options: ["<datalist>", "<option>", "<select>", "<list>"],
    correctAnswer: "<datalist>",
    explanation:
      "The <datalist> element contains a set of <option> elements that represent predefined values for an input field.",
  },
  {
    question:
      "How do you include external CSS stylesheets in an HTML5 document?",
    options: [
      '<link rel="stylesheet" href="styles.css">',
      '<style src="styles.css">',
      '<css href="styles.css">',
      '<stylesheet href="styles.css">',
    ],
    correctAnswer: '<link rel="stylesheet" href="styles.css">',
    explanation:
      "The <link> element with 'rel' set to 'stylesheet' is used to link an external CSS file to an HTML document.",
  },
  {
    question:
      "Which HTML5 element is used to define a single line of text input?",
    options: [
      '<input type="text">',
      "<text>",
      '<input type="singleline">',
      "<textfield>",
    ],
    correctAnswer: '<input type="text">',
    explanation:
      "The <input> element with 'type' set to 'text' defines a single line of text input.",
  },
  {
    question: "What is the purpose of the target attribute in an <a> tag?",
    options: [
      "To specify where to open the linked document",
      "To specify the text of the link",
      "To specify the type of the link",
      "To specify the color of the link",
    ],
    correctAnswer: "To specify where to open the linked document",
    explanation:
      "The 'target' attribute in an <a> tag determines where to open the linked document (e.g., in a new tab, in the same frame, etc.).",
  },
  {
    question: "Which HTML5 element is used to define an inline frame?",
    options: ["<iframe>", "<frame>", "<embed>", "<object>"],
    correctAnswer: "<iframe>",
    explanation:
      "The <iframe> element is used to embed another HTML document within the current document.",
  },
  {
    question:
      "How do you specify that an image should be displayed as a background image in HTML5?",
    options: [
      "Using the background-image CSS property",
      "Using the bg attribute in the <img> tag",
      "Using the image attribute in the <img> tag",
      "Using the src attribute in the <div> tag",
    ],
    correctAnswer: "Using the background-image CSS property",
    explanation:
      "The 'background-image' CSS property is used to set an image as the background of an element.",
  },
  {
    question: "Which HTML5 element is used to define a navigation menu?",
    options: ["<nav>", "<menu>", "<link>", "<navigation>"],
    correctAnswer: "<nav>",
    explanation:
      "The <nav> element represents a section of the page intended for navigation links.",
  },
  {
    question:
      "What HTML5 element is used to include embedded media such as video or audio?",
    options: ["<media>", "<embed>", "<video> and <audio>", "<object>"],
    correctAnswer: "<video> and <audio>",
    explanation:
      "The <video> and <audio> elements are used to embed video and audio content in HTML5.",
  },
  {
    question:
      "How do you specify a default value for a form input field in HTML5?",
    options: ["value", "default", "initial", "placeholder"],
    correctAnswer: "value",
    explanation:
      "The 'value' attribute specifies the default value for an input field when the form is first loaded.",
  },
];
