export const test1 = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Transfer Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
    explanation:
      "HTML stands for Hyper Text Markup Language. It is the standard language used to create web pages and web applications. 'Hypertext' refers to the ability to link to other documents, and 'Markup Language' refers to how text and other content is structured on a webpage using tags.",
  },
  {
    question: "What is the correct HTML tag for inserting a line break?",
    options: ["<lb>", "<br>", "<break>", "<hr>"],
    correctAnswer: "<br>",
    explanation:
      "The <br> tag in HTML is used to create a line break in text, moving content to the next line. It is an empty tag and does not need a closing tag.",
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<hyperlink>"],
    correctAnswer: "<a>",
    explanation:
      "The <a> tag (anchor tag) is used to create a hyperlink in HTML. It requires an 'href' attribute, which specifies the URL to link to.",
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    options: ["<heading>", "<h1>", "<h6>", "<head>"],
    correctAnswer: "<h1>",
    explanation:
      "In HTML, the <h1> tag represents the largest heading, typically used for main headings. There are six heading levels (<h1> to <h6>), with <h1> being the largest and <h6> the smallest.",
  },
  {
    question: "How do you create an ordered list in HTML?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correctAnswer: "<ol>",
    explanation:
      "The <ol> tag is used to create an ordered list in HTML, where each item is numbered. Inside the <ol> tag, <li> tags are used to define each list item.",
  },
  {
    question: "Which tag is used to create a paragraph in HTML?",
    options: ["<para>", "<p>", "<text>", "<pg>"],
    correctAnswer: "<p>",
    explanation:
      "The <p> tag is used to define a paragraph in HTML. It's one of the most commonly used tags to structure text content.",
  },
  {
    question: "What is the correct HTML tag for inserting an image?",
    options: ["<img>", "<image>", "<picture>", "<src>"],
    correctAnswer: "<img>",
    explanation:
      "The <img> tag is used to insert an image into an HTML page. It requires the 'src' attribute to specify the image source.",
  },
  {
    question: "What is the correct HTML element for adding a background color?",
    options: ["<background>", "<color>", "<body>", "<bgcolor>"],
    correctAnswer: "<body>",
    explanation:
      "The <body> tag is used to define the main content of an HTML document. The background color of the entire web page can be set using the 'style' attribute within the <body> tag, although CSS is now preferred for styling.",
  },
  {
    question: "How do you create a numbered list in HTML?",
    options: ["<ul>", "<ol>", "<li>", "<dl>"],
    correctAnswer: "<ol>",
    explanation:
      "The <ol> tag is used for creating ordered (numbered) lists. Each item within the list is marked using <li> tags.",
  },
  {
    question: "Which HTML tag is used to create an unordered list?",
    options: ["<ul>", "<ol>", "<list>", "<li>"],
    correctAnswer: "<ul>",
    explanation:
      "The <ul> tag is used to create an unordered (bulleted) list in HTML. Each item within the list is enclosed in <li> tags.",
  },
  {
    question:
      "What is the correct HTML element for defining the title of a document?",
    options: ["<header>", "<title>", "<head>", "<meta>"],
    correctAnswer: "<title>",
    explanation:
      "The <title> tag defines the title of the HTML document, which appears in the browser's title bar or tab. It is placed inside the <head> section of the HTML document.",
  },
  {
    question:
      "What is the correct HTML element for inserting a horizontal line?",
    options: ["<hr>", "<br>", "<line>", "<break>"],
    correctAnswer: "<hr>",
    explanation:
      "The <hr> tag is used to insert a horizontal line across the page. It's often used to visually separate sections of content.",
  },
  {
    question:
      "Which tag is used to create a hyperlink that opens in a new tab?",
    options: [
      '<a href="url" target="_blank">',
      '<a href="url" newtab>',
      '<a href="url" target="_new">',
      '<a href="url" newwindow>',
    ],
    correctAnswer: '<a href="url" target="_blank">',
    explanation:
      "To open a hyperlink in a new tab, the target attribute of the <a> tag is set to '_blank'. This instructs the browser to open the linked page in a new tab or window.",
  },
  {
    question: "Which attribute is used to add a tooltip to an HTML element?",
    options: ["alt", "tooltip", "title", "hover"],
    correctAnswer: "title",
    explanation:
      "The 'title' attribute is used to display a tooltip when the user hovers over an element. The content of the 'title' attribute is shown in a small popup.",
  },
  {
    question:
      "What is the correct HTML element for creating a text input field?",
    options: [
      '<input type="text">',
      "<textfield>",
      "<text>",
      '<input type="textfield">',
    ],
    correctAnswer: '<input type="text">',
    explanation:
      "The <input type='text'> element is used to create a text input field in a form. This allows users to enter text in an input box.",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "css", "inline"],
    correctAnswer: "style",
    explanation:
      "The 'style' attribute is used to apply inline CSS styles directly to an HTML element. While it's generally better to use external or internal CSS for styling, inline styles can be useful for quick customizations.",
  },
  {
    question: "How do you create a checkbox in HTML?",
    options: [
      '<input type="checkbox">',
      "<checkbox>",
      '<input type="check">',
      '<input type="box">',
    ],
    correctAnswer: '<input type="checkbox">',
    explanation:
      "In HTML, the correct way to create a checkbox is by using the '<input type=\"checkbox\">' tag. This creates a form element that allows users to select or deselect an option.",
  },
  {
    question: "Which tag is used to create a drop-down list in HTML?",
    options: ["<select>", "<dropdown>", "<list>", "<option>"],
    correctAnswer: "<select>",
    explanation:
      "The '<select>' tag in HTML is used to create a drop-down list. Each option within the list is defined by the '<option>' tag.",
  },
  {
    question: "Which tag is used to create a form in HTML?",
    options: ["<form>", "<input>", "<field>", "<fieldset>"],
    correctAnswer: "<form>",
    explanation:
      "The '<form>' tag is used to create an HTML form, which collects user input through various form elements like text fields, checkboxes, and radio buttons.",
  },
  {
    question: "What is the correct HTML element for embedding a video file?",
    options: ["<video>", "<media>", "<embed>", "<movie>"],
    correctAnswer: "<video>",
    explanation:
      "The '<video>' element is used to embed video files into an HTML document. You can include sources for the video with the '<source>' tag.",
  },
];
