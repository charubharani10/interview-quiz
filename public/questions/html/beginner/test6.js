export const test6 = [
  {
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: ["alt", "src", "title", "text"],
    correctAnswer: "alt",
    explanation:
      "The 'alt' attribute provides alternate text for an image, used if the image cannot be displayed.",
  },
  {
    question: "How do you create a form that allows file uploads in HTML?",
    options: [
      '<form enctype="multipart/form-data">',
      '<form enctype="file-upload">',
      '<form enctype="upload">',
      '<form enctype="data-upload">',
    ],
    correctAnswer: '<form enctype="multipart/form-data">',
    explanation:
      "The 'enctype=\"multipart/form-data\"' attribute allows forms to upload files as part of their submission.",
  },
  {
    question: "Which HTML tag is used to define a list item in a list?",
    options: ["<li>", "<ul>", "<ol>", "<item>"],
    correctAnswer: "<li>",
    explanation:
      "The '<li>' tag is used to define an item within an ordered or unordered list.",
  },
  {
    question: "What is the correct HTML tag for inserting an image?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    correctAnswer: "<img>",
    explanation: "The '<img>' tag is used to embed an image in an HTML page.",
  },
  {
    question:
      "Which attribute is used to specify the HTTP method that the browser uses to submit the form data?",
    options: ["method", "action", "submit", "type"],
    correctAnswer: "method",
    explanation:
      "The 'method' attribute defines how the form data is submitted to the server (e.g., 'GET' or 'POST').",
  },
  {
    question: "How do you make a checkbox checked by default in HTML?",
    options: ["checked", "default", "selected", "enabled"],
    correctAnswer: "checked",
    explanation:
      "The 'checked' attribute marks a checkbox as selected by default.",
  },
  {
    question: "Which HTML tag is used to create a table data cell?",
    options: ["<td>", "<tr>", "<th>", "<table>"],
    correctAnswer: "<td>",
    explanation:
      "The '<td>' tag defines a standard data cell in an HTML table.",
  },
  {
    question:
      "What is the correct HTML element for defining an abbreviation or acronym?",
    options: ["<abbr>", "<acronym>", "<abbrev>", "<short>"],
    correctAnswer: "<abbr>",
    explanation:
      "The '<abbr>' tag is used to represent abbreviations or acronyms with a title attribute to provide full meaning.",
  },
  {
    question:
      "Which HTML attribute is used to define the character encoding for the document?",
    options: ["charset", "encoding", "lang", "meta"],
    correctAnswer: "charset",
    explanation:
      "The 'charset' attribute specifies the character encoding for the document, such as 'UTF-8'.",
  },
  {
    question: "How do you create a radio button in HTML?",
    options: [
      '<input type="radio">',
      '<input type="button">',
      '<input type="check">',
      '<input type="select">',
    ],
    correctAnswer: '<input type="radio">',
    explanation:
      "The '<input type=\"radio\">' tag is used to create radio buttons, which allow users to select one option from a group.",
  },
  {
    question:
      "Which tag is used to define a division or a section in an HTML document?",
    options: ["<div>", "<section>", "<span>", "<article>"],
    correctAnswer: "<div>",
    explanation:
      "The '<div>' tag defines a division or a section in an HTML document, commonly used to group content for styling.",
  },
  {
    question: "How do you create a hyperlink in HTML?",
    options: [
      '<a href="url">Link Text</a>',
      '<link url="url">Link Text</link>',
      '<a link="url">Link Text</a>',
      '<href url="url">Link Text</href>',
    ],
    correctAnswer: '<a href="url">Link Text</a>',
    explanation:
      "The '<a href=\"url\">Link Text</a>' syntax is used to create a hyperlink that navigates to the specified URL.",
  },
  {
    question:
      "Which tag is used to display the content in the browser title bar or on the page tab?",
    options: ["<title>", "<head>", "<meta>", "<h1>"],
    correctAnswer: "<title>",
    explanation:
      "The '<title>' tag defines the document's title, which is displayed in the browser's title bar or tab.",
  },
  {
    question: "What is the correct HTML element to define superscripted text?",
    options: ["<sup>", "<super>", "<small>", "<sub>"],
    correctAnswer: "<sup>",
    explanation:
      "The '<sup>' tag is used to define superscripted text, typically for footnotes or exponents.",
  },
  {
    question:
      "How do you create a form that submits data without reloading the page in HTML?",
    options: [
      "Use AJAX (Asynchronous JavaScript and XML)",
      "Use GET method",
      "Use POST method",
      "Use multipart/form-data encoding",
    ],
    correctAnswer: "Use AJAX (Asynchronous JavaScript and XML)",
    explanation:
      "AJAX is used to submit form data asynchronously, allowing the page to update without a full reload.",
  },
  {
    question:
      "Which HTML attribute is used to specify the URL of the page that processes the form data?",
    options: ["action", "method", "submit", "process"],
    correctAnswer: "action",
    explanation:
      "The 'action' attribute defines where the form data is sent when the form is submitted.",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<list>", "<li>"],
    correctAnswer: "<ul>",
    explanation:
      "The '<ul>' tag defines an unordered list, with list items typically marked by bullets.",
  },
  {
    question: "What is the correct HTML tag for adding a background image?",
    options: [
      "<body style=\"background-image:url('image.jpg');\">",
      '<background img="image.jpg">',
      '<img background="image.jpg">',
      '<body img="image.jpg">',
    ],
    correctAnswer: "<body style=\"background-image:url('image.jpg');\">",
    explanation:
      "The 'style' attribute in the '<body>' tag allows you to set a background image for the page.",
  },
  {
    question: "How do you create a multiline comment in HTML?",
    options: [
      "<!-- Comment -->",
      "// Comment",
      "/* Comment */",
      "<!--- Comment --->",
    ],
    correctAnswer: "<!-- Comment -->",
    explanation:
      "HTML comments are created using the syntax '<!-- Comment -->'. They are not displayed in the browser.",
  },
  {
    question:
      "Which HTML tag is used to create a hyperlink that opens in the same tab?",
    options: [
      '<a href="url">',
      '<a target="_self">',
      '<link href="url">',
      '<a target="_blank">',
    ],
    correctAnswer: '<a href="url">',
    explanation:
      "By default, '<a href=\"url\">' opens the link in the same tab. The 'target=\"_self\"' attribute also ensures this behavior.",
  },
];
