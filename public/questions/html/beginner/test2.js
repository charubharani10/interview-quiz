export const test2 = [
  {
    question: "Which tag is used to create an image map in HTML?",
    options: ["<map>", "<img>", "<area>", "<maparea>"],
    correctAnswer: "<map>",
    explanation:
      "The '<map>' tag defines an image map, which is a clickable image with defined areas. Each clickable area is defined with an '<area>' tag.",
  },
  {
    question: "How do you create a radio button in HTML?",
    options: [
      '<input type="radio">',
      "<radio>",
      '<input type="radiobutton">',
      '<input type="button">',
    ],
    correctAnswer: '<input type="radio">',
    explanation:
      "The '<input type=\"radio\">' tag creates a radio button, which allows users to select only one option from a group of choices.",
  },
  {
    question:
      "Which attribute is used to specify the URL of an image in the <img> tag?",
    options: ["src", "href", "url", "link"],
    correctAnswer: "src",
    explanation:
      "The 'src' (source) attribute in the '<img>' tag specifies the URL of the image that will be displayed.",
  },
  {
    question: "What is the correct HTML element for inserting a comment?",
    options: [
      "<!-- comment -->",
      "<comment>comment</comment>",
      "<!-- comment -->",
      "<# comment #>",
    ],
    correctAnswer: "<!-- comment -->",
    explanation:
      "In HTML, comments are added using the '<!-- comment -->' syntax. These comments are not displayed on the web page.",
  },
  {
    question: "Which tag is used to define a list item in HTML?",
    options: ["<li>", "<item>", "<ul>", "<listitem>"],
    correctAnswer: "<li>",
    explanation:
      "The '<li>' tag defines an individual item in both ordered ('<ol>') and unordered ('<ul>') lists.",
  },
  {
    question:
      "What is the correct HTML tag for creating a hyperlink that sends an email?",
    options: [
      '<a href="mailto:email@example.com">',
      '<a href="email@example.com">',
      '<a href="sendmail:email@example.com">',
      '<a href="mailto">',
    ],
    correctAnswer: '<a href="mailto:email@example.com">',
    explanation:
      "The 'mailto:' protocol is used within the '<a>' tag to create a hyperlink that, when clicked, opens the user's default email client with a pre-filled email address.",
  },
  {
    question: "Which tag is used to create a table row in HTML?",
    options: ["<tr>", "<td>", "<th>", "<table>"],
    correctAnswer: "<tr>",
    explanation:
      "The '<tr>' tag defines a row in an HTML table. Table rows contain table cells, which are defined by '<td>' or '<th>' tags.",
  },
  {
    question: "How do you define a table cell in HTML?",
    options: ["<td>", "<th>", "<tr>", "<cell>"],
    correctAnswer: "<td>",
    explanation:
      "The '<td>' tag is used to define a cell in an HTML table. It stands for 'table data' and contains the actual content of the table.",
  },
  {
    question:
      "What is the correct tag for creating a division or section in an HTML document?",
    options: ["<div>", "<section>", "<span>", "<part>"],
    correctAnswer: "<div>",
    explanation:
      "The '<div>' tag is a block-level container used to group HTML elements together, allowing for easier styling and layout.",
  },
  {
    question:
      "Which attribute is used to specify the language of the HTML document?",
    options: ["lang", "language", "locale", "code"],
    correctAnswer: "lang",
    explanation:
      "The 'lang' attribute in the '<html>' tag is used to declare the language of the document, helping browsers and search engines understand the content's language.",
  },
  {
    question: "What is the correct HTML tag for making text bold?",
    options: ["<b>", "<strong>", "<bold>", "<em>"],
    correctAnswer: "<b>",
    explanation:
      "The '<b>' tag is used to make text bold in HTML. '<strong>' is also commonly used to indicate strong importance, and may also result in bold text.",
  },
  {
    question:
      "Which HTML attribute is used to define an alternative text for an image?",
    options: ["alt", "title", "description", "caption"],
    correctAnswer: "alt",
    explanation:
      "The 'alt' attribute provides alternative text for an image if it cannot be displayed. It is also important for accessibility and search engine optimization.",
  },
  {
    question: "What is the correct HTML tag for emphasizing text?",
    options: ["<em>", "<strong>", "<italic>", "<emphasize>"],
    correctAnswer: "<em>",
    explanation:
      "The '<em>' tag is used to emphasize text in HTML. It generally renders text in italics and also provides meaning by emphasizing the content.",
  },
  {
    question: "Which tag is used to create a definition list in HTML?",
    options: ["<dl>", "<ul>", "<ol>", "<list>"],
    correctAnswer: "<dl>",
    explanation:
      "The '<dl>' tag is used to define a definition list. It contains a series of terms and their corresponding definitions, using '<dt>' for terms and '<dd>' for definitions.",
  },
  {
    question:
      "Which tag is used to define a description or definition term in a definition list?",
    options: ["<dt>", "<dd>", "<dl>", "<df>"],
    correctAnswer: "<dt>",
    explanation:
      "The '<dt>' tag defines the term (name) in a definition list, which is followed by a description defined by the '<dd>' tag.",
  },
  {
    question:
      "Which tag is used to define a description or definition in a definition list?",
    options: ["<dd>", "<dt>", "<dl>", "<df>"],
    correctAnswer: "<dd>",
    explanation:
      "The '<dd>' tag is used to provide the description or definition of the term defined by the '<dt>' tag in a definition list.",
  },
  {
    question: "How do you specify the character encoding for an HTML document?",
    options: [
      '<meta charset="UTF-8">',
      '<meta encoding="UTF-8">',
      '<meta code="UTF-8">',
      '<meta lang="UTF-8">',
    ],
    correctAnswer: '<meta charset="UTF-8">',
    explanation:
      "The '<meta charset=\"UTF-8\">' tag specifies the character encoding for the HTML document, ensuring that the document correctly displays special characters and symbols.",
  },
  {
    question: "What is the correct HTML tag for creating a line break?",
    options: ["<br>", "<lb>", "<break>", "<hr>"],
    correctAnswer: "<br>",
    explanation:
      "The '<br>' tag is used to create a line break in HTML, moving the content to the next line.",
  },
  {
    question:
      "How do you specify the target of a hyperlink to open in the same window or tab?",
    options: [
      'target="_self"',
      'target="_blank"',
      'target="_top"',
      'target="_parent"',
    ],
    correctAnswer: 'target="_self"',
    explanation:
      "The 'target=\"_self\"' attribute specifies that the linked document will open in the same window or tab as the current page.",
  },
  {
    question:
      "Which HTML element is used to specify a footer for a document or section?",
    options: ["<footer>", "<foot>", "<bottom>", "<section>"],
    correctAnswer: "<footer>",
    explanation:
      "The '<footer>' element defines a footer for a document or section, typically containing information about the document such as author or copyright details.",
  },
];
