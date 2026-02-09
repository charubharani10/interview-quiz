export const test7 = [
  {
    question: "Which property is used to make an element visible or invisible?",
    options: ["visibility", "display", "opacity", "hidden"],
    correctAnswer: "visibility",
    explanation:
      "The visibility property can set an element to visible or hidden, where hidden elements still occupy space in the layout.",
  },
  {
    question: "How do you apply a CSS style to an element when it is in focus?",
    options: [
      "element:focus { ... }",
      "element:active { ... }",
      "element:hover { ... }",
      "element:visited { ... }",
    ],
    correctAnswer: "element:focus { ... }",
    explanation:
      "The :focus pseudo-class applies styles to an element when it gains focus, such as when a user clicks or tabs into it.",
  },
  {
    question:
      "Which property is used to set the font size of an element in CSS?",
    options: ["font-size", "text-size", "size", "font-style"],
    correctAnswer: "font-size",
    explanation:
      "The font-size property sets the size of the font for an element, such as 12px or 1em.",
  },
  {
    question:
      "How do you apply a CSS style to all elements with a specific class?",
    options: [
      ".class { ... }",
      "#class { ... }",
      "element.class { ... }",
      "class { ... }",
    ],
    correctAnswer: ".class { ... }",
    explanation:
      "To style all elements with a specific class, use the class selector prefixed with a period (e.g., .class).",
  },
  {
    question: "What does the background-size: cover; property do in CSS?",
    options: [
      "Scales the background image to cover the entire element",
      "Sets the background image size to its original dimensions",
      "Scales the background image to fit within the element",
      "Hides the background image",
    ],
    correctAnswer: "Scales the background image to cover the entire element",
    explanation:
      "The background-size: cover; property scales the background image so it covers the entire element, potentially cropping the image.",
  },
  {
    question: "How do you set the width of an element in CSS?",
    options: [
      "width: 100px;",
      "size: 100px;",
      "element-width: 100px;",
      "box-width: 100px;",
    ],
    correctAnswer: "width: 100px;",
    explanation:
      "The width property sets the width of an element, specified in units like pixels (px) or percentages (%).",
  },
  {
    question:
      "Which property is used to control the alignment of a flex container's items?",
    options: ["justify-content", "align-items", "align-content", "flex-align"],
    correctAnswer: "justify-content",
    explanation:
      "The justify-content property aligns flex items along the main axis of the flex container, such as centering or spacing them.",
  },
  {
    question: "How do you set the maximum height of an element in CSS?",
    options: [
      "max-height: 100px;",
      "height-max: 100px;",
      "maximum-height: 100px;",
      "max-size: 100px;",
    ],
    correctAnswer: "max-height: 100px;",
    explanation:
      "The max-height property sets the maximum height an element can grow to, beyond which it will be clipped or scrollable.",
  },
  {
    question:
      "Which property is used to set the font style of an element in CSS?",
    options: ["font-style", "text-style", "font-format", "font-variant"],
    correctAnswer: "font-style",
    explanation:
      "The font-style property sets the style of the font, such as normal, italic, or oblique.",
  },
  {
    question: "How do you center an element horizontally in CSS?",
    options: [
      "margin: 0 auto;",
      "align: center;",
      "text-align: center;",
      "center: true;",
    ],
    correctAnswer: "margin: 0 auto;",
    explanation:
      "To center an element horizontally, apply 'margin: 0 auto;' to a block-level element with a specified width.",
  },
  {
    question: "What does the opacity: 0.5; property do in CSS?",
    options: [
      "Makes the element 50% transparent",
      "Makes the element fully opaque",
      "Sets the element's visibility to hidden",
      "Makes the element 50% visible",
    ],
    correctAnswer: "Makes the element 50% transparent",
    explanation:
      "The opacity: 0.5; property makes an element 50% transparent, affecting its visibility but not its layout space.",
  },
  {
    question:
      "Which property is used to set the font variant of an element in CSS?",
    options: ["font-variant", "text-variant", "font-style", "font-weight"],
    correctAnswer: "font-variant",
    explanation:
      "The font-variant property sets the font variant, such as small-caps or normal.",
  },
  {
    question:
      "How do you apply a style to elements that are visited links in CSS?",
    options: [
      "a:visited { ... }",
      "a:link { ... }",
      "a:hover { ... }",
      "a:focus { ... }",
    ],
    correctAnswer: "a:visited { ... }",
    explanation:
      "The a:visited pseudo-class applies styles to links that have been visited by the user.",
  },
  {
    question:
      "Which property is used to set the position of an element in CSS?",
    options: ["position", "location", "alignment", "place"],
    correctAnswer: "position",
    explanation:
      "The position property sets the positioning scheme of an element, such as static, relative, absolute, or fixed.",
  },
  {
    question: "How do you set the display of an element to inline in CSS?",
    options: [
      "display: inline;",
      "display: block;",
      "display: none;",
      "display: flex;",
    ],
    correctAnswer: "display: inline;",
    explanation:
      "The display: inline; property makes an element behave as an inline element, not starting on a new line and only taking up as much width as necessary.",
  },
  {
    question: "Which property is used to set the width of a border in CSS?",
    options: [
      "border-width",
      "border-thickness",
      "border-size",
      "border-style",
    ],
    correctAnswer: "border-width",
    explanation:
      "The border-width property sets the width of the border surrounding an element.",
  },
  {
    question:
      "How do you hide an element in CSS without removing it from the document flow?",
    options: [
      "visibility: hidden;",
      "display: none;",
      "opacity: 0;",
      "position: absolute;",
    ],
    correctAnswer: "visibility: hidden;",
    explanation:
      "The visibility: hidden; property hides an element but keeps its space in the layout, unlike display: none; which removes the element entirely from the document flow.",
  },
  {
    question: "Which CSS property is used to set the space between elements?",
    options: ["margin", "padding", "border", "spacing"],
    correctAnswer: "margin",
    explanation:
      "The margin property sets the space outside an element's border, affecting its distance from adjacent elements.",
  },
  {
    question: "How do you apply a CSS style to the third child of a container?",
    options: [
      ":nth-child(3)",
      ":third-child",
      ":nth-of-type(3)",
      ":first-child(3)",
    ],
    correctAnswer: ":nth-child(3)",
    explanation:
      "The :nth-child(3) pseudo-class selects the third child element of its parent, allowing for specific styling.",
  },
  {
    question:
      "Which property is used to set the color of the text shadow in CSS?",
    options: ["text-shadow", "shadow-color", "text-color", "shadow"],
    correctAnswer: "text-shadow",
    explanation:
      "The text-shadow property adds shadow effects to text, including color, blur radius, and offset.",
  },
];
