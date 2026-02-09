export const test1 = [
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
    explanation:
      "CSS stands for Cascading Style Sheets, which is a stylesheet language used to describe the presentation of a document written in HTML or XML.",
  },
  {
    question: "How do you include a CSS file in an HTML document?",
    options: [
      '<style src="style.css">',
      '<link rel="stylesheet" href="style.css">',
      '<script src="style.css"></script>',
      '<css src="style.css">',
    ],
    correctAnswer: '<link rel="stylesheet" href="style.css">',
    explanation:
      "To include a CSS file in an HTML document, you use the <link> element with the 'rel' attribute set to 'stylesheet' and the 'href' attribute pointing to the CSS file.",
  },
  {
    question:
      "What is the correct syntax for adding a background color in CSS?",
    options: [
      "background-color: #FFFFFF;",
      "bgcolor: #FFFFFF;",
      "color-background: #FFFFFF;",
      "background: #FFFFFF;",
    ],
    correctAnswer: "background-color: #FFFFFF;",
    explanation:
      "The correct syntax for adding a background color in CSS is 'background-color: #FFFFFF;'. This specifies the color of the background of an element.",
  },
  {
    question: "Which property is used to change the font of an element in CSS?",
    options: ["font-family", "font-style", "text-style", "font-weight"],
    correctAnswer: "font-family",
    explanation:
      "The 'font-family' property is used to specify the font of an element in CSS.",
  },
  {
    question: "How do you select an element with a specific class in CSS?",
    options: [".classname", "#classname", "element.classname", "classname"],
    correctAnswer: ".classname",
    explanation:
      "To select an element with a specific class in CSS, you use a period followed by the class name, e.g., '.classname'.",
  },
  {
    question: "What is the purpose of the margin property in CSS?",
    options: [
      "To add space inside an element",
      "To add space outside an element",
      "To change the text color",
      "To set the font size",
    ],
    correctAnswer: "To add space outside an element",
    explanation:
      "The 'margin' property in CSS is used to create space outside an element, pushing it away from other elements.",
  },
  {
    question: "How do you change the text color of an element in CSS?",
    options: [
      "color: #000000;",
      "text-color: #000000;",
      "font-color: #000000;",
      "background-color: #000000;",
    ],
    correctAnswer: "color: #000000;",
    explanation:
      "The 'color' property is used to change the text color of an element in CSS.",
  },
  {
    question: "Which property is used to set the width of an element in CSS?",
    options: ["width", "size", "length", "height"],
    correctAnswer: "width",
    explanation:
      "The 'width' property is used to specify the width of an element in CSS.",
  },
  {
    question: "How do you add padding inside an element in CSS?",
    options: [
      "padding: 10px;",
      "margin: 10px;",
      "border: 10px;",
      "spacing: 10px;",
    ],
    correctAnswer: "padding: 10px;",
    explanation:
      "The 'padding' property is used to add space inside an element, between the element's content and its border.",
  },
  {
    question: "What does the border property do in CSS?",
    options: [
      "Adds a border around an element",
      "Changes the background color",
      "Sets the font size",
      "Adds space inside an element",
    ],
    correctAnswer: "Adds a border around an element",
    explanation:
      "The 'border' property in CSS is used to add a border around an element.",
  },
  {
    question:
      "How do you apply a style to an element with a specific ID in CSS?",
    options: ["#idname", ".idname", "element#idname", "idname"],
    correctAnswer: "#idname",
    explanation:
      "To apply a style to an element with a specific ID in CSS, use the '#' symbol followed by the ID name, e.g., '#idname'.",
  },
  {
    question: "What is the default value of the position property in CSS?",
    options: ["static", "relative", "absolute", "fixed"],
    correctAnswer: "static",
    explanation:
      "The default value of the 'position' property in CSS is 'static', which means the element is positioned according to the normal flow of the document.",
  },
  {
    question: "Which property is used to align text in CSS?",
    options: [
      "text-align",
      "text-position",
      "align-text",
      "text-align-position",
    ],
    correctAnswer: "text-align",
    explanation:
      "The 'text-align' property is used to set the horizontal alignment of text within an element.",
  },
  {
    question: "How do you set the height of an element in CSS?",
    options: ["height", "size", "length", "width"],
    correctAnswer: "height",
    explanation:
      "The 'height' property is used to specify the height of an element in CSS.",
  },
  {
    question: "Which property is used to set the font size in CSS?",
    options: ["font-size", "text-size", "font-style", "size"],
    correctAnswer: "font-size",
    explanation:
      "The 'font-size' property is used to set the size of the font in CSS.",
  },
  {
    question: "How do you center an element horizontally in CSS?",
    options: [
      "margin: 0 auto;",
      "text-align: center;",
      "align: center;",
      "center: auto;",
    ],
    correctAnswer: "margin: 0 auto;",
    explanation:
      "To center an element horizontally in CSS, you use 'margin: 0 auto;' on the element with a defined width.",
  },
  {
    question: "Which property is used to set the font weight in CSS?",
    options: ["font-weight", "font-size", "text-weight", "weight"],
    correctAnswer: "font-weight",
    explanation:
      "The 'font-weight' property is used to specify the weight or thickness of the font in CSS.",
  },
  {
    question: "How do you specify a color in CSS using RGB values?",
    options: [
      "color: rgb(255, 0, 0);",
      "color: rgba(255, 0, 0);",
      "color: rgb(255, 0, 0, 1);",
      "color: rgba(255, 153, 153, 0);",
    ],
    correctAnswer: "color: rgb(255, 0, 0);",
    explanation:
      "To specify a color in CSS using RGB values, you use the 'rgb' function with red, green, and blue values, e.g., 'color: rgb(255, 0, 0);'.",
  },
  {
    question: "What is the purpose of the display property in CSS?",
    options: [
      "To control the layout and visibility of an element",
      "To set the font style",
      "To change the element's color",
      "To adjust the element's size",
    ],
    correctAnswer: "To control the layout and visibility of an element",
    explanation:
      "The 'display' property in CSS is used to control how an element is displayed on the page, including its layout and visibility.",
  },
  {
    question: "Which CSS property is used to hide an element from view?",
    options: [
      "display: none;",
      "visibility: hidden;",
      "opacity: 0;",
      "background: none;",
    ],
    correctAnswer: "display: none;",
    explanation:
      "To completely hide an element from view and remove it from the layout, use 'display: none;' in CSS.",
  },
];
